/*

Typescript Algorithm Challenge

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string)
and outputs names of all the descendants of the search string

*/

export function findByName(head, name) {
  if (!("children" in head)) {
    return {};
  }
  for (const person of head.children) {
    if (person.name === name) {
      return person;
    }
    const result = findByName(person, name);
    if (result) {
      if (result.name === name) {
        return result;
      }
    }
  }
  return undefined;
}
export function findDescendants(head) {
  let matches = [];
  if (head) {
    if ("children" in head) {
      head.children.forEach(person => {
        matches = [...matches, person.name, ...findDescendants(person)];
      });
    }
  }
  return matches;
}

export function search(person, text) {
  const startIPerson = findByName(person, text);
  return findDescendants(startIPerson);
}

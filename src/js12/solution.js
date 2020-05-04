// Asynchronous - This challenge will involve using promises to deal with asynchronous functions

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You nust fetch the people, convert it to json and return the people
 * @returns {array} the people array of objects
 */
export const getData = () => {
  return fetch("./data")
    .then((result) => result.json())
    .then((people) => {
      return people;
    });
};

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a new array of just the names of the people
 * @return {array} ["Peter", "Joanna" etc.]
 */
export const getNames = () => {
  return fetch("./data")
    .then((result) => result.json())
    .then((people) => {
      return people.map((person) => person.name);
    });
};

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a single person object that matches the provided id
 * @param {string} id - id of person
 * @returns {object} person object
 */
export const getPerson = (id) => {
  return fetch("./data")
    .then((result) => result.json())
    .then((people) => {
      return people.find((person) => person.id === id);
    });
};

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a new array of objects that have been filtered down to only people where employed = true
 * @returns {array} of people objects that are employed
 */
export const getEmployedPeople = () => {
  return fetch("./data")
    .then((result) => result.json())
    .then((people) => {
      return people.filter((person) => person.employed);
    });
};

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people data and return a new array of objects that have been filtered down to people who match the interest provided
 * @param {string} interest
 * @returns {array} of people objects who have a matching interest
 */
export const filterByInterest = (interest) => {
  return fetch("./data")
    .then((result) => result.json())
    .then((people) => {
      return people.filter((person) => person.interests.includes(interest));
    });
};

let firstName = "Bob";
let lastName = "Smith";
let myAge = 22;
let maryAge = 33;

export const greet = () => {
  return "Hello, My name is " + firstName + " " + lastName;
};

export const maryAgeDifference = () => {
  let ageDifference = maryAge - myAge;
  return "Mary is " + ageDifference + " years older than me";
};

export const nameLength = () => {
  let totalLength = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
};

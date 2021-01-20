/* JS2 builds on the previous challenges and adds the use of functions with parameters */

/**
 * A function that uses the function parameters to output "Hi John, you are great!"
 *
 * @return {string} Hi John, you are great!
 */
export const greet = (firstName) => {
  return "Hi " + firstName + ", you are great!";
};

/**
 * A function that uses the function parameters to calculate the age differences and outputs a string e.g.
 * "The age difference between person 1 and person 2 is 10 years"
 *
 * @return {string} The age difference between person 1 and person 2 is 10 years
 */
export const calculateAgeDifference = (age1, age2) => {
  const ageDifference = Math.abs(age1 - age2);
  return "The age difference between person 1 and person 2 is " + ageDifference + " years";
};

/**
 * A function that uses the function parameters to calcualte the length of the provided names and 
 * retruns a string e.g. "The total length of the names provided is 10 characters"
 *
 * @return {string} The total length of the names provided is 10 characters
 */
export const totalNameLength = (firstName, lastName) => {
  const totalNameLength = firstName.length + lastName.length;
  return "The total length of the names provided is " + totalNameLength + " characters"
};

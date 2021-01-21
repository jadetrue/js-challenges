/* JS2 builds on the previous challenges and adds the use of functions with parameters */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that concatenates two strings together with a space in between them.
 *
 * @param {string} firstName John
 * @param {string} lastName Smith
 * @returns {string} John Smith
 */
export const createFullName = (firstName, lastName) => {
  const fullName = firstName + " " + lastName;

  return fullName;
};

/**
 * A function that takes two numbers as an input and returns the smallest one.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 100
 * @param {number} number2 200
 * @returns {number} 100
 */
export const findSmallestNumber = (number1, number2) => {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
};

/**
 * A function that takes two numbers as input, multiplies them together and returns the product.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 3
 * @param {number} number2 6
 * @returns {number} 18
 */
export const multiplyNumbers = (number1, number2) => {
  const product = number1 * number2;

  return product;
};

/* Intermediate Challenges */

/**
 * A function that converts a temperature a in celsuis to farenheit and outputs it in a string format -> "15 degrees celsius is 59 degrees farenheit".
 *
 * @param {number} tempInCelsius 15
 * @returns {string} "15 degrees celsius is 59 degrees farenheit"
 */
export const celsiusToFarenheit = (tempInCelsius) => {
  const tempInFarenheit = (tempInCelsius * 9) / 5 + 32;

  const temperatureString = tempInCelsius + " degrees celsius is " + tempInFarenheit + " degrees farenheit";

  return temperatureString;
};

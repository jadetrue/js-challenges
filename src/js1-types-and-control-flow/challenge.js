/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

const string1 = "Hello";
const string2 = "World!";

/**
 * A Function that programmatically concatenates two strings together.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} Hello World!
 */
const concatenateStrings = () => {
  const returnString = string1 + " " + string2;

  return returnString;
};

const largeNumber1 = 100;
const largeNumber2 = 200;

/**
 * A Function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const findLargestNumber = () => {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
};

const addNumber1 = 12;
const addNumber2 = 24;

/**
 * A Function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumbers = () => {
  const sum = addNumber1 + addNumber2;

  return sum;
};

/* Intermediate Challenges */

const longString = "I am a very very very very very long string";

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const findLengthOfString = () => {
  const lengthOfString = longString.length;

  return lengthOfString;
};

const thing = "I am a thing";

const findType = () => {
  const thingType = typeof thing;
};

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
export const concatenateStrings = () => {
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
export const findLargestNumber = () => {
  if (largeNumber1 > largeNumber2) {
    return largeNumber1;
  } else {
    return largeNumber2;
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
export const addNumbers = () => {
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
export const findLengthOfString = () => {
  const lengthOfString = longString.length;

  return lengthOfString;
};

const thing = "I am a thing";

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
export const findType = () => {
  const thingType = typeof thing;

  if (thingType === "string") {
    return "This is a string";
  } else if (thingType === "number") {
    return "This is a number";
  } else if (thingType === "boolean") {
    return "This is a boolean";
  } else {
    return "I don't know what this thing is";
  }
};

const nameTagOption = "Timothy";

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
export const getIsValidOnNameTag = () => {
  const firstLetterOfName = nameTagOption.substring(0, 1);
  const isValidName = nameTagOption.length <= 8 && firstLetterOfName === firstLetterOfName.toUpperCase();

  return isValidName;
};

/* Advanced Challenges */

const stringToConvert = "14.45";

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
export const convertStringToNumber = () => {
  const convertedString = parseFloat(stringToConvert);

  return convertedString;
};

const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

/**
 * A function to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * @returns {boolean} true || false
 */
export const getHasUppercaseLetters = () => {
  const regex = /([A-Z])/g;
  const hasUpperCaseLetters = regex.test(stringWithUppercaseLetters);

  return hasUpperCaseLetters;
};

/* Expert Challenge */

const pascalCaseVariableName = "IWantToBeSnakeCase";

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
export const convertPascalCaseToSnakeCase = () => {
  const splitWords = pascalCaseVariableName.split(/(?=[A-Z])/);
  const joinedWordsWithUnderscores = splitWords.join("_");
  const snakeCase = joinedWordsWithUnderscores.toLowerCase();

  return snakeCase;
};

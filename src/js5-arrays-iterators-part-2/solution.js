/* This challenge builds on the previous challenges and adds the use of loops */

/**
 * The function that will take an array of colors.
 * It will test whether each item in the array is not a pre-approved colour (red, green, blue).
 * for each item in the array that does not match the pre-approved colours, it will be replaced with "red"
 * This should not mutate the provided array.
 * 
 * @param {array} colours - An array of colours e.g. ["red", "yellow"]
 * @return {array} A list of updated colours e.g. ["red", "red"]
 */
export const replaceColours = (colours) => {
  let newColours = [...colours];
  for (let i = 0; i < colours.length; i++){
    if( colours[i] != "red" && colours[i] != "green" && colours[i] != "blue"){
      newColours[i] = "red";
    }
  }
  return newColours;
};

/**
* A function that takes a string and checks to see if it is a palindrome (noon, anna, madam are all palindromes)
* returns true or false
*
* @param {string} word - the word to be checked
* @returns {boolean} true if the word is a palindrome, false otherwise
*/
export const palindromeChecker = (word) => {
  const reverseWord = word.split("").reverse().join("");
  return reverseWord === word
}

/**
* A function that takes in an array of words, checks if each word is a palindrome and returns
* a new array containing only the words that are palindromes
*
* @param {array} words - the words to be checked
* @returns {array} List of all the words that are palindromes
*/
export const getAllPalindromes = (words) => {
  let palindromes = [];
  for (let i = 0; i < words.length; i++){
    if (palindromeChecker(words[i])){
      palindromes.push(words[i]);
    }
  }
  return palindromes;
}
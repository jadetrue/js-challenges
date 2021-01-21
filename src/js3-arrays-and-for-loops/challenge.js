/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @return {string} e.g. (["Bacon","Lettuce","Tomato"]) => "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => {
  return
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @return {array} e.g (["Tony","John","Dave"]) => ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  return;
};

/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @return {number} e.g ([1,2,3]) => 6
 */

export const totalScores = (scoresArr) => {
  return;
};

/**
 * Intermediate Challenges
 */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 *
 * @return {number} e.g. (10) => 0+1+2+3+4+5+6+7+8+9+10 => 55
 */

export const totalRange = (number) => {
  return;
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @return {array} e.g. (["Tony","John","Dave"]) => ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  return;
};

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array.Clone it first and then mutate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @return {number} e.g. ([1,1,8,1,1,8]) => [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  return;
};

/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @return {number} e.g. ([1,2,3]) => 2
 */

export const generateAverage = (numberArr) => {
  return;
};

/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @return {number} e.g. ([1,2,3]) => [3,2,1]
 */
export const reverseOrder = (array) => {
  return;
};

/**
 * Expert Challenge
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score.
 * Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 ** @return {array} e.g. (["Tony","John","Dave"],[45,55,66]) => ["P:1 Dave scored 45","P:2 Tony scored 55","P:3 John scored 66"]
 */

export const generateHighscores = (players, highscores) => {
  return;
};

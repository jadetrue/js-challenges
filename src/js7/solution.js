/* Array iterators */

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
 * a new array containing only the words that are palindromes.
 * You should use an array iterator method, not a for loop!
 *
 * @param {array} words - the words to be checked
 * @returns {array} List of all the words that are palindromes
 */
export const getAllPalindromes = (words) => {
    return words.filter(palindromeChecker);
}
/* Functions as arguments (callbacks) */

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
* A function that takes a string and checks to see if it contains vowels
* returns true or false
*
* @param {string} word - the word to be checked
* @returns {boolean} true if the word contains vowels, false otherwise
*/
export const vowelChecker = (word) => {
  return /[a,e,i,o,u]/.test(word);
}

/**
* A function that takes a word and a function as arguments
* First check to see if the word is a valid string, it contains atleast 1 letter and is exactly 1 word, not two or more
* If the word is a valid single word, call the provided function with the word and return the output
* If not a valid single word then return 'Input must be a valid single word'
*
* @param {string} word - the word to be checked
* @param {function} wordCheckCallback - A function to execute with a valid word
* @returns {boolean | string} true or false for a valid word
*/
export const useWordCheckCallback = (word, wordCheckCallback) => {
 if (typeof word === "string" && word !== "" && word.indexOf(" ") < 0 ){
   return wordCheckCallback(word);
 }
 return "Input must be a valid single word";
}

/**
* A function that takes an array of words and a function as arguments
* Check each word to see if it is a valid string, it contains atleast 1 letter and is exactly 1 word, not two or more
* If the word is a valid single word, call the provided function with the word
* for all valid words that pass the function, add to an new array and return that array
*
* @param {array} words - the words to be checked
* @param {function} wordCheckCallback - A function to execute with a valid word
* @returns {array} list of all valid words that pass the check
*/
export const checkWords = (words, wordCheckCallback) => {
  let validWords = [];
  for (let i = 0; i < words.length; i++){
    let result = useWordCheckCallback(words[i], wordCheckCallback);
    if (result && typeof result === "boolean"){
      validWords.push(words[i]);
    }
  }
  return validWords;
}


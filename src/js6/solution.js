/* Functions as arguments */


export const palindromeChecker = (word) => {
  const reverseWord = word.split("").reverse().join("");
  return reverseWord === word
}

export const getAllPalindromes = (words) => {
  let palindromes = [];
  for (let i = 0; i < words.length; i++){
    if (palindromeChecker(words[i])){
      palindromes.push(words[i]);
    }
  }
  return palindromes;
}


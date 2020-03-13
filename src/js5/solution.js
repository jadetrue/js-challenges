/* This challenge builds on the previous challenges and adds the use of loops */

/**
 * The function that will take an array of colors.
 * It will test whether each item in the array is not a pre-approved colour (red, green, blue).
 * for each item in the array that does not match the pre-approved colours, it will be replaced with "red"
 * This should not mutate the provided array.
 * 
 * @param {array} colours - An array of colours e.g. ["red", "yellow"]
 * @return {array} updatedColours - A list of updated colours e.g. ["red", "red"]
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

export const palindromeChecker = (word) => {
  

}

export const reverseStringsInArray = (names) => {
  for (let i = 0; i < names.length; i++){

  }
}
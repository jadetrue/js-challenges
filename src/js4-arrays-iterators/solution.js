/* JS3 builds on the previous challenges and adds the use of Arrays */

/**
 * A function that will take two array arguments.
 * The function will combine both arrays together into a single array and return it.
 * 
 * @param {array} list1 - An array e.g. ["red", "blue"]
 * @param {array} list2 - An array e.g ["hello", "goodbye"]
 * @return {array} A merged array
 */
export const mergeArrays = (list1, list2) => {
  const mergedLists = list1.concat(list2);
  return mergedLists;
};

/**
 * A function that will take two arguments: an array of colors and an index.
 * The function will test whether the item at index is not a pre-approved colour (red, green, blue).
 * If the colour at the index is not pre-approved, the colour will be deleted.
 * This should not mutate the provided array.
 * 
 * @param {array} colours - An array of colours e.g. ["red", "blue"]
 * @param {number} index - Index of the array item to test
 * @return {array} A list of updated colours
 */
export const checkColour = (colours, index) => {
  const selectedColour = colours[index];
  if( selectedColour === "red" || selectedColour == "green" || selectedColour == "blue")
    return colours;
  let newColours = [...colours];
  newColours.splice(index, 1);
  return newColours;
};
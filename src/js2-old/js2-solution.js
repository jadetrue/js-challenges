const isPrimary = color =>
  color == "red" || color == "yellow" || color == "blue";

export const fixColors = (colorArray, index) => {
  let clonedArray = [...colorArray];
  !isPrimary(clonedArray[index]) ? (clonedArray[index] = "red") : null;
  return clonedArray;
};

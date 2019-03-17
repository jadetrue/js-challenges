
const isPrimary = (color) => (color == "red") || (color == "yellow") || (color == "blue");

export const fixColors = (colorArray, index) => {
    let clonedArray = colorArray.slice(0);
    !isPrimary(clonedArray[index]) ? clonedArray[index] = "red" : null;
    return clonedArray;
};

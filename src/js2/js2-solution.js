
function isPrimary(color) {
    return (color == "red") || (color == "yellow") || (color == "blue");
}

exports.fixColors = function(colorArray, index) {
    var clonedArray = colorArray.slice(0);
    if(!isPrimary(clonedArray[index])) {
      clonedArray[index] = "red";
    }
    return clonedArray;
};

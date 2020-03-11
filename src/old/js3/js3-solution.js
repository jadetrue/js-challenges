
/*
Create exports. that = function return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

exports.minDateableAge = function(age){
  return (age / 2) + 7;
};

exports.hasFever = function(tempInCelsius){
  return tempInCelsius >= 37.5;
};

exports.calcTVHeight = function(width) {
  return (width / 16) * 9;
};

exports.couldDate = function(age1, age2) {
  if(age1 == age2) return true;
  var orderedAges = [age1,age2].sort();
  var lowerAge = orderedAges[0];
  var minAge = exports.minDateableAge(orderedAges[1]);
  return lowerAge >= minAge;
};

function floor(number, amount) {
  return (number - amount < 0) ? 0 : number - amount;
}

exports.colorDarken = function(rgbArray, darkenAmount) {
  var red = floor(rgbArray[0], darkenAmount);
  var green = floor(rgbArray[1], darkenAmount);
  var blue = floor(rgbArray[2], darkenAmount);
  
  return [red, green, blue];
};


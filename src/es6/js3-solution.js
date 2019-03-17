
/*
Create const  that =  return the following:

minDateableAge() => {} // half your age + 7
hasFever() => {} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate() => {} // two people, could they date (deal with ages either way round)
colorDarken() => {} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export const minDateableAge = (age) => {
  return (age / 2) + 7;
};

export const hasFever = (tempInCelsius) => {
  return tempInCelsius >= 37.5;
};

export const calcTVHeight = (width) => {
  return (width / 16) * 9;
};

export const couldDate = (age1, age2) => {
  if (age1 == age2) return true;
  let orderedAges = [age1,age2].sort();
  let lowerAge = orderedAges[0];
  let minAge = minDateableAge(orderedAges[1]);
  return lowerAge >= minAge;
};

const floor = (number, amount) => {
  return (number - amount < 0) ? 0 : number - amount;
}

export const colorDarken = (rgbArray, darkenAmount) => {
  let red = floor(rgbArray[0], darkenAmount);
  let green = floor(rgbArray[1], darkenAmount);
  let blue = floor(rgbArray[2], darkenAmount);
  
  return [red, green, blue];
};


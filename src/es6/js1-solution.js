
let firstName = "Bob";
let lastName = "Smith";
let myAge = 22;
let maryAge = 33;

exports.greet = function() {
  return "Hello, My name is " + firstName + " " + lastName;
};

exports.maryAgeDifference = function() {
    let ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
};

exports.nameLength = function() {
  let totalLength = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
};

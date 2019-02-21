var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

exports.greet = function() {
  return "Hello, My name is " + firstName + " " + lastName;
};

exports.maryAgeDifference = function() {
    var ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
};

exports.nameLength = function() {
  var totalLength = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
};

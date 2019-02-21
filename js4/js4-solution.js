var data = require("./js4-data");
people=data.people;

exports.isVegetarian = function(personID) {
  return people[personID][3];
};

exports.canFitOnANameCard = function(personID) {
  var name = people[personID][0];
  return (name.length <= 6);
};

exports.getLifeExpectancy = function(personID) {
  return isVegetarian(personID) ? 90:95;
};

exports.yearsRemaining = function(personID) {
  var lifeExpectancy = getLifeExpectancy(personID);
  var age = people[personID][1];
  return lifeExpectancy - age;
};

exports.canRideOnARollercoaster = function(personID) {
  var height = people[personID][2];
  return (height >= 120);
};

exports.canBuyBeer = function(personID) {
  var age=people[personID][1];
  return (age >= 18);
};

exports.getSummary = function(personID) {
  var name = people[personID][0];
  var height = people[personID][2];

  var vegetarianMessage = isVegetarian(personID) ? "is a vegetarian" : "likes meat"; 
  
  if(yearsRemaining(personID)<0){
    deadMessage = "should be dead";
  } else {
    deadMessage = "has " + yearsRemaining(personID) + " years to live";
  }
  
  return name + " " + vegetarianMessage + ", is " + height + "cm tall and " + deadMessage;
};

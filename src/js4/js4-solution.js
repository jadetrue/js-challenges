
var data = require("./js4-data");
var people = data.people;

function isVegetarian(personID) {
  return people[personID][3];
}

function canFitOnANameCard(personID) {
  var name = people[personID][0];
  return (name.length <= 6);
}

function getLifeExpectancy(personID) {
  return isVegetarian(personID) ? 90:95;
}

function yearsRemaining(personID) {
  var lifeExpectancy = getLifeExpectancy(personID);
  var age = people[personID][1];
  return lifeExpectancy - age;
}

function canRideOnARollercoaster(personID) {
  var height = people[personID][2];
  return (height >= 120);
}

function canBuyBeer(personID) {
  var age=people[personID][1];
  return (age >= 18);
}

function getSummary(personID) {
  var name = people[personID][0];
  var height = people[personID][2];
  var deadMessage = "should be dead";
  var vegetarianMessage = isVegetarian(personID) ? "is a vegetarian" : "likes meat"; 
  
  if(yearsRemaining(personID) >= 0) {
    deadMessage = "has " + yearsRemaining(personID) + " years to live";
  }
  
  return name + " " + vegetarianMessage + ", is " + height + "cm tall and " + deadMessage;
}

module.exports = {
  isVegetarian: isVegetarian,
  canFitOnANameCard: canFitOnANameCard,
  getLifeExpectancy: getLifeExpectancy,
  yearsRemaining: yearsRemaining,
  canRideOnARollercoaster: canRideOnARollercoaster,
  canBuyBeer: canBuyBeer,
  getSummary: getSummary
};
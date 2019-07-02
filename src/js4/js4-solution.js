import { people } from "./js4-data";

const isVegetarian = personID => people[personID][3];

const canFitOnANameCard = personID => {
  let name = people[personID][0];
  return name.length <= 6;
};

const getLifeExpectancy = personID => (isVegetarian(personID) ? 90 : 95);

const yearsRemaining = personID => {
  let lifeExpectancy = getLifeExpectancy(personID);
  let age = people[personID][1];
  return lifeExpectancy - age;
};

const canRideOnARollercoaster = personID => {
  let height = people[personID][2];
  return height >= 120;
};

const canBuyBeer = personID => {
  let age = people[personID][1];
  return age >= 18;
};

const getSummary = personID => {
  let name = people[personID][0];
  let height = people[personID][2];
  let deadMessage = "should be dead";
  let vegetarianMessage = isVegetarian(personID)
    ? "is a vegetarian"
    : "likes meat";

  if (yearsRemaining(personID) >= 0) {
    deadMessage = "has " + yearsRemaining(personID) + " years to live";
  }

  return (
    name +
    " " +
    vegetarianMessage +
    ", is " +
    height +
    "cm tall and " +
    deadMessage
  );
};

export {
  isVegetarian,
  canFitOnANameCard,
  getLifeExpectancy,
  yearsRemaining,
  canRideOnARollercoaster,
  canBuyBeer,
  getSummary
};

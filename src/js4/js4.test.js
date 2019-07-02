var solution = require("./js4-solution");
if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__)
  solution = require("./js4-challenge");

var people = [
  //name, age, height, isVegetarian
  ["Bob", 12, 110, true],
  ["Harigon", 63, 150, true],
  ["Thomas", 18, 121, false],
  ["Sarah", 17, 119, false],
  ["Lucy", 78, 140, true],
  ["Dave", 93, 210, false],
  ["Doris", 94, 80, true]
];

test("is Vegetarian", function() {
  expect(solution.isVegetarian(0)).toBeTruthy();
  expect(solution.isVegetarian(2)).toBeFalsy();
  expect(solution.isVegetarian(5)).toBeFalsy();
});

test("Can fit on name card", function() {
  expect(solution.canFitOnANameCard(0)).toBeTruthy();
  expect(solution.canFitOnANameCard(1)).toBeFalsy();
  expect(solution.canFitOnANameCard(2)).toBeTruthy();
});

test("Life expectancy", function() {
  expect(solution.getLifeExpectancy(0)).toBe(90);
  expect(solution.getLifeExpectancy(3)).toBe(95);
});

test("Years remaining", function() {
  expect(solution.yearsRemaining(0)).toBe(78);
  expect(solution.yearsRemaining(3)).toBe(78);
  expect(solution.yearsRemaining(5)).toBe(2);
  expect(solution.yearsRemaining(6)).toBe(-4);
});

test("Can ride on a rollercoaster", function() {
  expect(solution.canRideOnARollercoaster(1)).toBeTruthy();
  expect(solution.canRideOnARollercoaster(2)).toBeTruthy();
  expect(solution.canRideOnARollercoaster(3)).toBeFalsy();
});

test("Can ride on a rollercoaster", function() {
  expect(solution.canBuyBeer(2)).toBeTruthy();
  expect(solution.canBuyBeer(3)).toBeFalsy();
  expect(solution.canBuyBeer(5)).toBeTruthy();
});

test("Summary", function() {
  expect(solution.getSummary(0)).toBe(
    "Bob is a vegetarian, is 110cm tall and has 78 years to live"
  );
  expect(solution.getSummary(2)).toBe(
    "Thomas likes meat, is 121cm tall and has 77 years to live"
  );
  expect(solution.getSummary(6)).toBe(
    "Doris is a vegetarian, is 80cm tall and should be dead"
  );
});

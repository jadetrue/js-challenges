import { people } from "./js6-data";
import { Person } from "./js6-solution";

const bob = new Person(people[0]);
const harigon = new Person(people[1]);
const thomas = new Person(people[2]);
const sarah = new Person(people[3]);
const dave = new Person(people[5]);
const doris = new Person(people[6]);

test("is Vegetarian", () => {
  expect(bob.isVegetarian).toBeTruthy();
  expect(harigon.isVegetarian).toBeTruthy();
  expect(thomas.isVegetarian).toBeFalsy();
});

test("Can fit on name card", () => {
  expect(bob.canFitOnANameCard).toBeTruthy();
  expect(harigon.canFitOnANameCard).toBeFalsy();
  expect(thomas.canFitOnANameCard).toBeTruthy();
});

test("Life expectancy", () => {
  expect(bob.lifeExpectancy).toBe(90);
  expect(harigon.lifeExpectancy).toBe(90);
  expect(thomas.lifeExpectancy).toBe(95);
});

test("Years remaining", () => {
  expect(bob.yearsRemaining).toBe(78);
  expect(sarah.yearsRemaining).toBe(78);
  expect(dave.yearsRemaining).toBe(2);
  expect(doris.yearsRemaining).toBe(-4);
});

test("Can ride on a rollercoaster", () => {
  expect(harigon.canRideOnARollercoaster).toBeTruthy();
  expect(thomas.canRideOnARollercoaster).toBeTruthy();
  expect(sarah.canRideOnARollercoaster).toBeFalsy();
});

test("Can buy beer", () => {
  expect(thomas.canBuyBeer).toBeTruthy();
  expect(sarah.canBuyBeer).toBeFalsy();
  expect(dave.canBuyBeer).toBeTruthy();
});

test("Summary", () => {
  expect(bob.getSummary()).toBe(
    "Bob is a vegetarian, is 110cm tall and has 78 years to live"
  );
  expect(thomas.getSummary()).toBe(
    "Thomas likes meat, is 121cm tall and has 77 years to live"
  );
  expect(doris.getSummary()).toBe(
    "Doris is a vegetarian, is 80cm tall and should be dead"
  );
});

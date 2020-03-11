var solution = require("./js3-solution");
if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__)
  solution = require("./js3-challenge");

test("Minimum dateable age", function() {
  expect(solution.minDateableAge(22)).toBe(18);
  expect(solution.minDateableAge(56)).toBe(35);
});

test("Has fever", function() {
  expect(solution.hasFever(37.4)).toBeFalsy();
  expect(solution.hasFever(37.5)).toBeTruthy();
  expect(solution.hasFever(37.6)).toBeTruthy();
});

test("TV height", function() {
  expect(solution.calcTVHeight(16)).toBe(9);
  expect(solution.calcTVHeight(32)).toBe(18);
});

test("Could date", function() {
  expect(solution.couldDate(18, 22)).toBeTruthy();
  expect(solution.couldDate(22, 18)).toBeTruthy();
  expect(solution.couldDate(22, 22)).toBeTruthy();
  expect(solution.couldDate(34, 56)).toBeFalsy();
  expect(solution.couldDate(56, 34)).toBeFalsy();
});

test("Color darken: Basic Reduction", function() {
  var result = solution.colorDarken([60, 60, 60], 10);
  expect(result[0]).toBe(50);
  expect(result[1]).toBe(50);
  expect(result[2]).toBe(50);
});

test("Color darken: Never go below 0", function() {
  var result = solution.colorDarken([9, 1, 9], 10);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(0);
  expect(result[2]).toBe(0);
});

test("Reduce by a number that is not 10", function() {
  var result = solution.colorDarken([9, 11, 10], 8);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(3);
  expect(result[2]).toBe(2);
});

test("Middle index does not reduce below 0 when low number", function() {
  var result = solution.colorDarken([60, 5, 60], 6);
  expect(result[0]).toBe(54);
  expect(result[1]).toBe(0);
  expect(result[2]).toBe(54);
});

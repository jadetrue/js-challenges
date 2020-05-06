import challenge from './index';

test("Greet various people", () => {
  expect(challenge.greet("John")).toBe("Hi John, you are great!");
  expect(challenge.greet("Mary")).toBe("Hi Mary, you are great!");
});

test("Calculate age difference between two people", () => {
  expect(challenge.calculateAgeDifference(20, 10)).toBe("The age difference between person 1 and person 2 is 10 years");
  expect(challenge.calculateAgeDifference(22, 10)).toBe("The age difference between person 1 and person 2 is 12 years");
  expect(challenge.calculateAgeDifference(10, 22)).toBe("The age difference between person 1 and person 2 is 12 years");
});

test("Dynamically calculate name length", () => {
  expect(challenge.totalNameLength("John", "Smith")).toBe(
    "The total length of the names provided is 9 characters"
  );
  expect(challenge.totalNameLength("Mary", "O'Brian")).toBe(
    "The total length of the names provided is 11 characters"
  );
});
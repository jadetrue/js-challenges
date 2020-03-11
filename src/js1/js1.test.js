import challenge from './index';

test("Greeting for John Smith", function () {
  expect(challenge.greet()).toBe("Hello, my name is John Smith");
});

test("Calculate age difference between Mary and John", function() {
  expect(challenge.calculateAgeDifference()).toBe("Mary is 11 years older than John");
});

test("Dynamically calculate name length", function() {
  expect(challenge.totalNameLength()).toBe(
    "The total length of both names is 20 characters"
  );
});
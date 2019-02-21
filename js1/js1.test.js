var solution = require('./js1-solution');

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

test('Insert first and last name', () => {
  expect(solution.greet()).toBe('Hello, My name is Bob Smith');
});

test('Calculate difference', () => {
  expect(solution.maryAgeDifference()).toBe('Mary is 11 years older than me');
});

test('Dynamically calculate name length', () => {
  expect(solution.nameLength()).toBe('The total length of both names is 8 characters');
})

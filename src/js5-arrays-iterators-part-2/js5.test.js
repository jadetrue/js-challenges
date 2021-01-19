import challenge from './index';

const colours = ["violet", "green", "blue", "yellow", "red"];
const words = ["madam", "sir", "mam", "123", "anna"];
const words2 = ["hello", "Goodbye"];
const words3 = ["hello", "Goodbye", "noon"];

test("Check colour array for any non pre-approved colours", () => {
  expect(challenge.replaceColours(colours)).toMatchObject(["red", "green", "blue", "red", "red"]);
  expect(challenge.replaceColours(colours)).not.toBe(colours);
});

test("Check pallindromes can be detected", () => {
  expect(challenge.palindromeChecker("noon")).toBe(true);
  expect(challenge.palindromeChecker("racecar")).toBe(true);
  expect(challenge.palindromeChecker("civic")).toBe(true);
  expect(challenge.palindromeChecker("town")).toBe(false);
  expect(challenge.palindromeChecker("grasp")).toBe(false);
  expect(challenge.palindromeChecker("terrible")).toBe(false);
  expect(challenge.palindromeChecker("")).toBe(true);
})

test("Retrieve all pallindromes in a word list", () => {
  expect(challenge.getAllPalindromes(words)).toMatchObject(["madam", "mam", "anna"]);
  expect(challenge.getAllPalindromes(words2)).toMatchObject([]);
  expect(challenge.getAllPalindromes(words3)).toMatchObject(["noon"]);
});

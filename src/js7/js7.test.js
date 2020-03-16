import challenge from './index';

const words = ["madam", "sir", "mam", "123", "anna"];
const words2 = ["hello", "Goodbye"];
const words3 = ["hello", "Goodbye", "noon"];

test("Check pallindromes can be detected", () => {
  expect(challenge.palindromeChecker("noon")).toBe(true);
  expect(challenge.palindromeChecker("town")).toBe(false);
  expect(challenge.palindromeChecker("")).toBe(true);
})

test("Retrieve all pallindromes in a word list", () => {
  expect(challenge.getAllPalindromes(words)).toMatchObject(["madam", "mam", "anna"]);
  expect(challenge.getAllPalindromes(words2)).toMatchObject([]);
  expect(challenge.getAllPalindromes(words3)).toMatchObject(["noon"]);
});

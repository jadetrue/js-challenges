import challenge from './index';

const words = ["madam", "sir", "mam", 111, "anna"];

test("Check pallindromes can be detected", () => {
  expect(challenge.palindromeChecker("noon")).toBe(true);
  expect(challenge.palindromeChecker("town")).toBe(false);
  expect(challenge.palindromeChecker("")).toBe(true);
});

test("See if words contain vowels", () => {
  expect(challenge.vowelChecker("noon")).toBe(true);
  expect(challenge.vowelChecker("town")).toBe(true);
  expect(challenge.vowelChecker("")).toBe(false);
  expect(challenge.vowelChecker("sky")).toBe(false);
});

test("Test various words to see if they are palindromes or contain vowels", () => {
  expect(challenge.useWordCheckCallback("noon", challenge.palindromeChecker)).toBe(true);
  expect(challenge.useWordCheckCallback("town", challenge.palindromeChecker)).toBe(false);
  expect(challenge.useWordCheckCallback("noon", challenge.vowelChecker)).toBe(true);
  expect(challenge.useWordCheckCallback("town", challenge.vowelChecker)).toBe(true);
  expect(challenge.useWordCheckCallback("sky", challenge.vowelChecker)).toBe(false);
  expect(challenge.useWordCheckCallback("", challenge.vowelChecker)).toBe("Input must be a valid single word");
  expect(challenge.useWordCheckCallback("two words", challenge.vowelChecker)).toBe("Input must be a valid single word");
  expect(challenge.useWordCheckCallback(123, challenge.vowelChecker)).toBe("Input must be a valid single word");
});

test("", () => {
  expect(challenge.checkWords(words, challenge.vowelChecker)).toMatchObject(["madam", "sir", "mam", "anna"]);
  expect(challenge.checkWords(words, challenge.palindromeChecker)).toMatchObject(["madam", "mam", "anna"]);
});

import challenge from './index';

const words = ["madam", "sir", "mam", "123", "anna"];
const words2 = ["hello", "Goodbye"];
const words3 = ["hello", "Goodbye", "noon"];

test("Check colour array for any non pre-approved colours", () => {
  expect(challenge.getAllPalindromes(words)).toMatchObject(["madam", "mam", "anna"]);
  expect(challenge.getAllPalindromes(words2)).toMatchObject([]);
  expect(challenge.getAllPalindromes(words3)).toMatchObject(["noon"]);
});


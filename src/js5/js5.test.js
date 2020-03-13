import challenge from './index';

const colours = ["violet", "green", "blue", "yellow", "red"];

test("Check colour array for any non pre-approved colours", () => {
  expect(challenge.replaceColours(colours)).toMatchObject(["red", "green", "blue", "red", "red"]);
  expect(challenge.replaceColours(colours)).not.toBe(colours);
});


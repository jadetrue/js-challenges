import challenge from './index';

const colours = ["violet", "green", "blue", "yellow", "red"];
const names = ["Liam", "Shea", "Matt", "Ollie"];

test("Merge two arrays together", () => {
  expect(challenge.mergeArrays(colours, names)).toMatchObject(["violet", "green", "blue", "yellow", "red", "Liam", "Shea", "Matt", "Ollie"]);
  expect(challenge.mergeArrays(names, colours)).toMatchObject(["Liam", "Shea", "Matt", "Ollie", "violet", "green", "blue", "yellow", "red"]);
});

test("Check various indices", () => {
  expect(challenge.checkColour(colours, 0)).toMatchObject(["green", "blue", "yellow", "red"]);
  expect(challenge.checkColour(colours, 1)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
  expect(challenge.checkColour(colours, 2)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
  expect(challenge.checkColour(colours, 3)).toMatchObject(["violet", "green", "blue", "red"]);
  expect(challenge.checkColour(colours, 4)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
});


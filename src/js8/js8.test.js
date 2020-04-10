import challenge from "./index";
import { person1, person2, person3 } from "./data";

test("Check if People are rich", () => {
  expect(challenge.isRich(person1)).toBe(false);
  expect(challenge.isRich(person2)).toBe(true);
});

test("If two peoples eye colours match", () => {
  expect(challenge.matchingEyeColour(person1, person2)).toBe(true);
  expect(challenge.matchingEyeColour(person1, person3)).toBe(false);
});

test("A year has passed, update the person data", () => {
  const person1Copy = { ...person1 };
  challenge.yearPassed(person1Copy);
  expect(person1).not.toMatchObject(person1Copy);
  expect(person1Copy.age).toBe(person1.age + 1);
});

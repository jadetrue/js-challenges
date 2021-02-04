import * as challenge from "./challenge";
import people from "./data";

test("Should return a list of names", () => {
  expect(challenge.getNames(people)).toMatchObject(["Elizabeth Bennet", "Fitzwilliam Darcy", "Jane Bennet"]);
});

test("Should return an array of people objects with matching eye colours", () => {
  expect(challenge.getMatchingEyeColour(people, "brown").length).toBe(2);
  expect(challenge.getMatchingEyeColour(people, "brown")[0].id).toBe("001");
  expect(challenge.getMatchingEyeColour(people, "brown")[1].id).toBe("002");
  expect(challenge.getMatchingEyeColour(people, "blue").length).toBe(1);
  expect(challenge.getMatchingEyeColour(people, "blue")[0].id).toBe("003");
  expect(challenge.getMatchingEyeColour(people, "green").length).toBe(0);
  expect(challenge.getMatchingEyeColour(people, "green")[0]).toBe(undefined);
});

test("Should return person object with highest fortune", () => {
  expect(challenge.getLargestFortune(people).id).toBe("002");
});

test("Should return an array of person objects after running the calculateFinancesYearEnd method and incrementing the age", () => {
  const result = challenge.getEndOfYearFinances(people);
  expect(result.length).toBe(3);
  expect(result[0].id).toBe("001");
  expect(result[0].age).toBe(21);
  expect(result[0].currentFortune).toBe(200);
  expect(result[1].id).toBe("002");
  expect(result[1].age).toBe(28);
  expect(result[1].currentFortune).toBe(35000);
  expect(result[2].id).toBe("003");
  expect(result[2].age).toBe(23);
  expect(result[2].currentFortune).toBe(200);
});

var data = require("./js7-data");
var solution = require("./js7-solution");
if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__)
  solution = require("./js7-challenge");
var liz = data.liz;

test("Find by name", () => {
  expect(solution.findByName(liz, "Charles").name).toBe(liz.children[0].name);
  expect(solution.findByName(liz, "William").name).toBe(
    liz.children[0].children[0].name
  );
  expect(solution.findByName(liz, "Andrew").name).toBe(liz.children[2].name);
  expect(solution.findByName(liz, "Anne").name).toBe(liz.children[1].name);
  expect(solution.findByName(liz, "Harry").name).toBe(
    liz.children[0].children[1].name
  );
});

test("Find Descendants for Charles", () => {
  const result = solution.findDescendants(liz.children[0]);
  expect(result[0]).toBe("William");
  expect(result[1]).toBe("George");
  expect(result[2]).toBe("Charlotte");
  expect(result[3]).toBe("Louis");
  expect(result[4]).toBe("Harry");
});

test("Find Descendants for William", () => {
  const result = solution.findDescendants(liz.children[0].children[0]);
  expect(result[0]).toBe("George");
  expect(result[1]).toBe("Charlotte");
  expect(result[2]).toBe("Louis");
});

test("Find Descendants for Andrew", () => {
  const result = solution.findDescendants(liz.children[2]);
  expect(result[0]).toBe("Beatrice");
  expect(result[1]).toBe("Eugenie");
});

test("Find Descendants for Anne", () => {
  const result = solution.findDescendants(liz.children[1]);
  expect(result[0]).toBe("Peter");
  expect(result[1]).toBe("Savannah");
  expect(result[2]).toBe("Isla");
  expect(result[3]).toBe("Zara");
  expect(result[4]).toBe("Mia");
  expect(result[5]).toBe("Lena");
});

test("Find Descendants for Harry", () => {
  expect(solution.findDescendants(liz.children[0].children[1]).length).toBe(0);
});

test("Search Charles", () => {
  const result = solution.search(liz, "Charles");
  expect(result.length).toBe(5);
  expect(result[0]).toBe("William");
  expect(result[1]).toBe("George");
  expect(result[2]).toBe("Charlotte");
  expect(result[3]).toBe("Louis");
  expect(result[4]).toBe("Harry");
});

test("Search William", () => {
  const result = solution.search(liz, "William");
  expect(result[0]).toBe("George");
  expect(result[1]).toBe("Charlotte");
  expect(result[2]).toBe("Louis");
});

test("Search Andrew", () => {
  const result = solution.search(liz, "Andrew");
  expect(result[0]).toBe("Beatrice");
  expect(result[1]).toBe("Eugenie");
});

test("Search Anne", () => {
  const result = solution.search(liz, "Anne");
  expect(result[0]).toBe("Peter");
  expect(result[1]).toBe("Savannah");
  expect(result[2]).toBe("Isla");
  expect(result[3]).toBe("Zara");
  expect(result[4]).toBe("Mia");
  expect(result[5]).toBe("Lena");
});

test("Search Harry", () => {
  expect(solution.search(liz, "Harry").length).toBe(0);
});

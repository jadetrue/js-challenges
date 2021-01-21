import challenge from "./index";
const {
  getFirstAndLastItems,
  totalScores,
  moveFirstAndLastItems,
  createSandwich,
  totalRange,
  removeEvenNumbers,
  generateHighscores,
  generateAverage,
  reverseOrder,
} = challenge;

const coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
const items = ["Apple", "Orange", "Pear"];
const scores = [20, 40, 50, 60];

describe("Testing the Foundation Level Challenges", () => {
  const ingredients = ["Bacon", "Lettuce", "Tomato"];
  const sandwich = ["Bread", "Bacon", "Lettuce", "Tomato", "Bread"];
  it("createSandwich Should create a Sandwich", () => {
    expect(createSandwich(ingredients)).toEqual(sandwich);
    expect(createSandwich([])).toEqual(["Bread", "Bread"]);
  });

  it("getFirstAndLastItems Should return the First and Last Items in an Array", () => {
    expect(getFirstAndLastItems(coaches)).toEqual(["Andy", "Sam"]);
    expect(getFirstAndLastItems(items)).toEqual(["Apple", "Pear"]);
  });

  it("totalScores Should Totals the Scores given", () => {
    expect(totalScores(scores)).toBe(170);
    expect(totalScores([])).toEqual(0);
  });
});

xdescribe("Testing the Intemediate Level Challenges", () => {
  it("moveFirstAndLastItems Should remove the last item and add it to the start", () => {
    expect(moveFirstAndLastItems(items)).toEqual(["Pear", "Apple", "Orange"]);
    expect(moveFirstAndLastItems(["Pear"])).toEqual(["Pear"]);
  });

  it("totalRange Should Total up the range of numbers bettween 0 - given number", () => {
    expect(totalRange(10)).toBe(55);
    expect(totalRange(5)).toBe(15);
    expect(totalRange()).toBe(0);
  });

  it("removeEvenNumbers Should remove the even numbers from the array", () => {
    expect(removeEvenNumbers([1, 2, 3])).toEqual([1, 3]);
    expect(removeEvenNumbers(scores)).toEqual([]);
  });

  it("removeEvenNumbers Should return a new array", () => {
    expect(removeEvenNumbers(scores)).not.toMatchObject(scores);
  });
});

xdescribe("Testing the Advanced Level Challenges", () => {
  it("reverseOrder Should return the Array Reversed", () => {
    expect(reverseOrder(items)).toEqual(["Pear", "Orange", "Apple"]);
    expect(reverseOrder(["Pear", "Orange", "Apple"])).toEqual(items);
  });

  it("reverseOrder Should return a new array", () => {
    expect(reverseOrder(items)).not.toMatchObject(items);
  });

  it("generateAverage Should calculate the average", () => {
    expect(generateAverage([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(generateAverage([])).toBe(0);
  });

  it("generateAverage Should calculate the average", () => {
    expect(generateAverage([])).toBe(0);
  });
});

xdescribe("Testing the Expert Level Challenges", () => {
  let players, playerScores, highscores;
  beforeEach(() => {
    players = ["Andy", "Bex", "Calum"];
    playerScores = [60, 99, 71];
    highscores = ["P:1 Andy scored 60", "P:2 Bex scored 99", "P:3 Calum scored 71"];
  });

  it("generateHighscores Should format arrays with valid parameters", () => {
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
    players.pop();
    playerScores.pop();
    highscores.pop();
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
  });

  it("generateHighscores Should catch invalid parameters.", () => {
    players.pop();
    expect(generateHighscores(players, playerScores)).toBe("invalid inputs");
    expect(generateHighscores(["dave"], [1, 2])).toBe("invalid inputs");
    expect(generateHighscores([], [])).toBe("invalid inputs");
  });
});

import * as challenge from "./challenge";
const {
  createRecipeString,
  getFirstAndLastItems,
  totalScores,
  moveFirstAndLastItems,
  totalRange,
  removeEvenNumbers,
  generateHighscores,
  generateAverage,
  reverseOrder
} = challenge;

/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

const coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
const items = ["Apple", "Orange", "Pear"];
const scores = [20, 40, 50, 60];
const ingredients = ["Bacon", "Lettuce", "Tomato"];
const ingredientsString = "Bacon+Lettuce+Tomato";
const itemString = "Apple+Orange+Pear";

describe("Testing createRecipeString()", () => {
  it("Should be defined", () => {
    expect(createRecipeString(ingredients)).toBeDefined();
  });

  it("Should return a String", () => {
    expect(typeof createRecipeString(ingredients)).toBe("string");
    expect(typeof createRecipeString(["hat"])).toBe("string");
  });

  it("Should handle multiple inputs", () => {
    expect(createRecipeString(ingredients)).toEqual(ingredientsString);
    expect(createRecipeString(items)).toEqual(itemString);
  });

  it("Should have correct amount of +'s", () => {
    expect(createRecipeString(Array(4).fill("a")).match(/\+/g).length).toBe(3);
    expect(createRecipeString(Array(20).fill("a")).match(/\+/g).length).toBe(19);
  });

  it("Should handle a single item", () => {
    expect(createRecipeString(["hat"])).toBe("hat");
  });
});

xdescribe("Testing getFirstAndLastItems()", () => {
  it("Should be defined", () => {
    expect(getFirstAndLastItems(coaches)).toBeDefined();
  });

  it("Should return an Array ", () => {
    expect(Array.isArray(getFirstAndLastItems(coaches))).toBeTruthy();
  });

  it("Should handle a single input", () => {
    expect(getFirstAndLastItems(["Charlie"])).toEqual(["Charlie", "Charlie"]);
    expect(getFirstAndLastItems(["Tony Hawk"])).toEqual(["Tony Hawk", "Tony Hawk"]);
  });

  it("Should handle multiple inputs", () => {
    expect(getFirstAndLastItems(coaches)).toEqual(["Andy", "Sam"]);
    expect(getFirstAndLastItems(items)).toEqual(["Apple", "Pear"]);
  });

  it("Should only ever return an array with a length of 2", () => {
    expect(getFirstAndLastItems(Array(100).fill("A")).length).toBe(2);
    expect(getFirstAndLastItems(Array(1000).fill("A")).length).toBe(2);
    expect(getFirstAndLastItems(Array(45000).fill("A")).length).toBe(2);
  });
});

xdescribe("Testing totalScores()", () => {
  it("Should be defined", () => {
    expect(totalScores(scores)).toBeDefined();
  });

  it("Should return a Number", () => {
    expect(typeof totalScores(scores)).toBe("number");
    expect(typeof totalScores([2])).toBe("number");
  });

  it("Should handle single input", () => {
    expect(totalScores([10])).toBe(10);
    expect(totalScores([1000])).toBe(1000);
    expect(totalScores([45])).toBe(45);
  });

  it("Should handle multiple inputs", () => {
    expect(totalScores(scores)).toBe(170);
    expect(totalScores(Array(50).fill(2))).toBe(100);
    expect(totalScores(Array(90).fill(4))).toBe(360);
  });

  it("Should handle a empty array", () => {
    expect(totalScores([])).toEqual(0);
    expect(totalScores([0])).toEqual(0);
  });
});

xdescribe("Testing moveFirstAndLastItems()", () => {
  it("Should be defined", () => {
    expect(moveFirstAndLastItems(items)).toBeDefined();
  });

  it("Should return an Array ", () => {
    expect(Array.isArray(getFirstAndLastItems(items))).toBeTruthy();
  });

  it("Should handle multiple inputs", () => {
    expect(moveFirstAndLastItems(items)).toEqual(["Pear", "Apple", "Orange"]);
    expect(moveFirstAndLastItems(ingredients)).toEqual(["Tomato", "Bacon", "Lettuce"]);
  });

  it("Should handle single inputs", () => {
    expect(moveFirstAndLastItems(["Pear"])).toEqual(["Pear"]);
    expect(moveFirstAndLastItems(["Charlie"])).toEqual(["Charlie"]);
  });

  it("Should not remove or add any items", () => {
    expect(moveFirstAndLastItems(Array(10).fill("A")).length).toBe(10);
    expect(moveFirstAndLastItems(Array(100).fill("A")).length).toBe(100);
  });
});

xdescribe("Testing totalRange()", () => {
  it("Should be defined", () => {
    expect(totalRange(10)).toBeDefined();
  });

  it("Should return a Number ", () => {
    expect(typeof totalRange(10)).toBe("number");
    expect(typeof totalRange()).toBe("number");
  });

  it("Should Total up the range of numbers", () => {
    expect(totalRange(5)).toBe(15);
    expect(totalRange(10)).toBe(55);
    expect(totalRange(50)).toBe(1275);
  });

  it("Should Total larger numbers", () => {
    expect(totalRange(200)).toBe(20100);
    expect(totalRange(2000)).toBe(2001000);
  });

  it("Should Handle no input", () => {
    expect(totalRange()).toBe(0);
  });
});

xdescribe("Testing removeEvenNumbers()", () => {
  it("Should be defined", () => {
    expect(removeEvenNumbers(scores)).toBeDefined();
  });

  it("Should return an Array ", () => {
    expect(Array.isArray(removeEvenNumbers(scores))).toBeTruthy();
  });

  it("Should remove even numbers from array", () => {
    expect(removeEvenNumbers([2])).toEqual([]);
    expect(removeEvenNumbers([1])).toEqual([1]);
    expect(removeEvenNumbers([123456])).toEqual([]);
  });

  it("Should remove even numbers from a small array", () => {
    expect(removeEvenNumbers(scores)).toEqual([]);
    expect(removeEvenNumbers([1, 2, 3])).toEqual([1, 3]);
    expect(removeEvenNumbers([1553445, 442, 23313])).toEqual([1553445, 23313]);
  });

  it("Should remove even numbers from a large array", () => {
    expect(removeEvenNumbers(Array(100).fill(24))).toEqual([]);
    expect(removeEvenNumbers(Array(100).fill(1)).length).toBe(100);
    expect(removeEvenNumbers(Array(5505).fill(1)).length).toBe(5505);
  });

  it("Should return a new array", () => {
    expect(removeEvenNumbers(scores)).not.toBe(scores);
  });
});

xdescribe("Testing reverseOrder()", () => {
  it("Should be defined", () => {
    expect(reverseOrder(items)).toBeDefined();
  });

  it("Should return an Array", () => {
    expect(Array.isArray(reverseOrder(items))).toBeTruthy();
  });

  it("Should not change a single item array", () => {
    expect(reverseOrder(["Pear"])).toEqual(["Pear"]);
    expect(reverseOrder(["Orange"])).toEqual(["Orange"]);
    expect(reverseOrder([45])).toEqual([45]);
  });

  it("Should return multiple item Array Reversed", () => {
    expect(reverseOrder(coaches)[0]).toBe("Sam");
    expect(reverseOrder(items)).toEqual(["Pear", "Orange", "Apple"]);
    expect(reverseOrder(["Pear", "Orange", "Apple"])).toEqual(items);
    expect(reverseOrder([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("Should return a new array", () => {
    expect(reverseOrder(items)).not.toBe(items);
    expect(reverseOrder(ingredients)).not.toBe(ingredients);
  });
});

xdescribe("Testing generateAverage()", () => {
  it("Should be defined", () => {
    expect(generateAverage(10)).toBeDefined();
  });

  it("Should return a Number", () => {
    expect(typeof generateAverage([10])).toBe("number");
    expect(typeof generateAverage([])).toBe("number");
  });

  it("Should calculate the average of different numbers", () => {
    expect(generateAverage([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(generateAverage([50, 60, 30, 70])).toBe(53);
  });

  it("Should calculate the average of same numbers", () => {
    expect(generateAverage(Array(500).fill(56))).toBe(56);
    expect(generateAverage(Array(50).fill(1))).toBe(1);
  });

  it("Should handle an empty array", () => {
    expect(generateAverage([])).toBe(0);
  });
});

xdescribe("Testing generateHighscores()", () => {
  let players, playerScores, highscores;
  beforeEach(() => {
    players = ["Andy", "Bex", "Calum"];
    playerScores = [60, 99, 71];
    highscores = ["P:1 Andy scored 60", "P:2 Bex scored 99", "P:3 Calum scored 71"];
  });

  it("Should be defined", () => {
    expect(generateHighscores(players, playerScores)).toBeDefined();
  });

  it("Should return an Array with correct params", () => {
    expect(Array.isArray(generateHighscores(players, playerScores))).toBeTruthy();
  });

  it("Should return String with incorrect params", () => {
    players.pop();
    expect(typeof generateHighscores(players, playerScores)).toBeTruthy();
  });

  it("Should format arrays with valid parameters", () => {
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
    players.pop();
    playerScores.pop();
    highscores.pop();
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
  });

  it("Should not lose any players", () => {
    expect(generateHighscores(Array(10).fill("A"), Array(10).fill(1)).length).toBe(10);
  });

  it("Should catch invalid parameters.", () => {
    players.pop();
    expect(generateHighscores(players, playerScores)).toBe("invalid inputs");
    expect(generateHighscores(["dave"], [1, 2])).toBe("invalid inputs");
    expect(generateHighscores([], [])).toBe("invalid inputs");
  });

  it("Should return a new Array", () => {
    expect(generateHighscores(players, playerScores)).not.toBe(players);
    expect(generateHighscores(players, playerScores)).not.toBe(playerScores);
  });
});

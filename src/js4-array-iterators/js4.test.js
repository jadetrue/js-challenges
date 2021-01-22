import challenge from "./index";

const {
  removeFalseValues,
  createPercentageList,
  createListOfPoessessions,
  convertStringToNumbersArray,
  createOddEvenArray,
  filterBooksBySearch,
  formatStringArray,
  formatString,
  encryptString,
} = challenge;

const mixedBooleanArr = [true, false, false, true, false, true, true];
const toBePercentages = [1, 0.5, 0.25, 0.4, 0.99, 0.1];
const percentages = ["100%", "50%", "25%", "40%", "99%", "10%"];
const possessions = ["Cabbage", "Turnip", "Radish", "Carrot"];
const mattsPosessions = ["Matt's Cabbage", "Matt's Turnip", "Matt's Radish", "Matt's Carrot"];
const numbersCSV = "5+2+55+1990+45+15+22";

xdescribe("Testing removeFalseValues()", () => {
  it("Should remove false values from an array", () => {
    expect(removeFalseValues(Array(5).fill(false)).length).toBe(0);
    expect(removeFalseValues(Array(20).fill(false)).length).toBe(0);
  });

  it("Should have the same amount of true values as the orginal array", () => {
    expect(removeFalseValues(mixedBooleanArr)).toEqual([true, true, true, true]);
    expect(removeFalseValues(Array(5).fill(true)).length).toBe(5);
    expect(removeFalseValues(Array(60).fill(true)).length).toBe(60);
  });

  it("Should be able to handle an empty array", () => {
    expect(removeFalseValues([]).length).toBe(0);
  });

  it("Should return a new array and not modify the old one", () => {
    expect(removeFalseValues(mixedBooleanArr)).not.toMatchObject(mixedBooleanArr);
  });
});

xdescribe("Testing createPercentageList()", () => {
  it("Should convert numbers into percentages", () => {
    expect(createPercentageList(toBePercentages)).toEqual(percentages);
    expect(createPercentageList([0.25])).toEqual(["25%"]);
    expect(createPercentageList(Array(20).fill(1))).toEqual(Array(20).fill("100%"));
  });

  it("Should match given array's length", () => {
    expect(createPercentageList(Array(20).fill(1)).length).toBe(20);
  });

  it("Should handle an empty array", () => {
    expect(createPercentageList([])).toEqual([]);
  });

  it("Should return a new array and not modify the old one", () => {
    expect(createPercentageList(toBePercentages)).not.toMatchObject(toBePercentages);
  });
});

xdescribe("Testing createListOfPoessessions()", () => {
  it("Should prefix name as expected", () => {
    expect(createListOfPoessessions(possessions, "Matt's")).toEqual(mattsPosessions);
    expect(createListOfPoessessions(["shoes", "jacket", "belt"], "disco")).toEqual([
      "disco shoes",
      "disco jacket",
      "disco belt",
    ]);
  });

  it("Should match given Array's length", () => {
    expect(createListOfPoessessions(possessions, "Matt's").length).toBe(4);
    expect(createListOfPoessessions(Array(20).fill("A"), "disco").length).toBe(20);
  });

  it("Should handle an empty array", () => {
    expect(createListOfPoessessions([], "Matt's")).toEqual([]);
  });

  it("Should return a new array and not modify the old one", () => {
    expect(createListOfPoessessions(possessions, "Matt's")).not.toMatchObject(possessions);
  });
});

xdescribe("Testing convertStringToNumbersArray()", () => {
  it("Should convert string as expected", () => {
    expect(convertStringToNumbersArray(numbersCSV)).toEqual([5, 2, 55, 1990, 45, 15, 22]);
    expect(convertStringToNumbersArray("1+2")).toEqual([1, 2]);
    expect(convertStringToNumbersArray(Array(10).fill("1").join("+"))).toEqual(Array(10).fill(1));
  });

  it("Should handle big inputs", () => {
    expect(convertStringToNumbersArray(Array(100).fill("1").join("+"))).toEqual(Array(100).fill(1));
    expect(convertStringToNumbersArray(Array(1000).fill("1").join("+")).length).toBe(1000);
  });

  it("Should handle single inputs", () => {
    expect(convertStringToNumbersArray("100")).toEqual([100]);
  });
});

describe("Testing createOddEvenArray()", () => {
  it("Should convert string as expected", () => {
    expect(createOddEvenArray(numbersCSV)).toEqual(["odd", "even", "odd", "even", "odd", "odd", "even"]);
    expect(createOddEvenArray("1+2")).toEqual(["odd", "even"]);
    expect(createOddEvenArray(Array(10).fill("1").join("+"))).toEqual(Array(10).fill("odd"));
  });

  it("Should handle big inputs", () => {
    expect(createOddEvenArray(Array(100).fill("1").join("+"))).toEqual(Array(100).fill("odd"));
    expect(createOddEvenArray(Array(1000).fill("1").join("+")).length).toBe(1000);
  });

  it("Should handle single inputs", () => {
    expect(createOddEvenArray("100")).toEqual(["even"]);
  });
});

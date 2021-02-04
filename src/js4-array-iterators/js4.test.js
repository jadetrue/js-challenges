import * as challenge from "./challenge";

const {
  removeFalseValues,
  createPercentageList,
  createListOfPoessessions,
  convertStringToNumbersArray,
  createOddEvenArray,
  filterBooksBySearch,
  formatStringArray,
  formatString,
  encryptString
} = challenge;

/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

const mixedBooleanArr = [true, false, false, true, false, true, true];
const toBePercentages = [1, 0.5, 0.25, 0.4, 0.99, 0.1];
const percentages = ["100%", "50%", "25%", "40%", "99%", "10%"];
const possessions = ["Cabbage", "Turnip", "Radish", "Carrot"];
const mattsPosessions = ["Matt's Cabbage", "Matt's Turnip", "Matt's Radish", "Matt's Carrot"];
const numbersCSV = "5+2+55+1990+45+15+22";
const stringsToClean = ["  CaBBage  ", "TuRnIp", "  RADish", "CARroT  "];
const cleanedStrings = "cabbage+turnip+radish+carrot";
const formattedStringArr = ["T", "e", "S", "t", "S", "t", "R", "i", "N", "g"];

describe("Testing removeFalseValues()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(removeFalseValues([true]))).toBe(true);
    expect(Array.isArray(removeFalseValues([false]))).toBe(true);
  });

  it("Should return an array of Booleans", () => {
    const testForBooleans = removeFalseValues(mixedBooleanArr).every((bool) => typeof bool === "boolean");
    expect(testForBooleans).toBe(true);
  });

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
    expect(removeFalseValues(mixedBooleanArr)).not.toBe(mixedBooleanArr);
  });
});

xdescribe("Testing createPercentageList()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(createPercentageList(toBePercentages))).toBe(true);
  });

  it("Should return an array of Strings", () => {
    const testForStrings = createPercentageList(toBePercentages).every((string) => typeof string === "string");
    expect(testForStrings).toBe(true);
  });

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
    expect(createPercentageList(toBePercentages)).not.toBe(toBePercentages);
  });
});

xdescribe("Testing createListOfPoessessions()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(createListOfPoessessions(possessions, "Matt's"))).toBe(true);
  });

  it("Should return an array of Strings", () => {
    const testForStrings = createListOfPoessessions(possessions, "Matt's").every(
      (string) => typeof string === "string"
    );
    expect(testForStrings).toBe(true);
  });

  it("Should prefix name as expected", () => {
    expect(createListOfPoessessions(possessions, "Matt's")).toEqual(mattsPosessions);
    expect(createListOfPoessessions(["shoes", "jacket", "belt"], "disco")).toEqual([
      "disco shoes",
      "disco jacket",
      "disco belt"
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
    expect(createListOfPoessessions(possessions, "Matt's")).not.toBe(possessions);
  });
});

xdescribe("Testing convertStringToNumbersArray()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(convertStringToNumbersArray(numbersCSV))).toBe(true);
  });

  it("Should return an array of Numbers", () => {
    const testForNumbers = convertStringToNumbersArray(numbersCSV).every((number) => typeof number === "number");
    expect(testForNumbers).toBe(true);
  });

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

xdescribe("Testing createOddEvenArray()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(createOddEvenArray(numbersCSV))).toBe(true);
  });

  it("Should return an array of Strings", () => {
    const testForStrings = createOddEvenArray(numbersCSV).every((string) => typeof string === "string");
    expect(testForStrings).toBe(true);
  });

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

xdescribe("Testing filterBooksBySearch()", () => {
  it("Should return an array", () => {
    expect(Array.isArray(filterBooksBySearch(["one thing"], "one thing"))).toBe(true);
  });

  it("Should return an array of Strings", () => {
    const testForStrings = filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "disco").every(
      (string) => typeof string === "string"
    );
    expect(testForStrings).toBe(true);
  });

  it("Should handle one match", () => {
    expect(filterBooksBySearch(["one thing"], "one thing")).toEqual(["one thing"]);
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "bb").length).toBe(1);
  });

  it("Should handle multiple matches", () => {
    expect(filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "disco").length).toBe(3);
    expect(filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "oe").length).toBe(2);
  });

  it("Should handle large matches", () => {
    expect(filterBooksBySearch(Array(100).fill("disco"), "disco").length).toBe(100);
  });

  it("Should handle single character matches", () => {
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "a").length).toBe(3);
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "b").length).toBe(2);
  });

  it("Should handle no matches", () => {
    expect(filterBooksBySearch(Array(100).fill("disco"), "techno").length).toBe(0);
    expect(filterBooksBySearch(["one thing"], "nothing")).toEqual([]);
    expect(filterBooksBySearch([], "nothing")).toEqual([]);
    expect(filterBooksBySearch([])).toEqual([]);
  });

  it("Should return a new array and not modify the old one", () => {
    expect(filterBooksBySearch(mattsPosessions, "Matt")).not.toBe(mattsPosessions);
  });
});

xdescribe("Testing formatStringArray()", () => {
  it("Should return a String", () => {
    expect(typeof formatStringArray(["  front"])).toBe("string");
  });

  it("Should NOT return undefined", () => {
    expect(formatStringArray(["  front"])).toBeDefined();
  });

  it("Should remove whitespace", () => {
    expect(formatStringArray(["  front"])).toBe("front");
    expect(formatStringArray(["back "])).toBe("back");
    expect(formatStringArray(["  both "])).toBe("both");
  });

  it("Should be lowercase", () => {
    expect(formatStringArray(["UPPERCASE"])).toBe("uppercase");
    expect(formatStringArray(["mIxEd"])).toBe("mixed");
  });

  it("Should format a single string as expected", () => {
    expect(formatStringArray(["  DAVID "])).toBe("david");
  });

  it("Should format multiple strings as expected", () => {
    expect(formatStringArray(stringsToClean)).toBe(cleanedStrings);
    expect(formatStringArray(cleanedStrings.split("+"))).toBe(cleanedStrings);
  });
});

xdescribe("Testing formatString()", () => {
  it("Should NOT return undefined", () => {
    expect(formatString("  defined")).toBeDefined();
  });

  it("Should return an array", () => {
    expect(Array.isArray(formatString("white  space"))).toBe(true);
  });

  it("Should return an array of Strings", () => {
    const testForStrings = formatString("white  space").every((string) => typeof string === "string");
    expect(testForStrings).toBe(true);
  });

  it("Should remove numbers", () => {
    expect(formatString("nu55mber77s").length).toBe(7);
    expect(formatString("1234567").length).toBe(0);
  });

  it("Should remove punctuation", () => {
    expect(formatString("punctuation!\"£$%^&*()?[]{}|,./;'@~#+=").length).toBe(11);
    expect(formatString('!"£$%^&').length).toBe(0);
  });

  it("Should remove whitespace", () => {
    expect(formatString("  white  space  ").length).toBe(10);
    expect(formatString("white  space").length).toBe(10);
  });

  it("Should uppercase even index", () => {
    expect(formatString("he")[0]).toBe("H");
    expect(formatString("hello")[2]).toBe("L");
  });

  it("Should lowercase odd index", () => {
    expect(formatString("he")[1]).toBe("e");
    expect(formatString("hello")[3]).toBe("l");
  });

  it("Should format string as expected", () => {
    expect(formatString("test string")).toEqual(formattedStringArr);
    expect(formatString('898    te%^$£"&*()st str3552621ing')).toEqual(formattedStringArr);
  });

  it("Should handle empty input", () => {
    expect(formatString("")).toEqual([]);
  });
});

xdescribe("Testing encryptString()", () => {
  it("Should NOT return undefined", () => {
    expect(encryptString("  defined")).toBeDefined();
  });

  it("Should return a String", () => {
    expect(typeof encryptString("  front")).toBe("string");
  });

  it("Should NOT encrypt three letters", () => {
    expect(encryptString("hey")).toBe("hey");
    expect(encryptString("ola")).toBe("ola");
  });

  it("Should encrypt after three plus letters", () => {
    expect(encryptString("heya")).toBe("haey");
    expect(encryptString("disco")).toBe("dcios");
    expect(encryptString("cellardoor")).toBe("cldreaolro");
  });

  it("Should encrypt large words", () => {
    expect(encryptString("antidisestablishmentarianism")).toBe("aistlhnrnmndeaimtiitisbseaas");
    expect(encryptString("hippopotomonstrosesquippedaliophobia")).toBe("hpomsosielpbiototsqpdihipponreupaooa");
  });

  it("Should keep spaces between words", () => {
    expect(encryptString("keep it secret")).toBe("kpteee  cteisr");
    expect(encryptString("keep it safe.")).toBe("kpta.e  feise");
  });

  it("Should handle empty input", () => {
    expect(encryptString("")).toBe("");
  });
});

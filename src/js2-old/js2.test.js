var solution = require("./js2-solution");
if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__)
  solution = require("./js2-challenge");

var colors = ["violet", "green", "blue", "yellow"];

test("Fix index 0", function() {
  var result = solution.fixColors(colors, 0);
  expect(result[0]).toBe("red");
  expect(result[1]).toBe("green");
  expect(result[2]).toBe("blue");
  expect(result[3]).toBe("yellow");
});

test("Fix index 1", function() {
  var result = solution.fixColors(colors, 1);
  expect(result[0]).toBe("violet");
  expect(result[1]).toBe("red");
  expect(result[2]).toBe("blue");
  expect(result[3]).toBe("yellow");
});

test("Fix index 2", function() {
  var result = solution.fixColors(colors, 2);
  expect(result[0]).toBe("violet");
  expect(result[1]).toBe("green");
  expect(result[2]).toBe("blue");
  expect(result[3]).toBe("yellow");
});

test("Fix index 3", function() {
  var result = solution.fixColors(colors, 3);
  expect(result[0]).toBe("violet");
  expect(result[1]).toBe("green");
  expect(result[2]).toBe("blue");
  expect(result[3]).toBe("yellow");
});

import { Shape } from "./challenge";

let square;

beforeEach(() => {
  square = new Shape(5, 10);
});

test("Should return a string od coordinates when the coordinates getter is called", () => {
  expect(square.coordinates).toBe("(5, 10)");
});

test("Should return a string if drawShape() method is called", () => {
  expect(square.drawShape()).toBe("This shape has been drawn at position (5, 10)");
});

test("Should set the coordinates of the shape when the method is called", () => {
  square.changePosition(10, 20);
  expect(square.xCoord).toBe(10)
  expect(square.yCoord).toBe(20)
})

test("Should initialize with colour and colour should change when method is called", () => {
  square = new Shape(5, 10, "brown");
  expect(square.colour).toBe("brown")
  expect(square.changeColour("green")).toBe("The old colour was brown, the new colour is green")
  expect(square.colour).toBe("green")
})

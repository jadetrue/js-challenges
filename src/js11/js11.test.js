import * as challenge from "./challenge";
describe("Rectangle tests", () => {
  let rectangle;
  beforeEach(() => {
    rectangle = new challenge.Rectangle(2, 5, "green", 10, 15);
  });

  test("Should contruct object correctly", () => {
    expect(rectangle).toMatchObject({ xCoord: 2, yCoord: 5, colour: "green", height: 10, width: 15 });
    expect(rectangle.coordinates).toBe("(2, 5)");
    rectangle.changePosition(4, 10);
    expect(rectangle.xCoord).toBe(4);
    expect(rectangle.yCoord).toBe(10);
    expect(rectangle.changeColour("blue")).toBe("The old colour was green, the new colour is blue");
    expect(rectangle.colour).toBe("blue");
  });

  test("Should calculate area", () => {
    expect(rectangle.calcArea()).toBe(150);
  });

  test("Should calculate perimeter", () => {
    expect(rectangle.calcPerimeter()).toBe(50);
  });

  test("Should give a different string to previous challenge when drawShape method is called", () => {
    expect(rectangle.drawShape()).toBe(
      "This rectangle has been drawn at position (2, 5), has a height of 10 and a width of 15"
    );
  });
});

describe("Circle tests", () => {
  let circle;
  beforeEach(() => {
    circle = new challenge.Circle(4, 10, "yellow", 3);
  });

  test("Should construct object correctly", () => {
    expect(circle).toMatchObject({ xCoord: 4, yCoord: 10, colour: "yellow", radius: 3 });
    expect(circle.coordinates).toBe("(4, 10)");
    circle.changePosition(13, 27);
    expect(circle.xCoord).toBe(13);
    expect(circle.yCoord).toBe(27);
    expect(circle.changeColour("blue")).toBe("The old colour was yellow, the new colour is blue");
    expect(circle.colour).toBe("blue");
  });

  test("Should calculate area", () => {
    expect(circle.calcArea()).toBeCloseTo(28.27, 2);
  });

  test("Should give diameter", () => {
    expect(circle.diameter).toBe(6);
  });

  test("Should give circumference", () => {
    expect(circle.calcCircumference()).toBeCloseTo(18.85, 2);
  });

  test("Should give a different string to previous challenge when drawShape method is called", () => {
    expect(circle.drawShape()).toBe("This circle has been drawn at position (4, 10) and has a radius of 3");
  });
});

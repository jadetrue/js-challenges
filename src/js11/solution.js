// Extending classes - In this challenge you will extend the class from the previous challenge and add extra properties and methods.
// All tests will run against these extended classes
import { Shape } from "../js10/solution";

/**
 * Class representing a Rectangle
 * @extends Shape
 */
export class Rectangle extends Shape {
  /**
   * The constructor takes all properties from Shape and adds two new properties of height and width
   * @param {number} xCoord
   * @param {number} yCoord
   * @param {string} colour
   * @param {number} height
   * @param {number} width
   */
  constructor(xCoord, yCoord, colour, height, width) {
    /**
     * The super takes the properties of the extended class
     * @param {number} xCoord
     * @param {number} yCoord
     * @param {string} colour
     */
    super(xCoord, yCoord, colour);
    /**
     * New properties go here
     */
    this.height = height;
    this.width = width;
  }

  /**
   * Updated method from Shape class, returns new string with extra information
   * @returns {string} - This rectangle has been drawn at position (2, 5), has a height of 10 and a width of 15
   */
  drawShape() {
    return `This rectangle has been drawn at position ${this.coordinates}, has a height of ${this.height} and a width of ${this.width}`;
  }

  /**
   * Method that returns the area of the rectangle
   * @returns {number}
   */
  calcArea() {
    return this.width * this.height;
  }

  /**
   * Method that returns the perimeter of the rectangle
   * @returns {number}
   */
  calcPerimeter() {
    return 2 * (this.height + this.width);
  }
}

/**
 * class representing a circle
 * @extends Shape
 */
export class Circle extends Shape {
  /**
   * The constructor takes all properties from Shape and adds one new property of radius
   * @param {number} xCoord
   * @param {number} yCoord
   * @param {string} colour
   * @param {number} radius
   */
  constructor(xCoord, yCoord, colour, radius) {
    /**
     * The super takes the properties of the extended class
     * @param {number} xCoord
     * @param {number} yCoord
     * @param {string} colour
     */
    super(xCoord, yCoord, colour);
    /**
     * New properties go here
     */
    this.radius = radius;
  }

  /**
   * Updated method from Shape class, returns new string with extra information
   * @returns {string} - This circle has been drawn at position (4, 10) and has a radius of 3
   */
  drawShape() {
    return `This circle has been drawn at position ${this.coordinates} and has a radius of ${this.radius}`;
  }

  /**
   * getter that return the diamter of the circle
   * @returns {number}
   */
  get diameter() {
    return 2 * this.radius;
  }

  /**
   * Method that returns the area of the circle
   * @returns {number}
   */
  calcArea() {
    return (Math.PI * this.radius ** 2);
  }

  /**
   * Method that returns the circumference of the circle
   * @returns {number} 
   */
  calcCircumference() {
    return (2 * Math.PI * this.radius);
  }
}

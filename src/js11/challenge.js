// Extending classes - In this challenge you will extend the class from the previous challenge and add extra properties and methods.
// All tests will run against these extended classes
import { Shape } from "../js10/challenge";

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
  constructor(/* insert arguments here */) {
    /**
     * The super takes the properties of the extended class
     * @param {number} xCoord
     * @param {number} yCoord
     * @param {string} colour
     */
    super(/* insert arguments here */);
    /**
     * New properties go here
     */
  }

  /**
   * Updated method from Shape class, returns new string with extra information
   * @returns {string} - This rectangle has been drawn at position (2, 5), has a height of 10 and a width of 15
   */
  drawShape() {
    // your code here
  }

  /**
   * Method that returns the area of the rectangle
   * @returns {number}
   */
  calcArea() {
    // your code here
  }

  /**
   * Method that returns the perimeter of the rectangle
   * @returns {number}
   */
  calcPerimeter() {
    // your code here
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
  constructor(/* insert arguments here */) {
    /**
     * The super takes the properties of the extended class
     * @param {number} xCoord
     * @param {number} yCoord
     * @param {string} colour
     */
    super(/* insert arguments here */);
    /**
     * New properties go here
     */
  }

  /**
   * Updated method from Shape class, returns new string with extra information
   * @returns {string} - This circle has been drawn at position (4, 10) and has a radius of 3
   */
  drawShape() {
    // your code here
  }

  /**
   * getter that return the diamter of the circle
   * @returns {number}
   */
  get diameter() {
    // your code here
  }

  /**
   * Method that returns the area of the circle
   * @returns {number} to 2 decimal places
   */
  calcArea() {
    // your code here
  }

  /**
   * Method that returns the circumference of the circle
   * @returns {number} to 2 decimal places
   */
  calcCircumference() {
    // your code here
  }
}

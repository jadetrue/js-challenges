/* Classes - In this challenge you will be adding methods and properties to classes in order to run tests */

export class Shape {
  constructor(xCoord, yCoord, colour) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.colour = colour;
  }

  /**
   * A getter that returns a string in the form of (xCoord, yCoord)
   * @return {string} "(2, 5)"
   */
  get coordinates() {
    return `(${this.xCoord}, ${this.yCoord})`;
  }

  /**
   * A method that returns a string
   * @return {string} "This shape has been drawn at position (2, 5)"
   */
  drawShape() {
    return `This shape has been drawn at position ${this.coordinates}`;
  }

  /**
   * A method that changes the xCoord and yCoord of the object
   * @param {number} xCoord
   * @param {number} yCoord
   */
  changePosition(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  /**
   * Add a property of colour to the class and a method which updates the colour property
   * and returns a string of "The old colour was brown, the new colour is green"
   * @param {string} colour
   * @return {string} "The old colour was brown, the new colour is green"
   */
  // !!!!! THE NAME OF THE METHOD SHOULD BE changeColour !!!!!
  changeColour(colour) {
    const message = `The old colour was ${this.colour}, the new colour is ${colour}`;
    this.colour = colour;
    return message;
  }
}

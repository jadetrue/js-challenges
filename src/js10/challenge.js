/* Classes - In this challenge you will be adding methods and properties to classes in order to run tests */

export class Shape {
  constructor(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  /**
   * A getter that returns a string in the form of (xCoord, yCoord)
   * @return {string} "(2, 5)"
   */
  get coordinates() {
    // your code here
  }

  /**
   * A method that returns a string
   * @return {string} "This shape has been drawn at position (2, 5)"
   */
  drawShape() {
    // your code here
  }

  /**
   * A method that changes the xCoord and yCoord of the object
   * @param {number} xCoord
   * @param {number} yCoord
   */
  changePosition(xCoord, yCoord) {
    // your code here
  }

  /**
   * Add a property of colour to the class and a method which updates the colour property
   * and returns a string of "The old colour was brown, the new colour is green"
   * @param {string} colour
   * @return {string} "The old colour was brown, the new colour is green"
   */
  // !!!!! THE NAME OF THE METHOD SHOULD BE changeColour !!!!!
}

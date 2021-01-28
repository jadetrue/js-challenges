// Classes - Foundation
// - adding constructors
// - adding methods
// - adding method that updates key

// Most of it there, have them write method bodies
// Intermediate
// Write a whole class
// - getters
// - setters
// Advanced
// Extend the previous class
// Expert
// Do some weird shit Charlie sends you

/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * Complete the Skeleton of a Coordinate Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept these two parameters xCoord and yCoord.
 * The keys will NEED to be named xCoord and yCoord.
 *
 */

/** Class representing a coordinate. */
export class Coordinate {
  /**
   * Create a coordinate.
   * @param {number} xCoord - 22.
   * @param {number} yCoord - 20.
   */
  constructor(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

/**
 * Complete the Skeleton of a Alert Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept a parameter called message.
 * The key will need to be called message.
 *
 * You will need to complete the printMessage method.
 * This method when called returns a string matching the following format.
 * "!!!! " + message + " !!!!"
 *
 */

/** Class representing a Alert. */
export class Alert {
  /**
   * Create an alert.
   * @param {message} message - "Are sure you want to proceed?"
   */
  constructor(message) {
    this.message = message;
  }

  /**
   * Returns a string with "!!!! " + " !!!" added to the start and end of the message key.
   * @return {string} "!!!! Are sure you want to proceed? !!!!"
   */
  printMessage() {
    const message = `!!!! ${this.message} !!!!`;
    return message;
  }
}

/**
 * Complete the Skeleton of a Engine Class below.
 *
 * You DO NOT need a constructor.
 * When the Engine class is created engineIsRunning will always be set to false.
 * The key needs to remain named engineIsRunning.
 *
 * You will need to complete the two methods.
 *
 * The first is called startEngine.
 * If engineIsRunning is true it will return "Engine is already running"
 * If engineIsRunning is false it will set engineIsRunning to true and return "Engine has started running"
 *
 * The second is called stopEngine.
 * If engineIsRunning is true it will set engineIsRunning to false and return "Engine has stopped running"
 * If engineIsRunning is false it will return "Engine has already stopped running"
 *
 */

/** Class representing an engine. */
export class Engine {
  engineIsRunning = false;

  /**
   * Updates engineIsRunning to true and returns a conditonal string based if the engine is already running.
   * @return {string} "Engine has started running"
   */
  startEngine() {
    const message = this.engineIsRunning ? "Engine is already running" : "Engine has started running";
    !this.engineIsRunning ? (this.engineIsRunning = true) : null;
    return message;
  }

  /**
   * Updates engineIsRunning to false and returns a conditonal string based if the engine has already stopped.
   * @return {string} "Engine has stopped running"
   */
  stopEngine() {
    const message = this.engineIsRunning ? "Engine has stopped running" : "Engine has already stopped running";
    this.engineIsRunning ? (this.engineIsRunning = false) : null;
    return message;
  }
}

/**
 * Intemediate Challenges
 */

/**
 * Complete the Skeleton of a Counter Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept a parameter called count.
 * If count is not given it will need a default value of 0.
 * The key will need to be called count.
 *
 * You will need to create two methods on the instance of the Counter class.
 *
 * The first will need to be called increment.
 * This function will increase the count by 1 and return the updated count.
 *
 * The second will need to be called decrement.
 * This function will decrease the count by 1 and return the updated count.
 * You should not be able to decrease the count below 0.
 *
 */

/** Class representing a Counter. */
export class Counter {
  /**
   * Create an counter.
   * @param {number} count - 50
   */
  constructor(count = 0) {
    this.count = count;
  }

  /**
   * A method that increments count by 1.
   * @return {number} 51
   */

  // WRITE INCREMENT FUNCTION HERE
  increment() {
    this.count++;
    return this.count;
  }

  /**
   * A method that decrements count by 1.
   * @return {number} 49
   */

  // WRITE DECREMENT FUNCTION HERE
  decrement() {
    if (this.count > 0) this.count--;

    return this.count;
  }
}

/**
 * Advanced Challenges
 */

/**
 * Expert Challenge
 */

// Classes - Foundation

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
 * You DO NOT always need parameters for a constructor.
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
  /**
   * Create an alert.
   */
  constructor() {
    this.engineIsRunning = false;
  }

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
   * A method that decrements count by 1 but will not go below 0.
   * @return {number} 49
   */

  // WRITE DECREMENT FUNCTION HERE
  decrement() {
    if (this.count > 0) this.count--;
    return this.count;
  }
}

/**
 * Complete the Skeleton of a BookShelf Class below.
 *
 * You will be implementing getters and setters on the class below.
 *
 * The constructor is completed.
 * It accepts two a parameters called shelfId and booksOnShelf.
 * The keys on the class are prefixed with a "_" indicating that a given property is private and shouldn’t be accessed from outside of the class.
 * The keys need to remain with the names _shelfId and _booksOnShelf
 *
 * A getter and a setter have been added to the class.
 * The getter is called booksOnShelf and returns the private property _booksOnShelf
 * The setter is called booksOnShelf and allows you to replace the private property _booksOnShelf
 *
 *
 * You will need to create a getter and a setter on the instance of the BookShelf class.
 *
 * The getter will need to be called latestBook.
 * This will return the last item of the private property _booksOnShelf.
 *
 * The setter will need to be called addBookToShelf.
 * This will need to take a book as a parameter and add it to end of the of the private property _booksOnShelf.
 *
 */

/** Class representing a book shelf. */
export class BookShelf {
  /**
   * Create a book shelf.
   * @param {string} shelfId - "aa0050a01"
   * @param {string[]} booksOnShelf - ["JavaScript for Kids", "Learning JavaScript Design Patterns"]
   *
   */
  constructor(shelfId, booksOnShelf = []) {
    this._shelfId = shelfId;
    this._booksOnShelf = booksOnShelf;
  }

  /**
   * A getter that returns the current books on the shelf.
   * @return {string[]} ["JavaScript for Kids", "Learning JavaScript Design Patterns"]
   */
  get booksOnShelf() {
    return this._booksOnShelf;
  }

  /**
   * A setter that replaces the current books on the shelf with a new list of books.
   * @param {string[]} bookArray ["Learn JavaScript Visually"]
   */
  set booksOnShelf(bookArray = []) {
    this._booksOnShelf = bookArray;
  }

  /**
   * A getter that returns the latest book to be added to the book shelf.
   * @return {string} "Learning JavaScript Design Patterns"
   */
  get latestBook() {
    const lastIndex = this.booksOnShelf.length - 1;
    return this.booksOnShelf[lastIndex];
  }

  /**
   * A setter that adds a new book to the list of books.
   * @param {string} "Eloquent JavaScript"
   */
  set addBookToShelf(book) {
    this._booksOnShelf.push(book);
  }
}

/**
 * Advanced Challenges
 */

/**
 * Expert Challenge
 */

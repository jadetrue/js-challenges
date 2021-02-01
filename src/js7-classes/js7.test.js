import challenge from "./index";

const { Coordinate, Alert, Engine, Counter, Modal, BookShelf } = challenge;

xdescribe("Testing Coordinate class", () => {
  const coordOne = new Coordinate(5, 10);
  const coordTwo = new Coordinate(45, 17);

  it("Should be an object", () => {
    expect(typeof coordOne).toBe("object");
    expect(typeof coordTwo).toBe("object");
  });

  it("Should have xCoord key", () => {
    expect(coordOne).toHaveProperty("xCoord");
    expect(coordTwo).toHaveProperty("xCoord");
  });

  it("Should have yCoord key", () => {
    expect(coordOne).toHaveProperty("yCoord");
    expect(coordTwo).toHaveProperty("yCoord");
  });

  it("Should ONLY have two keys", () => {
    expect(Object.keys(coordOne).length).toBe(2);
    expect(Object.keys(coordTwo).length).toBe(2);
  });

  it("Should have the correct value for xCoord key", () => {
    expect(coordOne.xCoord).toBe(5);
    expect(coordTwo.xCoord).toBe(45);
  });

  it("Should have the correct value for yCoord key", () => {
    expect(coordOne.yCoord).toBe(10);
    expect(coordTwo.yCoord).toBe(17);
  });
});

xdescribe("Testing Alert class", () => {
  const logOutAlert = new Alert("Are you sure you want to log out?");
  const deleteAlert = new Alert("Are you sure you want to delete this content?");

  it("Should be an object", () => {
    expect(typeof logOutAlert).toBe("object");
    expect(typeof deleteAlert).toBe("object");
  });

  it("Should ONLY have one key", () => {
    expect(Object.keys(logOutAlert).length).toBe(1);
    expect(Object.keys(deleteAlert).length).toBe(1);
  });

  it("Should have a message key", () => {
    expect(logOutAlert).toHaveProperty("message");
    expect(deleteAlert).toHaveProperty("message");
  });

  it("Should have a printMessage function", () => {
    const { printMessage: logOutPrintMessage } = logOutAlert;
    const { printMessage: deletePrintMessage } = deleteAlert;

    expect(typeof logOutPrintMessage).toBe("function");
    expect(typeof deletePrintMessage).toBe("function");
  });

  it("Should return a string when the printMessage method is called", () => {
    expect(typeof logOutAlert.printMessage()).toBe("string");
    expect(typeof deleteAlert.printMessage()).toBe("string");
  });

  it("Should return a correctly formatted string when the printMessage method is called", () => {
    const logOutMessage = "!!!! Are you sure you want to log out? !!!!";
    const deleteMessage = "!!!! Are you sure you want to delete this content? !!!!";

    expect(logOutAlert.printMessage()).toBe(logOutMessage);
    expect(deleteAlert.printMessage()).toBe(deleteMessage);
  });

  it("Should not alter message key after method is called", () => {
    logOutAlert.printMessage();
    deleteAlert.printMessage();
    expect(logOutAlert.message).toBe("Are you sure you want to log out?");
    expect(deleteAlert.message).toBe("Are you sure you want to delete this content?");
  });
});

xdescribe("Testing Engine class", () => {
  let bookShelf;

  beforeEach(() => {
    bookShelf = new Engine();
  });

  it("Should be an object", () => {
    expect(typeof bookShelf).toBe("object");
  });

  it("Should have a engineIsRunning key", () => {
    expect(bookShelf).toHaveProperty("engineIsRunning");
  });

  it("Should set engineIsRunning to false by default", () => {
    expect(bookShelf.engineIsRunning).toBe(false);
  });

  it("Should have a startEngine function", () => {
    expect(typeof bookShelf.startEngine).toBe("function");
  });

  it("Should return a string when the startEngine method is called", () => {
    expect(typeof bookShelf.startEngine()).toBe("string");
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is false", () => {
    expect(bookShelf.startEngine()).toBe("Engine has started running");
  });

  it("Should set engineIsRunning to true after startEngine() has been called", () => {
    bookShelf.startEngine();
    expect(bookShelf.engineIsRunning).toBe(true);
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is true", () => {
    bookShelf.startEngine();
    expect(bookShelf.startEngine()).toBe("Engine is already running");
  });

  it("Should have a stopEngine function", () => {
    expect(typeof bookShelf.stopEngine).toBe("function");
  });

  it("Should return a string when the stopEngine method is called", () => {
    expect(typeof bookShelf.stopEngine()).toBe("string");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is false", () => {
    expect(bookShelf.stopEngine()).toBe("Engine has already stopped running");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is true", () => {
    bookShelf.startEngine();
    expect(bookShelf.stopEngine()).toBe("Engine has stopped running");
  });

  it("Should set engineIsRunning to false after startEngine() and stopEngine() have been called", () => {
    bookShelf.startEngine();
    bookShelf.stopEngine();
    expect(bookShelf.engineIsRunning).toBe(false);
  });
});

xdescribe("Testing Counter class", () => {
  let lowCount, highCount, noCount;

  beforeEach(() => {
    lowCount = new Counter(5);
    highCount = new Counter(500);
    noCount = new Counter();
  });

  it("Should be an object", () => {
    expect(typeof lowCount).toBe("object");
    expect(typeof highCount).toBe("object");
    expect(typeof noCount).toBe("object");
  });

  it("Should have a count key", () => {
    expect(lowCount).toHaveProperty("count");
    expect(highCount).toHaveProperty("count");
    expect(noCount).toHaveProperty("count");
  });

  it("Should have correct count when initialised", () => {
    expect(lowCount.count).toBe(5);
    expect(highCount.count).toBe(500);
    expect(noCount.count).toBe(0);
  });

  it("Should ONLY have one key", () => {
    expect(Object.keys(lowCount).length).toBe(1);
    expect(Object.keys(highCount).length).toBe(1);
    expect(Object.keys(noCount).length).toBe(1);
  });

  it("Should have a increment function", () => {
    const { increment: incrementLowCount } = lowCount;
    const { increment: incrementHighCount } = highCount;
    const { increment: incrementNoCount } = noCount;

    expect(typeof incrementLowCount).toBe("function");
    expect(typeof incrementHighCount).toBe("function");
    expect(typeof incrementNoCount).toBe("function");
  });

  it("Should return a number when the increment method is called", () => {
    expect(typeof lowCount.increment()).toBe("number");
    expect(typeof highCount.increment()).toBe("number");
    expect(typeof noCount.increment()).toBe("number");
  });

  it("Should increment count by 1", () => {
    lowCount.increment();
    highCount.increment();
    noCount.increment();

    expect(lowCount.count).toBe(6);
    expect(highCount.count).toBe(501);
    expect(noCount.count).toBe(1);
  });

  it("Should increment count by 1 100 times", () => {
    for (let index = 0; index < 100; index++) {
      lowCount.increment();
      highCount.increment();
      noCount.increment();
    }

    expect(lowCount.count).toBe(105);
    expect(highCount.count).toBe(600);
    expect(noCount.count).toBe(100);
  });

  it("Should have a decrement function", () => {
    const { decrement: decrementLowCount } = lowCount;
    const { decrement: decrementHighCount } = highCount;
    const { decrement: decrementNoCount } = noCount;

    expect(typeof decrementLowCount).toBe("function");
    expect(typeof decrementHighCount).toBe("function");
    expect(typeof decrementNoCount).toBe("function");
  });

  it("Should return a number when the decrement method is called", () => {
    expect(typeof lowCount.increment()).toBe("number");
    expect(typeof highCount.increment()).toBe("number");
    expect(typeof noCount.increment()).toBe("number");
  });

  it("Should decrement count by 1", () => {
    lowCount.decrement();
    highCount.decrement();

    expect(lowCount.count).toBe(4);
    expect(highCount.count).toBe(499);
  });

  it("Should decrement count by 1 100 times", () => {
    for (let index = 0; index < 100; index++) {
      highCount.decrement();
    }

    expect(highCount.count).toBe(400);
  });

  it("Should not decrement below 0", () => {
    for (let index = 0; index < 500; index++) {
      lowCount.decrement();
      highCount.decrement();
      noCount.decrement();
    }

    expect(lowCount.count).toBe(0);
    expect(highCount.count).toBe(0);
    expect(noCount.count).toBe(0);
  });
});

xdescribe("Testing Modal class", () => {
  let modal;

  let htmlReference;

  beforeEach(() => {
    htmlReference = {
      innerHtml: "",
      classList: {
        list: ["hide"],
        toggle(cssClass) {
          if (this.list.includes(cssClass)) {
            this.list = this.list.filter((listItem) => listItem !== cssClass);
          } else {
            this.list.push(cssClass);
          }
        },
      },
    };
    modal = new Modal(htmlReference, "Error", "Sorry there has been some sort of error");
  });

  it("Should be an object", () => {
    expect(typeof modal).toBe("object");
  });

  it("Should have htmlRef, title and message keys", () => {
    expect(modal).toHaveProperty("htmlRef");
    expect(modal).toHaveProperty("title");
    expect(modal).toHaveProperty("message");
  });

  it("Should have correct values assigned to the keys", () => {
    expect(modal.htmlRef).toEqual(htmlReference);
    expect(modal.title).toBe("Error");
    expect(modal.message).toBe("Sorry there has been some sort of error");
  });

  it("Should ONLY have three keys", () => {
    expect(Object.keys(modal).length).toBe(3);
  });

  it("Should have renderHtml and toggleModalfunctions", () => {
    expect(typeof modal.renderHtml).toBe("function");
    expect(typeof modal.displayModal).toBe("function");
  });

  it("Should update the innerHtml of the htmlRefernce after renderHtml() has been called", () => {
    const expectedHtml = `
    <div class="modal">
      <h2 class="modal--title">Error</h2>
      <p class="modal--message">Sorry there has been some sort of error</p>
    </div>
    `;

    modal.renderHtml();
    expect(htmlReference.innerHtml).toBe(expectedHtml);
  });

  it("Should update the innerHtml of the htmlRefernce dynamically after renderHtml() has been called", () => {
    modal = new Modal(htmlReference, "Good Morning", "Have a great day!");

    const expectedHtml = `
    <div class="modal">
      <h2 class="modal--title">Good Morning</h2>
      <p class="modal--message">Have a great day!</p>
    </div>
    `;

    modal.renderHtml();
    expect(htmlReference.innerHtml).toBe(expectedHtml);
  });

  it("Should update the classList of the htmlRefernce - remove hide", () => {
    modal.displayModal();

    expect(htmlReference.classList.list).toEqual([]);
  });

  it("Should update the classList of the htmlRefernce - add hide", () => {
    modal.displayModal();
    modal.displayModal();

    expect(htmlReference.classList.list).toEqual(["hide"]);
  });

  it("Should update the classList with the string of hide", () => {
    modal.displayModal();
    modal.displayModal();
    expect(htmlReference.classList.list[0]).toBe("hide");
  });
});

xdescribe("Testing BookShelf class", () => {
  let bookShelf;
  const bookArray = [
    "JavaScript: The Definitive Guide",
    "JavaScript: The Good Parts",
    "The Google story",
    "React for Dummies",
  ];

  const newBookArray = bookArray.filter((book) => book.includes("JavaScript"));

  beforeEach(() => {
    bookShelf = new BookShelf("aa0200a01", bookArray);
  });

  it("Should be an object", () => {
    expect(typeof bookShelf).toBe("object");
  });

  it("Should have a _shelfId and a _booksOnShelf key", () => {
    expect(bookShelf).toHaveProperty("_shelfId");
    expect(bookShelf).toHaveProperty("_booksOnShelf");
  });

  it("Should set _booksOnShelf to [] by default", () => {
    bookShelf = new BookShelf();
    expect(bookShelf._booksOnShelf).toEqual([]);
  });

  it("Should have the getters and setters", () => {
    expect(bookShelf).toHaveProperty("booksOnShelf");
    expect(bookShelf).toHaveProperty("latestBook");
    expect(bookShelf).toHaveProperty("addBookToShelf");
  });

  it("Should return the _booksOnShelf written as a getter", () => {
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });

  it("Should update the _booksOnShelf written as a setter", () => {
    bookShelf.booksOnShelf = newBookArray;
    expect(bookShelf.booksOnShelf).toEqual(newBookArray);
  });

  it("Should return the latestBook written as a getter", () => {
    const lastItem = bookArray[bookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should update using a setter and return the latestBook written as a getter", () => {
    bookShelf.booksOnShelf = newBookArray;
    const lastItem = newBookArray[newBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should Error if latestBook is attempted to be assigned", () => {
    expect(() => (bookShelf.latestBook = "book")).toThrow();
  });

  it("Should add a new book to the bookshelf written as a setter", () => {
    bookArray.push("Added");
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });

  it("Should handle multiple books being added to the shelf", () => {
    bookShelf = new BookShelf();
    const largeBookArray = [...bookArray, ...bookArray, ...bookArray];
    largeBookArray.forEach((book) => (bookShelf.addBookToShelf = book));
    expect(bookShelf.booksOnShelf.length).toEqual(largeBookArray.length);
  });

  it("Should match last item when multiple books have been added", () => {
    bookShelf = new BookShelf();
    const largeBookArray = [...bookArray, ...bookArray, ...bookArray];
    largeBookArray.forEach((book) => (bookShelf.addBookToShelf = book));
    const lastItem = largeBookArray[largeBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should add a new book to the END of bookshelf written as a setter", () => {
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.latestBook).toBe("Added");
  });
});

// / beforeEach(() => {
//   coordOne = new Coordinate(5, 10);
//   coordTwo = new Coordinate(45, 17);
// });

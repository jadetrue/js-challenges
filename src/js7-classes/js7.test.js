import challenge from "./index";

const { Coordinate, Alert, Engine, Counter } = challenge;

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

describe("Testing Engine class", () => {
  let engine;

  beforeEach(() => {
    engine = new Engine();
  });

  it("Should be an object", () => {
    expect(typeof engine).toBe("object");
  });

  it("Should have a engineIsRunning key", () => {
    expect(engine).toHaveProperty("engineIsRunning");
  });

  it("Should set engineIsRunning to false by default", () => {
    expect(engine.engineIsRunning).toBe(false);
  });

  it("Should have a startEngine function", () => {
    expect(typeof engine.startEngine).toBe("function");
  });

  it("Should return a string when the startEngine method is called", () => {
    expect(typeof engine.startEngine()).toBe("string");
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is false", () => {
    expect(engine.startEngine()).toBe("Engine has started running");
  });

  it("Should set engineIsRunning to true after startEngine() has been called", () => {
    engine.startEngine();
    expect(engine.engineIsRunning).toBe(true);
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is true", () => {
    engine.startEngine();
    expect(engine.startEngine()).toBe("Engine is already running");
  });

  it("Should have a stopEngine function", () => {
    expect(typeof engine.stopEngine).toBe("function");
  });

  it("Should return a string when the stopEngine method is called", () => {
    expect(typeof engine.stopEngine()).toBe("string");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is false", () => {
    expect(engine.stopEngine()).toBe("Engine has already stopped running");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is true", () => {
    engine.startEngine();
    expect(engine.stopEngine()).toBe("Engine has stopped running");
  });

  it("Should set engineIsRunning to false after startEngine() and stopEngine() have been called", () => {
    engine.startEngine();
    engine.stopEngine();
    expect(engine.engineIsRunning).toBe(false);
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

// / beforeEach(() => {
//   coordOne = new Coordinate(5, 10);
//   coordTwo = new Coordinate(45, 17);
// });

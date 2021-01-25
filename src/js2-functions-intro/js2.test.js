import challenge from "./index";

const {
  createFullName,
  findSmallestNumber,
  multiplyNumbers,
  checkIfNewHighScore,
  celsiusToFarenheit,
  calculateLifetimeSupply,
  getGrade,
  calculateAreaOfCirlce,
  getStudentSummary
} = challenge;

describe("createFullName() tests", () => {
  it("Should have a return", () => {
    expect(createFullName("John", "Smith")).toBeDefined();
  });

  it("Should work with basic inputs", () => {
    expect(createFullName("John", "Smith")).toBe("John Smith");
  });

  it("Should work with arbritrary inputs", () => {
    expect(createFullName("abc", "def")).toBe("abc def");
  });
});

describe("findSmallestNumber() tests", () => {
  it("Should have a return", () => {
    expect(findSmallestNumber(100, 200)).toBeDefined();
  });

  it("Should return the smallest of two numbers", () => {
    expect(findSmallestNumber(100, 200)).toBe(100);
  });

  it("Should work regardless of order", () => {
    expect(findSmallestNumber(100, 200)).toBe(100);
    expect(findSmallestNumber(200, 100)).toBe(100);
  });
});

describe("multiplyNumbers() tests", () => {
  it("Should have a return", () => {
    expect(multiplyNumbers(2, 6)).toBeDefined();
  });

  it("Should multiply 3 and 6 to make 18", () => {
    expect(multiplyNumbers(3, 6)).toBe(18);
  });

  it("Should multiply 12 and 6 to make 72", () => {
    expect(multiplyNumbers(12, 6)).toBe(72);
  });
});

describe("checkIfNewHighScore() tests", () => {
  it("Should have a return", () => {
    expect(checkIfNewHighScore(300, 325)).toBeDefined();
  });

  it("Should tell me if I beat the high score", () => {
    expect(checkIfNewHighScore(350, 325)).toBe("You got a new high score!");
  });

  it("Should tell me if the scores are the same", () => {
    expect(checkIfNewHighScore(325, 325)).toBe("So close!");
  });

  it("Should tell me if I don't beat the high score", () => {
    expect(checkIfNewHighScore(300, 325)).toBe("Better luck next time!");
  });
});

describe("celsiusToFarenheit() tests", () => {
  it("Should have a return", () => {
    expect(celsiusToFarenheit(15)).toBeDefined();
  });

  it("Should return a string", () => {
    expect(typeof celsiusToFarenheit(15)).toBe("string");
  });

  it("Should convert 15 C to 59 F", () => {
    expect(celsiusToFarenheit(15)).toBe("15 degrees celsius is 59 degrees farenheit");
  });
});

describe("calculateLifeTimeSupply() tests", () => {
  it("Should have a return", () => {
    expect(calculateLifetimeSupply(2, 25, 90)).toBeDefined();
  });

  it("Should calculate the correct number if given 2 snickers, 25 years old and 90 years lifeExpectancy", () => {
    expect(calculateLifetimeSupply(2, 25, 90)).toBe(47450);
  });

  it("Should calculate the correct number if given 1 snickers, 20 years old and 70 years lifeExpectancy", () => {
    expect(calculateLifetimeSupply(1.5, 22, 77)).toBe(30112.5);
  });
});

describe("getGrade() tests", () => {
  it("Should have a return", () => {
    expect(getGrade(70)).toBeDefined();
  });
});

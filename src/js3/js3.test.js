import challenge from './index';

test("Find the largest  of two numbers", () => {
  expect(challenge.findLargerOfTwoNumbers(1, 2)).toBe(2);
  expect(challenge.findLargerOfTwoNumbers(-1, 2)).toBe(2);
  expect(challenge.findLargerOfTwoNumbers(3, 3)).toBe(3);
  expect(challenge.findLargerOfTwoNumbers(10, 9)).toBe(10);
});

test("Find the smallest  of three numbers", () => {
  expect(challenge.findSmallestOfThreeNumbers(1, 2, 3)).toBe(1);
  expect(challenge.findSmallestOfThreeNumbers(1, 2, -3)).toBe(-3);
  expect(challenge.findSmallestOfThreeNumbers(10, 100000, 239823489)).toBe(10);
});

test("calculate grade based on score out of 100", () => {
  expect(challenge.calculateGrade(30)).toBe("D");
  expect(challenge.calculateGrade(70)).toBe("C");
  expect(challenge.calculateGrade(80)).toBe("B");
  expect(challenge.calculateGrade(90)).toBe("A");
  expect(challenge.calculateGrade(100)).toBe("A");
  expect(challenge.calculateGrade(-100)).toBe("D");
  expect(challenge.calculateGrade("Hello")).toBe("Not a valid score!");
  expect(challenge.calculateGrade("100")).toBe("Not a valid score!");
});

test("Generate the report card greeting statement", () => {
  expect(challenge.generateReportCardGreeting("Liam", 100)).toBe("Well done Liam! you received the highest grade of A");
  expect(challenge.generateReportCardGreeting("Shea", "Hello")).toBe("Sorry Shea, we were unable to proccess your score results");
  expect(challenge.generateReportCardGreeting("Matt", 50)).toBe("Sorry Matt, you received a failing grade of D");
  expect(challenge.generateReportCardGreeting("John", 80)).toBe("Well done John, you received a grade of B");
})


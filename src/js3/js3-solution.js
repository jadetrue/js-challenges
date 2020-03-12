/* JS3 builds on the previous challenges and adds the use of Conditionals (If, else, switch) 
*  & calling your own functions.
*/

/**
 * A function that takes two numbers and returns the largest of the two numbers
 *
 * @return {number} largest number - e.g. 10
 */
export const findLargerOfTwoNumbers = (num1, num2) => {
  if (num1 >= num2) return num1;
  return num2;
}

/**
 * A function that takes three numbers and returns the smallest of the three numbers
 *
 * @return {number} smallest number - e.g. 10
 */
export const findSmallestOfThreeNumbers = (num1, num2, num3) => {
  if (num1 <= num2 && num1 <= num3) return num1;
  if (num2 <= num1 && num2 <= num3) return num2;
  return num3;
}

/**
 * A function that takes a number from 0 - 100 and returns a letter grade
 * This function can also handle incorrect input data and returns "Not a valid score!"
 * 0 - 69 is D
 * 70 - 79 is C
 * 80 - 89 is B
 * 90 - 100 is A
 *
 * @return {string} grade - The relevant grade for the score e.g. A
 */
export const calculateGrade = (score) => {
  if (typeof score != "number") return "Not a valid score!";
  if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

/**
 * A function that takes a persons name and a score from 0 - 100 
 * It generates a greeting for a report card based on the score
 * 0 - 69 is D "Sorry NAME, you received a failing grade of D"
 * 70 - 79 is C "Dear NAME, you received a grade of C"
 * 80 - 89 is B "Well done NAME, you received a grade of B"
 * 90 - 100 is A "Well done NAME! you received the highest grade of A"
 * Error - "Sorry NAME, we were unable to proccess your score results"
 *
 * @return {string} grade - The relevant grade for the score e.g. A
 */
export const generateReportCardGreeting = (name, score) => {
  let greeting = "";
  let grade = calculateGrade(score);
  switch (grade) {
    case 'D':
      greeting = "Sorry " + name + ", you received a failing grade of D";
      break;
    case 'C':
      greeting = "Dear " + name + ", you received a grade of C";
      break;
    case 'B':
      greeting = "Well done " + name + ", you received a grade of B";
      break;
    case 'A':
      greeting = "Well done " + name + "! you received the highest grade of A";
      break;
    default:
      greeting = "Sorry " + name + ", we were unable to proccess your score results";
  }
  return greeting;
}
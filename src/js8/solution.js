/* Objects - See the data.js file for the objects used in the tests */

/**
 * A function that takes in a person object and will work out if they are rich ( > 1000 per annum)
 *
 * @param {object} person - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {boolean} true if they are rich, false otherwise
 */
export const isRich = person => {
  return person.incomePerAnnum > 1000;
};

/**
 * A function that takes in two people objects and checks to see if their eye colours match
 *
 * @param {object} person1 - A person object e.g. {name: "Elizabeth Bennet"}
 * @param {object} person2 - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {boolean} true if they match
 */
export const matchingEyeColour = (person1, person2) => {
  return person1.eyeColour == person2.eyeColour;
};

/**
 * A function that takes a person and increments their age by 1 and calls the calculateFinancesYearEnd function for them
 *
 * @param {object} person - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {object} the updated person
 */
export const yearPassed = person => {
  person.age++;
  person.calculateFinancesYearEnd();
  return person;
};

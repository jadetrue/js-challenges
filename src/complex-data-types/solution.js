/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  const employeeQuotes = employeeArr.map((employee) => {
    return employee.quote;
  });

  return employeeQuotes;
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  const managerArr = employeeArr.filter((employee) => {
    return employee.isManagement;
  });

  return managerArr;
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  const keys = Object.keys(object);
  const numberOfKeys = keys.length;

  return numberOfKeys;
};

/* Intermediate Challenges */

// Find the object which matches a certain condition

// Total up a shopping basket (reduce)

// Modify every object in array and return the array of objects

/* Advanced Challenges */

// Return a new array of objects but each object only has a some of the keys

// Check if each object has a certain key, if it doesn't, add a default value (data cleaning)

/* Expert Challenge */

// Check if each object matches the specified structure. Remove unnecessary keys and add default values for missing keys.

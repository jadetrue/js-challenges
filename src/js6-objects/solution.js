/* This challenge build upon previous knowledge and introduces the use of objects */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes a furniture object from the catalogue and returns its price
 *
 * furniture = {
 *  name: "lack",
 *  price: 6
 * }
 *
 * @param {object} furniture - A piece of furniture from the catalogue
 * @param {string} furniture.name - The name of the furniture
 * @param {number} furniture.price - The price of the furniture
 * @return {number} The price of the piece of furniture
 */
export const getFurniturePrice = (furniture) => {
  const price = furniture.price;

  return price;
};

/**
 * A function to attach to a store location to a furniture object from the catalogue
 *
 * @param {object} furniture - A piece of furniture from the catalogue
 * @param {string} furniture.name - The name of the furniture
 * @param {number} furniture.price - The price of the furniture
 * @param {string} location - A store location to attach to a piece of furniture
 * @returns {{name: string, price: number, location: string}} furniture - A furniture object from the catalogue
 */
export const addFurnitureStoreLocation = (furniture, location) => {
  furniture.location = location;

  return furniture;
};

/**
 * A function which takes a selection of arguments relating to a space ship and uses them
 * to create a space ship object
 *
 * @param {string} name The name of the space ship
 * @param {number} noOfSeats The number of seat of the space ship
 * @param {string} engineType The type of engine in the space ship
 * @param {boolean} canTravelSolarSystems The ability for the space ship to travel to different solar systems
 * @returns {{name: string, noOfSeats: number, engineType: string, canTravelSolarSystems: boolean}} spaceship - The space ship object
 */
export const makeSpaceship = (name, noOfSeats, engineType, canTravelSolarSystems) => {
  const spaceship = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems
  };

  return spaceship;
};
/* Intermediate Challenges */

/**
 * A function that will attach a username to a user but only if the user doesn't already have one
 *
 * @param {object} user - A user object
 * @param {string} user.name - The users name
 * @param {string} [user.username] - The users username (OPTIONAL)
 * @param {string} username - A username to attach
 * @returns {{name: string, username: string}} User - The user object with the same username or a new one
 */
export const addUserName = (user, username) => {
  const hasUserName = user.hasOwnProperty("username");

  if (!hasUserName) {
    user.username = username;
  }

  return user;
};

/**
 * A function which takes a customer object from the database and returns the same object where the name has been
 * split into first and last name and reattached to the object
 *
 * @param {object} customer A customer object from the database
 * @param {string} customer.fullName - The cutsomers full name
 * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
 */
export const splitFullNameToFirstAndLast = (customer) => {
  const fullName = customer.fullName;
  const splitNames = fullName.split(" ");
  const firstName = splitNames[0];
  const lastName = splitNames[1];

  customer.firstName = firstName;
  customer.lastName = lastName;
  return customer;
};

/**
 * A function which access a given key on an object
 *
 * HELPFUL RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 *
 * @param {object} object An object with some key value pairs (Not important what they are)
 * @param {string} key A key to access on the object
 * @returns {any} value - The value you have accessed on the object
 */
export const accessGivenKey = (object, key) => {
  const value = object[key];

  return value;
};

/* Advanced Challenges */

/**
 * A function which takes a user object, accesses it's address and returns it as a string to print onto a shipping label
 * "4 Privet Drive Little Whinging Surrey CR3 0AA"
 *
 * @param {object} user - A user object from the database
 * @param {number} user.id - The user ID
 * @param {string} user.name - The users name
 * @param {object} user.address - The users address
 * @param {string} user.address.line1 - Line 1 of the address
 * @param {string} user.address.line2 - Line 2 of the address
 * @param {string} user.address.city - City of the address
 * @param {string} user.address.postcode - postcode of the address
 * @returns {string} An address string for a shipping label
 */
export const getUserAddress = (user) => {
  const address = `${user.address.line1} ${user.address.line2} ${user.address.city} ${user.address.postcode}`;

  return address;
};

// Do some arrays on objects / nested objects stuff here

/* Expert Challenge */

// Iterate over an object

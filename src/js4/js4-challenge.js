// The data file contains information for 7 people
import { people } from "./js4-data";

/**
 * Whether they are vegetarian
 *
 * @param {number} personID - position in the people array
 * @return {boolean} is they are a vegetarian
 */
export const isVegetarian = personID => {
  // your code here
};

/**
 * Whether their name is too long to write on a name tag
 * Name tag length ( Up to 6 characters)
 *
 * @param {number} personID - position in the people array
 * @return {boolean}
 */
export const canFitOnANameCard = personID => {
  // your code here
};

/**
 * Life expectancy
 * Life expectancy of a Vegetarian: 90
 * Life expectancy of a Meat Eater: 95
 *
 * @param {number} personID - position in the people array
 * @return {number} Life expectancy
 */
export const getLifeExpectancy = personID => {
  // your code here
};

/**
 * years before they die
 *
 * @param {number} personID - position in the people array
 * @return {number}
 */
export const yearsRemaining = personID => {
  // your code here
};

/**
 * Whether they can ride on a rollercoaster
 * Minimum height to ride on a rollercoaster: 1.2m
 *
 * @param {number} personID - position in the people array
 * @return {boolean}
 */
export const canRideOnARollercoaster = personID => {
  // your code here
};

/**
 * Can buy beer in the UK
 *
 * @param {number} personID - position in the people array
 * @return {boolean}
 */
export const canBuyBeer = personID => {
  // your code here
};

/**
 * Show a friendly summary of the person
 * Example friendly summaries:
 * Steven is a vegetarian, is 100cm tall and has 12 years to live
 * Fred likes meat, is 153cm tall and has 7 years to live
 *
 * @param {number} personID - position in the people array
 * @return {string} summary e.g. "Steven is a vegetarian, is 100cm tall and has 12 years to live"
 */
export const getSummary = personID => {
  // your code here
};

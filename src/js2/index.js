// This file allows us to dynamically export either the solution or challenge file
// depending on the arguments used to run the test from the command line

import * as challenge from './js2-challenge';
import * as solution from './js2-solution';

let exportedModule = solution;

if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__){
    exportedModule = challenge;
}

export default exportedModule;
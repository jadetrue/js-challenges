// This file allows us to dynamically export either the solution or challenge file
// depending on the arguments used to run the test from the command line

import * as challenge from './solution';
import * as solution from './solution';

let exportedModule = challenge;

if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__){
    exportedModule = challenge;
}

export default exportedModule;
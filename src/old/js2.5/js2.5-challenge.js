/*

Conditions challenge

Print out the following code. Write next to each statement what you think the output will be.
Once finished, compare with a colleague. You can run the file afterwards using node to check your answers.

*/


var x = 5;
var name = 'Bob';

console.log("==");
console.log(x == 8);
console.log(x == 5);
console.log(x == '5');
console.log(name == 'Bob');
console.log(name == 'bob');

console.log("===");
console.log(x === 5);
console.log(x === '5');
console.log(name === 'Bob');
console.log(name === 'bob');

console.log("!=");
console.log(x != 5);
console.log(x != 8);
console.log(name != 'Bob');
console.log(name != 'bob');

console.log("!==");
console.log(x !== 5);
console.log(x !== '5');
console.log(x !== 8);

console.log(">");
console.log(x > 4);
console.log(x > 5);
console.log(x > 6);
console.log(name > 0);

console.log("<");
console.log(x < 4);
console.log(x < 5);
console.log(x < 6);

console.log(">=");
console.log(x >= 4);
console.log(x >= 5);
console.log(x >= 6);

console.log("<=");
console.log(x <= 4);
console.log(x <= 5);
console.log(x <= 6);

console.log("&&");
console.log(x == 5 && x < 6);
console.log(x == 5 && x >= 4);

console.log("||");
console.log(x == 4 || x == 2);
console.log(x == 4 || x >= 4);
console.log(x == 4 || name == 'Bob');
console.log(x > 4 || name != 'Bob');
console.log(x < 5 || name == 'bob');

console.log("Advanced");
console.log( ( x == 5 && name == "bob" ) || ( x < 6 && (x / 2) < 3 ) );
console.log( ( x > 0 || x == -5 ) && ( x == '5' ) );
console.log( (x == 0 || 1 ) );
console.log( !x == false );
console.log( x == 5 == true );
console.log( x == true == 5 );
console.log( x = 5 );

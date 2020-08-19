/*
TYPES

1-grammerAndTypes
    05-types.js
*/

//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/*
Undefeined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned avalue of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Null values are for gag gifts. Undefined are gifts given when the gift is accidentally empty.
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999
console.log(precise);

let rounded = 999999999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 +100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 +'100';
console.log(third);
console.log(typeof third);

//interpolation
//lets you use strings with dynamic content (they require backticks)

//Example 1:
let age = 32;
let string = 'my age is: ${age}'
console.log(string);





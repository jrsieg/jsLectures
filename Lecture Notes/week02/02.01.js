/**************************
FIZZ BUZZ (Conditionals Only)
**************************/
/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let fb = 15;

if(fb % 3 == 0 && fb % 5 == 0){
    console.log('fizzbuzz');
} else if (fb % 5 == 0) {
    console.log('buzz');
} else if (fb % 3 == 0) {
    console.log('fizz');
} else {
    console.log('this number is not divisible by 3 or 5');
}

// SWITCH

let FB = 30;

switch(true){
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log('Fizzbuzz');
        break;
    case (FB % 3 == 0):
        console.log('Fizz');
        break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
}

// TERNARY

let FB = 10;

(FB % 3 == 0 && FB % 5 == 0)? console.log('Fizzbuzz') 
    : (FB % 3 == 0)? console.log('fizz') 
    : (FB % 5 == 0)? console.log('Buzz') 
    : console.log(FB);

/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/
/*
    Challenge: 
        - Add the even indexes from the alphabet array to a new array using a for loop
*/
/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/
/* GOLD
    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for(let i = 0; i < alphabet.length; i++){
    if(i % 2 == 0){
        arr.push(alphabet[i]);
        console.log(arr);
    } else {
        console.log(`the index ${i} is an odd number`);
    }

} 

/* 
PLATINUM
 */

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for(let i = 0; i < alphabet.length; i++){
    (i % 2 ==0) ? (arr.push(alphabet[i]), con.length(arr))
    : console.log(`the index $[i] is an odd number`);
}

/*
************
 FOR OF LOOPS
************
    - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
    - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on). 
                     value
        let arr = ['chicken', 'turkey', 'duck']
                       0         1        2
                     index
*/

/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for(pie of pies){
    console.log(pie);
}



/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for(pie of pies){
    if(pie.includes('apple')){
        console.log(`${pie} pie is a fruit pie`)
    } else {
        console.log(`${pie} pie is not a fruit pie :(`)
    }
    
}

/* GOLD
    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
for(pie of pies){
    if(pie.includes('apple') || pie.includes('blueberry') || pie.includes('peach') || pie.includes('cherry')){
        console.log(`${pie} pie is a type of fruit pie`);
    } else {
        console.log(`${pie} pie is not a type of fruit pie`);
    }
}

/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 
    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

let obj = {
    key1: 'value',
    key2: 'value',
    key3: 'value'
};

console.log(Object.keys(obj).length)

for(key of obj){
    console.log(key);
}


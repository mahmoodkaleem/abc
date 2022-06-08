// Write a JavaScript program to swap 2 number without using 3rd variable.

//take input from the users
let a = 8;
let b = 7;

//swap variables
a = a + b - a;
b = a + b - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

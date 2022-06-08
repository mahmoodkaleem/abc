// Write a JavaScript program to get the difference between a given number and 13,if the number is greater than 13 return double the absolute difference
let num = 2;
let result;
if (num > 13) {
  result = 2 * (num - 13);
  console.log(result);
} else {
  result = 13 - num;
  console.log(result);
}

// Write a JavaScript program to compute the absolute difference between a specified number and 19.Returns triple their absolute difference if the specified number is greater than 19

let specifiedNum = 21;
let result;
if (specifiedNum > 19) {
  result = 3 * (specifiedNum - 19);
  console.log(result);
} else {
  result = 19 - specifiedNum;
  console.log(result);
}

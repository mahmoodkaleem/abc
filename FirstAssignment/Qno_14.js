// Write a JavaScript program to check whether three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range
let num1 = 69;
let num2 = 59;
let num3 = 90;
if (
  Number.isInteger(num1) &&
  Number.isInteger(num2) &&
  Number.isInteger(num3)
) {
  if ((99 >= num1 && num1 >= 50) ||(99 >= num2 && num1 >= 50) ||(99 >= num3 && num1 >= 50)
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Entered number is not Integer");
}

// Write a JavaScript program to check from two given integers,whether one is positive and another one is negative

let a=10.7;
let b=-20;
if (Number.isInteger(a) && Number.isInteger(b)) {
  if (a > 0 && b > 0) {
    console.log(a + " and " + b + " : is +ve Number");
  } else if (a < 0 && b < 0) {
    console.log(a + " and " + b + " : is -ve Number");
  } else if (a > 0 && b < 0) {
    console.log(a + " is +ve " + " and " + b + ": is -ve Number");
  } else {
    console.log(a + " is -ve " + "and" + b + ": is +ve Number");
  }
} else {
  console.log("Number is not integer");
}

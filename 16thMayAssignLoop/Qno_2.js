// write a program to find the power of a number using for loop
let base = 9;
let power = 8;
let result = 1;
while (power > 0) {
  result = result * base;
  power--;
}
console.log(result); //problem: when base and power will be zero and power will be negative


// 2nd method
let base1 = 0;
let power1 = 0;
let result1 = 1;
for (i = 0; i < power1; i++) {
  result1 = result1 * base1;
}
console.log(result1);

// 3rd method (recursion)
function basePower(base2, power2) {
  if (power2 == 0) {
    return 1;
  }
  return base2 * basePower(base2, power2 - 1);
}
console.log(basePower(0, 0)); //problem: when base and power will be zero and power will be negative

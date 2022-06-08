// WAF called sumRange .It will take a number and return the sum of all numbers up to the number passed in.

// method 1
function sumRange(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}
console.log(sumRange(10));

// method 2
function sumRange1(n) {
  let sum1 = 0;
  for (i = 1; i <= n; i++) {
    sum1 = sum1 + i;
  }
  return sum1;
}
console.log(sumRange1(10));

// method 3
function sumRange2(n) {
  let sum2 = 0;
  for (i = n; i >= 1; i--) {
    sum2 = sum2 + i;
  }
  return sum2;
}
console.log(sumRange2(10));

// method 4 (recursion)
function sumRange3(n) {
  let sum3;
  if (n == 1) {
    return 1;
  } else {
    sum3 = n + sumRange3(n - 1);
  }
  return sum3;
}
console.log(sumRange3(20));

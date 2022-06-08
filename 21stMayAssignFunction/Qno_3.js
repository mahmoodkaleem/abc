// WAF that returns the factorial of a number

// method 1
function factorial(n) {
  let result = 1;
  if (n < 0) {
    return 'Number is negative & FACTORIAL of negative number is not defined';
  } else if (n >= 1) {
    for (i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  } else {
    return 1;
  }
}
console.log(factorial(-5));

// method 2 (recursion)
function factorial1(n) {
  let result1;
  if (n == 1 || n==0) {
    return 1;
  } else {
    result1 = n * factorial1(n - 1);
  }
  return result1;
}
console.log(factorial1(5));

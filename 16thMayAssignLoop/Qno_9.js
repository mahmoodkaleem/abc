// WAP to find factorial of a number
let num = 0;
let factorial = 1;
if (num == 0) {
  factorial = 1;
  console.log(factorial);
}else if(num>0) {
  for (i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}else{
    console.log('factorial of negative number is not defined')
}

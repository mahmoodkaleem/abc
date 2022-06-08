// WAF to get the first n Fibonacci numbers
let num = 0;
 let num1 = 1;
 let num2;
 let n = 2;
// console.log(num);
// console.log(num1);
while(n < 10){
   num2 = num1 + num;
   console.log(num + num1+ num2);
   num = num1;
   num1 = num2;
   n++;
}
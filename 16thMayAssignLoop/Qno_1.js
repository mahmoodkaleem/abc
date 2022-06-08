// WAP to find no of digits in a number

console.log(`...First method...`)
let num = 123456789;
let numDigit = num.toString().length;
console.log(numDigit);

console.log(`...Second method...`)
let num1 = 12345678;
let numDigit1 = 0;
while(num1>0){
    num1 = Math.floor(num1/10);
    numDigit1++;
}
console.log(numDigit1);

console.log(`...Third method...`)
let num2=1234567;
num2Str= num2.toString();
let numDigit2=0;
for(i=0; i<num2Str.length; i++){   
    numDigit2++;
}
console.log(numDigit2);

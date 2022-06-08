
// WAP to calculate the sum of digits in a number
let num = 1234567890;
let lastDigit
let sum = 0;
while(num>0){
lastDigit=num%10;
sum= sum+lastDigit;
num= Math.floor(num/10);
}
console.log(sum);
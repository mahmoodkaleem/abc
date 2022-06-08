// WAP to reverse the natural number
let num = 123456789;
let reverseNum = 0;
let lastDigit;
while(num!=0){
    lastDigit= num % 10;
    reverseNum = reverseNum*10 + lastDigit;
    num = Math.floor(num/10)
}
console.log(reverseNum);

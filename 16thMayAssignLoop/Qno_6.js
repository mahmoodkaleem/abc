// WAP to find the no of digits in a number

// 1st method
let number=Math.abs(12345);
let numLength= number.toString().length;
console.log(numLength);

// 2nd method

function getlength(number1) {
    return number1.toString().length;
  }
  console.log(getlength(Math.abs(-12345)));

//   3rd method ( by loop compulsory)

let number2= Math.abs(-123458880);
numLength2=0;
while(number2>0){
    number2= Math.floor(number2/10);
    numLength2 ++
}
console.log(numLength2)

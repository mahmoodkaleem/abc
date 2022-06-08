// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
let n = 0;
if(n>=0){
if (n % 3 == 0 && n % 7 == 0) {
  console.log(n + " is multiple of 3 and 7");
} else if (n % 7 == 0) {
  console.log(n + " is multiple of 7");
} else if (n % 3 == 0) {
  console.log(n + " is multiple of 3");
} else {
  console.log(n + " is not multiple of 3 and 7");
}
}else{
    console.log('Please enter positive number')
}



// dout asked to saddam
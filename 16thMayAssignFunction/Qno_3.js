// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

function str(n){
    let count = 0;
let arrayStr;
   arrayStr=n.split('')
    for(i=0; i<=arrayStr.length; i++){
        if(arrayStr[i]=='a' || arrayStr[i] =='e' || arrayStr[i]=='i' || arrayStr[i]=='o' || arrayStr[i]=='u'){
            count = count +1;
        }
    }
    return count
}
console.log(str('abcdefghijlhjhhfgyugjnoiu'))
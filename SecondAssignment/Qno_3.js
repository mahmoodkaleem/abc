// Write a JavaScript program to check vowel or consonant.

let c = "o";
let vowel = ["a", "e", "i", "o", "u"];
let status1 = false;
for (let j = 0; j < vowel.length; j++) {
  if (vowel[j] == c) {
    status1 = true;
    console.log(c + " is Vowel");
    break;
  }
}
if (!status1) {
  console.log(c + " is not vowel");
}
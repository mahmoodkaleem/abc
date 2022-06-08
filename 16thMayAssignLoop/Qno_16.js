// WAP to find Armstrong's number
let num = 153;
let sum = 0;
let remainder;
let temp = num;
while (temp > 0) {
  remainder = temp % 10;
  sum = sum + remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(num + " is a armstrong number");
} else {
  console.log(num + " is not a armstrong number");
}

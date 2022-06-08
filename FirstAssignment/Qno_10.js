// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. [ Formula :c/S = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

let cTemp = -60,
  fTemp = -40;
cToFahr = (5 * cTemp - 160) / 9;
fToCel = (9 * fTemp + 160) / 5;
console.log(cTemp + " degree Celcious is " + cToFahr + " degree Farhenheit");
console.log(fTemp + " degree Farhenheight is " + fToCel + " degree Celcious");

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = 100;
if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
  console.log(year + " is leap year");
} else {
  console.log(year + " is not leap year");
}

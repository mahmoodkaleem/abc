// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let a = 5,
  b = 6,
  c = 13;
if (a + b > c && b + c > a && c + a > b) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
} else {
  console.log(
    "Triangle is not possible with the given data: Hence Arae is not defined"
  );
}

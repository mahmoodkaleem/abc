// WAF called productOfArray which takes in an array of numbers and returns the product of them

function productOfArray(arr) {
  if (arr.length == 0) {
    return "empty array";
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    const newArr = arr.slice(1, arr.length);
    return arr[0] * productOfArray(newArr);
  }
}
console.log(
  "productOfArray([1,2,3,4,0.1]): ",
  productOfArray([1, 2, 3, 4, 0.1])
);

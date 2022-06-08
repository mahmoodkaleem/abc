// WAF that sums squares of numbers in list that may contain more lists
function productOfArray(arr) {
    if (arr.length == 0) {
      return "empty array";
    } else if (arr.length == 1) {
      return arr[0]*arr[0];
    } else {
      const newArr = arr.slice(1, arr.length);
      return (arr[0]*arr[0]) + productOfArray(newArr);
    }
  }
  console.log(
    "productOfArray([1,2,3,4,0.1]): ",
    productOfArray([1, 2, 3,4,5])
  );
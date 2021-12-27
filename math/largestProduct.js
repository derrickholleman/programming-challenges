// return number that is the largest product formed by two different numbers (array length must be larger than 1)
function largestProduct(arr) {
  if (arr.length < 2) return undefined;
  
  // sort array from smallest to largest
  let sortedArr = arr.sort((a, b) => a - b);
  // take two largest numbers and two smallest
  let largestNums = sortedArr.slice(-2);
  let smallestNums = sortedArr.slice(0, 2);
  // multiply
  let largestNumsProduct = largestNums.reduce(
    (acc, currentNum) => acc * currentNum,
    1
  );
  let smallestNumsProduct = smallestNums.reduce(
    (acc, currentNum) => acc * currentNum,
    1
  );

  // compare results and return largest
  if (largestNumsProduct > smallestNumsProduct) {
    return largestNumsProduct;
  } else {
    return smallestNumsProduct;
  }
}
console.log(largestProduct([3, 5, 2, 6, 8, 1])); // 48
console.log(largestProduct([3, 5, 8, 6, 8, 1])); // 64
console.log(largestProduct([3, 8, 8, 6, 8, 1])); // 64
console.log(largestProduct([11, 11, 11])); // 121
console.log(largestProduct([3, -11, 5, 8, 6, 8, -9, 1])); // 99
console.log(largestProduct([3, -11, 5, 8, 6, 8, 9, 1])); // 72
console.log(largestProduct([3, 5, 2, 6.5, 8, 1])); // 52
console.log(largestProduct([3, 5, 0, 6, 8, 1])); // 48
console.log(largestProduct([0, 0, 0])); // 0
console.log(largestProduct([-5, 10])); // -50
console.log(largestProduct([3])); // undefined

// convert a number to its binary equivalent

function toBinary(num) {
  let bin = 0;
  let rem = 1
  let i = 1
  while (num != 0) {
    rem = num % 2;
    num = parseInt(num / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin
}
console.log(toBinary(10)); // 1010
console.log(toBinary(20)); // 10100
console.log(toBinary(247)); // 11110111
console.log(toBinary(7777)) // 1111001100001

// ALTERNATE SOLUTIONS 

// function toBinary(num) {
//     const result = num.toString(2);
//     return result
// }

// const toBinary = num => num === 0 ? 0 : num % 2 + 10 * toBinary(Math.floor(num / 2));

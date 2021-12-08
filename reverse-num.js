// sorts number from lowest to highest integer within the number

function sortNum(num) {
  return num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(sortNum(97584));

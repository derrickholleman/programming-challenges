// sorts number from highest to lowest integer within the number

function sortNum(num) {
  return num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(sortNum(9090909075));

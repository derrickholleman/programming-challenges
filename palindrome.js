// check if a number is a palindrome

function isPalindrome(num) {
  if (typeof num !== "number") return "Input must be a number";
  if (
    num.toString().split("").reverse().join("") ===
    num.toString().split().join("")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('hello'));

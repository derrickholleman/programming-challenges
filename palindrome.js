// check if a number is a palindrome

function isPalindrome(input) {
  // if string, get rid of potential spaces
  if (typeof input === "string") {
    input = input.replace(/\s/g, '')
  }

  if (
    input.toString().split("").reverse().join("") ===
    input.toString().split().join("")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("nurses run"));

// check if a number is a palindrome

function isPalindrome(input) {
  // if string, get rid of potential non-letter characters
  if (typeof input === "string") {
    input = input.replace(/[^^0-9a-z]/g, '')
  }

  if (
    input.split("").reverse().join("").toLowerCase() ===
    input.split().join("").toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("1,0001"));

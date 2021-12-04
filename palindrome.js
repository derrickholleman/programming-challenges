// check if a number is a palindrome



function isPalindrome(input) {
  // if string, get rid of potential spaces
  if (typeof input === "string") {
    input = input.replace(/[^\w]/g, '')
  }
  // if number, change to string and remove any commas
  if (typeof input === "number") {
    input = input.toString().replace(/,/g, '')
  }

  if (
    input.toString().split("").reverse().join("").toLowerCase() ===
    input.toString().split().join("").toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

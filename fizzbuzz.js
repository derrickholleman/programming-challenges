function fizzBuzz(num) {
    if (num % 5 == 0 && num % 3 == 0) {
        return "Fizz Buzz";
    }
    else if (num % 5 == 0) {
        return "Buzz"
    }
    else if (num % 3 == 0) {
        return "Fizz"
    }
    else {
        return "not fizzbuzz"
    }
}
console.log(fizzBuzz(15))
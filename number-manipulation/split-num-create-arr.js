// if num is odd, split the number into two numbers that can be added together to make the number. largest number should be on the right.  if num is even, split number in two of the the same number
function numberSplit(n) {
	let numArr = []
    if (n % 2 === 0) {
        numArr.push(n / 2, n / 2)
    } else {
        numArr.push(Math.floor(n / 2), Math.ceil(n / 2))
    }
    return numArr
}
console.log(numberSplit(60))
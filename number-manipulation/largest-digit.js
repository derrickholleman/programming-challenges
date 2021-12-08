function highestDigit(number) {
	let largestNum = number.toString().split('').sort((a, b) => b - a)[0]
    return parseInt(largestNum)
}
console.log(highestDigit(987546))
let input = "Hello World!"

function doubleChar(str) {
    let newStr = ''
	for (let i = 0; i < str.length; i++) {
        newStr += str[i].repeat(2)
    } return newStr
}
console.log(doubleChar(input))
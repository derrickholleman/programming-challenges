let input = "2=2"

function isTrue(relation) {
	if (relation.includes('=')) {
        newStr = relation.replace('=', '==')
        return eval(newStr)
    } else {
        return eval(relation)
    }
}
console.log(isTrue(input))
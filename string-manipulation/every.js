let str = 'I Love Learning Javascript'

function checkTitle(title) {
    let strArr = title.split(' ')
    if (strArr.every(str => str[0] === str[0].toUpperCase())) {
        return true
    } else {
        return false
    }
}

console.log(checkTitle(str))
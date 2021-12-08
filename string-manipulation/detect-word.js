function detectWord(str) {
    let finalWord = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase())
        finalWord += str[i]
    } return finalWord
}

console.log(detectWord('bEEFGBuFBRrHgUHlNFYaYr'))
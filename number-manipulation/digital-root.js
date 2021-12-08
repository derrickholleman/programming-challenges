// init sum
// init arr
// while loop condition, sum must be greater than 9
// turn number into array
// convert string array into number array and add togther

function digitalRoot(n) {
    let sum = n
    let arr = []
    
    while (sum > 9) {
        arr = sum.toString().split('')
        sum = arr.reduce((a, b) => Number(a) + Number(b))       
    }
    return sum
}
console.log(digitalRoot(942))
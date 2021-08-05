let data = [87, 23, 44, 50, 8] 

function findAverage(arr) {
    let total = arr.reduce((a, b) => a + b)
    let average = total / arr.length
    if (average.toString().length > 5) {
        return average.toFixed(2)
    } else {
        return average
    }
}
console.log(findAverage(data))

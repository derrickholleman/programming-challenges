let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('')
    let threeDig = numbers.slice(3, 6).join('')
    let lastFour = numbers.slice(6, 10).join('')
    return `(${areaCode}) ${threeDig}-${lastFour}`
}

console.log(createPhoneNumber(phoneNumber))
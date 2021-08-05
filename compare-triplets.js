let nums1 = [17, 28, 30]
let nums2 = [99, 16, 8]

function compareNums(arr1, arr2) {
    let totals = [0, 0]
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            totals[0] += 1
        } 
        else if (arr1[i] === arr2[i]) {
            totals[0] += 0 
            totals[1] += 0
        }
        else {
            totals[1] += 1
        }
    } return totals
}
console.log(compareNums(nums1, nums2))
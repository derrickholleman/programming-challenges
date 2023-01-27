// find the number that repeats only once (answer is 3)
const data = [400, 1, 8, 237, 4, 7, 1, 400, 237, 3, 7, 8, 4];

function findSoloNum(arr) {
  const counts = {};
  let soloValue;

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const [key, value] of Object.entries(counts)) {
    if (value === 1) {
      soloValue = key;
    }
  }

  return soloValue;
}

console.log(findSoloNum(data));

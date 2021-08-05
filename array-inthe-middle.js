let arr1 = ["bottom", "topping"]
let arr2 = ["tomatosauce", "vegetables", "cheese"]

function tuckIn(arr1, arr2) {	
	return [arr1[0], ...arr2, arr1[arr1.length - 1]]
}
console.log(tuckIn(arr1, arr2))
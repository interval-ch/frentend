function inBetween(a, b) {
	return (x) => {
		return (a <= x && x <= b)
	}
}

function inArray(arr) {
	return x => {
		for (let i of arr) { //用 arr.includes(x) 取代更簡潔
			if (i === x) {
				return true
			}
		}
		return false
	}
}

//
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
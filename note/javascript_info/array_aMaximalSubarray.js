function getMaxSubSum(array) {
	let maxSum = 0;
	for (let i = 0; i < array.length; i++) {
		let sum = 0;
		for (let j = i; j < array.length; j++) {
			sum += array[j];
			if (sum > maxSum) maxSum = sum;
		}
	}
	return maxSum;
}
//time complexity of O(n2)
console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
/**
 * @param {number[]} nums
 * @return {number[][]}
 * */

var threeSum = function(nums) {
	let finalAns = [];
	for (let i = 0; i < nums.length-2; i++) {
		for (let j = i + 1; j < nums.length-1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				let sum = nums[i] + nums[j] + nums[k]; 
				if (sum == 0) {

					let ans = [nums[i], nums[j], nums[k]];
					ans.sort();
					
					if (finalAns.length == 0) {
						finalAns.push(ans);
					} else { 
					//try to find a way to remove repeated ans, but fail.
						// for (let n of finalAns) {
						// 	let a = JSON.stringify(n);
						// 	let b = JSON.stringify(ans);
						// 	console.log(a);
						// 	console.log(b);
						// 	if ( a == b ) {
						// 		continue;
						// 	} else {
						// 		finalAns.push(ans);
						// 	}
						// }
					}
				}
			}
		}
	}
	return finalAns;
};


let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
  nums.sort((a,b) => b - a);

  const sum = nums.reduce((total, current) => total + current, 0);
	let indexMoreThanHalf = 0;
	let current = 0;

	for (let i = 0;;i++) {
		if (current > sum/2) {
			indexMoreThanHalf = i;
			break;
		}
		current += nums[i];
	}
  return nums.splice(0, indexMoreThanHalf);
};


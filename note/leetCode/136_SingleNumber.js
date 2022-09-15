/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
	const ople = new Set();
	
	for(let i = 0; i < nums.length; i++) {
			if (ople.has(nums[i])) {
					ople.delete(nums[i])
					continue
			}
			ople.add(nums[i])
	}
	return [...ople][0]
	
};

console.log(singleNumber([2,2,1]));
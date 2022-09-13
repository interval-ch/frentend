/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 			let remain = target - nums[i];
// 			let remainIndex = nums.lastIndexOf(remain);
			
// 			//remain in nums or not?
// 			if (remainIndex !== -1 && i !== remainIndex) {
// 					return [i, remainIndex];
// 			}
// 	}
// 	return [];
// };  
// // //420ms, 42.3mb

//--
var twoSum = function(nums, target) {
  let ans = {};
	
	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] in ans) {
			return [ans[target - nums[i]], i];
		} else {
			ans[nums[i]] = i;
		}
	}
	return [];
};
//91ms , 42.9mb
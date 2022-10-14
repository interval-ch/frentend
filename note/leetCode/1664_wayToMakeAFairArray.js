/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToMakeFair(nums) {
  let counter = 0;

  const left = [0, 0]
  const right = [0, 0]

  for (let i = 0; i < nums.length; i++) {
    right[i % 2] += nums[i]
  }
	console.log(`right:`, right);

  for (let i = 0; i < nums.length; i++) {
    right[i % 2] -= nums[i];

		console.log(`nums[${i}]`, nums[i]);

    if(left[0] + right[1] === left[1] + right[0]) counter++

		console.log(left[0],right[1],`:`,left[1] , right[0]);

		console.log(right);

    left[i % 2] += nums[i];
  }

  return counter;
};

const nums = [2,1,6,4];
console.log(waysToMakeFair(nums));
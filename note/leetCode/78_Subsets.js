/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {

  let res = [[]];
  let arr = [];

  for (let i of nums) {
    
    arr = [];
    
    for (let j of res) {
      arr.push([...j, i])
    }
    
    res.push(...arr)

		console.log(`res =`);
		console.log(res);
  }
  
  return res 
  
};

subsets([1,2,3]);
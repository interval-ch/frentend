/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function(nums) {
  let oddSum = 0; 
  let evenSum = 0 ;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          evenSum += nums[i];
      } else {
          oddSum += nums[i];
      }
  }
  
  
  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          console.log(`i: ${i}`, `num: `, nums[i]);
          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum);
          
          evenSum -= nums[i];

          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum);

          if (evenSum === oddSum) {
              count++; 
          }

          oddSum += nums[i];
          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum);

      } else {
          console.log(`i: ${i}`, `num: `,nums[i]);
          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum);          
          oddSum -= nums[i];

          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum); 
          if (evenSum === oddSum) {
              count++;
          }

          evenSum += nums[i];
          console.log(`evenSum : `,evenSum,`oddSum : `,oddSum); 
          
      }
  }
  
  return count;
};

const nums = [2,1,6,4];
waysToMakeFair(nums);
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const n = nums.length
  let currSum = nums[0]
  let maxSum = nums[0]
  
  for (let i = 1; i < n; i++) {
  currSum = Math.max(nums[i], currSum + nums[i])
  maxSum = Math.max(maxSum, currSum)
  console.log(currSum, maxSum, nums[i])
  }
  
  return maxSum
};
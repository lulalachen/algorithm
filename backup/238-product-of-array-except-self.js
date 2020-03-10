/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//   const size = nums.length
//   const L = [1]
//   for (let i = 1; i < size; i++) {
//   L.push(L[i - 1] * nums[i - 1])
//   }
  
//   const R = [1]
//   for (let i = 1; i < size; i++) {
//   R.push(R[i - 1] * nums[size - i])
//   }
//   R.reverse()

//   const ans = []
//   for (let i = 0; i < size; i++) {
//   ans.push(L[i] * R[i])
//   }

//   return ans
// };

// var productExceptSelf = function(nums) {
//   const size = nums.length
//   const L = Array(size)
//   L[0] = 1
//   for (let i = 1; i < size; i++) {
//   L[i] = L[i - 1] * nums[i - 1]
//   }
  
//   const R = Array(size)
//   R[size - 1] = 1
//   for (let i = size - 2; i >= 0; i--) {
//   R[i] = R[i + 1] * nums[i + 1]
//   }

//   const ans = []
//   for (let i = 0; i < size; i++) {
//   ans.push(L[i] * R[i])
//   }

//   return ans
// };

var productExceptSelf = function(nums) {
  const size = nums.length
  const ans = Array(size)
  ans[0] = 1
  for (let i = 1; i < size; i++) {
  ans[i] = ans[i - 1] * nums[i - 1]
  }
  
  let R = 1
  for (let i = size - 1; i >= 0; i--) {
  ans[i] = ans[i] * R
  R = R * nums[i]
  }

  return ans
}

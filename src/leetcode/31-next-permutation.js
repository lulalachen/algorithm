/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// var nextPermutation = function (nums) {
  
//   let i = nums.length - 2
  
//   while (i >= 0 && nums[i + 1] <= nums[i]) {
//   i--
//   }
  
//   console.log(i)
  
//   if (i >= 0) {
//   let j = nums.length - 1
//   while (j >= 0 && nums[i] >= nums[j]) {
//     j--
//   }
//   console.log('swap', i, j) 
//   swap(nums, i, j)
//   }
//   reverse(nums, i + 1)
// }

// const reverse = (nums, startIndex) => {
//   let i = startIndex
//   let j = nums.length - 1
  
//   while (i < j) {
//   swap(nums, i, j)
//   i++
//   j--
//   }
// }

// const swap = (nums, i, j) => {
//   const temp = nums[i]
//   nums[i] = nums[j]
//   nums[j] = temp
// }


const nextPermutation = nums => {
  // [4, 8, 5, 7, 5, 3, 1]
  //    x   
  const n = nums.length
  let i = n - 2 // last index minus one

  if (nums.length === 1) return
  
  while (i > 0 && nums[i] >= nums[i + 1]) {
  i--
  }
  
  let j = i + 1

  if (nums[i] >= nums[i + 1]) {
  reverseFrom(nums, 0)
  } else  {
  while (j < n - 1) {
    if (nums[i] < nums[j] && nums[i] >= nums[j + 1]) {
    break
    }
    j++
  }
  console.log('swap', i, j)

  swap(nums, i, j)
  reverseFrom(nums, i + 1)
  } 
}

const swap = (nums, i, j) => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

const reverseFrom = (nums, start) => {
  let i = start
  let j = nums.length - 1
  while (i < j) {
  swap(nums, i, j)
  i++
  j--
  }
}
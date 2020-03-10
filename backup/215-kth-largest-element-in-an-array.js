/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   const sortedNums = nums.sort((a, b) => b - a)
//   return sortedNums.splice(k - 1, 1)
// };


var findKthLargest = function (nums, k) {
  if (nums.length === 1) return nums[0]
  let left = 0
  let right = nums.length - 1
  
  while (left <= right) {
  // console.log(nums)
  let pivot = partition(nums, left, right)
  // console.log(pivot, nums)
  const pos = pivot - left + 1
  if (pos < k) {
    k = k - pos
    left = pivot + 1
  } else if (pos > k) {
    right = pivot - 1   
  } else {
    return nums[pivot]
  }
  }
  
  return nums[0]
};

const partition = (nums, left, right) => {
  const pivotIndex = left + Math.floor((right - left) / 2)
  const pivot = nums[pivotIndex]
  
  swap(nums, pivotIndex, right)
  
  let leftBound = left
  let rightBound = right - 1
  
  while (leftBound <= rightBound) {
  if (nums[leftBound] >= pivot) {
    leftBound++
  } else if (nums[rightBound] < pivot) {
    rightBound--
  } else {
    swap(nums, leftBound++, rightBound--)
  }
  }

  swap(nums, leftBound, right);
  return leftBound; 
}

const swap = (nums, left, right) => {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}


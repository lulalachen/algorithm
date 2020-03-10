/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0
  const size = height.length
  const left_max = Array(size)
  const right_max = Array(size)
  left_max[0] = height[0]
  for (let i = 1; i < size; i++) {
  left_max[i] = Math.max(height[i], left_max[i - 1])
  }
  console.log(left_max)
  
  right_max[size - 1] = height[size - 1]
  for (let i = size - 2; i >= 0; i--) {
  right_max[i] = Math.max(height[i], right_max[i + 1])
  }
  console.log(right_max)
  
  for (let i = 1; i < size - 1; i++) {
  console.log(Math.min(left_max[i], right_max[i]) - height[i])
  ans += Math.min(left_max[i], right_max[i]) - height[i]
  }
  
  return ans
};


var trap = function (height) {
  const size = height.length
  let left = 0
  let right = size - 1
  let left_max = 0
  let right_max = 0
  let ans = 0
  
  while(left < right) {
  if (height[left] < height[right]) {
    if (height[left] >= left_max) {
    left_max = height[left]
    } else {
    ans += left_max - height[left]
    }
    left++
  } else {
    if (height[right] >= right_max) {
    right_max = height[right] 
    } else {
    ans += right_max - height[right]
    }
    right--
  }
  }
  
  return ans
}
var searchRange = function(nums, target) {
  let i = 0
  let j = -1

  while (i < nums.length) {
    if (nums[i] === target) {
      j = i
      while (j < nums.length) {
        if (nums[j] === target) {
          j++
        } else {
          return [i, j - 1]
        }
      }
      if (j === nums.length) return [i, j - 1]
    } else {
      i++
    }
  }
  return [-1, -1]
}

const searchRange2 = (nums, target) => {
  if (nums.length === 0) return [-1, -1]

  const left = findFirstGreaterEqual(nums, target)
  if (nums[left] !== target) return [-1, -1]

  const right = findFirstGreaterEqual(nums, target + 1)
  return [left, right - 1]
}

const findFirstGreaterEqual = (nums, target) => {
  let low = 0
  let high = nums.length

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2)
    console.log(low, mid, high)

    if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

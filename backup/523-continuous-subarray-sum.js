const checkSubarraySum = (nums, k) => {
  let sum = 0
  
  if (k === 0) {
  return nums.some(
    (x, i) => x === 0 && i > 0 && nums[i-1] === 0
  )
  }
  const map = new Map()
  map.set(0, -1)
  
  for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
  sum = sum % k
  console.log(map)
  if (map.has(sum)) {
    console.log(i, map.get(sum), sum)
    if (i - map.get(sum) > 1) {
    return true
    }
  } else {
    map.set(sum, i)
  }
  }

  return false
}
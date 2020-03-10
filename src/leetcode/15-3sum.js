const threeSum = nums => {
  const result = []
  nums.sort((a, b) => a > b)
  for (let i = 0; i < nums.length; i++) {
  let lowIndex = i + 1
  let highIndex = nums.length - 1
  let target = -nums[i]
  if (i === 0 || nums[i] != nums[i-1]) {
    while (lowIndex < highIndex) {
    const sum = nums[lowIndex] + nums[highIndex]
    if (sum === target) {
      result.push([nums[i], nums[lowIndex], nums[highIndex]])
      while (lowIndex < highIndex && nums[lowIndex] === nums[lowIndex + 1]) lowIndex++
      while (lowIndex < highIndex && nums[highIndex] === nums[highIndex - 1]) highIndex--
      lowIndex++
      highIndex--
    } else if (sum > target) {
      while (lowIndex < highIndex && nums[lowIndex] === nums[lowIndex + 1]) lowIndex++
      highIndex--
    } else {
      while (lowIndex < highIndex && nums[highIndex] === nums[highIndex - 1]) highIndex--
      lowIndex++
    }
    }
  }
  
  }
  return result
}
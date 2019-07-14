const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!!map.get(cur)) return [map.get(cur).index, i + 1]
    map.set(target - nums[i], { index: i + 1, target })
  }
}

export const twoSum2 = (nums, target) => {
  let leftIndex = 0
  let rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    const sumOfTwo = nums[leftIndex] + nums[rightIndex]
    if (sumOfTwo === target) {
      return [leftIndex + 1, rightIndex + 1]
    } else if (sumOfTwo > target) {
      rightIndex--
    } else {
      leftIndex++
    }
  }
}

export default twoSum

const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!!map.get(cur)) return [map.get(cur).index, i]
    map.set(target - nums[i], { index: i, target })
  }
}

export default twoSum

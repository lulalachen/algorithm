const removeDuplicates = nums => {
  let current
  let deletedCount = 0
  let count = 0
  const length = nums.length

  for (let index = 0; index < length; index++) {
    const element = nums[index - deletedCount]
    if (element !== current) {
      current = element
      nums.splice(index - deletedCount - count, count)
      deletedCount += count
      count = 0
    } else {
      count += 1
    }
  }
  if (count !== 0) {
    nums.splice(length - deletedCount - count, count)
  }
  return nums.length
}

export default removeDuplicates

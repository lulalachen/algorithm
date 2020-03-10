/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const subarraySum = (nums, k) =>
//   nums
//   .reduce(
//     ({ map, count, sum }, cur, index) => {
//     const curSum = sum + cur
//     const sumZeroToI = curSum - k
//     if (map.has(sumZeroToI)) {
//       count += map.get(sumZeroToI)
//     }
//     map.set(curSum, (map.get(curSum) || 0) + 1)

//     return {
//       map,
//       count,
//       sum: curSum
//     }
//     },
//     {
//     map: new Map([[0, 1]]),
//     count: 0,
//     sum: 0
//     }
//   ).count

const subarraySum = (nums, k) => {
  const map = new Map()
  map.set(0, 1)
  
  let count = 0
  let sum = 0
  
  for (const num of nums) {
  sum += num
  if (map.has(sum - k)) {
    count += map.get(sum - k)
  }
  console.log(num, sum, map)
  map.set(sum, (map.get(sum) || 0) + 1)
  }
  console.log(map)

  return count
}
/**
 * @param {string} s
 * @return {number}
 */

// const lengthOfLongestSubstring = s => {
//   const n =  s.length
//   const set = new Set()
  
//   let maxLength = 0
  
//   let i = 0
//   let j = 0
  
//   while (i < n && j < n) {
//   if (!set.has(s[j])) {
//     set.add(s[j])
//     j++
//     maxLength = Math.max(maxLength, j - i)
//   } else {
//     set.delete(s[i])
//     i++
//   }
//   }
  
//   return maxLength
// }

const lengthOfLongestSubstring = s => {
  const n =  s.length
  const latestIndexMap = new Map()
  
  let maxLength = 0
  
  let i = 0
  let j = 0
  while (i < n && j < n) {
  if (latestIndexMap.has(s[j])) {
    i = Math.max(latestIndexMap.get(s[j]) + 1, i)
  }
  maxLength = Math.max(maxLength, j - i + 1)
  latestIndexMap.set(s[j], j)
  j++  
  }
  
  return maxLength
}
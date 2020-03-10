/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let ans = 0
  let left = 0
  let right = 0

  const charIndexMap = new OrderedMap()
  const set = new Set()
  
  while (right < s.length) {
  charIndexMap.add(s[right], right)
  right++
  
  // console.log(charIndexMap)
  if (charIndexMap.size() > 2) {
    const index = charIndexMap.shift()
    left = index + 1
  }
  
  ans = Math.max(ans, right - left)
  }

  return ans
};
  
  
class OrderedMap {
  constructor() {
  this.order = []
  this.map = new Map()
  }
  
  add (key, val) {
  if (this.map.has(key)) {
    const indexToRemove = this.order.findIndex(element => element === key)
    this.order.splice(indexToRemove, 1)
    this.map.delete(key)
  }
  this.order.push(key)
  this.map.set(key, val)
  return this
  }
  
  shift () {
  const keyToRemove = this.order.shift()
  const valToRemove = this.map.get(keyToRemove)
  this.map.delete(keyToRemove)
  return valToRemove
  }
  
  size () {
  return this.order.length
  }
}
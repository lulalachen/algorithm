/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var lengthOfLongestSubstringKDistinct = function(s, k) {
  const n = s.length
  if (n * k === 0) return 0

  const map = new OrderedMap()

  let left = 0
  let right = 0
  let max = 1
  
  while (right < n) {
  // We will need to move the right window first
  map.add(s[right], right++)
  
  // then we know if needed to remove the left window
  if (map.size() === k + 1) {
    removedIndex = map.shift()
    left = removedIndex + 1
  }
  
  // then update `max` to keep track
  max = Math.max(max, right - left)
  }
  
  return max
};

class OrderedMap {
  constructor () {
  this.order = []
  this.map = new Map()
  }
  
  add (key, value) {
  if (this.map.has(key)) {
    const index = this.order.findIndex(element => element === key)
    this.order.splice(index, 1)
  }
  this.order.push(key)
  const index = this.order.length - 1
  this.map.set(key, value)
  return this
  }
  
  pop () {
  const lastKey = this.order.pop()
  const lastValue = this.map.get(lastKey)
  this.map.delete(lastKey)
  return lastValue
  }
  
  shift () {
  const firstKey = this.order.shift()
  const firstValue = this.map.get(firstKey)
  this.map.delete(firstKey)
  return firstValue
  }
  
  size () {
  return this.order.length
  }
}

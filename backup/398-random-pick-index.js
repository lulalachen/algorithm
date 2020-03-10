/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = nums.reduce((acc, cur, index) => acc.set(cur, [...(acc.get(cur) || []), index]), new Map())
  // console.log(this.map)
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const indexes = this.map.get(target)
  return indexes[Math.floor(Math.random() * indexes.length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
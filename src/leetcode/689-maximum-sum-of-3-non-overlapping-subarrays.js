/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, K) {
  // W is an array of sums of windows
  const W = Array(nums.length - K + 1).fill(0)
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
  if (i >= K) sum = sum - nums[i - K]
  if (i >= K-1) W[i - K + 1] = sum
  }
  
  console.log('sums of windows', W)

  const left = Array(W.length).fill(0);
  let best = 0
  for (let i = 0; i < W.length; i++) {
  if (W[i] > W[best]) best = i
  left[i] = best
  console.log(best)
  }

  console.log('left', left)

  const right = Array(W.length).fill(0)
  best = W.length - 1
  for (let i = W.length - 1; i >= 0; i--) {
  if (W[i] >= W[best]) best = i
  right[i] = best
  console.log(best)
  }
  console.log('right', right)

  const ans = [-1, -1, -1]
  for (let j = K; j < W.length - K; j++) {
  let i = left[j - K]
  let k = right[j + K]
  if (ans[0] === -1 || W[i] + W[j] + W[k] > W[ans[0]] + W[ans[1]] + W[ans[2]]) {
    ans[0] = i
    ans[1] = j
    ans[2] = k
    console.log('ans', ans)
  }
  }

  return ans
};
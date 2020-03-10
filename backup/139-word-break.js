/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = (s, wordDict) => {
  const set = new Set(wordDict)
  
  const dp = Array.from(Array(s.length + 1)).map(() => false)
  dp[0] = true
  
  for (let i = 1; i <= s.length; i++) {
  for (let j = 0; j < i; j++) {
    console.log(j, i, s.substring(j, i))
    if (dp[j] && set.has(s.substring(j, i))) {
    dp[i] = true
    break
    }
  }
  }
  console.log(dp)
  return dp[s.length]
}
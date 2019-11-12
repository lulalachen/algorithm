/**
 * @param {string} s
 * @return {string}
 */

const longestPalindromeDP = str => {
  const dp = new Map()
  if (!str) return ''
  let longestStart = 0
  let longestLength = 1

  for (let i = 0; i < str.length; i++) {
    dp.set(`${i}-${i}`, true)
  }

  for (let i = str.length - 1; i >= 0; i--) {
    for (let dist = 1; dist < str.length - i; dist++) {
      const j = i + dist
      dp.set(
        `${i}-${j}`,
        dist === 1
          ? str[i] === str[j]
          : dp.get(`${i + 1}-${j - 1}`) && str[i] === str[j],
      )
      if (dp.has(`${i}-${j}`) && j - i + 1 > longestLength) {
        longestLength = j - i + 1
        longestStart = i
      }
    }
  }

  return str.substring(longestStart, longestStart + longestLength)
}

const longestPalindrome = str => {
  if (!str) return ''

  const expandAroundCenter = (str, left, right) => {
    let l = left
    let r = right
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--
      r++
    }
    return r - l - 1
  }

  let start = 0
  let end = 0

  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(str, i, i)
    const len2 = expandAroundCenter(str, i, i + 1)
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return str.substring(start, end + 1)
}

export default longestPalindrome

longestPalindrome('babad') //?
const a = longestPalindromeDP('babad') //?

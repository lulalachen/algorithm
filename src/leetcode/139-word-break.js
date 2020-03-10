var wordBreak = function(s, wordDict) {
  const cache = {}

  const fn = (s, dict, start) => {
    if (start === s.length) return true
    // console.log(!!cache[start], start, cache[start])

    if (!!cache[start]) {
      // console.log('cache used')
      return cache[start]
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (dict.has(s.substring(start, end)) && fn(s, dict, end)) {
        cache[start] = true
        // console.log(cache)
        return true
      }
    }

    cache[start] = false
    // console.log('false')
    return false
  }

  const result = fn(s, new Set(wordDict), 0)
  console.log(cache)
  return result
}

// BFS
const wordBreak2 = (s, wordDict) => {
  const dictSet = new Set(wordDict)

  const queue = []
  const visited = Array.from(Array(s.length)).map(() => false)
  queue.push(0)

  while (queue.length > 0) {
    const start = queue.pop()
    if (visited[start] === false) {
      for (let end = start + 1; end <= s.length; end++) {
        if (dictSet.has(s.substring(start, end))) {
          queue.push(end)
          if (end === s.length) {
            return true
          }
        }
      }
      visited[start] = true
    }
  }
  return false
}

// DP
const wordBreak3 = (s, wordDict) => {
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

const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
const wordDict = [
  'a',
  'aa',
  'aaa',
  'aaaa',
  'aaaaa',
  'aaaaaa',
  'aaaaaaa',
  'aaaaaaaa',
  'aaaaaaaaa',
  'aaaaaaaaaa',
]

wordBreak2(s, wordDict) //?

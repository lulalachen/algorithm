/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let map = new Map()
  
  const dfs = (string, wordDict, start) => {
  if (map.has(start)) return map.get(start) // use cache
  
  const res = []
  
  if (start === string.length) {
    map = map.set(start, [""])
    return [""]
  }
  
  for (let end = start + 1; end <= string.length; end++) {
    const currentStr = string.substring(start, end)
    if (wordDict.includes(currentStr)) {
    const list =  dfs(string, wordDict, end)
    for (let i = 0; i < list.length; i++) {
      const result = currentStr + (list[i] === "" ? "" : " ") + list[i]
      // console.log(s.substring(start, end), (list[i] === "" ? "" : list[i]))
      res.push(result)
    } 
    }
  }
  // console.log(res)
  map = map.set(start, res)
  return res
  }
  
  return dfs(s, wordDict, 0)
};
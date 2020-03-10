/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length === 0 || t.length === 0) {
  return ""
  }
  const dictT = new Map()
  for (let i = 0; i < t.length; i++) {
  const count = dictT.get(t.charAt(i)) || 0
  dictT.set(t.charAt(i), count + 1)
  }
  
  // console.log(dictT)
  
  let left = 0
  let right = 0
  let uniqueCharCount = 0
  const required = dictT.size
  const windowCounts = new Map()
  
  let ans = [-1, 0, 0]
  // console.log({ required })

  while (right < s.length) {
  const c = s.charAt(right)
  const count = windowCounts.get(c) || 0
  windowCounts.set(c, count + 1)
  
  if (dictT.has(c) && Number(windowCounts.get(c)) === Number(dictT.get(c))) {
    uniqueCharCount++
  }
  // console.log(windowCounts)
  
  // console.log({ uniqueCharCount, windowCounts })
  while (left <= right && uniqueCharCount === required) {
    const c = s.charAt(left)
    
    const distance = right - left + 1
    if (ans[0] == -1 || ans[0] > distance) {
    ans[0] = distance
    ans[1] = left
    ans[2] = right
    }
    
    windowCounts.set(c, windowCounts.get(c) - 1)
    if (dictT.has(c) && Number(windowCounts.get(c)) < Number(dictT.get(c))) {
    uniqueCharCount--
    }
    left++
  }
  right++
  }
  //console.log(windowCounts)
  
  //console.log(ans)
  
  return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1)
};
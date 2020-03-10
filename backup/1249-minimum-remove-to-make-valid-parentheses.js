/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const RIGHT_PAREN = '('
  const LEFT_PAREN = ')'
  const result = ''
  let leftCount = 0
  let rightCount = 0
  for (let i = 0; i < s.length; i++) {
  const char = s[i]
  if (char === RIGHT_PAREN) {
    if (rightCount === leftCount) continue
    rightCount++
  } else if (char === LEFT_PAREN) {
    leftCount++
  }

  result += char
  }
  
  console.log(result)
  
  return result
};
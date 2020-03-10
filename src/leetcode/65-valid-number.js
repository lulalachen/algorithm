/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const trimmed = s.trim()
  let flag = 0
  let state = 0
  
  for (let i = 0; i < trimmed.length; i++) {
  const char = trimmed[i]
  if (/[0-9]/.test(char)) {
    flag = 1
    if (state <= 2) state = 2
    else state = (state <= 5) ? 5 : 7
  } else if ('+' === char || '-' === char) {
    if (state === 0 || state === 3) state++
    else return false
  } else if ('.' === char) {
    if (state <= 2) state = 6
    else return false
  } else if ('e' ===char) {
    if (flag && (state === 2 || state === 6 || state === 7)) state = 3
    else return false
  } else {
    console.log('drop')
    return false
  }
  }
  console.log(flag, state)

  return state === 2 || state === 5 || (flag && state === 6) || state === 7
}
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

// format: {functionID}:{"start" or "end"}:{timestamp}
var exclusiveTime = function (n, logs) {
  const stack = []
  const res = Array(n).fill(0)
  let s = logs[0].split(':')

  stack.push(s[0])
  
  let i = 1
  let prev = parseInt(s[2])
  
  while (i < logs.length) {
  s = logs[i].split(':')
  if (s[1] === 'start') {
    if (stack.length > 0) {
    res[stack[stack.length - 1]] += parseInt(s[2]) - prev
    }
    stack.push(parseInt(s[0]))
    prev = parseInt(s[2])
  } else {
    res[stack[stack.length - 1]] += parseInt(s[2]) - prev + 1
    stack.pop()
    prev = parseInt(s[2]) + 1
  }
  
  i++
  }
  
  return res
};
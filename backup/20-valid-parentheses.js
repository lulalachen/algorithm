/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const rightPair = new Map([
  [')', '('],
  ['}', '{'],
  [']', '['],
  ])

  for (const char of s) {
  // console.log(char, stack)
  if (rightPair.has(char) && rightPair.get(char) === stack[stack.length - 1]) {
    // if it's closing paren and the last in the stack is its matching paren
    // which means we can pop it out
    stack.pop()
  } else {
    // otherwise just add to the stack
    stack.push(char)
  }
  }
  
  // console.log(stack)
  
  // and if in the end we get a empty stack
  // which means all the paren pairs are matched and removed in the loop above
  return stack.length === 0
};
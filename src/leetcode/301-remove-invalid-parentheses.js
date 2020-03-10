/**
 * @param {string} s
 * @return {string[]}
 */


  
var removeInvalidParentheses = function(rawString) {
  const validExpression = new Set()

  let leftToRemoveCount = 0
  let rightToRemoveCount = 0
  
  // Precalculate the remove counts for leftParens, rightParens
  for (const char of rawString) {
  if (char === "(") {
    leftToRemoveCount += 1
  } else if (char === ")") {
    if (leftToRemoveCount === 0) {
    rightToRemoveCount += 1
    } else {
    leftToRemoveCount -= 1
    }
  }
  }
  
  const recursive = (string, index, leftCount, rightCount, leftRem, rightRem, expression) => {
  // console.log(validExpression)
  // console.log(index, leftCount, rightCount, leftRem, rightRem, expression)
  if (index === string.length) {
    // Base case: if index reaches the end of the string
    if (leftRem === 0 && rightRem === 0) {
    // console.log('valie', expression)
    // and if removes are both zero add the result to validExpression
    validExpression.add(expression)
    }
    // End backtracking when reaches the end of string
  } else {
    const char = string[index]
    const length = expression.length
    
    if (
    (char === "(" && leftRem > 0) ||
    (char === ")" && rightRem > 0)
    ) {
    // Try to delete the current one, and run DFS to see if it will be valid
    recursive(
      string,
      index + 1,
      leftCount,
      rightCount,
      leftRem - (char === "(" ? 1 : 0),
      rightRem - (char === ")" ? 1 : 0),
      expression
    )
    }
    
    if (char !== "(" && char !== ")") {
    // if char is neither ( or )
    // just inc the index and move on
    recursive(
      string,
      index + 1,
      leftCount,
      rightCount,
      leftRem,
      rightRem,
      expression.concat(char)
    )
    } else if (char === "(") {
    recursive(
      string,
      index + 1,
      leftCount + 1,
      rightCount,
      leftRem,
      rightRem,
      expression.concat(char)
    )
    } else {
    // char === ")"
    if (leftCount > rightCount) {
      recursive(
      string,
      index + 1,
      leftCount,
      rightCount + 1,
      leftRem,
      rightRem,
      expression.concat(char)
      )
    } else {
      // ignore
      // it's useless to add ")" if leftCount <= rightCount 
    } 
    }
  }
  }

  recursive(rawString, 0, 0, 0, leftToRemoveCount, rightToRemoveCount, '')

  
  console.log(validExpression)
  return Array.from(validExpression)
};

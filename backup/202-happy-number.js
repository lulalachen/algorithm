/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set()
  return helper(n, seen) === 1
};

const helper = (n, seen) => {
  const splits = String(n).split('').map(char => Number(char))
  const sumOfSquare = splits.reduce((acc, cur) => acc + cur * cur, 0)

  if (seen.has(sumOfSquare)) {
  return -1
  } else {
  seen.add(sumOfSquare)
  }
  
  if (sumOfSquare !== 1) {
  return helper(sumOfSquare, seen)
  } else {
  return sumOfSquare
  }
}
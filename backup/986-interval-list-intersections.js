/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const ans = []
  let i = 0
  let j = 0
  
  while (i < A.length && j < B.length) {
  const [aStart, aEnd] = A[i]
  const [bStart, bEnd] = B[j]
  const intersection = [
    Math.max(aStart, bStart),
    Math.min(aEnd, bEnd)
  ]
  
  if (intersection[0] <= intersection[1]) {
    ans.push(intersection)
  }

  if (aEnd < bEnd) {
    i++
  } else if (aEnd > bEnd) {
    j++
  } else {
    i++
    j++
  }
  }
  
  return ans
};
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  const positionMap = new Map()
  const A_ROW = 'A_ROW'
  const B_ROW = 'B_ROW'
  const BOTH = 'BOTH'
  
  Array.from(Array(6)).forEach((_, index) => {
  positionMap.set(index + 1, { countA: 0, countB: 0, list: [] })
  })
  // console.log(positionMap)
  
  
  let i = 0
  while (i < A.length) {
  const a = A[i]
  const b = B[i]
  const posA = positionMap.get(a)
  const posB = positionMap.get(b)
  
  if (a === b) {
    positionMap.set(a, {
    countA: posA.countA,
    countB: posA.countB,
    list: [...posA.list, [i, BOTH]],
    })
  } else {
    positionMap.set(a, {
    countA: posA.countA + 1,
    countB: posA.countB,
    list: [...posA.list, [i, A_ROW]],
    })
    positionMap.set(b, {
    countA: posB.countA,
    countB: posB.countB + 1,
    list: [...posB.list, [i, B_ROW]],
    })
    // positionMap.set(a, [...positionMap.get(a), [i, A_ROW]])
    // positionMap.set(b, [...positionMap.get(b), [i, B_ROW]])
  }
  i++
  }
  
  // console.log(positionMap)
  
  let longest
  let length = 0
  for (const [key, val] of positionMap.entries()) {
  if (val.list.length > length) {
    length = val.list.length
    longest = val
  }
  }
  
  // console.log(longest)
  if (longest.list.length !== A.length) return -1
  
  return Math.min(longest.countA, longest.countB)
};
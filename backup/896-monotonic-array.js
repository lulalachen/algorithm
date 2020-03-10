/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length === 1) return true
  
  let sortOrder = getSort(A[0], A[1])

  let i = 1
  
  while (i < A.length) {
  const prev = A[i - 1]
  const cur = A[i]
  
  if (prev === cur) {
    i++
    continue
  }

  if (!sortOrder) {
    sortOrder = getSort(prev, cur)
    i++
    continue
  }

  if (getSort(prev, cur) !== sortOrder) return false
  
  i++
  }

  return true
};

function getSort (a, b) {
  return a > b ? 'desc' : a === b ? undefined : 'asc'
}
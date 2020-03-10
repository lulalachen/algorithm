/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const charMap = S.split('').reduce(
  (acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map())

  // console.log(charMap)

  const charSort = Array.from(charMap.entries()).sort(([_, count1], [__, count2]) => count2 - count1).map(([char]) => char)
  
  // console.log(charSort)
  
  const maxChar = charSort.shift()
  const maxSlot = charMap.get(maxChar)
  let slots = maxChar.repeat(maxSlot).split('')
  let i = 0
  let finishFirstRound = false
  
  // console.log(maxChar, maxSlot, slots)
  
  
  while (charSort.length > 0) {
  const nextChar = charSort[0]
  charMap.set(nextChar, charMap.get(nextChar) - 1)

  if (charMap.get(nextChar) === 0) {
    charSort.shift()
  }

  slots[i] = slots[i] + nextChar
  
  // Looping over among slots
  if (i === maxSlot - 1) {
    i = 0
    finishFirstRound = true
  } else {
    i++
  }
  }
  
  // console.log(slots)
  
  return finishFirstRound || i === maxSlot - 1 ? slots.join('') : ''
};
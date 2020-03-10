/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const charMap = new Map()
  const length1 = s1.length
  
  if (length1 > s2.length) return false
  
  for (const char of s1) {
  charMap.set(
    char, 
    charMap.has(char) ? charMap.get(char) + 1 : 1
  )
  }
  
  const isPerm = isPermOf(charMap)
  
  let i = 0
  
  while (i < s2.length - s1.length + 1) {
  const currentSegment = s2.slice(i, i + length1)
  if (isPerm(currentSegment)) {
    return true
  }
  i++
  }
  
  return false
};


const isPermOf = charMap => segment => {
  const copyMap = new Map(charMap)
  
  let i = 0
  while (i < segment.length) {
  const char = segment[i]
  if (!copyMap.has(char)) {
    return false
  } else {
    const charCount = copyMap.get(char)
    if (charCount === 1) {
    copyMap.delete(char)
    } else {
    copyMap.set(char, charCount - 1)
    }
  }
  i++
  }
  
  return copyMap.size === 0
}
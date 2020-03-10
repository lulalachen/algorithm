const findAnagrams =  (s, p) => {
  
  if (p.length > s.length) return []

  const results = []
  const charCountsOriginal = Array.from(Array(26)).map(() => 0) // [0, 0, ... 0] (26 slots)
  const pList = p.split('')
  const length = p.length

  let count = length

  pList.forEach(char => {
  charCountsOriginal[char.charCodeAt() - 'a'.charCodeAt()] = charCountsOriginal[char.charCodeAt() - 'a'.charCodeAt()] + 1
  })

  let charCounts = [...charCountsOriginal]
  
  for (let i = 0; i < s.length - p.length + 1; i++) {
  const target = s.slice(i, i + length)
  for (let j = 0; j < target.length; j++) {
    const char = target[j]
    const charIndex = char.charCodeAt() - 'a'.charCodeAt()
    const charCount = charCounts[charIndex]
    if (charCount > 0) {
    charCounts[charIndex] = charCount - 1
    count--
    }
  }

  if (count === 0) results.push(i)

  count = length
  charCounts = [...charCountsOriginal]
  }
  return results
}



// const findAnagrams =  (s, p) => {
//   const sortedP = p.split('').sort((a, b) => a.charAt() - b.charAt()).join('')
//   const anagramMap = new Map()
//   const anagramSet = buildAnagram(sortedP, anagramMap)
//   const length = p.length
//   const indexes = []
//   for (let i = 0; i < s.length - p.length + 1; i++) {
//   const target = s.slice(i, i + length)
//   if (anagramSet.has(target)) indexes.push(i)
//   }
  
//   return indexes
// }


// function buildAnagram (p, anagramMap) {
//   // ab  -> ab, ba
//   // abc -> abc, acb, 
//   //    bac, bca,
//   //    c -> c(ab), c(ba)
//   // abcd -> a -> abcd, abdc, acbd, acdb, adbc, adcd
//   //     b
//   //     c
//   //     d -> d(abc) d(acb)
//   //        d(bac) d(bca)
//   //        d(cab) d(cba)
  
//   if (p.length == 2) {
//   const [fst, snd] = p.split('')
//   const anagrams = new Set([`${fst}${snd}`, `${snd}${fst}`])
//   anagramMap.set(p, anagrams)
//   // console.log('2', anagrams)
//   return anagrams
//   } else if (anagramMap.has(p)) {
//   // console.log('cache')
//   return anagramMap.get(p)
//   } else {
//   const results = new Set([])
//   for (let i = 0; i < p.length; i++) {
//     const fst = p[i]
//     const other = p.slice(0, i).concat(p.slice(i + 1))

//     const anagramSet = buildAnagram(other, anagramMap)
//     const newAnagrams = Array.from(anagramSet).map(anagram => `${fst}${anagram}`)
//     newAnagrams.push(p)
//     newAnagrams.forEach(item => results.add(item))

//     const nextWord = `${fst}${other}`
//     // console.log(nextWord, newAnagrams)
//     anagramMap.set(nextWord, new Set(newAnagrams))
//   }
//   return results
//   }
// }
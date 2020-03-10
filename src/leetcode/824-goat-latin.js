/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return S
  .split(' ')
  .map((word, index) => {
    if (vowels.includes(word[0].toLowerCase())) {
    return [word, 'ma', 'a'.repeat(index + 1)].join('')
    } else {
    const [fst, ...rest] = word
    return [...rest, fst, 'ma', 'a'.repeat(index + 1)].join('')
    }
  })
  .join(' ')
};
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const numArr1 = num1.split('').reverse()
  const numArr2 = num2.split('').reverse()
  const long = num1.length >= num2.length ? numArr1 : numArr2
  const short = num1.length >= num2.length ? numArr2 : numArr1

  let result = []
  let i = 0
  let carry = 0
  while (i < short.length) {
    const sum = Number(long[i] || 0) + Number(short[i] || 0) + carry
    carry = Math.floor(sum / 10)
    result.push(sum % 10)
    i++
  }

  const remainLong = long.slice(i)

  while (carry > 0) {
    const num = remainLong.shift()
    const sum = Number(num || 0) + carry
    carry = Math.floor(sum / 10)
    result.push(sum % 10)
  }

  result = result.concat(remainLong)

  return result.reverse().join('')
}

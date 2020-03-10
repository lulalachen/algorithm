/**
 * @param {number} num
 * @return {string}
 */
const countNames = ['Thousand', 'Million', 'Billion', 'Trillion']

const getEnglishBySingleDigit = digit => ({
  0: null,
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
})[digit]

const getEnglishBySecondDigit = digit => ({
  0: null,
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
})[digit]

const getEnglishUnderThreeDigits = num => {
  // console.log(num)
  if (num < 10) {
  return getEnglishBySingleDigit(num)
  } else if (num < 20) {
  return ({
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  })[num]  
  } else if (num < 100) {
  const [ten, unitDigit] = String(num).split('').map(s => Number(s))
  const tenDigit = getEnglishBySecondDigit(ten)
  return [tenDigit, getEnglishUnderThreeDigits(unitDigit)].filter(n => !!n).join(' ')
  } else {
  const [hundredDigit, ...restDigits] = String(num).split('').map(s => Number(s))
  const restNum = Number(restDigits.join(''))
  const hundred = !!getEnglishBySingleDigit(hundredDigit) ? `${getEnglishBySingleDigit(hundredDigit)} Hundred` : null
  return [hundred, getEnglishUnderThreeDigits(restNum)].filter(n => !!n).join(' ')
  }
}

const chunkIntoTrio = num => 
  String(num)
  .split('')
  .reverse()
  .reduce((acc, cur, index) => {
  const last = acc.pop()
  // console.log(last, acc)
  if (index === 0) {
    last.push(Number(cur))
    acc.push(last)
  } else if (index % 3 === 0) {
    acc.push(last)
    acc.push([Number(cur)])
  } else {
    last.push(Number(cur))
    acc.push(last)
  }
  return acc
  }, [[]])
  .map(nums => Number(nums.reverse().join('')))

var numberToWords = function(num) {
  if (num === 0) return 'Zero'
  
  const trios = chunkIntoTrio(num)

  const result = trios
  .reduce((acc, cur, index) => {
    acc.push(getEnglishUnderThreeDigits(cur))
    return acc
  }, [])
  .reduceRight((acc, cur, index) => {
    if (!!cur) {
    const currentCountName = countNames[index - 1]
    const english = index === 0 ? cur : `${cur} ${currentCountName}`
    return ([english, ...acc]).filter(s => !!s)
    } else {
    return acc
    }
  }, [])
  .reverse()
  .join(' ')

  // console.log('result', result)
  // console.log('chunkIntoTrio', trios)
  
  return result
};
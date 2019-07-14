import twoSum, { twoSum2 } from './167-two-sum-II'

import expect from 'expect'

const testCases = [
  {
    inputArgs: [[2, 7, 12, 52], 9],
    answer: [1, 2],
  },
  {
    inputArgs: [[21, 42, 213, 214], 255],
    answer: [2, 3],
  },
]

describe('167. Two sum II /', () => {
  it('map', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(twoSum(...inputArgs)).toEqual(answer)
    })
  })

  it('two pointers', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(twoSum2(...inputArgs)).toEqual(answer)
    })
  })
})

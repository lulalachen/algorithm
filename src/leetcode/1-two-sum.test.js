import twoSum from './1-two-sum'

import expect from 'expect'

const testCases = [
  {
    inputArgs: [[7, 2, 10, 34], 9],
    answer: [0, 1],
  },
  {
    inputArgs: [[42, 213, 213, 21], 63],
    answer: [0, 3],
  },
]

describe('1. Two sum', () => {
  it('should returns correct answer', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(twoSum(...inputArgs)).toEqual(answer)
    })
  })
})

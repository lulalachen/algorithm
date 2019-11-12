import threeSum from './15-three-sum'

import expect from 'expect'

const testCases = [
  {
    inputArgs: [[-1, 0, 1, 2, -1, -4]],
    answer: [[-1, -1, 2], [1, -1, 0]],
  },
]

describe('15. Three sum', () => {
  it('should returns correct answer', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(threeSum(...inputArgs)).toEqual(answer)
    })
  })
})

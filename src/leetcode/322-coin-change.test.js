import { coinChangeTopDown, coinChangeBottomUp } from './322-coin-change'

import expect from 'expect'

const testCases = [
  {
    inputArgs: [[1, 2, 5], 4],
    answer: 2,
  },
  {
    inputArgs: [[2, 5, 10, 1], 27],
    answer: 4,
  },
  {
    inputArgs: [[5, 10], 31],
    answer: -1,
  },
  {
    inputArgs: [[5, 15, 25], 80],
    answer: 4,
  },
  { inputArgs: [[186, 419, 83, 408], 6249], answer: 20 },
]

describe('322. Coin change /', () => {
  it('coinChangeTopDown', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(coinChangeTopDown(...inputArgs)).toEqual(answer)
    })
  })

  it('coinChangeBottomUp', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(coinChangeBottomUp(...inputArgs)).toEqual(answer)
    })
  })
})

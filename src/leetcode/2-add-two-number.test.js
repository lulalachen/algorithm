import addTwoNumbers from './2-add-two-number'
import { makeLinkedList } from '../utils'
import expect from 'expect'

const testCases = [
  {
    inputArgs: [123, 123],
    answer: 246,
  },
  {
    inputArgs: [32123, 1],
    answer: 32124,
  },
]

describe('2. Add two numbers', () => {
  it('should returns correct answer', () => {
    testCases.map(({ inputArgs, answer }, index) => {
      expect(addTwoNumbers(...inputArgs)).toEqual(answer)
    })
  })
})

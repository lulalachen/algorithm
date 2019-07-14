import expect from 'expect'
import testFn from './26-remove-duplicates-from-sorted-array'

const testCases = [
  {
    input: [1, 1, 2],
    answer: [1, 2],
  },
  {
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    answer: [0, 1, 2, 3, 4],
  },
]

describe('26. Remove duplicates from sorted array', () => {
  it('should be correct', () => {
    testCases.forEach(({ input, answer }) => {
      // Modify it in-place
      testFn(input)
      expect(input).toEqual(answer)
    })
  })
})

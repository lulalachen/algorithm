import fibonacci from '../src'
import expect from 'expect'

describe('fibonacci', () => {
  it('returns correct answer', () => {
    const answers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    answers.map((ans, index) => {
      expect(fibonacci(index)).toEqual(ans)
    })
  })
})

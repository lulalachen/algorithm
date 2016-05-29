import expect from 'expect'
import {
  fibonacci,
  fibonacci_dp,
  fibonacci_cache,
  fibonacci_memorize,
  fibonacci_yCombinator,
} from '../src'

const tests = [10, 20, 30, 40]
const testAlgorithms = (func, name) => {
  tests.map((test) => {
    console.time(`\t${name}-f(${test})`)
    func(test)
    console.timeEnd(`\t${name}-f(${test})`)
  })
}
const answers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
const test_correctness = (func) => {
  answers.map((ans, index) => {
    expect(func(index)).toEqual(ans)
  })
}

const getEfficiencyTest =
  (algorithm, name) => it(`${name}`, () => testAlgorithms(algorithm, `${name}`))

const getCorrectnessTest =
  (algorithm, name) => it(`${name}`, () => test_correctness(algorithm))

describe('fibonacci efficiency test', () => {
  describe('returns correct answer /', () => {
    getCorrectnessTest(fibonacci, 'recursive')
    getCorrectnessTest(fibonacci_dp, 'dp')
    getCorrectnessTest(fibonacci_cache, 'cache')
    getCorrectnessTest(fibonacci_memorize, 'memorize')
    getCorrectnessTest(fibonacci_yCombinator, 'yCombinator')
  })
  describe('prints process time /', () => {
    getEfficiencyTest(fibonacci, 'recursive')
    getEfficiencyTest(fibonacci_dp, 'dp')
    getEfficiencyTest(fibonacci_cache, 'cache')
    getEfficiencyTest(fibonacci_memorize, 'memorize')
    getEfficiencyTest(fibonacci_yCombinator, 'yCombinator')
  })
})

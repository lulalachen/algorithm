import {
  factorial,
} from '../src'
import {
  generateCorrectnessChecks,
  generateExecutions,
} from '../utils'

const tasks = [10, 20, 30, 40, 50]
const getEfficiencyTest =
  (algorithm, name) => it(`${name}`, () => generateExecutions(algorithm, tasks, `${name}`))

const expectedAnswers = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800]
const getCorrectnessTest =
  (algorithm, name) => it(`${name}`, () => generateCorrectnessChecks(algorithm, expectedAnswers))

describe('factorial', () => {
  describe('returns correct answers', () => {
    getCorrectnessTest(factorial, 'factorial')
  })
  describe('get execution times', () => {
    getEfficiencyTest(factorial, 'factorial')
  })
})
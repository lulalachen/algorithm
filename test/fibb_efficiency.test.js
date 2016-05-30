import {
  fibonacci,
  fibonacci_dp,
  fibonacci_cache,
  fibonacci_memorize,
  fibonacci_yCombinator,
} from '../src'

import {
  generateExecutions,
  generateCorrectnessChecks,
} from '../utils'

const tasks = [10, 20, 30, 40]
const getEfficiencyTest =
  (algorithm, name) => it(`${name}`, () => generateExecutions(algorithm, tasks, `${name}`))

const expectedAnswers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
const getCorrectnessTest =
  (algorithm, name) => it(`${name}`, () => generateCorrectnessChecks(algorithm, expectedAnswers))

describe('fibonacci efficiency test', () => {
  describe('returns correct answer /', () => {
    getCorrectnessTest(fibonacci, 'recursive')
    getCorrectnessTest(fibonacci_dp, 'dp')
    getCorrectnessTest(fibonacci_cache, 'cache')
    getCorrectnessTest(fibonacci_memorize, 'memorize')
    getCorrectnessTest(fibonacci_yCombinator, 'yCombinator')
  })
  describe('prints process time /', () => {
    // getEfficiencyTest(fibonacci, 'recursive')
    getEfficiencyTest(fibonacci_dp, 'dp')
    getEfficiencyTest(fibonacci_cache, 'cache')
    getEfficiencyTest(fibonacci_memorize, 'memorize')
    getEfficiencyTest(fibonacci_yCombinator, 'yCombinator')
  })
})

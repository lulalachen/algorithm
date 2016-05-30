import expect from 'expect'
const generateCorrectnessChecks = (func, expectedAnswers) => {
  expect(func).toExist()
  expect(expectedAnswers).toExist()
  expectedAnswers.map((ans, index) => {
    expect(func(index)).toEqual(ans)
  })
}
export default generateCorrectnessChecks
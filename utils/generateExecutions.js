import expect from 'expect'
const getAlgorithmExecutionTime = (func, tasks = [10, 20, 30, 40], name) => {
  expect(func).toExist()
  expect(tasks).toExist()
  tasks.map((task) => {
    console.time(`\t${name}-f(${task})`)
    func(task)
    console.timeEnd(`\t${name}-f(${task})`)
  })
}
export default getAlgorithmExecutionTime
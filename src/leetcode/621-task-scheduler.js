/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// var leastInterval = function (tasks, n) {
//   const map = {}
  
//   tasks.forEach(task => {
//   map[task] = (map[task] || 0) + 1
//   })
  
//   console.log(map)
  
//   const queue = []
//   Object.entries(map).map(([key, value]) => {
//   queue.push({ key, value })
//   })

//   console.log(queue)

//   let time = 0
  
//   while (queue.length > 0) {
//   let i = 0
//   const temp = []
//   // console.log('1', queue, temp, time)

//   while (i <= n) {
//     if (queue.length !== 0) {
//     if (queue[queue.length - 1].value > 1) {
//       const item = queue.shift()
//       temp.push({ key: item.key, value: item.value - 1 })
//       // console.log(temp, item)
//     } else {
//       queue.shift()
//     }
//     }
    
//     // console.log('2', queue, temp, time)

//     time++
    
//     if (queue.length === 0 && temp.length === 0) {
//     console.log('end', queue, temp, time)
//     break
//     }

//     i++
//   }
  
//   temp.forEach(item => {
//     queue.push(item)
//   })
//   }
  
//   return time
// }

const leastInterval = (tasks, n) => {
  const map = Array.from(Array(26)).map(() => 0)
  
  tasks.forEach(task => {
  map[task.charCodeAt() - 'A'.charCodeAt()]++
  })
  
  map.sort((a, b) => a - b)
  

  const max = map[25] - 1
  let idleSlots = max * n
  console.log(map, idleSlots)
  
  for (let i = 24; i >= 0 && map[i] > 0; i--) {
  idleSlots -= Math.min(map[i], max)
  }
  
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length
}



/*

tasks -> taskMap

const taskMap = {
  A: 3
  B: 3
}

1. Pick the largest task
2. Keep track of current `time`
3. 



*/
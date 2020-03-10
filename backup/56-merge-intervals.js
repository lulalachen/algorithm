/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// const overlap = (a, b) => {
//   const [aStart, aEnd] = a
//   const [bStart, bEnd] = b
//   return aStart <= bEnd && bStart <= aEnd
// }

// const buildGraph = intervals => {
//   let graph = new Map()
//   for (let i = 0; i < intervals.length; i++) {
//   graph.set(intervals[i], [])
//   }

//   intervals.forEach(i1 => {
//   intervals.forEach(i2 => {
//     if (overlap(i1, i2)) {
//     graph.set(i1, [...graph.get(i1), i2])
//     graph.set(i2, [...graph.get(i2), i1])
//     }
//   })
//   })
  
//   return graph
// }


// const buildComponents = (intervals, graph) => {
//   const nodesInComp = new Map()
//   const visited = new Set()
//   let compNumber = 0
  
//   const markComponentDFS = (startInterval, compNumber) => {
//   const stack = [startInterval]

//   while (stack.length > 0) {
//     const node = stack.pop()

//     if (!visited.has(node)) {
//     visited.add(node)

//     if (nodesInComp.get(compNumber) == null) {
//       nodesInComp.set(compNumber, [])
//     }
//     nodesInComp.set(compNumber, [...nodesInComp.get(compNumber), node]) 
    
//     // console.log(graph.get(node), node, graph)
//     graph.get(node).forEach(child => {
//       stack.push(child)
//     })
//     }
//   }
//   }

  
//   intervals.forEach(interval => {
//   if (!visited.has(interval)) {
//     markComponentDFS(interval, compNumber, visited)
//     compNumber++
//   }
//   })

//   return nodesInComp
// }


// const mergeNodes = nodes => {
//   // console.log(nodes, nodes[0])
//   let [minStart, maxEnd] = nodes[0]

//   nodes.forEach(node => {
//   const [nodeStart] = node
//   minStart = Math.min(minStart, nodeStart)
//   })

//   nodes.forEach(node => {
//   const [_, nodeEnd] = node
//   maxEnd = Math.max(maxEnd, nodeEnd)
//   })
  
//   return [minStart, maxEnd]
// }

// var merge = function(intervals) {
//   const graph = buildGraph(intervals)
//   // console.log(graph)
//   const nodesInComp = buildComponents(intervals, graph)
//   // console.log(nodesInComp)
  
//   const merged = []
//   for (let i = 0; i < nodesInComp.size; i++) {
//   merged.push(mergeNodes(nodesInComp.get(i)))
//   }

//   // console.log(merged)
//   return merged
// };

///////////////////////////////


const sortIntervals = (intervals) => 
  intervals.sort(([aStart], [bStart]) => aStart === bStart ? 0 : aStart < bStart ? -1 : 1)

const merge = intervals => {
  const sortedIntervals = sortIntervals(intervals)
  
  const merged = []
  
  for (const [start, end] of sortedIntervals) {
  if (merged.length === 0 || merged[merged.length - 1][1] < start) {
    merged.push([start, end])
  } else {
    const [lastStart, lastEnd] = merged[merged.length - 1]
    merged[merged.length - 1][1] = Math.max(lastEnd, end)
  }
  }

  return merged
}


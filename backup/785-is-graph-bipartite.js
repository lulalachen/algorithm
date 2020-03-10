/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length
  const colors = Array(n).fill(-1) // -1 as uncoloerd
  
  for (let start = 0; start < n; start++) {
  // If visited
  if (colors[start] === -1) {
    const stack = [start]
    colors[start] = 0
    
    while (stack.length > 0) {
    const node = stack.pop()
    for (let i = 0; i < graph[node].length; i++) {
      const neighbor = graph[node][i]
      if (colors[neighbor] === -1) {
      console.log(neighbor)
      stack.push(neighbor)
      colors[neighbor] = colors[node] === 1 ? 0 : 1
      } else if (colors[neighbor] === colors[node]) {
      return false
      }
    }
    }
  }
  }
  
  return true
};
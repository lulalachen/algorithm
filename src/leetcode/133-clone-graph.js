/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *  this.val = val;
 *  this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
  this.val = val
  this.neighbors = neighbors
}

const cloneGraph = node => {
  const visited = new Map() // [[node.val, Node[]]]
  const cloneNode = new Node(node.val, [])
  const queue = [node] // [Node]

  // Always ask: what's the goal of the loop
  // to fill in the neighbors sub graph of the currentNode
  while (queue.length > 0) {
    const currentNode = queue.shift()
    const neighborNodes = []

    if (visited.has(currentNode.val)) {
      currentNode.neighbors = visited.get(currentNode.val)
    } else {
      currentNode.neighbors.forEach(nei => {
        if (visited.has(nei.val)) {
          neighborNodes.push(visited.get(nei.val))
        } else {
          queue.push(nei)
        }
      })
    }
  }
}

// var cloneGraph = function(node) {
//   const visited = new Map()

//   const traverse = node => {
//   if (node === null) return

//   if (visited.has(node.val)) return visited.get(node.val)

//   const newNode = new Node(node.val, [])
//   visited.set(node.val, newNode)
//   // console.log(node.val, newNode, visited)

//   node.neighbors.forEach(neighborNode => {
//     newNode.neighbors.push(traverse(neighborNode))
//   })

//   return newNode
//   }

//   return traverse(node)
// };

// var cloneGraph2 = function(node) {
//   const visited = new Map()
//   const cloneNode = new Node(node.val, [])

//   const queue = [node]
//   while (queue.length > 0) {
//   console.log(queue)
//   const currentNode = queue.shift()

//   if (visited.has(currentNode.val)) {
//     cloneNode.neighbors = visited.get(currentNode.val)
//   } else {
//     console.log(currentNode)
//     const nodes = []
//     currentNode.neighbors.forEach(({ val, neighbors }) => {
//     const neighborNode = { val, neighbors }
//     nodes.push(neighborNode)
//     if (!visited.has(val)) {
//       queue.push(neighborNode)
//     }
//     })
//     visited.set(currentNode.val, nodes)
//   }
//   }

//   console.log(cloneNode === node)
//   console.log(visited, cloneNode)

//   return cloneNode
// };

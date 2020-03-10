/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
  this.val = val
  this.neighbors = neighbors
}

var cloneGraph = function(node) {
  const visited = new Map()

  const traverse = node => {
    if (node === null) return

    if (visited.has(node.val)) return visited.get(node.val)

    const newNode = new Node(node.val, [])
    visited.set(node.val, newNode)
    // console.log(node.val, node.neighbors, visited)

    node.neighbors.forEach(neighborNode => {
      newNode.neighbors.push(traverse(neighborNode))
    })
    return newNode
  }

  const result = traverse(node)
  console.log(result)
  return result
}

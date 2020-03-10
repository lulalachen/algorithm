/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// DFS
var rightSideViewDFS = function(root) {
  const result = []
  rightView(root, result, 0)
  return result
}

const rightView = (node, result, curDepth) => {
  if (node === null) return

  if (result.length === curDepth) {
    result.push(node.val)
  }

  rightView(node.right, result, curDepth + 1)
  rightView(node.left, result, curDepth + 1)
}

// DFS 2
const rightSideViewDFS2 = root => {
  const result = []
  const stack = [[root, 0]]

  while (stack.length > 0) {
    const [node, depth] = stack.pop()

    if (node !== null) {
      if (result.length === depth) {
        result.push(node.val)
      }
      // console.log(node.val, depth)
      stack.push([node.left, depth + 1])
      stack.push([node.right, depth + 1])
    }
  }

  return result
}

// BFS
const rightSideViewBFS = root => {
  const result = []
  const stack = [[root, 0]]

  while (stack.length > 0) {
    const [node, depth] = stack.shift()

    if (node !== null) {
      if (result.length === depth) {
        result.push(node.val)
      }
      // console.log(node.val, depth)
      stack.push([node.right, depth + 1])
      stack.push([node.left, depth + 1])
    }
  }

  return result
}

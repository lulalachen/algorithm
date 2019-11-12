/**
  Recursion
  Time: O(N)
  Space: O(N)
 */

const isValidBST = function(root) {
  const isNodeValid = (node, lower, upper) => {
    if (node === null) return true

    if (lower !== null && lower >= node.val) return false
    if (upper !== null && upper <= node.val) return false

    if (!isNodeValid(node.right, node.val, upper)) return false
    if (!isNodeValid(node.left, lower, node.val)) return false

    return true
  }

  return isNodeValid(root, null, null)
}

/**
  DFS
  Time: O(N)
  Space: O(N)
 */

const isValidBST2 = root => {
  if (root === null) return true

  const stack = [[root, -Infinity, Infinity]]

  while (stack.length > 0) {
    const [root, lower, upper] = stack.pop()
    if (root === null) {
      continue
    }
    const val = root.val

    if (val <= lower || val >= upper) {
      return false
    }
    stack.push([root.right, val, upper])
    stack.push([root.left, lower, val])
  }

  return true
}

/**
  In-order Tree Traversal
  Time: O(N)
  Space: O(N)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function(root) {
  let max = -Infinity
  console.log('node.val', 'max', 'return.val', 'leftSum', 'rightSum')
  const traverse = node => {
    if (node === null) return 0

    const leftSum = Math.max(0, traverse(node.left))
    const rightSum = Math.max(0, traverse(node.right))
    // Cuz when updating at each node, they will add both leaves into the current max sum
    // but when a node is returning as tree leaves, only one of its branches will be counted
    // so that's why we have difference between `updating global max` and `return sum value`
    max = Math.max(max, leftSum + rightSum + node.val)
    // We only want the longest path sum instead of max sum tree nodes
    // so we will need to chose between one
    return Math.max(leftSum, rightSum) + node.val
  }

  traverse(root)
  return max
}

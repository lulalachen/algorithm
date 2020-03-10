/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  const stack = [root]
  let minDiff = Infinity
  let minVal = undefined

  while (stack.length > 0) {
  const node = stack.pop()
  
  if (Math.abs(node.val - target) < minDiff) {
    minDiff = Math.abs(node.val - target)
    minVal = node.val
  }

  if (!!node.left && target < node.val) stack.push(node.left)
  if (!!node.right && target > node.val) stack.push(node.right)
  }

  return minVal
};
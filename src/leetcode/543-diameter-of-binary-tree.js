/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0
  if (!root) return 0
  

  function dfs(node) {
  if (!node) return 0

  const leftDepth = dfs(node.left, ans)
  const rightDepth = dfs(node.right, ans)

  // path
  ans = Math.max(ans, leftDepth + rightDepth)
  
  // depth
  return Math.max(leftDepth, rightDepth) + 1
  }

  dfs(root, ans)
  return ans
};





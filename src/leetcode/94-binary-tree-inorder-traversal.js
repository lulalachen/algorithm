/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  
  if (root === null) return []

  const results = [] // [4]
  const queue = [] // [5]
  let cur = root

  while (cur !== null || queue.length > 0) {
  while (cur !== null) {
    queue.push(cur)
    cur = cur.left
  }
  cur = queue.pop()
  results.push(cur.val)
  cur = cur.right
  }
  
  const ans = []
  dfs(root, ans)
  console.log(ans)
  
  
  return results
};

/*
     4
   /  \\
  3  5
   /\\   /\\
  1  2 6  7

[1, 2, 3, 4, 5, 6, 7]
*/

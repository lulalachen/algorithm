/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


// const isNodeValid = (node, lower, upper) => {
//   if (node === null) return true
  
//   if (lower !== null && lower >= node.val) return false
//   if (upper !== null && upper <= node.val) return false
  
//   if (!isNodeValid(node.right, node.val, upper)) return false
//   if (!isNodeValid(node.left, lower, node.val)) return false

//   return true
// }

// var isValidBST = root => {
//   return isNodeValid(root, null, null)
// }

// const isValidBST = root => {
//   if (root === null) return true

//   const stack = [[root, -Infinity, Infinity]]

//   while (stack.length > 0) {
//   const [root, lower, upper] = stack.pop()
//   if (root === null) {
//     continue
//   }
//   const val = root.val
  
//   if (val <= lower || val >= upper) {
//     return false
//   }
//   stack.push([root.right, val, upper])
//   stack.push([root.left, lower, val])
//   }
  
//   return true
// }


const isValidBST = root => {
  const stack = []
  let inOrder = -Infinity
  
  while (stack.length !== 0 || !!root) {
  while (!!root) {
    stack.push(root)
    root = root.left
  }
  root = stack.pop()

  if (root.val <= inOrder) {
    return false
  }
  
  inOrder = root.val
  root = root.right
  }
  
  return true
}
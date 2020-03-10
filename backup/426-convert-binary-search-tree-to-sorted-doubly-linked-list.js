/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *  this.val = val;
 *  this.left = left;
 *  this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function(root) {
  if (root === null) return null
  let first = null
  let last = null

  const traverse = node => {
  if (node !== null) {
    traverse(node.left)

    if (last === null) {
    first = node
    } else {
    last.right = node
    node.left = last
    }
    last = node
    traverse(node.right)
  }
  }

  traverse(root)
  
  last.right = first
  first.left = last
  
  console.log(first)
  return first
};
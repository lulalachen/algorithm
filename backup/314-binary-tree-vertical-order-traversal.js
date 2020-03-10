/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const verticalOrder = (root) => {
  if (!root) return []

  const queue = [[0, root]]
  const map = new Map()
  
  while (queue.length > 0) {
  const [level, node] = queue.shift()
  
  if (!map.has(level)) map.set(level, [])
  // console.log(node.val)

  map.set(level, [...map.get(level), node.val])
  if (!!node.left) queue.push([level - 1, node.left])
  if (!!node.right) queue.push([level + 1, node.right])
  }

  // console.log(map)
  return Array.from(map.entries())
  .sort(([key1], [key2]) => key1 > key2)
  .map(([_, val]) => val)
  
}
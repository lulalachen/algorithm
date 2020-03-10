/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  const parentMap = new Map()
  dfs(root, null, parentMap)
  
  // console.log(parentMap)
  // console.log(parentMap.get(target))
  const STOPPER = '|'
  
  const queue = [STOPPER, target]
  const seen = new Set([target, STOPPER])

  // [STOPPER, target, STOPPER, first layer nodes, STOPPER, snd layer nodes, STOPPER, ...]
  let dist = 0
  while (queue.length > 0) {
  const node = queue.shift()
  // When hitting STOPPER, it means that we already reach the end of current distance level
  // which means 
  // 1. either we will need to proceed to the next level 
  // 2. or we can return the rest of nodes in the queue as our answer
  if (node === STOPPER) {
    if (dist === K) {
    return queue.map(node => node.val)
    }
    queue.push(STOPPER)
    dist++
  } else {
    processNode(node.left, seen, queue)
    processNode(node.right, seen, queue)
    processNode(parentMap.get(node), seen, queue)
  }
  }
  
  // If we traverse through all the nodes and still not fulfill the distance,
  // meaning that there's no nodes within the distance, so return [] instead.
  return []
};

const dfs = (node, parentNode, parentMap) => {
  if (!!node) {
  parentMap.set(node, parentNode)
  dfs(node.left, node, parentMap)
  dfs(node.right, node, parentMap)
  }
}

const processNode = (node, seen, queue) => {
  if (!!node && !seen.has(node)) {
  seen.add(node)
  queue.push(node)
  }
}
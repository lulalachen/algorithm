/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (node) {
  const history = []
  const getSerializedList = (node) => {
  if (node === null) {
    history.push(node)
  } else {
    history.push(node.val)
    getSerializedList(node.left)
    getSerializedList(node.right)
  }
  }
  getSerializedList(node)
  return JSON.stringify(history)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const treeList = JSON.parse(data)
  console.log(treeList)
  
  const buildTree = () => {
  const currentNode= treeList.shift()
  if (currentNode === null) {
    return null
  } else {
    const node = new TreeNode(currentNode)
    node.left = buildTree()
    node.right = buildTree()
    return node
  }
  }
  return buildTree(treeList)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


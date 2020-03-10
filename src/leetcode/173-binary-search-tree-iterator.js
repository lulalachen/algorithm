// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *   this.val = val;
//  *   this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  */
// var BSTIterator = function(root) {
//   this.queue = []

//   dfs(root, this.queue)
  
//   console.log(this.queue)
// };

// function dfs (node, results) {
//   if (!node) return
  
//   dfs(node.left, results)
//   results.push(node.val)
//   dfs(node.right, results)
// }

// /**
//  * @return the next smallest number
//  * @return {number}
//  */
// BSTIterator.prototype.next = function() {
//   return this.queue.shift()
// };

// /**
//  * @return whether we have a next smallest number
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function() {
//   return this.queue.length > 0  
// };

// /** 
//  * Your BSTIterator object will be instantiated and called as such:
//  * var obj = new BSTIterator(root)
//  * var param_1 = obj.next()
//  * var param_2 = obj.hasNext()
//  */

var BSTIterator = function (root) {
  this.stack = []
  this.dfs(root)
  console.log(this.stack)
}

BSTIterator.prototype.dfs = function (node) {
  while (!!node) {
  this.stack.push(node)
  node = node.left
  }  
}

BSTIterator.prototype.next = function () {
  const node = this.stack.pop()
  
  if (!!node.right) {
  this.dfs(node.right)
  }
  
  return node.val
}

BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
}
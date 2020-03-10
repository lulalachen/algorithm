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
var verticalTraversal = function(root) {
  const queue = [[root, 0, 0]]
  let posQueue = new PQ()
  
  while (queue.length > 0) {
  const [node, x, y] = queue.shift()
  posQueue = posQueue.add(node.val, { x, y })
  
  if (!!node.left) queue.push([node.left, x - 1, y + 1])
  if (!!node.right) queue.push([node.right, x + 1, y + 1])
  }
  
  console.log(posQueue)
//   let ans = []
//   let temp = []
//   let prev = undefined
//   for (let i = 0; i < posQueue.queue.length; i++) {
//   const { element: nodeVal, priority: { x, y }} = posQueue.queue[i]
//   console.log(nodeVal, x, y, temp, ans)

//   if (prev === undefined) {
//     temp.push(nodeVal)
//     prev = x
//     continue
//   }

//   if (x !== prev) {
//     ans.push(temp)
//     temp = []
//   }
//   temp.push(nodeVal)

//   prev = x
//   }
  
  let lastX = undefined
  const ans = []
  while (posQueue.queue.length > 0) {
  const { element: nodeVal, priority: { x, y }} = posQueue.queue.shift()
  if (x !== lastX) {
    ans.push([nodeVal])
  } else {
    const last = ans.pop()
    last.push(nodeVal)
    ans.push(last)
  }
  lastX = x
  }
  console.log(ans)
  
  return ans
};

class QueueElement {
  constructor(element, priority) {
  this.element = element
  this.priority = priority
  }
}

class PQ {
  constructor() {
  this.queue = []
  this.comparator = (node1, node2) => {
    const a = node1.priority
    const b = node2.priority
    if (a.x === b.x){
    if (a.y === b.y){
      return node1.element - node2.element;
    } 
    return a.y - b.y;
    }
    return a.x - b.x;
  }
  }

  add(item, priority) {
  const qElement = new QueueElement(item, priority)
  
  let left = 0
  let right = this.queue.length
  
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    const element = this.queue[mid]
    const compared = this.comparator(qElement, element)
    if (compared < 0) {
    right = mid
    } else {
    left = mid + 1
    }
  }

  this.queue.splice(left, 0, qElement)

  return this
  }

  poll() {
  return this.queue.length > 0 ? this.queue.shift() : 'Empty queue'
  }

  peek() {
  return this.queue.length > 0 ? this.queue[0] : 'Empty queue'
  }

  size() {
  return this.queue.length
  }
}
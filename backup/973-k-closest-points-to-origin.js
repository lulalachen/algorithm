/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */


const getDist = ([x, y]) => Math.pow(x, 2) + Math.pow(y, 2)
const sortByFst = ([aDist], [bDist]) => aDist - bDist
// const kClosest = (points, k) => 
//   points
//   .map(point => [getDist(point), point])
//   .sort(sortByFst)
//   .splice(0, k)
//   .map(([_, point]) => point)

const kClosest = (points, k) => {
  const pq = new PriorityQueue()
  
  for (const point of points) {
  const dist = getDist(point)
  pq.add(point, dist)
  }
  // console.log(pq.getArray())
  return pq.getFirst(k)
}

class ListNode {
  constructor (val, priority) {
  this.val = val
  this.priority = priority
  this.next = null
  }
}

class LinkedList {
  constructor () {
  this.head = null
  this.tail = null
  }
}

class PriorityQueue {
  constructor () {
  this.length = 0
  this.list = new LinkedList()
  }

  add (point, dist) {
  const current = new ListNode(point, -dist)
  const dummyHead = this.list.head
  let node = dummyHead
  
  if (!node) {
    this.list.head = current
    this.list.tail = current
    return
  }
  
  let added = false
  while (node) {
    if (current.priority >= node.priority) {
    const prev = node.prev
    const next = node
    
    current.prev = prev
    if (prev) {
      prev.next = current
    } else {
      this.list.head = current
    }
    
    current.next = next
    next.prev = current


    added = true
    this.length++
    break
    } else {
    // console.log('else', current.priority, node.priority)
    node = node.next
    }
  }
  if (!added) {
    // console.log('added to tail', this.list)
    current.prev = this.list.tail
    this.list.tail.next = current
    this.list.tail = current
  }
  }
  
  getArray () {
  const list = []
  let node = this.list.head
  while (node) {
    list.push(node.val)
    node = node.next
  }
  return list
  }
  
  getFirst (n) {
  let count = 0
  const list = []
  let node = this.list.head
  while (node && count < n) {
    count++
    list.push(node.val)
    node = node.next
  }
  return list
  }
  
}
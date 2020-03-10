/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var mergeKLists = function(lists) {
//   let result = new ListNode(0)
//   let head = new ListNode(0)
//   head.next = result
//   if (lists.length === 0) {
//   return result.next
//   }

//   lists = lists.filter(l => l !== null)

//   while (lists.length > 0) {
//   const { index, val } = lists.reduce(
//     (acc, cur, index) => 
//     cur.val < acc.val
//       ? { 
//       index,
//       val: cur.val
//       } 
//       : acc
//     , {
//     index: undefined,
//     val: Infinity
//     })

//   result.next = new ListNode(val)
//   result = result.next
//   lists.splice(index, 1, lists[index].next)
//   lists = lists.filter(l => l !== null)
//   }

//   return head.next.next
// };

const printListNode = listNode => {
  const result = []
  while (!!listNode) {
  result.push(listNode.val)
  listNode = listNode.next
  }
  return result
}

const mergeKLists = (lists) => {
  const size = lists.length
  let interval = 1
  lists = lists.filter(l => !!l)
  
  if (lists.length === 0) 
  return null

  while (interval < size) {
  // console.log(interval)

  for (let i = 0; i < size - interval; i += interval*2) {
    // console.log(i, `Merging ${i} with ${i + interval}`)
    lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    // console.log(lists.map(printListNode))
  }
  // console.log(lists.map(printListNode))
  interval = interval * 2
  }
  //console.log(lists.map(printListNode))
  return size > 0 ? lists[0] : lists
}

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode(0)
  let point = new ListNode(0)
  head.next = point
  while (l1 && l2) {
  if (l1.val <= l2.val) {
    point.next = l1
    l1 = l1.next
  } else {
    point.next = l2
    l2 = l2.next
  }
  point = point.next
  }
  if (!l1) {
  point.next = l2
  } else {
  point.next = l1
  }
  return head.next.next
}

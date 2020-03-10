/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(l1.val + l2.val)
  getResult(l1, l2)
  const getResult = (l1, l2, result = result) => {
    if (l1.next === null && l2.next === null) {
      return result
    } else if (l1.next === null) {

    } else if (l2.next === null) {

    } else {
      return 
    }
  }
};
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

export const makeListNode = (next = null, val) => {
  return new ListNode(val, next)
}

export const makeLinkedList = (payload = []) =>
  payload.reduce(makeListNode, null)

export const pipe = (...fns) => payload =>
  fns.reduce((acc, f) => f(acc), payload)
export const compose = (...fns) => payload =>
  fns.reduceRight((acc, f) => f(acc), payload)

export const split = regex => payload => payload.split(regex)
export const reduce = (reducer, init) => payload =>
  payload.reduce(reducer, init)

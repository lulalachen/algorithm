function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

const makeNode = (next = null, val) => {
  return new ListNode(val, next)
}

const addTwoNumbers = (a, b) => {
  const long = String(a > b ? a : b)
    .split('')
    .reverse()
  const short = String(a <= b ? a : b)
    .split('')
    .reverse()

  const { carry, results } = long.reduce(
    (acc, cur, index) => {
      const sum = Number(cur) + Number(short[index] || 0) + acc.carry
      return {
        carry: Math.floor(sum / 10),
        results: [sum % 10, ...acc.results],
      }
    },
    {
      carry: 0,
      results: [],
    },
  )

  return (carry > 0 ? [1, ...results] : results).join('')
}

export default addTwoNumbers

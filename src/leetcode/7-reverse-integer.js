const MAX_INTEGER = Math.pow(2, 31)

const reverse = x => {
  let result = 0

  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = Math.trunc(x / 10)
  }

  if (result > MAX_INTEGER - 1 || result < -MAX_INTEGER) {
    return 0
  }

  return result
}

let fib = n => {
  if (n <= 1) return 1;
  else return fib(n - 1) + fib(n - 2)
}

const memorize = f => {
  const cache = {}
  return function() {
    const args = Array.prototype.slice.call(arguments).join(",").toString()
    if (cache[args]) return cache[args]
    const r = f.apply(null, arguments)
    cache[args] = r
    return cache[args]
  }
}

fib = memorize(fib)
export default fib
const cache = {}
const fibonacci_cache = (num) => {
  if (cache[num]) return cache[num]
  var r;
  if (num === 0 || num === 1) r = 1
  else r = fibonacci_cache(num-1) + fibonacci_cache(num-2)
  cache[num] = r
  return cache[num]
}
export default fibonacci_cache
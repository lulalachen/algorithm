const genFib = f => n => {
  if (n <= 1) return 1
  return f(n - 1) + f(n - 2)
}

const yComM = (gf, cache) => gf(n => {
  if (cache[n]) return cache[n]
  const r = yComM(gf, cache)(n)
  cache[n] = r
  return r
})

const fibonacci = yComM(genFib, {})

export default fibonacci
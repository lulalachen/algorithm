/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = words => {
  const graph = new Map()
  
  for (const word of words) {
  for (const char of word.split('')) {
    graph.set(char, new Set())
  }
  }
  
  for (let i = 0; i < words.length - 1; i++) {
  const [prev, cur] = [words[i], words[i + 1]]
  for (let j = 0; j < Math.min(prev.length, cur.length); j++) {
    if (prev[j] !== cur[j]) {
    graph.get(prev[j]).add(cur[j])
    break
    }
  }
  }
  
  // console.log(graph)
  /*
  Map({
    't': Set(['f']),
    'w': set(['e']),
    'r': Set(['t']),
    'e': Set(['r']),
    'f': Set([])
  })
  */
  
  let result = "" // "t"
  const marked = new Set() // ['f']
  const visited = new Set() // ['t', 'f']
  let hasCycle = false
  
  for (const neighbor of Array.from(graph.keys()).reverse()) {
  console.log('x', neighbor)
  visit(neighbor)
  }

  return hasCycle ? '' : result

  function visit(char) {
  if (!!marked.has(char)) {
    // console.log('mark', char, marked)
    return
  }
  if (!!visited.has(char)) {
    hasCycle = true
    return
  }

  visited.add(char)
  for (const neighbor of graph.get(char)) {
    console.log('nei', char, neighbor)
    visit(neighbor)
  }
  marked.add(char)
  console.log(char, marked)
  result = char + result
  }
}

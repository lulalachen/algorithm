/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */

var addOperators = function (num, target) {
  const ans = []
  const helper = (index, path, value, prev) => {
  if (index === num.length && value === target) {
    // console.log('ret', ans, path)
    ans.push(path)
    return
  }
  // console.log(index, index === num.length)
  if (index === num.length) return
  
  for (let i = index + 1; i < num.length + 1; i++) {
    const tmp = Number(num.slice(index, i))
    const curPath = num.slice(index, i)

    if (i === index + 1 || (i > index + 1 && num[index] !== '0')) {
    // console.log(i, index, path, value, prev)
    if (prev === null) {
      helper(i, curPath, tmp, tmp)
    } else {
      helper(i, path + '+' + curPath, value + tmp, tmp)
      helper(i, path + '-' + curPath, value - tmp, -tmp)
      helper(i, path + '*' + curPath, value - prev + prev * tmp, prev * tmp)
    }
    }
  }
  }
  helper(0, '', 0, null)
  return ans
};

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  let fileEnded = false
  let readBuffer = []
  let tempBuffer = []

  const resolveResult = (buf, n) => {
    const result = tempBuffer.slice(0, n)
    tempBuffer = tempBuffer.slice(n)
    // console.log(n, result, tempBuffer)
    buf = buf.push(result.join(''))
    // console.log(buf)
    return result.length
  }

  return function(buf, n) {
    if (n <= tempBuffer.length) {
      return resolveResult(buf, n)
    } else {
      while (n > tempBuffer.length && !fileEnded) {
        readBuffer = []
        const readCount = read4(readBuffer)
        tempBuffer = tempBuffer.concat(readBuffer)
        fileEnded = readCount < 4
        // console.log(`read ${count}`, readBuffer, tempBuffer, fileEnded)
      }
      return resolveResult(buf, n)
    }
  }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const minFromLeft = []
//   let min = Infinity
//   for (let i = 0; i < prices.length; i++) {
//   min = Math.min(prices[i], min)
//   minFromLeft.push(min)
//   }
//   // console.log(minFromLeft)
  
//   const maxFromRight = Array(prices.length).fill(0)
//   let max = 0
//   for (let i = prices.length - 1; i > 0; i--) {
//   max = Math.max(max, prices[i])
//   maxFromRight[i] = max
//   }
//   // console.log(maxFromRight)
  
//   let bestProfit = 0
//   for (let i = 0; i < prices.length; i++) {
//   bestProfit = Math.max(bestProfit, maxFromRight[i] - minFromLeft[i])
//   }
  
//   return bestProfit
// };


const maxProfit = prices => {
  let minPrice = Infinity
  let maxProfit = 0
  
  for (const price of prices) {
  if (price < minPrice) {
    minPrice = price
  } else if (price - minPrice > maxProfit) {
    maxProfit = price - minPrice
  }
  }

  return maxProfit
}
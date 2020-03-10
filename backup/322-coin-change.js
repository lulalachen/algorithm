const coinChange = coinChangeBottomUp

function coinChangeTopDown(coins, target) {
  const dp = {}

  function getCoinChange(coins, target) {
  if (target < 0) return -1
  if (target < 1) return 0
  if (!!dp[target] && dp[target] !== 0) return dp[target]

  let min = Infinity
  coins.forEach(coin => {
    const result = Math.min(getCoinChange(coins, target - coin), min) + 1
    if (result > 0 && result < min) {
    min = result
    }
  })
  dp[target] = min !== Infinity ? min : -1

  return dp[target]
  }

  return getCoinChange(coins, target)
}

function coinChangeBottomUp(coins, target) {
  const dp = { 0: 0 }

  for (let currentTarget = 1; currentTarget <= target; currentTarget++) {
  let min = Infinity
  for (let j = 0; j < coins.length; j++) {
    const coin = coins[j]
    const result = Math.min(dp[currentTarget - coin], min) + 1
    if (result > 0 && result < min) {
    min = result
    }
  }
  dp[currentTarget] = min !== Infinity ? min : -1
  }

  return dp[target]
}
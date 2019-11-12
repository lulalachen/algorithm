const numIslands = grid => {
  if (grid.length === 0) return 0
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        count += 1
      }
    }
  }
  return count
}

const dfs = (grid, i, j) => {
  if (
    i >= 0 &&
    j >= 0 &&
    i < grid.length &&
    j < grid[0].length &&
    grid[i][j] === '1'
  ) {
    grid[i][j] = '0'
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
  }
}

// 1
numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]) //?

// 1
numIslands([['1', '1', '1'], ['0', '1', '0'], ['1', '1', '1']]) //?

// 2
numIslands([
  ['0', '1', '1', '1'],
  ['1', '0', '1', '0'],
  ['0', '0', '1', '0'],
  ['0', '1', '1', '1'],
]) //?

// 3
numIslands([['1', '0', '1', '1', '0', '1', '1']]) //?

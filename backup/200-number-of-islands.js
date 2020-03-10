const numIslands = grid => {
  if (grid.length === 0) return 0
  let count = 0
  for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[i][j] === '1') {
    dfsFill(grid, i, j)
    count += 1
    }
  }
  }
  return count
}

const dfsFill = (grid, i, j) => {
  if (
  i >= 0 &&
  j >= 0 &&
  i < grid.length &&
  j < grid[0].length &&
  grid[i][j] === '1'
  ) {
  grid[i][j] = '0'
  dfsFill(grid, i + 1, j)
  dfsFill(grid, i, j + 1)
  dfsFill(grid, i - 1, j)
  dfsFill(grid, i, j - 1)
  }
}
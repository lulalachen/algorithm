/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.dp = []
  if (matrix.length === 0 || matrix[0].length === 0) {
  return
  }

  for (let r = 0; r < matrix.length + 1; r++) {
  this.dp[r] = [0]
  for (let c = 0; c < matrix[0].length + 1; c++) {
    this.dp[r][c] = 0
  }
  }
  
  for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[0].length; c++) {
    this.dp[r + 1][c + 1] = this.dp[r + 1][c] + this.dp[r][c + 1] - this.dp[r][c] + matrix[r][c]
  }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
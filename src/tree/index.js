function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const treeNodeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const makeTree = rawNodeList => {
  const nodeList = Array.from(rawNodeList)
  let root = new TreeNode(nodeList.shift())
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.shift()

    node.left = new TreeNode(nodeList.shift())
    node.right = new TreeNode(nodeList.shift())

    if (!!node.left.val) stack.push(node.left)
    if (!!node.right.val) stack.push(node.right)
  }
  return root
}

const root = makeTree(treeNodeList)

const bfs = root => {
  const result = []
  const stack = [root]

  while (stack.length > 0) {
    logStack(stack)
    const node = stack.shift()

    if (!!node) {
      result.push(node.val)
      // console.log(node.val)

      if (!!node.left.val) stack.push(node.left)
      if (!!node.right.val) stack.push(node.right)
    }
  }
  return result
}

bfs(root) //?

console.log('------------')

const dfs = root => {
  const result = []
  const stack = [root]

  while (stack.length > 0) {
    logStack(stack)
    const node = stack.pop()

    if (!!node) {
      result.push(node.val)
      // console.log(node.val)

      if (!!node.right.val) stack.push(node.right)
      if (!!node.left.val) stack.push(node.left)
    }
  }
  return result
}

dfs(root) //?

function logStack(stack) {
  console.log(stack.map(node => node.val))
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function (root) {
//   const result = []
//   rightView(root, result, 0)
//   return result   
// }

// const rightView = (node, result, curDepth) => {
//   if (node === null) return
  
//   if (result.length === curDepth) {
//   result.push(node.val)
//   }

//   rightView(node.right, result, curDepth + 1)
//   rightView(node.left, result, curDepth + 1)
// }

// DFS
const rightSideView = (root) => {
  const result = []
  const stack = [[root, 0]]

  while (stack.length > 0) {
  const [node, depth] = stack.pop()

  if (node !== null) {
    if (result.length === depth) {
    result.push(node.val)
    }
    console.log(node.val, depth)
    stack.push([node.left, depth + 1])
    stack.push([node.right, depth + 1])
  }
  }

  return result
}

// BFS
// const rightSideView = (root) => {
//   const result = []
//   const stack = [[root, 0]]

//   while (stack.length > 0) {
//   const [node, depth] = stack.shift()

//   if (node !== null) {
//     if (result.length === depth) {
//     result.push(node.val)
//     }
//     console.log(node.val, depth)
//     stack.push([node.right, depth + 1])
//     stack.push([node.left, depth + 1])
//   }
//   }

//   return result
// }

/*
public List<Integer> inorderTraversal(TreeNode root) {
  List<Integer> list = new ArrayList<>();
  if(root == null) return list;
  Stack<TreeNode> stack = new Stack<>();
  while(root != null || !stack.empty()){
    while(root != null){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    list.add(root.val);
    root = root.right;
    
  }
  return list;
}
*/

/**
 * @param {string} path
 * @return {string}
 */

// const path = "/a/./b/../../c/"
var simplifyPath = function (path) {
  const stack = []
  const pathList = path.split('/')
  // "/a/./b/../../c/"
  // []
  // console.log(pathList)
  
  for (let i = 0; i < pathList.length; i++) {
  const cur = pathList[i]
  if (cur === "" || cur === '.') {
    continue
  } else if (cur === '..') {
    stack.pop()
  } else {
    stack.push(cur)
  }
  }
  // console.log(stack)
  return `/${stack.join('/')}`
}

// public String simplifyPath(String path) {
//   Deque<String> stack = new LinkedList<>();
//   Set<String> skip = new HashSet<>(Arrays.asList("..",".",""));
//   for (String dir : path.split("/")) {
//     if (dir.equals("..") && !stack.isEmpty()) stack.pop();
//     else if (!skip.contains(dir)) stack.push(dir);
//   }
//   String res = "";
//   for (String dir : stack) res = "/" + dir + res;
//   return res.isEmpty() ? "/" : res;
// }
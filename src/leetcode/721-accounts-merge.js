/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

const accountsMerge = accounts => {
  const ans = []
  const emailGraph = {}
  const emailToName = {}
  
  for (const account of accounts) {
  const [name, ...emails] = account
  const [firstEmail] = emails
  
  for (const email of emails) {
    if (!emailGraph[firstEmail]) emailGraph[firstEmail] = new Set()
    if (!emailGraph[email]) emailGraph[email] = new Set()

    emailGraph[firstEmail] = emailGraph[firstEmail].add(email)
    emailGraph[email] = emailGraph[email].add(firstEmail)    
    emailToName[email] = name
  }
  }
  
  console.log(emailGraph)
  
  const seen = new Set()
  
  for (const email in emailGraph) {
  if (!seen.has(email)) {
    seen.add(email)
    
    const stack = [email]
    const emailResults = [email]

    while (stack.length > 0) {
    const curEmail = stack.pop()
    const neighbors = emailGraph[curEmail]
    
    for (const neighborEmail of neighbors) {
      if (!seen.has(neighborEmail)) {
      emailResults.push(neighborEmail)
      seen.add(neighborEmail)
      stack.push(neighborEmail)
      }
    }
    }
    ans.push([emailToName[email], ...emailResults.sort()])
  }
  }
  
  return ans
}










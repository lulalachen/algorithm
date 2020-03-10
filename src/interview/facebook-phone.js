/* 
Given two sorted arrays of integers, return the intersection (the common elements between the two). 

Example:
  
a1: [1, 3, 3, 4x, 6, 9, 10] N
a2: [3, 3, 5x, 9, 11] M
output: [3, 9]

Follow up: 
Let's say a1 >> a2.

a1: [1, 2, 3, ..., 100x, ..., 1M]
a2: [100x, 1M]

              a1         100
binarySearch (targetArr, target, start) => {
  // targetArr[start:]
  return index // -1 not found
}

let results = []
let start = 0

binarySearch(a1, 100, 0) -> 95
start = 95
binarySearch(a1, 1M, 95) -> 10000

*/

//
// a1: [1, 2, 3, ..., 100x, ..., 1M] M
// a2: [100x, 100, 1M] N
// [100, 100, 1M]
//
// O(N * logM)
// [1x, 2, 3, 4, 5, 6, 7, 8, 10+] N
//

const getIntersection2 = (arr1, arr2) => {
  let start = 0
  const results = []

  for (let i = 0; i < arr2.length; i++) {
    const target = arr2[i]

    if (target === arr2[i + 1]) continue

    const indexInArr2 = binarySearch(arr1, target, start)

    if (indexInArr2 === -1) continue

    start = indexInArr2
    results.push(target)
  }

  return results
}

const getIntersection = (arr1, arr2) => {
  let i = 0
  let j = 0
  const results = [] // [3, 9]

  // i: 2
  // j: 1
  while (i < arr1.length && j < arr2.length) {
    const val1 = arr1[i] // 3
    const val2 = arr2[j] // 3

    if (val1 === val2) {
      // 3 === 3
      while (val1 === arr1[i + 1]) {
        // 3 4
        i++
      }
      while (val2 === arr2[j + 1]) {
        j++
      }

      results.push(val1)
      i++
      j++
    } else if (val1 < val2) {
      // 10 < 11
      i++
    } else {
      j++
    }
  }

  return results
}

/*

struct Node {
  Node* left
  Node* right
  int data
};

Given an array of nodes, each left and right pointer is guaranteed to point to either: 
- null, or
- a node in the array

Write a function to determine if this array forms exactly 1 single binary tree. If so, return root, otherwise return null.

Input:
[B, D, F, A, C, E]


[A, B]
    A
   /
  B

Example success: => A

[A]

B.left -> D
B.right -> E

D -> null
E -> null

///

A.left -> B
A.right -> C

C.left -> null
C.right -> F+ 

F -> null

       A
      / \
     B   C
    / \   \
   D   E   F


Example failure: => null

[B, D, F, A, C, E]

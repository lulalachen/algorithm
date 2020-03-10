/**
 * @param {number[]} height
 * @return {number}
 */
// const trap = heights => {
//   let rain = 0
//   let localMaximum = 0
//   let accumulateHeights = []

//   const {
//     localAccumHeights,
//     localSecondMax,
//     accumHeight,
//     localMaxIndex,
//   } = heights.reduce(
//     (acc, cur, index) => {
//       if (acc.localAccumHeights.length === 0) {
//         // Not accumulating
//         return cur >= acc.localMax
//           ? {
//               // Ascending but not accumulating
//               ...acc,
//               localMax: cur,
//               localMaxIndex: index,
//             }
//           : {
//               // Start descending
//               ...acc,
//               localAccumHeights: [cur],
//             }
//       } else if (cur < acc.localMax) {
//         // Descending in the valley
//         return cur > acc.localSecondMax
//           ? {
//               ...acc,
//               localSecondMax: cur,
//               localAccumHeights: [...acc.localAccumHeights, cur],
//             }
//           : {
//               ...acc,
//               localAccumHeights: [...acc.localAccumHeights, cur],
//             }
//       } else {
//         // Ascending in the valley
//         return {
//           ...acc,
//           localMax: cur,
//           localMaxIndex: index,
//           accumHeight:
//             acc.accumHeight +
//             acc.localAccumHeights.reduce(
//               (accH, curH) => accH + (acc.localMax - curH),
//               0,
//             ),
//           localAccumHeights: [],
//         }
//       }
//     },
//     {
//       localMax: 0,
//       localSecondMax: 0,
//       localMaxIndex: 0,
//       localAccumHeights: [],
//       accumHeight: 0,
//     },
//   )

//   if (localAccumHeights.length !== 0) {
//     return (
//       accumHeight + trap([localSecondMax, ...heights.slice(localMaxIndex + 1)])
//     )
//   }

//   return accumHeight
// }

const trap = heights => {
  const leftMax = heights.reduce((acc, cur) => {
    const last = acc[acc.length - 1]
    return last >= cur ? [...acc, last] : [...acc, cur]
  }, [])
  const rightMax = heights
    .reduceRight((acc, cur) => {
      const last = acc[acc.length - 1]
      return last >= cur ? [...acc, last] : [...acc, cur]
    }, [])
    .reverse()

  return heights.reduce((acc, cur, index) => {
    const currentHeight = heights[index]
    return acc + Math.min(leftMax[index], rightMax[index]) - currentHeight
  }, 0)
}

// var trap = function(height) {
//   let ans = 0
//   const size = height.length
//   const left_max = Array(size)
//   const right_max = Array(size)
//   left_max[0] = height[0]
//   for (let i = 1; i < size; i++) {
//     left_max[i] = Math.max(height[i], left_max[i - 1])
//   }
//   console.log(left_max)

//   right_max[size - 1] = height[size - 1]
//   for (let i = size - 2; i >= 0; i--) {
//     right_max[i] = Math.max(height[i], right_max[i + 1])
//   }
//   console.log(right_max)

//   for (let i = 1; i < size - 1; i++) {
//     console.log(Math.min(left_max[i], right_max[i]) - height[i])
//     ans += Math.min(left_max[i], right_max[i]) - height[i]
//   }

//   return ans
// }

// var trap = function(height) {
//   const size = height.length
//   let left = 0
//   let right = size - 1
//   let left_max = 0
//   let right_max = 0
//   let ans = 0

//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] >= left_max) {
//         left_max = height[left]
//       } else {
//         ans += left_max - height[left]
//       }
//       left++
//     } else {
//       if (height[right] >= right_max) {
//         right_max = height[right]
//       } else {
//         ans += right_max - height[right]
//       }
//       right--
//     }
//   }

//   return ans
// }

// 1
trap([4, 2, 3]) //?
// 6
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) //?
// 0
trap([0, 2, 0]) //?

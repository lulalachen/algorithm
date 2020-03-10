/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const isBaseCase = (nums1, nums2) => nums1.length + nums2.length <= 2
const add = (x, y) => x + y
const getFirstElement = nums => nums.length > 0 ? nums[0] : Infinity
const getLastElement = nums => nums.length > 0 ? nums[nums.length - 1] : -Infinity
const comparedBy = fn => (a, b) => fn(a) < fn(b)

const findMedianSortedArrays = (nums1, nums2) => {
  if (isBaseCase(nums1, nums2)) {
    return ([...nums1, ...nums2]).reduce(add, 0) / [...nums1, ...nums2].length
  } else {
    let nextNums1 = nums1
    let nextNums2 = nums2
    // Remove smallest
    if (getFirstElement(nextNums1) > getFirstElement(nextNums2)) {
      nextNums2.shift()
    } else {
      nextNums1.shift()
    }
    // Remove largest
    if (getLastElement(nextNums1) > getLastElement(nextNums2)) {
      nextNums1.pop()
    } else {
      nextNums2.pop()
    }
    return findMedianSortedArrays(nextNums1, nextNums2)
  }
}
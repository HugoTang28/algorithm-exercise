/**
 * @param {number[]} nums
 * @return {number}
 */
// 给定整数数组nums，找出连续子数组（至少一个元素）的最大和并返回。子数组要求元素在数组中连续。
const maxSubArray = function (nums) {
  let pre = 0
  let max = nums[0]
  for (const num of nums) {
    pre = Math.max(pre + num, num)
    max = Math.max(max, pre)
  }
  return max
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

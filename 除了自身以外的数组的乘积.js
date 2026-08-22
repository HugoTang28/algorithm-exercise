// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const len = nums.length
  const answer = new Array(len)
  // 左乘积：answer[i]存i左边所有乘积
  answer[0] = 1
  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  let right = 1
  // right 保存右边乘积，从后往前遍历
  for (let i = len - 1; i >= 0; i--) {
    answer[i] *= right
    right *= nums[i]
  }
  return answer
}

console.log(productExceptSelf([2, 3, 5, 6])) // [ 90, 60, 36, 30 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]

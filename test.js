const productExceptSelf = (nums) => {
  const len = nums.length
  const answer = new Array()
  // 左乘积：answer[i] 存i左边所有数乘积
  answer[0] = 1
  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  // right 保存右边乘积，从后往前遍历
  let right = 1
  for (let i = len - 1; i >= 0; i--) {
    answer[i] *= right
    right *= nums[i]
  }
  return answer
}

console.log(productExceptSelf([2, 3, 5, 6])) // [ 90, 60, 36, 30 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]

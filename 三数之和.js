/*
  给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
  满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0
  请你返回所有和为 0 且不重复的三元组
  注意：答案中不可以包含重复的三元组
*/

const threeSum = (nums) => {
  let res = []
  nums.sort((a, b) => a - b) // 升序排序
  for (let i = 0; i < nums.length; i++) {
    // 当前数大于0，后面数更大，不可能凑出0，直接退出
    if (nums[i] > 0) break
    // 跳过固定值重复，避免答案重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        // 跳过左指针重复
        while (l < r && nums[l] === nums[l + 1]) l++
        // 跳过右指针重复
        while (l < r && nums[r] === nums[r - 1]) r--

        l++
        r--
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}

console.log(threeSum([-4, -1, 0, 1, 1, 2]))

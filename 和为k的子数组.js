// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

const subarraySum = (nums, k) => {
  // key=前缀和，value=该前缀出现和的次数
  const map = new Map()
  // 初始化：前缀和0出现1次，处理preSum === k的情况
  map.set(0, 1)
  let preSum = 0 // 实时累加的当前前缀和
  let count = 0 // 答案总数
  for (const num of nums) {
    preSum += num
    // 寻找preSum - k 是否存在
    if (map.has(preSum - k)) {
      count += map.get(preSum - k)
    }
    map.set(preSum, (map.get(preSum) || 0) + 1)
  }
  return count
}

console.log(subarraySum([1, 1, 1], 2)) // 输出 2
console.log(subarraySum([1, 2, 3, 4, 0, -1], 3)) // 输出 2

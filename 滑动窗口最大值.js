/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [] // 存队列的下标
  const res = []

  for (let i = 0; i < nums.length; i++) {
    // 判断队首下标是否在窗口范围内，超出则出队
    if (queue.length && queue[0] <= i - k) {
      queue.shift()
    }

    // 判读queue队尾 与当前nums[i] 比较，若小于则出队
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)

    // 在窗口范围内，取队首下标作为最大值
    if (i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }
  return res
}
console.log(maxSlidingWindow([7, 2, 4], 2))

// 题目：给数组 nums，将数组中的元素向右轮转 k 个位置，k 是非负数。
// nums = [1,2,3,4,5,6,7], k = 3 → [5,6,7,1,2,3,4]
var rotate = function (nums, k) {
  const reverse = (arr, l, r) => {
    while (l < r) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  const n = nums.length
  k = k % n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
}

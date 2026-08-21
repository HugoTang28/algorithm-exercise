const rotate = (nums, k) => {
  const reverse = (arr, l, r) => {
    while (l < r) {
      ;[arr[r], arr[l]] = [arr[l], arr[r]]
      l++
      r--
    }
  }
  const n = nums.length
  k = k % n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
  return nums
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 1))

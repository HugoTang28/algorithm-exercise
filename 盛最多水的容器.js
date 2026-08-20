// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。

var maxArea = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    ans = Math.max(ans, area)
    if (height[left] < height[right]) {
      // height[left] 与右边的任意垂线都无法组成一个比 ans 更大的面积
      left++
    } else {
      // height[right] 与左边的任意垂线都无法组成一个比 ans 更大的面积
      right--
    }
  }
  return ans
}

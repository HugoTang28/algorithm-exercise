var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let res = 0
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    res = Math.max(res, area)
    if (height[left] < height[right]) {
      // 左边柱子矮
      left++
    } else {
      right--
    }
  }
  return res
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

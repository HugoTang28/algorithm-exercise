// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
var moveZeroes = function (nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // 交换
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
  return nums
}
console.log(moveZeroes([0, 1, 3, 2, 0, 23]))

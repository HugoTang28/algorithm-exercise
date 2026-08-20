const moveZeroes = (nums) => {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
  }
  return nums
}
console.log(moveZeroes([0, 1, 2, 9, 0, 0, 2123, 123, 345]))

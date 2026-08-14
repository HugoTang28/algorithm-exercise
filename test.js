const twoSum = (nums, targets) => {
  const prevNums = new Map() // 存储出现过的数字和对应的索引
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    const targetNum = targets - curNum // 目标数
    const targetNumIndex = prevNums.get(targetNum) // 目标索引
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i]
    } else {
      prevNums.set(curNum, i)
    }
  }
}

console.log(twoSum([1, 2, 3], 3))

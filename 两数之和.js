const twoSum = (nums, target) => {
  const map = new Map() // 存储出现过的数字和对应的索引
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    const targetNums = target - curNum // 目标数
    const targetNumsIndex = map.get(targetNums) // 目标索引
    if (targetNumsIndex !== undefined) {
      return [targetNumsIndex, i]
    } else {
      map.set(curNum, i)
    }
  }
}

console.log(twoSum([1, 3, 6], 9))

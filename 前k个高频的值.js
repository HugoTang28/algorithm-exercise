const topKFrequent = (nums, k) => {
  const map = new Map()
  const res = []
  // 第一步：统计值出现的次数
  for (const val of nums) {
    map.set(val, (map.get(val) ?? 0) + 1)
  }
  const maxCnt = Math.max(...map.values())

  // 第二步：建立一个桶，出现次数的值装在一起
  const buckets = Array.from({ length: maxCnt + 1 }, () => [])
  for (const [val, cnt] of map.entries()) {
    //val代表值，cnt代表出现的次数
    buckets[cnt].push(val)
  }

  // 第三步: 倒序遍历 buckets，把出现次数前 k 大的元素加入
  for (let i = maxCnt; res.length < k; i--) {
    res.push(...buckets[i])
  }
  return res
}

console.log(topKFrequent([1, 2, 1], 2))

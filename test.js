function longStr(str) {
  // 滑动窗口，双指针
  let maxLen = 0
  let left = 0
  let map = new Map()
  for (let right = 0; right < str.length; right++) {
    while (map.has(str[right])) {
      map.delete(str[left])
      left++
    }
    map.set(str[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}
console.log(longStr('acsad'))

function longlength(str) {
  let left = 0
  let maxLen = 0
  const set = new Set()
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left])
      left++
    }
    set.add(str[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

console.log(longlength('abcab'))

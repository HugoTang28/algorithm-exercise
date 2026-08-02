// 无重复的最长字符串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const set = new Map()
  let left = 0
  let maxLen = 0

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.set(s[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}
console.log(lengthOfLongestSubstring('aabcabcbb'))

const lengthOfLongestSubstring2 = (s) => {
  const set = new Set()
  let left = 0
  let maxLen = 0
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

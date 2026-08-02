function merge(arr) {
  if (arr.length === 0) return []
  arr.sort((a, b) => a[0] - b[0])
  let result = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    const last = result[result.length - 1]
    const curr = arr[i]
    if (curr[0] <= last[1]) {
      // 重叠合并
      last[1] = Math.max(last[1], curr[1])
    } else {
      result.push(curr)
    }
  }
  return result
}
const arrs = [
  [1, 3],
  [2, 6],
  [8, 10],
]
console.log(merge(arrs))

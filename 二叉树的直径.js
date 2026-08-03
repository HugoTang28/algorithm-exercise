var diameterOfBinaryTree = function (root) {
  let ans = 0

  function dfs(node) {
    if (node === null) {
      return -1
    }
    const lLen = dfs(node.left)
    const rLen = dfs(node.right)
    ans = Math.max(ans, lLen + rLen) // 两条链拼成路径
    return Math.max(lLen, rLen) + 1
  }

  dfs(root)
  return ans
}
console.log(diameterOfBinaryTree([1, 2, 3, 4, 5])) // 输出 3

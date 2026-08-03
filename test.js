function diameterOfBinaryTree(root) {
  let ans = 0
  // 返回当前节点子树高度
  function getHeight(node) {
    if (!node) return -1
    const leftH = getHeight(node.left)
    const rightH = getHeight(node.right)
    ans = Math.max(ans, leftH + rightH)
    return Math.max(leftH + rightH) + 1
  }
  getHeight(root)
  return ans
}

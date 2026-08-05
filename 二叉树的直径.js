function diameterOfBinaryTree(root) {
  let ans = 0
  // 返回当前节点子树高度
  function getHeight(node) {
    if (!node) return 0
    const leftH = getHeight(node.left)
    const rightH = getHeight(node.right)
    ans = Math.max(ans, leftH + rightH)
    return Math.max(leftH, rightH) + 1
  }
  getHeight(root)
  return ans
}

// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log(diameterOfBinaryTree(root))

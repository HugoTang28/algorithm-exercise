// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  } else {
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}

// ============ 测试 ============
// 用例1：空树
console.log('空树 →', maxDepth(null)) // 期望 0

// 用例2：只有一个根节点
const tree1 = new TreeNode(1)
console.log('单节点 →', maxDepth(tree1)) // 期望 1

// 用例3：三层树（示例 [3,9,20,null,null,15,7]）
//       3
//      / \
//     9  20
//       /  \
//      15   7
const tree2 = new TreeNode(3)
tree2.left = new TreeNode(9)
tree2.right = new TreeNode(20)
tree2.right.left = new TreeNode(15)
tree2.right.right = new TreeNode(7)
console.log('普通三层树 →', maxDepth(tree2)) // 期望 3

// 用例4：链状退化树（一路向右，考验最深分支）
// 1 → 2 → 3 → 4
const tree3 = new TreeNode(1)
tree3.right = new TreeNode(2)
tree3.right.right = new TreeNode(3)
tree3.right.right.right = new TreeNode(4)
console.log('链状树 →', maxDepth(tree3)) // 期望 4

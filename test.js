class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 构造相交链表
let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
n1.next = n2
n2.next = n3

const reverseList = (head) => {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next // ① 先保存下一个节点
    curr.next = prev // ② 掉头：让当前节点指向它的前一个
    prev = curr // ③ 整体右移：prev 变成当前节点
    curr = next // ③ 整体右移：curr 变成下一个节点
  }
  return prev
}

let res = reverseList(n1)
console.log(res) //3->2->1

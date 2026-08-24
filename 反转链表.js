//  Definition for singly-linked list.
// 构造链表节点
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

var reverseList = function (head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

let res = reverseList(n1)
console.log(res) //3->2->1

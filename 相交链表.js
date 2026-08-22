//  Definition for singly-linked list.
// 构造链表节点
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 构造相交链表
const a1 = new ListNode(4)
const a2 = new ListNode(1)
const c1 = new ListNode(8)
const c2 = new ListNode(4)
const c3 = new ListNode(5)
a1.next = a2
a2.next = c1
c1.next = c2
c2.next = c3

const b1 = new ListNode(5)
const b2 = new ListNode(6)
const b3 = new ListNode(1)
b1.next = b2
b2.next = b3
b3.next = c1 // B链表接到c1，交点是c1(val=8)

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA
  let pB = headB
  while (pA !== pB) {
    pA = pA ? pA.next : headB
    pB = pB ? pB.next : headA
  }
  return pA
}

const res = getIntersectionNode(a1, b1)
console.log(res.val) // 8

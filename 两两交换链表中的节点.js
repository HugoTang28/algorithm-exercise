function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// 数组转链表
function arr2list(arr) {
  let dummy = new ListNode()
  let p = dummy
  for (let v of arr) {
    p.next = new ListNode(v)
    p = p.next
  }
  return dummy.next
}
// 链表转数组
function list2arr(head) {
  let res = []
  let p = head
  while (p) {
    res.push(p.val)
    p = p.next
  }
  return res
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dumy = new ListNode(0, head)
  let cur = dumy
  // 后面存在两个节点才交换
  while (cur.next && cur.next.next) {
    const n1 = cur.next
    const n2 = cur.next.next
    // 三步交换指针
    n1.next = n2.next
    n2.next = n1
    cur.next = n2
    // cur移动到下一组重置节点
    cur = n1
  }
  return dumy.next
}

console.log(list2arr(swapPairs(arr2list([1, 2, 3, 4, 5]))))

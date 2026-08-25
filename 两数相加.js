class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode() // 哨兵节点
  let cur = dummy
  let carry = 0 // 进位值
  while (l1 || l2 || carry) {
    let sum = carry
    if (l1) {
      sum += l1.val // 节点值和进位加在一起
      l1 = l1.next // 下一个节点
    }
    if (l2) {
      sum += l2.val // 节点值和进位加在一起
      l2 = l2.next // 下一个节点
    }
    cur = cur.next = new ListNode(sum % 10) // 每个节点保存一个数位
    carry = Math.floor(sum / 10) // 新的进位
  }
  return dummy.next // 哨兵节点的下一个节点就是头节点
}

// 工具1：数组转链表，方便输入测试数据
function arrayToList(arr) {
  let dummy = new ListNode()
  let p = dummy
  for (let num of arr) {
    p.next = new ListNode(num)
    p = p.next
  }
  return dummy.next
}
// 工具2：链表转回数组，方便打印看结果
function listToArray(head) {
  const res = []
  let p = head
  while (p) {
    res.push(p.val)
    p = p.next
  }
  return res
}

//测试用例1：l1=[2,4,3],l2=[5,6,4]
const l1 = arrayToList([2, 4, 3])
const l2 = arrayToList([5, 6, 4])
const resultLink = addTwoNumbers(l1, l2)
console.log(listToArray(resultLink)) // [7,0,8]

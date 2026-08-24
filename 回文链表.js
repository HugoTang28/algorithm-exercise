class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(2)
let n4 = new ListNode(1)
n1.next = n2
n2.next = n3
n3.next = n4

var isPalindrome = function (head) {
  // 转数组
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    if (arr[l] !== arr[r]) return false
    l++
    r--
  }
  return true
}

let res = isPalindrome(n1)
console.log(res)

function isValid(s) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let char of s) {
    // 右括号
    if (map[char]) {
      // 栈空 或者 栈顶不匹配
      if (!stack.length || stack.pop() !== map[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
}
console.log(isValid('([)]'))

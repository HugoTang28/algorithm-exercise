// 京东笔试 编程题 1（整理完整题干）题目描述给定一个正整数 num，请判断是否存在三个正整数 \(a,b,c\)，满足下面两个条件：
// \(a + b + c = num\)
// \(a、b、c\) 两两互质（任意两个数字的最大公约数为 1）
// 如果存在满足条件的三元组，请输出任意一组 \(a\ b\ c\)；
// 如果不存在，则输出 -1。输入描述第一行一个整数 T，代表测试用例的数量。
// 接下来 T 行，每行一个整数 num。输出描述对于每组测试用例：
// 若存在解：在一行输出三个整数 \(a\ b\ c\)，数字之间用空格隔开；
// 若无解：单独一行输出 -1。
// 输入样例plaintext3
// 6
// 7
// 5
// 输出样例plaintext1 2 3
// 1 4 2
// -1

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// 最大公约数
function gcd(a, b) {
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

function solve(num) {
  if (num < 6) return -1
  if (num % 2 === 0) {
    return [1, 2, num - 3]
  } else {
    const c = num - 4
    if (gcd(3, c) === 1) {
      return [1, 3, c]
    } else {
      return [1, 4, num - 5]
    }
  }
}

let totalCase = null
const caseList = []

rl.on('line', (line) => {
  const inputStr = line.trim()
  if (inputStr === '') return // 跳过空行
  const num = parseInt(inputStr)

  if (totalCase === null) {
    // 第一行读取测试用例数量
    totalCase = num
  } else {
    caseList.push(num)
    // 收集到足够数据，立刻计算输出
    if (caseList.length === totalCase) {
      for (const n of caseList) {
        const ans = solve(n)
        console.log(ans === -1 ? -1 : ans.join(' '))
      }
      // 运算完成，关闭程序
      rl.close()
    }
  }
})

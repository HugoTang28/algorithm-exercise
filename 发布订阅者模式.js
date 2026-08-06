class EventBus {
  constructor() {
    this.eventMap = {}
  }
  on(name, fn) {
    if (!this.eventMap[name]) this.eventMap[name] = []
    this.eventMap[name].push(fn)
  }
  emit(name, ...args) {
    this.eventMap[name]?.forEach((fn) => fn(...args))
  }
  off(name, fn) {
    if (!this.eventMap[name]) return
    // 没传 fn 就清空该事件下所有订阅
    if (!fn) {
      this.eventMap[name] = []
      return
    }
    this.eventMap[name] = this.eventMap[name].filter((item) => item !== fn)
  }
}
const bus = new EventBus()

const handlerA = (v) => console.log('A 收到:', v)
const handlerB = (v) => console.log('B 收到:', v)

bus.on('msg', handlerA)
bus.on('msg', handlerB)

bus.emit('msg', 1)
// 输出：A 收到: 1
//       B 收到: 1

// 2. 取消 handlerA
bus.off('msg', handlerA)

bus.emit('msg', 2)
// 输出：B 收到: 2   （A 已被取消，不再触发）

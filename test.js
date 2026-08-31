class LRUCache {
  constructor(capacity) {
    this.cap = capacity
    this.map = new Map()
  }
}

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1
  const val = this.map.get(key)
  this.map.delete(key)
  this.map.set(key, val)
  return val
}

LRUCache.prototype.set = function (key, val) {
  if (this.map.has(key)) {
    this.map.delete(key)
  } else {
    // 容量超限，删除最久未使用（Map第一个）
    if (this.map.size >= this.cap) {
      const oldkey = this.map.keys().next().value
      this.map.delete(oldkey)
    }
  }
  this.map.set(key, val)
}

// ============ 测试 ============
const cache = new LRUCache(2)

cache.set(1, 1) // Map: [1]
cache.set(2, 2) // Map: [1, 2]
console.log('get(1):', cache.get(1))

cache.set(3, 3) // 容量已满，淘汰最久未使用的 2 → Map: [1, 3]
console.log('get(2):', cache.get(2)) // -1（已被淘汰）
console.log('get(3):', cache.get(3)) // 3（命中，挪到末尾 → Map: [1, 3]）

cache.set(4, 4) // 容量已满，淘汰最久未使用的 1 → Map: [3, 4]
console.log('get(1):', cache.get(1)) // -1（已被淘汰）
console.log('get(3):', cache.get(3)) // 3（仍存活）
console.log('get(4):', cache.get(4)) // 4（仍存活）

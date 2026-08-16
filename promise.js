class MyPromise {
  constructor(executor) {
    this.status = 'pending' // pending fulfilled rejected
    this.value = null
    this.reason = null
    this.onFulfilledCbs = []
    this.onRejectedCbs = []

    const resolve = (val) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = val
        this.onFulfilledCbs.forEach((fn) => fn(val))
      }
    }
    const reject = (err) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = err
        this.onRejectedCbs.forEach((fn) => fn(err))
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 成功态
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const res = onFulfilled(this.value)
            resolve(res)
          } catch (e) {
            reject(e)
          }
        })
      }
      // 失败态
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const res = onRejected(this.reason)
            resolve(res)
          } catch (e) {
            reject(e)
          }
        })
      }
      // 等待态，缓存回调
      if (this.status === 'pending') {
        this.onFulfilledCbs.push(() => {
          setTimeout(() => {
            try {
              const res = onFulfilled(this.value)
              resolve(res)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCbs.push(() => {
          setTimeout(() => {
            try {
              const res = onRejected(this.reason)
              resolve(res)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })
  }
}
// 测试示例
new MyPromise((res) => res(100)).then((v) => console.log(v))

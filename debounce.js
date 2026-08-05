function debounce1(fn, delay = 300) {
  let timer = null
  return function (...args) {
    let context = this
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(context, args), delay)
  }
}

/**
 * @desc  函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
function debounce(fn, wait, immediate) {
  let timeout
  return function (...args) {
    let context = this
    if (timeout) clearTimeout(timeout)
    // 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
    if (immediate) {
      /**
       * 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
       * 这样确保立即执行后wait毫秒内不会被再次触发
       */
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        fn.apply(context, args)
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        /**
         * args是一个类数组对象，所以使用fn.apply
         * 也可写作fn.call(context, ...args)
         */
        fn.apply(context, args)
      }, wait)
    }
  }
}

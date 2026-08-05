/**
 * @desc  函数节流
 * @param {Function} fn
 * @param {Number} wait
 * @returns {Function}
 */
function throttle(fn, wait) {
  let context, args
  let previous = 0
  return function () {
    let now = +Date.now()
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, agrs)
      previous = now
    }
  }
}

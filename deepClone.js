const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const cloneObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    cloneObj[key] = deepClone(obj[key])
  }

  return cloneObj
}

const origin = {
  deviceList: [
    { id: 1, name: '灯光' },
    { id: 2, name: '窗帘' },
  ],
  info: { price: 1299 },
}
const copy = deepClone(origin)
copy.deviceList[0].name = '主灯'
console.log(origin)
console.log(typeof [1, 2, 3])

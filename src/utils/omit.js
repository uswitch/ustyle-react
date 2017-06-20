var assign = require('object.assign/polyfill')();

const omit = (obj, ...keys) => {
  const newObj = assign({}, obj)
  keys.forEach(k => delete newObj[k])
  return newObj
}

export default omit

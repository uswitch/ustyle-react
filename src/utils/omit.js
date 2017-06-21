import assign from 'object.assign'

const omit = (obj, ...keys) => {
  const newObj = assign({}, obj)
  keys.forEach(k => delete newObj[k])
  return newObj
}

export default omit

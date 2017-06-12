const omit = (obj, ...keys) => {
  const newObj = Object.assign({}, obj)
  keys.forEach(k => delete newObj[k])
  return newObj
}

export default omit

export function addClass (el, className) {
  el.className = el.className.split(/[\s]+/)
    .concat(className)
    .join(' ')
}

export function removeClass (el, className) {
  el.className = el.className.split(/[\s]+/)
    .filter((cn) => cn !== className)
    .join(' ')
}

export function hasClass (el, className) {
  return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

export default { addClass, removeClass, hasClass }

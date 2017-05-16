export function addClass (el, className) {
  el.className = el.className.split(/[\s]+/)
    .concat(className)
    .join(' ');
}

export function removeClass (el, className) {
  el.className = el.className.split(/[\s]+/)
    .filter((cn) => cn !== className)
    .join(' ');
}

export function hasClass (el, className) {
  return el.className.split(/[\s]+/).includes(className);
}

export default { addClass, removeClass, hasClass };
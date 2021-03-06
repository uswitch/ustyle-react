'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
function addClass(el, className) {
  el.className = el.className.split(/[\s]+/).concat(className).join(' ');
}

function removeClass(el, className) {
  el.className = el.className.split(/[\s]+/).filter(function (cn) {
    return cn !== className;
  }).join(' ');
}

function hasClass(el, className) {
  return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

exports.default = { addClass: addClass, removeClass: removeClass, hasClass: hasClass };
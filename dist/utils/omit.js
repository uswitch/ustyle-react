"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var omit = function omit(obj) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var newObj = Object.assign({}, obj);
  keys.forEach(function (k) {
    return delete newObj[k];
  });
  return newObj;
};

exports.default = omit;
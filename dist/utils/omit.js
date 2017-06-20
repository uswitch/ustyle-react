'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var omit = function omit(obj) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var newObj = (0, _object2.default)({}, obj);
  keys.forEach(function (k) {
    return delete newObj[k];
  });
  return newObj;
};

exports.default = omit;
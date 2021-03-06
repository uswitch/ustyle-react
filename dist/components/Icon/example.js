'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { name: 'cross', size: 'small' }),
    _react2.default.createElement(_index2.default, { name: 'facebook-brand' }),
    _react2.default.createElement(_index2.default, { name: 'google', color: 'typecyan', size: 'large' }),
    _react2.default.createElement(_index2.default, { name: 'tick', color: 'typegrey', size: 'small', before: true })
  );
};
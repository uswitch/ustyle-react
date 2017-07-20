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
    _react2.default.createElement(
      _index2.default,
      { color: 'typecyan' },
      'Shortened USP'
    ),
    _react2.default.createElement(_index2.default, { color: 'red', text: 'Annotated USP', annotation: 'More information about USP goes here' })
  );
};
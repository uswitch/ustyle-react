'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS = ['blue', 'orange', 'purple', 'yellow', 'typecyan', 'green', 'navy', 'cyan', 'typegrey', 'red'];
var noop = function noop() {};

function validateColor(color) {
  if (!color || COLORS.includes(color)) return;
  throw new Error('Invalid USP color: ' + color + '. Must be one of: ' + COLORS.join(', '));
}

function getClassName(color) {
  return ['us-usp'].concat(color ? 'us-usp--' + color : '').join(' ');
}

function USP(_ref) {
  var color = _ref.color,
      text = _ref.text,
      annotation = _ref.annotation,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? noop : _ref$onClick;

  validateColor(color);
  if (!annotation) {
    return _react2.default.createElement(
      'div',
      { className: getClassName(color), onClick: onClick },
      text
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'us-usp us-usp--annotated', onClick: onClick },
      _react2.default.createElement(
        'div',
        { className: getClassName(color) },
        text
      ),
      _react2.default.createElement(
        'span',
        null,
        annotation
      )
    );
  }
}

exports.default = USP;
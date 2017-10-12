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
      { text: '@' },
      _react2.default.createElement('input', { className: 'us-form-input', type: 'text', id: 'email', placeholder: 'Email' })
    ),
    _react2.default.createElement(
      _index2.default,
      { text: 'kwh', position: 'right' },
      _react2.default.createElement('input', { className: 'us-form-input', type: 'text', id: 'email', placeholder: 'Email' })
    ),
    _react2.default.createElement(
      _index2.default,
      { icon: 'envelope', position: 'left' },
      _react2.default.createElement('input', { className: 'us-form-input', type: 'text', id: 'email', placeholder: 'Email' })
    ),
    _react2.default.createElement(
      _index2.default,
      { icon: 'envelope', position: 'left', blocked: true },
      _react2.default.createElement('input', { className: 'us-form-input', type: 'text', id: 'email', placeholder: 'Email' })
    ),
    _react2.default.createElement(
      _index2.default,
      { icon: 'envelope', position: 'left', disabled: true },
      _react2.default.createElement('input', { disabled: true, className: 'us-form-input', type: 'text', id: 'email', placeholder: 'Email' })
    )
  );
};
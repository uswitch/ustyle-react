'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var text = _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'Tooltip'
    ),
    ' message content'
  );
  return _react2.default.createElement(
    _index2.default,
    { text: text, position: 'left' },
    _react2.default.createElement(
      _Field2.default,
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'name' },
        'Name'
      ),
      _react2.default.createElement('input', {
        className: 'us-form-input',
        id: 'name',
        name: 'name',
        placeholder: 'Please enter your name' })
    )
  );
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ValidationError;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ValidationMessage = require('../ValidationMessage');

var _ValidationMessage2 = _interopRequireDefault(_ValidationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ValidationError(props) {
  return _react2.default.createElement(_ValidationMessage2.default, _extends({}, props, { variant: 'error' }));
}

ValidationError.propTypes = {
  children: _propTypes2.default.node.isRequired
};
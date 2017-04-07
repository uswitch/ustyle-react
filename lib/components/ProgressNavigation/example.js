'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  href: '/journey/current-supplier',
  text: 'Current supplier'
}, {
  href: '/journey/usage',
  text: 'Usage'
}, {
  href: null, // optional, not used
  text: 'Results',
  current: true
}, {
  href: null, // optional, not used
  text: 'New tariff'
}, {
  href: null, // optional, not used
  text: 'Apply'
}];

function onClick(e, item) {
  e.preventDefault();
  window.alert('You clicked a navigation link:\n' + item.href);
}

exports.default = function () {
  return _react2.default.createElement(_index2.default, { items: items, onClick: onClick });
};
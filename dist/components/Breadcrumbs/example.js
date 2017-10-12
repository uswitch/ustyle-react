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
  href: '/',
  text: 'uSwitch.com'
}, {
  href: 'http://www.uswitch.com/credit-reports/',
  text: 'Credit report'
}, {
  href: 'http://www.uswitch.com/credit-reports/guides/',
  text: 'Credit reports guides'
}, {
  href: null, // NOTE: optional, not used
  text: 'Statutory credit reports'
}];

function onClick(e, item) {
  e.preventDefault();
  window.alert('You clicked a breadcrumb:\n' + item.href);
}

exports.default = function () {
  return _react2.default.createElement(_index2.default, { items: items, onClick: onClick });
};
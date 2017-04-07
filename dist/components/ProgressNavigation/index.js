'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ProgressNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function NavItemText(_ref) {
  var status = _ref.status,
      href = _ref.href,
      text = _ref.text,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? noop : _ref$onClick;

  var className = 'us-progress__link us-progress__link--' + status;
  var children = _react2.default.createElement(
    'span',
    { className: 'us-tablet--inline' },
    text
  );
  var props = { className: className, children: children, onClick: onClick };
  switch (status) {
    case 'complete':
      return _react2.default.createElement('a', _extends({ href: href, title: text }, props));
    case 'current':
    case 'next':
      return _react2.default.createElement('span', props);
    default:
      return null;
  }
}

function NavItem(props) {
  return _react2.default.createElement(
    'li',
    { className: 'us-progress__item' },
    _react2.default.createElement(NavItemText, props)
  );
}

function NavItemList(_ref2) {
  var items = _ref2.items,
      onClick = _ref2.onClick;

  var cleanItems = [];
  for (var i = 0; i < items.length; i++) {
    var status = 'complete';
    var prevStatus = (cleanItems[i - 1] || {}).status;
    if (prevStatus === 'current' || prevStatus === 'next') status = 'next';else if (items[i].current) status = 'current';
    cleanItems.push(Object.assign({ status: status, onClick: onClick }, items[i]));
  }
  return _react2.default.createElement(
    'ul',
    { className: 'us-progress__nav us-clearfix' },
    cleanItems.map(function (item, i) {
      return _react2.default.createElement(NavItem, _extends({}, item, { onClick: onClick, key: i }));
    })
  );
}

function ProgressNavigation(props) {
  return _react2.default.createElement(
    'div',
    { className: 'us-progress' },
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(NavItemList, props)
    )
  );
}
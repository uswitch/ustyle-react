'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global history */


var tabHref = function tabHref(_ref) {
  var href = _ref.href,
      id = _ref.id;
  return href || (id ? '#' + id : null);
};

var Chevron = function Chevron() {
  return _react2.default.createElement(
    'span',
    { className: 'us-tabs-nav-chevron' },
    _react2.default.createElement(_Icon2.default, { name: 'chevron-right', size: 'small', color: 'inputgrey' })
  );
};

var TabsNavLink = function TabsNavLink(_ref2) {
  var item = _ref2.item,
      onClick = _ref2.onClick;

  var className = (0, _classnames2.default)({
    'us-tabs-nav-mainlink': true,
    'us-tabs-nav-link': true,
    'active': item.active
  });

  return _react2.default.createElement(
    'a',
    {
      onClick: onClick,
      className: className,
      href: tabHref(item) },
    item.title
  );
};

var Tab = function Tab(_ref3) {
  var item = _ref3.item,
      onClick = _ref3.onClick;

  var tabClassName = (0, _classnames2.default)({
    'us-tab': true,
    'active': item.active
  });

  var navLinkClassName = (0, _classnames2.default)({
    'us-tabs-nav-mainlink': true,
    'active': item.active
  });

  return _react2.default.createElement(
    'div',
    { className: tabClassName, id: item.id },
    _react2.default.createElement(
      'h2',
      { className: 'us-tab-title' },
      _react2.default.createElement(
        'a',
        { className: navLinkClassName,
          onClick: onClick,
          href: tabHref(item) },
        item.title,
        _react2.default.createElement(Chevron, null)
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'us-tab-content' },
      item.body
    )
  );
};

var Tabs = function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = { items: _this.props.items };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'onClickHandler',
    value: function onClickHandler(item) {
      var _this2 = this;

      var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return function (e) {
        e.preventDefault();

        var items = _this2.state.items.map(function (x) {
          if (x.id !== item.id) return _extends({}, x, { active: false });
          return _extends({}, x, { active: !toggle || !x.active });
        });

        _this2.setState({ items: items }, function () {
          return _this2.props.onClick(e, item);
        });

        if (!_this2.props.disableHistory) {
          history.pushState(null, null, e.target.href);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.state.items;

      var onClick = this.onClickHandler.bind(this);

      return _react2.default.createElement(
        'div',
        { className: 'us-tabs js' },
        _react2.default.createElement(
          'nav',
          { className: 'us-tabs-nav' },
          _react2.default.createElement(
            'div',
            { className: 'us-tabs-nav-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'us-tabs-nav-menu' },
              items.map(function (item) {
                return _react2.default.createElement(TabsNavLink, {
                  key: item.id,
                  item: item,
                  onClick: onClick(item) });
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'us-tabs-container' },
          items.map(function (item, i) {
            return _react2.default.createElement(Tab, {
              key: item.id,
              item: item,
              onClick: onClick(item, true) });
          })
        )
      );
    }
  }]);

  return Tabs;
}(_react.PureComponent);

exports.default = Tabs;


Tabs.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    href: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired,
    body: _propTypes2.default.node,
    active: _propTypes2.default.bool
  })),
  onClick: _propTypes2.default.func
};

Tabs.defaultProps = {
  onClick: function onClick() {}
};
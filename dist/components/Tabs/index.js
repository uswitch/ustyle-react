'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'onClickHandler',
    value: function onClickHandler(e, item) {
      this.props.onClick(e, item);
    }
  }, {
    key: 'tabsNavMainLink',
    value: function tabsNavMainLink(item, i) {
      var _this2 = this;

      var id = item.id,
          href = item.href;

      var realHref = href || (id ? '#' + id : null);
      return _react2.default.createElement(
        'a',
        { key: i, onClick: function onClick(e) {
            return _this2.onClickHandler(e, item);
          },
          className: (0, _classnames2.default)({
            'us-tabs-nav-mainlink': true,
            'us-tabs-nav-link': true,
            'active': item.active
          }),
          href: realHref },
        item.title
      );
    }
  }, {
    key: 'tabsNav',
    value: function tabsNav() {
      var items = this.props.items;

      return _react2.default.createElement(
        'nav',
        { className: 'us-tabs-nav' },
        _react2.default.createElement(
          'div',
          { className: 'us-tabs-nav-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'us-tabs-nav-menu' },
            items.map(this.tabsNavMainLink.bind(this))
          )
        )
      );
    }
  }, {
    key: 'tab',
    value: function tab(item, i) {
      var _this3 = this;

      var id = item.id,
          href = item.href;

      var realHref = href || (id ? '#' + id : null);
      return _react2.default.createElement(
        'div',
        { key: i, className: (0, _classnames2.default)({
            'us-tab': true,
            'active': item.active
          }), id: item.id },
        _react2.default.createElement(
          'h2',
          { className: 'us-tab-title' },
          _react2.default.createElement(
            'a',
            { className: (0, _classnames2.default)({
                'us-tabs-nav-mainlink': true,
                'active': item.active
              }),
              onClick: function onClick(e) {
                return _this3.onClickHandler(e, item);
              },
              href: realHref },
            item.title,
            _react2.default.createElement(
              'span',
              { className: 'us-tabs-nav-chevron' },
              _react2.default.createElement(_Icon2.default, {
                name: 'chevron-right',
                size: 'small',
                color: 'inputgrey' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'us-tab-content' },
          item.body
        )
      );
    }
  }, {
    key: 'tabsContainer',
    value: function tabsContainer() {
      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'us-tabs-container' },
        items.map(this.tab.bind(this))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'us-tabs js' },
        this.tabsNav(),
        this.tabsContainer()
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
  id: false,
  onClick: function onClick() {}
};
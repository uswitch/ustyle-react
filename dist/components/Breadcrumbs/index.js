'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb = function (_PureComponent) {
  _inherits(Breadcrumb, _PureComponent);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'onClickHandler',
    value: function onClickHandler(e) {
      var _props = this.props,
          item = _props.item,
          onClick = _props.onClick;

      onClick(e, item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          isLast = _props2.isLast;

      return _react2.default.createElement(
        'li',
        { className: 'us-crumbs__item' },
        isLast ? item.text : _react2.default.createElement('a', { className: 'us-crumbs__link',
          href: item.href,
          title: item.text,
          children: item.text,
          onClick: this.onClickHandler.bind(this) })
      );
    }
  }]);

  return Breadcrumb;
}(_react.PureComponent);

Breadcrumb.propTypes = {
  item: _propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string
  }),
  isLast: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Breadcrumb.defaultProps = {
  isLast: false,
  onClick: function onClick() {}
};

var Breadcrumbs = function (_PureComponent2) {
  _inherits(Breadcrumbs, _PureComponent2);

  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);

    return _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
  }

  _createClass(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          items = _props3.items,
          onClick = _props3.onClick;

      return _react2.default.createElement(
        'ul',
        { className: 'us-crumbs' },
        items.map(function (item, i) {
          var isLast = i === items.length - 1;
          var key = i;
          var props = { key: key, item: item, isLast: isLast, onClick: onClick };
          return _react2.default.createElement(Breadcrumb, props);
        })
      );
    }
  }]);

  return Breadcrumbs;
}(_react.PureComponent);

exports.default = Breadcrumbs;


Breadcrumbs.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string
  })).isRequired,
  onClick: _propTypes2.default.func
};

Breadcrumbs.defaultProps = {
  onClick: function onClick() {}
};
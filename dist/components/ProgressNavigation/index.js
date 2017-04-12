'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUSES = ['current', 'next', 'complete'];

var ProgressNavigationLink = function (_PureComponent) {
  _inherits(ProgressNavigationLink, _PureComponent);

  function ProgressNavigationLink() {
    _classCallCheck(this, ProgressNavigationLink);

    return _possibleConstructorReturn(this, (ProgressNavigationLink.__proto__ || Object.getPrototypeOf(ProgressNavigationLink)).apply(this, arguments));
  }

  _createClass(ProgressNavigationLink, [{
    key: 'onClickHandler',
    value: function onClickHandler(e) {
      this.props.onClick(e, this.props.item);
    }
  }, {
    key: 'getTextNode',
    value: function getTextNode() {
      var _props$item = this.props.item,
          text = _props$item.text,
          status = _props$item.status,
          href = _props$item.href;

      var props = {
        className: 'us-progress__link us-progress__link--' + status,
        children: _react2.default.createElement(
          'span',
          { className: 'us-tablet--inline' },
          text
        ),
        onClick: this.onClickHandler.bind(this)
      };
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
  }, {
    key: 'render',
    value: function render() {
      var children = this.getTextNode();
      return _react2.default.createElement('li', { className: 'us-progress__item', children: children });
    }
  }]);

  return ProgressNavigationLink;
}(_react.PureComponent);

ProgressNavigationLink.propTypes = {
  item: _react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    href: _react.PropTypes.string,
    status: _react.PropTypes.oneOf(STATUSES)
  }).isRequired,
  onClick: _react.PropTypes.func.isRequired
};

var ProgressNavigation = function (_PureComponent2) {
  _inherits(ProgressNavigation, _PureComponent2);

  function ProgressNavigation() {
    _classCallCheck(this, ProgressNavigation);

    return _possibleConstructorReturn(this, (ProgressNavigation.__proto__ || Object.getPrototypeOf(ProgressNavigation)).apply(this, arguments));
  }

  _createClass(ProgressNavigation, [{
    key: 'getItemsWithStatus',
    value: function getItemsWithStatus() {
      var items = this.props.items;

      var itemsWithStatus = [];
      for (var i = 0; i < items.length; i++) {
        var status = 'complete';
        var prevStatus = (itemsWithStatus[i - 1] || {}).status;
        if (prevStatus === 'current' || prevStatus === 'next') status = 'next';else if (items[i].current) status = 'current';
        itemsWithStatus.push(Object.assign({ status: status }, items[i]));
      }
      return itemsWithStatus;
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.getItemsWithStatus();
      var onClick = this.props.onClick.bind(this);
      return _react2.default.createElement(
        'div',
        { className: 'us-progress' },
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'us-progress__nav us-clearfix' },
            items.map(function (item, i) {
              return _react2.default.createElement(ProgressNavigationLink, { item: item, onClick: onClick, key: i });
            })
          )
        )
      );
    }
  }]);

  return ProgressNavigation;
}(_react.PureComponent);

exports.default = ProgressNavigation;


ProgressNavigation.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    href: _react.PropTypes.string,
    current: _react.PropTypes.bool
  })).isRequired,
  onClick: _react.PropTypes.func
};

ProgressNavigation.defaultProps = {
  onClick: function onClick() {}
};
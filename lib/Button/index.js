'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VARIANTS = ['primary', 'action', 'secondary', 'hero', 'reversed'];
var SIZES = ['large', 'small']; // NOTE: should we have medium as default?

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'getClassName',
    value: function getClassName() {
      var _cx;

      return (0, _classnames2.default)((_cx = {
        'us-btn': true
      }, _defineProperty(_cx, 'us-btn--' + this.props.variant, this.props.variant), _defineProperty(_cx, 'us-btn--' + this.props.size, this.props.size), _defineProperty(_cx, 'us-btn--blocked', this.props.blocked), _defineProperty(_cx, 'us-btn--link', this.props.link), _defineProperty(_cx, 'us-btn--stronger', this.props.stronger), _defineProperty(_cx, 'us-btn--disabled', this.props.href && this.props.disabled), _cx));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          href = _props.href,
          onClick = _props.onClick,
          disabled = _props.disabled;

      var className = this.getClassName();
      var childProps = { className: className, onClick: onClick, children: children };
      if (href) return _react2.default.createElement('a', _extends({ href: href, role: 'button' }, childProps));
      return _react2.default.createElement('button', _extends({ disabled: disabled, asd: true }, childProps));
    }
  }]);

  return Button;
}(_react.PureComponent);

exports.default = Button;


Button.propTypes = {
  variant: _react.PropTypes.oneOf(VARIANTS),
  size: _react.PropTypes.oneOf(SIZES),
  blocked: _react.PropTypes.bool.isRequired,
  link: _react.PropTypes.bool.isRequired,
  stronger: _react.PropTypes.bool.isRequired,
  href: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

Button.defaultProps = {
  blocked: false,
  link: false,
  stronger: false,
  onClick: function onClick() {}
};
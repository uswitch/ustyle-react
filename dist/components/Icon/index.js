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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_PATH = process.env.ICON_PATH || typeof window !== 'undefined' && window['ICON_PATH'] || '/icons.svg';
var SIZES = ['small', 'medium', 'large'];
var COLORS = ['white', 'typegrey', 'inputgrey', 'typecyan', 'custom'];

var CUSTOMISABLE_COLOR_ICONS = ['cross', 'facebook', 'facebook-brand', 'google', 'google-brand', 'renewable', 'star-half', 'star', 'starline-half', 'starline', 'tick', 'twitter', 'twitter-brand', 'uswitch'];

var Icon = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        {
          role: 'presentation',
          className: this.className },
        _react2.default.createElement('use', { xlinkHref: this.xlinkHref })
      );
    }
  }, {
    key: 'realColor',
    get: function get() {
      var _props = this.props,
          name = _props.name,
          color = _props.color;

      if (color !== 'custom') return color;
      return CUSTOMISABLE_COLOR_ICONS.indexOf(name) !== -1 ? name : color;
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      var _props2 = this.props,
          size = _props2.size,
          sizeTablet = _props2.sizeTablet,
          sizeMobile = _props2.sizeMobile,
          noText = _props2.noText,
          before = _props2.before,
          after = _props2.after;

      return (0, _classnames2.default)(this.props.className, (_cx = {
        'us-icon': true
      }, _defineProperty(_cx, 'us-icon--' + size, size), _defineProperty(_cx, 'us-icon--' + sizeTablet + '--sm-tablet', sizeTablet), _defineProperty(_cx, 'us-icon--' + sizeMobile + '--mobile', sizeMobile), _defineProperty(_cx, 'us-icon--' + this.realColor, this.realColor), _defineProperty(_cx, 'us-icon--notext', noText), _defineProperty(_cx, 'us-icon--before', before), _defineProperty(_cx, 'us-icon--after', after), _cx));
    }
  }, {
    key: 'xlinkHref',
    get: function get() {
      return this.props.iconPath + '#icon-' + this.props.name;
    }
  }]);

  return Icon;
}(_react.PureComponent);

exports.default = Icon;


Icon.propTypes = {
  name: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(SIZES).isRequired,
  sizeTablet: _propTypes2.default.oneOf(SIZES),
  sizeMobile: _propTypes2.default.oneOf(SIZES),
  color: _propTypes2.default.oneOf(COLORS),
  noText: _propTypes2.default.bool.isRequired,
  before: _propTypes2.default.bool.isRequired,
  after: _propTypes2.default.bool.isRequired,
  iconPath: _propTypes2.default.string.isRequired
};

Icon.defaultProps = {
  size: 'medium',
  color: 'custom',
  noText: false,
  before: false,
  after: false,
  iconPath: ICON_PATH
};
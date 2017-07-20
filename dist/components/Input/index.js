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

var _omit = require('../../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZES = ['medium', 'large'];
var VARIANTS = ['success', 'error'];

var Input = function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      var value = e.target.value;
      this.props.onChange(e, value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.cleanProps, {
        className: this.className,
        onChange: this.onChangeHandler }));
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      var _props = this.props,
          inputSize = _props.inputSize,
          variant = _props.variant,
          blocked = _props.blocked,
          disabled = _props.disabled;

      return (0, _classnames2.default)(this.props.className, (_cx = {
        'us-form-input': true,
        'us-form-input--large': inputSize === 'large'
      }, _defineProperty(_cx, 'us-form-input--' + variant, variant), _defineProperty(_cx, 'us-form-input--blocked', blocked), _defineProperty(_cx, 'us-form-input--disabled', disabled), _cx));
    }
  }, {
    key: 'cleanProps',
    get: function get() {
      return (0, _omit2.default)(this.props, 'className', 'inputSize', // TODO: revert to `size`, and pass `htmlSize` -> `size`
      'variant', 'disabled', 'blocked', 'onChange');
    }
  }]);

  return Input;
}(_react.PureComponent);

exports.default = Input;


Input.propTypes = {
  type: _propTypes2.default.string,
  inputSize: _propTypes2.default.oneOf(SIZES),
  variant: _propTypes2.default.oneOf(VARIANTS),
  disabled: _propTypes2.default.bool,
  blocked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};

Input.defaultProps = {
  type: 'text',
  inputSize: 'medium',
  disabled: false,
  blocked: false,
  onChange: function onChange() {}
};
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZES = ['medium', 'large'];
var VARIANTS = ['success', 'error'];

var Input = function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
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
      var _cx;

      var _props = this.props,
          disabled = _props.disabled,
          blocked = _props.blocked,
          size = _props.size,
          variant = _props.variant,
          value = _props.value,
          type = _props.type,
          placeholder = _props.placeholder;

      var className = (0, _classnames2.default)(this.props.deferredProps.className, (_cx = {
        'us-form-input': true,
        'us-form-input--large': size === 'large'
      }, _defineProperty(_cx, 'us-form-input--' + variant, variant), _defineProperty(_cx, 'us-form-input--blocked', blocked), _defineProperty(_cx, 'us-form-input--disabled', disabled), _cx));
      return _react2.default.createElement('input', _extends({}, this.deferredProps, {
        disabled: disabled,
        className: className,
        onChange: this.onChangeHandler.bind(this),
        type: type,
        value: value,
        placeholder: placeholder }));
    }
  }, {
    key: 'deferredProps',
    get: function get() {
      return this.props.deferredProps; // TODO: omit values?
    }
  }]);

  return Input;
}(_react.PureComponent);

exports.default = Input;


Input.propTypes = {
  value: _propTypes2.default.any,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(SIZES),
  variant: _propTypes2.default.oneOf(VARIANTS),
  disabled: _propTypes2.default.bool,
  blocked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  deferredProps: _propTypes2.default.object.isRequired
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  disabled: false,
  blocked: false,
  onChange: function onChange() {},
  deferredProps: {}
};
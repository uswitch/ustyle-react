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

var VARIANTS = ['error', 'success'];

var Select = function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      var item = this.props.items.filter(function (item) {
        return item.value === e.target.value;
      })[0];
      this.props.onChange(e, item);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'items', 'onChange', 'blocked', 'variant');
      return _react2.default.createElement(
        'select',
        _extends({}, props, {
          className: this.className,
          onChange: this.onChangeHandler.bind(this) }),
        this.options
      );
    }
  }, {
    key: 'sizeGreaterThanOne',
    get: function get() {
      return this.props.size && parseInt(this.props.size, 10) > 1;
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      var _props = this.props,
          disabled = _props.disabled,
          variant = _props.variant,
          blocked = _props.blocked,
          className = _props.className;

      return (0, _classnames2.default)(className, (_cx = {
        'us-form-select': true
      }, _defineProperty(_cx, 'us-form-select--' + variant, variant), _defineProperty(_cx, 'us-form-select--blocked', blocked), _defineProperty(_cx, 'us-form-select--multiple', this.sizeGreaterThanOne), _defineProperty(_cx, 'us-form-select--disabled', disabled), _cx));
    }
  }, {
    key: 'options',
    get: function get() {
      return this.props.items.map(function (_ref, i) {
        var value = _ref.value,
            text = _ref.text,
            disabled = _ref.disabled;
        return _react2.default.createElement(
          'option',
          { key: i, value: value, disabled: disabled },
          text
        );
      });
    }
  }, {
    key: 'cleanProps',
    get: function get() {
      return (0, _omit2.default)(this.props, 'size', // used to change className
      'variant', // used to change className
      'blocked', // used to change className
      'onChange' // we use our custom
      );
    }
  }]);

  return Select;
}(_react.PureComponent);

exports.default = Select;


Select.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    disabled: _propTypes2.default.bool
  })).isRequired,
  value: _propTypes2.default.any.isRequired,
  variant: _propTypes2.default.oneOf(VARIANTS),
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  blocked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};

Select.defaultProps = {
  disabled: false,
  blocked: false,
  onChange: function onChange() {}
};
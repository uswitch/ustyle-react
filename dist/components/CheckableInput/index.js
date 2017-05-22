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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckableInput = function (_PureComponent) {
  _inherits(CheckableInput, _PureComponent);

  function CheckableInput(props) {
    _classCallCheck(this, CheckableInput);

    var _this = _possibleConstructorReturn(this, (CheckableInput.__proto__ || Object.getPrototypeOf(CheckableInput)).call(this, props));

    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(CheckableInput, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      this.props.onChange(e, this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var cleanProps = (0, _lodash2.default)(this.props, 'className', 'children', 'onChange');
      return _react2.default.createElement(
        'label',
        null,
        _react2.default.createElement('input', _extends({}, cleanProps, {
          onChange: this.onChangeHandler,
          className: this.className })),
        children
      );
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)({
        'us-form-input': true,
        'us-form-input--disabled': this.props.disabled
      });
    }
  }]);

  return CheckableInput;
}(_react.PureComponent);

exports.default = CheckableInput;


CheckableInput.propTypes = {
  type: _propTypes2.default.oneOf(['radio', 'checkbox']).isRequired,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

CheckableInput.defaultProps = {
  disabled: false,
  checked: false
};
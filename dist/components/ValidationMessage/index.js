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

var VARIANTS = ['error', 'success'];

var ValidationMessage = function (_PureComponent) {
  _inherits(ValidationMessage, _PureComponent);

  function ValidationMessage() {
    _classCallCheck(this, ValidationMessage);

    return _possibleConstructorReturn(this, (ValidationMessage.__proto__ || Object.getPrototypeOf(ValidationMessage)).apply(this, arguments));
  }

  _createClass(ValidationMessage, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { className: this.className },
        _react2.default.createElement('div', { className: 'us-validation__icon' }),
        _react2.default.createElement(
          'div',
          { className: 'us-validation__message' },
          children
        )
      );
    }
  }, {
    key: 'className',
    get: function get() {
      var variant = this.props.variant;

      return (0, _classnames2.default)(_defineProperty({
        'us-validation': true
      }, 'us-validation--' + variant, variant));
    }
  }]);

  return ValidationMessage;
}(_react.PureComponent);

exports.default = ValidationMessage;


ValidationMessage.propTypes = {
  variant: _propTypes2.default.oneOf(VARIANTS),
  children: _propTypes2.default.node.isRequired
};

ValidationMessage.defaultProps = {
  variant: 'error'
};
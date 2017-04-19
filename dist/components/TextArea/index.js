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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_PureComponent) {
  _inherits(TextArea, _PureComponent);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'onChange',
    value: function onChange(e) {
      this.props.onChange(e, e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('textarea', {
        name: this.props.name,
        className: this.className,
        disabled: this.props.disabled,
        value: this.props.value,
        onChange: this.props.onChange });
    }
  }, {
    key: 'className',
    get: function get() {
      var _props = this.props,
          blocked = _props.blocked,
          disabled = _props.disabled;

      return (0, _classnames2.default)({
        'us-form-textarea': true,
        'us-form-textarea--blocked': blocked,
        'us-form-textarea--disabled': disabled
      });
    }
  }]);

  return TextArea;
}(_react.PureComponent);

exports.default = TextArea;


TextArea.propTypes = {
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  blocked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};

TextArea.defaultProps = {
  blocked: false,
  disabled: false,
  onChange: function onChange() {}
};
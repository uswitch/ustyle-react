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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          checked = _props.checked,
          children = _props.children,
          name = _props.name,
          other = _objectWithoutProperties(_props, ['onChange', 'checked', 'children', 'name']);

      var newProps = (0, _lodash2.default)(this.props, 'type', 'children', 'className', 'onChange');

      return _react2.default.createElement(
        'label',
        null,
        _react2.default.createElement('input', _extends({}, newProps, { checked: checked, className: this.className, name: name, type: 'radio', onChange: onChange })),
        children
      );
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)({
        "us-form-input": true,
        "us-form-input--disabled": this.props.disabled
      });
    }
  }]);

  return Radio;
}(_react.PureComponent);

exports.default = Radio;


Radio.propTypes = {
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};
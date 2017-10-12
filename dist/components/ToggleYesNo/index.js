'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toggle = require('../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleYesNo = function (_PureComponent) {
  _inherits(ToggleYesNo, _PureComponent);

  function ToggleYesNo() {
    _classCallCheck(this, ToggleYesNo);

    return _possibleConstructorReturn(this, (ToggleYesNo.__proto__ || Object.getPrototypeOf(ToggleYesNo)).apply(this, arguments));
  }

  _createClass(ToggleYesNo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          name = _props.name,
          value = _props.value;

      var items = [{ text: 'Yes', value: true }, { text: 'No', value: false }];

      return _react2.default.createElement(_Toggle2.default, {
        name: name,
        value: value,
        items: items,
        onChange: onChange });
    }
  }]);

  return ToggleYesNo;
}(_react.PureComponent);

exports.default = ToggleYesNo;


ToggleYesNo.propTypes = {
  value: _propTypes2.default.any,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};
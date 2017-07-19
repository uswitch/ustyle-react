'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _index = require('../Field/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OPTIONS = ['email', 'telephone', 'pager', 'carrier pigeon'];

var CheckboxExample = function (_PureComponent) {
  _inherits(CheckboxExample, _PureComponent);

  function CheckboxExample(props) {
    _classCallCheck(this, CheckboxExample);

    var _this = _possibleConstructorReturn(this, (CheckboxExample.__proto__ || Object.getPrototypeOf(CheckboxExample)).call(this, props));

    _this.state = { email: true };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CheckboxExample, [{
    key: 'handleChange',
    value: function handleChange(e, value) {
      this.setState(function (state) {
        var newState = (0, _object2.default)({}, state, _defineProperty({}, value, !state[value]));
        console.log(newState);
        return newState;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _index2.default,
        { variant: 'blocked' },
        _react2.default.createElement(
          'label',
          null,
          'How would you like to be contacted?'
        ),
        _react2.default.createElement(
          'div',
          { className: 'us-field-toggle' },
          OPTIONS.map(function (option, i) {
            return _react2.default.createElement(_index4.default, {
              key: option,
              name: 'radio',
              disabled: i === 2,
              value: option,
              checked: _this2.state[option] || false,
              onChange: _this2.handleChange, children: option });
          })
        )
      );
    }
  }]);

  return CheckboxExample;
}(_react.PureComponent);

exports.default = CheckboxExample;
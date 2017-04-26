'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var items = [{
  disabled: false,
  text: 'Yes, I like cheese',
  value: 1
}, {
  disabled: false,
  text: 'No, I hate cheese',
  value: false
}, {
  disabled: true,
  text: 'Cheese is not real',
  value: 'fake'
}];

var ToggleExample = function (_PureComponent) {
  _inherits(ToggleExample, _PureComponent);

  function ToggleExample(props) {
    _classCallCheck(this, ToggleExample);

    var _this = _possibleConstructorReturn(this, (ToggleExample.__proto__ || Object.getPrototypeOf(ToggleExample)).call(this, props));

    _this.state = { myValue: 'no' };
    return _this;
  }

  _createClass(ToggleExample, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e, item) {
      console.log(item);
      this.setState({ myValue: item.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'pre',
          null,
          this.jsonState
        ),
        _react2.default.createElement(_index2.default, {
          name: 'myValue',
          value: this.state.myValue,
          items: items,
          onChange: this.onChangeHandler.bind(this) })
      );
    }
  }, {
    key: 'jsonState',
    get: function get() {
      return JSON.stringify(this.state);
    }
  }]);

  return ToggleExample;
}(_react.PureComponent);

exports.default = ToggleExample;
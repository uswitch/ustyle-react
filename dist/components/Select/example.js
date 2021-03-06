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
  text: 'Choose your cheese feelings',
  value: '',
  disabled: true
}, {
  text: 'Yes, I like cheese',
  value: 'yes'
}, {
  text: 'No, I hate cheese',
  value: 'no'
}, {
  text: 'Cheese is not real',
  value: 'fake'
}];

var SelectExample = function (_PureComponent) {
  _inherits(SelectExample, _PureComponent);

  function SelectExample(props) {
    _classCallCheck(this, SelectExample);

    var _this = _possibleConstructorReturn(this, (SelectExample.__proto__ || Object.getPrototypeOf(SelectExample)).call(this, props));

    _this.state = { myValue: '' };
    return _this;
  }

  _createClass(SelectExample, [{
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
          onChange: this.onChangeHandler.bind(this) }),
        _react2.default.createElement(_index2.default, {
          name: 'myValue',
          value: this.state.myValue,
          items: items,
          disabled: true }),
        _react2.default.createElement(_index2.default, {
          blocked: true,
          variant: this.state.myValue === 'yes' ? 'success' : 'error',
          size: 2,
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

  return SelectExample;
}(_react.PureComponent);

exports.default = SelectExample;
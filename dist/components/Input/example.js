'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputExample = function (_PureComponent) {
  _inherits(InputExample, _PureComponent);

  function InputExample(props) {
    _classCallCheck(this, InputExample);

    var _this = _possibleConstructorReturn(this, (InputExample.__proto__ || Object.getPrototypeOf(InputExample)).call(this, props));

    _this.state = { value: '' };
    return _this;
  }

  _createClass(InputExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ value: 'example' });
    }
  }, {
    key: 'updateValue',
    value: function updateValue(value) {
      var _this2 = this;

      var variant = void 0;
      if (value.length === 0) variant = null;else variant = (value || '').match('@') ? 'success' : 'error';
      console.log(value, variant);
      this.setState(function (state) {
        return Object.assign({}, state, { value: value, variant: variant });
      }, function () {
        console.log('state', _this2.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_index2.default, _extends({}, this.state, {
        type: 'email',
        size: 'large',
        deferredProps: { id: 'email' },
        onChange: function onChange(e, value) {
          return _this3.updateValue(value);
        },
        placeholder: 'you@example.com' }));
    }
  }]);

  return InputExample;
}(_react.PureComponent);

exports.default = InputExample;
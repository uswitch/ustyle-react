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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Toggle = require('../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OVERLAY_POSITIONS = ['left', 'modal', 'right'];
var TOGGLE_ITEMS = OVERLAY_POSITIONS.map(function (v) {
  return { text: v, value: v };
});

var OverlayExample = function (_Component) {
  _inherits(OverlayExample, _Component);

  function OverlayExample(props) {
    _classCallCheck(this, OverlayExample);

    var _this = _possibleConstructorReturn(this, (OverlayExample.__proto__ || Object.getPrototypeOf(OverlayExample)).call(this, props));

    _this.state = { isOpen: false, variant: 'left' };
    return _this;
  }

  _createClass(OverlayExample, [{
    key: 'openOverlay',
    value: function openOverlay() {
      this.setState({
        isOpen: true,
        children: _react2.default.createElement(
          'p',
          null,
          'The model is open: ',
          _react2.default.createElement(
            'b',
            null,
            this.state.variant
          )
        )
      });
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({ isLoading: !_this2.state.isLoading });
      }, 1000);
    }
  }, {
    key: 'setVariant',
    value: function setVariant(variant) {
      console.log(variant);
      this.setState(Object.assign({}, this.state, { variant: variant }));
    }
  }, {
    key: 'onToggleClick',
    value: function onToggleClick(e, item) {
      this.setVariant(item.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'overlay_variant' },
          'Overlay variant:'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Toggle2.default, {
          name: 'overlay_variant',
          items: TOGGLE_ITEMS,
          value: this.state.variant,
          onChange: this.onToggleClick.bind(this) }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return _this3.openOverlay();
            } },
          'Open Modal'
        ),
        _react2.default.createElement(_index2.default, _extends({}, this.state, {
          onClose: this.closeOverlay.bind(this),
          title: 'Overlay Example' }))
      );
    }
  }, {
    key: 'toggleButtons',
    get: function get() {
      return _react2.default.createElement(_Toggle2.default, {
        items: TOGGLE_ITEMS,
        value: this.state.variant,
        onChange: this.onToggleClick.bind(this) });
    }
  }]);

  return OverlayExample;
}(_react.Component);

exports.default = OverlayExample;
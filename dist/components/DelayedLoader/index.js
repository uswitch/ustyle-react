'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoaderContainer = require('../LoaderContainer');

var _LoaderContainer2 = _interopRequireDefault(_LoaderContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DelayedLoader = function (_React$Component) {
  _inherits(DelayedLoader, _React$Component);

  function DelayedLoader(props) {
    _classCallCheck(this, DelayedLoader);

    var _this = _possibleConstructorReturn(this, (DelayedLoader.__proto__ || Object.getPrototypeOf(DelayedLoader)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      var willBeLoading = nextProps.isLoading;
      var _this$state = _this.state,
          timedOut = _this$state.timedOut,
          timeoutID = _this$state.timeoutID;

      var timeoutHandler = function timeoutHandler() {
        return _this.setState({ timedOut: true, isLoading: false, timeoutID: null });
      };

      if (!willBeLoading && timedOut) {
        return _this.setState({
          isLoading: false
        });
      }

      var newState = {
        isLoading: true,
        timedOut: false
      };

      if (!timeoutID) {
        newState = _extends({}, newState, {
          timeoutID: setTimeout(timeoutHandler, _this.props.timeout)
        });

        _this.setState(newState);
      }
    };

    _this.componentWillUnmount = function () {
      clearTimeout(_this.state.timeoutID);
    };

    _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          replaceChildren = _this$props.replaceChildren;
      var isLoading = _this.state.isLoading;


      return _react2.default.createElement(
        'div',
        { className: isLoading ? _this.props.className : '' },
        _react2.default.createElement(
          _LoaderContainer2.default,
          { isLoading: isLoading, text: _this.props.text },
          replaceChildren && isLoading ? null : children
        )
      );
    };

    _this.state = {
      isLoading: false,
      timedOut: false,
      timeoutID: null
    };
    return _this;
  }

  return DelayedLoader;
}(_react2.default.Component);

DelayedLoader.defaultProps = {
  timeout: 400,
  replaceChildren: false
};

exports.default = DelayedLoader;
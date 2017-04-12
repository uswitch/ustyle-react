'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoaderContainer = function (_PureComponent) {
  _inherits(LoaderContainer, _PureComponent);

  function LoaderContainer() {
    _classCallCheck(this, LoaderContainer);

    return _possibleConstructorReturn(this, (LoaderContainer.__proto__ || Object.getPrototypeOf(LoaderContainer)).apply(this, arguments));
  }

  _createClass(LoaderContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          text = _props.text,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { className: 'us-loader__container' },
        isLoading ? _react2.default.createElement(_Loader2.default, { text: text }) : null,
        children
      );
    }
  }]);

  return LoaderContainer;
}(_react.PureComponent);

exports.default = LoaderContainer;


LoaderContainer.propTypes = {
  isLoading: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  children: _propTypes2.default.node
};

LoaderContainer.defaultValues = {
  isLoading: true
};
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLORS = ['blue', 'orange', 'purple', 'yellow', 'typecyan', 'green', 'navy', 'cyan', 'typegrey', 'red'];

var USP = function (_PureComponent) {
  _inherits(USP, _PureComponent);

  function USP() {
    _classCallCheck(this, USP);

    return _possibleConstructorReturn(this, (USP.__proto__ || Object.getPrototypeOf(USP)).apply(this, arguments));
  }

  _createClass(USP, [{
    key: 'render',
    value: function render() {
      return this.props.annotation ? this.annotatedUSP : this.basicUSP;
    }
  }, {
    key: 'className',
    get: function get() {
      var color = this.props.color;

      return (0, _classnames2.default)(_defineProperty({
        'us-usp': true
      }, 'us-usp--' + color, color));
    }
  }, {
    key: 'basicUSP',
    get: function get() {
      var text = this.props.text;

      return _react2.default.createElement(
        'div',
        { className: this.className },
        text
      );
    }
  }, {
    key: 'annotatedUSP',
    get: function get() {
      var _props = this.props,
          text = _props.text,
          annotation = _props.annotation;

      return _react2.default.createElement(
        'div',
        { className: 'us-usp us-usp--annotated' },
        _react2.default.createElement(
          'div',
          { className: this.className },
          text
        ),
        _react2.default.createElement(
          'span',
          null,
          annotation
        )
      );
    }
  }]);

  return USP;
}(_react.PureComponent);

exports.default = USP;


USP.propTypes = {
  text: _propTypes2.default.node.isRequired,
  annotation: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(COLORS)
};
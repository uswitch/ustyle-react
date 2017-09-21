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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('../../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POSITIONS = ['left', 'right'];

var InputGroup = function (_PureComponent) {
  _inherits(InputGroup, _PureComponent);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, this.cleanProps, { className: this.className }),
        this.leftBox,
        this.props.children,
        this.rightBox
      );
    }
  }, {
    key: 'boxContents',
    get: function get() {
      if (this.props.icon) {
        return _react2.default.createElement(_Icon2.default, { name: this.props.icon, color: 'inputgrey', size: 'small' });
      } else {
        return this.props.text;
      }
    }
  }, {
    key: 'box',
    get: function get() {
      return _react2.default.createElement(
        'span',
        { className: 'us-input-group__box' },
        this.boxContents
      );
    }
  }, {
    key: 'leftBox',
    get: function get() {
      if (this.props.position === 'left') {
        return this.box;
      }
    }
  }, {
    key: 'rightBox',
    get: function get() {
      if (this.props.position === 'right') {
        return this.box;
      }
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)(this.props.className, {
        'us-input-group': true,
        'us-input-group--disabled': this.props.disabled,
        'us-input-group--blocked': this.props.blocked
      });
    }
  }, {
    key: 'cleanProps',
    get: function get() {
      return (0, _omit2.default)(this.props, 'text', 'icon', 'position', 'children', 'className');
    }
  }]);

  return InputGroup;
}(_react.PureComponent);

exports.default = InputGroup;


InputGroup.propTypes = {
  text: _propTypes2.default.node,
  icon: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(POSITIONS),
  children: _propTypes2.default.element
};

InputGroup.defaultProps = {
  position: 'left'
};
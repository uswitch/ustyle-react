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

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      active: false
    };

    _this.toggle = _this.toggle.bind(_this);
    _this.noteRef = _this.noteRef.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.active && this.state.active && this.props.scrollToTooltip) {
        this.note.scrollIntoView(false); /* will scroll to the bottom of the page */
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.setState(function (prevState, props) {
        return { active: !prevState.active };
      });
    }
  }, {
    key: 'noteRef',
    value: function noteRef(ref) {
      this.note = ref;
      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          position = _props.position,
          small = _props.small,
          trigger = _props.trigger;
      var active = this.state.active;

      var parentClassName = (0, _classnames2.default)((_cx = {
        'us-tooltip': true
      }, _defineProperty(_cx, 'us-tooltip--' + position, !!position), _defineProperty(_cx, 'us-tooltip--active', active), _defineProperty(_cx, 'us-tooltip--small', small), _cx), className);

      return _react2.default.createElement(
        'div',
        { className: parentClassName },
        children,
        _react2.default.createElement(
          'div',
          { className: 'us-tooltip__wrapper' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggle },
            trigger
          ),
          _react2.default.createElement(
            'div',
            { ref: this.noteRef, className: 'us-tooltip__note' },
            _react2.default.createElement('div', { className: 'us-tooltip__arrow' }),
            this.props.tooltipContent
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

exports.default = Tooltip;


Tooltip.propTypes = {
  trigger: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node.isRequired,
  position: _propTypes2.default.oneOf(['left', 'right', 'bottom', 'top']),
  small: _propTypes2.default.bool,
  scrollToTooltip: _propTypes2.default.bool
};

Tooltip.defaultProps = {
  small: false,
  scrollToTooltip: false
};
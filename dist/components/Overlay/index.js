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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _classHelpers = require('../../utils/class-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VARIANTS = ['left', 'right', 'modal'];

var Overlay = function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props, context));

    _this.state = {
      visibility: 'closed'
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: 'disableScroll',
    value: function disableScroll() {
      (0, _classHelpers.addClass)(document.querySelector('html'), 'noscroll');
      (0, _classHelpers.addClass)(document.body, 'noscroll');
    }
  }, {
    key: 'enableScroll',
    value: function enableScroll() {
      (0, _classHelpers.removeClass)(document.querySelector('html'), 'noscroll');
      (0, _classHelpers.removeClass)(document.body, 'noscroll');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen === this.props.isOpen) return;
      return nextProps.isOpen ? this.openOverlay() : this.closeOverlay();
    }
  }, {
    key: 'openOverlay',
    value: function openOverlay() {
      this.setState({
        visibility: 'visible',
        scrollTop: document.body.scrollTop
      });
      this.disableScroll();
    }
  }, {
    key: 'finishClose',
    value: function finishClose(e) {
      var _this2 = this;

      this.setState(function (state) {
        return {
          visibility: 'closed'
        };
      });
      // using uStyle's overlay, which means we need some class dancing here
      if ((0, _classHelpers.hasClass)(document.body, 'noscroll')) {
        this.enableScroll();
        setTimeout(function () {
          document.body.scrollTop = _this2.state.scrollTop;
        }, 100);
      }
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay(e) {
      this.setState({
        visibility: 'closing'
      });
      setTimeout(this.finishClose.bind(this, e), 500);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: this.overlayParentClassName },
          _react2.default.createElement(
            'div',
            { className: this.overlayClassName },
            _react2.default.createElement(
              'div',
              { className: 'us-overlay__container' },
              _react2.default.createElement(
                'div',
                { className: 'us-overlay__header' },
                _react2.default.createElement(
                  'div',
                  { className: 'us-overlay__title' },
                  this.props.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'us-overlay__close' },
                  _react2.default.createElement(_Button2.default, { size: 'small',
                    variant: 'reversed',
                    onClick: this.props.onClose.bind(this),
                    children: 'Close' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'us-overlay__body' },
                this.props.children
              )
            )
          ),
          this.backdropHTML
        )
      );
    }
  }, {
    key: 'backdropHTML',
    get: function get() {
      var visibility = this.state.visibility;

      if (!visibility === 'visible') return null;
      return _react2.default.createElement('div', { className: (0, _classnames2.default)({
          'us-backdrop': true,
          'us-backdrop--animated': true,
          'us-backdrop--active': visibility === 'visible',
          'us-backdrop--visible': ['visible', 'closing'].indexOf(visibility) > -1
        }), onClick: this.props.onClose.bind(this) });
    }
  }, {
    key: 'overlayParentClassName',
    get: function get() {
      var visibility = this.state.visibility;

      if (!visibility === 'visible') return null;
      return (0, _classnames2.default)({
        'us-overlay-parent': true,
        'us-overlay-parent--active': visibility === 'visible',
        'us-overlay-parent--visible': ['visible', 'closing'].indexOf(visibility) > -1
      });
    }
  }, {
    key: 'overlayClassName',
    get: function get() {
      var variant = this.props.variant;

      return (0, _classnames2.default)({
        'us-overlay': true,
        'us-overlay--right': variant === 'right',
        'us-overlay--modal': variant === 'modal'
      });
    }
  }]);

  return Overlay;
}(_react.PureComponent);

exports.default = Overlay;


Overlay.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired,
  variant: _propTypes2.default.oneOf(VARIANTS)
};

Overlay.defaultProps = {
  isOpen: false,
  variant: 'modal'
};
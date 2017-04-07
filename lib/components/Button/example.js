'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        null,
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', variant: 'primary' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { variant: 'primary' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', variant: 'action' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { variant: 'action' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', variant: 'hero' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { variant: 'hero' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { background: '#1c1f4e' } },
      _react2.default.createElement(
        _index2.default,
        { href: '#', variant: 'reversed' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { variant: 'reversed' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', size: 'large' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { size: 'large' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', size: 'small' },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { size: 'small' },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', blocked: true },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { blocked: true },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', link: true },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { link: true },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', stronger: true },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { stronger: true },
        'Button Element'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { href: '#', disabled: true },
        'Link Button'
      ),
      _react2.default.createElement(
        _index2.default,
        { disabled: true },
        'Button Element'
      )
    )
  );
};
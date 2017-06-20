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

var TabsExample = function (_PureComponent) {
  _inherits(TabsExample, _PureComponent);

  function TabsExample(props) {
    _classCallCheck(this, TabsExample);

    var _this = _possibleConstructorReturn(this, (TabsExample.__proto__ || Object.getPrototypeOf(TabsExample)).call(this, props));

    _this.state = {
      items: [{
        id: 'tab1',
        title: 'Tab 1',
        body: _react2.default.createElement(
          'p',
          null,
          'Fatback capicola leberkas pork loin pork jowl. Meatloaf shoulder pancetta, salami prosciutto ribeye andouille chuck landjaeger short loin filet mignon sirloin. Pork chop tri-tip ham pork hamburger frankfurter leberkas short ribs biltong. Prosciutto ham hock rump, andouille tongue flank sirloin tri-tip ball tip frankfurter ham drumstick meatloaf pork loin.'
        )
      }, {
        id: 'tab2',
        title: 'Tab 2',
        body: _react2.default.createElement(
          'p',
          null,
          'Kielbasa tenderloin spare ribs, andouille doner brisket chuck drumstick bresaola short loin pork t-bone ground round jowl. Ball tip pork loin doner tongue filet mignon biltong hamburger leberkas. Filet mignon kielbasa kevin short ribs, drumstick chuck shankle spare ribs tri-tip.'
        ),
        active: true
      }, {
        id: 'tab3',
        title: 'Tab 3',
        body: _react2.default.createElement(
          'p',
          null,
          'Pig pastrami pork loin kielbasa, filet mignon meatloaf short ribs tenderloin. Pork loin leberkas kevin fatback porchetta bresaola. Cow rump shoulder pastrami. Andouille pork belly t-bone short ribs brisket. Bresaola pork belly tail salami capicola meatball. Pork belly beef ham landjaeger.'
        )
      }]
    };
    return _this;
  }

  _createClass(TabsExample, [{
    key: 'onClickHandler',
    value: function onClickHandler(e, clickedItem) {
      var items = this.state.items.map(function (item) {
        return assign({}, item, {
          active: clickedItem.active ? false : clickedItem.id === item.id
        });
      });
      console.log(clickedItem);
      this.setState({ items: items });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, { items: this.state.items, onClick: this.onClickHandler.bind(this) });
    }
  }]);

  return TabsExample;
}(_react.PureComponent);

exports.default = TabsExample;
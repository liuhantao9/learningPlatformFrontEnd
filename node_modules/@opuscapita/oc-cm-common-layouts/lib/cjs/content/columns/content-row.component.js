'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var Row = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentRow = function (_React$PureComponent) {
  _inherits(ContentRow, _React$PureComponent);

  function ContentRow() {
    _classCallCheck(this, ContentRow);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentRow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return _react2.default.createElement(
      Row,
      {
        stretch: stretch,
        className: _constants.classPrefix + '_row ' + className,
        ref: function ref(element) {
          _this2.colContainer = element;
        },
        id: id
      },
      _react2.default.Children.map(children, function (child, i) {
        // eslint-disable-line consistent-return
        // Child may be null
        if (child) {
          // If it's a regular DOM node
          if (typeof child.type === 'string') return child;

          // If it's a React component (in most cases Content.Column)
          return _react2.default.cloneElement(child, {
            parent: _this2.colContainer,
            isLastItem: i === children.length - 1 && children.length !== 1,
            columnCount: children.length
          });
        }
      })
    );
  };

  return ContentRow;
}(_react2.default.PureComponent);

ContentRow.defaultProps = {
  children: undefined,
  stretch: false,
  id: '',
  className: ''
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJoYWxmR3V0dGVyV2lkdGgiLCJDb250ZW50Um93IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJzdHJldGNoIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsTUFBTUMsMkJBQU9DLEdBQWIsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFdBQXJCO0FBQUEsQ0FETixFQUMwQztBQUFBLFNBQVNGLE1BQU1DLEtBQU4sQ0FBWUUsZUFBckI7QUFBQSxDQUQxQyxDQUFOOztJQU9NQyxVOzs7Ozs7Ozs7dUJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFNSCxLQUFLTCxLQU5GO0FBQUEsUUFFTE0sUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsT0FISyxVQUdMQSxPQUhLO0FBQUEsUUFJTEMsRUFKSyxVQUlMQSxFQUpLO0FBQUEsUUFLTEMsU0FMSyxVQUtMQSxTQUxLOztBQU9QLFdBQ0U7QUFBQyxTQUFEO0FBQUE7QUFDRSxpQkFBU0YsT0FEWDtBQUVFLG1CQUFjRyxzQkFBZCxhQUFpQ0QsU0FGbkM7QUFHRSxhQUFLLGFBQUNFLE9BQUQsRUFBYTtBQUNoQixpQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRCxTQUxIO0FBTUUsWUFBSUg7QUFOTjtBQVFHSyxzQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CVCxRQUFuQixFQUE2QixVQUFDVSxLQUFELEVBQVFDLENBQVIsRUFBYztBQUFFO0FBQzVDO0FBQ0EsWUFBSUQsS0FBSixFQUFXO0FBQ1Q7QUFDQSxjQUFJLE9BQU9BLE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxpQkFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxvQkFBUSxPQUFLUixZQURrQjtBQUUvQlMsd0JBQVlKLE1BQU1YLFNBQVNnQixNQUFULEdBQWtCLENBQXhCLElBQTZCaEIsU0FBU2dCLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHlCQUFhakIsU0FBU2dCO0FBSFMsV0FBMUIsQ0FBUDtBQUtEO0FBQ0YsT0FiQTtBQVJILEtBREY7QUF5QkQsRzs7O0VBakNzQlQsZ0JBQU1XLGE7O0FBMkMvQnBCLFdBQVdxQixZQUFYLEdBQTBCO0FBQ3hCbkIsWUFBVW9CLFNBRGM7QUFFeEJuQixXQUFTLEtBRmU7QUFHeEJDLE1BQUksRUFIb0I7QUFJeEJDLGFBQVc7QUFKYSxDQUExQjs7a0JBT2VMLFUiLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59fWA7XG5cbmNsYXNzIENvbnRlbnRSb3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc3RyZXRjaCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3JvdyAke2NsYXNzTmFtZX1gfVxuICAgICAgICByZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgICAgICAgLy8gQ2hpbGQgbWF5IGJlIG51bGxcbiAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgc3RyZXRjaDogZmFsc2UsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=
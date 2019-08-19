'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _contentCardHeader = require('./content-card-header.component');

var _contentCardHeader2 = _interopRequireDefault(_contentCardHeader);

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Card = (0, _styledComponents2.default)(Primitive.Block)(_templateObject, function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
});

var ContentCard = function (_React$PureComponent) {
  _inherits(ContentCard, _React$PureComponent);

  function ContentCard(props) {
    _classCallCheck(this, ContentCard);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onExpandClick = function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          id = _this$props.id;

      _this.setState({ isExpanded: !_this.state.isExpanded }, function () {
        if (onExpand) onExpand(id, _this.state.isExpanded);
      });
    };

    _this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable
    };
    return _this;
  }

  ContentCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({ isExpanded: nextProps.isExpanded });
    }
  };

  ContentCard.prototype.render = function render() {
    var cardClassPrefix = _constants.classPrefix + '_card';
    var _props = this.props,
        children = _props.children,
        isLastItem = _props.isLastItem,
        title = _props.title,
        height = _props.height,
        icon = _props.icon,
        onIconClick = _props.onIconClick,
        className = _props.className,
        id = _props.id,
        isExpandable = _props.isExpandable,
        loading = _props.loading,
        header = _props.header;


    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return _react2.default.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      header && header,
      title && !header && _react2.default.createElement(_contentCardHeader2.default, {
        title: title,
        icon: icon,
        onIconClick: resolvedOnIconClick,
        isExpanded: this.state.isExpanded,
        isExpandable: isExpandable,
        loading: loading
      }),
      (!isExpandable || this.state.isExpanded) && _react2.default.createElement(
        CardContent,
        { className: cardClassPrefix + '_content' },
        children
      )
    );
  };

  return ContentCard;
}(_react2.default.PureComponent);

ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  onIconClick: null,
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined,
  loading: false,
  header: undefined
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZENsaWNrIiwib25FeHBhbmQiLCJpZCIsInNldFN0YXRlIiwiaXNFeHBhbmRlZCIsInN0YXRlIiwiaXNFeHBhbmRhYmxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7OztBQUhaOzs7QUFLQSxJQUFNQyxPQUFPLGdDQUFPRCxVQUFVRSxLQUFqQixDQUFQLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkQsTUFBTUUsS0FBTixDQUFZQyxXQUE3QztBQUFBLENBRmIsRUFHSTtBQUFBLFNBQVVILE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUhKLEVBS007QUFBQSxTQUFVRCxNQUFNSSxNQUFOLEdBQWVKLE1BQU1JLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FMTixDQUFOOztBQVNBLElBQU1DLGNBQWNDLDJCQUFPQyxHQUFyQixtQkFDb0I7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QkwsWUFBVXFCLFNBVmU7QUFXekJMLFdBQVMsS0FYZ0I7QUFZekJuQixVQUFRd0I7QUFaaUIsQ0FBM0I7O2tCQWVldkIsVyIsImZpbGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChQcmltaXRpdmUuQmxvY2spYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jbGFzcyBDb250ZW50Q2FyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNFeHBhbmRlZDogISFwcm9wcy5pc0V4cGFuZGVkICYmICEhcHJvcHMuaXNFeHBhbmRhYmxlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaXNFeHBhbmRlZCAhPT0gdGhpcy5wcm9wcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogbmV4dFByb3BzLmlzRXhwYW5kZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25FeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uRXhwYW5kLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogIXRoaXMuc3RhdGUuaXNFeHBhbmRlZCB9LCAoKSA9PiB7XG4gICAgICBpZiAob25FeHBhbmQpIG9uRXhwYW5kKGlkLCB0aGlzLnN0YXRlLmlzRXhwYW5kZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIHRpdGxlLCBoZWlnaHQsIGljb24sIG9uSWNvbkNsaWNrLCBjbGFzc05hbWUsIGlkLCBpc0V4cGFuZGFibGUsXG4gICAgICBsb2FkaW5nLCBoZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZXNvbHZlZE9uSWNvbkNsaWNrID0gaXNFeHBhbmRhYmxlID8gdGhpcy5vbkV4cGFuZENsaWNrIDogb25JY29uQ2xpY2s7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICB7dGl0bGUgJiYgIWhlYWRlclxuICAgICAgICAmJiAoXG4gICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgb25JY29uQ2xpY2s9e3Jlc29sdmVkT25JY29uQ2xpY2t9XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfVxuICAgICAgICAgIGlzRXhwYW5kYWJsZT17aXNFeHBhbmRhYmxlfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoIWlzRXhwYW5kYWJsZSB8fCB0aGlzLnN0YXRlLmlzRXhwYW5kZWQpXG4gICAgICAgICYmIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L0NhcmRDb250ZW50Pn1cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRXhwYW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IG51bGwsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlzRXhwYW5kZWQ6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbiAgb25FeHBhbmQ6IHVuZGVmaW5lZCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGhlYWRlcjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmQ7XG4iXX0=
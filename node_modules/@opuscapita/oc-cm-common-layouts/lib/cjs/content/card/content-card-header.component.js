'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _plus = require('react-icons/lib/fa/plus');

var _plus2 = _interopRequireDefault(_plus);

var _minus = require('react-icons/lib/fa/minus');

var _minus2 = _interopRequireDefault(_minus);

var _constants = require('../../constants');

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var CardIcon = (0, _styledComponents2.default)(Primitive.BorderlessButton)(_templateObject, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = (0, _styledComponents2.default)(Primitive.Subtitle)(_templateObject2);

var CardHeader = _styledComponents2.default.header(_templateObject3, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

var ContentCardHeader = function (_React$PureComponent) {
  _inherits(ContentCardHeader, _React$PureComponent);

  function ContentCardHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, ContentCardHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getExpandedIcon = function () {
      return _this.props.isExpanded ? _react2.default.createElement(_minus2.default, null) : _react2.default.createElement(_plus2.default, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ContentCardHeader.prototype.render = function render() {
    var _props = this.props,
        icon = _props.icon,
        title = _props.title,
        onIconClick = _props.onIconClick,
        isExpanded = _props.isExpanded,
        isExpandable = _props.isExpandable,
        loading = _props.loading;

    var cardClassPrefix = _constants.classPrefix + '_card';
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;

    return _react2.default.createElement(
      CardHeader,
      { className: cardClassPrefix + '_header' },
      _react2.default.createElement(
        CardTitle,
        null,
        title
      ),
      loading && _react2.default.createElement(Primitive.Spinner, null),
      resolvedIcon && _react2.default.createElement(
        CardIcon,
        { onClick: onIconClick, disabled: !onIconClick },
        resolvedIcon
      )
    );
  };

  return ContentCardHeader;
}(_react2.default.PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false,
  loading: false
};

exports.default = ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsInByb3BzIiwidGhlbWUiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJzdHlsZWQiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiZ2V0RXhwYW5kZWRJY29uIiwiaXNFeHBhbmRlZCIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsIm9uSWNvbkNsaWNrIiwiaXNFeHBhbmRhYmxlIiwibG9hZGluZyIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwicmVzb2x2ZWRJY29uIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7Ozs7QUFGWjs7O0FBSUEsSUFBTUMsV0FBVyxnQ0FBT0QsVUFBVUUsZ0JBQWpCLENBQVgsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUVLO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRkwsRUFNUTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsTUFBbkIsQ0FBMEJELE1BQW5DO0FBQUEsQ0FOUixFQU9PO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUFuQixDQUEwQkQsTUFBbkM7QUFBQSxDQVBQLENBQU47O0FBV0EsSUFBTUUsWUFBWSxnQ0FBT1IsVUFBVVMsUUFBakIsQ0FBWixrQkFBTjs7QUFJQSxJQUFNQyxhQUFhQywyQkFBT04sTUFBcEIsbUJBQ007QUFBQSxTQUFTRixNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUlhO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZUSxXQUFyQjtBQUFBLENBSmIsQ0FBTjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQjtBQUFBLGFBQVEsTUFBS1gsS0FBTCxDQUFXWSxVQUFYLEdBQXdCLDhCQUFDLGVBQUQsT0FBeEIsR0FBc0MsOEJBQUMsY0FBRCxPQUE5QztBQUFBLEs7Ozs4QkFFbEJDLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLYixLQUhGO0FBQUEsUUFFTGMsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsUUFFUUMsV0FGUixVQUVRQSxXQUZSO0FBQUEsUUFFcUJKLFVBRnJCLFVBRXFCQSxVQUZyQjtBQUFBLFFBRWlDSyxZQUZqQyxVQUVpQ0EsWUFGakM7QUFBQSxRQUUrQ0MsT0FGL0MsVUFFK0NBLE9BRi9DOztBQUlQLFFBQU1DLGtCQUFxQkMsc0JBQXJCLFVBQU47QUFDQSxRQUFNQyxlQUFlSixlQUFlLEtBQUtOLGVBQUwsQ0FBcUJDLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ssZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlKO0FBQVosT0FERjtBQUVHRyxpQkFBVyw4QkFBQyxTQUFELENBQVcsT0FBWCxPQUZkO0FBR0dHLHNCQUNFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLFNBQVNMLFdBQW5CLEVBQWdDLFVBQVUsQ0FBQ0EsV0FBM0M7QUFBeURLO0FBQXpEO0FBSkwsS0FERjtBQVFELEc7OztFQWxCNkJDLGdCQUFNQyxhOztBQThCdENiLGtCQUFrQmMsWUFBbEIsR0FBaUM7QUFDL0JULFNBQU9VLFNBRHdCO0FBRS9CWCxRQUFNVyxTQUZ5QjtBQUcvQlQsZUFBYVMsU0FIa0I7QUFJL0JSLGdCQUFjLEtBSmlCO0FBSy9CQyxXQUFTO0FBTHNCLENBQWpDOztrQkFRZVIsaUIiLCJmaWxlIjoiY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZhUGx1cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvcGx1cyc7XG5pbXBvcnQgRmFNaW51cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbWludXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IHN0eWxlZChQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZChQcmltaXRpdmUuU3VidGl0bGUpYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSwgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtsb2FkaW5nICYmIDxQcmltaXRpdmUuU3Bpbm5lciAvPn1cbiAgICAgICAge3Jlc29sdmVkSWNvblxuICAgICAgICAmJiA8Q2FyZEljb24gb25DbGljaz17b25JY29uQ2xpY2t9IGRpc2FibGVkPXshb25JY29uQ2xpY2t9PntyZXNvbHZlZEljb259PC9DYXJkSWNvbj59XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19
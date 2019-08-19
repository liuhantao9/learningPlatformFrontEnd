var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';

// App imports
import { classPrefix } from '../../constants';
import * as Primitive from '../../primitives';

var CardIcon = styled(Primitive.BorderlessButton)(_templateObject, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = styled(Primitive.Subtitle)(_templateObject2);

var CardHeader = styled.header(_templateObject3, function (props) {
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
      return _this.props.isExpanded ? React.createElement(FaMinus, null) : React.createElement(FaPlus, null);
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

    var cardClassPrefix = classPrefix + '_card';
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;

    return React.createElement(
      CardHeader,
      { className: cardClassPrefix + '_header' },
      React.createElement(
        CardTitle,
        null,
        title
      ),
      loading && React.createElement(Primitive.Spinner, null),
      resolvedIcon && React.createElement(
        CardIcon,
        { onClick: onIconClick, disabled: !onIconClick },
        resolvedIcon
      )
    );
  };

  return ContentCardHeader;
}(React.PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false,
  loading: false
};

export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsImNsYXNzUHJlZml4IiwiUHJpbWl0aXZlIiwiQ2FyZEljb24iLCJCb3JkZXJsZXNzQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsImJ1dHRvbiIsIkNhcmRUaXRsZSIsIlN1YnRpdGxlIiwiQ2FyZEhlYWRlciIsImd1dHRlcldpZHRoIiwiQ29udGVudENhcmRIZWFkZXIiLCJnZXRFeHBhbmRlZEljb24iLCJpc0V4cGFuZGVkIiwicmVuZGVyIiwiaWNvbiIsInRpdGxlIiwib25JY29uQ2xpY2siLCJpc0V4cGFuZGFibGUiLCJsb2FkaW5nIiwiY2FyZENsYXNzUHJlZml4IiwicmVzb2x2ZWRJY29uIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIseUJBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7O0FBRUEsSUFBTUMsV0FBV0wsT0FBT0ksVUFBVUUsZ0JBQWpCLENBQVgsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUVLO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRkwsRUFNUTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsTUFBbkIsQ0FBMEJELE1BQW5DO0FBQUEsQ0FOUixFQU9PO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUFuQixDQUEwQkQsTUFBbkM7QUFBQSxDQVBQLENBQU47O0FBV0EsSUFBTUUsWUFBWVosT0FBT0ksVUFBVVMsUUFBakIsQ0FBWixrQkFBTjs7QUFJQSxJQUFNQyxhQUFhZCxPQUFPUyxNQUFwQixtQkFDTTtBQUFBLFNBQVNGLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUROLEVBSWE7QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlPLFdBQXJCO0FBQUEsQ0FKYixDQUFOOztJQVFNQyxpQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCO0FBQUEsYUFBUSxNQUFLVixLQUFMLENBQVdXLFVBQVgsR0FBd0Isb0JBQUMsT0FBRCxPQUF4QixHQUFzQyxvQkFBQyxNQUFELE9BQTlDO0FBQUEsSzs7OzhCQUVsQkMsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtaLEtBSEY7QUFBQSxRQUVMYSxJQUZLLFVBRUxBLElBRks7QUFBQSxRQUVDQyxLQUZELFVBRUNBLEtBRkQ7QUFBQSxRQUVRQyxXQUZSLFVBRVFBLFdBRlI7QUFBQSxRQUVxQkosVUFGckIsVUFFcUJBLFVBRnJCO0FBQUEsUUFFaUNLLFlBRmpDLFVBRWlDQSxZQUZqQztBQUFBLFFBRStDQyxPQUYvQyxVQUUrQ0EsT0FGL0M7O0FBSVAsUUFBTUMsa0JBQXFCdEIsV0FBckIsVUFBTjtBQUNBLFFBQU11QixlQUFlSCxlQUFlLEtBQUtOLGVBQUwsQ0FBcUJDLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ssZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlKO0FBQVosT0FERjtBQUVHRyxpQkFBVyxvQkFBQyxTQUFELENBQVcsT0FBWCxPQUZkO0FBR0dFLHNCQUNFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLFNBQVNKLFdBQW5CLEVBQWdDLFVBQVUsQ0FBQ0EsV0FBM0M7QUFBeURJO0FBQXpEO0FBSkwsS0FERjtBQVFELEc7OztFQWxCNkI1QixNQUFNNkIsYTs7QUE4QnRDWCxrQkFBa0JZLFlBQWxCLEdBQWlDO0FBQy9CUCxTQUFPUSxTQUR3QjtBQUUvQlQsUUFBTVMsU0FGeUI7QUFHL0JQLGVBQWFPLFNBSGtCO0FBSS9CTixnQkFBYyxLQUppQjtBQUsvQkMsV0FBUztBQUxzQixDQUFqQzs7QUFRQSxlQUFlUixpQkFBZiIsImZpbGUiOiJjb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmFQbHVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9wbHVzJztcbmltcG9ydCBGYU1pbnVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9taW51cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IENhcmRJY29uID0gc3R5bGVkKFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uKWBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZFRpdGxlID0gc3R5bGVkKFByaW1pdGl2ZS5TdWJ0aXRsZSlgXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5cbmNsYXNzIENvbnRlbnRDYXJkSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldEV4cGFuZGVkSWNvbiA9ICgpID0+ICgodGhpcy5wcm9wcy5pc0V4cGFuZGVkID8gPEZhTWludXMgLz4gOiA8RmFQbHVzIC8+KSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGljb24sIHRpdGxlLCBvbkljb25DbGljaywgaXNFeHBhbmRlZCwgaXNFeHBhbmRhYmxlLCBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgICBjb25zdCByZXNvbHZlZEljb24gPSBpc0V4cGFuZGFibGUgPyB0aGlzLmdldEV4cGFuZGVkSWNvbihpc0V4cGFuZGVkKSA6IGljb247XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgICAgICA8Q2FyZFRpdGxlPnt0aXRsZX08L0NhcmRUaXRsZT5cbiAgICAgICAge2xvYWRpbmcgJiYgPFByaW1pdGl2ZS5TcGlubmVyIC8+fVxuICAgICAgICB7cmVzb2x2ZWRJY29uXG4gICAgICAgICYmIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudENhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmRIZWFkZXI7XG4iXX0=
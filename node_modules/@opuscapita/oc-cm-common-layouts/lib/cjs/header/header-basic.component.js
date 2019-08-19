'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  flex-basis: ', ';\n  flex-shrink: 1;\n'], ['\n  flex-basis: ', ';\n  flex-shrink: 1;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var HeaderSection = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = (0, _styledComponents2.default)(HeaderSection)(_templateObject2);

var SideSection = (0, _styledComponents2.default)(HeaderSection)(_templateObject3, function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return _react2.default.createElement(
    _.Primitive.Header,
    { id: id, className: _constants.classPrefix + '_header ' + className },
    _react2.default.createElement(
      SideSection,
      { className: _constants.classPrefix + '_header_section left', basis: sideSectionBasis },
      left
    ),
    _react2.default.createElement(
      CenterSection,
      { className: _constants.classPrefix + '_header_section center' },
      center
    ),
    _react2.default.createElement(
      SideSection,
      { className: _constants.classPrefix + '_header_section right', basis: sideSectionBasis },
      right
    )
  );
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px'
};

exports.default = HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiQ2VudGVyU2VjdGlvbiIsIlNpZGVTZWN0aW9uIiwiYmFzaXMiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImNsYXNzTmFtZSIsImlkIiwic2lkZVNlY3Rpb25CYXNpcyIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFJQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxPQUF2QixrQkFHTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUhOLENBQU47O0FBWUEsSUFBTUMsZ0JBQWdCLGdDQUFPUCxhQUFQLENBQWhCLGtCQUFOOztBQUlBLElBQU1RLGNBQWMsZ0NBQU9SLGFBQVAsQ0FBZCxtQkFDVTtBQUFBLFNBQVNHLE1BQU1NLEtBQWY7QUFBQSxDQURWLENBQU47O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLE1BQ1pDLE1BRFksUUFDWkEsTUFEWTtBQUFBLE1BQ0pDLEtBREksUUFDSkEsS0FESTtBQUFBLE1BQ0dDLFNBREgsUUFDR0EsU0FESDtBQUFBLE1BQ2NDLEVBRGQsUUFDY0EsRUFEZDtBQUFBLE1BQ2tCQyxnQkFEbEIsUUFDa0JBLGdCQURsQjtBQUFBLFNBR2xCO0FBQUMsZUFBRCxDQUFXLE1BQVg7QUFBQSxNQUFrQixJQUFJRCxFQUF0QixFQUEwQixXQUFjRSxzQkFBZCxnQkFBb0NILFNBQTlEO0FBQ0U7QUFBQyxpQkFBRDtBQUFBLFFBQWEsV0FBY0csc0JBQWQseUJBQWIsRUFBOEQsT0FBT0QsZ0JBQXJFO0FBQXdGTDtBQUF4RixLQURGO0FBRUU7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY00sc0JBQWQsMkJBQWY7QUFBbUVMO0FBQW5FLEtBRkY7QUFHRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjSyxzQkFBZCwwQkFBYixFQUErRCxPQUFPRCxnQkFBdEU7QUFBeUZIO0FBQXpGO0FBSEYsR0FIa0I7QUFBQSxDQUFwQjs7QUFtQkFILFlBQVlRLFlBQVosR0FBMkI7QUFDekJQLFFBQU1RLFNBRG1CO0FBRXpCUCxVQUFRTyxTQUZpQjtBQUd6Qk4sU0FBT00sU0FIa0I7QUFJekJMLGFBQVcsRUFKYztBQUt6QkMsTUFBSSxFQUxxQjtBQU16QkMsb0JBQWtCO0FBTk8sQ0FBM0I7O2tCQVNlTixXIiwiZmlsZSI6ImhlYWRlci1iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gJy4uJztcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgJi5jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IENlbnRlclNlY3Rpb24gPSBzdHlsZWQoSGVhZGVyU2VjdGlvbilgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVTZWN0aW9uID0gc3R5bGVkKEhlYWRlclNlY3Rpb24pYFxuICBmbGV4LWJhc2lzOiAke3Byb3BzID0+IHByb3BzLmJhc2lzfTtcbiAgZmxleC1zaHJpbms6IDE7XG5gO1xuXG5jb25zdCBIZWFkZXJCYXNpYyA9ICh7XG4gIGxlZnQsIGNlbnRlciwgcmlnaHQsIGNsYXNzTmFtZSwgaWQsIHNpZGVTZWN0aW9uQmFzaXMsXG59KSA9PiAoXG4gIDxQcmltaXRpdmUuSGVhZGVyIGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyICR7Y2xhc3NOYW1lfWB9PlxuICAgIDxTaWRlU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBsZWZ0YH0gYmFzaXM9e3NpZGVTZWN0aW9uQmFzaXN9PntsZWZ0fTwvU2lkZVNlY3Rpb24+XG4gICAgPENlbnRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gY2VudGVyYH0+e2NlbnRlcn08L0NlbnRlclNlY3Rpb24+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIHJpZ2h0YH0gYmFzaXM9e3NpZGVTZWN0aW9uQmFzaXN9PntyaWdodH08L1NpZGVTZWN0aW9uPlxuICA8L1ByaW1pdGl2ZS5IZWFkZXI+XG4pO1xuXG5IZWFkZXJCYXNpYy5wcm9wVHlwZXMgPSB7XG4gIGxlZnQ6IFByb3BUeXBlcy5ub2RlLFxuICBjZW50ZXI6IFByb3BUeXBlcy5ub2RlLFxuICByaWdodDogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpZGVTZWN0aW9uQmFzaXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5cbkhlYWRlckJhc2ljLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWQ6ICcnLFxuICBzaWRlU2VjdGlvbkJhc2lzOiAnMjAwcHgnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFzaWM7XG4iXX0=
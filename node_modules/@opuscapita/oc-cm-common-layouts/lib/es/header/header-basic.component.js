var _templateObject = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  flex-basis: ', ';\n  flex-shrink: 1;\n'], ['\n  flex-basis: ', ';\n  flex-shrink: 1;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '..';

var HeaderSection = styled.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = styled(HeaderSection)(_templateObject2);

var SideSection = styled(HeaderSection)(_templateObject3, function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return React.createElement(
    Primitive.Header,
    { id: id, className: classPrefix + '_header ' + className },
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section left', basis: sideSectionBasis },
      left
    ),
    React.createElement(
      CenterSection,
      { className: classPrefix + '_header_section center' },
      center
    ),
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section right', basis: sideSectionBasis },
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

export default HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsIlByaW1pdGl2ZSIsIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsIkNlbnRlclNlY3Rpb24iLCJTaWRlU2VjdGlvbiIsImJhc2lzIiwiSGVhZGVyQmFzaWMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJjbGFzc05hbWUiLCJpZCIsInNpZGVTZWN0aW9uQmFzaXMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsY0FBNUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLElBQTFCOztBQUVBLElBQU1DLGdCQUFnQkwsT0FBT00sT0FBdkIsa0JBR007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FITixDQUFOOztBQVlBLElBQU1DLGdCQUFnQlgsT0FBT0ssYUFBUCxDQUFoQixrQkFBTjs7QUFJQSxJQUFNTyxjQUFjWixPQUFPSyxhQUFQLENBQWQsbUJBQ1U7QUFBQSxTQUFTRSxNQUFNTSxLQUFmO0FBQUEsQ0FEVixDQUFOOztBQUtBLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxJQURrQixRQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxNQURZLFFBQ1pBLE1BRFk7QUFBQSxNQUNKQyxLQURJLFFBQ0pBLEtBREk7QUFBQSxNQUNHQyxTQURILFFBQ0dBLFNBREg7QUFBQSxNQUNjQyxFQURkLFFBQ2NBLEVBRGQ7QUFBQSxNQUNrQkMsZ0JBRGxCLFFBQ2tCQSxnQkFEbEI7QUFBQSxTQUdsQjtBQUFDLGFBQUQsQ0FBVyxNQUFYO0FBQUEsTUFBa0IsSUFBSUQsRUFBdEIsRUFBMEIsV0FBY2hCLFdBQWQsZ0JBQW9DZSxTQUE5RDtBQUNFO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNmLFdBQWQseUJBQWIsRUFBOEQsT0FBT2lCLGdCQUFyRTtBQUF3Rkw7QUFBeEYsS0FERjtBQUVFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNaLFdBQWQsMkJBQWY7QUFBbUVhO0FBQW5FLEtBRkY7QUFHRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjYixXQUFkLDBCQUFiLEVBQStELE9BQU9pQixnQkFBdEU7QUFBeUZIO0FBQXpGO0FBSEYsR0FIa0I7QUFBQSxDQUFwQjs7QUFtQkFILFlBQVlPLFlBQVosR0FBMkI7QUFDekJOLFFBQU1PLFNBRG1CO0FBRXpCTixVQUFRTSxTQUZpQjtBQUd6QkwsU0FBT0ssU0FIa0I7QUFJekJKLGFBQVcsRUFKYztBQUt6QkMsTUFBSSxFQUxxQjtBQU16QkMsb0JBQWtCO0FBTk8sQ0FBM0I7O0FBU0EsZUFBZU4sV0FBZiIsImZpbGUiOiJoZWFkZXItYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLic7XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5jb25zdCBDZW50ZXJTZWN0aW9uID0gc3R5bGVkKEhlYWRlclNlY3Rpb24pYFxuICBmbGV4LWdyb3c6IDE7XG5gO1xuXG5jb25zdCBTaWRlU2VjdGlvbiA9IHN0eWxlZChIZWFkZXJTZWN0aW9uKWBcbiAgZmxleC1iYXNpczogJHtwcm9wcyA9PiBwcm9wcy5iYXNpc307XG4gIGZsZXgtc2hyaW5rOiAxO1xuYDtcblxuY29uc3QgSGVhZGVyQmFzaWMgPSAoe1xuICBsZWZ0LCBjZW50ZXIsIHJpZ2h0LCBjbGFzc05hbWUsIGlkLCBzaWRlU2VjdGlvbkJhc2lzLFxufSkgPT4gKFxuICA8UHJpbWl0aXZlLkhlYWRlciBpZD17aWR9IGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlciAke2NsYXNzTmFtZX1gfT5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gbGVmdGB9IGJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfT57bGVmdH08L1NpZGVTZWN0aW9uPlxuICAgIDxDZW50ZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGNlbnRlcmB9PntjZW50ZXJ9PC9DZW50ZXJTZWN0aW9uPlxuICAgIDxTaWRlU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiByaWdodGB9IGJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfT57cmlnaHR9PC9TaWRlU2VjdGlvbj5cbiAgPC9QcmltaXRpdmUuSGVhZGVyPlxuKTtcblxuSGVhZGVyQmFzaWMucHJvcFR5cGVzID0ge1xuICBsZWZ0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaWRlU2VjdGlvbkJhc2lzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuXG5IZWFkZXJCYXNpYy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxlZnQ6IHVuZGVmaW5lZCxcbiAgY2VudGVyOiB1bmRlZmluZWQsXG4gIHJpZ2h0OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlkOiAnJyxcbiAgc2lkZVNlY3Rpb25CYXNpczogJzIwMHB4Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckJhc2ljO1xuIl19
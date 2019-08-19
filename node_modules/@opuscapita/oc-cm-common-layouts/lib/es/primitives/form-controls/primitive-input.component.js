var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n'], ['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var Input = styled.input(_templateObject, function (props) {
  return props.theme.formControls.input.height;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.formControls.input.borderColor;
}, function (props) {
  return props.theme.formControls.input.focusBorderColor;
});

export default Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL2Zvcm0tY29udHJvbHMvcHJpbWl0aXZlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiSW5wdXQiLCJpbnB1dCIsInByb3BzIiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJoZWlnaHQiLCJoYWxmR3V0dGVyV2lkdGgiLCJndXR0ZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiZm9jdXNCb3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLElBQU1DLFFBQVFELE9BQU9FLEtBQWYsa0JBRU07QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILEtBQXpCLENBQStCSSxNQUF4QztBQUFBLENBRk4sRUFHTztBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUcsZUFBckI7QUFBQSxDQUhQLEVBRytDO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZSSxXQUFyQjtBQUFBLENBSC9DLEVBSWdCO0FBQUEsU0FBU0wsTUFBTUMsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQk8sV0FBeEM7QUFBQSxDQUpoQixFQVNjO0FBQUEsU0FBU04sTUFBTUMsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQlEsZ0JBQXhDO0FBQUEsQ0FUZCxDQUFOOztBQWVBLGVBQWVULEtBQWYiLCJmaWxlIjoicHJpbWl0aXZlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuaW5wdXQuaGVpZ2h0fTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5ib3JkZXJDb2xvcn07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5mb2N1c0JvcmRlckNvbG9yfTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDI1NCwgMjAyLCAyOSwgMC42KTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=
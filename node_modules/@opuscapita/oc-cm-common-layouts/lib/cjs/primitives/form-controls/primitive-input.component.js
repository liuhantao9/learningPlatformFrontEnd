'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n'], ['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Input = _styledComponents2.default.input(_templateObject, function (props) {
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

exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL2Zvcm0tY29udHJvbHMvcHJpbWl0aXZlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsInByb3BzIiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJoZWlnaHQiLCJoYWxmR3V0dGVyV2lkdGgiLCJndXR0ZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiZm9jdXNCb3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsMkJBQU9DLEtBQWYsa0JBRU07QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILEtBQXpCLENBQStCSSxNQUF4QztBQUFBLENBRk4sRUFHTztBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUcsZUFBckI7QUFBQSxDQUhQLEVBRytDO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZSSxXQUFyQjtBQUFBLENBSC9DLEVBSWdCO0FBQUEsU0FBU0wsTUFBTUMsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQk8sV0FBeEM7QUFBQSxDQUpoQixFQVNjO0FBQUEsU0FBU04sTUFBTUMsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQlEsZ0JBQXhDO0FBQUEsQ0FUZCxDQUFOOztrQkFlZVYsSyIsImZpbGUiOiJwcmltaXRpdmUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHR9O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmJvcmRlckNvbG9yfTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG4gIFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmlucHV0LmZvY3VzQm9yZGVyQ29sb3J9O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU0LCAyMDIsIDI5LCAwLjYpO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==
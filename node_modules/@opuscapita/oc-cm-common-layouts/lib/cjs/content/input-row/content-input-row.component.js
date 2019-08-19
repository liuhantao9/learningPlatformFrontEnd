'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var getErrorStyles = function getErrorStyles(error, theme) {
  return error ? theme.text.error.color : '';
};

var getContainerDirection = function getContainerDirection(props) {
  return props.asColumn ? props.theme.inputColumn.flexDirection : props.theme.inputRow.flexDirection;
};

var getErrorContainerMinHeight = function getErrorContainerMinHeight(props) {
  return props.asColumn ? props.theme.inputColumn.errorContainer.height : props.theme.inputRow.errorContainer.height;
};

var getLabelMaxWidth = function getLabelMaxWidth(props) {
  if (props.asColumn) return props.theme.inputColumn.labelWidth;
  return props.labelWidth !== undefined ? props.labelWidth : props.theme.inputRow.labelWidth;
};

var Container = _styledComponents2.default.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.width;
});

var ErrorContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = _styledComponents2.default.label(_templateObject7, function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

/**
 * Assigns given props directly to input element
 * @param child
 * @param props
 */
var modifyChildren = function modifyChildren(child, props) {
  var required = props.required,
      autoComplete = props.autoComplete;


  var newElementProps = {
    className: '' + (child.props.className || ''),
    required: required,
    autoComplete: autoComplete
  };

  return _react2.default.cloneElement(child, newElementProps);
};

var ContentInputRow = function ContentInputRow(props) {
  var children = props.children,
      error = props.error,
      showError = props.showError,
      label = props.label,
      className = props.className,
      required = props.required,
      id = props.id,
      asColumn = props.asColumn,
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth;


  return _react2.default.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    _react2.default.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
        showError: showError,
        labelWidth: labelWidth
      },
      label && _react2.default.createElement(
        Label,
        { asColumn: asColumn },
        label,
        required && _react2.default.createElement(
          RequiredIndicator,
          { asColumn: asColumn },
          '*'
        )
      )
    ),
    _react2.default.createElement(
      ValueContainer,
      { width: valueWidth, error: error },
      _react2.default.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && _react2.default.createElement(
        ErrorContainer,
        { asColumn: asColumn },
        error && _react2.default.createElement(
          ErrorMessage,
          null,
          error
        )
      )
    )
  );
};

ContentInputRow.defaultProps = {
  label: '',
  required: false,
  children: null,
  error: '',
  showError: true,
  className: '',
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto'
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQW1CRCxRQUFRQyxNQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtB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LFdBQVdpQyxTQUExQyxFQUFxRCxJQUFJSyxFQUF6RDtBQUNFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLGtCQUFVdEMsUUFEWjtBQUVFLGVBQU9OLEtBRlQ7QUFHRSxtQkFBV3NCLFNBSGI7QUFJRSxvQkFBWVI7QUFKZDtBQU1Ha0IsZUFFQztBQUFDLGFBQUQ7QUFBQSxVQUFPLFVBQVUxQixRQUFqQjtBQUNHMEIsYUFESDtBQUVHSSxvQkFBWTtBQUFDLDJCQUFEO0FBQUEsWUFBbUIsVUFBVTlCLFFBQTdCO0FBQUE7QUFBQTtBQUZmO0FBUkosS0FERjtBQWVFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixPQUFPdUMsVUFBdkIsRUFBbUMsT0FBTzdDLEtBQTFDO0FBQ0d3QyxzQkFBTU0sUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QjtBQUFBLGVBQVNULGVBQWVDLEtBQWYsRUFBc0I5QixLQUF0QixDQUFUO0FBQUEsT0FBN0IsQ0FESDtBQUVHaUIsbUJBRUM7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVoQixRQUExQjtBQUNHTixpQkFBUztBQUFDLHNCQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBSko7QUFmRixHQURGO0FBMkJELENBaENEOztBQStDQTBDLGdCQUFnQk0sWUFBaEIsR0FBK0I7QUFDN0JoQixTQUFPLEVBRHNCO0FBRTdCSSxZQUFVLEtBRm1CO0FBRzdCTyxZQUFVLElBSG1CO0FBSTdCM0MsU0FBTyxFQUpzQjtBQUs3QnNCLGFBQVcsSUFMa0I7QUFNN0JpQixhQUFXLEVBTmtCO0FBTzdCakMsWUFBVSxLQVBtQjtBQVE3QlEsY0FBWUMsU0FSaUI7QUFTN0I4QixjQUFZO0FBVGlCLENBQS9COztrQkFZZUgsZSIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IChlcnJvciwgdGhlbWUpID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmZsZXhEaXJlY3Rpb24gOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5mbGV4RGlyZWN0aW9uKTtcblxuY29uc3QgZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQgPSBwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW5cbiAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHQgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsTWF4V2lkdGgocHJvcHMpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5zaG93RXJyb3IgJiYgIXByb3BzLmFzQ29sdW1uID8gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpIDogMCl9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgVmFsdWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICA+IGlucHV0LCA+IC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplIDogcHJvcHMudGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRoIDogMCl9O1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbiwgZXJyb3IsIHNob3dFcnJvciwgbGFiZWwsIGNsYXNzTmFtZSwgcmVxdWlyZWQsIGlkLCBhc0NvbHVtbiwgbGFiZWxXaWR0aCwgdmFsdWVXaWR0aCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICYmIChcbiAgICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgd2lkdGg9e3ZhbHVlV2lkdGh9IGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICB7c2hvd0Vycm9yXG4gICAgICAgICYmIChcbiAgICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgICAgPC9FcnJvckNvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB2YWx1ZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsV2lkdGg6IHVuZGVmaW5lZCxcbiAgdmFsdWVXaWR0aDogJ2F1dG8nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19
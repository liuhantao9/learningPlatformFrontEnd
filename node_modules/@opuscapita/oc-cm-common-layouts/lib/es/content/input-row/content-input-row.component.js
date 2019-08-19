var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = styled.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.width;
});

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = styled.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = styled.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = styled.label(_templateObject7, function (props) {
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

  return React.cloneElement(child, newElementProps);
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


  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
        showError: showError,
        labelWidth: labelWidth
      },
      label && React.createElement(
        Label,
        { asColumn: asColumn },
        label,
        required && React.createElement(
          RequiredIndicator,
          { asColumn: asColumn },
          '*'
        )
      )
    ),
    React.createElement(
      ValueContainer,
      { width: valueWidth, error: error },
      React.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && React.createElement(
        ErrorContainer,
        { asColumn: asColumn },
        error && React.createElement(
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

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FB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N0J0QyxLQUg2QixDQUVtRHNDLFVBRm5EOzs7QUFLakMsU0FDRTtBQUFDLGFBQUQ7QUFBQSxNQUFXLFVBQVVyQyxRQUFyQixFQUErQixXQUFXZ0MsU0FBMUMsRUFBcUQsSUFBSUksRUFBekQ7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSxrQkFBVXBDLFFBRFo7QUFFRSxlQUFPTixLQUZUO0FBR0UsbUJBQVdxQixTQUhiO0FBSUUsb0JBQVlQO0FBSmQ7QUFNR2lCLGVBRUM7QUFBQyxhQUFEO0FBQUEsVUFBTyxVQUFVekIsUUFBakI7QUFDR3lCLGFBREg7QUFFR0ksb0JBQVk7QUFBQywyQkFBRDtBQUFBLFlBQW1CLFVBQVU3QixRQUE3QjtBQUFBO0FBQUE7QUFGZjtBQVJKLEtBREY7QUFlRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT3FDLFVBQXZCLEVBQW1DLE9BQU8zQyxLQUExQztBQUNHSixZQUFNZ0QsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QjtBQUFBLGVBQVNSLGVBQWVDLEtBQWYsRUFBc0I3QixLQUF0QixDQUFUO0FBQUEsT0FBN0IsQ0FESDtBQUVHZ0IsbUJBRUM7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVmLFFBQTFCO0FBQ0dOLGlCQUFTO0FBQUMsc0JBQUQ7QUFBQTtBQUFlQTtBQUFmO0FBRFo7QUFKSjtBQWZGLEdBREY7QUEyQkQsQ0FoQ0Q7O0FBK0NBd0MsZ0JBQWdCTSxZQUFoQixHQUErQjtBQUM3QmYsU0FBTyxFQURzQjtBQUU3QkksWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3QnpDLFNBQU8sRUFKc0I7QUFLN0JxQixhQUFXLElBTGtCO0FBTTdCaUIsYUFBVyxFQU5rQjtBQU83QmhDLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCNEIsY0FBWTtBQVRpQixDQUEvQjs7QUFZQSxlQUFlSCxlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZmxleERpcmVjdGlvbiA6IHByb3BzLnRoZW1lLmlucHV0Um93LmZsZXhEaXJlY3Rpb24pO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IHByb3BzID0+IChwcm9wcy5hc0NvbHVtblxuICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmVycm9yQ29udGFpbmVyLmhlaWdodCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cblxuY29uc3QgZ2V0TGFiZWxNYXhXaWR0aCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuYXNDb2x1bW4pIHJldHVybiBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5sYWJlbFdpZHRoO1xuICByZXR1cm4gcHJvcHMubGFiZWxXaWR0aCAhPT0gdW5kZWZpbmVkID8gcHJvcHMubGFiZWxXaWR0aCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGg7XG59O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLCBsYWJlbFdpZHRoLCB2YWx1ZVdpZHRoLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgPlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciB3aWR0aD17dmFsdWVXaWR0aH0gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3JcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgICA8L0Vycm9yQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHZhbHVlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=
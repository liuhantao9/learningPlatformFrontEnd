var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['label', 'value', 'normalize', 'asColumn', 'id']);

  return React.createElement(
    InputRow,
    _extends({ id: id, asColumn: asColumn, label: label, showError: false }, rest),
    React.createElement(
      'span',
      null,
      normalize ? normalize(value) : value
    )
  );
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};

export default ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiSW5wdXRSb3ciLCJDb250ZW50UmVhZG9ubHlSb3ciLCJsYWJlbCIsInZhbHVlIiwibm9ybWFsaXplIiwiYXNDb2x1bW4iLCJpZCIsInJlc3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsK0JBQXJCOztBQUVBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFDekJDLEtBRHlCLFFBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxLQURrQixRQUNsQkEsS0FEa0I7QUFBQSxNQUNYQyxTQURXLFFBQ1hBLFNBRFc7QUFBQSxNQUNBQyxRQURBLFFBQ0FBLFFBREE7QUFBQSxNQUNVQyxFQURWLFFBQ1VBLEVBRFY7QUFBQSxNQUNpQkMsSUFEakI7O0FBQUEsU0FHekI7QUFBQyxZQUFEO0FBQUEsZUFBVSxJQUFJRCxFQUFkLEVBQWtCLFVBQVVELFFBQTVCLEVBQXNDLE9BQU9ILEtBQTdDLEVBQW9ELFdBQVcsS0FBL0QsSUFBMEVLLElBQTFFO0FBQ0U7QUFBQTtBQUFBO0FBQ0dILGtCQUFZQSxVQUFVRCxLQUFWLENBQVosR0FBK0JBO0FBRGxDO0FBREYsR0FIeUI7QUFBQSxDQUEzQjs7QUFrQkFGLG1CQUFtQk8sWUFBbkIsR0FBa0M7QUFDaENILFlBQVUsS0FEc0I7QUFFaENILFNBQU8sRUFGeUI7QUFHaENDLFNBQU8sSUFIeUI7QUFJaENDLGFBQVc7QUFKcUIsQ0FBbEM7O0FBT0EsZUFBZUgsa0JBQWYiLCJmaWxlIjoiY29udGVudC1yZWFkb25seS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoe1xuICBsYWJlbCwgdmFsdWUsIG5vcm1hbGl6ZSwgYXNDb2x1bW4sIGlkLCAuLi5yZXN0XG59KSA9PiAoXG4gIDxJbnB1dFJvdyBpZD17aWR9IGFzQ29sdW1uPXthc0NvbHVtbn0gbGFiZWw9e2xhYmVsfSBzaG93RXJyb3I9e2ZhbHNlfSB7Li4ucmVzdH0+XG4gICAgPHNwYW4+XG4gICAgICB7bm9ybWFsaXplID8gbm9ybWFsaXplKHZhbHVlKSA6IHZhbHVlfVxuICAgIDwvc3Bhbj5cbiAgPC9JbnB1dFJvdz5cbik7XG5cbkNvbnRlbnRSZWFkb25seVJvdy5wcm9wVHlwZXMgPSB7XG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgbm9ybWFsaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkNvbnRlbnRSZWFkb25seVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogbnVsbCxcbiAgbm9ybWFsaXplOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJlYWRvbmx5Um93O1xuIl19
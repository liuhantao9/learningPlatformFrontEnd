'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contentInputRow = require('./content-input-row.component');

var _contentInputRow2 = _interopRequireDefault(_contentInputRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['label', 'value', 'normalize', 'asColumn', 'id']);

  return _react2.default.createElement(
    _contentInputRow2.default,
    _extends({ id: id, asColumn: asColumn, label: label, showError: false }, rest),
    _react2.default.createElement(
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

exports.default = ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJhc0NvbHVtbiIsImlkIiwicmVzdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFDekJDLEtBRHlCLFFBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxLQURrQixRQUNsQkEsS0FEa0I7QUFBQSxNQUNYQyxTQURXLFFBQ1hBLFNBRFc7QUFBQSxNQUNBQyxRQURBLFFBQ0FBLFFBREE7QUFBQSxNQUNVQyxFQURWLFFBQ1VBLEVBRFY7QUFBQSxNQUNpQkMsSUFEakI7O0FBQUEsU0FHekI7QUFBQyw2QkFBRDtBQUFBLGVBQVUsSUFBSUQsRUFBZCxFQUFrQixVQUFVRCxRQUE1QixFQUFzQyxPQUFPSCxLQUE3QyxFQUFvRCxXQUFXLEtBQS9ELElBQTBFSyxJQUExRTtBQUNFO0FBQUE7QUFBQTtBQUNHSCxrQkFBWUEsVUFBVUQsS0FBVixDQUFaLEdBQStCQTtBQURsQztBQURGLEdBSHlCO0FBQUEsQ0FBM0I7O0FBa0JBRixtQkFBbUJPLFlBQW5CLEdBQWtDO0FBQ2hDSCxZQUFVLEtBRHNCO0FBRWhDSCxTQUFPLEVBRnlCO0FBR2hDQyxTQUFPLElBSHlCO0FBSWhDQyxhQUFXO0FBSnFCLENBQWxDOztrQkFPZUgsa0IiLCJmaWxlIjoiY29udGVudC1yZWFkb25seS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoe1xuICBsYWJlbCwgdmFsdWUsIG5vcm1hbGl6ZSwgYXNDb2x1bW4sIGlkLCAuLi5yZXN0XG59KSA9PiAoXG4gIDxJbnB1dFJvdyBpZD17aWR9IGFzQ29sdW1uPXthc0NvbHVtbn0gbGFiZWw9e2xhYmVsfSBzaG93RXJyb3I9e2ZhbHNlfSB7Li4ucmVzdH0+XG4gICAgPHNwYW4+XG4gICAgICB7bm9ybWFsaXplID8gbm9ybWFsaXplKHZhbHVlKSA6IHZhbHVlfVxuICAgIDwvc3Bhbj5cbiAgPC9JbnB1dFJvdz5cbik7XG5cbkNvbnRlbnRSZWFkb25seVJvdy5wcm9wVHlwZXMgPSB7XG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgbm9ybWFsaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkNvbnRlbnRSZWFkb25seVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogbnVsbCxcbiAgbm9ybWFsaXplOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJlYWRvbmx5Um93O1xuIl19
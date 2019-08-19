'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return props.grow;
}, function (props) {
  return props.theme.column.minWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentColumn = function (_React$PureComponent) {
  _inherits(ContentColumn, _React$PureComponent);

  function ContentColumn() {
    _classCallCheck(this, ContentColumn);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentColumn.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        isLastItem = _props.isLastItem,
        grow = _props.grow,
        id = _props.id,
        className = _props.className;

    return _react2.default.createElement(
      Column,
      {
        grow: grow,
        isLastItem: isLastItem,
        className: _constants.classPrefix + '_column ' + className,
        ref: function ref(elem) {
          _this2.column = elem;
        },
        id: id
      },
      _react2.default.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (e.g. Content.Card)
        return _react2.default.cloneElement(child, {
          parent: _this2.column,
          isLastItem: i === children.length - 1 || children.length === undefined
        });
      })
    );
  };

  return ContentColumn;
}(_react2.default.PureComponent);

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

exports.default = ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsInJlbmRlciIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImlkIiwiY2xhc3NOYW1lIiwiY2xhc3NQcmVmaXgiLCJlbGVtIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBREE7OztBQUdBLElBQU1BLFNBQVNDLDJCQUFPQyxHQUFoQixrQkFDVztBQUFBLFNBQVNDLE1BQU1DLElBQWY7QUFBQSxDQURYLEVBT1c7QUFBQSxTQUFTRCxNQUFNRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFFBQTVCO0FBQUEsQ0FQWCxFQVFXO0FBQUEsU0FBU0osTUFBTUUsS0FBTixDQUFZRyxlQUFyQjtBQUFBLENBUlgsQ0FBTjs7SUFXTUMsYTs7Ozs7Ozs7OzBCQUNKQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBT0gsS0FBS1AsS0FQRjtBQUFBLFFBRUxRLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFFBSUxSLElBSkssVUFJTEEsSUFKSztBQUFBLFFBS0xTLEVBTEssVUFLTEEsRUFMSztBQUFBLFFBTUxDLFNBTkssVUFNTEEsU0FOSzs7QUFRUCxXQUNFO0FBQUMsWUFBRDtBQUFBO0FBQ0UsY0FBTVYsSUFEUjtBQUVFLG9CQUFZUSxVQUZkO0FBR0UsbUJBQWNHLHNCQUFkLGdCQUFvQ0QsU0FIdEM7QUFJRSxhQUFLLGFBQUNFLElBQUQsRUFBVTtBQUNiLGlCQUFLVixNQUFMLEdBQWNVLElBQWQ7QUFDRCxTQU5IO0FBT0UsWUFBSUg7QUFQTjtBQVNHSSxzQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixVQUFDUyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU9ILGdCQUFNTSxZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkksa0JBQVEsT0FBS2xCLE1BRGtCO0FBRS9CTSxzQkFBWVMsTUFBTVYsU0FBU2MsTUFBVCxHQUFrQixDQUF4QixJQUE2QmQsU0FBU2MsTUFBVCxLQUFvQkM7QUFGOUIsU0FBMUIsQ0FBUDtBQUlELE9BVEE7QUFUSCxLQURGO0FBc0JELEc7OztFQS9CeUJULGdCQUFNVSxhOztBQTBDbENsQixjQUFjbUIsWUFBZCxHQUE2QjtBQUMzQmpCLFlBQVVlLFNBRGlCO0FBRTNCZCxjQUFZLEtBRmU7QUFHM0JSLFFBQU0sQ0FIcUI7QUFJM0JTLE1BQUksRUFKdUI7QUFLM0JDLGFBQVc7QUFMZ0IsQ0FBN0I7O2tCQVFlTCxhIiwiZmlsZSI6ImNvbnRlbnQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sdW1uLm1pbldpZHRofTtcbiAgICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmNsYXNzIENvbnRlbnRDb2x1bW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXNMYXN0SXRlbSxcbiAgICAgIGdyb3csXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBncm93PXtncm93fVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9jb2x1bW4gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sdW1uID0gZWxlbTtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGUuZy4gQ29udGVudC5DYXJkKVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIGdyb3c6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIGdyb3c6IDEsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDb2x1bW47XG4iXX0=
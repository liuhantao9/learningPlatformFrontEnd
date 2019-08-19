var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

var Row = styled.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentRow = function (_React$PureComponent) {
  _inherits(ContentRow, _React$PureComponent);

  function ContentRow() {
    _classCallCheck(this, ContentRow);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentRow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return React.createElement(
      Row,
      {
        stretch: stretch,
        className: classPrefix + '_row ' + className,
        ref: function ref(element) {
          _this2.colContainer = element;
        },
        id: id
      },
      React.Children.map(children, function (child, i) {
        // eslint-disable-line consistent-return
        // Child may be null
        if (child) {
          // If it's a regular DOM node
          if (typeof child.type === 'string') return child;

          // If it's a React component (in most cases Content.Column)
          return React.cloneElement(child, {
            parent: _this2.colContainer,
            isLastItem: i === children.length - 1 && children.length !== 1,
            columnCount: children.length
          });
        }
      })
    );
  };

  return ContentRow;
}(React.PureComponent);

ContentRow.defaultProps = {
  children: undefined,
  stretch: false,
  id: '',
  className: ''
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiUm93IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsInJlbmRlciIsImNoaWxkcmVuIiwic3RyZXRjaCIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7O0FBRUEsSUFBTUMsTUFBTUYsT0FBT0csR0FBYixrQkFDTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsV0FBckI7QUFBQSxDQUROLEVBQzBDO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZRSxlQUFyQjtBQUFBLENBRDFDLENBQU47O0lBT01DLFU7Ozs7Ozs7Ozt1QkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU1ILEtBQUtMLEtBTkY7QUFBQSxRQUVMTSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMQyxPQUhLLFVBR0xBLE9BSEs7QUFBQSxRQUlMQyxFQUpLLFVBSUxBLEVBSks7QUFBQSxRQUtMQyxTQUxLLFVBS0xBLFNBTEs7O0FBT1AsV0FDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLGlCQUFTRixPQURYO0FBRUUsbUJBQWNWLFdBQWQsYUFBaUNZLFNBRm5DO0FBR0UsYUFBSyxhQUFDQyxPQUFELEVBQWE7QUFDaEIsaUJBQUtDLFlBQUwsR0FBb0JELE9BQXBCO0FBQ0QsU0FMSDtBQU1FLFlBQUlGO0FBTk47QUFRR2QsWUFBTWtCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlAsUUFBbkIsRUFBNkIsVUFBQ1EsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFBRTtBQUM1QztBQUNBLFlBQUlELEtBQUosRUFBVztBQUNUO0FBQ0EsY0FBSSxPQUFPQSxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsaUJBQU9wQixNQUFNdUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLG9CQUFRLE9BQUtQLFlBRGtCO0FBRS9CUSx3QkFBWUosTUFBTVQsU0FBU2MsTUFBVCxHQUFrQixDQUF4QixJQUE2QmQsU0FBU2MsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMseUJBQWFmLFNBQVNjO0FBSFMsV0FBMUIsQ0FBUDtBQUtEO0FBQ0YsT0FiQTtBQVJILEtBREY7QUF5QkQsRzs7O0VBakNzQjFCLE1BQU00QixhOztBQTJDL0JsQixXQUFXbUIsWUFBWCxHQUEwQjtBQUN4QmpCLFlBQVVrQixTQURjO0FBRXhCakIsV0FBUyxLQUZlO0FBR3hCQyxNQUFJLEVBSG9CO0FBSXhCQyxhQUFXO0FBSmEsQ0FBMUI7O0FBT0EsZUFBZUwsVUFBZiIsImZpbGUiOiJjb250ZW50LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn19YDtcblxuY2xhc3MgQ29udGVudFJvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBzdHJldGNoLFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICAgICAgICAvLyBDaGlsZCBtYXkgYmUgbnVsbFxuICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBzdHJldGNoOiBmYWxzZSxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==
var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
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

    return React.createElement(
      Column,
      {
        grow: grow,
        isLastItem: isLastItem,
        className: classPrefix + '_column ' + className,
        ref: function ref(elem) {
          _this2.column = elem;
        },
        id: id
      },
      React.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (e.g. Content.Card)
        return React.cloneElement(child, {
          parent: _this2.column,
          isLastItem: i === children.length - 1 || children.length === undefined
        });
      })
    );
  };

  return ContentColumn;
}(React.PureComponent);

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

export default ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiQ29sdW1uIiwiZGl2IiwicHJvcHMiLCJncm93IiwidGhlbWUiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJpZCIsImNsYXNzTmFtZSIsImVsZW0iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCOztBQUVBLElBQU1DLFNBQVNGLE9BQU9HLEdBQWhCLGtCQUNXO0FBQUEsU0FBU0MsTUFBTUMsSUFBZjtBQUFBLENBRFgsRUFPVztBQUFBLFNBQVNELE1BQU1FLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsUUFBNUI7QUFBQSxDQVBYLEVBUVc7QUFBQSxTQUFTSixNQUFNRSxLQUFOLENBQVlHLGVBQXJCO0FBQUEsQ0FSWCxDQUFOOztJQVdNQyxhOzs7Ozs7Ozs7MEJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFPSCxLQUFLUCxLQVBGO0FBQUEsUUFFTFEsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsUUFJTFIsSUFKSyxVQUlMQSxJQUpLO0FBQUEsUUFLTFMsRUFMSyxVQUtMQSxFQUxLO0FBQUEsUUFNTEMsU0FOSyxVQU1MQSxTQU5LOztBQVFQLFdBQ0U7QUFBQyxZQUFEO0FBQUE7QUFDRSxjQUFNVixJQURSO0FBRUUsb0JBQVlRLFVBRmQ7QUFHRSxtQkFBY1osV0FBZCxnQkFBb0NjLFNBSHRDO0FBSUUsYUFBSyxhQUFDQyxJQUFELEVBQVU7QUFDYixpQkFBS1QsTUFBTCxHQUFjUyxJQUFkO0FBQ0QsU0FOSDtBQU9FLFlBQUlGO0FBUE47QUFTR2hCLFlBQU1tQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLFVBQUNPLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsWUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsZUFBT3JCLE1BQU13QixZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkksa0JBQVEsT0FBS2hCLE1BRGtCO0FBRS9CTSxzQkFBWU8sTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGOUIsU0FBMUIsQ0FBUDtBQUlELE9BVEE7QUFUSCxLQURGO0FBc0JELEc7OztFQS9CeUIzQixNQUFNNEIsYTs7QUEwQ2xDaEIsY0FBY2lCLFlBQWQsR0FBNkI7QUFDM0JmLFlBQVVhLFNBRGlCO0FBRTNCWixjQUFZLEtBRmU7QUFHM0JSLFFBQU0sQ0FIcUI7QUFJM0JTLE1BQUksRUFKdUI7QUFLM0JDLGFBQVc7QUFMZ0IsQ0FBN0I7O0FBUUEsZUFBZUwsYUFBZiIsImZpbGUiOiJjb250ZW50LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbHVtbi5taW5XaWR0aH07XG4gICAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5jbGFzcyBDb250ZW50Q29sdW1uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzTGFzdEl0ZW0sXG4gICAgICBncm93LFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgZ3Jvdz17Z3Jvd31cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHJlZj17KGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLmNvbHVtbiA9IGVsZW07XG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChlLmcuIENvbnRlbnQuQ2FyZClcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSl9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICBncm93OiAxLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q29sdW1uO1xuIl19
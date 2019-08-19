var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

var Card = styled(Primitive.Block)(_templateObject, function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = styled.div(_templateObject2, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
});

var ContentCard = function (_React$PureComponent) {
  _inherits(ContentCard, _React$PureComponent);

  function ContentCard(props) {
    _classCallCheck(this, ContentCard);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onExpandClick = function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          id = _this$props.id;

      _this.setState({ isExpanded: !_this.state.isExpanded }, function () {
        if (onExpand) onExpand(id, _this.state.isExpanded);
      });
    };

    _this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable
    };
    return _this;
  }

  ContentCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({ isExpanded: nextProps.isExpanded });
    }
  };

  ContentCard.prototype.render = function render() {
    var cardClassPrefix = classPrefix + '_card';
    var _props = this.props,
        children = _props.children,
        isLastItem = _props.isLastItem,
        title = _props.title,
        height = _props.height,
        icon = _props.icon,
        onIconClick = _props.onIconClick,
        className = _props.className,
        id = _props.id,
        isExpandable = _props.isExpandable,
        loading = _props.loading,
        header = _props.header;


    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return React.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      header && header,
      title && !header && React.createElement(CardHeader, {
        title: title,
        icon: icon,
        onIconClick: resolvedOnIconClick,
        isExpanded: this.state.isExpanded,
        isExpandable: isExpandable,
        loading: loading
      }),
      (!isExpandable || this.state.isExpanded) && React.createElement(
        CardContent,
        { className: cardClassPrefix + '_content' },
        children
      )
    );
  };

  return ContentCard;
}(React.PureComponent);

ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  onIconClick: null,
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined,
  loading: false,
  header: undefined
};

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsIkNhcmRIZWFkZXIiLCJQcmltaXRpdmUiLCJDYXJkIiwiQmxvY2siLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kQ2xpY2siLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0E7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUNBQXZCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxPQUFPSixPQUFPRyxVQUFVRSxLQUFqQixDQUFQLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkQsTUFBTUUsS0FBTixDQUFZQyxXQUE3QztBQUFBLENBRmIsRUFHSTtBQUFBLFNBQVVILE1BQU1DLFVBQU4sR0FB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O0FBR3pCb0IsU0FBT1EsU0FIa0I7QUFJekJ6QixVQUFReUIsU0FKaUI7QUFLekJQLFFBQU1PLFNBTG1CO0FBTXpCTixlQUFhLElBTlk7QUFPekJDLGFBQVcsRUFQYztBQVF6QlgsY0FBWWdCLFNBUmE7QUFTekJkLGdCQUFjLEtBVFc7QUFVekJMLFlBQVVtQixTQVZlO0FBV3pCSixXQUFTLEtBWGdCO0FBWXpCbEIsVUFBUXNCO0FBWmlCLENBQTNCOztBQWVBLGVBQWVyQixXQUFmIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKFByaW1pdGl2ZS5CbG9jaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTsgXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGA7XG5cbmNsYXNzIENvbnRlbnRDYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0V4cGFuZGVkOiAhIXByb3BzLmlzRXhwYW5kZWQgJiYgISFwcm9wcy5pc0V4cGFuZGFibGUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc0V4cGFuZGVkICE9PSB0aGlzLnByb3BzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiBuZXh0UHJvcHMuaXNFeHBhbmRlZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25FeHBhbmQsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkIH0sICgpID0+IHtcbiAgICAgIGlmIChvbkV4cGFuZCkgb25FeHBhbmQoaWQsIHRoaXMuc3RhdGUuaXNFeHBhbmRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiwgb25JY29uQ2xpY2ssIGNsYXNzTmFtZSwgaWQsIGlzRXhwYW5kYWJsZSxcbiAgICAgIGxvYWRpbmcsIGhlYWRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlc29sdmVkT25JY29uQ2xpY2sgPSBpc0V4cGFuZGFibGUgPyB0aGlzLm9uRXhwYW5kQ2xpY2sgOiBvbkljb25DbGljaztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge2hlYWRlciAmJiBoZWFkZXJ9XG4gICAgICAgIHt0aXRsZSAmJiAhaGVhZGVyXG4gICAgICAgICYmIChcbiAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBvbkljb25DbGljaz17cmVzb2x2ZWRPbkljb25DbGlja31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgaXNFeHBhbmRhYmxlPXtpc0V4cGFuZGFibGV9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghaXNFeHBhbmRhYmxlIHx8IHRoaXMuc3RhdGUuaXNFeHBhbmRlZClcbiAgICAgICAgJiYgPENhcmRDb250ZW50IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvQ2FyZENvbnRlbnQ+fVxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaXNFeHBhbmRlZDogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBvbkV4cGFuZDogdW5kZWZpbmVkLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgaGVhZGVyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==
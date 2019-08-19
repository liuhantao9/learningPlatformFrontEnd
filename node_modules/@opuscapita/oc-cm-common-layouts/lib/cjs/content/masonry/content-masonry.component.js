'use strict';

exports.__esModule = true;

var _class, _temp2, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var getColumnWidth = function getColumnWidth(columnCount, theme) {
  return 'calc((100% / ' + columnCount + ') - ' + theme.gutterWidth + ')';
};
var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (3 * ' + props.theme.gutterWidth + '))';
};

var Masonry = _styledComponents2.default.div(_templateObject, function (props) {
  return calculateHeight(props);
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
});

var MasonryTile = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.screenSizes.medium;
}, function (props) {
  return getColumnWidth(props.sm, props.theme);
}, function (props) {
  return props.theme.screenSizes.medium;
}, function (props) {
  return getColumnWidth(props.lg, props.theme);
}, function (props) {
  return props.theme.screenSizes.medium;
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return getColumnWidth(props.md, props.theme);
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return getColumnWidth(props.xl, props.theme);
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return props.theme.screenSizes.xLarge;
}, function (props) {
  return getColumnWidth(props.lg, props.theme);
});

var ContentMasonry = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(ContentMasonry, _React$PureComponent);

  function ContentMasonry() {
    var _temp, _this, _ret;

    _classCallCheck(this, ContentMasonry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Extends an original callback function by updating the layout first
   * @param originalCb
   * @returns {function(...[*]=): *}
   */


  ContentMasonry.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        columnCountExtraLarge = _props.columnCountExtraLarge,
        columnCountLarge = _props.columnCountLarge,
        columnCountMedium = _props.columnCountMedium,
        columnCountSmall = _props.columnCountSmall,
        topOffset = _props.topOffset,
        className = _props.className,
        id = _props.id;


    return _react2.default.createElement(
      _reactPerfectScrollbar2.default,
      null,
      _react2.default.createElement(
        Masonry,
        {
          className: _constants.classPrefix + '_masonry_wrapper ' + className,
          topOffset: topOffset,
          id: id
        },
        _react2.default.createElement(
          _reactMasonryComponent2.default,
          { ref: function ref(masonry) {
              _this2.masonry = masonry;
            }
          },
          _react2.default.Children.map(children, function (child, i) {
            return _react2.default.createElement(
              MasonryTile,
              {
                xl: columnCountExtraLarge,
                lg: columnCountLarge,
                md: columnCountMedium,
                sm: columnCountSmall
              },
              _react2.default.cloneElement(child, _this2.getChildProps(i))
            );
          })
        )
      )
    );
  };

  return ContentMasonry;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getChildProps = function (childIndex) {
    var children = _this3.props.children;

    var child = children[childIndex];
    var props = {
      parent: _this3.parent,
      isLastItem: childIndex === children.length - 1 || children.length === undefined
    };
    /*  If child is a Card, we will extend its onExpand callback  */
    if (child && child.type.displayName === 'ContentCard') {
      props.onExpand = _this3.extendFn(child.props.onExpand);
    }
    return props;
  };

  this.extendFn = function (originalCb) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3.updateLayout();
      return originalCb.apply(_this3, args);
    };
  };

  this.updateLayout = function () {
    _this3.masonry.initializeMasonry();
    // I think using forceUpdate is justified here
    _this3.forceUpdate();
  };
}, _temp2);

ContentMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40,
  id: '',
  className: ''
};

exports.default = ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNjcmVlblNpemVzIiwibWVkaXVtIiwic20iLCJsZyIsImxhcmdlIiwibWQiLCJ4bCIsInhMYXJnZSIsIkNvbnRlbnRNYXNvbnJ5IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjb2x1bW5Db3VudEV4dHJhTGFyZ2UiLCJjb2x1bW5Db3VudExhcmdlIiwiY29sdW1uQ291bnRNZWRpdW0iLCJjb2x1bW5Db3VudFNtYWxsIiwiY2xhc3NOYW1lIiwiaWQiLCJjbGFzc1ByZWZpeCIsIm1hc29ucnkiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwiZ2V0Q2hpbGRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJjaGlsZEluZGV4IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInR5cGUiLCJkaXNwbGF5TmFtZSIsIm9uRXhwYW5kIiwiZXh0ZW5kRm4iLCJhcmdzIiwidXBkYXRlTGF5b3V0Iiwib3JpZ2luYWxDYiIsImFwcGx5IiwiaW5pdGlhbGl6ZU1hc29ucnkiLCJmb3JjZVVwZGF0ZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWNDLEtBQWQ7QUFBQSwyQkFBd0NELFdB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LEdBQWUsWUFBTTtBQUNuQixXQUFLbkIsT0FBTCxDQUFhc0IsaUJBQWI7QUFDQTtBQUNBLFdBQUtDLFdBQUw7QUFDRCxHOzs7QUE4Q0hqQyxlQUFla0MsWUFBZixHQUE4QjtBQUM1QmhDLFlBQVVxQixTQURrQjtBQUU1QnBCLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCbkIsYUFBVyxFQU5pQjtBQU81QnFCLE1BQUksRUFQd0I7QUFRNUJELGFBQVc7QUFSaUIsQ0FBOUI7O2tCQVdlUCxjIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENvbHVtbldpZHRoID0gKGNvbHVtbkNvdW50LCB0aGVtZSkgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gcHJvcHMgPT4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgzICogJHtwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG5cbmNvbnN0IE1hc29ucnkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDoxMDB2dzsgICAgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IE1hc29ucnlUaWxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICAvKiBTbWFsbCBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubWVkaXVtfSkgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5zbSwgcHJvcHMudGhlbWUpfTtcbiAgIH1cbiAgXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5tZWRpdW19KSAgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZywgcHJvcHMudGhlbWUpfTsgXG4gIH1cbiAgXG4gIC8qIE1lZGl1bSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubWVkaXVtfSkgYW5kIChtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubGFyZ2V9KSB7IFxuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kLCBwcm9wcy50aGVtZSl9OyBcbiAgfVxuICBcbiAgLyogTGFyZ2UgYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kICgke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLmxhcmdlfSkgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCwgcHJvcHMudGhlbWUpfTsgXG4gIH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5sYXJnZX0pIGFuZCAobWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLnhMYXJnZX0pIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuYDtcblxuY2xhc3MgQ29udGVudE1hc29ucnkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRQcm9wcyA9IChjaGlsZEluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGlzTGFzdEl0ZW06IGNoaWxkSW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgfTtcbiAgICAvKiAgSWYgY2hpbGQgaXMgYSBDYXJkLCB3ZSB3aWxsIGV4dGVuZCBpdHMgb25FeHBhbmQgY2FsbGJhY2sgICovXG4gICAgaWYgKGNoaWxkICYmIGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdDb250ZW50Q2FyZCcpIHtcbiAgICAgIHByb3BzLm9uRXhwYW5kID0gdGhpcy5leHRlbmRGbihjaGlsZC5wcm9wcy5vbkV4cGFuZCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfTtcblxuICAvKipcbiAgICogRXh0ZW5kcyBhbiBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBieSB1cGRhdGluZyB0aGUgbGF5b3V0IGZpcnN0XG4gICAqIEBwYXJhbSBvcmlnaW5hbENiXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbiguLi5bKl09KTogKn1cbiAgICovXG4gIGV4dGVuZEZuID0gb3JpZ2luYWxDYiA9PiAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XG4gICAgcmV0dXJuIG9yaWdpbmFsQ2IuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgdXBkYXRlTGF5b3V0ID0gKCkgPT4ge1xuICAgIHRoaXMubWFzb25yeS5pbml0aWFsaXplTWFzb25yeSgpO1xuICAgIC8vIEkgdGhpbmsgdXNpbmcgZm9yY2VVcGRhdGUgaXMganVzdGlmaWVkIGhlcmVcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBjb2x1bW5Db3VudEV4dHJhTGFyZ2UsIGNvbHVtbkNvdW50TGFyZ2UsIGNvbHVtbkNvdW50TWVkaXVtLCBjb2x1bW5Db3VudFNtYWxsLFxuICAgICAgdG9wT2Zmc2V0LCBjbGFzc05hbWUsIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdE1hc29ucnkgcmVmPXsobWFzb25yeSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbWFzb25yeTtcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHRoaXMuZ2V0Q2hpbGRQcm9wcyhpKSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeVRpbGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1JlYWN0TWFzb25yeT5cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudE1hc29ucnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudExhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TWVkaXVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50U21hbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQ29udGVudE1hc29ucnkuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IDQsXG4gIGNvbHVtbkNvdW50TGFyZ2U6IDMsXG4gIGNvbHVtbkNvdW50TWVkaXVtOiAyLFxuICBjb2x1bW5Db3VudFNtYWxsOiAxLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TWFzb25yeTtcbiJdfQ==
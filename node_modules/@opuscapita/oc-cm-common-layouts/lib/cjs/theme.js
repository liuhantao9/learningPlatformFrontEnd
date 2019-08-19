'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _constants = require('./constants');

/**
 * Keep this alphabetical order if possible
 */
// Certain variable values are temporarily imported from oc-cm-common-styles
exports.default = {
  colors: _colors.colors,
  column: {
    minWidth: '400px'
  },
  contentBackgroundColor: _colors.colors.white,
  formControls: {
    button: {
      backgroundColor: _colors.colors.grey10,
      primaryBackgroundColor: _colors.colors.orange2,
      textColor: _colors.colors.white,
      minWidth: '70px'
    },
    input: {
      borderColor: _colors.colors.grey7,
      focusBorderColor: _colors.colors.yellow,
      height: '34px'
    }
  },
  halfGutterWidth: '0.5rem',
  header: {
    height: _constants.constants.navBarHeight,
    button: {
      height: '2rem'
    }
  },
  gutterWidth: '1rem',
  inputColumn: {
    flexDirection: 'column',
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _constants.constants.fontSize.h4
    }
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _constants.constants.fontSize.h4
    }
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem'
  },
  text: {
    title: {
      fontSize: _constants.constants.fontSize.medium,
      fontWeight: _constants.constants.fontWeight.bold
    },
    subTitle: {
      fontSize: _constants.constants.fontSize.medium,
      fontWeight: _constants.constants.fontWeight.normal
    },
    error: {
      fontSize: _constants.constants.fontSize.small,
      color: _colors.colors.red
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsImNvbnN0YW50cyIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUVBOzs7QUFKQTtrQkFPZTtBQUNiQSx3QkFEYTtBQUViQyxVQUFRO0FBQ05DLGNBQVU7QUFESixHQUZLO0FBS2JDLDBCQUF3QkgsZUFBT0ksS0FMbEI7QUFNYkMsZ0JBQWM7QUFDWkMsWUFBUTtBQUNOQyx1QkFBaUJQLGVBQU9RLE1BRGxCO0FBRU5DLDhCQUF3QlQsZUFBT1UsT0FGekI7QUFHTkMsaUJBQVdYLGVBQU9JLEtBSFo7QUFJTkYsZ0JBQVU7QUFKSixLQURJO0FBT1pVLFdBQU87QUFDTEMsbUJBQWFiLGVBQU9jLEtBRGY7QUFFTEMsd0JBQWtCZixlQUFPZ0IsTUFGcEI7QUFHTEMsY0FBUTtBQUhIO0FBUEssR0FORDtBQW1CYkMsbUJBQWlCLFFBbkJKO0FBb0JiQyxVQUFRO0FBQ05GLFlBQVFHLHFCQUFVQyxZQURaO0FBRU5mLFlBQVE7QUFDTlcsY0FBUTtBQURGO0FBRkYsR0FwQks7QUEwQmJLLGVBQWEsTUExQkE7QUEyQmJDLGVBQWE7QUFDWEMsbUJBQWUsUUFESjtBQUVYQyxnQkFBWSxPQUZEO0FBR1hDLDhCQUEwQixRQUhmO0FBSVhDLG9CQUFnQjtBQUNkVixjQUFRO0FBRE0sS0FKTDtBQU9YVyx1QkFBbUI7QUFDakJDLGdCQUFVVCxxQkFBVVMsUUFBVixDQUFtQkM7QUFEWjtBQVBSLEdBM0JBO0FBc0NiQyxZQUFVO0FBQ1JQLG1CQUFlLEtBRFA7QUFFUkMsZ0JBQVksT0FGSjtBQUdSRSxvQkFBZ0I7QUFDZFYsY0FBUTtBQURNLEtBSFI7QUFNUlcsdUJBQW1CO0FBQ2pCQyxnQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJDO0FBRFo7QUFOWCxHQXRDRztBQWdEYkUsZUFBYTtBQUNYQyxZQUFRLE9BREc7QUFFWEMsV0FBTyxPQUZJO0FBR1hDLFlBQVE7QUFIRyxHQWhEQTtBQXFEYkMsUUFBTTtBQUNKQyxXQUFPO0FBQ0xSLGdCQUFVVCxxQkFBVVMsUUFBVixDQUFtQkksTUFEeEI7QUFFTEssa0JBQVlsQixxQkFBVWtCLFVBQVYsQ0FBcUJDO0FBRjVCLEtBREg7QUFLSkMsY0FBVTtBQUNSWCxnQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJJLE1BRHJCO0FBRVJLLGtCQUFZbEIscUJBQVVrQixVQUFWLENBQXFCRztBQUZ6QixLQUxOO0FBU0pDLFdBQU87QUFDTGIsZ0JBQVVULHFCQUFVUyxRQUFWLENBQW1CYyxLQUR4QjtBQUVMQyxhQUFPNUMsZUFBTzZDO0FBRlQ7QUFUSDtBQXJETyxDIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2VydGFpbiB2YXJpYWJsZSB2YWx1ZXMgYXJlIHRlbXBvcmFyaWx5IGltcG9ydGVkIGZyb20gb2MtY20tY29tbW9uLXN0eWxlc1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEtlZXAgdGhpcyBhbHBoYWJldGljYWwgb3JkZXIgaWYgcG9zc2libGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb2xvcnMsXG4gIGNvbHVtbjoge1xuICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICB9LFxuICBjb250ZW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2hpdGUsXG4gIGZvcm1Db250cm9sczoge1xuICAgIGJ1dHRvbjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTEwLFxuICAgICAgcHJpbWFyeUJhY2tncm91bmRDb2xvcjogY29sb3JzLm9yYW5nZTIsXG4gICAgICB0ZXh0Q29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgIG1pbldpZHRoOiAnNzBweCcsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5ncmV5NyxcbiAgICAgIGZvY3VzQm9yZGVyQ29sb3I6IGNvbG9ycy55ZWxsb3csXG4gICAgICBoZWlnaHQ6ICczNHB4JyxcbiAgICB9LFxuICB9LFxuICBoYWxmR3V0dGVyV2lkdGg6ICcwLjVyZW0nLFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IGNvbnN0YW50cy5uYXZCYXJIZWlnaHQsXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICcycmVtJyxcbiAgICB9LFxuICB9LFxuICBndXR0ZXJXaWR0aDogJzFyZW0nLFxuICBpbnB1dENvbHVtbjoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXG4gICAgbGFiZWxDb250YWluZXJMaW5lSGVpZ2h0OiAnMS41cmVtJyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxuICAgIH0sXG4gIH0sXG4gIGlucHV0Um93OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxuICAgIH0sXG4gIH0sXG4gIHNjcmVlblNpemVzOiB7XG4gICAgbWVkaXVtOiAnNDByZW0nLFxuICAgIGxhcmdlOiAnNjRyZW0nLFxuICAgIHhMYXJnZTogJzc1cmVtJyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLm1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHQ6IGNvbnN0YW50cy5mb250V2VpZ2h0LmJvbGQsXG4gICAgfSxcbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5tZWRpdW0sXG4gICAgICBmb250V2VpZ2h0OiBjb25zdGFudHMuZm9udFdlaWdodC5ub3JtYWwsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5zbWFsbCxcbiAgICAgIGNvbG9yOiBjb2xvcnMucmVkLFxuICAgIH0sXG4gIH0sXG59O1xuIl19
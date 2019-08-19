// Certain variable values are temporarily imported from oc-cm-common-styles
import { colors } from './colors';
import { constants } from './constants';

/**
 * Keep this alphabetical order if possible
 */
export default {
  colors: colors,
  column: {
    minWidth: '400px'
  },
  contentBackgroundColor: colors.white,
  formControls: {
    button: {
      backgroundColor: colors.grey10,
      primaryBackgroundColor: colors.orange2,
      textColor: colors.white,
      minWidth: '70px'
    },
    input: {
      borderColor: colors.grey7,
      focusBorderColor: colors.yellow,
      height: '34px'
    }
  },
  halfGutterWidth: '0.5rem',
  header: {
    height: constants.navBarHeight,
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
      fontSize: constants.fontSize.h4
    }
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: constants.fontSize.h4
    }
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem'
  },
  text: {
    title: {
      fontSize: constants.fontSize.medium,
      fontWeight: constants.fontWeight.bold
    },
    subTitle: {
      fontSize: constants.fontSize.medium,
      fontWeight: constants.fontWeight.normal
    },
    error: {
      fontSize: constants.fontSize.small,
      color: colors.red
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb25zdGFudHMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSxNQUFULFFBQXVCLFVBQXZCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7QUFFQTs7O0FBR0EsZUFBZTtBQUNiRCxnQkFEYTtBQUViRSxVQUFRO0FBQ05DLGNBQVU7QUFESixHQUZLO0FBS2JDLDBCQUF3QkosT0FBT0ssS0FMbEI7QUFNYkMsZ0JBQWM7QUFDWkMsWUFBUTtBQUNOQyx1QkFBaUJSLE9BQU9TLE1BRGxCO0FBRU5DLDhCQUF3QlYsT0FBT1csT0FGekI7QUFHTkMsaUJBQVdaLE9BQU9LLEtBSFo7QUFJTkYsZ0JBQVU7QUFKSixLQURJO0FBT1pVLFdBQU87QUFDTEMsbUJBQWFkLE9BQU9lLEtBRGY7QUFFTEMsd0JBQWtCaEIsT0FBT2lCLE1BRnBCO0FBR0xDLGNBQVE7QUFISDtBQVBLLEdBTkQ7QUFtQmJDLG1CQUFpQixRQW5CSjtBQW9CYkMsVUFBUTtBQUNORixZQUFRakIsVUFBVW9CLFlBRFo7QUFFTmQsWUFBUTtBQUNOVyxjQUFRO0FBREY7QUFGRixHQXBCSztBQTBCYkksZUFBYSxNQTFCQTtBQTJCYkMsZUFBYTtBQUNYQyxtQkFBZSxRQURKO0FBRVhDLGdCQUFZLE9BRkQ7QUFHWEMsOEJBQTBCLFFBSGY7QUFJWEMsb0JBQWdCO0FBQ2RULGNBQVE7QUFETSxLQUpMO0FBT1hVLHVCQUFtQjtBQUNqQkMsZ0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkM7QUFEWjtBQVBSLEdBM0JBO0FBc0NiQyxZQUFVO0FBQ1JQLG1CQUFlLEtBRFA7QUFFUkMsZ0JBQVksT0FGSjtBQUdSRSxvQkFBZ0I7QUFDZFQsY0FBUTtBQURNLEtBSFI7QUFNUlUsdUJBQW1CO0FBQ2pCQyxnQkFBVTVCLFVBQVU0QixRQUFWLENBQW1CQztBQURaO0FBTlgsR0F0Q0c7QUFnRGJFLGVBQWE7QUFDWEMsWUFBUSxPQURHO0FBRVhDLFdBQU8sT0FGSTtBQUdYQyxZQUFRO0FBSEcsR0FoREE7QUFxRGJDLFFBQU07QUFDSkMsV0FBTztBQUNMUixnQkFBVTVCLFVBQVU0QixRQUFWLENBQW1CSSxNQUR4QjtBQUVMSyxrQkFBWXJDLFVBQVVxQyxVQUFWLENBQXFCQztBQUY1QixLQURIO0FBS0pDLGNBQVU7QUFDUlgsZ0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkksTUFEckI7QUFFUkssa0JBQVlyQyxVQUFVcUMsVUFBVixDQUFxQkc7QUFGekIsS0FMTjtBQVNKQyxXQUFPO0FBQ0xiLGdCQUFVNUIsVUFBVTRCLFFBQVYsQ0FBbUJjLEtBRHhCO0FBRUxDLGFBQU81QyxPQUFPNkM7QUFGVDtBQVRIO0FBckRPLENBQWYiLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDZXJ0YWluIHZhcmlhYmxlIHZhbHVlcyBhcmUgdGVtcG9yYXJpbHkgaW1wb3J0ZWQgZnJvbSBvYy1jbS1jb21tb24tc3R5bGVzXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogS2VlcCB0aGlzIGFscGhhYmV0aWNhbCBvcmRlciBpZiBwb3NzaWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9ycyxcbiAgY29sdW1uOiB7XG4gICAgbWluV2lkdGg6ICc0MDBweCcsXG4gIH0sXG4gIGNvbnRlbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgZm9ybUNvbnRyb2xzOiB7XG4gICAgYnV0dG9uOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5MTAsXG4gICAgICBwcmltYXJ5QmFja2dyb3VuZENvbG9yOiBjb2xvcnMub3JhbmdlMixcbiAgICAgIHRleHRDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgbWluV2lkdGg6ICc3MHB4JyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLmdyZXk3LFxuICAgICAgZm9jdXNCb3JkZXJDb2xvcjogY29sb3JzLnllbGxvdyxcbiAgICAgIGhlaWdodDogJzM0cHgnLFxuICAgIH0sXG4gIH0sXG4gIGhhbGZHdXR0ZXJXaWR0aDogJzAuNXJlbScsXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogY29uc3RhbnRzLm5hdkJhckhlaWdodCxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzJyZW0nLFxuICAgIH0sXG4gIH0sXG4gIGd1dHRlcldpZHRoOiAnMXJlbScsXG4gIGlucHV0Q29sdW1uOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICBsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxuICAgIGVycm9yQ29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgIH0sXG4gICAgcmVxdWlyZWRJbmRpY2F0b3I6IHtcbiAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuaDQsXG4gICAgfSxcbiAgfSxcbiAgaW5wdXRSb3c6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBsYWJlbFdpZHRoOiAnMjI1cHgnLFxuICAgIGVycm9yQ29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgIH0sXG4gICAgcmVxdWlyZWRJbmRpY2F0b3I6IHtcbiAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuaDQsXG4gICAgfSxcbiAgfSxcbiAgc2NyZWVuU2l6ZXM6IHtcbiAgICBtZWRpdW06ICc0MHJlbScsXG4gICAgbGFyZ2U6ICc2NHJlbScsXG4gICAgeExhcmdlOiAnNzVyZW0nLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUubWVkaXVtLFxuICAgICAgZm9udFdlaWdodDogY29uc3RhbnRzLmZvbnRXZWlnaHQuYm9sZCxcbiAgICB9LFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLm1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHQ6IGNvbnN0YW50cy5mb250V2VpZ2h0Lm5vcm1hbCxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLnNtYWxsLFxuICAgICAgY29sb3I6IGNvbG9ycy5yZWQsXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
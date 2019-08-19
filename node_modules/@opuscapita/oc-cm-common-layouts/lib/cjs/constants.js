'use strict';

exports.__esModule = true;
var classPrefix = exports.classPrefix = 'oc-layout';

var constants = exports.constants = {
  // Currently we do not use roundings, but the variables have been added for
  // Bootstrap compatibility
  borderRadius: {
    base: 0,
    large: 0,
    small: 0
  },
  navBarHeight: '40px',
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700
  },
  // Bootstrap 3 sets html font-size to 62.5% i.e. 10px with Browser's default size being 16px.
  // Bootstrap 4 uses different base font-size and hence these values need to be changed.
  fontSize: {
    h1: '3.6rem', // 36px
    h2: '3rem', // 30px
    h3: '2.4rem', // 24px
    h4: '1.8rem', // 18px

    large: '1.8rem',
    medium: '1.6rem',
    normal: '1.4rem', // default text
    small: '1.2rem'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY2xhc3NQcmVmaXgiLCJjb25zdGFudHMiLCJib3JkZXJSYWRpdXMiLCJiYXNlIiwibGFyZ2UiLCJzbWFsbCIsIm5hdkJhckhlaWdodCIsImZvbnRXZWlnaHQiLCJsaWdodCIsIm5vcm1hbCIsImJvbGQiLCJmb250U2l6ZSIsImgxIiwiaDIiLCJoMyIsImg0IiwibWVkaXVtIl0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxvQ0FBYyxXQUFwQjs7QUFFQSxJQUFNQyxnQ0FBWTtBQUN2QjtBQUNBO0FBQ0FDLGdCQUFjO0FBQ1pDLFVBQU0sQ0FETTtBQUVaQyxXQUFPLENBRks7QUFHWkMsV0FBTztBQUhLLEdBSFM7QUFRdkJDLGdCQUFjLE1BUlM7QUFTdkJDLGNBQVk7QUFDVkMsV0FBTyxHQURHO0FBRVZDLFlBQVEsR0FGRTtBQUdWQyxVQUFNO0FBSEksR0FUVztBQWN2QjtBQUNBO0FBQ0FDLFlBQVU7QUFDUkMsUUFBSSxRQURJLEVBQ007QUFDZEMsUUFBSSxNQUZJLEVBRUk7QUFDWkMsUUFBSSxRQUhJLEVBR007QUFDZEMsUUFBSSxRQUpJLEVBSU07O0FBRWRYLFdBQU8sUUFOQztBQU9SWSxZQUFRLFFBUEE7QUFRUlAsWUFBUSxRQVJBLEVBUVU7QUFDbEJKLFdBQU87QUFUQztBQWhCYSxDQUFsQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50cyA9IHtcbiAgLy8gQ3VycmVudGx5IHdlIGRvIG5vdCB1c2Ugcm91bmRpbmdzLCBidXQgdGhlIHZhcmlhYmxlcyBoYXZlIGJlZW4gYWRkZWQgZm9yXG4gIC8vIEJvb3RzdHJhcCBjb21wYXRpYmlsaXR5XG4gIGJvcmRlclJhZGl1czoge1xuICAgIGJhc2U6IDAsXG4gICAgbGFyZ2U6IDAsXG4gICAgc21hbGw6IDAsXG4gIH0sXG4gIG5hdkJhckhlaWdodDogJzQwcHgnLFxuICBmb250V2VpZ2h0OiB7XG4gICAgbGlnaHQ6IDMwMCxcbiAgICBub3JtYWw6IDQwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIC8vIEJvb3RzdHJhcCAzIHNldHMgaHRtbCBmb250LXNpemUgdG8gNjIuNSUgaS5lLiAxMHB4IHdpdGggQnJvd3NlcidzIGRlZmF1bHQgc2l6ZSBiZWluZyAxNnB4LlxuICAvLyBCb290c3RyYXAgNCB1c2VzIGRpZmZlcmVudCBiYXNlIGZvbnQtc2l6ZSBhbmQgaGVuY2UgdGhlc2UgdmFsdWVzIG5lZWQgdG8gYmUgY2hhbmdlZC5cbiAgZm9udFNpemU6IHtcbiAgICBoMTogJzMuNnJlbScsIC8vIDM2cHhcbiAgICBoMjogJzNyZW0nLCAvLyAzMHB4XG4gICAgaDM6ICcyLjRyZW0nLCAvLyAyNHB4XG4gICAgaDQ6ICcxLjhyZW0nLCAvLyAxOHB4XG5cbiAgICBsYXJnZTogJzEuOHJlbScsXG4gICAgbWVkaXVtOiAnMS42cmVtJyxcbiAgICBub3JtYWw6ICcxLjRyZW0nLCAvLyBkZWZhdWx0IHRleHRcbiAgICBzbWFsbDogJzEuMnJlbScsXG4gIH0sXG59O1xuIl19
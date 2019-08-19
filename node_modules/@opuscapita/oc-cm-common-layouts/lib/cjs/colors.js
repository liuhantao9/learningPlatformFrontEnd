'use strict';

exports.__esModule = true;
var descriptions = exports.descriptions = {
  grey1: ['Button (disabled)'],
  grey2: ['Alert notification background'],
  grey3: ['Edited grid row', 'Disabled grid text', 'Input border'],
  grey4: ['Select hover background', 'Grid highlighted row background', 'Grid header background'],
  grey5: ['Selected grid row background', 'Selected select item background'],
  grey6: ['App background', 'Grid row border'],
  grey7: ['Grid outer border'],
  grey8: ['Button (hover)'],
  grey9: ['Grid text', 'Button background', 'Checkbox border'],
  grey10: ['Button (pressed)'],

  // Oranges
  orange1: ['Priority button (hover)'],
  orange2: ['Priority button background'],
  orange3: ['Priority button (pressed)'],

  // Other colors e.g. graphs
  yellow: ['Warning color'],
  white: ['Content background color'],
  green: ['Success color'],
  black: [],
  petrol: ['Tooltip background color'],
  red: ['Error color'],
  blue: [],
  violet: []
};

var colors = exports.colors = {
  // Greys
  grey1: '#F0F0F0',
  grey2: '#EAEAEA',
  grey3: '#CCCCCC',

  // Bluish greys
  grey4: '#EFF2F4',
  grey5: '#E6E9EB',
  grey6: '#D3DADE',
  grey7: '#A4AFB6',
  grey8: '#77818c',
  grey9: '#67707C',
  grey10: '#585F68',

  // Oranges
  orange1: '#FF7517',
  orange2: '#EC6608',
  orange3: '#d35c0b',

  // Other colors e.g. graphs
  yellow: '#FECA1D',
  white: '#FFFFFF',
  green: '#3AA57B',
  black: '#000000',
  petrol: '#006070',
  red: '#D82515',
  blue: '#16AED6',
  violet: '#943BA3'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xvcnMuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwiZ3JleTEiLCJncmV5MiIsImdyZXkzIiwiZ3JleTQiLCJncmV5NSIsImdyZXk2IiwiZ3JleTciLCJncmV5OCIsImdyZXk5IiwiZ3JleTEwIiwib3JhbmdlMSIsIm9yYW5nZTIiLCJvcmFuZ2UzIiwieWVsbG93Iiwid2hpdGUiLCJncmVlbiIsImJsYWNrIiwicGV0cm9sIiwicmVkIiwiYmx1ZSIsInZpb2xldCIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sSUFBTUEsc0NBQWU7QUFDMUJDLFNBQU8sQ0FBQyxtQkFBRCxDQURtQjtBQUUxQkMsU0FBTyxDQUFDLCtCQUFELENBRm1CO0FBRzFCQyxTQUFPLENBQ0wsaUJBREssRUFFTCxvQkFGSyxFQUdMLGNBSEssQ0FIbUI7QUFRMUJDLFNBQU8sQ0FDTCx5QkFESyxFQUVMLGlDQUZLLEVBR0wsd0JBSEssQ0FSbUI7QUFhMUJDLFNBQU8sQ0FDTCw4QkFESyxFQUVMLGlDQUZLLENBYm1CO0FBaUIxQkMsU0FBTyxDQUFDLGdCQUFELEVBQW1CLGlCQUFuQixDQWpCbUI7QUFrQjFCQyxTQUFPLENBQUMsbUJBQUQsQ0FsQm1CO0FBbUIxQkMsU0FBTyxDQUFDLGdCQUFELENBbkJtQjtBQW9CMUJDLFNBQU8sQ0FDTCxXQURLLEVBRUwsbUJBRkssRUFHTCxpQkFISyxDQXBCbUI7QUF5QjFCQyxVQUFRLENBQUMsa0JBQUQsQ0F6QmtCOztBQTJCMUI7QUFDQUMsV0FBUyxDQUFDLHlCQUFELENBNUJpQjtBQTZCMUJDLFdBQVMsQ0FBQyw0QkFBRCxDQTdCaUI7QUE4QjFCQyxXQUFTLENBQUMsMkJBQUQsQ0E5QmlCOztBQWdDMUI7QUFDQUMsVUFBUSxDQUFDLGVBQUQsQ0FqQ2tCO0FBa0MxQkMsU0FBTyxDQUFDLDBCQUFELENBbENtQjtBQW1DMUJDLFNBQU8sQ0FBQyxlQUFELENBbkNtQjtBQW9DMUJDLFNBQU8sRUFwQ21CO0FBcUMxQkMsVUFBUSxDQUFDLDBCQUFELENBckNrQjtBQXNDMUJDLE9BQUssQ0FBQyxhQUFELENBdENxQjtBQXVDMUJDLFFBQU0sRUF2Q29CO0FBd0MxQkMsVUFBUTtBQXhDa0IsQ0FBckI7O0FBNENBLElBQU1DLDBCQUFTO0FBQ3BCO0FBQ0FyQixTQUFPLFNBRmE7QUFHcEJDLFNBQU8sU0FIYTtBQUlwQkMsU0FBTyxTQUphOztBQU1wQjtBQUNBQyxTQUFPLFNBUGE7QUFRcEJDLFNBQU8sU0FSYTtBQVNwQkMsU0FBTyxTQVRhO0FBVXBCQyxTQUFPLFNBVmE7QUFXcEJDLFNBQU8sU0FYYTtBQVlwQkMsU0FBTyxTQVphO0FBYXBCQyxVQUFRLFNBYlk7O0FBZXBCO0FBQ0FDLFdBQVMsU0FoQlc7QUFpQnBCQyxXQUFTLFNBakJXO0FBa0JwQkMsV0FBUyxTQWxCVzs7QUFvQnBCO0FBQ0FDLFVBQVEsU0FyQlk7QUFzQnBCQyxTQUFPLFNBdEJhO0FBdUJwQkMsU0FBTyxTQXZCYTtBQXdCcEJDLFNBQU8sU0F4QmE7QUF5QnBCQyxVQUFRLFNBekJZO0FBMEJwQkMsT0FBSyxTQTFCZTtBQTJCcEJDLFFBQU0sU0EzQmM7QUE0QnBCQyxVQUFRO0FBNUJZLENBQWYiLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9ucyA9IHtcbiAgZ3JleTE6IFsnQnV0dG9uIChkaXNhYmxlZCknXSxcbiAgZ3JleTI6IFsnQWxlcnQgbm90aWZpY2F0aW9uIGJhY2tncm91bmQnXSxcbiAgZ3JleTM6IFtcbiAgICAnRWRpdGVkIGdyaWQgcm93JyxcbiAgICAnRGlzYWJsZWQgZ3JpZCB0ZXh0JyxcbiAgICAnSW5wdXQgYm9yZGVyJyxcbiAgXSxcbiAgZ3JleTQ6IFtcbiAgICAnU2VsZWN0IGhvdmVyIGJhY2tncm91bmQnLFxuICAgICdHcmlkIGhpZ2hsaWdodGVkIHJvdyBiYWNrZ3JvdW5kJyxcbiAgICAnR3JpZCBoZWFkZXIgYmFja2dyb3VuZCcsXG4gIF0sXG4gIGdyZXk1OiBbXG4gICAgJ1NlbGVjdGVkIGdyaWQgcm93IGJhY2tncm91bmQnLFxuICAgICdTZWxlY3RlZCBzZWxlY3QgaXRlbSBiYWNrZ3JvdW5kJyxcbiAgXSxcbiAgZ3JleTY6IFsnQXBwIGJhY2tncm91bmQnLCAnR3JpZCByb3cgYm9yZGVyJ10sXG4gIGdyZXk3OiBbJ0dyaWQgb3V0ZXIgYm9yZGVyJ10sXG4gIGdyZXk4OiBbJ0J1dHRvbiAoaG92ZXIpJ10sXG4gIGdyZXk5OiBbXG4gICAgJ0dyaWQgdGV4dCcsXG4gICAgJ0J1dHRvbiBiYWNrZ3JvdW5kJyxcbiAgICAnQ2hlY2tib3ggYm9yZGVyJyxcbiAgXSxcbiAgZ3JleTEwOiBbJ0J1dHRvbiAocHJlc3NlZCknXSxcblxuICAvLyBPcmFuZ2VzXG4gIG9yYW5nZTE6IFsnUHJpb3JpdHkgYnV0dG9uIChob3ZlciknXSxcbiAgb3JhbmdlMjogWydQcmlvcml0eSBidXR0b24gYmFja2dyb3VuZCddLFxuICBvcmFuZ2UzOiBbJ1ByaW9yaXR5IGJ1dHRvbiAocHJlc3NlZCknXSxcblxuICAvLyBPdGhlciBjb2xvcnMgZS5nLiBncmFwaHNcbiAgeWVsbG93OiBbJ1dhcm5pbmcgY29sb3InXSxcbiAgd2hpdGU6IFsnQ29udGVudCBiYWNrZ3JvdW5kIGNvbG9yJ10sXG4gIGdyZWVuOiBbJ1N1Y2Nlc3MgY29sb3InXSxcbiAgYmxhY2s6IFtdLFxuICBwZXRyb2w6IFsnVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yJ10sXG4gIHJlZDogWydFcnJvciBjb2xvciddLFxuICBibHVlOiBbXSxcbiAgdmlvbGV0OiBbXSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgLy8gR3JleXNcbiAgZ3JleTE6ICcjRjBGMEYwJyxcbiAgZ3JleTI6ICcjRUFFQUVBJyxcbiAgZ3JleTM6ICcjQ0NDQ0NDJyxcblxuICAvLyBCbHVpc2ggZ3JleXNcbiAgZ3JleTQ6ICcjRUZGMkY0JyxcbiAgZ3JleTU6ICcjRTZFOUVCJyxcbiAgZ3JleTY6ICcjRDNEQURFJyxcbiAgZ3JleTc6ICcjQTRBRkI2JyxcbiAgZ3JleTg6ICcjNzc4MThjJyxcbiAgZ3JleTk6ICcjNjc3MDdDJyxcbiAgZ3JleTEwOiAnIzU4NUY2OCcsXG5cbiAgLy8gT3Jhbmdlc1xuICBvcmFuZ2UxOiAnI0ZGNzUxNycsXG4gIG9yYW5nZTI6ICcjRUM2NjA4JyxcbiAgb3JhbmdlMzogJyNkMzVjMGInLFxuXG4gIC8vIE90aGVyIGNvbG9ycyBlLmcuIGdyYXBoc1xuICB5ZWxsb3c6ICcjRkVDQTFEJyxcbiAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgZ3JlZW46ICcjM0FBNTdCJyxcbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgcGV0cm9sOiAnIzAwNjA3MCcsXG4gIHJlZDogJyNEODI1MTUnLFxuICBibHVlOiAnIzE2QUVENicsXG4gIHZpb2xldDogJyM5NDNCQTMnLFxufTtcbiJdfQ==
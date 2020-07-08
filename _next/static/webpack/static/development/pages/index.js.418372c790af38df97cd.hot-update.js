webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back.js":
/*!*********************!*\
  !*** ./src/back.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Back; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction BackSection(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"BackSection\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return null;\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, title)));\n}\n\n_c = BackSection;\nfunction Back(_ref2) {\n  _s();\n\n  var x = _ref2.x,\n      style = _ref2.style;\n  // Text does not show until minX\n  var minX = 0.6;\n  var display = x > minX ? null : \"none\";\n  var progress = (x - minX) / (1 - minX);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeSection = _useState[0],\n      selectSection = _useState[1];\n\n  var combinedStyle = _objectSpread({\n    display: display,\n    opacity: progress,\n    filter: \"brightness(\".concat(progress, \")\")\n  }, style);\n\n  return __jsx(\"div\", {\n    className: \"Back\",\n    style: combinedStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(BackSection, {\n    title: \"Chris Bolin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"Software engineer + artist in Denver. Engineering, Formidable. Founder, The Disconnect\"), __jsx(BackSection, {\n    title: \"Projects\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Offline Only, Tessellate, Skycoins, Elements, Enchiridion, Travels, Shipwrecked\"), __jsx(BackSection, {\n    title: \"Talks & Press\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"SXSW me Convention, DinosaurJS, Debugging, Offline Websites, Vice, Lifehacker, CBC, CJR, Le Monde, The Next Web\"), __jsx(BackSection, {\n    title: \"CV\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \"VP Engineering, Formidable. Adjunct, U of Denver. Engineer, Jumpshell. Data scientist, Autotegrity. Researcher, MIT EBM Lab. Engineer, NI Edu \\u2192 Master\\u2019s Computational Engineering, MIT, numerical simulation of environmental impact. BS Mechanical Engineering, U of Nebraska\"));\n}\n/*\ncurrent:\nChris Bolin\nProjects\nTalks\nPress\nWork\nEdu\nContact\n\nChris Bolin (basics and contact)\nProjects\nTalks and Press\nCV\n*/\n\n_s(Back, \"tnljRzAb7f8wTniScoQQzKv1g/w=\");\n\n_c2 = Back;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BackSection\");\n$RefreshReg$(_c2, \"Back\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay5qcz82YmUzIl0sIm5hbWVzIjpbIkJhY2tTZWN0aW9uIiwidGl0bGUiLCJjaGlsZHJlbiIsIkJhY2siLCJ4Iiwic3R5bGUiLCJtaW5YIiwiZGlzcGxheSIsInByb2dyZXNzIiwidXNlU3RhdGUiLCJhY3RpdmVTZWN0aW9uIiwic2VsZWN0U2VjdGlvbiIsImNvbWJpbmVkU3R5bGUiLCJvcGFjaXR5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFdBQVQsT0FBMEM7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3hDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTSxJQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkQsS0FBOUIsQ0FERixDQURGLENBREY7QUFRRDs7S0FUUUQsVztBQVdNLFNBQVNHLElBQVQsUUFBNEI7QUFBQTs7QUFBQSxNQUFaQyxDQUFZLFNBQVpBLENBQVk7QUFBQSxNQUFUQyxLQUFTLFNBQVRBLEtBQVM7QUFDekM7QUFDQSxNQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsQ0FBQyxHQUFHRSxJQUFKLEdBQVcsSUFBWCxHQUFrQixNQUFsQztBQUNBLE1BQU1FLFFBQVEsR0FBRyxDQUFDSixDQUFDLEdBQUdFLElBQUwsS0FBYyxJQUFJQSxJQUFsQixDQUFqQjs7QUFKeUMsa0JBS0ZHLHNEQUFRLENBQUMsSUFBRCxDQUxOO0FBQUEsTUFLbENDLGFBTGtDO0FBQUEsTUFLbkJDLGFBTG1COztBQU16QyxNQUFNQyxhQUFhO0FBQ2pCTCxXQUFPLEVBQVBBLE9BRGlCO0FBRWpCTSxXQUFPLEVBQUVMLFFBRlE7QUFHakJNLFVBQU0sdUJBQWdCTixRQUFoQjtBQUhXLEtBSWRILEtBSmMsQ0FBbkI7O0FBTUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBRU8sYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFhLFNBQUssRUFBQyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQURGLEVBS0UsTUFBQyxXQUFEO0FBQWEsU0FBSyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBTEYsRUFTRSxNQUFDLFdBQUQ7QUFBYSxTQUFLLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SEFURixFQWFFLE1BQUMsV0FBRDtBQUFhLFNBQUssRUFBQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlTQWJGLENBREY7QUFzQkQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztHQXBDd0JULEk7O01BQUFBLEkiLCJmaWxlIjoiLi9zcmMvYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJhY2tTZWN0aW9uKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uXCI+XG4gICAgICA8aDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbnVsbH0+e3RpdGxlfTwvYnV0dG9uPlxuICAgICAgPC9oMT5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNoaWxkcmVuXCI+e2NoaWxkcmVufTwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFjayh7IHgsIHN0eWxlIH0pIHtcbiAgLy8gVGV4dCBkb2VzIG5vdCBzaG93IHVudGlsIG1pblhcbiAgY29uc3QgbWluWCA9IDAuNjtcbiAgY29uc3QgZGlzcGxheSA9IHggPiBtaW5YID8gbnVsbCA6IFwibm9uZVwiO1xuICBjb25zdCBwcm9ncmVzcyA9ICh4IC0gbWluWCkgLyAoMSAtIG1pblgpO1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2VsZWN0U2VjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY29tYmluZWRTdHlsZSA9IHtcbiAgICBkaXNwbGF5LFxuICAgIG9wYWNpdHk6IHByb2dyZXNzLFxuICAgIGZpbHRlcjogYGJyaWdodG5lc3MoJHtwcm9ncmVzc30pYCxcbiAgICAuLi5zdHlsZSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tcIiBzdHlsZT17Y29tYmluZWRTdHlsZX0+XG4gICAgICA8QmFja1NlY3Rpb24gdGl0bGU9XCJDaHJpcyBCb2xpblwiPlxuICAgICAgICBTb2Z0d2FyZSBlbmdpbmVlciArIGFydGlzdCBpbiBEZW52ZXIuIEVuZ2luZWVyaW5nLCBGb3JtaWRhYmxlLiBGb3VuZGVyLFxuICAgICAgICBUaGUgRGlzY29ubmVjdFxuICAgICAgPC9CYWNrU2VjdGlvbj5cbiAgICAgIDxCYWNrU2VjdGlvbiB0aXRsZT1cIlByb2plY3RzXCI+XG4gICAgICAgIE9mZmxpbmUgT25seSwgVGVzc2VsbGF0ZSwgU2t5Y29pbnMsIEVsZW1lbnRzLCBFbmNoaXJpZGlvbiwgVHJhdmVscyxcbiAgICAgICAgU2hpcHdyZWNrZWRcbiAgICAgIDwvQmFja1NlY3Rpb24+XG4gICAgICA8QmFja1NlY3Rpb24gdGl0bGU9XCJUYWxrcyAmIFByZXNzXCI+XG4gICAgICAgIFNYU1cgbWUgQ29udmVudGlvbiwgRGlub3NhdXJKUywgRGVidWdnaW5nLCBPZmZsaW5lIFdlYnNpdGVzLCBWaWNlLFxuICAgICAgICBMaWZlaGFja2VyLCBDQkMsIENKUiwgTGUgTW9uZGUsIFRoZSBOZXh0IFdlYlxuICAgICAgPC9CYWNrU2VjdGlvbj5cbiAgICAgIDxCYWNrU2VjdGlvbiB0aXRsZT1cIkNWXCI+XG4gICAgICAgIFZQIEVuZ2luZWVyaW5nLCBGb3JtaWRhYmxlLiBBZGp1bmN0LCBVIG9mIERlbnZlci4gRW5naW5lZXIsIEp1bXBzaGVsbC5cbiAgICAgICAgRGF0YSBzY2llbnRpc3QsIEF1dG90ZWdyaXR5LiBSZXNlYXJjaGVyLCBNSVQgRUJNIExhYi4gRW5naW5lZXIsIE5JIEVkdSDihpJcbiAgICAgICAgTWFzdGVy4oCZcyBDb21wdXRhdGlvbmFsIEVuZ2luZWVyaW5nLCBNSVQsIG51bWVyaWNhbCBzaW11bGF0aW9uIG9mXG4gICAgICAgIGVudmlyb25tZW50YWwgaW1wYWN0LiBCUyBNZWNoYW5pY2FsIEVuZ2luZWVyaW5nLCBVIG9mIE5lYnJhc2thXG4gICAgICA8L0JhY2tTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKlxuY3VycmVudDpcbkNocmlzIEJvbGluXG5Qcm9qZWN0c1xuVGFsa3NcblByZXNzXG5Xb3JrXG5FZHVcbkNvbnRhY3RcblxuQ2hyaXMgQm9saW4gKGJhc2ljcyBhbmQgY29udGFjdClcblByb2plY3RzXG5UYWxrcyBhbmQgUHJlc3NcbkNWXG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/back.js\n");

/***/ })

})
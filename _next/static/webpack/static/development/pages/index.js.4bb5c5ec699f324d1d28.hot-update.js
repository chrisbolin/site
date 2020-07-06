webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back.js":
/*!*********************!*\
  !*** ./src/back.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Back; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _back_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-section */ \"./src/back-section.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar backSectionElements = [__jsx(_back_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  title: \"Chris Bolin\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }\n}, \"Software engineer + artist in Denver. Engineering leadership at\", \" \", __jsx(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  name: \"formidable\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, \"Formidable\"), \". Founder of\", \" \", __jsx(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  name: \"disconnect\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}, \"The Disconnect\"), \".\"), __jsx(_back_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  title: \"Projects\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }\n}, \"Offline Only, Tessellate, Skycoins, Elements, Enchiridion, Travels, Shipwrecked\"), __jsx(_back_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  title: \"Talks & Press\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }\n}, \"SXSW me Convention, DinosaurJS, Debugging, Offline Websites, Vice, Lifehacker, CBC, CJR, Le Monde, The Next Web\"), __jsx(_back_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  title: \"CV\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }\n}, \"VP Engineering, Formidable. Adjunct, U of Denver. Engineer, Jumpshell. Data scientist, Autotegrity. Researcher, MIT EBM Lab. Engineer, NI Edu \\u2192 Master\\u2019s Computational Engineering, MIT, numerical simulation of environmental impact. BS Mechanical Engineering, U of Nebraska\")];\nfunction Back(_ref) {\n  _s();\n\n  var x = _ref.x,\n      style = _ref.style;\n  // Text does not show until minX\n  var minX = 0.6;\n  var display = x > minX ? null : \"none\";\n  var progress = (x - minX) / (1 - minX);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeSectionIndex = _useState[0],\n      setActiveSectionIndex = _useState[1];\n\n  var clearActiveSectionIndex = function clearActiveSectionIndex(e) {\n    setActiveSectionIndex(null);\n    e.stopPropagation();\n  };\n\n  var combinedStyle = _objectSpread({\n    display: display,\n    opacity: progress,\n    filter: \"brightness(\".concat(progress, \")\")\n  }, style);\n\n  return __jsx(\"div\", {\n    className: \"Back\",\n    style: combinedStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, backSectionElements.map(function (element, index) {\n    return (// index is a unique ID, as the number and order of this will not change at runtime\n      react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {\n        index: index,\n        key: index,\n        onActivate: function onActivate() {\n          return setActiveSectionIndex(index);\n        },\n        onDeactivate: clearActiveSectionIndex,\n        active: index === activeSectionIndex\n      })\n    );\n  }));\n}\n\n_s(Back, \"v6IdQGHXEs5ptOMdUh2aTTL+qbA=\");\n\n_c = Back;\n\nvar _c;\n\n$RefreshReg$(_c, \"Back\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay5qcz82YmUzIl0sIm5hbWVzIjpbImJhY2tTZWN0aW9uRWxlbWVudHMiLCJCYWNrIiwieCIsInN0eWxlIiwibWluWCIsImRpc3BsYXkiLCJwcm9ncmVzcyIsInVzZVN0YXRlIiwiYWN0aXZlU2VjdGlvbkluZGV4Iiwic2V0QWN0aXZlU2VjdGlvbkluZGV4IiwiY2xlYXJBY3RpdmVTZWN0aW9uSW5kZXgiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29tYmluZWRTdHlsZSIsIm9wYWNpdHkiLCJmaWx0ZXIiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImtleSIsIm9uQWN0aXZhdGUiLCJvbkRlYWN0aXZhdGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxDQUMxQixNQUFDLHFEQUFEO0FBQWEsT0FBSyxFQUFDLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBQ2tFLEdBRGxFLEVBRUUsTUFBQyw2Q0FBRDtBQUFNLE1BQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsa0JBRXdELEdBRnhELEVBR0UsTUFBQyw2Q0FBRDtBQUFNLE1BQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsTUFEMEIsRUFNMUIsTUFBQyxxREFBRDtBQUFhLE9BQUssRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQU4wQixFQVUxQixNQUFDLHFEQUFEO0FBQWEsT0FBSyxFQUFDLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBVjBCLEVBYzFCLE1BQUMscURBQUQ7QUFBYSxPQUFLLEVBQUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrUkFkMEIsQ0FBNUI7QUFzQmUsU0FBU0MsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLENBQVksUUFBWkEsQ0FBWTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN6QztBQUNBLE1BQU1DLElBQUksR0FBRyxHQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCxDQUFDLEdBQUdFLElBQUosR0FBVyxJQUFYLEdBQWtCLE1BQWxDO0FBQ0EsTUFBTUUsUUFBUSxHQUFHLENBQUNKLENBQUMsR0FBR0UsSUFBTCxLQUFjLElBQUlBLElBQWxCLENBQWpCOztBQUp5QyxrQkFLV0csc0RBQVEsQ0FBQyxJQUFELENBTG5CO0FBQUEsTUFLbENDLGtCQUxrQztBQUFBLE1BS2RDLHFCQUxjOztBQU16QyxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLENBQUQsRUFBTztBQUNyQ0YseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNBRSxLQUFDLENBQUNDLGVBQUY7QUFDRCxHQUhEOztBQUlBLE1BQU1DLGFBQWE7QUFDakJSLFdBQU8sRUFBUEEsT0FEaUI7QUFFakJTLFdBQU8sRUFBRVIsUUFGUTtBQUdqQlMsVUFBTSx1QkFBZ0JULFFBQWhCO0FBSFcsS0FJZEgsS0FKYyxDQUFuQjs7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBSyxFQUFFVSxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLG1CQUFtQixDQUFDZ0IsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsV0FDdkI7QUFDQUMsa0RBQUssQ0FBQ0MsWUFBTixDQUFtQkgsT0FBbkIsRUFBNEI7QUFDMUJDLGFBQUssRUFBTEEsS0FEMEI7QUFFMUJHLFdBQUcsRUFBRUgsS0FGcUI7QUFHMUJJLGtCQUFVLEVBQUU7QUFBQSxpQkFBTWIscUJBQXFCLENBQUNTLEtBQUQsQ0FBM0I7QUFBQSxTQUhjO0FBSTFCSyxvQkFBWSxFQUFFYix1QkFKWTtBQUsxQmMsY0FBTSxFQUFFTixLQUFLLEtBQUtWO0FBTFEsT0FBNUI7QUFGdUI7QUFBQSxHQUF4QixDQURILENBREY7QUFjRDs7R0EvQnVCUCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL2JhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQmFja1NlY3Rpb24gZnJvbSBcIi4vYmFjay1zZWN0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbmNvbnN0IGJhY2tTZWN0aW9uRWxlbWVudHMgPSBbXG4gIDxCYWNrU2VjdGlvbiB0aXRsZT1cIkNocmlzIEJvbGluXCI+XG4gICAgU29mdHdhcmUgZW5naW5lZXIgKyBhcnRpc3QgaW4gRGVudmVyLiBFbmdpbmVlcmluZyBsZWFkZXJzaGlwIGF0e1wiIFwifVxuICAgIDxMaW5rIG5hbWU9XCJmb3JtaWRhYmxlXCI+Rm9ybWlkYWJsZTwvTGluaz4uIEZvdW5kZXIgb2Z7XCIgXCJ9XG4gICAgPExpbmsgbmFtZT1cImRpc2Nvbm5lY3RcIj5UaGUgRGlzY29ubmVjdDwvTGluaz4uXG4gIDwvQmFja1NlY3Rpb24+LFxuICA8QmFja1NlY3Rpb24gdGl0bGU9XCJQcm9qZWN0c1wiPlxuICAgIE9mZmxpbmUgT25seSwgVGVzc2VsbGF0ZSwgU2t5Y29pbnMsIEVsZW1lbnRzLCBFbmNoaXJpZGlvbiwgVHJhdmVscyxcbiAgICBTaGlwd3JlY2tlZFxuICA8L0JhY2tTZWN0aW9uPixcbiAgPEJhY2tTZWN0aW9uIHRpdGxlPVwiVGFsa3MgJiBQcmVzc1wiPlxuICAgIFNYU1cgbWUgQ29udmVudGlvbiwgRGlub3NhdXJKUywgRGVidWdnaW5nLCBPZmZsaW5lIFdlYnNpdGVzLCBWaWNlLFxuICAgIExpZmVoYWNrZXIsIENCQywgQ0pSLCBMZSBNb25kZSwgVGhlIE5leHQgV2ViXG4gIDwvQmFja1NlY3Rpb24+LFxuICA8QmFja1NlY3Rpb24gdGl0bGU9XCJDVlwiPlxuICAgIFZQIEVuZ2luZWVyaW5nLCBGb3JtaWRhYmxlLiBBZGp1bmN0LCBVIG9mIERlbnZlci4gRW5naW5lZXIsIEp1bXBzaGVsbC4gRGF0YVxuICAgIHNjaWVudGlzdCwgQXV0b3RlZ3JpdHkuIFJlc2VhcmNoZXIsIE1JVCBFQk0gTGFiLiBFbmdpbmVlciwgTkkgRWR1IOKGkiBNYXN0ZXLigJlzXG4gICAgQ29tcHV0YXRpb25hbCBFbmdpbmVlcmluZywgTUlULCBudW1lcmljYWwgc2ltdWxhdGlvbiBvZiBlbnZpcm9ubWVudGFsXG4gICAgaW1wYWN0LiBCUyBNZWNoYW5pY2FsIEVuZ2luZWVyaW5nLCBVIG9mIE5lYnJhc2thXG4gIDwvQmFja1NlY3Rpb24+LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFjayh7IHgsIHN0eWxlIH0pIHtcbiAgLy8gVGV4dCBkb2VzIG5vdCBzaG93IHVudGlsIG1pblhcbiAgY29uc3QgbWluWCA9IDAuNjtcbiAgY29uc3QgZGlzcGxheSA9IHggPiBtaW5YID8gbnVsbCA6IFwibm9uZVwiO1xuICBjb25zdCBwcm9ncmVzcyA9ICh4IC0gbWluWCkgLyAoMSAtIG1pblgpO1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbkluZGV4LCBzZXRBY3RpdmVTZWN0aW9uSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGNsZWFyQWN0aXZlU2VjdGlvbkluZGV4ID0gKGUpID0+IHtcbiAgICBzZXRBY3RpdmVTZWN0aW9uSW5kZXgobnVsbCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcbiAgY29uc3QgY29tYmluZWRTdHlsZSA9IHtcbiAgICBkaXNwbGF5LFxuICAgIG9wYWNpdHk6IHByb2dyZXNzLFxuICAgIGZpbHRlcjogYGJyaWdodG5lc3MoJHtwcm9ncmVzc30pYCxcbiAgICAuLi5zdHlsZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFja1wiIHN0eWxlPXtjb21iaW5lZFN0eWxlfT5cbiAgICAgIHtiYWNrU2VjdGlvbkVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIC8vIGluZGV4IGlzIGEgdW5pcXVlIElELCBhcyB0aGUgbnVtYmVyIGFuZCBvcmRlciBvZiB0aGlzIHdpbGwgbm90IGNoYW5nZSBhdCBydW50aW1lXG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBvbkFjdGl2YXRlOiAoKSA9PiBzZXRBY3RpdmVTZWN0aW9uSW5kZXgoaW5kZXgpLFxuICAgICAgICAgIG9uRGVhY3RpdmF0ZTogY2xlYXJBY3RpdmVTZWN0aW9uSW5kZXgsXG4gICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gYWN0aXZlU2VjdGlvbkluZGV4LFxuICAgICAgICB9KVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/back.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back.js":
/*!*********************!*\
  !*** ./src/back.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Back; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction BackSection(_ref) {\n  var title = _ref.title,\n      children = _ref.children,\n      onActivate = _ref.onActivate,\n      onDeactivate = _ref.onDeactivate,\n      active = _ref.active,\n      index = _ref.index;\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  return __jsx(\"div\", {\n    style: {\n      transformOrigin: transformOrigin\n    },\n    className: \"BackSection \".concat(active && \"active\"),\n    onClick: onActivate,\n    onKeyDown: function onKeyDown(e) {\n      return console.log(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-deactivate\",\n    onClick: onDeactivate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"X\"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: onActivate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, title)));\n}\n\n_c = BackSection;\nvar backSectionElements = [__jsx(BackSection, {\n  title: \"Chris Bolin\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }\n}, \"Software engineer + artist in Denver. Engineering, Formidable. Founder, The Disconnect\"), __jsx(BackSection, {\n  title: \"Projects\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 3\n  }\n}, \"Offline Only, Tessellate, Skycoins, Elements, Enchiridion, Travels, Shipwrecked\"), __jsx(BackSection, {\n  title: \"Talks & Press\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 3\n  }\n}, \"SXSW me Convention, DinosaurJS, Debugging, Offline Websites, Vice, Lifehacker, CBC, CJR, Le Monde, The Next Web\"), __jsx(BackSection, {\n  title: \"CV\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 3\n  }\n}, \"VP Engineering, Formidable. Adjunct, U of Denver. Engineer, Jumpshell. Data scientist, Autotegrity. Researcher, MIT EBM Lab. Engineer, NI Edu \\u2192 Master\\u2019s Computational Engineering, MIT, numerical simulation of environmental impact. BS Mechanical Engineering, U of Nebraska\")];\nfunction Back(_ref2) {\n  _s();\n\n  var x = _ref2.x,\n      style = _ref2.style;\n  // Text does not show until minX\n  var minX = 0.6;\n  var display = x > minX ? null : \"none\";\n  var progress = (x - minX) / (1 - minX);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeSectionIndex = _useState[0],\n      setActiveSectionIndex = _useState[1];\n\n  var clearActiveSectionIndex = function clearActiveSectionIndex(e) {\n    setActiveSectionIndex(null);\n    e.stopPropagation();\n  };\n\n  var combinedStyle = _objectSpread({\n    display: display,\n    opacity: progress,\n    filter: \"brightness(\".concat(progress, \")\")\n  }, style);\n\n  return __jsx(\"div\", {\n    className: \"Back\",\n    style: combinedStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, backSectionElements.map(function (element, index) {\n    return (// index is a unique ID, as the number and order of this will not change at runtime\n      react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {\n        index: index,\n        key: index,\n        onActivate: function onActivate() {\n          return setActiveSectionIndex(index);\n        },\n        onDeactivate: clearActiveSectionIndex,\n        active: index === activeSectionIndex\n      })\n    );\n  }));\n}\n/*\ncurrent:\nChris Bolin\nProjects\nTalks\nPress\nWork\nEdu\nContact\n\nChris Bolin (basics and contact)\nProjects\nTalks and Press\nCV\n*/\n\n_s(Back, \"v6IdQGHXEs5ptOMdUh2aTTL+qbA=\");\n\n_c2 = Back;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BackSection\");\n$RefreshReg$(_c2, \"Back\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay5qcz82YmUzIl0sIm5hbWVzIjpbIkJhY2tTZWN0aW9uIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9uQWN0aXZhdGUiLCJvbkRlYWN0aXZhdGUiLCJhY3RpdmUiLCJpbmRleCIsInRyYW5zZm9ybU9yaWdpbiIsImUiLCJjb25zb2xlIiwibG9nIiwiYmFja1NlY3Rpb25FbGVtZW50cyIsIkJhY2siLCJ4Iiwic3R5bGUiLCJtaW5YIiwiZGlzcGxheSIsInByb2dyZXNzIiwidXNlU3RhdGUiLCJhY3RpdmVTZWN0aW9uSW5kZXgiLCJzZXRBY3RpdmVTZWN0aW9uSW5kZXgiLCJjbGVhckFjdGl2ZVNlY3Rpb25JbmRleCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbWJpbmVkU3R5bGUiLCJvcGFjaXR5IiwiZmlsdGVyIiwibWFwIiwiZWxlbWVudCIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFdBQVQsT0FPRztBQUFBLE1BTkRDLEtBTUMsUUFOREEsS0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLE1BRUMsUUFGREEsTUFFQztBQUFBLE1BRERDLEtBQ0MsUUFEREEsS0FDQztBQUNELE1BQU1DLGVBQWUsYUFBTUQsS0FBSyxHQUFHLENBQVIsR0FBWSxLQUFaLEdBQW9CLFFBQTFCLGNBQ25CQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsTUFBbEIsR0FBMkIsT0FEUixDQUFyQjtBQUdBLFNBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBZkE7QUFBRixLQURUO0FBRUUsYUFBUyx3QkFBaUJGLE1BQU0sSUFBSSxRQUEzQixDQUZYO0FBR0UsV0FBTyxFQUFFRixVQUhYO0FBSUUsYUFBUyxFQUFFLG1CQUFDSyxDQUFEO0FBQUEsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBUDtBQUFBLEtBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSCxNQUFNLElBQ0w7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQTJDLFdBQU8sRUFBRUQsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVBKLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRCxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCRixLQUE5QixDQURGLENBWEYsQ0FERjtBQWtCRDs7S0E3QlFELFc7QUErQlQsSUFBTVcsbUJBQW1CLEdBQUcsQ0FDMUIsTUFBQyxXQUFEO0FBQWEsT0FBSyxFQUFDLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEZBRDBCLEVBSzFCLE1BQUMsV0FBRDtBQUFhLE9BQUssRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQUwwQixFQVMxQixNQUFDLFdBQUQ7QUFBYSxPQUFLLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSEFUMEIsRUFhMUIsTUFBQyxXQUFEO0FBQWEsT0FBSyxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1JBYjBCLENBQTVCO0FBcUJlLFNBQVNDLElBQVQsUUFBNEI7QUFBQTs7QUFBQSxNQUFaQyxDQUFZLFNBQVpBLENBQVk7QUFBQSxNQUFUQyxLQUFTLFNBQVRBLEtBQVM7QUFDekM7QUFDQSxNQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsQ0FBQyxHQUFHRSxJQUFKLEdBQVcsSUFBWCxHQUFrQixNQUFsQztBQUNBLE1BQU1FLFFBQVEsR0FBRyxDQUFDSixDQUFDLEdBQUdFLElBQUwsS0FBYyxJQUFJQSxJQUFsQixDQUFqQjs7QUFKeUMsa0JBS1dHLHNEQUFRLENBQUMsSUFBRCxDQUxuQjtBQUFBLE1BS2xDQyxrQkFMa0M7QUFBQSxNQUtkQyxxQkFMYzs7QUFNekMsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDYixDQUFELEVBQU87QUFDckNZLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDQVosS0FBQyxDQUFDYyxlQUFGO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxhQUFhO0FBQ2pCUCxXQUFPLEVBQVBBLE9BRGlCO0FBRWpCUSxXQUFPLEVBQUVQLFFBRlE7QUFHakJRLFVBQU0sdUJBQWdCUixRQUFoQjtBQUhXLEtBSWRILEtBSmMsQ0FBbkI7O0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBRVMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixtQkFBbUIsQ0FBQ2UsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVckIsS0FBVjtBQUFBLFdBQ3ZCO0FBQ0FzQixrREFBSyxDQUFDQyxZQUFOLENBQW1CRixPQUFuQixFQUE0QjtBQUMxQnJCLGFBQUssRUFBTEEsS0FEMEI7QUFFMUJ3QixXQUFHLEVBQUV4QixLQUZxQjtBQUcxQkgsa0JBQVUsRUFBRTtBQUFBLGlCQUFNaUIscUJBQXFCLENBQUNkLEtBQUQsQ0FBM0I7QUFBQSxTQUhjO0FBSTFCRixvQkFBWSxFQUFFaUIsdUJBSlk7QUFLMUJoQixjQUFNLEVBQUVDLEtBQUssS0FBS2E7QUFMUSxPQUE1QjtBQUZ1QjtBQUFBLEdBQXhCLENBREgsQ0FERjtBQWNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FqQ3dCUCxJOztNQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL2JhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBCYWNrU2VjdGlvbih7XG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgb25BY3RpdmF0ZSxcbiAgb25EZWFjdGl2YXRlLFxuICBhY3RpdmUsXG4gIGluZGV4LFxufSkge1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHtpbmRleCA8IDIgPyBcInRvcFwiIDogXCJib3R0b21cIn0gJHtcbiAgICBpbmRleCAlIDIgPT09IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIlxuICB9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW4gfX1cbiAgICAgIGNsYXNzTmFtZT17YEJhY2tTZWN0aW9uICR7YWN0aXZlICYmIFwiYWN0aXZlXCJ9YH1cbiAgICAgIG9uQ2xpY2s9e29uQWN0aXZhdGV9XG4gICAgICBvbktleURvd249eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICA+XG4gICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1kZWFjdGl2YXRlXCIgb25DbGljaz17b25EZWFjdGl2YXRlfT5cbiAgICAgICAgICBYXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxoMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkFjdGl2YXRlfT57dGl0bGV9PC9idXR0b24+XG4gICAgICA8L2gxPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiQmFja1NlY3Rpb24tY2hpbGRyZW5cIj57Y2hpbGRyZW59PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBiYWNrU2VjdGlvbkVsZW1lbnRzID0gW1xuICA8QmFja1NlY3Rpb24gdGl0bGU9XCJDaHJpcyBCb2xpblwiPlxuICAgIFNvZnR3YXJlIGVuZ2luZWVyICsgYXJ0aXN0IGluIERlbnZlci4gRW5naW5lZXJpbmcsIEZvcm1pZGFibGUuIEZvdW5kZXIsIFRoZVxuICAgIERpc2Nvbm5lY3RcbiAgPC9CYWNrU2VjdGlvbj4sXG4gIDxCYWNrU2VjdGlvbiB0aXRsZT1cIlByb2plY3RzXCI+XG4gICAgT2ZmbGluZSBPbmx5LCBUZXNzZWxsYXRlLCBTa3ljb2lucywgRWxlbWVudHMsIEVuY2hpcmlkaW9uLCBUcmF2ZWxzLFxuICAgIFNoaXB3cmVja2VkXG4gIDwvQmFja1NlY3Rpb24+LFxuICA8QmFja1NlY3Rpb24gdGl0bGU9XCJUYWxrcyAmIFByZXNzXCI+XG4gICAgU1hTVyBtZSBDb252ZW50aW9uLCBEaW5vc2F1ckpTLCBEZWJ1Z2dpbmcsIE9mZmxpbmUgV2Vic2l0ZXMsIFZpY2UsXG4gICAgTGlmZWhhY2tlciwgQ0JDLCBDSlIsIExlIE1vbmRlLCBUaGUgTmV4dCBXZWJcbiAgPC9CYWNrU2VjdGlvbj4sXG4gIDxCYWNrU2VjdGlvbiB0aXRsZT1cIkNWXCI+XG4gICAgVlAgRW5naW5lZXJpbmcsIEZvcm1pZGFibGUuIEFkanVuY3QsIFUgb2YgRGVudmVyLiBFbmdpbmVlciwgSnVtcHNoZWxsLiBEYXRhXG4gICAgc2NpZW50aXN0LCBBdXRvdGVncml0eS4gUmVzZWFyY2hlciwgTUlUIEVCTSBMYWIuIEVuZ2luZWVyLCBOSSBFZHUg4oaSIE1hc3RlcuKAmXNcbiAgICBDb21wdXRhdGlvbmFsIEVuZ2luZWVyaW5nLCBNSVQsIG51bWVyaWNhbCBzaW11bGF0aW9uIG9mIGVudmlyb25tZW50YWxcbiAgICBpbXBhY3QuIEJTIE1lY2hhbmljYWwgRW5naW5lZXJpbmcsIFUgb2YgTmVicmFza2FcbiAgPC9CYWNrU2VjdGlvbj4sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrKHsgeCwgc3R5bGUgfSkge1xuICAvLyBUZXh0IGRvZXMgbm90IHNob3cgdW50aWwgbWluWFxuICBjb25zdCBtaW5YID0gMC42O1xuICBjb25zdCBkaXNwbGF5ID0geCA+IG1pblggPyBudWxsIDogXCJub25lXCI7XG4gIGNvbnN0IHByb2dyZXNzID0gKHggLSBtaW5YKSAvICgxIC0gbWluWCk7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uSW5kZXgsIHNldEFjdGl2ZVNlY3Rpb25JbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2xlYXJBY3RpdmVTZWN0aW9uSW5kZXggPSAoZSkgPT4ge1xuICAgIHNldEFjdGl2ZVNlY3Rpb25JbmRleChudWxsKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuICBjb25zdCBjb21iaW5lZFN0eWxlID0ge1xuICAgIGRpc3BsYXksXG4gICAgb3BhY2l0eTogcHJvZ3Jlc3MsXG4gICAgZmlsdGVyOiBgYnJpZ2h0bmVzcygke3Byb2dyZXNzfSlgLFxuICAgIC4uLnN0eWxlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrXCIgc3R5bGU9e2NvbWJpbmVkU3R5bGV9PlxuICAgICAge2JhY2tTZWN0aW9uRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgLy8gaW5kZXggaXMgYSB1bmlxdWUgSUQsIGFzIHRoZSBudW1iZXIgYW5kIG9yZGVyIG9mIHRoaXMgd2lsbCBub3QgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIG9uQWN0aXZhdGU6ICgpID0+IHNldEFjdGl2ZVNlY3Rpb25JbmRleChpbmRleCksXG4gICAgICAgICAgb25EZWFjdGl2YXRlOiBjbGVhckFjdGl2ZVNlY3Rpb25JbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSBhY3RpdmVTZWN0aW9uSW5kZXgsXG4gICAgICAgIH0pXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKlxuY3VycmVudDpcbkNocmlzIEJvbGluXG5Qcm9qZWN0c1xuVGFsa3NcblByZXNzXG5Xb3JrXG5FZHVcbkNvbnRhY3RcblxuQ2hyaXMgQm9saW4gKGJhc2ljcyBhbmQgY29udGFjdClcblByb2plY3RzXG5UYWxrcyBhbmQgUHJlc3NcbkNWXG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/back.js\n");

/***/ })

})
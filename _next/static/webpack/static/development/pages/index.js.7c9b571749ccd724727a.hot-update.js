webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/link.js":
/*!*****************************!*\
  !*** ./pages/index/link.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/pages/index/link.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\nvar links = {\n  // main\n  \"The Disconnect\": \"https://thedisconnect.co/\",\n  Formidable: \"https://formidable.com/\",\n  // work\n  \"U of Denver\": \"https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs\",\n  Jumpshell: \"https://www.jumpshell.com/\",\n  Autotegrity: \"https://www.cogolabs.com/portfolio/autotegrity\",\n  NI: \"http://www.ni.com/\",\n  \"MIT EBM Lab\": \"http://web.mit.edu/ebm/www/\",\n  // projects\n  \"Offline Only\": \"https://chris.bolin.co/offline/\",\n  Elements: \"https://chris.bolin.co/elements/\",\n  Tessellate: \"https://chris.bolin.co/tessellate/\",\n  Enchiridion: \"https://chris.bolin.co/enchiridion/\",\n  Skycoins: \"https://chris.bolin.co/skycoins/\",\n  Shipwrecked: \"http://www.blurb.com/books/1234410-shipwrecked\",\n  Travels: \"https://rookievagabonds.tumblr.com/\",\n  // talks\n  DinosaurJS: \"https://www.youtube.com/watch?v=nhuvY0CT064\",\n  \"SXSW me Convention\": \"https://www.youtube.com/watch?v=6wjqLAaCAyw\",\n  \"Offline Websites\": \"https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s\",\n  Debugging: \"https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035\",\n  // press\n  Lifehacker: \"https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654\",\n  Vice: \"https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline\",\n  CBC: \"http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329\",\n  CJR: \"https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php\",\n  \"Le Monde\": \"http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html\",\n  \"The Next Web\": \"https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/\",\n  // edu\n  \"Computational Engineering\": \"https://computationalengineering.mit.edu/\",\n  \"numerical simulation of environmental impact\": \"http://dspace.mit.edu/handle/1721.1/82189\",\n  Email: \"mailto:bolin.chris@gmail.com\"\n};\n\nvar Link = function Link(props) {\n  return __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    href: links[props.children] || console.error(\"NOT FOUND:\", props.children),\n    rel: \"noopener noreferrer\"\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 3\n    }\n  }));\n};\n\n_c = Link;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\n\nvar _c;\n\n$RefreshReg$(_c, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9saW5rLmpzPzE3NWUiXSwibmFtZXMiOlsibGlua3MiLCJGb3JtaWRhYmxlIiwiSnVtcHNoZWxsIiwiQXV0b3RlZ3JpdHkiLCJOSSIsIkVsZW1lbnRzIiwiVGVzc2VsbGF0ZSIsIkVuY2hpcmlkaW9uIiwiU2t5Y29pbnMiLCJTaGlwd3JlY2tlZCIsIlRyYXZlbHMiLCJEaW5vc2F1ckpTIiwiRGVidWdnaW5nIiwiTGlmZWhhY2tlciIsIlZpY2UiLCJDQkMiLCJDSlIiLCJFbWFpbCIsIkxpbmsiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRztBQUNaO0FBQ0Esb0JBQWtCLDJCQUZOO0FBR1pDLFlBQVUsRUFBRSx5QkFIQTtBQUtaO0FBQ0EsaUJBQ0UsMEVBUFU7QUFRWkMsV0FBUyxFQUFFLDRCQVJDO0FBU1pDLGFBQVcsRUFBRSxnREFURDtBQVVaQyxJQUFFLEVBQUUsb0JBVlE7QUFXWixpQkFBZSw2QkFYSDtBQWFaO0FBQ0Esa0JBQWdCLGlDQWRKO0FBZVpDLFVBQVEsRUFBRSxrQ0FmRTtBQWdCWkMsWUFBVSxFQUFFLG9DQWhCQTtBQWlCWkMsYUFBVyxFQUFFLHFDQWpCRDtBQWtCWkMsVUFBUSxFQUFFLGtDQWxCRTtBQW1CWkMsYUFBVyxFQUFFLGdEQW5CRDtBQW9CWkMsU0FBTyxFQUFFLHFDQXBCRztBQXNCWjtBQUNBQyxZQUFVLEVBQUUsNkNBdkJBO0FBd0JaLHdCQUFzQiw2Q0F4QlY7QUF5Qlosc0JBQW9CLHFEQXpCUjtBQTBCWkMsV0FBUyxFQUFFLG9EQTFCQztBQTRCWjtBQUNBQyxZQUFVLEVBQ1IsMkZBOUJVO0FBK0JaQyxNQUFJLEVBQ0YsOEZBaENVO0FBaUNaQyxLQUFHLEVBQ0QsdUZBbENVO0FBbUNaQyxLQUFHLEVBQ0QsNEVBcENVO0FBcUNaLGNBQ0Usc0pBdENVO0FBdUNaLGtCQUNFLGlIQXhDVTtBQTBDWjtBQUNBLCtCQUE2QiwyQ0EzQ2pCO0FBNENaLGtEQUNFLDJDQTdDVTtBQThDWkMsT0FBSyxFQUFFO0FBOUNLLENBQWQ7O0FBaURBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQ0UsUUFBSSxFQUFFbkIsS0FBSyxDQUFDbUIsS0FBSyxDQUFDQyxRQUFQLENBQUwsSUFBeUJDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFlBQWQsRUFBNEJILEtBQUssQ0FBQ0MsUUFBbEMsQ0FEakM7QUFFRSxPQUFHLEVBQUM7QUFGTixLQUdNRCxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEVztBQUFBLENBQWI7O0tBQU1ELEk7QUFRU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC9saW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlua3MgPSB7XG4gIC8vIG1haW5cbiAgXCJUaGUgRGlzY29ubmVjdFwiOiBcImh0dHBzOi8vdGhlZGlzY29ubmVjdC5jby9cIixcbiAgRm9ybWlkYWJsZTogXCJodHRwczovL2Zvcm1pZGFibGUuY29tL1wiLFxuXG4gIC8vIHdvcmtcbiAgXCJVIG9mIERlbnZlclwiOlxuICAgIFwiaHR0cHM6Ly9kYW5pZWxzLmR1LmVkdS9lbnRyZXByZW5ldXJzaGlwL2VudHJlcHJlbmV1cnNoaXAtZGVncmVlLXByb2dyYW1zXCIsXG4gIEp1bXBzaGVsbDogXCJodHRwczovL3d3dy5qdW1wc2hlbGwuY29tL1wiLFxuICBBdXRvdGVncml0eTogXCJodHRwczovL3d3dy5jb2dvbGFicy5jb20vcG9ydGZvbGlvL2F1dG90ZWdyaXR5XCIsXG4gIE5JOiBcImh0dHA6Ly93d3cubmkuY29tL1wiLFxuICBcIk1JVCBFQk0gTGFiXCI6IFwiaHR0cDovL3dlYi5taXQuZWR1L2VibS93d3cvXCIsXG5cbiAgLy8gcHJvamVjdHNcbiAgXCJPZmZsaW5lIE9ubHlcIjogXCJodHRwczovL2NocmlzLmJvbGluLmNvL29mZmxpbmUvXCIsXG4gIEVsZW1lbnRzOiBcImh0dHBzOi8vY2hyaXMuYm9saW4uY28vZWxlbWVudHMvXCIsXG4gIFRlc3NlbGxhdGU6IFwiaHR0cHM6Ly9jaHJpcy5ib2xpbi5jby90ZXNzZWxsYXRlL1wiLFxuICBFbmNoaXJpZGlvbjogXCJodHRwczovL2NocmlzLmJvbGluLmNvL2VuY2hpcmlkaW9uL1wiLFxuICBTa3ljb2luczogXCJodHRwczovL2NocmlzLmJvbGluLmNvL3NreWNvaW5zL1wiLFxuICBTaGlwd3JlY2tlZDogXCJodHRwOi8vd3d3LmJsdXJiLmNvbS9ib29rcy8xMjM0NDEwLXNoaXB3cmVja2VkXCIsXG4gIFRyYXZlbHM6IFwiaHR0cHM6Ly9yb29raWV2YWdhYm9uZHMudHVtYmxyLmNvbS9cIixcblxuICAvLyB0YWxrc1xuICBEaW5vc2F1ckpTOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bmh1dlkwQ1QwNjRcIixcbiAgXCJTWFNXIG1lIENvbnZlbnRpb25cIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTZ3anFMQWFDQXl3XCIsXG4gIFwiT2ZmbGluZSBXZWJzaXRlc1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aWF2QzFvV3Z0SjgmdD0yNTkxc1wiLFxuICBEZWJ1Z2dpbmc6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jY0c5TDJQZzRpbyZ0PTEwMzVcIixcblxuICAvLyBwcmVzc1xuICBMaWZlaGFja2VyOlxuICAgIFwiaHR0cHM6Ly9saWZlaGFja2VyLmNvbS95b3UtY2FudC1yZWFkLXRoaXMtd2Vic2l0ZS11bnRpbC15b3UtdHVybi1vZmYteW91ci1pbnRlLTE4MjI3NzY2NTRcIixcbiAgVmljZTpcbiAgICBcImh0dHBzOi8vbW90aGVyYm9hcmQudmljZS5jb20vZW5fdXMvYXJ0aWNsZS9renpnam4vdGhpcy13ZWJzaXRlLW9ubHktd29ya3Mtd2hlbi15b3VyZS1vZmZsaW5lXCIsXG4gIENCQzpcbiAgICBcImh0dHA6Ly93d3cuY2JjLmNhL3JhZGlvL3NwYXJrL3dhbnQtdG8tbG9vay1hdC10aGlzLWd1eS1zLXdlYnNpdGUtZ28tb2ZmbGluZS0xLjQyODEzMjlcIixcbiAgQ0pSOlxuICAgIFwiaHR0cHM6Ly93d3cuY2pyLm9yZy9pbm5vdmF0aW9ucy9kaXNjb25uZWN0LW1hZ2F6aW5lLW9ubHktd29ya3Mtb2ZmbGluZS5waHBcIixcbiAgXCJMZSBNb25kZVwiOlxuICAgIFwiaHR0cDovL3d3dy5sZW1vbmRlLmZyL2JpZy1icm93c2VyL2FydGljbGUvMjAxNy8wOC8yOS9ldC1zaS1zZS1kZWNvbm5lY3Rlci12b3VzLWFpZGFpdC1hLW1pZXV4LXByb2ZpdGVyLWRlcy1yaWNoZXNzZXMtZC1pbnRlcm5ldF81MTc3OTEwXzQ4MzI2OTMuaHRtbFwiLFxuICBcIlRoZSBOZXh0IFdlYlwiOlxuICAgIFwiaHR0cHM6Ly90aGVuZXh0d2ViLmNvbS9pbnNpZGVyLzIwMTcvMDgvMjEvdGhpcy1tYW5pZmVzdG8tYWdhaW5zdC1pbnRlcm5ldC1hZGRpY3Rpb24tY2FuLW9ubHktYmUtdmlld2VkLW9mZmxpbmUvXCIsXG5cbiAgLy8gZWR1XG4gIFwiQ29tcHV0YXRpb25hbCBFbmdpbmVlcmluZ1wiOiBcImh0dHBzOi8vY29tcHV0YXRpb25hbGVuZ2luZWVyaW5nLm1pdC5lZHUvXCIsXG4gIFwibnVtZXJpY2FsIHNpbXVsYXRpb24gb2YgZW52aXJvbm1lbnRhbCBpbXBhY3RcIjpcbiAgICBcImh0dHA6Ly9kc3BhY2UubWl0LmVkdS9oYW5kbGUvMTcyMS4xLzgyMTg5XCIsXG4gIEVtYWlsOiBcIm1haWx0bzpib2xpbi5jaHJpc0BnbWFpbC5jb21cIixcbn07XG5cbmNvbnN0IExpbmsgPSAocHJvcHMpID0+IChcbiAgPGFcbiAgICBocmVmPXtsaW5rc1twcm9wcy5jaGlsZHJlbl0gfHwgY29uc29sZS5lcnJvcihcIk5PVCBGT1VORDpcIiwgcHJvcHMuY2hpbGRyZW4pfVxuICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index/link.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! exports provided: ClientOnlyLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClientOnlyLink\", function() { return ClientOnlyLink; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/link.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar links = {\n  // main\n  disconnect: \"https://thedisconnect.co/\",\n  formidable: \"https://formidable.com/\",\n  // work\n  \"u-denver\": \"https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs\",\n  jumpshell: \"https://www.jumpshell.com/\",\n  autotegrity: \"https://www.cogolabs.com/portfolio/autotegrity\",\n  ni: \"http://www.ni.com/\",\n  ebm: \"http://web.mit.edu/ebm/www/\",\n  // projects\n  \"offline-only\": \"https://chris.bolin.co/offline/\",\n  elements: \"https://chris.bolin.co/elements/\",\n  tessellate: \"https://chris.bolin.co/tessellate/\",\n  enchiridion: \"https://chris.bolin.co/enchiridion/\",\n  skycoins: \"https://chris.bolin.co/skycoins/\",\n  shipwrecked: \"http://www.blurb.com/books/1234410-shipwrecked\",\n  travels: \"https://rookievagabonds.tumblr.com/\",\n  // talks\n  dinojs: \"https://www.youtube.com/watch?v=nhuvY0CT064\",\n  \"me-convention\": \"https://www.youtube.com/watch?v=6wjqLAaCAyw\",\n  \"Offline-Websites-talk\": \"https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s\",\n  \"debugging-talk\": \"https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035\",\n  // press\n  lifehacker: \"https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654\",\n  vice: \"https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline\",\n  cbc: \"http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329\",\n  cjr: \"https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php\",\n  \"le-monde\": \"http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html\",\n  \"the-next-web\": \"https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/\",\n  // edu\n  \"computational-engineering\": \"https://computationalengineering.mit.edu/\",\n  thesis: \"http://dspace.mit.edu/handle/1721.1/82189\",\n  email: \"mailto:bolin.chris@gmail.com\"\n};\n\nvar Link = function Link(props) {\n  return __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    href: links[props.children] || console.error(\"NOT FOUND:\", props.children),\n    rel: \"noopener noreferrer\"\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 3\n    }\n  }));\n};\n\n_c = Link;\nvar ClientOnlyLink = function ClientOnlyLink(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return setMounted(true);\n  }, [setMounted]);\n  if (mounted) return __jsx(Link, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 23\n    }\n  })); // if mounted on client, render as usual\n\n  return false; // if rendered on server\n};\n\n_s(ClientOnlyLink, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c2 = ClientOnlyLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Link\");\n$RefreshReg$(_c2, \"ClientOnlyLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGluay5qcz83NWI4Il0sIm5hbWVzIjpbImxpbmtzIiwiZGlzY29ubmVjdCIsImZvcm1pZGFibGUiLCJqdW1wc2hlbGwiLCJhdXRvdGVncml0eSIsIm5pIiwiZWJtIiwiZWxlbWVudHMiLCJ0ZXNzZWxsYXRlIiwiZW5jaGlyaWRpb24iLCJza3ljb2lucyIsInNoaXB3cmVja2VkIiwidHJhdmVscyIsImRpbm9qcyIsImxpZmVoYWNrZXIiLCJ2aWNlIiwiY2JjIiwiY2pyIiwidGhlc2lzIiwiZW1haWwiLCJMaW5rIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbnNvbGUiLCJlcnJvciIsIkNsaWVudE9ubHlMaW5rIiwidXNlU3RhdGUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWjtBQUNBQyxZQUFVLEVBQUUsMkJBRkE7QUFHWkMsWUFBVSxFQUFFLHlCQUhBO0FBS1o7QUFDQSxjQUNFLDBFQVBVO0FBUVpDLFdBQVMsRUFBRSw0QkFSQztBQVNaQyxhQUFXLEVBQUUsZ0RBVEQ7QUFVWkMsSUFBRSxFQUFFLG9CQVZRO0FBV1pDLEtBQUcsRUFBRSw2QkFYTztBQWFaO0FBQ0Esa0JBQWdCLGlDQWRKO0FBZVpDLFVBQVEsRUFBRSxrQ0FmRTtBQWdCWkMsWUFBVSxFQUFFLG9DQWhCQTtBQWlCWkMsYUFBVyxFQUFFLHFDQWpCRDtBQWtCWkMsVUFBUSxFQUFFLGtDQWxCRTtBQW1CWkMsYUFBVyxFQUFFLGdEQW5CRDtBQW9CWkMsU0FBTyxFQUFFLHFDQXBCRztBQXNCWjtBQUNBQyxRQUFNLEVBQUUsNkNBdkJJO0FBd0JaLG1CQUFpQiw2Q0F4Qkw7QUF5QlosMkJBQ0UscURBMUJVO0FBMkJaLG9CQUFrQixvREEzQk47QUE2Qlo7QUFDQUMsWUFBVSxFQUNSLDJGQS9CVTtBQWdDWkMsTUFBSSxFQUNGLDhGQWpDVTtBQWtDWkMsS0FBRyxFQUNELHVGQW5DVTtBQW9DWkMsS0FBRyxFQUNELDRFQXJDVTtBQXNDWixjQUNFLHNKQXZDVTtBQXdDWixrQkFDRSxpSEF6Q1U7QUEyQ1o7QUFDQSwrQkFBNkIsMkNBNUNqQjtBQTZDWkMsUUFBTSxFQUFFLDJDQTdDSTtBQThDWkMsT0FBSyxFQUFFO0FBOUNLLENBQWQ7O0FBaURBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQ0UsUUFBSSxFQUFFckIsS0FBSyxDQUFDcUIsS0FBSyxDQUFDQyxRQUFQLENBQUwsSUFBeUJDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFlBQWQsRUFBNEJILEtBQUssQ0FBQ0MsUUFBbEMsQ0FEakM7QUFFRSxPQUFHLEVBQUM7QUFGTixLQUdNRCxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEVztBQUFBLENBQWI7O0tBQU1ELEk7QUFRQyxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNKLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNUSyxzREFBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxVQUR1Qjs7QUFFdkNDLHlEQUFTLENBQUM7QUFBQSxXQUFNRCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQUQsRUFBeUIsQ0FBQ0EsVUFBRCxDQUF6QixDQUFUO0FBQ0EsTUFBSUQsT0FBSixFQUFhLE9BQU8sTUFBQyxJQUFELHlGQUFVTixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUCxDQUgwQixDQUdFOztBQUN6QyxTQUFPLEtBQVAsQ0FKdUMsQ0FJekI7QUFDZixDQUxNOztHQUFNSSxjOztNQUFBQSxjO0FBT0VMLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2xpbmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBsaW5rcyA9IHtcbiAgLy8gbWFpblxuICBkaXNjb25uZWN0OiBcImh0dHBzOi8vdGhlZGlzY29ubmVjdC5jby9cIixcbiAgZm9ybWlkYWJsZTogXCJodHRwczovL2Zvcm1pZGFibGUuY29tL1wiLFxuXG4gIC8vIHdvcmtcbiAgXCJ1LWRlbnZlclwiOlxuICAgIFwiaHR0cHM6Ly9kYW5pZWxzLmR1LmVkdS9lbnRyZXByZW5ldXJzaGlwL2VudHJlcHJlbmV1cnNoaXAtZGVncmVlLXByb2dyYW1zXCIsXG4gIGp1bXBzaGVsbDogXCJodHRwczovL3d3dy5qdW1wc2hlbGwuY29tL1wiLFxuICBhdXRvdGVncml0eTogXCJodHRwczovL3d3dy5jb2dvbGFicy5jb20vcG9ydGZvbGlvL2F1dG90ZWdyaXR5XCIsXG4gIG5pOiBcImh0dHA6Ly93d3cubmkuY29tL1wiLFxuICBlYm06IFwiaHR0cDovL3dlYi5taXQuZWR1L2VibS93d3cvXCIsXG5cbiAgLy8gcHJvamVjdHNcbiAgXCJvZmZsaW5lLW9ubHlcIjogXCJodHRwczovL2NocmlzLmJvbGluLmNvL29mZmxpbmUvXCIsXG4gIGVsZW1lbnRzOiBcImh0dHBzOi8vY2hyaXMuYm9saW4uY28vZWxlbWVudHMvXCIsXG4gIHRlc3NlbGxhdGU6IFwiaHR0cHM6Ly9jaHJpcy5ib2xpbi5jby90ZXNzZWxsYXRlL1wiLFxuICBlbmNoaXJpZGlvbjogXCJodHRwczovL2NocmlzLmJvbGluLmNvL2VuY2hpcmlkaW9uL1wiLFxuICBza3ljb2luczogXCJodHRwczovL2NocmlzLmJvbGluLmNvL3NreWNvaW5zL1wiLFxuICBzaGlwd3JlY2tlZDogXCJodHRwOi8vd3d3LmJsdXJiLmNvbS9ib29rcy8xMjM0NDEwLXNoaXB3cmVja2VkXCIsXG4gIHRyYXZlbHM6IFwiaHR0cHM6Ly9yb29raWV2YWdhYm9uZHMudHVtYmxyLmNvbS9cIixcblxuICAvLyB0YWxrc1xuICBkaW5vanM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uaHV2WTBDVDA2NFwiLFxuICBcIm1lLWNvbnZlbnRpb25cIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTZ3anFMQWFDQXl3XCIsXG4gIFwiT2ZmbGluZS1XZWJzaXRlcy10YWxrXCI6XG4gICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWlhdkMxb1d2dEo4JnQ9MjU5MXNcIixcbiAgXCJkZWJ1Z2dpbmctdGFsa1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Y2NHOUwyUGc0aW8mdD0xMDM1XCIsXG5cbiAgLy8gcHJlc3NcbiAgbGlmZWhhY2tlcjpcbiAgICBcImh0dHBzOi8vbGlmZWhhY2tlci5jb20veW91LWNhbnQtcmVhZC10aGlzLXdlYnNpdGUtdW50aWwteW91LXR1cm4tb2ZmLXlvdXItaW50ZS0xODIyNzc2NjU0XCIsXG4gIHZpY2U6XG4gICAgXCJodHRwczovL21vdGhlcmJvYXJkLnZpY2UuY29tL2VuX3VzL2FydGljbGUva3p6Z2puL3RoaXMtd2Vic2l0ZS1vbmx5LXdvcmtzLXdoZW4teW91cmUtb2ZmbGluZVwiLFxuICBjYmM6XG4gICAgXCJodHRwOi8vd3d3LmNiYy5jYS9yYWRpby9zcGFyay93YW50LXRvLWxvb2stYXQtdGhpcy1ndXktcy13ZWJzaXRlLWdvLW9mZmxpbmUtMS40MjgxMzI5XCIsXG4gIGNqcjpcbiAgICBcImh0dHBzOi8vd3d3LmNqci5vcmcvaW5ub3ZhdGlvbnMvZGlzY29ubmVjdC1tYWdhemluZS1vbmx5LXdvcmtzLW9mZmxpbmUucGhwXCIsXG4gIFwibGUtbW9uZGVcIjpcbiAgICBcImh0dHA6Ly93d3cubGVtb25kZS5mci9iaWctYnJvd3Nlci9hcnRpY2xlLzIwMTcvMDgvMjkvZXQtc2ktc2UtZGVjb25uZWN0ZXItdm91cy1haWRhaXQtYS1taWV1eC1wcm9maXRlci1kZXMtcmljaGVzc2VzLWQtaW50ZXJuZXRfNTE3NzkxMF80ODMyNjkzLmh0bWxcIixcbiAgXCJ0aGUtbmV4dC13ZWJcIjpcbiAgICBcImh0dHBzOi8vdGhlbmV4dHdlYi5jb20vaW5zaWRlci8yMDE3LzA4LzIxL3RoaXMtbWFuaWZlc3RvLWFnYWluc3QtaW50ZXJuZXQtYWRkaWN0aW9uLWNhbi1vbmx5LWJlLXZpZXdlZC1vZmZsaW5lL1wiLFxuXG4gIC8vIGVkdVxuICBcImNvbXB1dGF0aW9uYWwtZW5naW5lZXJpbmdcIjogXCJodHRwczovL2NvbXB1dGF0aW9uYWxlbmdpbmVlcmluZy5taXQuZWR1L1wiLFxuICB0aGVzaXM6IFwiaHR0cDovL2RzcGFjZS5taXQuZWR1L2hhbmRsZS8xNzIxLjEvODIxODlcIixcbiAgZW1haWw6IFwibWFpbHRvOmJvbGluLmNocmlzQGdtYWlsLmNvbVwiLFxufTtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4gKFxuICA8YVxuICAgIGhyZWY9e2xpbmtzW3Byb3BzLmNoaWxkcmVuXSB8fCBjb25zb2xlLmVycm9yKFwiTk9UIEZPVU5EOlwiLCBwcm9wcy5jaGlsZHJlbil9XG4gICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENsaWVudE9ubHlMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtzZXRNb3VudGVkXSk7XG4gIGlmIChtb3VudGVkKSByZXR1cm4gPExpbmsgey4uLnByb3BzfSAvPjsgLy8gaWYgbW91bnRlZCBvbiBjbGllbnQsIHJlbmRlciBhcyB1c3VhbFxuICByZXR1cm4gZmFsc2U7IC8vIGlmIHJlbmRlcmVkIG9uIHNlcnZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/link.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::-moz-selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection:hover {\\n  z-index: 3;\\n}\\n\\n.BackSection.active {\\n  transform: scale(1.5);\\n  z-index: 2 !important;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2 !important;\\n}\\n\\n.BackSection:hover {\\n  -webkit-filter: brightness(1.1) saturate(1.1);\\n          filter: brightness(1.1) saturate(1.1);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection h1 {\\n  font-size: 21vw;\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\nbutton:focus {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 1vmin 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  -webkit-hyphens: auto;\\n      -ms-hyphens: auto;\\n          hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/chris/repos/chrisbolin.github.io/pages/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,8CAA8C;EAC9C,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAHA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,MAAM;EACN,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,kBAAkB;EAClB,4EAA4E;AAC9E;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB,EAAE,uCAAuC;AAC/D;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6CAAqC;UAArC,qCAAqC;AACvC;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAa;MAAb,iBAAa;UAAb,aAAa;AACf;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,0EAA0E;EAC1E,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB\",\"file\":\"style.css\",\"sourcesContent\":[\":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection:hover {\\n  z-index: 3;\\n}\\n\\n.BackSection.active {\\n  transform: scale(1.5);\\n  z-index: 2 !important;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2 !important;\\n}\\n\\n.BackSection:hover {\\n  filter: brightness(1.1) saturate(1.1);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection h1 {\\n  font-size: 21vw;\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\nbutton:focus {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 1vmin 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5jc3M/Nzk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNDQUFzQywyQ0FBMkMsR0FBRyxVQUFVLG1EQUFtRCxrREFBa0QsR0FBRyxVQUFVLGNBQWMsMkNBQTJDLHVCQUF1QixHQUFHLDJCQUEyQixnQ0FBZ0MsNENBQTRDLEdBQUcsc0JBQXNCLGdDQUFnQyw0Q0FBNEMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsZUFBZSxZQUFZLEdBQUcsaUJBQWlCLGVBQWUsbUJBQW1CLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSw0Q0FBNEMsZ0NBQWdDLHVCQUF1Qix5RkFBeUYsR0FBRyxZQUFZLG9CQUFvQix1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLFFBQVEsd0JBQXdCLG1CQUFtQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGVBQWUseUJBQXlCLCtDQUErQyxXQUFXLGdDQUFnQyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixvQkFBb0IsZUFBZSxHQUFHLHdCQUF3QixlQUFlLEdBQUcseUJBQXlCLDBCQUEwQiwwQkFB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QXFCLEdBQUcsUUFBUSx3QkFBd0IsbUJBQW1CLG1CQUFtQixHQUFHLGFBQWEsdUJBQXVCLHVCQUF1QixnQkFBZ0IsaUNBQWlDLGtCQUFrQixvQkFBb0IsR0FBRyxZQUFZLG9CQUFvQiw0Q0FBNEMsb0JBQW9CLHVCQUF1QixnQkFBZ0IsZUFBZSx5QkFBeUIsK0NBQStDLFdBQVcsZ0NBQWdDLGlCQUFpQixrQkFBa0IsY0FBYyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixlQUFlLEdBQUcsd0JBQXdCLGVBQWUsR0FBRyx5QkFBeUIsMEJBQTBCLDBCQUEwQixrQkFBa0IsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcsd0JBQXdCLDBDQUEwQyxHQUFHLHNDQUFzQywrRUFBK0UsR0FBRyxzQ0FBc0MsZ0ZBQWdGLEdBQUcsc0NBQXNDLCtFQUErRSxHQUFHLHNDQUFzQyxnRkFBZ0YsR0FBRyxxQkFBcUIsb0JBQW9CLDBCQUEwQix1QkFBdUIsb0JBQW9CLEdBQUcsWUFBWSxtQkFBbUIscUJBQXFCLHVCQUF1QixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLGlDQUFpQyxHQUFHLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGFBQWEscUJBQXFCLHlCQUF5QixvQkFBb0IsR0FBRyw4QkFBOEIsaUNBQWlDLEdBQUcsMkJBQTJCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLEdBQUcsT0FBTyxtQkFBbUIsK0JBQStCLEdBQUcsdUJBQXVCLCtFQUErRSxpQ0FBaUMsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxLQUFLO0FBQy9nVDtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9wYWdlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWE6ICM3ODMwY2Y7XFxuICAtLWNvbG9yLWI6ICNhYjMyZDk7XFxuICAtLWNvbG9yLWM6ICNjMjM2YzI7XFxuICAtLWNvbG9yLWQ6ICNkOTMyODU7XFxuICAtLWNvbG9yLWU6ICNjZjMwMzA7XFxuICAtLWNvbG9yLXdoaXRpc2g6ICNmMmYyZjI7XFxuICAtLWNvbG9yLWJsYWNraXNoOiAjMjQwZjFmO1xcbiAgLS1jb2xvci1oaWdobGlnaHQ6IHZhcigtLWNvbG9yLWQpO1xcbiAgLS1jb2xvci1iZWhpbmQtY3VydGFpbjogdmFyKC0tY29sb3ItZSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaGluZC1jdXJ0YWluKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA6Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNraXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5za2lwOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGxhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE4MnB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIG1hcmdpbjogNTBweCBjYWxjKDUwdncgLSA5MXB4KTtcXG59XFxuXFxuLmNhcmQtZmFjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLmZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFza2VydmlsbGVcXFwiLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgXFxcIkRyb2lkIFNlcmlmXFxcIiwgXFxcIlRpbWVzXFxcIiwgc2VyaWY7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBwYWRkaW5nOiAxN3B4IDExcHg7XFxufVxcblxcbi5PcGVuZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMzIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogYWxsb3cgY2xpY2tpbmcgXFxcImJlaGluZFxcXCIgdGhlIGFycm93XFxcIiAqL1xcbn1cXG5cXG4uQmFjayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIHtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5CYWNrU2VjdGlvbi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiB1bnNldDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLnRyYW5zaXRpb25pbmcge1xcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uQmFja1NlY3Rpb246aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKSBzYXR1cmF0ZSgxLjEpO1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKSBzYXR1cmF0ZSgxLjEpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWQpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMikge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTUwZGVnLCB2YXIoLS1jb2xvci1iKSwgdmFyKC0tY29sb3ItZSkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAzKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWIpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgNCkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQwZGVnLCB2YXIoLS1jb2xvci1lKSwgdmFyKC0tY29sb3ItYSkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiAyMXZ3O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zdm1pbjtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiA4dm1pbjtcXG4gIHBhZGRpbmc6IDF2bWluIDJ2bWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxuICAgICAgICAgIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZSkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9jaHJpcy9yZXBvcy9jaHJpc2Jv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QTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItYTogIzc4MzBjZjtcXG4gIC0tY29sb3ItYjogI2FiMzJkOTtcXG4gIC0tY29sb3ItYzogI2MyMzZjMjtcXG4gIC0tY29sb3ItZDogI2Q5MzI4NTtcXG4gIC0tY29sb3ItZTogI2NmMzAzMDtcXG4gIC0tY29sb3Itd2hpdGlzaDogI2YyZjJmMjtcXG4gIC0tY29sb3ItYmxhY2tpc2g6ICMyNDBmMWY7XFxuICAtLWNvbG9yLWhpZ2hsaWdodDogdmFyKC0tY29sb3ItZCk7XFxuICAtLWNvbG9yLWJlaGluZC1jdXJ0YWluOiB2YXIoLS1jb2xvci1lKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmVoaW5kLWN1cnRhaW4pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNraXA6Zm9jdXMge1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1wbGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTgycHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGNhbGMoNTB2dyAtIDkxcHgpO1xcbn1cXG5cXG4uY2FyZC1mYWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXNrZXJ2aWxsZVxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBcXFwiRHJvaWQgU2VyaWZcXFwiLCBcXFwiVGltZXNcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDE3cHggMTFweDtcXG59XFxuXFxuLk9wZW5lciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBib3R0b206IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAzMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBhbGxvdyBjbGlja2luZyBcXFwiYmVoaW5kXFxcIiB0aGUgYXJyb3dcXFwiICovXFxufVxcblxcbi5CYWNrIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246aG92ZXIge1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLkJhY2tTZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHVuc2V0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24udHJhbnNpdGlvbmluZyB7XFxuICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKSBzYXR1cmF0ZSgxLjEpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWQpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMikge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTUwZGVnLCB2YXIoLS1jb2xvci1iKSwgdmFyKC0tY29sb3ItZSkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAzKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWIpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgNCkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQwZGVnLCB2YXIoLS1jb2xvci1lKSwgdmFyKC0tY29sb3ItYSkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiAyMXZ3O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zdm1pbjtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiA4dm1pbjtcXG4gIHBhZGRpbmc6IDF2bWluIDJ2bWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmE6aG92ZXIsXFxuYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWUpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css\n");

/***/ })

})
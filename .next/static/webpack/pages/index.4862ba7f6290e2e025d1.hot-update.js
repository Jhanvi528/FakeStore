"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/client.js":
/*!*************************!*\
  !*** ./utils/client.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClient": function() { return /* binding */ createClient; }
/* harmony export */ });
/* harmony import */ var _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @medusajs/medusa-js */ "./node_modules/@medusajs/medusa-js/dist/index.js");
/* harmony import */ var _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

var BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_URL || "https://localhost:";
var createClient = function createClient() {
  return new (_medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0___default())({
    baseUrl: BACKEND_URL
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDg2MmJhN2Y2MjkwZTJlMDI1ZDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBQVosSUFBc0Msb0JBQTFEO0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFNLElBQUlMLDREQUFKLENBQVc7QUFBRU0sSUFBQUEsT0FBTyxFQUFFTDtBQUFYLEdBQVgsQ0FBTjtBQUFBLENBQXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2NsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkdXNhIGZyb20gXCJAbWVkdXNhanMvbWVkdXNhLWpzXCJcclxuXHJcbmNvbnN0IEJBQ0tFTkRfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVEVVNBX1VSTCB8fCBcImh0dHBzOi8vbG9jYWxob3N0OlwiXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gKCkgPT4gbmV3IE1lZHVzYSh7IGJhc2VVcmw6IEJBQ0tFTkRfVVJMIH0pXHJcbiJdLCJuYW1lcyI6WyJNZWR1c2EiLCJCQUNLRU5EX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NRURVU0FfVVJMIiwiY3JlYXRlQ2xpZW50IiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=
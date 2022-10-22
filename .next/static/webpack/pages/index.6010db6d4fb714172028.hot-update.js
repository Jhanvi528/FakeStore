"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/store-context */ "./context/store-context.js");
/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/landing-page.module.css */ "./styles/landing-page.module.css");
/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_store_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/store.module.css */ "./styles/store.module.css");
/* harmony import */ var _styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prices */ "./utils/prices.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\HP DEMO\\Desktop\\MedusaHackathon\\FakeStore\\pages\\index.js",
    _s = $RefreshSig$();









var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var products = _ref.products;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_3__.default),
      cart = _useContext.cart;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: (_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        children: "Our Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
        id: "storeSection",
        className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().products),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),
            children: products && products.map(function (p) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: {
                    pathname: "/product/[id]",
                    query: {
                      id: p.id
                    }
                  },
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                    target: "_blank",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
                      style: {
                        textAlign: 'center',
                        color: '#0094dd'
                      },
                      children: p.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                      className: "styles.outercard",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgHolder),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                          src: p.thumbnail,
                          alt: "thumbnail",
                          width: 250,
                          height: 300
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 37,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                        style: {
                          color: 'grey',
                          fontStyle: 'italic'
                        },
                        children: p.description
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                        style: {
                          color: '#0094dd',
                          textAlign: 'right',
                          fontWeight: 'bold'
                        },
                        children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, p.variants[0])
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 23
                }, _this)
              }, p.id, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Home, "3yaiwnc2jQzb4Qw4OxX90Kkr0sM=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjAxMGRiNmQ0ZmI3MTQxNzIwMjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFZSxTQUFTTyxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMxQyxvQkFBaUJOLGlEQUFVLENBQUNDLDJEQUFELENBQTNCO0FBQUEsTUFBUU0sSUFBUixlQUFRQSxJQUFSOztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFTCxrRkFBaEI7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBRUEsNkVBQWpCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVMsVUFBRSxFQUFDLGNBQVo7QUFBMkIsaUJBQVMsRUFBRUMsMkVBQXRDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSwwRUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLHNCQUNHRyxRQUFRLElBQ1BBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUFDLENBQUMsRUFBSTtBQUNoQixrQ0FDRTtBQUFnQix5QkFBUyxFQUFFVCxzRUFBM0I7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUNFLHNCQUFJLEVBQUU7QUFDSlcsb0JBQUFBLFFBQVEsaUJBREo7QUFFSkMsb0JBQUFBLEtBQUssRUFBRTtBQUFFQyxzQkFBQUEsRUFBRSxFQUFFSixDQUFDLENBQUNJO0FBQVI7QUFGSCxtQkFEUjtBQUtFLDBCQUFRLE1BTFY7QUFBQSx5Q0FPRTtBQUFHLDBCQUFNLEVBQUMsUUFBVjtBQUFBLDRDQUNFO0FBQUksMkJBQUssRUFBRTtBQUFFQyx3QkFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJDLHdCQUFBQSxLQUFLLEVBQUU7QUFBOUIsdUJBQVg7QUFBQSxnQ0FDR04sQ0FBQyxDQUFDTztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFLLCtCQUFTLEVBQUMsa0JBQWY7QUFBQSw4Q0FDRTtBQUFLLGlDQUFTLEVBQUVoQiwyRUFBaEI7QUFBQSwrQ0FDRSw4REFBQyxtREFBRDtBQUNFLDZCQUFHLEVBQUVTLENBQUMsQ0FBQ1MsU0FEVDtBQUVFLDZCQUFHLEVBQUMsV0FGTjtBQUdFLCtCQUFLLEVBQUUsR0FIVDtBQUlFLGdDQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQVNFO0FBQUcsNkJBQUssRUFBRTtBQUFFSCwwQkFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJJLDBCQUFBQSxTQUFTLEVBQUU7QUFBNUIseUJBQVY7QUFBQSxrQ0FDR1YsQ0FBQyxDQUFDVztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVEYsZUFZRTtBQUNFLDZCQUFLLEVBQUU7QUFDTEwsMEJBQUFBLEtBQUssRUFBRSxTQURGO0FBRUxELDBCQUFBQSxTQUFTLEVBQUUsT0FGTjtBQUdMTywwQkFBQUEsVUFBVSxFQUFFO0FBSFAseUJBRFQ7QUFBQSxrQ0FPR3BCLDJEQUFZLENBQUNHLElBQUQsRUFBT0ssQ0FBQyxDQUFDYSxRQUFGLENBQVcsQ0FBWCxDQUFQO0FBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFVYixDQUFDLENBQUNJLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQXVDRCxhQXhDRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVERDs7R0ExRHVCWDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc3RvcmUtY29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGFuZGluZy1wYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdHlsZXMvc3RvcmUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnLi4vdXRpbHMvY2xpZW50J1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZXMgfSBmcm9tICcuLi91dGlscy9wcmljZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICh7IHByb2R1Y3RzIH0pIHtcclxuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDE+T3VyIFByb2R1Y3RzPC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBpZD0nc3RvcmVTZWN0aW9uJyBjbGFzc05hbWU9e3N0b3JlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcmUucHJvZHVjdHN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcmUuZ3JpZH0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzICYmXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3AuaWR9IGNsYXNzTmFtZT17c3RvcmUuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC9baWRdYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogcC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICcjMDA5NGRkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0eWxlcy5vdXRlcmNhcmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3JlLmltZ0hvbGRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSd0aHVtYm5haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDk0ZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFByaWNlcyhjYXJ0LCBwLnZhcmlhbnRzWzBdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpXHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLmxpc3QoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHNcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJzdHlsZXMiLCJzdG9yZSIsImZvcm1hdFByaWNlcyIsIkhvbWUiLCJwcm9kdWN0cyIsImNhcnQiLCJjb250YWluZXIiLCJtYWluIiwiZ3JpZCIsIm1hcCIsInAiLCJjYXJkIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0aXRsZSIsImltZ0hvbGRlciIsInRodW1ibmFpbCIsImZvbnRTdHlsZSIsImRlc2NyaXB0aW9uIiwiZm9udFdlaWdodCIsInZhcmlhbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
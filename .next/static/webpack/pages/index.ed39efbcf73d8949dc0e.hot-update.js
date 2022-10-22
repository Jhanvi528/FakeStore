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
                      className: (_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().outercard),
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
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        style: {},
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                          style: {
                            color: 'grey',
                            fontStyle: 'italic'
                          },
                          children: p.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                          style: {
                            color: '#0094dd',
                            textAlign: 'right',
                            fontWeight: 'bold'
                          },
                          children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, p.variants[0])
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWQzOWVmYmNmNzNkODk0OWRjMGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFZSxTQUFTTyxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMxQyxvQkFBaUJOLGlEQUFVLENBQUNDLDJEQUFELENBQTNCO0FBQUEsTUFBUU0sSUFBUixlQUFRQSxJQUFSOztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFTCxrRkFBaEI7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBRUEsNkVBQWpCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVMsVUFBRSxFQUFDLGNBQVo7QUFBMkIsaUJBQVMsRUFBRUMsMkVBQXRDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSwwRUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLHNCQUNHRyxRQUFRLElBQ1BBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUFDLENBQUMsRUFBSTtBQUNoQixrQ0FDRTtBQUFnQix5QkFBUyxFQUFFVCxzRUFBM0I7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUNFLHNCQUFJLEVBQUU7QUFDSlcsb0JBQUFBLFFBQVEsaUJBREo7QUFFSkMsb0JBQUFBLEtBQUssRUFBRTtBQUFFQyxzQkFBQUEsRUFBRSxFQUFFSixDQUFDLENBQUNJO0FBQVI7QUFGSCxtQkFEUjtBQUtFLDBCQUFRLE1BTFY7QUFBQSx5Q0FPRTtBQUFHLDBCQUFNLEVBQUMsUUFBVjtBQUFBLDRDQUNFO0FBQUksMkJBQUssRUFBRTtBQUFFQyx3QkFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJDLHdCQUFBQSxLQUFLLEVBQUU7QUFBOUIsdUJBQVg7QUFBQSxnQ0FDR04sQ0FBQyxDQUFDTztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFLLCtCQUFTLEVBQUVqQixrRkFBaEI7QUFBQSw4Q0FDRTtBQUFLLGlDQUFTLEVBQUVDLDJFQUFoQjtBQUFBLCtDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsNkJBQUcsRUFBRVMsQ0FBQyxDQUFDVSxTQURUO0FBRUUsNkJBQUcsRUFBQyxXQUZOO0FBR0UsK0JBQUssRUFBRSxHQUhUO0FBSUUsZ0NBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBU0U7QUFBSyw2QkFBSyxFQUFFLEVBQVo7QUFBQSxnREFDRTtBQUFHLCtCQUFLLEVBQUU7QUFBRUosNEJBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSyw0QkFBQUEsU0FBUyxFQUFFO0FBQTVCLDJCQUFWO0FBQUEsb0NBQ0dYLENBQUMsQ0FBQ1k7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBS0U7QUFDRSwrQkFBSyxFQUFFO0FBQ0xOLDRCQUFBQSxLQUFLLEVBQUUsU0FERjtBQUVMRCw0QkFBQUEsU0FBUyxFQUFFLE9BRk47QUFHTFEsNEJBQUFBLFVBQVUsRUFBRTtBQUhQLDJCQURUO0FBQUEsb0NBT0dyQiwyREFBWSxDQUFDRyxJQUFELEVBQU9LLENBQUMsQ0FBQ2MsUUFBRixDQUFXLENBQVgsQ0FBUDtBQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVVkLENBQUMsQ0FBQ0ksRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBMENELGFBM0NEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREOztHQTdEdUJYOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zdG9yZS1jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYW5kaW5nLXBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0eWxlcy9zdG9yZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICcuLi91dGlscy9jbGllbnQnXHJcbmltcG9ydCB7IGZvcm1hdFByaWNlcyB9IGZyb20gJy4uL3V0aWxzL3ByaWNlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcHJvZHVjdHMgfSkge1xyXG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMT5PdXIgUHJvZHVjdHM8L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPSdzdG9yZVNlY3Rpb24nIGNsYXNzTmFtZT17c3RvcmUuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yZS5wcm9kdWN0c30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yZS5ncmlkfT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cC5pZH0gY2xhc3NOYW1lPXtzdG9yZS5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0L1tpZF1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJyMwMDk0ZGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3AudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcmUuaW1nSG9sZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J3RodW1ibmFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDA5NGRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0UHJpY2VzKGNhcnQsIHAudmFyaWFudHNbMF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpXHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLmxpc3QoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHNcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJzdHlsZXMiLCJzdG9yZSIsImZvcm1hdFByaWNlcyIsIkhvbWUiLCJwcm9kdWN0cyIsImNhcnQiLCJjb250YWluZXIiLCJtYWluIiwiZ3JpZCIsIm1hcCIsInAiLCJjYXJkIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0aXRsZSIsIm91dGVyY2FyZCIsImltZ0hvbGRlciIsInRodW1ibmFpbCIsImZvbnRTdHlsZSIsImRlc2NyaXB0aW9uIiwiZm9udFdlaWdodCIsInZhcmlhbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
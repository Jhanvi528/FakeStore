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
        columnNumber: 5
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
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
                        style: {
                          textAlign: "center",
                          color: "#0094dd"
                        },
                        children: p.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 14
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        className: (_styles_store_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgHolder),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                          src: p.thumbnail,
                          alt: "thumbnail",
                          width: 250,
                          height: 300
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 15
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 14
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                        style: {
                          color: "grey",
                          fontStyle: "italic"
                        },
                        children: p.description
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 14
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                        style: {
                          color: "#0094dd",
                          textAlign: "right",
                          fontWeight: "bold"
                        },
                        children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, p.variants[0])
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 14
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 13
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 13
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 12
                }, _this)
              }, p.id, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 11
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc0NTk0Y2Y3N2Q1NzYyMzk5YTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFZSxTQUFTTyxJQUFULE9BQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMxQyxvQkFBaUJOLGlEQUFVLENBQUNDLDJEQUFELENBQTNCO0FBQUEsTUFBUU0sSUFBUixlQUFRQSxJQUFSOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFFTCxrRkFBaEI7QUFBQSwyQkFDQztBQUFNLGVBQVMsRUFBRUEsNkVBQWpCO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQVMsVUFBRSxFQUFDLGNBQVo7QUFBMkIsaUJBQVMsRUFBRUMsMkVBQXRDO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFFQSwwRUFBaEI7QUFBQSxpQ0FDQztBQUFLLHFCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLHNCQUNFRyxRQUFRLElBQ1JBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUFDLENBQUMsRUFBSTtBQUNqQixrQ0FDQztBQUFnQix5QkFBUyxFQUFFVCxzRUFBM0I7QUFBQSx1Q0FDQyw4REFBQyxrREFBRDtBQUNDLHNCQUFJLEVBQUU7QUFDTFcsb0JBQUFBLFFBQVEsaUJBREg7QUFFTEMsb0JBQUFBLEtBQUssRUFBRTtBQUFFQyxzQkFBQUEsRUFBRSxFQUFFSixDQUFDLENBQUNJO0FBQVI7QUFGRixtQkFEUDtBQUtDLDBCQUFRLE1BTFQ7QUFBQSx5Q0FNQztBQUFHLDBCQUFNLEVBQUMsUUFBVjtBQUFBLDJDQUNBO0FBQUEsOENBQ0M7QUFBSSw2QkFBSyxFQUFFO0FBQUVDLDBCQUFBQSxTQUFTLEVBQUUsUUFBYjtBQUF1QkMsMEJBQUFBLEtBQUssRUFBRTtBQUE5Qix5QkFBWDtBQUFBLGtDQUF1RE4sQ0FBQyxDQUFDTztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELGVBRUM7QUFBSyxpQ0FBUyxFQUFFaEIsMkVBQWhCO0FBQUEsK0NBQ0MsOERBQUMsbURBQUQ7QUFDQyw2QkFBRyxFQUFFUyxDQUFDLENBQUNTLFNBRFI7QUFFQyw2QkFBRyxFQUFDLFdBRkw7QUFHQywrQkFBSyxFQUFFLEdBSFI7QUFJQyxnQ0FBTSxFQUFFO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkQsZUFTQztBQUFHLDZCQUFLLEVBQUU7QUFBRUgsMEJBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSSwwQkFBQUEsU0FBUyxFQUFFO0FBQTVCLHlCQUFWO0FBQUEsa0NBQ0VWLENBQUMsQ0FBQ1c7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRELGVBWUM7QUFDQyw2QkFBSyxFQUFFO0FBQ05MLDBCQUFBQSxLQUFLLEVBQUUsU0FERDtBQUVORCwwQkFBQUEsU0FBUyxFQUFFLE9BRkw7QUFHTk8sMEJBQUFBLFVBQVUsRUFBRTtBQUhOLHlCQURSO0FBQUEsa0NBTUVwQiwyREFBWSxDQUFDRyxJQUFELEVBQU9LLENBQUMsQ0FBQ2EsUUFBRixDQUFXLENBQVgsQ0FBUDtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxpQkFBVWIsQ0FBQyxDQUFDSSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFrQ0EsYUFuQ0Q7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrREE7O0dBckR1Qlg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zdG9yZS1jb250ZXh0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xhbmRpbmctcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdHlsZXMvc3RvcmUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCIuLi91dGlscy9jbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRQcmljZXMgfSBmcm9tIFwiLi4vdXRpbHMvcHJpY2VzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cyB9KSB7XHJcblx0Y29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0PGgxPk91ciBQcm9kdWN0czwvaDE+XHJcblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzdG9yZVNlY3Rpb25cIiBjbGFzc05hbWU9e3N0b3JlLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3RvcmUucHJvZHVjdHN9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3RvcmUuZ3JpZH0+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzICYmXHJcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWN0cy5tYXAocCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e3AuaWR9IGNsYXNzTmFtZT17c3RvcmUuY2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IGAvcHJvZHVjdC9baWRdYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRxdWVyeTogeyBpZDogcC5pZCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXNzSHJlZj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiIzAwOTRkZFwiIH19PntwLnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0b3JlLmltZ0hvbGRlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtwLnRodW1ibmFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwidGh1bWJuYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezI1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMDB9PjwvSW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcIiMwMDk0ZGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9ybWF0UHJpY2VzKGNhcnQsIHAudmFyaWFudHNbMF0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpXHJcblx0Y29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLmxpc3QoKVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cHJvZHVjdHMsXHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInN0eWxlcyIsInN0b3JlIiwiZm9ybWF0UHJpY2VzIiwiSG9tZSIsInByb2R1Y3RzIiwiY2FydCIsImNvbnRhaW5lciIsIm1haW4iLCJncmlkIiwibWFwIiwicCIsImNhcmQiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRpdGxlIiwiaW1nSG9sZGVyIiwidGh1bWJuYWlsIiwiZm9udFN0eWxlIiwiZGVzY3JpcHRpb24iLCJmb250V2VpZ2h0IiwidmFyaWFudHMiXSwic291cmNlUm9vdCI6IiJ9
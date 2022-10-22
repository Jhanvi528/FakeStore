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
                        style: {
                          paddingTop: '7%'
                        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGUwNTk0OTQ4ZTU2YTYzYTgwYTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFZSxTQUFTTyxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMxQyxvQkFBaUJOLGlEQUFVLENBQUNDLDJEQUFELENBQTNCO0FBQUEsTUFBUU0sSUFBUixlQUFRQSxJQUFSOztBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBTSxlQUFTLEVBQUVMLDZFQUFqQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFTLFVBQUUsRUFBQyxjQUFaO0FBQTJCLGlCQUFTLEVBQUVDLDJFQUF0QztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUEsMEVBQWhCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQSxzRUFBaEI7QUFBQSxzQkFDR0csUUFBUSxJQUNQQSxRQUFRLENBQUNLLEdBQVQsQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDaEIsa0NBQ0U7QUFBZ0IseUJBQVMsRUFBRVQsc0VBQTNCO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFDRSxzQkFBSSxFQUFFO0FBQ0pXLG9CQUFBQSxRQUFRLGlCQURKO0FBRUpDLG9CQUFBQSxLQUFLLEVBQUU7QUFBRUMsc0JBQUFBLEVBQUUsRUFBRUosQ0FBQyxDQUFDSTtBQUFSO0FBRkgsbUJBRFI7QUFLRSwwQkFBUSxNQUxWO0FBQUEseUNBT0U7QUFBRywwQkFBTSxFQUFDLFFBQVY7QUFBQSw0Q0FDRTtBQUFJLDJCQUFLLEVBQUU7QUFBRUMsd0JBQUFBLFNBQVMsRUFBRSxRQUFiO0FBQXVCQyx3QkFBQUEsS0FBSyxFQUFFO0FBQTlCLHVCQUFYO0FBQUEsZ0NBQ0dOLENBQUMsQ0FBQ087QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBSUU7QUFBSywrQkFBUyxFQUFFakIsa0ZBQWhCO0FBQUEsOENBQ0U7QUFBSyxpQ0FBUyxFQUFFQywyRUFBaEI7QUFBQSwrQ0FDRSw4REFBQyxtREFBRDtBQUNFLDZCQUFHLEVBQUVTLENBQUMsQ0FBQ1UsU0FEVDtBQUVFLDZCQUFHLEVBQUMsV0FGTjtBQUdFLCtCQUFLLEVBQUUsR0FIVDtBQUlFLGdDQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQVNFO0FBQUssNkJBQUssRUFBRTtBQUFFQywwQkFBQUEsVUFBVSxFQUFFO0FBQWQseUJBQVo7QUFBQSxnREFDRTtBQUFHLCtCQUFLLEVBQUU7QUFBRUwsNEJBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCTSw0QkFBQUEsU0FBUyxFQUFFO0FBQTVCLDJCQUFWO0FBQUEsb0NBQ0daLENBQUMsQ0FBQ2E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBS0U7QUFDRSwrQkFBSyxFQUFFO0FBQ0xQLDRCQUFBQSxLQUFLLEVBQUUsU0FERjtBQUVMRCw0QkFBQUEsU0FBUyxFQUFFLE9BRk47QUFHTFMsNEJBQUFBLFVBQVUsRUFBRTtBQUhQLDJCQURUO0FBQUEsb0NBT0d0QiwyREFBWSxDQUFDRyxJQUFELEVBQU9LLENBQUMsQ0FBQ2UsUUFBRixDQUFXLENBQVgsQ0FBUDtBQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVVmLENBQUMsQ0FBQ0ksRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBMENELGFBM0NEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREOztHQTdEdUJYOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zdG9yZS1jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYW5kaW5nLXBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0eWxlcy9zdG9yZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICcuLi91dGlscy9jbGllbnQnXHJcbmltcG9ydCB7IGZvcm1hdFByaWNlcyB9IGZyb20gJy4uL3V0aWxzL3ByaWNlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcHJvZHVjdHMgfSkge1xyXG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxPk91ciBQcm9kdWN0czwvaDE+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9J3N0b3JlU2VjdGlvbicgY2xhc3NOYW1lPXtzdG9yZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3JlLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3JlLmdyaWR9PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwLmlkfSBjbGFzc05hbWU9e3N0b3JlLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvW2lkXWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IHAuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnIzAwOTRkZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJjYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yZS5pbWdIb2xkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3AudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0ndGh1bWJuYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc3JScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3AuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwOTRkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFByaWNlcyhjYXJ0LCBwLnZhcmlhbnRzWzBdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoKVxyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGNsaWVudC5wcm9kdWN0cy5saXN0KClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3R5bGVzIiwic3RvcmUiLCJmb3JtYXRQcmljZXMiLCJIb21lIiwicHJvZHVjdHMiLCJjYXJ0IiwibWFpbiIsImNvbnRhaW5lciIsImdyaWQiLCJtYXAiLCJwIiwiY2FyZCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsInRleHRBbGlnbiIsImNvbG9yIiwidGl0bGUiLCJvdXRlcmNhcmQiLCJpbWdIb2xkZXIiLCJ0aHVtYm5haWwiLCJwYWRkaW5nVG9wIiwiZm9udFN0eWxlIiwiZGVzY3JpcHRpb24iLCJmb250V2VpZ2h0IiwidmFyaWFudHMiXSwic291cmNlUm9vdCI6IiJ9
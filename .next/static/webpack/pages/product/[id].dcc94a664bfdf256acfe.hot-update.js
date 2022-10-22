"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/store-context */ "./context/store-context.js");
/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper-functions */ "./utils/helper-functions.js");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/product.module.css */ "./styles/product.module.css");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/prices */ "./utils/prices.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\HP DEMO\\Desktop\\MedusaHackathon\\FakeStore\\pages\\product\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();










var Product = function Product(_ref) {
  _s();

  var product = _ref.product;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_2__.default),
      addVariantToCart = _useContext.addVariantToCart,
      cart = _useContext.cart;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    variantId: '',
    quantity: 0,
    size: ''
  }),
      options = _useState[0],
      setOptions = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product) {
      setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
    }
  }, [product]);

  var handleQtyChange = function handleQtyChange(action) {
    if (action === 'inc') {
      if (options.quantity < product.variants.find(function (_ref2) {
        var id = _ref2.id;
        return id === options.variantId;
      }).inventory_quantity) setOptions({
        variantId: options.variantId,
        quantity: options.quantity + 1,
        size: options.size
      });
    }

    if (action === 'dec') {
      if (options.quantity > 1) setOptions({
        variantId: options.variantId,
        quantity: options.quantity - 1,
        size: options.size
      });
    }
  };

  var handleAddToBag = function handleAddToBag() {
    addVariantToCart({
      variantId: options.variantId,
      quantity: options.quantity
    });
    if (product) setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("figure", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().placeholder),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          objectFit: "cover",
          layout: "fill",
          loading: "eager",
          src: product.thumbnail,
          alt: "".concat(product.title)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),
      style: {
        textAlign: 'right'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "price",
          style: {
            fontSize: 22,
            color: '#0094dd'
          },
          children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, product.variants[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Size"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "selectors",
            children: product.variants.slice(0).reverse().map(function (v) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                className: "".concat((_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().sizebtn), " ").concat(v.title === options.size ? (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selected) : null),
                onClick: function onClick() {
                  return setOptions({
                    variantId: v.id,
                    quantity: options.quantity,
                    size: v.title
                  });
                },
                children: v.title
              }, v.id, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            style: {
              display: 'flex',
              justifyContent: 'end'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qty),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
                onClick: function onClick() {
                  return handleQtyChange('dec');
                },
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().ticker),
                children: options.quantity
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
                onClick: function onClick() {
                  return handleQtyChange('inc');
                },
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().addbtn),
          onClick: function onClick() {
            return handleAddToBag();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: "Add to Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiCart, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
}; //create a Medusa client


_s(Product, "r9GSbY6f57OnGFdc08qmnehud9g=");

_c = Product;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmRjYzk0YTY2NGJmZGYyNTZhY2ZlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMvQixvQkFBbUNSLGlEQUFVLENBQUNHLDJEQUFELENBQTdDO0FBQUEsTUFBUU0sZ0JBQVIsZUFBUUEsZ0JBQVI7QUFBQSxNQUEwQkMsSUFBMUIsZUFBMEJBLElBQTFCOztBQUNBLGtCQUE4QlgsK0NBQVEsQ0FBQztBQUNyQ1ksSUFBQUEsU0FBUyxFQUFFLEVBRDBCO0FBRXJDQyxJQUFBQSxRQUFRLEVBQUUsQ0FGMkI7QUFHckNDLElBQUFBLElBQUksRUFBRTtBQUgrQixHQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFNQWpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlVLE9BQUosRUFBYTtBQUNYTyxNQUFBQSxVQUFVLENBQUNYLHFFQUFZLENBQUNJLE9BQUQsQ0FBYixDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxNQUFNLEVBQUk7QUFDaEMsUUFBSUEsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEIsVUFDRUgsT0FBTyxDQUFDRixRQUFSLEdBQ0FKLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0I7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtOLE9BQU8sQ0FBQ0gsU0FBM0I7QUFBQSxPQUF0QixFQUNHVSxrQkFITCxFQUtFTixVQUFVLENBQUM7QUFD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LEVBQUVYLDBFQUFuQjtBQUFrQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1pQixjQUFjLEVBQXBCO0FBQUEsV0FBM0M7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZFRCxDQTFIRCxFQTRIQTs7O0dBNUhNZjs7S0FBQUE7O0FBdUpOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgQmlDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXHJcbmltcG9ydCBTdG9yZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9zdG9yZS1jb250ZXh0J1xyXG5pbXBvcnQgeyByZXNldE9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXItZnVuY3Rpb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wcm9kdWN0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudCdcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpY2VzJ1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkVmFyaWFudFRvQ2FydCwgY2FydCB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdmFyaWFudElkOiAnJyxcclxuICAgIHF1YW50aXR5OiAwLFxyXG4gICAgc2l6ZTogJydcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgc2V0T3B0aW9ucyhyZXNldE9wdGlvbnMocHJvZHVjdCkpXHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RdKVxyXG5cclxuICBjb25zdCBoYW5kbGVRdHlDaGFuZ2UgPSBhY3Rpb24gPT4ge1xyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG9wdGlvbnMucXVhbnRpdHkgPFxyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gb3B0aW9ucy52YXJpYW50SWQpXHJcbiAgICAgICAgICAuaW52ZW50b3J5X3F1YW50aXR5XHJcbiAgICAgIClcclxuICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSArIDEsXHJcbiAgICAgICAgICBzaXplOiBvcHRpb25zLnNpemVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2RlYycpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucXVhbnRpdHkgPiAxKVxyXG4gICAgICAgIHNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgdmFyaWFudElkOiBvcHRpb25zLnZhcmlhbnRJZCxcclxuICAgICAgICAgIHF1YW50aXR5OiBvcHRpb25zLnF1YW50aXR5IC0gMSxcclxuICAgICAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0JhZyA9ICgpID0+IHtcclxuICAgIGFkZFZhcmlhbnRUb0NhcnQoe1xyXG4gICAgICB2YXJpYW50SWQ6IG9wdGlvbnMudmFyaWFudElkLFxyXG4gICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eVxyXG4gICAgfSlcclxuICAgIGlmIChwcm9kdWN0KSBzZXRPcHRpb25zKHJlc2V0T3B0aW9ucyhwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhY2Vob2xkZXJ9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXHJcbiAgICAgICAgICAgIGxheW91dD0nZmlsbCdcclxuICAgICAgICAgICAgbG9hZGluZz0nZWFnZXInXHJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIDxoMT57cHJvZHVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3ByaWNlJyBzdHlsZT17eyBmb250U2l6ZTogMjIsIGNvbG9yOiAnIzAwOTRkZCcgfX0+XHJcbiAgICAgICAgICAgIHtmb3JtYXRQcmljZXMoY2FydCwgcHJvZHVjdC52YXJpYW50c1swXSl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBTaXplPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0b3JzJz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC52YXJpYW50c1xyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDApXHJcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17di5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpemVidG59ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudGl0bGUgPT09IG9wdGlvbnMuc2l6ZSA/IHN0eWxlcy5zZWxlY3RlZCA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudElkOiB2LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBvcHRpb25zLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHYudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7di50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBRdWFudGl0eTwvcD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZW5kJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0eX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF0eWJ0bn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXR5Q2hhbmdlKCdkZWMnKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXJ9PntvcHRpb25zLnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXR5YnRufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdHlDaGFuZ2UoJ2luYycpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkYnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb0JhZygpfT5cclxuICAgICAgICAgICAgPHNwYW4+QWRkIHRvIENhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxCaUNhcnQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy9jcmVhdGUgYSBNZWR1c2EgY2xpZW50XHJcbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwcm9kdWN0c1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGNsaWVudC5wcm9kdWN0cy5saXN0KClcclxuXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gdGhlIHByb2R1Y3RzXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBwcm9kdWN0LmlkIH1cclxuICB9KSlcclxuXHJcbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXHJcbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuLy8gVGhpcyBhbHNvIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gcGFyYW1zIGNvbnRhaW5zIHRoZSBwcm9kdWN0IGBpZGAuXHJcbiAgLy8gSWYgdGhlIHJvdXRlIGlzIGxpa2UgL3Byb2R1Y3QvcHJvZF8xLCB0aGVuIHBhcmFtcy5pZCBpcyAxXHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBhd2FpdCBjbGllbnQucHJvZHVjdHMucmV0cmlldmUocGFyYW1zLmlkKVxyXG5cclxuICAvLyBQYXNzIHBvc3QgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBwcm9kdWN0IH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkltYWdlIiwiQmlDYXJ0IiwiU3RvcmVDb250ZXh0IiwicmVzZXRPcHRpb25zIiwic3R5bGVzIiwiZm9ybWF0UHJpY2VzIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJhZGRWYXJpYW50VG9DYXJ0IiwiY2FydCIsInZhcmlhbnRJZCIsInF1YW50aXR5Iiwic2l6ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiaGFuZGxlUXR5Q2hhbmdlIiwiYWN0aW9uIiwidmFyaWFudHMiLCJmaW5kIiwiaWQiLCJpbnZlbnRvcnlfcXVhbnRpdHkiLCJoYW5kbGVBZGRUb0JhZyIsImNvbnRhaW5lciIsImltYWdlIiwicGxhY2Vob2xkZXIiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImluZm8iLCJ0ZXh0QWxpZ24iLCJkZXRhaWxzIiwiZm9udFNpemUiLCJjb2xvciIsInNlbGVjdGlvbiIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsInYiLCJzaXplYnRuIiwic2VsZWN0ZWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJxdHkiLCJxdHlidG4iLCJ0aWNrZXIiLCJhZGRidG4iXSwic291cmNlUm9vdCI6IiJ9
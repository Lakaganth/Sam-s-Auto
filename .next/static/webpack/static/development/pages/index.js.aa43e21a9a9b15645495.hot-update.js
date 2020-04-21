webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _components_home_Landing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/home/Landing */ "./components/home/Landing.js");
/* harmony import */ var _components_home_Yus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/Yus */ "./components/home/Yus.js");
/* harmony import */ var _components_home_Services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/home/Services */ "./components/home/Services.js");
/* harmony import */ var _components_home_Testimonials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/Testimonials */ "./components/home/Testimonials.js");
/* harmony import */ var _components_home_Team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/Team */ "./components/home/Team.js");
/* harmony import */ var _components_home_Mission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/home/Mission */ "./components/home/Mission.js");
/* harmony import */ var _components_UI_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/UI/Footer */ "./components/UI/Footer.js");
/* harmony import */ var _fbconfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fbconfig */ "./fbconfig.js");
/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/UI/Loader */ "./components/UI/Loader.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    width: 100vw;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  line-height: 1.3;\n  margin: 0;\n  overflow-x: hidden;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var index = function index() {
  var testimonials = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      test = _useState[0],
      setTest = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getTestimonials();
    setTimeout(function () {
      return setLoading(false);
    }, 0); // setTimeout(() => setLoading(false), 2400);
  }, []);
  var getTestimonials = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function _callee() {
    var documents;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_fbconfig__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().collection("testimonials").get());

          case 2:
            documents = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(documents.forEach(function (doc) {
              return testimonials.push(_objectSpread({
                id: doc.id
              }, doc.data()));
            }));

          case 5:
            setTest(testimonials);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, []);
  return __jsx("div", {
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Sam's Auto | Home"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap",
    rel: "stylesheet",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://kit.fontawesome.com/a21f7fe221.js",
    crossOrigin: "anonymous",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), ">"), test.length > 0 && !loading ? __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_home_Landing__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_components_home_Services__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx(_components_home_Yus__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), __jsx(_components_home_Testimonials__WEBPACK_IMPORTED_MODULE_11__["default"], {
    testimonials: test,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(_components_home_Team__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), __jsx(_components_home_Mission__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx(_components_UI_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })) : __jsx(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "633493357",
    __self: _this
  }, "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFeUIsQUFHb0IsU0FDQyxVQUNZLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXExha2EgR2FudGhcXERvY3VtZW50c1xcTmV4dEpTXFxzYW1cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBtZWRpYSBmcm9tIFwic3R5bGVkLW1lZGlhLXF1ZXJ5XCI7XHJcbmltcG9ydCBMYW5kaW5nIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvaG9tZS9MYW5kaW5nXCI7XHJcbmltcG9ydCBZdXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9ZdXNcIjtcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvaG9tZS9TZXJ2aWNlc1wiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvVGVhbVwiO1xyXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi8uLi9jb21wb25lbnRzL2hvbWUvTWlzc2lvblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0Zvb3RlclwiO1xyXG5pbXBvcnQgZmIgZnJvbSBcIi4uL2ZiY29uZmlnXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvTG9hZGVyXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBsZXQgdGVzdGltb25pYWxzID0gW107XHJcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VGVzdGltb25pYWxzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRpbmcoZmFsc2UpLCAwKTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDI0MDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VGVzdGltb25pYWxzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZmIuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInRlc3RpbW9uaWFsc1wiKS5nZXQoKTtcclxuXHJcbiAgICBhd2FpdCBkb2N1bWVudHMuZm9yRWFjaCgoZG9jKSA9PlxyXG4gICAgICB0ZXN0aW1vbmlhbHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSlcclxuICAgICk7XHJcbiAgICBzZXRUZXN0KHRlc3RpbW9uaWFscyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNhbSdzIEF1dG8gfCBIb21lPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zfFF1aWNrc2FuZHxSYWNpbmcrU2FucytPbmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2EyMWY3ZmUyMjEuanNcIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgY2hhclNldD1cIlVURi04XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHt0ZXN0Lmxlbmd0aCA+IDAgJiYgIWxvYWRpbmcgPyAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYW5kaW5nIC8+XHJcbiAgICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICAgIDxZdXMgLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbHMgdGVzdGltb25pYWxzPXt0ZXN0fSAvPlxyXG4gICAgICAgICAgPFRlYW0gLz5cclxuICAgICAgICAgIDxNaXNzaW9uIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICR7bWVkaWEubGVzc1RoYW4oXCJzbWFsbFwiKWBcclxuICAgIC8qIHNjcmVlbiB3aWR0aCBpcyBsZXNzIHRoYW4gNDUwcHggKHNtYWxsKSAqL1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIGB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Laka Ganth\\\\Documents\\\\NextJS\\\\sam\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_7__["default"].lessThan("small")(_templateObject2()));

/***/ })

})
//# sourceMappingURL=index.js.aa43e21a9a9b15645495.hot-update.js.map
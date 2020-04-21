webpackHotUpdate("static\\development\\pages\\services.js",{

/***/ "./components/service/ServiceBox.js":
/*!******************************************!*\
  !*** ./components/service/ServiceBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\service\\ServiceBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    width: 90%;\n    margin 0 auto;\n\n\n    .front-content-bg{\n      /* width: 90%; */\n      /* transform: translate3d(0, 80%, 0); */\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 335px;\n  height: 350px;\n \n  transition: all 0.3s ease-in-out;\n  transform-style: preserve-3d;\n  perspective: 900px;\n  z-index: 10;\n\n  /* background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),\n    url(\"/static/images/service/engine.jpg\") center top no-repeat; */\n  /* ", "\n  background-size: cover; */\n  width: 60%;\n  margin: 0 auto;\n  .front-content-bg {\n    /* max-width: 0%; */\n    margin: 0 auto;\n    /* transform: translate3d(0, 100%, 0); */\n    background: rgba(196, 196, 196, 0.14);\n     border-radius: 7px;\n  border: 2px solid #ffffff;\n    ", "\n  background-size: cover;\n    border-radius: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transform: rotateY(0deg);\n    transition: 0.5s;\n  }\n  &:hover .front-content-bg {\n    transform: rotateY(-180deg);\n  }\n  .back-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background:#ffffff;\n    color:black;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n    transition: 0.5s;\n    border-radius:5px;\n    /* border: 2px solid red; */\n    \n  }\n\n  &:hover .back-content {\n    transform: rotateY(0deg);\n  }\n\n  .front-content-bg  p {\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 62px;\n    line-height: 80px;\n    text-align: center;\n    letter-spacing: 0.055em;\n    color: white;\n   \n  }\n\n  .back-content p{\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 40px;\n    text-align: center;\n    letter-spacing: 0.055em;\n  }\n \n  /* &:hover {\n    transform: scale3d(1.1, 1.1, 1.1);\n  } */\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ServiceBox = function ServiceBox(_ref) {
  var name = _ref.name,
      bg = _ref.bg,
      content = _ref.content;
  return __jsx(Container, {
    bg: bg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "front-content-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, name)), __jsx("div", {
    className: "back-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, content)));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceBox);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref2) {
  var bg = _ref2.bg;
  return bg && " background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),\n     url(".concat(bg, ") center top no-repeat;");
}, function (_ref3) {
  var bg = _ref3.bg;
  return bg && " background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),\n     url(".concat(bg, ") center top no-repeat;");
}, styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()));

/***/ })

})
//# sourceMappingURL=services.js.63ae4546fee45e72fb54.hot-update.js.map
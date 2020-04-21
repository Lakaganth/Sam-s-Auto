webpackHotUpdate("static\\development\\pages\\services.js",{

/***/ "./components/service/ServiceContent.js":
/*!**********************************************!*\
  !*** ./components/service/ServiceContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _ServiceBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceBox */ "./components/service/ServiceBox.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\service\\ServiceContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 4vh 0;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: repeat(1, 1fr);\n    margin: 5vh 0;\n    grid-gap: 70px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: repeat(1, 1fr);\n    margin: 5vh 0;\n    grid-gap: 30px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  z-index: 10;\n  margin: 15vh 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 95px;\n    /* screen width is less than 450px (small) */\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n    /* screen width is between 768px (medium) and 1170px (large) */\n  ", "\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    .bg-stripes{\n  top: 0vh;\n  width: 100%;\n    height: 65%;\n}\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-bottom: 5vh; \n.bg-stripes{\n  top: 0vh;\n  width: 100%;\n    height: 65%;\n}\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  background-color: #151515;\n  position: relative;\n  overflow: hidden;\n  /* height: 100vh; */\n\n  .bg-stripes {\n    position: absolute;\n  \n    background: url(\"/static/images/service/stripes.svg\") bottom center\n      no-repeat;\n    top: 10vh;\n    left: 0;\n    background-size: cover;\n    width: 120%;\n    height: 165%;\n\n  }\n    /* screen width is less than 450px (small) */\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ServiceContent = function ServiceContent() {
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bg-stripes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(ServiceGrid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Engine Swap / Repair",
    bg: "/static/images/service/engine.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Electrical Repairs",
    bg: "/static/images/service/electric.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Brakes Check",
    bg: "/static/images/service/brakes.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Change",
    bg: "/static/images/service/oil.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Air Filter Check",
    bg: "/static/images/service/filter.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_ServiceBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "General Services",
    bg: "/static/images/service/general.jpg",
    content: "Sample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceContent);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()));
var ServiceGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject6()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("medium", "large")(_templateObject7()));

/***/ })

})
//# sourceMappingURL=services.js.629f8f53cf8a922505a8.hot-update.js.map
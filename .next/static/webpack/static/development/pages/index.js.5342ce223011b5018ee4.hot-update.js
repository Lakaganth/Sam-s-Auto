webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Services.js":
/*!*************************************!*\
  !*** ./components/home/Services.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/landing/enginec.png */ "./public/static/images/landing/enginec.png");
/* harmony import */ var _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/landing/battery.png */ "./public/static/images/landing/battery.png");
/* harmony import */ var _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/landing/oilc.png */ "./public/static/images/landing/oilc.png");
/* harmony import */ var _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n   p{\n    font-size: 20px;\n   }\n   .face2 .content {\n    p{\n      font-size: 20px;\n    }}\nimg{\n  width:40%;\n}\n\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */\n  z-index: 10;\n  position: relative;\n\n  .face {\n    transition: 0.5s;\n  }\n\n  .face1 {\n    position: relative;\n    z-index: 1;\n    transform: translateY(100px);\n    background: #151515;\n    height: 60vh;\n    border-radius: 23px;\n    p {\n      color: white;\n    }\n  }\n  &:hover .face.face1 {\n    transform: translateY(00px);\n    background: #ff0057;\n  }\n\n  .face2 {\n    position: relative;\n    transform: translateY(-50vh);\n    opacity: 0;\n    height: 35vh;\n    background: #151515;\n    border-radius: 13px;\n    color: white;\n  }\n  &:hover .face.face2 {\n    transform: translateY(-3vh);\n    opacity: 1;\n  }\n  .face2 .content {\n    p {\n      font-size: 18px;\n      line-height: 24px;\n      padding: 2vh 2vw;\n      color: white;\n    }\n  }\n  p {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 32px;\n    line-height: 48px;\n    padding: 2vh 0;\n    text-align: center;\n    letter-spacing: 0.16em;\n  }\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    display:flex;\n   flex-direction: column;\n   justify-content:center;\n   align-items:center;\n   width: 70%;\n   .oil{\n  width: 100%;\n}\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n   display:flex;\n   flex-direction: column;\n   justify-content:center;\n   align-items:center;\n   width: 70%;\n   .oil{\n  width: 100%;\n}\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 80%;\n  margin: 0 auto;\n  z-index: 10;\n  grid-gap: 30px;\n  position: relative;\n  .engine {\n    img {\n      padding-top: 50px;\n      width: 110%;\n    }\n  }\n  .battery {\n    img {\n      width: 100%;\n    }\n  }\n  .oil {\n    img {\n      width: 100%;\n    }\n  }\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 180vh;\n    p{\n      font-size: 32px;\n    line-height: 29%;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* height: 150vh; */\n    p{\n      font-size: 32px;\n    line-height: 29%;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  /* height: 105vh; */\n  background-color: #fff;\n  overflow: hidden;\n  position: relative;\n  .bg-stripes {\n    position: absolute;\n    /* z-index: -10; */\n    background: url(\"/static/images/service/stripes.svg\") bottom center\n      no-repeat;\n    filter: blur(2px);\n    top: 0vh;\n    left: 30vw;\n    background-size: cover;\n    width: 120%;\n    height: 101%;\n    z-index: -10;\n  }\n  p {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 48px;\n    line-height: 39%;\n    z-index: 10;\n    /* identical to box height, or 19px */\n    text-align: center;\n    letter-spacing: 0.16em;\n    color: #000000;\n  }\n  .more {\n    text-align: right;\n  }\n    /* screen width is less than 450px (small) */\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n  \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Services = function Services() {
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bg-stripes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Our Services"), __jsx(ServiceGrid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(ServiceBox, {
    className: "engine ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "face face1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Engine Swap"), __jsx("img", {
    src: _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Engine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "face face2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")))), __jsx(ServiceBox, {
    className: "battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "face face1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Electrical Repairs"), __jsx("img", {
    src: _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "face face2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")))), __jsx(ServiceBox, {
    className: "oil",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "face face1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Maintainene"), __jsx("img", {
    src: _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Oilcan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "face face2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"))))), __jsx("p", {
    className: "more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "And More..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()));
var ServiceGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject6()));
var ServiceBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject8()));

/***/ })

})
//# sourceMappingURL=index.js.5342ce223011b5018ee4.hot-update.js.map
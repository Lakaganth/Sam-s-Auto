webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Mission.js":
/*!************************************!*\
  !*** ./components/home/Mission.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/icons/mission.svg */ "./public/static/images/icons/mission.svg");
/* harmony import */ var _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_landing_mission_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/landing/mission.png */ "./public/static/images/landing/mission.png");
/* harmony import */ var _public_static_images_landing_mission_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_mission_png__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Mission.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    height: 80vh;\n    h3{\n      font-size: 32px;\n    line-height: 32px;\n    }\n    img{\n      width: 60%;\n      margin: 0 auto;\n    }\n    p{\n      font-size: 24px;\n    line-height: 24px;\n    /* padding-top:30vh; */\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    height: 130vh;\n    h3{\n      font-size: 32px;\n    line-height: 32px;\n    }\n    img{\n      width: 80%;\n      margin: 0 auto;\n    }\n    p{\n      font-size: 18px;\n    line-height: 24px;\n    /* padding-top:30vh; */\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 80vh;\n  background-color: #fff;\n  font-family: \"Quicksand\", sans-serif;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  h3 {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 48px;\n    line-height: 72px;\n    /* identical to box height */\n\n    text-align: center;\n    letter-spacing: 0.16em;\n  }\n  p {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 32px;\n    line-height: 48px;\n    text-align: center;\n    letter-spacing: 0.05em;\n    color: #2b2b2b;\n    width: 60%;\n    margin: 0 auto;\n  }\n  .mission-illustration {\n    width: 80%;\n    height: 80%;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Mission = function Mission() {
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Our Mission"), __jsx("img", {
    src: _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Mission",
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
  }, "Provide high quality service within the promised time. Keep customer satisfied."), __jsx("div", {
    className: "mission-illustration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _public_static_images_landing_mission_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mission);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()));

/***/ })

})
//# sourceMappingURL=index.js.d3af9c0f29d71b802b0a.hot-update.js.map
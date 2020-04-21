webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/about/TeamCard.js":
/*!**************************************!*\
  !*** ./components/about/TeamCard.js ***!
  \**************************************/
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
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\about\\TeamCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    width: 90%;\n  height: 45vh;\n  img {\n    width: 40%;\n   \n    position: absolute;\n    top: -35%;\n    left: 33%;\n  }\n  .name { \n    font-size:32px;\n    padding: 7vh 0 0 0;\n  }\n  .title { \n    font-size: 24px;   \n    margin: 5px 0 0 0;  \n  }\n  .desc {\n    font-weight: 200;\n    font-size: 18px;\n    line-height: 132%;\n    width: 80%;\n    margin: 5px auto;\n    /* or 32px */\n  }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    width: 90%;\n  height: 55vh;\n  img {\n    width: 30%;\n    /* height: 60%; */\n    position: absolute;\n    top: -15%;\n    left: 33%;\n  }\n  .name { \n    font-size:32px;\n    padding: 7vh 0 0 0;\n  }\n  .title { \n    font-size: 24px;   \n    margin: 5px 0 0 0;  \n  }\n  .desc {\n    font-weight: 200;\n    font-size: 18px;\n    line-height: 132%;\n    width: 80%;\n    margin: 5px auto;\n    /* or 32px */\n\n  }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 40vw;\n  height: 35vh;\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  position: relative;\n  font-family: Poppins;\n  font-style: thin;\n  color: #000000;\n  text-align: center;\n  img {\n    width: 30%;\n    /* height: 60%; */\n    position: absolute;\n    top: -45%;\n    left: 33%;\n  }\n  .name {\n    font-weight: 300;\n    font-size: 48px;\n    letter-spacing: 0.21em;\n    padding: 8vh 0 0 0;\n  }\n  .title {\n    font-weight: 200;\n    font-size: 32px;\n    line-height: 132%;\n    margin: 10px 0 0 0;\n    letter-spacing: 0.21em;\n    color: #6c6a6a;\n  }\n  .desc {\n    font-weight: 200;\n    font-size: 18px;\n    line-height: 132%;\n    width: 80%;\n    margin: 25px auto;\n    /* or 32px */\n\n    letter-spacing: 0.03em;\n  }\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    width: 90vw;\n   height: 55vh;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    width: 90vw;\n  height: 55vh;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50vw;\n  height: 55vh;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var TeamCard = function TeamCard(_ref) {
  var name = _ref.name,
      title = _ref.title,
      img = _ref.img,
      desc = _ref.desc;
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: img,
    alt: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, name), __jsx("div", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, " ", title, " "), __jsx("div", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, desc, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamCard);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()));
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject6()));

/***/ })

})
//# sourceMappingURL=about.js.6ab981cd71b70f8eeffe.hot-update.js.map
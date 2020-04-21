webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Testimonials.js":
/*!*****************************************!*\
  !*** ./components/home/Testimonials.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/icons/quote.svg */ "./public/static/images/icons/quote.svg");
/* harmony import */ var _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Testimonials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    img {   \n    padding-left: 25vw;\n  }\n  div {\n    width: 90%;\n    height: 70%;\n    \n    transform: translate3d(0, 15%, 0);\n  }\n    \n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 55vw;\n  height: 75vh;\n  background-color: white;\n  margin: 0 10px;\n  padding: 10px;\n\n  text-align: center;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 300;\n  img {\n    transform: translate3d(0, -45%, 0);\n    padding-left: 8vw;\n  }\n  div {\n    width: 80%;\n    height: 70%;\n    margin: 0 auto;\n    background-color: #fdfdfd;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 16px;\n    transform: translate3d(0, 35%, 0);\n  }\n  button {\n    background-color: black;\n  }\n  .comment {\n    font-size: 20px;\n    line-height: 30px;\n    text-align: center;\n    letter-spacing: 0.045em;\n    color: #000000;\n    width: 80%;\n    margin: 0 auto;\n    transform: translate3d(0, -5%, 0);\n  }\n\n  .cx-name {\n    font-size: 28px;\n    font-weight: 500;\n    color: gray;\n    transform: translate3d(0, -25%, 0);\n  }\n  .cx-car {\n    letter-spacing: 0.04em;\n    transform: translate3d(0, -125%, 0);\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    width: 100%;\n    /* height: 50vh; */\n    margin: 0vh auto;\n\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  margin: 10vh auto;\n  h3 {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 48px;\n    line-height: 72px;\n    text-align: center;\n    letter-spacing: 0.16em;\n  }\n  /* height: 80vh; */\n  background-color: #fff;\n  .slick-next:before,\n  .slick-prev:before {\n    font-size: 20px;\n    line-height: 1;\n    opacity: 0.75;\n    color: #151515;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Testimonials = function Testimonials(_ref) {
  var testimonials = _ref.testimonials;
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    centerMargin: "10px",
    slidesToShow: 3,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }, {
      breakpoint: 450,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1
      }
    }]
  };
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Our Customers Voice"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), testimonials.length > 0 && testimonials.map(function (t) {
    return __jsx(TestCard, {
      key: t.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "test-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "Quote",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, t.cxComment), __jsx("p", {
      className: "cx-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, t.cxName), __jsx("p", {
      className: "cx-car",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, t.cxCarModel)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject2()));
var TestCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject4()));

/***/ })

})
//# sourceMappingURL=index.js.73ca438e34f54f659128.hot-update.js.map
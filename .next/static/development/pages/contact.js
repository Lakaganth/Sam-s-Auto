(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\contact.js"],{

/***/ "./components/UI/NavbarComp.js":
/*!*************************************!*\
  !*** ./components/UI/NavbarComp.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/icons/samlogo.svg */ "./public/static/images/icons/samlogo.svg");
/* harmony import */ var _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\UI\\NavbarComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100vh;\n  width: 100vw;\n  background: gray;\n  z-index: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  overflow: hidden;\n  a {\n    color: white;\n    text-decoration: none;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2rem;\n    line-height: 132%;\n    text-align: center;\n    letter-spacing: 0.27em;\n    justify-self: center;\n    align-self: center;\n    /* transition: all 0.2s ease-in-out; */\n    cursor: pointer;\n  }\n  .close {\n    /* margin-right: 30px; */\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 140px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 100px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 60px;\n  background-color: #151515;\n  overflow: hidden;\n  svg {\n    position: absolute;\n    top: 3vh;\n    right: 2vw;\n  }\n  /* screen width is less than 450px (small) */\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n  \n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is greater than 1170px (large) */\n  \n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-gap:40px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\ngrid-gap:20px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n /* display:none; */\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  height:90px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  color: white;\n  justify-content: center;\n  align-content: center;\n  padding-top: 4vh;\n  z-index: 100;\n  a {\n    color: white;\n    text-decoration: none;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 132%;\n    text-align: center;\n    letter-spacing: 0.27em;\n    justify-self: center;\n    align-self: center;\n    /* transition: all 0.2s ease-in-out; */\n    cursor: pointer;\n  }\n  /* a:hover {\n    color: #fcb801;\n    transform: translateY(-1vh);\n    letter-spacing: 0.35em;\n  } */\n\n  ", "\n  ", "\n\n    /* screen width is between 768px (medium) and 1170px (large) */\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var NavbarComp = function NavbarComp() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mobileWidth = _useState[0],
      setMobileWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      openDraw = _useState2[0],
      setOpenDraw = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    handleScroll(); // window.addEventListener("resize", handleScroll);
  }, []);

  var handleScroll = function handleScroll(e) {
    var windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  };

  var handleMenuOpen = function handleMenuOpen() {
    setOpenDraw(!openDraw);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, mobileWidth ? __jsx(MobileMenu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("svg", {
    onClick: handleMenuOpen,
    width: "68",
    height: "42",
    viewBox: "0 0 68 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("rect", {
    width: "48",
    height: "4",
    rx: "2",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("rect", {
    y: "10",
    width: "48",
    height: "4",
    rx: "2",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("rect", {
    y: "20",
    width: "48",
    height: "4",
    rx: "2",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), openDraw ? __jsx(MobileDrawer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("svg", {
    onClick: function onClick() {
      return setOpenDraw(false);
    },
    width: "54",
    height: "54",
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("rect", {
    x: "0.130859",
    y: "48.2132",
    width: "68",
    height: "8",
    rx: "4",
    transform: "rotate(-45 0.130859 48.2132)",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), __jsx("rect", {
    x: "5.65723",
    width: "68",
    height: "8",
    rx: "4",
    transform: "rotate(45 5.65723 0)",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Contact")), " ") : null) : __jsx(NavigationComp, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "SAMLOGO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Contact")), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarComp);
var NavigationComp = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("medium", "large")(_templateObject4()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].greaterThan("large")(_templateObject5()));
var MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject7()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject8()));
var MobileDrawer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());

/***/ }),

/***/ "./components/contact/ContactBanner.js":
/*!*********************************************!*\
  !*** ./components/contact/ContactBanner.js ***!
  \*********************************************/
/*! exports provided: ContactBanner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBanner", function() { return ContactBanner; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_NavbarComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/NavbarComp */ "./components/UI/NavbarComp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/contact/shopphone.png */ "./public/static/images/contact/shopphone.png");
/* harmony import */ var _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 60%;\n  background: rgba(67, 67, 67, 0.44);\n  /* transform: translate3d(0, 0%, 0); */\n  p {\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 100px;\n    line-height: 132%;\n    text-align: center;\n    letter-spacing: 0.345em;\n    transform: translate3d(0, 50%, 0);\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\njustify-content: space-around;\nalign-items: center;\n    img {\n    width: 80%;\n    height: 80%;\n  }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n\n  justify-content: space-around;\n  align-items: center;\n  /* margin: 10px 0; */\n  p {\n    animation: heropanimation 1s forwards 0s ease-in-out;\n    @keyframes heropanimation {\n      0% {\n        transform: translateY(80%);\n        opacity: 0;\n      }\n\n      100% {\n        transform: translateY(0%);\n        opacity: 1;\n      }\n    }\n  }\n\n  img {\n    width: 40%;\n    height: 40%;\n    animation: heroimganimation 1s forwards 0s ease-in-out;\n    @keyframes heroimganimation {\n      0% {\n        transform: translateY(-80%);\n        opacity: 0;\n      }\n\n      100% {\n        transform: translateY(0%);\n        opacity: 1;\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is greater than 1170px (large) */\n    height:65%;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 768px (medium) and 1170px (large) */\n    height: 65%;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    height: 35%;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    height: 20%;\n    display:none;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 424px;\n  overflow: hidden;\n  display:none;\n  background: url(\"/static/images/contact/contactdice.png\") top center no-repeat;\n  background-size: cover;\n  ", "\n  ", "\n  ", "\n  ", "\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    .contact-intro{\n    font-size: 32px;\n    line-height: 42px;\n    margin: 6vh auto;}\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    .contact-intro{\n    font-size: 32px;\n    line-height: 42px;\n    margin: 2vh auto;}\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 100vh;\n  background-color: #151515;\n  color: white;\n  .contact-intro {\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 50px;\n    line-height: 52px;\n    text-align: right;\n    letter-spacing: 0.055em;\n    color: #fcfcfc;\n    width: 40%;\n    margin: 2vh 0;\n    /* margin-top: 10vh; */\n  }\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ContactBanner = function ContactBanner() {
  var scrollAnim = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useSpring"])({
    x: 1,
    from: {
      x: 0
    }
  });
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_UI_NavbarComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(BannerBG, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(BannerGrid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "contact-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Let's Get In Touch"), __jsx("img", {
    src: _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "contactPhone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
    className: "scroll-arrow",
    initial: {
      y: 5,
      opacity: 0
    },
    animate: {
      y: 8,
      opacity: 1
    },
    exit: {
      y: 304,
      opacity: 0
    },
    transition: {
      duration: 4,
      ease: "linear",
      loop: Infinity,
      repeatDelay: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "100%",
    height: "40",
    viewBox: "0 0 82 61",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M39.9393 25.0607C40.5251 25.6464 41.4749 25.6464 42.0607 25.0607L51.6066 15.5147C52.1924 14.9289 52.1924 13.9792 51.6066 13.3934C51.0208 12.8076 50.0711 12.8076 49.4853 13.3934L41 21.8787L32.5147 13.3934C31.9289 12.8076 30.9792 12.8076 30.3934 13.3934C29.8076 13.9792 29.8076 14.9289 30.3934 15.5147L39.9393 25.0607ZM39.5 6.55671e-08L39.5 24L42.5 24L42.5 -6.55671e-08L39.5 6.55671e-08Z",
    fill: "#A8A8A8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M7.1736 51.168C6.0856 51.168 5.1336 50.976 4.3176 50.592C3.5016 50.208 2.8616 49.688 2.3976 49.032C1.9496 48.376 1.6936 47.648 1.6296 46.848H2.7576C2.8856 47.728 3.2936 48.512 3.9816 49.2C4.6856 49.888 5.7496 50.232 7.1736 50.232C8.0056 50.232 8.7256 50.08 9.3336 49.776C9.9576 49.472 10.4376 49.056 10.7736 48.528C11.1096 48 11.2776 47.416 11.2776 46.776C11.2776 45.96 11.0776 45.312 10.6776 44.832C10.2936 44.352 9.8056 43.992 9.2136 43.752C8.6376 43.512 7.8536 43.256 6.8616 42.984C5.7736 42.696 4.8936 42.408 4.2216 42.12C3.5656 41.832 3.0056 41.392 2.5416 40.8C2.0936 40.192 1.8696 39.368 1.8696 38.328C1.8696 37.528 2.0776 36.8 2.4936 36.144C2.9256 35.472 3.5336 34.944 4.3176 34.56C5.1016 34.176 6.0056 33.984 7.0296 33.984C8.5176 33.984 9.7176 34.352 10.6296 35.088C11.5416 35.824 12.0856 36.728 12.2616 37.8H11.1096C11.0136 37.368 10.7976 36.928 10.4616 36.48C10.1416 36.032 9.6776 35.664 9.0696 35.376C8.4776 35.072 7.7656 34.92 6.9336 34.92C5.8136 34.92 4.8696 35.232 4.1016 35.856C3.3336 36.464 2.9496 37.28 2.9496 38.304C2.9496 39.12 3.1496 39.776 3.5496 40.272C3.9496 40.752 4.4376 41.12 5.0136 41.376C5.6056 41.616 6.3976 41.864 7.3896 42.12C8.4936 42.424 9.3656 42.72 10.0056 43.008C10.6616 43.28 11.2136 43.72 11.6616 44.328C12.1256 44.92 12.3576 45.728 12.3576 46.752C12.3576 47.504 12.1576 48.216 11.7576 48.888C11.3576 49.56 10.7656 50.112 9.9816 50.544C9.2136 50.96 8.2776 51.168 7.1736 51.168ZM18.7587 44.472C18.7587 43.112 19.0227 41.928 19.5507 40.92C20.0947 39.912 20.8387 39.144 21.7827 38.616C22.7427 38.072 23.8387 37.8 25.0707 37.8C26.7027 37.8 28.0387 38.208 29.0787 39.024C30.1347 39.84 30.7907 40.936 31.0467 42.312H29.9187C29.7107 41.192 29.1667 40.312 28.2867 39.672C27.4227 39.032 26.3507 38.712 25.0707 38.712C24.1107 38.712 23.2387 38.928 22.4547 39.36C21.6707 39.776 21.0387 40.424 20.5587 41.304C20.0947 42.168 19.8627 43.224 19.8627 44.472C19.8627 45.736 20.0947 46.8 20.5587 47.664C21.0387 48.528 21.6707 49.176 22.4547 49.608C23.2387 50.04 24.1107 50.256 25.0707 50.256C26.3507 50.256 27.4227 49.936 28.2867 49.296C29.1667 48.656 29.7107 47.776 29.9187 46.656H31.0467C30.7907 48.016 30.1347 49.112 29.0787 49.944C28.0227 50.776 26.6867 51.192 25.0707 51.192C23.8387 51.192 22.7427 50.92 21.7827 50.376C20.8387 49.832 20.0947 49.056 19.5507 48.048C19.0227 47.024 18.7587 45.832 18.7587 44.472ZM39.2569 40.656C39.5769 39.696 40.1449 38.968 40.9609 38.472C41.7769 37.96 42.8169 37.704 44.0809 37.704V38.832H43.7209C42.4409 38.832 41.3769 39.2 40.5289 39.936C39.6809 40.656 39.2569 41.84 39.2569 43.488V51H38.1769V37.968H39.2569V40.656ZM56.1435 51.192C54.9275 51.192 53.8315 50.92 52.8555 50.376C51.8795 49.832 51.1115 49.056 50.5515 48.048C50.0075 47.024 49.7355 45.832 49.7355 44.472C49.7355 43.128 50.0155 41.952 50.5755 40.944C51.1355 39.92 51.9035 39.144 52.8795 38.616C53.8715 38.072 54.9755 37.8 56.1915 37.8C57.4075 37.8 58.5035 38.072 59.4795 38.616C60.4555 39.144 61.2155 39.912 61.7595 40.92C62.3195 41.928 62.5995 43.112 62.5995 44.472C62.5995 45.832 62.3195 47.024 61.7595 48.048C61.1995 49.056 60.4235 49.832 59.4315 50.376C58.4555 50.92 57.3595 51.192 56.1435 51.192ZM56.1435 50.232C57.0875 50.232 57.9675 50.024 58.7835 49.608C59.6155 49.176 60.2795 48.528 60.7755 47.664C61.2715 46.8 61.5195 45.736 61.5195 44.472C61.5195 43.224 61.2715 42.168 60.7755 41.304C60.2795 40.44 59.6235 39.8 58.8075 39.384C57.9915 38.952 57.1115 38.736 56.1675 38.736C55.2235 38.736 54.3435 38.952 53.5275 39.384C52.7275 39.8 52.0795 40.44 51.5835 41.304C51.0875 42.168 50.8395 43.224 50.8395 44.472C50.8395 45.736 51.0795 46.8 51.5595 47.664C52.0555 48.528 52.7035 49.176 53.5035 49.608C54.3195 50.024 55.1995 50.232 56.1435 50.232ZM70.7963 33.24V51H69.7163V33.24H70.7963ZM79.6753 33.24V51H78.5953V33.24H79.6753Z",
    fill: "#E4E3E3",
    fillOpacity: "0.46",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContactBanner);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject3()));
var BannerBG = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject6()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("medium", "large")(_templateObject7()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].greaterThan("large")(_templateObject8()));
var BannerGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject9(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject10()));
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject11());

/***/ }),

/***/ "./components/contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/contact/ContactForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    textarea {\n      height: 50vh;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 70%;\n  margin: 2vh auto;\n  font-family: Quicksand;\n  input {\n    width: 100%;\n    height: 5vh;\n    margin: 1vh 0;\n    padding-left: 2vw;\n    border: 1px gray solid;\n    border-radius: 5px;\n  }\n  textarea {\n    width: 100%;\n    height: 25vh;\n    margin: 1vh 0;\n    padding-left: 2vw;\n    border: 1px gray solid;\n    border-radius: 5px;\n    padding-top: 1vh;\n  }\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    width: 90%;\n    height: 80vh;\n   \np{\n  font-size: 32px;\n    line-height: 60px;\n}\nbutton{\n  margin: 0 40%;\n}\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 90%;\n\n    /* screen width is less than 450px (small) */\np{\n  font-size: 32px;\n    line-height: 60px;\n}\nbutton{\n  margin: 0 30%;\n}\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50%;\n  height: 120vh;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 15px;\n  p {\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 80px;\n    line-height: 100px;\n    /* identical to box height */\n    padding: 50px 0 0px 0;\n    text-align: center;\n    letter-spacing: 0.345em;\n    margin: 25px auto;\n    color: #767676;\n  }\n  button {\n    width: 155px;\n    height: 51px;\n    background-color: #ff3838;\n    color: #ffffff;\n    font-size: 24px;\n    border: none;\n    margin: 0 40%;\n    cursor: pointer;\n    /* box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1); */\n  }\n  ", "\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is between 450px and 768px (small to medium) */\n    height: 80vh;\n    padding: 0vh 0;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    height: 120vh;\n    padding: 5vh 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 120vh;\n  background-color: #151515;\n  padding: 10vh 0;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ContactForm = function ContactForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      phone = _React$useState2[0],
      setPhone = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      subject = _React$useState4[0],
      setSubject = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      message = _React$useState6[0],
      setMessage = _React$useState6[1];

  var handleSubmit = function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: {
        "form-name": "contact",
        name: name,
        phone: phone,
        subject: subject,
        message: message
      }
    }).then(function () {
      return alert("Success!");
    })["catch"](function (error) {
      return alert(error);
    });
    e.preventDefault();
  };

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(FormBox, {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Contact Form"), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "name-input",
    type: "text",
    name: "name",
    value: name,
    placeholder: "Name",
    onChange: function onChange(name) {
      return setName(name.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "phone-input",
    type: "text",
    name: "Phone",
    value: phone,
    placeholder: "Phone",
    onChange: function onChange(phone) {
      return setPhone(phone.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    name: "subject",
    value: subject,
    placeholder: "Subject",
    onChange: function onChange(subject) {
      return setSubject(subject.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    className: "message-input",
    name: "message",
    value: message,
    placeholder: "Message",
    onChange: function onChange(message) {
      return setMessage(message.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject3()));
var FormBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject6()));
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject8()));

/***/ }),

/***/ "./components/contact/ContactSocials.js":
/*!**********************************************!*\
  !*** ./components/contact/ContactSocials.js ***!
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


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactSocials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-gap: 35px;\n    margin-top:10vh;\n    .icon {\n    margin: 0px 0;\n    width:30%;\n  }\n p{\n   font-size: 24px;\n    line-height: 35px;\n  }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \n    grid-gap: 35px;\n    .icon {\n    margin: 0px 0;\n    width:30%;\n  }\np{\n  font-size: 24px;\n    line-height: 35px;\n}\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60%;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  align-content: center;\n  .icon {\n    margin: 30px 0;\n  }\n  p {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 50px;\n    line-height: 75px;\n    letter-spacing: 0.05em;\n\n    color: #ffffff;\n  }\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top:10vh;\nheight: 100vh;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\npadding-top:10vh;\nheight: 150vh;\np{\n  font-size: 70px;\nline-height: 85px;\n}\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #151515;\n  overflow: hidden;\n  p{\n    font-family: Quicksand;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 100px;\nline-height: 125px;\ntext-align: center;\nletter-spacing: 0.345em;\n\ncolor: #F5F5F5;\n  }\n    /* screen width is less than 450px (small) */\n  ", "\n    /* screen width is between 450px and 768px (small to medium) */\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ContactSocials = function ContactSocials() {
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Social Media"), __jsx(SocialGrid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "126",
    height: "106",
    viewBox: "0 0 126 106",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M125.99 53.1734C125.99 23.8064 97.7865 0 62.9953 0C28.2038 0 0 23.8064 0 53.1734C0 79.7138 23.0364 101.711 53.1521 105.701V68.5439H37.1573V53.1734H53.1521V41.4585C53.1521 28.132 62.5569 20.7708 76.9461 20.7708C83.8383 20.7708 91.0476 21.8093 91.0476 21.8093V34.895H83.1044C75.2787 34.895 72.838 38.9938 72.838 43.1988V53.1734H90.3095L87.5165 68.5439H72.838V105.701C102.954 101.711 125.99 79.7138 125.99 53.1734Z",
    fill: "#274DD2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "/samautos"), __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "135",
    height: "114",
    viewBox: "0 0 135 114",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M54.283 57.3535C54.283 63.3225 60.0359 68.1611 67.1327 68.1611C74.2296 68.1611 79.9824 63.3225 79.9824 57.3535C79.9824 51.3845 74.2296 46.5459 67.1327 46.5459C60.0359 46.5459 54.283 51.3845 54.283 57.3535Z",
    fill: "#FF3A81",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M37.0835 38.2316C37.7012 36.8238 38.6866 35.5495 39.9671 34.5036C41.2107 33.4266 42.7247 32.5978 44.3996 32.0782C45.7579 31.6345 47.7984 31.1064 51.5568 30.9625C55.6226 30.8066 56.8416 30.7729 67.1344 30.7729C77.4283 30.7729 78.6473 30.8057 82.712 30.9616C86.4704 31.1064 88.512 31.6345 89.8693 32.0782C91.5441 32.5978 93.0592 33.4266 94.3017 34.5036C95.5822 35.5495 96.5676 36.8229 97.1864 38.2316C97.7139 39.374 98.3419 41.0911 98.5129 44.2523C98.6983 47.671 98.7383 48.6962 98.7383 57.3542C98.7383 66.0113 98.6983 67.0365 98.5129 70.4561C98.3419 73.6172 97.7139 75.3335 97.1864 76.4759C96.5676 77.8846 95.5832 79.158 94.3028 80.204C93.0592 81.2809 91.5452 82.1098 89.8703 82.6293C88.512 83.0739 86.4704 83.602 82.712 83.7459C78.6473 83.9018 77.4293 83.9346 67.1354 83.9346C56.8405 83.9346 55.6215 83.9018 51.5579 83.7459C47.7994 83.602 45.7579 83.0739 44.3996 82.6293C41.0376 81.5385 38.3804 79.3036 37.0835 76.4759C36.556 75.3335 35.928 73.6172 35.7559 70.4561C35.5705 67.0365 35.5316 66.0113 35.5316 57.3542C35.5316 48.6962 35.5705 47.671 35.7559 44.2523C35.927 41.0911 36.5549 39.374 37.0835 38.2316ZM67.1344 74.0024C78.0675 74.0024 86.9304 66.5489 86.9304 57.3533C86.9304 48.1578 78.0675 40.7043 67.1344 40.7043C56.2023 40.7043 47.3395 48.1578 47.3395 57.3533C47.3395 66.5489 56.2023 74.0024 67.1344 74.0024ZM46.5569 43.9369C49.1117 43.9369 51.1829 42.1948 51.1829 40.0461C51.1829 37.8973 49.1117 36.1552 46.5569 36.1552C44.0021 36.1552 41.9308 37.8973 41.9308 40.0461C41.9319 42.1948 44.0021 43.9369 46.5569 43.9369Z",
    fill: "#FF43EC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M67.1335 0.889404C104.204 0.889404 134.267 26.174 134.267 57.3534C134.267 88.5328 104.204 113.817 67.1335 113.817C30.0626 113.817 0.000427246 88.5328 0.000427246 57.3534C0.000427246 26.174 30.0626 0.889404 67.1335 0.889404ZM28.817 70.7207C29.0034 74.1721 29.6559 76.5285 30.6086 78.5911C32.6112 82.9464 36.7046 86.3892 41.8828 88.0736C44.3341 88.8749 47.1368 89.4228 51.2394 89.5805C55.3502 89.7382 56.6634 89.7761 67.1325 89.7761C77.6026 89.7761 78.9148 89.7382 83.0266 89.5805C87.1292 89.4228 89.9319 88.8749 92.3832 88.0736C94.9564 87.2594 97.2858 85.9834 99.2116 84.3335C101.172 82.7146 102.689 80.7546 103.657 78.5911C104.61 76.5294 105.263 74.1721 105.449 70.7215C105.639 67.2632 105.683 66.1587 105.683 57.3534C105.683 48.5481 105.639 47.4436 105.45 43.9861C105.264 40.5346 104.612 38.1782 103.659 36.1156C102.691 33.9522 101.173 31.9922 99.2116 30.3733C97.2869 28.7234 94.9564 27.4474 92.3842 26.6332C89.9319 25.8319 87.1302 25.284 83.0266 25.1263C78.9158 24.9686 77.6026 24.9307 67.1335 24.9307C56.6645 24.9307 55.3512 24.9686 51.2404 25.1272C47.1368 25.284 44.3351 25.8319 41.8828 26.6323C39.3106 27.4465 36.9802 28.7234 35.0544 30.3733C33.0937 31.993 31.5756 33.9522 30.6086 36.1156C29.6549 38.1782 29.0034 40.5346 28.8159 43.9861C28.6285 47.4436 28.5844 48.5481 28.5844 57.3534C28.5844 66.1587 28.6285 67.2632 28.817 70.7207V70.7207Z",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "@samautos"), __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "118",
    height: "100",
    viewBox: "0 0 118 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M100.713 15.4021C77.6687 -3.92979 40.3118 -3.92515 17.2744 15.4127C-5.76301 34.7506 -5.75748 66.0985 17.2871 85.4304C40.3316 104.762 77.6883 104.758 100.726 85.4198C111.79 76.1326 118.004 63.5376 118 50.4056C117.997 37.2758 111.779 24.6848 100.713 15.4021ZM89.3535 69.8731C89.351 69.8752 89.3484 69.8775 89.3457 69.8797V69.8632L86.3562 72.3552C82.4901 75.6404 76.8596 76.9921 71.5078 75.9199C66.116 74.7088 60.9904 72.781 56.3253 70.2098C51.9911 67.8853 47.9745 65.1681 44.3483 62.1066C41.0118 59.3273 38.0143 56.2754 35.3998 52.9968C32.5402 49.4688 30.2768 45.6256 28.6739 41.5764C26.8363 36.8196 28.359 31.6 32.6073 28.0933L36.1079 25.1557C37.0811 24.3354 38.6626 24.3325 39.64 25.1492C39.6425 25.1513 39.6453 25.1534 39.6479 25.1557L50.7004 34.4305C51.6781 35.2473 51.6815 36.5744 50.7083 37.3946C50.7057 37.3967 50.7032 37.3988 50.7004 37.4011L44.2104 42.8472C42.3483 44.3929 42.1141 46.849 43.6598 48.6235C46.0072 51.3268 48.6048 53.8705 51.4283 56.2315C54.5762 58.8846 57.9985 61.298 61.6548 63.4436C63.7676 64.6801 66.6318 64.4717 68.4594 62.9485L74.733 57.6014C75.7063 56.781 77.2878 56.7781 78.2652 57.5948C78.2677 57.5969 78.2703 57.5991 78.273 57.6014L89.3454 66.9093C90.3233 67.7258 90.3268 69.0527 89.3535 69.8731Z",
    fill: "#50FFAB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "555-555-5555")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSocials);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject3()));
var SocialGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].between("small", "medium")(_templateObject6()));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@popmotion/easing/dist/easing.es.js ***!
  \**********************************************************/
/*! exports provided: reversed, mirrored, createReversedEasing, createMirroredEasing, createExpoIn, createBackIn, createAnticipateEasing, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, bounceOut, bounceIn, bounceInOut, cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return mirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReversedEasing", function() { return createReversedEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirroredEasing", function() { return createMirroredEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return createAnticipateEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reversed(easeIn);
var easeInOut = /*#__PURE__*/mirrored(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reversed(circIn);
var circInOut = /*#__PURE__*/mirrored(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reversed(backIn);
var backInOut = /*#__PURE__*/mirrored(backIn);
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function (p) {
    return 1.0 - bounceOut(1.0 - p);
};
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    calcSampleValues();
    var resolver = function (aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}




/***/ }),

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@popmotion/popcorn/dist/popcorn.es.js ***!
  \************************************************************/
/*! exports provided: createAnticipateEasing, createBackIn, createExpoIn, cubicBezier, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, reversed, mirrored, angle, applyOffset, clamp, conditional, degreesToRadians, distance, interpolate, isPoint, isPoint3D, mix, mixArray, mixColor, mixComplex, mixObject, pipe, pointFromVector, progress, radiansToDegrees, smooth, smoothFrame, snap, springForce, springForceExpo, springForceLinear, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixObject", function() { return mixObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForce", function() { return springForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceExpo", function() { return springForceExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceLinear", function() { return springForceLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap$1; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createAnticipateEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["cubicBezier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["reversed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["mirrored"]; });







var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };

var radiansToDegrees = (function (radians) { return (radians * 180) / Math.PI; });

var angle = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
});

var applyOffset = (function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
});

var curryRange = (function (func) { return function (min, max, v) { return (v !== undefined ? func(min, max, v) : function (cv) { return func(min, max, cv); }); }; });

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);

var conditional = (function (check, apply) { return function (v) {
    return check(v) ? apply(v) : v;
}; });

var degreesToRadians = (function (degrees) { return (degrees * Math.PI) / 180; });

var isPoint = (function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
});

var isPoint3D = (function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
});

var distance1D = function (a, b) { return Math.abs(a - b); };
var distance = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
});

var progress = (function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});

var mix = (function (from, to, progress) {
    return -progress * from + progress * to + from;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color$$1) {
    return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = (function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
});

var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = (function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
});

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) { return mix(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = __assign({}, origin, target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var mixNumber = function (from, to) { return function (p) { return mix(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer(progress(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, clamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return clamp
        ? pipe(clamp$1(input[0], input[inputLength - 1]), interpolator)
        : interpolator;
}

var pointFromVector = (function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
});

var toDecimal = (function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
});

var smoothFrame = (function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(prevValue +
        (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
});

var smooth = (function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta
            ? smoothFrame(previousValue, v, timeDelta, strength)
            : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
});

var snap = (function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
});

var identity = function (v) { return v; };
var springForce = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = identity; }
    return curryRange(function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0
            ? origin + springModifiedDisplacement
            : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);

var velocityPerFrame = (function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
});

var velocityPerSecond = (function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
});

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
var wrap$1 = curryRange(wrap);

var clampProgress = clamp$1(0, 1);
var steps = (function (steps, direction) {
    if (direction === void 0) { direction = 'end'; }
    return function (progress) {
        progress =
            direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/framer-motion.es.js ***!
  \*************************************************************/
/*! exports provided: AnimatePresence, AnimationControls, DragControls, MotionContext, MotionPluginContext, MotionPlugins, MotionValue, Point, ReducedMotion, UnstableSyncLayout, animationControls, createMotionComponent, isValidMotionProp, motion, motionValue, transform, unwrapMotionValue, useAnimatedState, useAnimation, useCycle, useDomEvent, useDragControls, useExternalRef, useGestures, useInvertedScale, useMotionValue, usePanGesture, usePresence, useReducedMotion, useSpring, useTapGesture, useTransform, useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationControls", function() { return AnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionContext", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginContext", function() { return MotionPluginContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPlugins", function() { return MotionPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducedMotion", function() { return ReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnstableSyncLayout", function() { return UnstableSyncLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapMotionValue", function() { return unwrapMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExternalRef", function() { return useExternalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGestures", function() { return useGestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylefire */ "./node_modules/stylefire/dist/stylefire.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");











var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformer = _b.transformer, parent = _b.parent;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = _this.transformer ? _this.transformer(v) : v;
            if (_this.updateSubscribers && _this.prev !== _this.current) {
                _this.updateSubscribers.forEach(_this.notifySubscriber);
            }
            if (_this.children) {
                _this.children.forEach(_this.setChild);
            }
            if (render && _this.renderSubscribers) {
                _this.renderSubscribers.forEach(_this.notifySubscriber);
            }
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.scheduleVelocityCheck);
            }
        };
        /**
         * Notify a subscriber with the latest value.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @param subscriber - The subscriber to notify.
         *
         * @internal
         */
        this.notifySubscriber = function (subscriber) {
            subscriber(_this.current);
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        /**
         * Updates child `MotionValue`.
         *
         * @param child - Child `MotionValue`.
         *
         * @internal
         */
        this.setChild = function (child) { return child.set(_this.current); };
        this.parent = parent;
        this.transformer = transformer;
        this.set(init, false);
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Creates a new `MotionValue` that's subscribed to the output of this one.
     *
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    MotionValue.prototype.addChild = function (config) {
        if (config === void 0) { config = {}; }
        var child = new MotionValue(this.current, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ parent: this }, config));
        if (!this.children)
            this.children = new Set();
        this.children.add(child);
        return child;
    };
    /**
     * Stops a `MotionValue` from being subscribed to this one.
     *
     * @param child - The subscribed `MotionValue`
     *
     * @internal
     */
    MotionValue.prototype.removeChild = function (child) {
        if (!this.children) {
            return;
        }
        this.children.delete(child);
    };
    /**
     * Subscribes a subscriber function to a subscription list.
     *
     * @param subscriptions - A `Set` of subscribers.
     * @param subscription - A subscriber function.
     */
    MotionValue.prototype.subscribeTo = function (subscriptions, subscription) {
        var _this = this;
        var updateSubscriber = function () { return subscription(_this.current); };
        subscriptions.add(updateSubscriber);
        return function () { return subscriptions.delete(updateSubscriber); };
    };
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        if (!this.updateSubscribers)
            this.updateSubscribers = new Set();
        return this.subscribeTo(this.updateSubscribers, subscription);
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        if (!this.renderSubscribers)
            this.renderSubscribers = new Set();
        // Render immediately
        this.notifySubscriber(subscription);
        return this.subscribeTo(this.renderSubscribers, subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["velocityPerSecond"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers && this.updateSubscribers.clear();
        this.renderSubscribers && this.renderSubscribers.clear();
        this.parent && this.parent.removeChild(this);
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init, opts) {
    return new MotionValue(init, opts);
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

var isMotionValue = function (value) {
    return value instanceof MotionValue;
};

// Creating a styler factory for the `onUpdate` prop allows all values
// to fire and the `onUpdate` prop will only fire once per frame
var updateStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["createStylerFactory"])({
    onRead: function () { return null; },
    onRender: function (state, _a) {
        var onUpdate = _a.onUpdate;
        return onUpdate(state);
    },
});
var MotionValuesMap = /** @class */ (function () {
    function MotionValuesMap() {
        this.hasMounted = false;
        this.values = new Map();
        this.unsubscribers = new Map();
    }
    MotionValuesMap.prototype.has = function (key) {
        return this.values.has(key);
    };
    MotionValuesMap.prototype.set = function (key, value) {
        this.values.set(key, value);
        if (this.hasMounted) {
            this.bindValueToOutput(key, value);
        }
    };
    MotionValuesMap.prototype.get = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = new MotionValue(defaultValue);
            this.set(key, value);
        }
        return value;
    };
    MotionValuesMap.prototype.forEach = function (callback) {
        return this.values.forEach(callback);
    };
    MotionValuesMap.prototype.bindValueToOutput = function (key, value) {
        var _this = this;
        var onRender = function (v) { return _this.output && _this.output(key, v); };
        var unsubscribeOnRender = value.onRenderRequest(onRender);
        var onChange = function (v) {
            _this.onUpdate && _this.onUpdate.set(key, v);
        };
        var unsubscribeOnChange = value.onChange(onChange);
        if (this.unsubscribers.has(key)) {
            this.unsubscribers.get(key)();
        }
        this.unsubscribers.set(key, function () {
            unsubscribeOnRender();
            unsubscribeOnChange();
        });
    };
    MotionValuesMap.prototype.setOnUpdate = function (onUpdate) {
        this.onUpdate = undefined;
        if (onUpdate) {
            this.onUpdate = updateStyler({ onUpdate: onUpdate });
        }
    };
    MotionValuesMap.prototype.setTransformTemplate = function (transformTemplate) {
        if (this.transformTemplate !== transformTemplate) {
            this.transformTemplate = transformTemplate;
            this.updateTransformTemplate();
        }
    };
    MotionValuesMap.prototype.getTransformTemplate = function () {
        return this.transformTemplate;
    };
    MotionValuesMap.prototype.updateTransformTemplate = function () {
        if (this.output) {
            this.output("transform", this.transformTemplate);
        }
    };
    MotionValuesMap.prototype.mount = function (output) {
        var _this = this;
        this.hasMounted = true;
        if (output)
            this.output = output;
        this.values.forEach(function (value, key) { return _this.bindValueToOutput(key, value); });
        this.updateTransformTemplate();
    };
    MotionValuesMap.prototype.unmount = function () {
        var _this = this;
        this.values.forEach(function (_value, key) {
            var unsubscribe = _this.unsubscribers.get(key);
            unsubscribe && unsubscribe();
        });
    };
    return MotionValuesMap;
}());
var specialMotionValueProps = new Set(["dragOriginX", "dragOriginY"]);
var useMotionValues = function (props) {
    var motionValues = useConstant(function () {
        var map = new MotionValuesMap();
        /**
         * Loop through every prop and add any detected `MotionValue`s. This is SVG-specific
         * code that should be extracted, perhaps considered hollistically with `useMotionStyles`.
         *
         * <motion.circle cx={motionValue(0)} />
         */
        for (var key in props) {
            if (isMotionValue(props[key]) &&
                !specialMotionValueProps.has(key)) {
                map.set(key, props[key]);
            }
        }
        return map;
    });
    motionValues.setOnUpdate(props.onUpdate);
    motionValues.setTransformTemplate(props.transformTemplate);
    return motionValues;
};

var session = null;
var syncRenderSession = {
    isOpen: function () { return session !== null; },
    open: function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!session, "Sync render session already open");
        session = [];
    },
    flush: function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(session !== null, "No sync render session found");
        session && session.forEach(function (styler) { return styler.render(); });
        session = null;
    },
    push: function (styler) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(session !== null, "No sync render session found");
        session && session.push(styler);
    },
};

/**
 * `useEffect` gets resolved bottom-up. We defer some optional functionality to child
 * components, so to ensure everything runs correctly we export the ref-binding logic
 * to a new component rather than in `useMotionValues`.
 */
var MountComponent = function (_a) {
    var ref = _a.innerRef, values = _a.values, isStatic = _a.isStatic;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(ref.current instanceof Element, "No `ref` found. Ensure components created with `motion.custom` forward refs using `React.forwardRef`");
        var domStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(ref.current, {
            preparseOutput: false,
            enableHardwareAcceleration: !isStatic,
        });
        values.mount(function (key, value) {
            domStyler.set(key, value);
            if (syncRenderSession.isOpen()) {
                syncRenderSession.push(domStyler);
            }
        });
        return function () { return values.unmount(); };
    }, []);
    return null;
};
var Mount = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(MountComponent);

var createValueResolver = function (resolver) { return function (values) {
    var resolvedValues = {};
    values.forEach(function (value, key) { return (resolvedValues[key] = resolver(value)); });
    return resolvedValues;
}; };
var resolveCurrent = createValueResolver(function (value) { return value.get(); });

var transformOriginProps = new Set(["originX", "originY", "originZ"]);
var isTransformOriginProp = function (key) { return transformOriginProps.has(key); };
var buildStyleAttr = function (values, styleProp, isStatic) {
    var motionValueStyles = resolveCurrent(values);
    var transformTemplate = values.getTransformTemplate();
    if (transformTemplate) {
        // If `transform` has been manually set as a string, pass that through the template
        // otherwise pass it forward to Stylefire's style property builder
        motionValueStyles.transform = styleProp.transform
            ? transformTemplate({}, styleProp.transform)
            : transformTemplate;
    }
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["buildStyleProperty"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, styleProp), motionValueStyles), !isStatic);
};
var useMotionStyles = function (values, styleProp, isStatic, transformValues) {
    if (styleProp === void 0) { styleProp = {}; }
    var style = {};
    var prevMotionStyles = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({}).current;
    for (var key in styleProp) {
        var thisStyle = styleProp[key];
        if (isMotionValue(thisStyle)) {
            // If this is a motion value, add it to our MotionValuesMap
            values.set(key, thisStyle);
        }
        else if (!isStatic &&
            (Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["isTransformProp"])(key) || isTransformOriginProp(key))) {
            // Or if it's a transform prop, create a motion value (or update an existing one)
            // to ensure Stylefire can reconcile all the transform values together.
            // A further iteration on this would be to create a single styler per component that gets
            // used in the DOM renderer's buildStyleAttr *and* animations, then we would only
            // have to convert animating values to `MotionValues` (we could probably remove this entire function).
            // The only architectural consideration is to allow Stylefire to have elements mounted after
            // a styler is created.
            if (!values.has(key)) {
                // If it doesn't exist as a motion value, create it
                values.set(key, motionValue(thisStyle));
            }
            else {
                // Otherwise only update it if it's changed from a previous render
                if (thisStyle !== prevMotionStyles[key]) {
                    var value = values.get(key);
                    value.set(thisStyle);
                }
            }
            prevMotionStyles[key] = thisStyle;
        }
        else {
            style[key] = thisStyle;
        }
    }
    return transformValues ? transformValues(style) : style;
};

var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};

var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};
var dimensionTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_6__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["vh"], auto];
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dimensionTypes, [style_value_types__WEBPACK_IMPORTED_MODULE_6__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"]]);
var testValueType = function (v) { return function (type) { return type.test(v); }; };
var getDimensionValueType = function (v) {
    return dimensionTypes.find(testValueType(v));
};
var getValueType = function (v) { return valueTypes.find(testValueType(v)); };

var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var overDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 700,
    damping: to === 0 ? 100 : 35,
}); };
var linearTween = function () { return ({
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: overDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: to }, transitionFactory(to));
};

/**
 * A Popmotion action that accepts a single `to` prop. When it starts, it immediately
 * updates with `to` and then completes. By using this we can compose instant transitions
 * in with the same logic that applies `delay` or returns a `Promise` etc.
 *
 * Accepting `duration` is a little bit of a hack that simply defers the completetion of
 * the animation until after the duration finishes. This is for situations when you're **only**
 * animating non-animatable values and then setting something on `transitionEnd`. Really
 * you want this to fire after the "animation" finishes, rather than instantly.
 *
 * ```
 * animate={{
 *   display: 'block',
 *   transitionEnd: { display: 'none' }
 * }}
 * ```
 */
var just = function (_a) {
    var to = _a.to, duration = _a.duration;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["action"])(function (_a) {
        var update = _a.update, complete = _a.complete;
        update(to);
        duration ? Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["delay"])(duration).start({ complete: complete }) : complete();
    });
};

var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var x1 = definition[0], y1 = definition[1], x2 = definition[2], y2 = definition[3];
        return Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_8__["cubicBezier"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(_popmotion_easing__WEBPACK_IMPORTED_MODULE_8__[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

var isDurationAnimation = function (v) {
    return v.hasOwnProperty("duration") || v.hasOwnProperty("repeatDelay");
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

var transitions = { tween: popmotion__WEBPACK_IMPORTED_MODULE_7__["tween"], spring: popmotion__WEBPACK_IMPORTED_MODULE_7__["spring"], keyframes: popmotion__WEBPACK_IMPORTED_MODULE_7__["keyframes"], inertia: popmotion__WEBPACK_IMPORTED_MODULE_7__["inertia"], just: just };
var transitionOptionParser = {
    tween: function (opts) {
        if (opts.ease) {
            var ease = isEasingArray(opts.ease) ? opts.ease[0] : opts.ease;
            opts.ease = easingDefinitionToFunction(ease);
        }
        return opts;
    },
    keyframes: function (_a) {
        var from = _a.from, to = _a.to, velocity = _a.velocity, opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to", "velocity"]);
        if (opts.values && opts.values[0] === null) {
            var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(opts.values);
            values[0] = from;
            opts.values = values;
        }
        if (opts.ease) {
            opts.easings = isEasingArray(opts.ease)
                ? opts.ease.map(easingDefinitionToFunction)
                : easingDefinitionToFunction(opts.ease);
        }
        opts.ease = _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__["linear"];
        return opts;
    },
};
var isTransitionDefined = function (_a) {
    var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection"]);
    return Object.keys(transition).length;
};
var getTransitionDefinition = function (key, to, transitionDefinition) {
    var delay = transitionDefinition ? transitionDefinition.delay : 0;
    // If no object, return default transition
    // A better way to handle this would be to deconstruct out all the shared Orchestration props
    // and see if there's any props remaining
    if (transitionDefinition === undefined ||
        !isTransitionDefined(transitionDefinition)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, getDefaultTransition(key, to));
    }
    var valueTransitionDefinition = transitionDefinition[key] ||
        transitionDefinition.default ||
        transitionDefinition;
    if (valueTransitionDefinition.type === false) {
        return {
            delay: valueTransitionDefinition.hasOwnProperty("delay")
                ? valueTransitionDefinition.delay
                : delay,
            to: isKeyframesTarget(to)
                ? to[to.length - 1]
                : to,
            type: "just",
        };
    }
    else if (isKeyframesTarget(to)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ values: to, duration: 0.8, delay: delay, ease: "linear" }, valueTransitionDefinition), { 
            // This animation must be keyframes if we're animating through an array
            type: "keyframes" });
    }
    else {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "tween", to: to,
            delay: delay }, valueTransitionDefinition);
    }
};
var preprocessOptions = function (type, opts) {
    return transitionOptionParser[type]
        ? transitionOptionParser[type](opts)
        : opts;
};
var getAnimation = function (key, value, target, transition) {
    var origin = value.get();
    var isOriginAnimatable = isAnimatable(key, origin);
    var isTargetAnimatable = isAnimatable(key, target);
    // TODO we could probably improve this check to ensure both values are of the same type -
    // for instance 100 to #fff. This might live better in Popmotion.
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to " + target + ". \"" + origin + "\" is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    // Parse the `transition` prop and return options for the Popmotion animation
    var _a = getTransitionDefinition(key, target, transition), _b = _a.type, type = _b === void 0 ? "tween" : _b, transitionDefinition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["type"]);
    // If this is an animatable pair of values, return an animation, otherwise use `just`
    var actionFactory = isOriginAnimatable && isTargetAnimatable
        ? transitions[type]
        : just;
    var opts = preprocessOptions(type, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: origin, velocity: value.getVelocity() }, transitionDefinition));
    // Convert duration from Framer Motion's seconds into Popmotion's milliseconds
    if (isDurationAnimation(opts)) {
        if (opts.duration) {
            opts.duration = secondsToMilliseconds(opts.duration);
        }
        if (opts.repeatDelay) {
            opts.repeatDelay = secondsToMilliseconds(opts.repeatDelay);
        }
    }
    return [actionFactory, opts];
};
/**
 * Start animation on a value. This function completely encapsulates Popmotion-specific logic.
 *
 * @internal
 */
function startAnimation(key, value, target, _a) {
    var _b = _a.delay, delay$1 = _b === void 0 ? 0 : _b, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["delay"]);
    return value.start(function (complete) {
        var activeAnimation;
        var _a = getAnimation(key, value, target, transition), animationFactory = _a[0], _b = _a[1], valueDelay = _b.delay, options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["delay"]);
        if (valueDelay !== undefined) {
            delay$1 = valueDelay;
        }
        var animate = function () {
            var animation = animationFactory(options);
            // Bind animation opts to animation
            activeAnimation = animation.start({
                update: function (v) { return value.set(v); },
                complete: complete,
            });
        };
        // If we're delaying this animation, only resolve it **after** the delay to
        // ensure the value's resolve velocity is up-to-date.
        if (delay$1) {
            activeAnimation = Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["delay"])(secondsToMilliseconds(delay$1)).start({
                complete: animate,
            });
        }
        else {
            animate();
        }
        return function () {
            if (activeAnimation)
                activeAnimation.stop();
        };
    });
}

/**
 * Get the current value of every `MotionValue`
 * @param values -
 */
var getCurrent = function (values) {
    var current = {};
    values.forEach(function (value, key) { return (current[key] = value.get()); });
    return current;
};
/**
 * Get the current velocity of every `MotionValue`
 * @param values -
 */
var getVelocity = function (values) {
    var velocity = {};
    values.forEach(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
};
/**
 * Check if value is a function that returns a `Target`. A generic typeof === 'function'
 * check, just helps with typing.
 * @param p -
 */
var isTargetResolver = function (p) {
    return typeof p === "function";
};
/**
 * Check if value is a list of variant labels
 * @param v -
 */
var isVariantLabels = function (v) { return Array.isArray(v); };
/**
 * Check if value is a numerical string, ie "100" or "100px"
 */
var isNumericalString = function (v) { return /^\d*\.?\d+$/.test(v); };
/**
 * Control animations for a single component
 *
 * @internal
 */
var ValueAnimationControls = /** @class */ (function () {
    function ValueAnimationControls(_a) {
        var _this = this;
        var values = _a.values, readValueFromSource = _a.readValueFromSource, makeTargetAnimatable = _a.makeTargetAnimatable;
        /**
         * A reference to the component's latest props. We could probably ditch this in
         * favour to a reference to the `custom` prop now we don't send all props through
         * to target resolvers.
         */
        this.props = {};
        /**
         * The component's variants, as provided by `variants`
         */
        this.variants = {};
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        /**
         * A series of target overrides that we can animate to/from when overrides are set/cleared.
         */
        this.overrides = [];
        /**
         * A series of target overrides as they were originally resolved.
         */
        this.resolvedOverrides = [];
        /**
         * A Set of currently active override indexes
         */
        this.activeOverrides = new Set();
        /**
         * A Set of value keys that are currently animating.
         */
        this.isAnimating = new Set();
        /**
         * Check if the associated `MotionValueMap` has a key with the provided string.
         * Pre-bound to the class so we can provide directly to the `filter` in `checkForNewValues`.
         */
        this.hasValue = function (key) { return !_this.values.has(key); };
        this.values = values;
        this.readValueFromSource = readValueFromSource;
        this.makeTargetAnimatable = makeTargetAnimatable;
        this.values.forEach(function (value, key) { return (_this.baseTarget[key] = value.get()); });
    }
    /**
     * Set the reference to the component's props.
     * @param props -
     */
    ValueAnimationControls.prototype.setProps = function (props) {
        this.props = props;
    };
    /**
     * Set the reference to the component's variants
     * @param variants -
     */
    ValueAnimationControls.prototype.setVariants = function (variants) {
        if (variants)
            this.variants = variants;
    };
    /**
     * Set the component's default transition
     * @param transition -
     */
    ValueAnimationControls.prototype.setDefaultTransition = function (transition) {
        if (transition)
            this.defaultTransition = transition;
    };
    /**
     * Set motion values without animation.
     *
     * @param definition -
     * @param isActive -
     */
    ValueAnimationControls.prototype.setValues = function (definition, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? new Set() : _c, priority = _b.priority;
        var _d = this.resolveVariant(definition), target = _d.target, transitionEnd = _d.transitionEnd;
        target = this.transformValues(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd));
        return Object.keys(target).forEach(function (key) {
            if (isActive.has(key))
                return;
            isActive.add(key);
            if (target) {
                var targetValue = resolveFinalValueInKeyframes(target[key]);
                if (_this.values.has(key)) {
                    var value = _this.values.get(key);
                    value && value.set(targetValue);
                }
                else {
                    _this.values.set(key, motionValue(targetValue));
                }
                if (!priority)
                    _this.baseTarget[key] = targetValue;
            }
        });
    };
    /**
     * Allows `transformValues` to be set by a component that allows us to
     * transform the values in a given `Target`. This allows Framer Library
     * to extend Framer Motion to animate `Color` variables etc. Currently we have
     * to manually support these extended types here in Framer Motion.
     *
     * @param values -
     */
    ValueAnimationControls.prototype.transformValues = function (values) {
        var transformValues = this.props.transformValues;
        return transformValues ? transformValues(values) : values;
    };
    /**
     * Check a `Target` for new values we haven't animated yet, and add them
     * to the `MotionValueMap`.
     *
     * Currently there's functionality here that is DOM-specific, we should allow
     * this functionality to be injected by the factory that creates DOM-specific
     * components.
     *
     * @param target -
     */
    ValueAnimationControls.prototype.checkForNewValues = function (target) {
        var newValueKeys = Object.keys(target).filter(this.hasValue);
        var numNewValues = newValueKeys.length;
        if (!numNewValues)
            return;
        for (var i = 0; i < numNewValues; i++) {
            var key = newValueKeys[i];
            var targetValue = target[key];
            var value = null;
            // If this is a keyframes value, we can attempt to use the first value in the
            // array as that's going to be the first value of the animation anyway
            if (Array.isArray(targetValue)) {
                value = targetValue[0];
            }
            // If it isn't a keyframes or the first keyframes value was set as `null`, read the
            // value from the DOM. It might be worth investigating whether to check props (for SVG)
            // or props.style (for HTML) if the value exists there before attempting to read.
            if (value === null) {
                value = this.readValueFromSource(key);
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
            }
            if (typeof value === "string" && isNumericalString(value)) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!getValueType(value) && style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].test(targetValue)) {
                // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
                value = style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].getAnimatableNone(targetValue);
            }
            this.values.set(key, motionValue(value));
            this.baseTarget[key] = value;
        }
    };
    /**
     * Resolve a variant from its label or resolver into an actual `Target` we can animate to.
     * @param variant -
     */
    ValueAnimationControls.prototype.resolveVariant = function (variant) {
        if (!variant) {
            return {
                target: undefined,
                transition: undefined,
                transitionEnd: undefined,
            };
        }
        if (isTargetResolver(variant)) {
            // resolve current and velocity
            variant = variant(this.props.custom, getCurrent(this.values), getVelocity(this.values));
        }
        var _a = variant.transition, transition = _a === void 0 ? this.defaultTransition : _a, transitionEnd = variant.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(variant, ["transition", "transitionEnd"]);
        return { transition: transition, transitionEnd: transitionEnd, target: target };
    };
    /**
     * Get the highest active override priority index
     */
    ValueAnimationControls.prototype.getHighestPriority = function () {
        if (!this.activeOverrides.size)
            return 0;
        return Math.max.apply(Math, Array.from(this.activeOverrides));
    };
    /**
     * Set an override. We add this layer of indirection so if, for instance, a tap gesture
     * starts and overrides a hover gesture, when we clear the tap gesture and fallback to the
     * hover gesture, if that hover gesture has changed in the meantime we can go to that rather
     * than the one that was resolved when the hover gesture animation started.
     *
     * @param definition -
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.setOverride = function (definition, overrideIndex) {
        this.overrides[overrideIndex] = definition;
        if (this.children) {
            this.children.forEach(function (child) {
                return child.setOverride(definition, overrideIndex);
            });
        }
    };
    /**
     * Start an override animation.
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.startOverride = function (overrideIndex) {
        var override = this.overrides[overrideIndex];
        if (override) {
            return this.start(override, { priority: overrideIndex });
        }
    };
    /**
     * Clear an override. We check every value we animated to in this override to see if
     * its present on any lower-priority overrides. If not, we animate it back to its base target.
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.clearOverride = function (overrideIndex) {
        var _this = this;
        if (this.children) {
            this.children.forEach(function (child) { return child.clearOverride(overrideIndex); });
        }
        var override = this.overrides[overrideIndex];
        if (!override)
            return;
        this.activeOverrides.delete(overrideIndex);
        var highest = this.getHighestPriority();
        this.resetIsAnimating();
        if (highest) {
            var highestOverride = this.overrides[highest];
            highestOverride && this.startOverride(highest);
        }
        // Figure out which remaining values were affected by the override and animate those
        var overrideTarget = this.resolvedOverrides[overrideIndex];
        if (!overrideTarget)
            return;
        var remainingValues = {};
        for (var key in this.baseTarget) {
            if (overrideTarget[key] !== undefined) {
                remainingValues[key] = this.baseTarget[key];
            }
        }
        this.onStart();
        this.animate(remainingValues).then(function () { return _this.onComplete(); });
    };
    /**
     * Apply a target/variant without any animation
     */
    ValueAnimationControls.prototype.apply = function (definition) {
        if (Array.isArray(definition)) {
            return this.applyVariantLabels(definition);
        }
        else if (typeof definition === "string") {
            return this.applyVariantLabels([definition]);
        }
        else {
            this.setValues(definition);
        }
    };
    /**
     * Apply variant labels without animation
     */
    ValueAnimationControls.prototype.applyVariantLabels = function (variantLabelList) {
        var _this = this;
        var isActive = new Set();
        var reversedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(variantLabelList).reverse();
        reversedList.forEach(function (key) {
            var _a = _this.resolveVariant(_this.variants[key]), target = _a.target, transitionEnd = _a.transitionEnd;
            if (transitionEnd) {
                _this.setValues(transitionEnd, { isActive: isActive });
            }
            if (target) {
                _this.setValues(target, { isActive: isActive });
            }
            if (_this.children && _this.children.size) {
                _this.children.forEach(function (child) {
                    return child.applyVariantLabels(variantLabelList);
                });
            }
        });
    };
    ValueAnimationControls.prototype.start = function (definition, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (opts.priority) {
            this.activeOverrides.add(opts.priority);
        }
        this.resetIsAnimating(opts.priority);
        var animation;
        if (isVariantLabels(definition)) {
            animation = this.animateVariantLabels(definition, opts);
        }
        else if (typeof definition === "string") {
            animation = this.animateVariant(definition, opts);
        }
        else {
            animation = this.animate(definition, opts);
        }
        this.onStart();
        return animation.then(function () { return _this.onComplete(); });
    };
    ValueAnimationControls.prototype.animate = function (animationDefinition, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.priority, priority = _d === void 0 ? 0 : _d, transitionOverride = _b.transitionOverride;
        var _e = this.resolveVariant(animationDefinition), target = _e.target, transition = _e.transition, transitionEnd = _e.transitionEnd;
        if (transitionOverride) {
            transition = transitionOverride;
        }
        if (!target)
            return Promise.resolve();
        target = this.transformValues(target);
        if (transitionEnd) {
            transitionEnd = this.transformValues(transitionEnd);
        }
        this.checkForNewValues(target);
        if (this.makeTargetAnimatable) {
            var animatable = this.makeTargetAnimatable(target, transitionEnd);
            target = animatable.target;
            transitionEnd = animatable.transitionEnd;
        }
        if (priority) {
            this.resolvedOverrides[priority] = target;
        }
        this.checkForNewValues(target);
        var animations = [];
        for (var key in target) {
            var value = this.values.get(key);
            if (!value || !target || target[key] === undefined)
                continue;
            var valueTarget = target[key];
            if (!priority) {
                this.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
            }
            if (this.isAnimating.has(key))
                continue;
            this.isAnimating.add(key);
            animations.push(startAnimation(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, transition)));
        }
        var allAnimations = Promise.all(animations);
        return transitionEnd
            ? allAnimations.then(function () {
                _this.setValues(transitionEnd, { priority: priority });
            })
            : allAnimations;
    };
    ValueAnimationControls.prototype.animateVariantLabels = function (variantLabels, opts) {
        var _this = this;
        var animations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(variantLabels).reverse()
            .map(function (label) { return _this.animateVariant(label, opts); });
        return Promise.all(animations);
    };
    ValueAnimationControls.prototype.animateVariant = function (variantLabel, opts) {
        var _this = this;
        var when = false;
        var delayChildren = 0;
        var staggerChildren = 0;
        var staggerDirection = 1;
        var priority = (opts && opts.priority) || 0;
        var variant = this.variants[variantLabel];
        var getAnimations = variant
            ? function () { return _this.animate(variant, opts); }
            : function () { return Promise.resolve(); };
        var getChildrenAnimations = this.children
            ? function () {
                return _this.animateChildren(variantLabel, delayChildren, staggerChildren, staggerDirection, priority);
            }
            : function () { return Promise.resolve(); };
        if (variant && this.children) {
            var transition = this.resolveVariant(variant).transition;
            if (transition) {
                when = transition.when || when;
                delayChildren = transition.delayChildren || delayChildren;
                staggerChildren = transition.staggerChildren || staggerChildren;
                staggerDirection =
                    transition.staggerDirection || staggerDirection;
            }
        }
        if (when) {
            var _a = when === "beforeChildren"
                ? [getAnimations, getChildrenAnimations]
                : [getChildrenAnimations, getAnimations], first = _a[0], last = _a[1];
            return first().then(last);
        }
        else {
            return Promise.all([getAnimations(), getChildrenAnimations()]);
        }
    };
    ValueAnimationControls.prototype.animateChildren = function (variantLabel, delayChildren, staggerChildren, staggerDirection, priority) {
        if (delayChildren === void 0) { delayChildren = 0; }
        if (staggerChildren === void 0) { staggerChildren = 0; }
        if (staggerDirection === void 0) { staggerDirection = 1; }
        if (priority === void 0) { priority = 0; }
        if (!this.children) {
            return Promise.resolve();
        }
        var animations = [];
        var maxStaggerDuration = (this.children.size - 1) * staggerChildren;
        var generateStaggerDuration = staggerDirection === 1
            ? function (i) { return i * staggerChildren; }
            : function (i) { return maxStaggerDuration - i * staggerChildren; };
        Array.from(this.children).forEach(function (childControls, i) {
            var animation = childControls.animateVariant(variantLabel, {
                priority: priority,
                delay: delayChildren + generateStaggerDuration(i),
            });
            animations.push(animation);
        });
        return Promise.all(animations);
    };
    ValueAnimationControls.prototype.onStart = function () {
        var onAnimationStart = this.props.onAnimationStart;
        onAnimationStart && onAnimationStart();
    };
    ValueAnimationControls.prototype.onComplete = function () {
        var onAnimationComplete = this.props.onAnimationComplete;
        onAnimationComplete && onAnimationComplete();
    };
    ValueAnimationControls.prototype.checkOverrideIsAnimating = function (priority) {
        var numOverrides = this.overrides.length;
        for (var i = priority + 1; i < numOverrides; i++) {
            var resolvedOverride = this.resolvedOverrides[i];
            if (resolvedOverride) {
                for (var key in resolvedOverride) {
                    this.isAnimating.add(key);
                }
            }
        }
    };
    ValueAnimationControls.prototype.resetIsAnimating = function (priority) {
        if (priority === void 0) { priority = 0; }
        this.isAnimating.clear();
        // If this isn't the highest priority gesture, block the animation
        // of anything that's currently being animated
        if (priority < this.getHighestPriority()) {
            this.checkOverrideIsAnimating(priority);
        }
        if (this.children) {
            this.children.forEach(function (child) { return child.resetIsAnimating(priority); });
        }
    };
    ValueAnimationControls.prototype.stop = function () {
        this.values.forEach(function (value) { return value.stop(); });
    };
    /**
     * Add the controls of a child component.
     * @param controls -
     */
    ValueAnimationControls.prototype.addChild = function (controls) {
        if (!this.children) {
            this.children = new Set();
        }
        this.children.add(controls);
        // We set child overrides when `setOverride` is called, but also have to do it here
        // as the first time `setOverride` is called all the children might not have been added yet.
        this.overrides.forEach(function (override, i) {
            override && controls.setOverride(override, i);
        });
    };
    ValueAnimationControls.prototype.removeChild = function (controls) {
        if (!this.children) {
            return;
        }
        this.children.delete(controls);
    };
    ValueAnimationControls.prototype.resetChildren = function () {
        if (this.children)
            this.children.clear();
    };
    return ValueAnimationControls;
}());

/**
 * Use callback either only on the initial render or on all renders. In concurrent mode
 * the "initial" render might run multiple times
 *
 * @param callback - Callback to run
 * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
 *
 * @public
 */
function useInitialOrEveryRender(callback, isInitialOnly) {
    if (isInitialOnly === void 0) { isInitialOnly = false; }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
    }
    isInitialRender.current = false;
}

/**
 * Control animations on one or more components.
 *
 * @public
 */
var AnimationControls = /** @class */ (function () {
    function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.componentControls = new Set();
    }
    /**
     * Set variants on this and all child components.
     *
     * @param variants - The variants to set
     *
     * @internal
     */
    AnimationControls.prototype.setVariants = function (variants) {
        this.variants = variants;
        this.componentControls.forEach(function (controls) {
            return controls.setVariants(variants);
        });
    };
    /**
     * Set a default transition on this and all child components
     *
     * @param transition - The default transition to set
     *
     * @internal
     */
    AnimationControls.prototype.setDefaultTransition = function (transition) {
        this.defaultTransition = transition;
        this.componentControls.forEach(function (controls) {
            return controls.setDefaultTransition(transition);
        });
    };
    /**
     * Subscribes a component's animation controls to this.
     *
     * @param controls - The controls to subscribe
     * @returns An unsubscribe function.
     *
     * @internal
     */
    AnimationControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        if (this.variants)
            controls.setVariants(this.variants);
        if (this.defaultTransition)
            controls.setDefaultTransition(this.defaultTransition);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Starts an animation on all linked components.
     *
     * @remarks
     *
     * ```jsx
     * controls.start("variantLabel")
     * controls.start({
     *   x: 0,
     *   transition: { duration: 1 }
     * })
     * ```
     *
     * @param definition - Properties or variant label to animate to
     * @param transition - Optional `transtion` to apply to a variant
     * @returns - A `Promise` that resolves when all animations have completed.
     *
     * @public
     */
    AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
            var animations_1 = [];
            this.componentControls.forEach(function (controls) {
                var animation = controls.start(definition, {
                    transitionOverride: transitionOverride,
                });
                animations_1.push(animation);
            });
            return Promise.all(animations_1);
        }
        else {
            return new Promise(function (resolve) {
                _this.pendingAnimations.push({
                    animation: [definition, transitionOverride],
                    resolve: resolve,
                });
            });
        }
    };
    /**
     * Instantly set to a set of properties or a variant.
     *
     * ```jsx
     * // With properties
     * controls.set({ opacity: 0 })
     *
     * // With variants
     * controls.set("hidden")
     * ```
     *
     * @internalremarks
     * We could perform a similar trick to `.start` where this can be called before mount
     * and we maintain a list of of pending actions that get applied on mount. But the
     * expectation of `set` is that it happens synchronously and this would be difficult
     * to do before any children have even attached themselves. It's also poor practise
     * and we should discourage render-synchronous `.start` calls rather than lean into this.
     *
     * @public
     */
    AnimationControls.prototype.set = function (definition) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return this.componentControls.forEach(function (controls) {
            return controls.apply(definition);
        });
    };
    /**
     * Stops animations on all linked components.
     *
     * ```jsx
     * controls.stop()
     * ```
     *
     * @public
     */
    AnimationControls.prototype.stop = function () {
        this.componentControls.forEach(function (controls) { return controls.stop(); });
    };
    /**
     * Initialises the animation controls.
     *
     * @internal
     */
    AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
            var animation = _a.animation, resolve = _a.resolve;
            return _this.start.apply(_this, animation).then(resolve);
        });
    };
    /**
     * Stops all child animations when the host component unmounts.
     *
     * @internal
     */
    AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
    };
    return AnimationControls;
}());
/**
 * @internal
 */
var animationControls = function () { return new AnimationControls(); };

var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);

/**
 * @internal
 */
var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
    static: false,
});
var isVariantLabel = function (v) {
    return typeof v === "string" || Array.isArray(v);
};
var isAnimationControls = function (v) {
    return v instanceof AnimationControls;
};
/**
 * Set up the context for children motion components.
 *
 * We also use this opportunity to apply `initial` values
 */
var useMotionContext = function (parentContext, controls, values, isStatic, _a) {
    if (isStatic === void 0) { isStatic = false; }
    var initial = _a.initial, animate = _a.animate, variants = _a.variants, whileTap = _a.whileTap, whileHover = _a.whileHover;
    var _b;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    // Override initial with that from a parent context, if defined
    if (((_b = presenceContext) === null || _b === void 0 ? void 0 : _b.initial) !== undefined) {
        initial = presenceContext.initial;
    }
    var initialState;
    if (initial === false && !isAnimationControls(animate)) {
        initialState = animate;
    }
    else if (typeof initial !== "boolean") {
        initialState = initial;
    }
    // Track mounted status so children can detect whether they were present during their
    // parent's first render
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    // We propagate this component's ValueAnimationControls *if* we're being provided variants,
    // if we're being used to control variants, or if we're being passed animation controls.
    // Otherwise this component should be "invisible" to variant propagation. This is a slight concession
    // to Framer X where every `Frame` is a `motion` component and it might be if we change that in the future
    // that this restriction is removed.
    var shouldPropagateControls = variants ||
        isVariantLabel(animate) ||
        isVariantLabel(whileTap) ||
        isVariantLabel(whileHover) ||
        isAnimationControls(animate);
    // If this component's `initial` prop is a variant label, propagate it. Otherwise pass the parent's.
    var targetInitial = isVariantLabel(initialState)
        ? initialState
        : parentContext.initial;
    // If this is a variant tree we need to propagate the `animate` prop in case new children are added after
    // the tree initially animates.
    var targetAnimate = isVariantLabel(animate)
        ? animate
        : parentContext.animate;
    // Only allow `initial` to trigger context re-renders if this is a `static` component (ie we're on the Framer canvas)
    // or in another non-animation/interaction environment.
    var initialDependency = isStatic ? targetInitial : null;
    // Only allow `animate` to trigger context re-renders if it's a variant label. If this is an array of
    // variant labels there's probably an optimisation to deep-compare but it might be an over-optimisation.
    // We want to do this as we rely on React's component rendering order each render cycle to determine
    // the new order of any child components for the `staggerChildren` functionality.
    var animateDependency = shouldPropagateControls && isVariantLabel(targetAnimate)
        ? targetAnimate
        : null;
    // The context to provide to the child. We `useMemo` because although `controls` and `initial` are
    // unlikely to change, by making the context an object it'll be considered a new value every render.
    // So all child motion components will re-render as a result.
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        controls: shouldPropagateControls
            ? controls
            : parentContext.controls,
        initial: targetInitial,
        animate: targetAnimate,
        values: values,
        hasMounted: hasMounted,
        isReducedMotion: parentContext.isReducedMotion,
    }); }, [initialDependency, animateDependency, parentContext.isReducedMotion]);
    // Update the `static` property every render. This is unlikely to change but also essentially free.
    context.static = isStatic;
    // Set initial state. If this is a static component (ie in Framer canvas), respond to updates
    // in `initial`.
    useInitialOrEveryRender(function () {
        var initialToApply = initialState || parentContext.initial;
        initialToApply && controls.apply(initialToApply);
    }, !isStatic);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        hasMounted.current = true;
    }, []);
    return context;
};

/**
 * Creates an imperative set of controls to trigger animations.
 *
 * This allows a consolidated, uniform API for animations, to be triggered by other APIs like the `animate` prop, or the gesture handlers.
 *
 * @param values
 * @param props
 * @param ref
 * @param subscribeToParentControls
 *
 * @internal
 */
function useValueAnimationControls(config, props, subscribeToParentControls) {
    var variants = props.variants, transition = props.transition;
    var parentControls = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).controls;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    var controls = useConstant(function () { return new ValueAnimationControls(config); });
    // Reset and resubscribe children every render to ensure stagger order is correct
    if (!presenceContext || presenceContext.isPresent) {
        controls.resetChildren();
        controls.setProps(props);
        controls.setVariants(variants);
        controls.setDefaultTransition(transition);
    }
    // We have to subscribe to the parent controls within a useEffect rather than during render,
    // as
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (subscribeToParentControls && parentControls) {
            parentControls.addChild(controls);
        }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return function () {
            // Remove reference to onAnimationComplete from controls. All the MotionValues
            // are unsubscribed from this component separately. We let animations run out
            // as they might be animating other components.
            var onAnimationComplete = props.onAnimationComplete, unmountProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["onAnimationComplete"]);
            controls.setProps(unmountProps);
            parentControls && parentControls.removeChild(controls);
        };
    }, []);
    return controls;
}

var checkShouldInheritVariant = function (_a) {
    var animate = _a.animate, variants = _a.variants, _b = _a.inherit, inherit = _b === void 0 ? true : _b;
    return (inherit &&
        !!variants &&
        (!animate || animate instanceof AnimationControls));
};

/**
 * Uses the ref that is passed in, or creates a new one
 * @param external - External ref
 * @internal
 */
function useExternalRef(externalRef) {
    // We're conditionally calling `useRef` here which is sort of naughty as hooks
    // shouldn't be called conditionally. However, Framer Motion will break if this
    // condition changes anyway. It might be possible to use an invariant here to
    // make it explicit, but I expect changing `ref` is not normal behaviour.
    var ref = !externalRef || typeof externalRef === "function"
        ? Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null)
        : externalRef;
    // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
    // but `ref` types changing between renders would break Motion anyway. If we receive
    // bug reports about this, we should track the provided ref and throw an invariant
    // rather than move the conditional to inside the useEffect as this will be fired
    // for every Frame component within Framer.
    if (externalRef && typeof externalRef === "function") {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            externalRef(ref.current);
            return function () { return externalRef(null); };
        }, []);
    }
    return ref;
}

/**
 * @internal
 */
var createMotionComponent = function (_a) {
    var getValueControlsConfig = _a.getValueControlsConfig, loadFunctionalityComponents = _a.loadFunctionalityComponents, renderComponent = _a.renderComponent;
    function MotionComponent(props, externalRef) {
        var ref = useExternalRef(externalRef);
        var parentContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
        var isStatic = parentContext.static || props.static || false;
        var values = useMotionValues(props);
        var style = useMotionStyles(values, props.style, isStatic, props.transformValues);
        var shouldInheritVariant = checkShouldInheritVariant(props);
        var controlsConfig = useConstant(function () {
            return getValueControlsConfig(ref, values);
        });
        var controls = useValueAnimationControls(controlsConfig, props, shouldInheritVariant);
        var context = useMotionContext(parentContext, controls, values, isStatic, props);
        var functionality = isStatic
            ? null
            : loadFunctionalityComponents(ref, values, props, parentContext, controls, shouldInheritVariant);
        var renderedComponent = renderComponent(ref, style, values, props, isStatic);
        return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionContext.Provider, { value: context }, renderedComponent),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Mount, { innerRef: ref, values: values, isStatic: isStatic }),
                functionality)));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(MotionComponent);
};

/**
 * @internal
 */
var htmlElements = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "webview",
];
/**
 * @internal
 */
var svgElements = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
];

/**
 * @internal
 */
var MotionPluginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
    transformPagePoint: function (p) { return p; },
});
/**
 * @remarks For now I think this should remain a private API for our own use
 * until we can figure out a nicer way of allowing people to add these
 *
 * @internal
 */
function MotionPlugins(_a) {
    var children = _a.children, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children"]);
    var pluginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext);
    var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pluginContext)).current;
    // Mutative to prevent triggering rerenders in all listening
    // components every time this component renders
    for (var key in props) {
        value[key] = props[key];
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionPluginContext.Provider, { value: value }, children));
}

function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return function () { return callback(); }; }, []);
}

function addDomEvent(target, eventName, handler, options) {
    if (!handler)
        return;
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    if (!eventHandler)
        return undefined;
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e) {
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var _a = primaryTouch || defaultPagePoint, pageX = _a.pageX, pageY = _a.pageY;
    return { x: pageX, y: pageY };
}
function pointFromMouse(_a) {
    var _b = _a.pageX, pageX = _b === void 0 ? 0 : _b, _c = _a.pageY, pageY = _c === void 0 ? 0 : _c;
    return { x: pageX, y: pageY };
}
function extractEventInfo(event) {
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event)
            : pointFromMouse(event),
    };
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    if (!handler)
        return;
    var listener = function (event) { return handler(event, extractEventInfo(event)); };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

var isBrowser = typeof window !== "undefined";
// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return isBrowser && window.onmousedown === null;
};

var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

/** @public */
var Point;
(function (Point) {
    /** @beta */
    Point.subtract = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    };
    /** @beta */
    Point.relativeTo = function (idOrElem) {
        var elem;
        var getElem = function () {
            // Caching element here could be leaky because of React lifecycle
            if (elem !== undefined)
                return elem;
            if (typeof idOrElem === "string") {
                elem = document.getElementById(idOrElem);
            }
            else {
                elem = idOrElem;
            }
            return elem;
        };
        return function (_a) {
            var x = _a.x, y = _a.y;
            var localElem = getElem();
            if (!localElem)
                return undefined;
            var rect = localElem.getBoundingClientRect();
            return {
                x: x - rect.left - window.scrollX,
                y: y - rect.top - window.scrollY,
            };
        };
    };
})(Point || (Point = {}));

var isViewportScrollBlocked = false;
var isBrowser$1 = typeof window !== "undefined";
if (isBrowser$1) {
    document.addEventListener("touchmove", function (event) {
        if (isViewportScrollBlocked) {
            event.preventDefault();
        }
    }, { passive: false });
}
var blockViewportScroll = function () { return (isViewportScrollBlocked = true); };
var unblockViewportScroll = function () { return (isViewportScrollBlocked = false); };

/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["distance"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        var removeOnPointerMove = addPointerEvent(window, "pointermove", function (event, info) { return _this.handlePointerMove(event, info); });
        var removeOnPointerUp = addPointerEvent(window, "pointerup", function (event, info) { return _this.handlePointerUp(event, info); });
        this.removeListeners = function () {
            removeOnPointerMove && removeOnPointerMove();
            removeOnPointerUp && removeOnPointerUp();
        };
    }
    PanSession.prototype.handlePointerMove = function (event, info) {
        this.lastMoveEvent = event;
        this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
        // Because Safari doesn't trigger mouseup events when it's above a `<select>`
        if (isMouseEvent(event) && event.buttons === 0) {
            this.handlePointerUp(event, info);
            return;
        }
        // Throttle mouse move event to once per frame
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(this.updatePoint, true);
    };
    PanSession.prototype.handlePointerUp = function (event, info) {
        this.end();
        var onEnd = this.handlers.onEnd;
        if (!onEnd)
            return;
        var panInfo = getPanInfo(transformPoint(info, this.transformPagePoint), this.history);
        onEnd && onEnd(event, panInfo);
    };
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(this.updatePoint);
        unblockViewportScroll();
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: Point.subtract(point, lastDevicePoint(history)),
        offset: Point.subtract(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a, ref) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    if (panSession.current !== null) {
        panSession.current.updateHandlers(handlers);
    }
    function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

var order = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function (gesture) {
    return order.indexOf(gesture) + 1;
};

function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}

var tapGesturePriority = getGesturePriority("whileTap");
/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a, ref) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, controls = _a.controls;
    var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isTapping = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var cancelPointerEventListener = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    function removePointerUp() {
        cancelPointerEventListener.current &&
            cancelPointerEventListener.current();
        cancelPointerEventListener.current = null;
    }
    if (whileTap && controls) {
        controls.setOverride(whileTap, tapGesturePriority);
    }
    // We load this event handler into a ref so we can later refer to
    // onPointerUp.current which will always have reference to the latest props
    var onPointerUp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    onPointerUp.current = function (event, info) {
        var element = ref.current;
        removePointerUp();
        if (!isTapping.current || !element)
            return;
        isTapping.current = false;
        if (controls && whileTap) {
            controls.clearOverride(tapGesturePriority);
        }
        // Check the gesture lock - if we get it, it means no drag gesture is active
        // and we can safely fire the tap gesture.
        var openGestureLock = getGlobalLock(true);
        if (!openGestureLock)
            return;
        openGestureLock();
        if (!isNodeOrChild(element, event.target)) {
            onTapCancel && onTapCancel(event, info);
        }
        else {
            onTap && onTap(event, info);
        }
    };
    function onPointerDown(event, info) {
        removePointerUp();
        cancelPointerEventListener.current = addPointerEvent(window, "pointerup", function (event, info) { return onPointerUp.current(event, info); });
        var element = ref.current;
        if (!element || isTapping.current)
            return;
        isTapping.current = true;
        onTapStart && onTapStart(event, info);
        if (controls && whileTap) {
            controls.startOverride(tapGesturePriority);
        }
    }
    usePointerEvent(ref, "pointerdown", hasTapListeners ? onPointerDown : undefined);
    useUnmountEffect(removePointerUp);
}

var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function (listener) { return function (event, info) {
    if (isMouseEvent(event))
        listener(event, info);
}; };
/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useHoverGesture(_a, ref) {
    var whileHover = _a.whileHover, onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, controls = _a.controls;
    if (whileHover && controls) {
        controls.setOverride(whileHover, hoverPriority);
    }
    usePointerEvent(ref, "pointerenter", filterTouch(function (event, info) {
        if (onHoverStart)
            onHoverStart(event, info);
        if (whileHover && controls) {
            controls.startOverride(hoverPriority);
        }
    }));
    usePointerEvent(ref, "pointerleave", filterTouch(function (event, info) {
        if (onHoverEnd)
            onHoverEnd(event, info);
        if (whileHover && controls) {
            controls.clearOverride(hoverPriority);
        }
    }));
}

/**
 * Add pan and tap gesture recognition to an element.
 *
 * @param props - Gesture event handlers
 * @param ref - React `ref` containing a DOM `Element`
 * @public
 */
function useGestures(props, ref) {
    usePanGesture(props, ref);
    useTapGesture(props, ref);
    useHoverGesture(props, ref);
}

var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };

var gestureProps = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
];
var Gestures = {
    key: "gestures",
    shouldRender: function (props) {
        return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
    },
    Component: makeRenderlessComponent(function (_a) {
        var innerRef = _a.innerRef, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["innerRef"]);
        useGestures(props, innerRef);
    }),
};

var isRefObject = function (ref) {
    return typeof ref === "object" && ref.hasOwnProperty("current");
};

var noop = function (v) { return v; };
/**
 * Don't block the default pointerdown behaviour of these elements.
 */
var allowDefaultPointerDown = new Set(["INPUT", "TEXTAREA", "SELECT"]);
var ComponentDragControls = /** @class */ (function () {
    function ComponentDragControls(_a) {
        var ref = _a.ref, values = _a.values, controls = _a.controls;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted t/r/b/l boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {
            transformPagePoint: noop,
        };
        /**
         * References to the MotionValues used for tracking the current dragged point.
         *
         * @internal
         */
        this.point = {};
        /**
         * The origin point for the current drag gesture.
         *
         * @internal
         */
        this.origin = {
            x: motionValue(0),
            y: motionValue(0),
        };
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        /**
         * A reference to the previous constraints bounding box
         *
         * @internal
         */
        this.prevConstraintsBox = {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        };
        this.ref = ref;
        this.values = values;
        this.controls = controls;
    }
    /**
     * Start dragging the host component.
     *
     * @param event - The originating pointer event.
     * @param options -
     *
     * @public
     */
    ComponentDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).snapToCursor, snapToCursor = _b === void 0 ? false : _b;
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function (event) {
            // Prevent browser-specific behaviours like text selection or Chrome's image dragging.
            if (event.target &&
                !allowDefaultPointerDown.has(event.target.tagName)) {
                // On iOS it's important to not `preventDefault` the `touchstart`
                // event, as otherwise clicks won't fire inside the draggable element.
                if (!supportsTouchEvents()) {
                    event.preventDefault();
                    // Make sure input elements loose focus when we prevent the default.
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                    }
                }
            }
            // Initiate viewport scroll blocking on touch start. This is a very aggressive approach
            // which has come out of the difficulty in us being able to do this once a scroll gesture
            // has initiated in mobile browsers. This means if there's a horizontally-scrolling carousel
            // on a page we can't let a user scroll the page itself from it. Ideally what we'd do is
            // trigger this once we've got a scroll direction determined. This approach sort-of worked
            // but if the component was dragged too far in a single frame page scrolling would initiate.
            blockViewportScroll();
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            bothAxis(function (axis) {
                var axisPoint = _this.point[axis];
                axisPoint && axisPoint.stop();
            });
        };
        var onStart = function (event, info) {
            // If constraints are an element, resolve them again in case they've updated.
            if (_this.constraintsNeedResolution) {
                var _a = _this.props, dragConstraints = _a.dragConstraints, transformPagePoint_1 = _a.transformPagePoint;
                _this.constraints = calculateConstraintsFromDom(dragConstraints, _this.ref, _this.point, transformPagePoint_1);
                _this.applyConstraintsToPoint();
            }
            // Set point origin and stop any existing animations.
            bothAxis(function (axis) {
                var axisPoint = _this.point[axis];
                if (!axisPoint)
                    return;
                _this.origin[axis].set(axisPoint.get());
            });
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _b = _this.props, drag = _b.drag, dragPropagation = _b.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = getGlobalLock(drag);
                if (!_this.openGlobalLock)
                    return;
            }
            _this.isDragging = true;
            _this.currentDirection = null;
            var onDragStart = _this.props.onDragStart;
            onDragStart &&
                onDragStart(event, convertPanToDrag(info, _this.point));
        };
        var onMove = function (event, info) {
            var _a = _this.props, dragPropagation = _a.dragPropagation, dragDirectionLock = _a.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    var onDirectionLock = _this.props.onDirectionLock;
                    onDirectionLock && onDirectionLock(_this.currentDirection);
                }
                return;
            }
            _this.updatePoint("x", offset);
            _this.updatePoint("y", offset);
            var onDrag = _this.props.onDrag;
            onDrag && onDrag(event, convertPanToDrag(info, _this.point));
        };
        var onEnd = function (event, info) {
            _this.stop(event, info);
        };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    ComponentDragControls.prototype.cancelDrag = function () {
        unblockViewportScroll();
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
    };
    ComponentDragControls.prototype.stop = function (event, info) {
        var _a;
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        else {
            this.recordBoxInfo(this.constraints);
        }
        onDragEnd && onDragEnd(event, convertPanToDrag(info, this.point));
    };
    ComponentDragControls.prototype.recordBoxInfo = function (constraints) {
        if (constraints) {
            var right = constraints.right, left = constraints.left, bottom = constraints.bottom, top_1 = constraints.top;
            this.prevConstraintsBox.width = (right || 0) - (left || 0);
            this.prevConstraintsBox.height = (bottom || 0) - (top_1 || 0);
        }
        if (this.point.x)
            this.prevConstraintsBox.x = this.point.x.get();
        if (this.point.y)
            this.prevConstraintsBox.y = this.point.y.get();
    };
    ComponentDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        var transformPagePoint = this.props.transformPagePoint;
        var point = extractEventInfo(event).point;
        var boundingBox = getBoundingBox(this.ref, transformPagePoint);
        var center = {
            x: boundingBox.width / 2 + boundingBox.left + window.scrollX,
            y: boundingBox.height / 2 + boundingBox.top + window.scrollY,
        };
        var offset = {
            x: point.x - center.x,
            y: point.y - center.y,
        };
        bothAxis(function (axis) {
            var point = _this.point[axis];
            if (!point)
                return;
            _this.origin[axis].set(point.get());
        });
        this.updatePoint("x", offset);
        this.updatePoint("y", offset);
    };
    ComponentDragControls.prototype.setPoint = function (axis, value) {
        this.point[axis] = value;
    };
    ComponentDragControls.prototype.updatePoint = function (axis, offset) {
        var _a = this.props, drag = _a.drag, dragElastic = _a.dragElastic;
        var axisPoint = this.point[axis];
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection) || !axisPoint)
            return;
        var current = applyConstraints(axis, this.origin[axis].get() + offset[axis], this.constraints, dragElastic);
        axisPoint.set(current);
    };
    ComponentDragControls.prototype.updateProps = function (_a) {
        var _this = this;
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? true : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
        var _dragValueX = remainingProps._dragValueX, _dragValueY = remainingProps._dragValueY, dragOriginX = remainingProps.dragOriginX, dragOriginY = remainingProps.dragOriginY;
        if (dragOriginX)
            this.origin.x = dragOriginX;
        if (dragOriginY)
            this.origin.y = dragOriginY;
        // Get the `MotionValue` for both draggable axes, or create them if they don't already
        // exist on this component.
        bothAxis(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var defaultValue = axis === "x" ? _dragValueX : _dragValueY;
            _this.setPoint(axis, defaultValue || _this.values.get(axis, 0));
        });
        // If `dragConstraints` is a React `ref`, we should resolve the constraints once the
        // component has rendered.
        this.constraintsNeedResolution = isRefObject(dragConstraints);
        this.constraints = this.constraintsNeedResolution
            ? this.constraints || false
            : dragConstraints;
    };
    ComponentDragControls.prototype.applyConstraintsToPoint = function (constraints) {
        var _this = this;
        if (constraints === void 0) { constraints = this.constraints; }
        return bothAxis(function (axis) {
            var axisPoint = _this.point[axis];
            axisPoint &&
                !axisPoint.isAnimating() &&
                applyConstraints(axis, axisPoint, constraints, 0);
        });
    };
    ComponentDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, _dragValueX = _a._dragValueX, _dragValueY = _a._dragValueY, _dragTransitionControls = _a._dragTransitionControls;
        var momentumAnimations = bothAxis(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints
                ? getConstraints(axis, _this.constraints)
                : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var animationControls = _dragTransitionControls || _this.controls;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1 }, dragTransition), transition);
            var externalAxisMotionValue = axis === "x" ? _dragValueX : _dragValueY;
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return externalAxisMotionValue
                ? startAnimation(axis, externalAxisMotionValue, 0, inertia)
                : animationControls.start((_a = {},
                    _a[axis] = 0,
                    _a.transition = inertia,
                    _a));
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            _this.recordBoxInfo(_this.constraints);
            _this.scalePoint();
            var onDragTransitionEnd = _this.props.onDragTransitionEnd;
            onDragTransitionEnd && onDragTransitionEnd();
        });
    };
    ComponentDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, dragConstraints = _a.dragConstraints, transformPagePoint = _a.transformPagePoint;
        if (!isRefObject(dragConstraints))
            return;
        var constraintsBox = getBoundingBox(dragConstraints, transformPagePoint);
        var draggableBox = getBoundingBox(this.ref, transformPagePoint);
        // Scale a point relative to the transformation of a constraints-providing element.
        var scaleAxisPoint = function (axis, dimension) {
            var pointToScale = _this.point[axis];
            if (!pointToScale)
                return;
            // Stop any current animations as they bug out if you resize during one
            if (pointToScale.isAnimating()) {
                pointToScale.stop();
                _this.recordBoxInfo();
                return;
            }
            // If the previous dimension was `0` (default), set `scale` to `1` to prevent
            // divide by zero errors.
            var scale = _this.prevConstraintsBox[dimension]
                ? (constraintsBox[dimension] - draggableBox[dimension]) /
                    _this.prevConstraintsBox[dimension]
                : 1;
            pointToScale.set(_this.prevConstraintsBox[axis] * scale);
        };
        scaleAxisPoint("x", "width");
        scaleAxisPoint("y", "height");
    };
    ComponentDragControls.prototype.mount = function (element) {
        var _this = this;
        var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        var stopResizeListener = addDomEvent(window, "resize", function () {
            return _this.scalePoint();
        });
        if (this.constraintsNeedResolution) {
            var _a = this.props, dragConstraints = _a.dragConstraints, transformPagePoint = _a.transformPagePoint;
            var constraints = calculateConstraintsFromDom(dragConstraints, this.ref, this.point, transformPagePoint);
            this.applyConstraintsToPoint(constraints);
            this.recordBoxInfo(constraints);
        }
        else if (!this.isDragging && this.constraints) {
            this.applyConstraintsToPoint();
        }
        return function () {
            stopPointerListener && stopPointerListener();
            stopResizeListener && stopResizeListener();
            _this.cancelDrag();
        };
    };
    return ComponentDragControls;
}());
// Call a handler once for each axis
function bothAxis(handler) {
    return [handler("x"), handler("y")];
}
function convertPanToDrag(info, point) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, info), { point: {
            x: point.x ? point.x.get() : 0,
            y: point.y ? point.y.get() : 0,
        } });
}
function getConstraints(axis, _a) {
    var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    if (axis === "x") {
        return { min: left, max: right };
    }
    else {
        return { min: top, max: bottom };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}
/**
 * Takes a parent Element and a draggable Element and returns pixel-based drag constraints.
 *
 * @param constraintsRef
 * @param draggableRef
 */
function calculateConstraintsFromDom(constraintsRef, draggableRef, point, transformPagePoint) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(constraintsRef.current !== null && draggableRef.current !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var parentBoundingBox = getBoundingBox(constraintsRef, transformPagePoint);
    var draggableBoundingBox = getBoundingBox(draggableRef, transformPagePoint);
    var left = parentBoundingBox.left -
        draggableBoundingBox.left +
        getCurrentOffset(point.x);
    var top = parentBoundingBox.top -
        draggableBoundingBox.top +
        getCurrentOffset(point.y);
    var right = parentBoundingBox.width - draggableBoundingBox.width + left;
    var bottom = parentBoundingBox.height - draggableBoundingBox.height + top;
    return { top: top, left: left, right: right, bottom: bottom };
}
function getBoundingBox(ref, transformPagePoint) {
    var rect = ref.current.getBoundingClientRect();
    var _a = transformPagePoint({
        x: rect.left,
        y: rect.top,
    }), left = _a.x, top = _a.y;
    var _b = transformPagePoint({
        x: rect.width,
        y: rect.height,
    }), width = _b.x, height = _b.y;
    return { left: left, top: top, width: width, height: height };
}
function getCurrentOffset(point) {
    return point ? point.get() : 0;
}
function applyConstraints(axis, value, constraints, dragElastic) {
    var constrainedValue = value instanceof MotionValue ? value.get() : value;
    if (!constraints) {
        return constrainedValue;
    }
    var _a = getConstraints(axis, constraints), min = _a.min, max = _a.max;
    if (min !== undefined && constrainedValue < min) {
        constrainedValue = dragElastic
            ? applyOverdrag(min, constrainedValue, dragElastic)
            : Math.max(min, constrainedValue);
    }
    else if (max !== undefined && constrainedValue > max) {
        constrainedValue = dragElastic
            ? applyOverdrag(max, constrainedValue, dragElastic)
            : Math.min(max, constrainedValue);
    }
    if (value instanceof MotionValue) {
        value.set(constrainedValue);
    }
    return constrainedValue;
}
function applyOverdrag(origin, current, dragElastic) {
    var dragFactor = typeof dragElastic === "number" ? dragElastic : 0.35;
    return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["mix"])(origin, current, dragFactor);
}

/**
 * A hook that allows an element to be dragged.
 *
 * @param param
 * @param ref
 * @param values
 * @param controls
 *
 * @internal
 */
function useDrag(props, ref, values, controls) {
    var groupDragControls = props.dragControls;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext).transformPagePoint;
    var dragControls = useConstant(function () { return new ComponentDragControls({ ref: ref, values: values, controls: controls }); });
    dragControls.updateProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { transformPagePoint: transformPagePoint }));
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return dragControls.mount(ref.current); }, []);
}

var Drag = {
    key: "drag",
    shouldRender: function (props) { return !!props.drag; },
    Component: makeRenderlessComponent(function (_a) {
        var innerRef = _a.innerRef, values = _a.values, controls = _a.controls, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["innerRef", "values", "controls"]);
        return useDrag(props, innerRef, values, controls);
    }),
};

function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var token = match[1], fallback = match[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = parseCSSVariable(current), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved;
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(values, ref, _a, transitionEnd) {
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
    var element = ref.current;
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    values.forEach(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd && transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target: target, transitionEnd: transitionEnd };
}

var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_6__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = stylefire__WEBPACK_IMPORTED_MODULE_4__["transformProps"].filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(values, elementStyler) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = values.get(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        elementStyler.render();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var width = _a.width;
        return width;
    },
    height: function (_a) {
        var height = _a.height;
        return height;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var height = _a.height;
        var top = _b.top;
        return parseFloat(top) + height;
    },
    right: function (_a, _b) {
        var width = _a.width;
        var left = _b.left;
        return parseFloat(left) + width;
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, values, element, elementStyler, changedKeys) {
    var originBbox = element.getBoundingClientRect();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        elementStyler.set("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    elementStyler.render();
    var targetBbox = element.getBoundingClientRect();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = values.get(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (values, ref, target, transitionEnd) {
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    var element = ref.current;
    var elementStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = targetPositionalKeys.reduce(function (acc, key) {
        var value = values.get(key);
        if (!value)
            return acc;
        var from = value.get();
        var to = target[key];
        var fromType = getDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = getDimensionValueType(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(toType === fromType ||
                        (isNumOrPxType(fromType) &&
                            isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(getDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = getDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(values, elementStyler);
                    hasAttemptedToRemoveTransformValues = true;
                }
                acc.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
        return acc;
    }, []);
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, values, element, elementStyler, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                values.get(key).set(value);
            });
        }
        // Reapply original values
        elementStyler.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @param values
 * @param ref
 * @param target
 * @param transitionEnd
 * @internal
 */
function unitConversion(values, ref, target, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(values, ref, target, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}

var parseDomVariant = function (values, ref) {
    return function (target, transitionEnd) {
        var resolved = resolveCSSVariables(values, ref, target, transitionEnd);
        target = resolved.target;
        transitionEnd = resolved.transitionEnd;
        return unitConversion(values, ref, target, transitionEnd);
    };
};

function useForceUpdate() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return setForcedRenderCount(forcedRenderCount + 1); }, [
        forcedRenderCount,
    ]);
}

var SyncLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/**
 * When layout changes happen asynchronously to their instigating render (ie when exiting
 * children of `AnimatePresence` are removed), `SyncLayout` can wrap parent and sibling
 * components that need to animate as a result of this layout change.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = ({ isVisible }) => {
 *   return (
 *     <SyncLayout>
 *       <AnimatePresence>
 *         {isVisible && (
 *           <motion.div exit={{ opacity: 0 }} />
 *         )}
 *       </AnimatePresence>
 *       <motion.div positionTransition />
 *     </SyncLayout>
 *   )
 * }
 * ```
 *
 * @internalremarks
 *
 * The way this component works is by memoising a function and passing it down via context.
 * The function, when called, updates the local state, which is used to invalidate the
 * memoisation cache. A new function is called, performing a synced re-render of components
 * that are using the SyncLayoutContext.
 *
 * @internal
 */
var UnstableSyncLayout = function (_a) {
    var children = _a.children;
    var forceUpdate = useForceUpdate();
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SyncLayoutContext.Provider, { value: forceUpdate }, children));
};

var _a;
var StepName;
(function (StepName) {
    StepName["Prepare"] = "prepare";
    StepName["Read"] = "read";
    StepName["Render"] = "render";
})(StepName || (StepName = {}));
var stepOrder = [StepName.Prepare, StepName.Read, StepName.Render];
var jobs = stepOrder.reduce(function (acc, key) {
    acc[key] = [];
    return acc;
}, {});
var jobsNeedProcessing = false;
function flushCallbackList(list) {
    var numJobs = list.length;
    for (var i = 0; i < numJobs; i++) {
        list[i]();
    }
    list.length = 0;
}
function flushAllJobs() {
    if (!jobsNeedProcessing)
        return;
    flushCallbackList(jobs.prepare);
    flushCallbackList(jobs.read);
    flushCallbackList(jobs.render);
    jobsNeedProcessing = false;
}
// Note: The approach of schedulng jobs during the render step is incompatible with concurrent mode
// where multiple renders might happen without a DOM update. This would result in unneccessary batched
// jobs. But this was already a problem with our previous approach to positionTransition.
// Hopefully the React team offer a getSnapshotBeforeUpdate-esque hook and we can move to that.
var createUseSyncEffect = function (stepName) { return function (callback) {
    if (!callback)
        return;
    jobsNeedProcessing = true;
    jobs[stepName].push(callback);
}; };
var layoutSync = (_a = {},
    _a[StepName.Prepare] = createUseSyncEffect(StepName.Prepare),
    _a[StepName.Read] = createUseSyncEffect(StepName.Read),
    _a[StepName.Render] = createUseSyncEffect(StepName.Render),
    _a.flush = flushAllJobs,
    _a);

function isHTMLElement(element) {
    return element instanceof HTMLElement;
}

var defaultLayoutTransition = {
    duration: 0.8,
    ease: [0.45, 0.05, 0.19, 1.0],
};
var defaultPositionTransition = underDampedSpring();
function getDefaultLayoutTransition(isPositionOnly) {
    return isPositionOnly ? defaultPositionTransition : defaultLayoutTransition;
}
function isResolver(transition) {
    return typeof transition === "function";
}
var axisLabels = {
    x: {
        id: "x",
        size: "width",
        min: "left",
        max: "right",
        origin: "originX",
    },
    y: {
        id: "y",
        size: "height",
        min: "top",
        max: "bottom",
        origin: "originY",
    },
};
function centerOf(min, max) {
    return (min + max) / 2;
}
function calcAxisDelta(prev, next, names) {
    var _a;
    var sizeDelta = prev[names.size] - next[names.size];
    var origin = 0.5;
    // If the element has changed size we want to check whether either side is in
    // the same position before/after the layout transition. If so, we can anchor
    // the element to that position and only animate its size.
    if (sizeDelta) {
        if (prev[names.min] === next[names.min]) {
            origin = 0;
        }
        else if (prev[names.max] === next[names.max]) {
            origin = 1;
        }
    }
    var delta = (_a = {},
        _a[names.size] = sizeDelta,
        _a[names.origin] = origin,
        _a[names.id] = 
        // Only measure a position delta if we haven't anchored to one side
        origin === 0.5
            ? centerOf(prev[names.min], prev[names.max]) -
                centerOf(next[names.min], next[names.max])
            : 0,
        _a);
    return delta;
}
function calcDelta(prev, next) {
    var delta = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, calcAxisDelta(prev, next, axisLabels.x)), calcAxisDelta(prev, next, axisLabels.y));
    return delta;
}
var offset = {
    getLayout: function (_a) {
        var offset = _a.offset;
        return offset;
    },
    measure: function (element) {
        var offsetLeft = element.offsetLeft, offsetTop = element.offsetTop, offsetWidth = element.offsetWidth, offsetHeight = element.offsetHeight;
        return {
            left: offsetLeft,
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            width: offsetWidth,
            height: offsetHeight,
        };
    },
};
var boundingBox = {
    getLayout: function (_a) {
        var boundingBox = _a.boundingBox;
        return boundingBox;
    },
    measure: function (element) {
        var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height, right = _a.right, bottom = _a.bottom;
        return { left: left, top: top, width: width, height: height, right: right, bottom: bottom };
    },
};
function readPositionStyle(element) {
    return window.getComputedStyle(element).position;
}
function getLayoutType(prev, next, isPositionOnly) {
    return isPositionOnly && prev === next ? offset : boundingBox;
}
function isSizeKey(key) {
    return key === "width" || key === "height";
}
function getTransition(_a) {
    var layoutTransition = _a.layoutTransition, positionTransition = _a.positionTransition;
    return layoutTransition || positionTransition;
}
var LayoutAnimation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAnimation, _super);
    function LayoutAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Measure the current state of the DOM before it's updated, and schedule checks to see
    // if it's changed as a result of a React render.
    LayoutAnimation.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, innerRef = _a.innerRef, positionTransition = _a.positionTransition, values = _a.values, controls = _a.controls;
        var element = innerRef.current;
        if (!isHTMLElement(element))
            return;
        var layoutTransition = getTransition(this.props);
        var isPositionOnly = !!positionTransition;
        var positionStyle = readPositionStyle(element);
        var prev = {
            offset: offset.measure(element),
            boundingBox: boundingBox.measure(element),
        };
        var transform;
        var next;
        var compare;
        // We split the unsetting, read and reapplication of the `transform` style prop into
        // different steps via useSyncEffect. Multiple components might all be doing the same
        // thing and by splitting these jobs and flushing them in batches we prevent layout thrashing.
        layoutSync.prepare(function () {
            // Unset the transform of all layoutTransition components so we can accurately measure
            // the target bounding box
            transform = element.style.transform;
            element.style.transform = "";
        });
        layoutSync.read(function () {
            // Read the target VisualInfo of all layoutTransition components
            next = {
                offset: offset.measure(element),
                boundingBox: boundingBox.measure(element),
            };
            var nextPosition = readPositionStyle(element);
            compare = getLayoutType(positionStyle, nextPosition, isPositionOnly);
        });
        layoutSync.render(function () {
            // Reverse the layout delta of all newly laid-out layoutTransition components into their
            // prev visual state and then animate them into their new one using transforms.
            var prevLayout = compare.getLayout(prev);
            var nextLayout = compare.getLayout(next);
            var delta = calcDelta(prevLayout, nextLayout);
            var hasAnyChanged = delta.x || delta.y || delta.width || delta.height;
            if (!hasAnyChanged) {
                // If layout hasn't changed, reapply the transform and get out of here.
                transform && (element.style.transform = transform);
                return;
            }
            Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(element).set({
                originX: delta.originX,
                originY: delta.originY,
            });
            syncRenderSession.open();
            var target = {};
            var transition = {};
            var transitionDefinition = isResolver(layoutTransition)
                ? layoutTransition({ delta: delta })
                : layoutTransition;
            function makeTransition(layoutKey, transformKey, targetValue, visualOrigin) {
                // If this dimension hasn't changed, early return
                var deltaKey = isSizeKey(layoutKey) ? layoutKey : transformKey;
                if (!delta[deltaKey])
                    return;
                var baseTransition = typeof transitionDefinition === "boolean"
                    ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getDefaultLayoutTransition(isPositionOnly)) : transitionDefinition;
                var value = values.get(transformKey, targetValue);
                var velocity = value.getVelocity();
                transition[transformKey] = baseTransition[transformKey]
                    ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransition[transformKey]) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransition);
                if (transition[transformKey].velocity === undefined) {
                    transition[transformKey].velocity = velocity || 0;
                }
                // The target value of all transforms is the default value of that prop (ie x = 0, scaleX = 1)
                // This is because we're inverting the layout change with `transform` and then animating to `transform: none`
                target[transformKey] = targetValue;
                var offsetToApply = !isSizeKey(layoutKey) && compare === offset
                    ? value.get()
                    : 0;
                value.set(visualOrigin + offsetToApply);
            }
            makeTransition("left", "x", 0, delta.x);
            makeTransition("top", "y", 0, delta.y);
            if (!isPositionOnly) {
                makeTransition("width", "scaleX", 1, prev.boundingBox.width / next.boundingBox.width);
                makeTransition("height", "scaleY", 1, prev.boundingBox.height / next.boundingBox.height);
            }
            target.transition = transition;
            // Only start the transition if `transitionDefinition` isn't `false`. Otherwise we want
            // to leave the values in their newly-inverted state and let the user cope with the rest.
            transitionDefinition && controls.start(target);
            // Force a render to ensure there's no visual flickering
            syncRenderSession.flush();
        });
        return null;
    };
    LayoutAnimation.prototype.componentDidUpdate = function () {
        layoutSync.flush();
    };
    LayoutAnimation.prototype.render = function () {
        return null;
    };
    LayoutAnimation.contextType = SyncLayoutContext;
    return LayoutAnimation;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var Layout = {
    key: "layout",
    shouldRender: function (_a) {
        var positionTransition = _a.positionTransition, layoutTransition = _a.layoutTransition;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!(positionTransition && layoutTransition), "Don't set both positionTransition and layoutTransition on the same component");
        return (typeof window !== "undefined" &&
            !!(positionTransition || layoutTransition));
    },
    Component: LayoutAnimation,
};

/**
 * A list of all valid MotionProps
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "static",
    "positionTransition",
    "layoutTransition",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "_dragValueX",
    "_dragValueY",
    "_dragTransitionControls",
    "dragOriginX",
    "dragOriginY",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileHover",
    "whileTap",
    "onHoverEnd",
    "onHoverStart",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

var AnimatePropType;
(function (AnimatePropType) {
    AnimatePropType["Target"] = "Target";
    AnimatePropType["VariantLabel"] = "VariantLabel";
    AnimatePropType["AnimationSubscription"] = "AnimationSubscription";
})(AnimatePropType || (AnimatePropType = {}));

function shallowCompare(next, prev) {
    if (prev === null)
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

var hasUpdated = function (prev, next) {
    return (next !== undefined &&
        (Array.isArray(prev) && Array.isArray(next)
            ? !shallowCompare(next, prev)
            : prev !== next));
};
function targetWithoutTransition(_a, mergeTransitionEnd) {
    if (mergeTransitionEnd === void 0) { mergeTransitionEnd = false; }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    return mergeTransitionEnd
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd)
        : target;
}
/**
 * Handle the `animate` prop when its an object of values, ie:
 *
 * ```jsx
 * <motion.div animate={{ opacity: 1 }} />
 * ```
 *
 * @internalremarks
 * It might be worth consolidating this with `use-variants`
 *
 * ```jsx
 * <motion.div animate="visible" />
 * ```
 *
 * @param target
 * @param controls
 * @param values
 * @param transition
 *
 * @internal
 */
function useAnimateProp(targetAndTransition, controls, values, defaultTransition) {
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    var prevValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (!prevValues.current) {
        prevValues.current = targetWithoutTransition(targetAndTransition, true);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var targetToAnimate = {};
        // These are the values we're actually animating
        var animatingTarget = targetWithoutTransition(targetAndTransition);
        // This is the target as it'll be once transitionEnd values are applied
        var finalTarget = targetWithoutTransition(targetAndTransition, true);
        // Detect which values have changed between renders
        for (var key in animatingTarget) {
            // This value should animate on mount if this value doesn't already exist (wasn't
            // defined in `style` or `initial`) or if it does exist and it's already changed.
            var shouldAnimateOnMount = isInitialRender.current &&
                (!values.has(key) ||
                    values.get(key).get() !== finalTarget[key]);
            // If this value has updated between renders or it's we're animating this value on mount,
            // add it to the animate target.
            var isValidValue = finalTarget[key] !== null;
            var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
            if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
                targetToAnimate[key] = animatingTarget[key];
            }
        }
        isInitialRender.current = false;
        prevValues.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevValues.current), finalTarget);
        if (Object.keys(targetToAnimate).length) {
            controls.start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
        }
    }, [targetAndTransition]);
}

var labelsToArray = function (label) {
    if (!label) {
        return [];
    }
    if (Array.isArray(label)) {
        return label;
    }
    return [label];
};
var resolveVariantLabels = function (variant) {
    var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
    return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
/**
 * Hooks in React sometimes accept a dependency array as their final argument. (ie useEffect/useMemo)
 * When values in this array change, React re-runs the dependency. However if the array
 * contains a variable number of items, React throws an error.
 */
var asDependencyList = function (list) { return [
    list.join(","),
]; };

var hasVariantChanged = function (oldVariant, newVariant) {
    return oldVariant.join(",") !== newVariant.join(",");
};
/**
 * Handle variants and the `animate` prop when its set as variant labels.
 *
 * @param initial - Initial variant(s)
 * @param animate - Variant(s) to animate to
 * @param inherit - `true` is inheriting animations from parent
 * @param controls - Animation controls
 *
 * @internal
 */
function useVariants(initial, animate, inherit, controls) {
    var targetVariants = resolveVariantLabels(animate);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
    var parentAlreadyMounted = context.hasMounted && context.hasMounted.current;
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var shouldAnimate = false;
        if (inherit) {
            // If we're inheriting variant changes and the parent has already
            // mounted when this component loads, we need to manually trigger
            // this animation.
            shouldAnimate = !!parentAlreadyMounted;
            targetVariants = resolveVariantLabels(context.animate);
        }
        else {
            shouldAnimate =
                hasMounted.current ||
                    hasVariantChanged(resolveVariantLabels(initial), targetVariants);
        }
        shouldAnimate && controls.start(targetVariants);
        hasMounted.current = true;
    }, asDependencyList(targetVariants));
}

/**
 * `useAnimationGroupSubscription` allows a component to subscribe to an
 * externally-created `AnimationControls`, created by the `useAnimation` hook.
 *
 * @param animation
 * @param controls
 *
 * @internal
 */
function useAnimationGroupSubscription(animation, controls) {
    var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return animation.subscribe(controls); }, [
        animation,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return function () {
        unsubscribe && unsubscribe();
    }; }, [unsubscribe]);
}

var _a$1, _b;
var AnimatePropComponents = (_a$1 = {},
    _a$1[AnimatePropType.Target] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls, values = _a.values, transition = _a.transition;
        return useAnimateProp(animate, controls, values, transition);
    }),
    _a$1[AnimatePropType.VariantLabel] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, _b = _a.inherit, inherit = _b === void 0 ? true : _b, controls = _a.controls, initial = _a.initial;
        return useVariants(initial, animate, inherit, controls);
    }),
    _a$1[AnimatePropType.AnimationSubscription] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls;
        return useAnimationGroupSubscription(animate, controls);
    }),
    _a$1);
var isVariantLabel$1 = function (prop) {
    return Array.isArray(prop) || typeof prop === "string";
};
var isAnimationSubscription = function (_a) {
    var animate = _a.animate;
    return animate instanceof AnimationControls;
};
var animationProps = ["initial", "animate", "whileTap", "whileHover"];
var animatePropTypeTests = (_b = {},
    _b[AnimatePropType.Target] = function (props) {
        return (props.animate !== undefined &&
            !isVariantLabel$1(props.animate) &&
            !isAnimationSubscription(props));
    },
    _b[AnimatePropType.VariantLabel] = function (props) {
        return (props.variants !== undefined ||
            animationProps.some(function (key) { return typeof props[key] === "string"; }));
    },
    _b[AnimatePropType.AnimationSubscription] = isAnimationSubscription,
    _b);
var getAnimationComponent = function (props) {
    var animatePropType = undefined;
    for (var key in AnimatePropType) {
        if (animatePropTypeTests[key](props)) {
            animatePropType = key;
        }
    }
    return animatePropType ? AnimatePropComponents[animatePropType] : undefined;
};

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    if (context === null)
        return [true];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(register, []);
    return !isPresent && onExitComplete ? [false, onExitComplete] : [true];
}

var Exit = {
    key: "exit",
    shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
    Component: makeRenderlessComponent(function (props) {
        var _a;
        var animate = props.animate, controls = props.controls, exit = props.exit;
        var _b = usePresence(), isPresent = _b[0], onExitComplete = _b[1];
        var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
        var isPlayingExitAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
        var custom = ((_a = presenceContext) === null || _a === void 0 ? void 0 : _a.custom) !== undefined
            ? presenceContext.custom
            : props.custom;
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            if (!isPresent) {
                if (!isPlayingExitAnimation.current && exit) {
                    controls.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { custom: custom }));
                    controls.start(exit).then(onExitComplete);
                }
                isPlayingExitAnimation.current = true;
            }
            else if (isPlayingExitAnimation.current &&
                animate &&
                !(animate instanceof AnimationControls)) {
                controls.start(animate);
            }
            if (isPresent) {
                isPlayingExitAnimation.current = false;
            }
        }, [isPresent]);
    }),
};

var isPropValid = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterValidProps(props) {
    var domProps = {};
    for (var key in props) {
        if (isPropValid(key)) {
            domProps[key] = props[key];
        }
    }
    return domProps;
}
var buildSVGProps = function (values, style) {
    var motionValueStyles = resolveCurrent(values);
    var props = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["buildSVGAttrs"])(motionValueStyles, undefined, undefined, undefined, undefined, false);
    props.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style), props.style);
    return props;
};
var functionalityComponents = [Layout, Drag, Gestures, Exit];
var numFunctionalityComponents = functionalityComponents.length;
/**
 * Create a configuration for `motion` components that provides DOM-specific functionality.
 *
 * @internal
 */
function createDomMotionConfig(Component) {
    var isDOM = typeof Component === "string";
    var isSVG = isDOM && svgElements.indexOf(Component) !== -1;
    return {
        renderComponent: function (ref, style, values, props, isStatic) {
            var forwardedProps = isDOM ? filterValidProps(props) : props;
            var staticVisualStyles = isSVG
                ? buildSVGProps(values, style)
                : { style: buildStyleAttr(values, style, isStatic) };
            return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, forwardedProps), { ref: ref }), staticVisualStyles));
        },
        /**
         * loadFunctionalityComponents gets used by the `motion` component
         *
         * Each functionality component gets provided the `ref`, animation controls and the `MotionValuesMap`
         * generated for that component, as well as all the `props` passed to it by the user.
         *
         * The pattern used to determine whether to load and use each piece of functionality is
         * consistent (should render? Then push component) and could be used to extend functionality.
         *
         * By exposing a mutable piece of memory via an API like `extendMotionComponent` we could
         * allow users to add `FunctionalComponentDefinition`s. This would allow us to offer file size
         * reductions by shipping an entry point that doesn't load gesture and drag functionality, and
         * also offer a way for users to develop plugins/other functionality. Because these functionalities
         * are loaded as components, we can look into using Suspense for this purpose.
         *
         * For user-defined functionality we'd need to allow
         *  1) User-defined prop typing (extending `P`)
         *  2) User-defined "clean props" function that removes their plugin's props before being passed to the DOM.
         */
        loadFunctionalityComponents: function (ref, values, props, context, controls, inherit) {
            var activeComponents = [];
            // TODO: Consolidate Animation functionality loading strategy with other functionality components
            var Animation = getAnimationComponent(props);
            if (Animation) {
                activeComponents.push(Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Animation, { key: "animation", initial: props.initial, animate: props.animate, variants: props.variants, transition: props.transition, controls: controls, inherit: inherit, values: values }));
            }
            for (var i = 0; i < numFunctionalityComponents; i++) {
                var _a = functionalityComponents[i], shouldRender = _a.shouldRender, key = _a.key, Component_1 = _a.Component;
                if (shouldRender(props, context)) {
                    activeComponents.push(Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, props, { parentContext: context, values: values, controls: controls, innerRef: ref })));
                }
            }
            return activeComponents;
        },
        getValueControlsConfig: function (ref, values) {
            return {
                values: values,
                readValueFromSource: function (key) {
                    return Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(ref.current).get(key);
                },
                // TODO: This is a good second source of plugins. This function contains the CSS variable
                // and unit conversion support. These functions share a common signature. We could make another
                // API for adding these.
                makeTargetAnimatable: parseDomVariant(values, ref),
            };
        },
    };
}

var htmlMotionComponents = htmlElements.reduce(function (acc, Component) {
    var config = createDomMotionConfig(Component);
    // Suppress "Expression produces a union type that is too complex to represent" error
    // @ts-ignore
    acc[Component] = createMotionComponent(config);
    return acc;
}, {});
var svgMotionComponents = svgElements.reduce(function (acc, Component) {
    // Suppress "Expression produces a union type that is too complex to represent" error
    // @ts-ignore
    acc[Component] = createMotionComponent(createDomMotionConfig(Component));
    return acc;
}, {});
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @internalremarks
 *
 * I'd like to make it possible for these to be loaded "on demand" - to reduce bundle size by only
 * including HTML/SVG stylers, animation and/or gesture support when necessary.
 *
 * ```jsx
 * <motion.div animate={{ x: 100 }} />
 *
 * <motion.p animate={{ height: 200 }} />
 *
 * <svg><motion.circle r={10} animate={{ r: 20 }} /></svg>
 * ```
 *
 * @public
 */
var motion = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
    /**
     * Convert a custom React component into a `motion` component.
     *
     * It can also accept a string, to create [custom DOM elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).
     *
     * ```jsx
     * const Component = React.forwardRef((props: Props, ref) => {
     *   return <div ref={ref} />
     * })
     *
     * const MotionComponent = motion.custom<Props>(Component)
     * ```
     *
     * @param Component -
     */
    custom: function custom(Component) {
        return createMotionComponent(createDomMotionConfig(Component));
    } }, htmlMotionComponents), svgMotionComponents);

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    return useConstant(function () { return motionValue(initial); });
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function unwrapMotionValue(value) {
    var unwrappedValue = value instanceof MotionValue ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}

var isTransformer = function (v) {
    return typeof v === "function";
};
var noop$1 = function (v) { return v; };
function useTransform(parent, customTransform, to, options) {
    var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var comparitor = [parent];
    var transformer = noop$1;
    if (isTransformer(customTransform)) {
        transformer = customTransform;
    }
    else if (Array.isArray(to)) {
        var from = customTransform;
        transformer = transform(from, to, options);
        comparitor = [parent, from.join(","), to.join(",")];
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        if (value.current)
            value.current.destroy();
        value.current = parent.addChild({ transformer: transformer });
        return value.current;
    }, comparitor);
}

// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function (scale) { return (scale > 0.001 ? 1 / scale : maxScale); };
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @public
 */
function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var values = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).values;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!(scale || values), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    }
    else if (values) {
        parentScaleX = values.get("scaleX", 1);
        parentScaleY = values.get("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX: scaleX, scaleY: scaleY };
}

function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return (isMotionValue(value) ? value.onChange(callback) : undefined); }, [value]);
}

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
    if (config === void 0) { config = {}; }
    var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        return value.attach(function (v, set) {
            if (activeSpringAnimation.current) {
                activeSpringAnimation.current.stop();
            }
            activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["spring"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: value.get(), to: v, velocity: value.getVelocity() }, config)).start(set);
            return value.get();
        });
    }, Object.values(config));
    useOnChange(source, function (v) { return value.set(parseFloat(v)); });
    return value;
}

var scrollX = motionValue(0);
var scrollY = motionValue(0);
var scrollXProgress = motionValue(0);
var scrollYProgress = motionValue(0);
var setProgress = function (offset, maxOffset, value) {
    value.set(!maxOffset || !offset ? 0 : offset / maxOffset);
};
var hasEventListener = false;
var addScrollListener = function () {
    hasEventListener = true;
    if (typeof window === "undefined")
        return;
    var updateScrollValues = function () {
        var xOffset = window.pageXOffset;
        var yOffset = window.pageYOffset;
        // Set absolute positions
        scrollX.set(xOffset);
        scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, document.body.clientWidth - window.innerWidth, scrollXProgress);
        setProgress(yOffset, document.body.clientHeight - window.innerHeight, scrollYProgress);
    };
    updateScrollValues();
    window.addEventListener("resize", updateScrollValues);
    window.addEventListener("scroll", updateScrollValues, { passive: true });
};
var viewportMotionValues = {
    scrollX: scrollX,
    scrollY: scrollY,
    scrollXProgress: scrollXProgress,
    scrollYProgress: scrollYProgress,
};
/**
 * Provides `MotionValue`s that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * **Note:** If the returned scroll `MotionValue`s don't seem to be updating,
 * double check if the `body` tag styles are set to `width: 100%; height: 100%` or
 * similar, as this can break accurate measurement of viewport scroll.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @internalremarks
 * This isn't technically a hook yet, but in the future it might be nice
 * to accept refs to elements and add scroll listeners to those, which
 * may involve the use of lifecycle.
 *
 * @public
 */
function useViewportScroll() {
    if (!hasEventListener) {
        addScrollListener();
    }
    return viewportMotionValues;
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var animationControls = useConstant(function () { return new AnimationControls(); });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        animationControls.mount();
        return function () { return animationControls.unmount(); };
    }, []);
    return animationControls;
}

/**
 * Experimental API.
 *
 * Makes an animated version of `useState`.
 *
 * @remarks
 *
 * When the returned state setter is called, values will be animated to their new target.
 *
 * This allows the animation of arbitrary React components.
 *
 * **Note:** When animating DOM components, it's always preferable to use the `animate` prop, as Framer
 * will bypass React's rendering cycle with one optimised for 60fps motion. This Hook is specifically
 * for animating props on arbitrary React components, or for animating text content.
 *
 * ```jsx
 * const [state, setState] = useAnimatedState({ percentage: 0 })
 *
 * return (
 *   <Graph
 *     percentage={state.percentage}
 *     onTap={() => setState({ percentage: 50 })}
 *   />
 * )
 * ```
 *
 * @internalremarks
 *
 * TODO:
 * - Make hook accept a typed version of Target that accepts any value (not just DOM values)
 * - Allow hook to accept single values. ie useAnimatedState(0)
 * - Allow providing MotionValues via initialState.
 *
 * @beta
 */
function useAnimatedState(initialState) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), animationState = _a[0], onUpdate = _a[1];
    var config = useConstant(function () { return ({ onUpdate: onUpdate }); });
    var values = useMotionValues(config);
    var controls = useValueAnimationControls({
        values: values,
        readValueFromSource: function (key) { return animationState[key]; },
    }, {}, false);
    var startAnimation = useConstant(function () { return function (animationDefinition) {
        return controls.start(animationDefinition);
    }; });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        values.mount();
        return function () { return values.unmount(); };
    }, []);
    return [animationState, startAnimation];
}

/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // TODO: After Framer X beta, remove this warning
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["warning"])(items.length > 1, "useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`");
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(items[index.current]), item = _a[0], setItem = _a[1];
    return [
        item,
        function (next) {
            index.current =
                typeof next !== "number"
                    ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["wrap"])(0, items.length, index.current + 1)
                    : next;
            setItem(items[index.current]);
        },
    ];
}

/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onMouseDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */ (function () {
    function DragControls() {
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `ComponentDragControls` to the user-facing API.
     *
     * @internal
     */
    DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - A mouse/touch/pointer event.
     * @param options - Options
     *
     * @public
     */
    DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
            controls.start(event.nativeEvent || event, options);
        });
    };
    return DragControls;
}());
var createDragControls = function () { return new DragControls(); };
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onMouseDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
    return useConstant(createDragControls);
}

var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom;
    var numPresenceChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var numExitComplete = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var context = {
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function () {
            numExitComplete.current++;
            var allComplete = numExitComplete.current >= numPresenceChildren.current;
            onExitComplete && allComplete && onExitComplete();
        },
    };
    var register = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        numExitComplete.current = 0;
        return function () {
            numPresenceChildren.current++;
            return function () { return numPresenceChildren.current--; };
        };
    }, [isPresent]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { register: register }) }, children));
};

function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceUpdate function, or one from a parent context if it exists.
    var localForceUpdate = useForceUpdate();
    var contextForceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SyncLayoutContext);
    var forceUpdate = contextForceUpdate || localForceUpdate;
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, filteredChildren.map(function (child) { return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(filteredChildren);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (child) { return child.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceUpdate();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child); })));
};

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
function determineShouldReduceMotion(prefersReduced, isReducedMotion) {
    return typeof isReducedMotion === "boolean"
        ? isReducedMotion
        : Boolean(prefersReduced);
}

/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpem }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    var isReducedMotion = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).isReducedMotion;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(determineShouldReduceMotion(prefersReducedMotion.get(), isReducedMotion)), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return prefersReducedMotion.onChange(function (v) {
            setShouldReduceMotion(determineShouldReduceMotion(v, isReducedMotion));
        });
    }, [setShouldReduceMotion, isReducedMotion]);
    return shouldReduceMotion;
}

/**
 * Define accessibility options for a tree. Can be used to force the tree into Reduced Motion mode,
 * or disable device detection.
 *
 * @internal
 */
function ReducedMotion(_a) {
    var children = _a.children, enabled = _a.enabled;
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
    context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { isReducedMotion: enabled })); }, [enabled]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionContext.Provider, { value: context }, children));
}




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var timestamp = Date.now();
        var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

var createStep = (function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === 'function', 'Argument must be a function');
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive)
                toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer)
                    numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
});

var StepId;
(function (StepId) {
    StepId["Read"] = "read";
    StepId["Update"] = "update";
    StepId["Render"] = "render";
    StepId["PostRender"] = "postRender";
    StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = (1 / 60) * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    StepId.Read,
    StepId.Update,
    StepId.Render,
    StepId.PostRender
];
var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
var _a = stepsOrder.reduce(function (acc, key) {
    var step = createStep(setWillRunNextFrame);
    acc.sync[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) { keepAlive = false; }
        if (immediate === void 0) { immediate = false; }
        if (!willRunNextFrame)
            startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    acc.cancelSync[key] = function (process) { return step.cancel(process); };
    acc.steps[key] = step;
    return acc;
}, {
    steps: {},
    sync: {},
    cancelSync: {}
}), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
var processStep = function (stepId) { return steps[stepId].process(frame); };
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed)
        defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
var getFrameData = function () { return frame; };

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=C%3A%5CUsers%5CLaka%20Ganth%5CDocuments%5CNextJS%5Csam%5Cpages%5Ccontact.js!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=C%3A%5CUsers%5CLaka%20Ganth%5CDocuments%5CNextJS%5Csam%5Cpages%5Ccontact.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/contact", function() {
      var mod = __webpack_require__(/*! ./pages/contact.js */ "./pages/contact.js")
      if(true) {
        module.hot.accept(/*! ./pages/contact.js */ "./pages/contact.js", function() {
          if(!next.router.components["/contact"]) return
          var updatedPage = __webpack_require__(/*! ./pages/contact.js */ "./pages/contact.js")
          next.router.update("/contact", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: Action, ValueReaction, action, chain, composite, crossfade, decay, delay, everyFrame, inertia, keyframes, listen, merge, mouse, multicast, multitouch, parallel, physics, pointer, schedule, spring, stagger, styler, timeline, tween, value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return styler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");







var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var _this = this;
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function () {
    function Action(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription, api) : subscription;
        if (isComplete) subscription.stop();
        return subscription;
    };
    Action.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Action.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    return Action;
}();
var action = function (init) {
    return new Action({ init: init });
};

var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        _this.updateCurrent = function (v) {
            return _this.current = v;
        };
        _this.getVelocityOfCurrent = function () {
            return _this.getSingleVelocity(_this.current, _this.prev);
        };
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(),
            delta = _a.delta,
            timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.subscribers[this.subscribers.length - 1].update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, this.timeDelta) : Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.some(function (key) {
            return isVectorProp(props[key], key);
        });
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_3__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vh"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createMixerAction = function (mixer) {
    return function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
        return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(mixer(from, to));
    };
};
var createColorAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"]);
var createComplexAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixComplex"]);
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    if (typeof prop === 'number') {
        return createAction;
    } else if (isUnitProp(prop)) {
        return createUnitAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].test(prop)) {
        return createColorAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].test(prop)) {
        return createComplexAction;
    } else {
        return createAction;
    }
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            } else {
                update(position);
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var inertia = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 700 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget;
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var prev = from;
        var current = from;
        var activeAnimation;
        var isSpring = false;
        var isLessThanMin = function (v) {
            return min !== undefined && v <= min;
        };
        var isMoreThanMax = function (v) {
            return max !== undefined && v >= max;
        };
        var isOutOfBounds = function (v) {
            return isLessThanMin(v) || isMoreThanMax(v);
        };
        var isTravellingAwayFromBounds = function (v, currentVelocity) {
            return isLessThanMin(v) && currentVelocity < 0 || isMoreThanMax(v) && currentVelocity > 0;
        };
        var onUpdate = function (v) {
            update(v);
            prev = current;
            current = v;
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().delta);
            if (activeAnimation && !isSpring && isTravellingAwayFromBounds(v, velocity)) {
                startSpring({ from: v, velocity: velocity });
            }
        };
        var startAnimation = function (animation, next) {
            activeAnimation && activeAnimation.stop();
            activeAnimation = animation.start({
                update: onUpdate,
                complete: function () {
                    if (next) {
                        next();
                        return;
                    }
                    complete();
                }
            });
        };
        var startSpring = function (props) {
            isSpring = true;
            startAnimation(vectorSpring(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { to: isLessThanMin(props.from) ? min : max, stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta })));
        };
        if (isOutOfBounds(from)) {
            startSpring({ from: from, velocity: velocity });
        } else if (velocity !== 0) {
            var animation = vectorDecay({
                from: from,
                velocity: velocity,
                timeConstant: timeConstant,
                power: power,
                restDelta: isOutOfBounds(from) ? 20 : restDelta,
                modifyTarget: modifyTarget
            });
            startAnimation(animation, function () {
                if (isOutOfBounds(current)) {
                    startSpring({ from: current, velocity: velocity });
                } else {
                    complete();
                }
            });
        } else {
            complete();
        }
        return {
            stop: function () {
                return activeAnimation && activeAnimation.stop();
            }
        };
    });
};
var index = /*#__PURE__*/createVectorAction(inertia, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    min: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    max: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    }
});

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _d,
        _e = _a.reverseEase,
        reverseEase = _e === void 0 ? false : _e;
    if (reverseEase) {
        ease = Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["createReversedEasing"])(ease);
    }
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function (v) {
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var clampProgress = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"] : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f,
            _g = props.repeatDelay,
            repeatDelay = _g === void 0 ? 0 : _g;
        var _h = props.from,
            from = _h === void 0 ? 0 : _h,
            _j = props.to,
            to = _j === void 0 ? 1 : _j,
            _k = props.elapsed,
            elapsed = _k === void 0 ? 0 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseAnimation = function (reverseEase) {
            var _a;
            if (reverseEase === void 0) {
                reverseEase = false;
            }
            _a = [to, from], from = _a[0], to = _a[1];
            playhead = vectorScrubber({ from: from, to: to, ease: ease, reverseEase: reverseEase }).start(update);
        };
        var isTweenComplete = function () {
            var isComplete = isActive && elapsed > duration + repeatDelay;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var overtime = elapsed - duration;
            elapsed = overtime - repeatDelay;
            if (loop && loopCount < loop) {
                loopCount++;
                return false;
            } else if (flip && flipCount < flip) {
                flipCount++;
                reverseAnimation();
                return false;
            } else if (yoyo && yoyoCount < yoyo) {
                yoyoCount++;
                reverseAnimation(yoyoCount % 2 !== 0);
                return false;
            }
            return true;
        };
        var updateTween = function () {
            currentProgress = clampProgress(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function () {
            isActive = true;
            process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
                var delta = _a.delta;
                elapsed += delta;
                updateTween();
                if (isTweenComplete()) {
                    framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                    complete && framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function () {
            isActive = false;
            if (process) framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, duration, elapsed);
            },
            getProgress: function () {
                return currentProgress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                if (!isActive) startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(0, duration, newProgress);
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateTween, false, true);
                return this;
            },
            reverse: function () {
                reverseAnimation();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () {
        return easing || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"];
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(springStrength, elapsed);
            }
            current += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                var _a;
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeInOut"]);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
            initialRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
                var newRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$1 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(x || 0);
        var applyYOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var styler = function () {
    return Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(false, 'styler has been removed from Popmotion in 9.0. Downgrade to 8.x or npm install stylefire');
};




/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: number, scale, alpha, degrees, percent, progressPercentage, px, vw, vh, rgba, rgbUnit, hsla, hex, color, complex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = __assign(__assign({}, number), { transform: clamp(0, 1) });
var scale = __assign(__assign({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = __assign(__assign({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValueFromFunctionString(v).split(/,\s*/);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
};
var rgbUnit = __assign(__assign({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$$1))
        });
    }
};
var hex = __assign(__assign({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return typeof x === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.0.1";
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag =
/*#__PURE__*/
function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag =
/*#__PURE__*/
function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag =
/*#__PURE__*/
function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag =
/*#__PURE__*/
function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += this.tag.getRule(i) + "\n";
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var RULE_RE = /(?:\s*)?(.*?){((?:{[^}]*}|(?!{).*?)*)}/g;
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\]");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}\n";
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var rawHTML = style.innerHTML;
  var rules = [];
  var parts; // parts = [match, selector, content]
  // eslint-disable-next-line no-cond-assign

  while (parts = RULE_RE.exec(rawHTML)) {
    var marker = parts[1].match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, parts[2].split('"')[1]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(parts[0].trim());
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet =
/*#__PURE__*/
function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes =
/*#__PURE__*/
function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle =
/*#__PURE__*/
function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var shouldFilterProps = isTargetTag || 'as' in computedProps || 'forwardedAs' in computedProps;
  var propsForElement = shouldFilterProps ? {} : _extends({}, computedProps);

  if (shouldFilterProps) {
    // eslint-disable-next-line guard-for-in
    for (var key in computedProps) {
      if (key === 'forwardedAs') {
        propsForElement.as = computedProps[key];
      } else if (key !== 'as' && key !== 'forwardedAs' && (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(key))) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle =
/*#__PURE__*/
function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet =
/*#__PURE__*/
function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.0.1";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/styled-media-query/dist/styled-media-query.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/styled-media-query/dist/styled-media-query.es.js ***!
  \***********************************************************************/
/*! exports provided: default, pxToEm, pxToRem, defaultBreakpoints, generateMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToEm", function() { return pxToEm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return pxToRem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBreakpoints", function() { return defaultBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMedia", function() { return generateMedia; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/**
 * Converts breakpoint units in px to rem or em
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} ratio [16] - size of 1 rem in px. What is your main font-size in px?
 * @param {'rem' | 'em'} unit
 */
function pxToEmOrRem(breakpoints) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var unit = arguments.length > 2 ? arguments[2] : undefined;
  var newBreakpoints = {};

  for (var key in breakpoints) {
    var point = breakpoints[key];

    if (String(point).includes('px')) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit;
      continue;
    }

    newBreakpoints[key] = point;
  }

  return newBreakpoints;
}
/**
 * Converts breakpoint units in px to em 
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} ratio [16] - size of 1em in px. What is your main font-size in px?
 */


function pxToEm(breakpoints) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return pxToEmOrRem(breakpoints, ratio, 'em');
}
/**
 * Converts breakpoint units in px to rem 
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} ratio [16] - size of 1rem in px. What is your main font-size in px?
 */

function pxToRem(breakpoints) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return pxToEmOrRem(breakpoints, ratio, 'rem');
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          @media (min-width: ", ") {\n            ", "\n          }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          @media (max-width: ", ") {\n            ", "\n          }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", ") and\n      (max-width: ", ") {\n      ", "\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", ") {\n      ", "\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Default media breakpoints
 * @type {Object}
 */

var defaultBreakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
};

function getSizeFromBreakpoint(breakpointValue) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.error('styled-media-query: No valid breakpoint or size specified for media.');
    return '0';
  }
}
/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint sizes
 * @return {Object} - Media generators for each breakpoint
 */


function generateMedia() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakpoints;

  var lessThan = function lessThan(breakpoint) {
    return function () {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), getSizeFromBreakpoint(breakpoint, breakpoints), styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
    };
  };

  var greaterThan = function greaterThan(breakpoint) {
    return function () {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), getSizeFromBreakpoint(breakpoint, breakpoints), styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
    };
  };

  var between = function between(firstBreakpoint, secondBreakpoint) {
    return function () {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), getSizeFromBreakpoint(firstBreakpoint, breakpoints), getSizeFromBreakpoint(secondBreakpoint, breakpoints), styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
    };
  };

  var oldStyle = Object.keys(breakpoints).reduce(function (acc, label) {
    var size = breakpoints[label];

    acc.to[label] = function () {
      console.warn("styled-media-query: Use media.lessThan('".concat(label, "') instead of old media.to.").concat(label, " (Probably we'll deprecate it)"));
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), size, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
    };

    acc.from[label] = function () {
      console.warn("styled-media-query: Use media.greaterThan('".concat(label, "') instead of old media.from.").concat(label, " (Probably we'll deprecate it)"));
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), size, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
    };

    return acc;
  }, {
    to: {},
    from: {}
  });
  return Object.assign({
    lessThan: lessThan,
    greaterThan: greaterThan,
    between: between
  }, oldStyle);
}
/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */

var index = generateMedia();
/**
 * Usage: styled.div` ${media.from.medium`background: #000;`} `;
 * With this code, background for small and medium sizes will be `default` and for more than medium, will be `#000`
 */

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/stylefire/dist/stylefire.es.js ***!
  \*****************************************************/
/*! exports provided: default, buildSVGAttrs, buildStyleProperty, createStylerFactory, isTransformProp, transformProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSVGAttrs", function() { return buildSVGAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyleProperty", function() { return buildStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformProps", function() { return transformProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.uncachedValues,
        uncachedValues = _b === void 0 ? new Set() : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        function setValue(key, value) {
            if (key.startsWith('--')) {
                props.hasCSSVariable = true;
            }
            var currentValue = state[key];
            state[key] = value;
            if (state[key] === currentValue) return;
            if (changedValues.indexOf(key) === -1) {
                changedValues.push(key);
            }
            if (!hasChanged) {
                hasChanged = true;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(styler.render);
            }
        }
        var styler = {
            get: function (key, forceRead) {
                if (forceRead === void 0) {
                    forceRead = false;
                }
                var useCached = !forceRead && useCache && !uncachedValues.has(key) && state[key] !== undefined;
                return useCached ? state[key] : onRead(key, props);
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    setValue(values, value);
                } else {
                    for (var key in values) {
                        setValue(key, values[key]);
                    }
                }
                return this;
            },
            render: function (forceRender) {
                if (forceRender === void 0) {
                    forceRender = false;
                }
                if (hasChanged || forceRender === true) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
        };
        return styler;
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== 'undefined';
var testElement;
var setDashPrefix = function (key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            if (noPrefix && key === 'clipPath' && dashCache.has(key)) {
                return;
            }
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function (key) {
    return setDashPrefix(key, key);
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) {
        isBrowser ? testPrefix(key) : setServerProperty(key);
    }
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
function isTransformProp(key) {
    return transformPropDictionary[key] === true;
}
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
var transformOriginProps = /*#__PURE__*/new Set(['originX', 'originY', 'originZ']);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var int = /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])( /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"]), { transform: Math.round });
var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    zIndex: int,
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    numOctaves: int
};
var getValueType = function (key) {
    return valueTypes[key];
};
var getValueAsType = function (value, type) {
    return type && typeof value === 'number' ? type.transform(value) : value;
};

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollKeys = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);

var blacklist = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP, 'transform']);
var translateAlias = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
function isCustomTemplate(v) {
    return typeof v === 'function';
}
function buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration) {
    var transformString = '';
    var transformHasZ = false;
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        transformHasZ = key === 'z' ? true : transformHasZ;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += 'translateZ(0)';
    } else {
        transformString = transformString.trim();
    }
    if (isCustomTemplate(state.transform)) {
        transformString = state.transform(transform, transformIsDefault ? '' : transformString);
    } else if (transformIsDefault) {
        transformString = 'none';
    }
    return transformString;
}
function buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (styles === void 0) {
        styles = {};
    }
    if (transform === void 0) {
        transform = {};
    }
    if (transformOrigin === void 0) {
        transformOrigin = {};
    }
    if (transformKeys === void 0) {
        transformKeys = [];
    }
    if (isDashCase === void 0) {
        isDashCase = false;
    }
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for (var key in state) {
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
            styles[prefixer(key, isDashCase)] = valueAsType;
        }
    }
    if (hasTransform || typeof state.transform === 'function') {
        styles.transform = buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration);
    }
    if (hasTransformOrigin) {
        styles.transformOrigin = (transformOrigin.originX || '50%') + " " + (transformOrigin.originY || '50%') + " " + (transformOrigin.originZ || 0);
    }
    return styles;
}
function createStyleBuilder(enableHardwareAcceleration, isDashCase) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function (state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase);
        return styles;
    };
}

function onRead(key, options) {
    var element = options.element,
        preparseOutput = options.preparseOutput;
    var defaultValueType = getValueType(key);
    if (isTransformProp(key)) {
        return defaultValueType ? defaultValueType.default || 0 : 0;
    } else if (scrollKeys.has(key)) {
        return element[key];
    } else {
        var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
        return preparseOutput && defaultValueType && defaultValueType.test(domValue) && defaultValueType.parse ? defaultValueType.parse(domValue) : domValue;
    }
}
function onRender(state, _a, changedValues) {
    var element = _a.element,
        buildStyles = _a.buildStyles,
        hasCSSVariable = _a.hasCSSVariable;
    Object.assign(element.style, buildStyles(state));
    if (hasCSSVariable) {
        var numChangedValues = changedValues.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = changedValues[i];
            if (key.startsWith('--')) {
                element.style.setProperty(key, state[key]);
            }
        }
    }
    if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
        element[SCROLL_LEFT] = state[SCROLL_LEFT];
    }
    if (changedValues.indexOf(SCROLL_TOP) !== -1) {
        element[SCROLL_TOP] = state[SCROLL_TOP];
    }
}
var cssStyler = /*#__PURE__*/createStyler({
    onRead: onRead,
    onRender: onRender,
    uncachedValues: scrollKeys
});
function createCssStyler(element, _a) {
    if (_a === void 0) {
        _a = {};
    }
    var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["enableHardwareAcceleration"]);
    return cssStyler(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ element: element, buildStyles: createStyleBuilder(enableHardwareAcceleration), preparseOutput: true }, props));
}

var camelCaseAttributes = /*#__PURE__*/new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues']);

var defaultOrigin = 0.5;
var svgAttrsTemplate = function () {
    return {
        style: {}
    };
};
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(progress * length);
};
var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
function calcOrigin(origin, offset, size) {
    return typeof origin === 'string' ? origin : style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(offset + size * origin);
}
function calculateSVGTransformOrigin(dimensions, originX, originY) {
    return calcOrigin(originX, dimensions.x, dimensions.width) + " " + calcOrigin(originY, dimensions.y, dimensions.height);
}
function buildSVGAttrs(_a, dimensions, totalPathLength, cssBuilder, attrs, isDashCase) {
    if (dimensions === void 0) {
        dimensions = unmeasured;
    }
    if (cssBuilder === void 0) {
        cssBuilder = createStyleBuilder(false, false);
    }
    if (attrs === void 0) {
        attrs = svgAttrsTemplate();
    }
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrX = _a.attrX,
        attrY = _a.attrY,
        originX = _a.originX,
        originY = _a.originY,
        pathLength = _a.pathLength,
        _b = _a.pathSpacing,
        pathSpacing = _b === void 0 ? 1 : _b,
        _c = _a.pathOffset,
        pathOffset = _c === void 0 ? 0 : _c,
        state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    var style = cssBuilder(state);
    for (var key in style) {
        if (key === 'transform') {
            attrs.style.transform = style[key];
        } else {
            var attrKey = isDashCase && !camelCaseAttributes.has(key) ? camelToDash(key) : key;
            attrs[attrKey] = style[key];
        }
    }
    if (originX !== undefined || originY !== undefined || style.transform) {
        attrs.style.transformOrigin = calculateSVGTransformOrigin(dimensions, originX !== undefined ? originX : defaultOrigin, originY !== undefined ? originY : defaultOrigin);
    }
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (totalPathLength !== undefined && pathLength !== undefined) {
        attrs[isDashCase ? 'stroke-dashoffset' : 'strokeDashoffset'] = progressToPixels(-pathOffset, totalPathLength);
        attrs[isDashCase ? 'stroke-dasharray' : 'strokeDasharray'] = progressToPixels(pathLength, totalPathLength) + " " + progressToPixels(pathSpacing, totalPathLength);
    }
    return attrs;
}
function createAttrBuilder(dimensions, totalPathLength, isDashCase) {
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrs = svgAttrsTemplate();
    var cssBuilder = createStyleBuilder(false, false);
    return function (state) {
        return buildSVGAttrs(state, dimensions, totalPathLength, cssBuilder, attrs, isDashCase);
    };
}

var getDimensions = function (element) {
    return typeof element.getBBox === 'function' ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function (element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }
};

var isPath = function (element) {
    return element.tagName === 'path';
};
var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType(key);
            return valueType ? valueType.default || 0 : 0;
        }
    },
    onRender: function (state, _a) {
        var element = _a.element,
            buildAttrs = _a.buildAttrs;
        var attrs = buildAttrs(state);
        for (var key in attrs) {
            if (key === 'style') {
                Object.assign(element.style, attrs.style);
            } else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
});
var svg = function (element) {
    var dimensions = getSVGElementDimensions(element);
    var pathLength = isPath(element) && element.getTotalLength ? element.getTotalLength() : undefined;
    return svgStyler({
        element: element,
        buildAttrs: createAttrBuilder(dimensions, pathLength)
    });
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var isHTMLElement = function (node) {
    return node instanceof HTMLElement || typeof node.click === 'function';
};
var isSVGElement = function (node) {
    return node instanceof SVGElement || 'ownerSVGElement' in node;
};
var createDOMStyler = function (node, props) {
    var styler;
    if (node === window) {
        styler = viewport(node);
    } else if (isHTMLElement(node)) {
        styler = createCssStyler(node, props);
    } else if (isSVGElement(node)) {
        styler = svg(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_contact_ContactBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/contact/ContactBanner */ "./components/contact/ContactBanner.js");
/* harmony import */ var _components_contact_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/contact/ContactForm */ "./components/contact/ContactForm.js");
/* harmony import */ var _components_contact_ContactSocials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contact/ContactSocials */ "./components/contact/ContactSocials.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\pages\\contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  line-height: 1.3;\n  margin: 0;\n  overflow-x: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var contact = function contact() {
  return __jsx("div", {
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Sam's Auto| Contact"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap",
    rel: "stylesheet",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-633493357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_components_contact_ContactBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_components_contact_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_contact_ContactSocials__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "633493357",
    __self: _this
  }, "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUdvQixTQUNDLFVBQ1ksc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENvbnRhY3RCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0QmFubmVyXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IENvbnRhY3RTb2NpYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdFNvY2lhbHNcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TYW0ncyBBdXRvfCBDb250YWN0PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zfFF1aWNrc2FuZHxSYWNpbmcrU2FucytPbmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhY3RCYW5uZXIgLz5cclxuICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICA8Q29udGFjdFNvY2lhbHMgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Laka Ganth\\\\Documents\\\\NextJS\\\\sam\\\\pages\\\\contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (contact);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

/***/ }),

/***/ "./public/static/images/contact/shopphone.png":
/*!****************************************************!*\
  !*** ./public/static/images/contact/shopphone.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopphone-8b91ae7f4f8710b0f664e8d1bbb561c7.png";

/***/ }),

/***/ "./public/static/images/icons/samlogo.svg":
/*!************************************************!*\
  !*** ./public/static/images/icons/samlogo.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNzIgODUuMTEiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ze2ZpbGw6I2ZmZjt9LmNscy0xLC5jbHMtMntzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0ye2ZpbGw6I2VkMWMyNDt9LmNscy0ze2ZvbnQtc2l6ZTo3MS42cHg7bGV0dGVyLXNwYWNpbmc6MC4wN2VtO30uY2xzLTMsLmNscy00e2ZvbnQtZmFtaWx5OlZDUk9TRE1vbm8sIFZDUiBPU0QgTW9ubzt9LmNscy00e2ZvbnQtc2l6ZTo3NS45cHg7ZmlsbDojMjMxZjIwO2xldHRlci1zcGFjaW5nOjAuMDdlbTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDI8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjM3My45NyA4My42OSAxNzYuNzEgODMuNjkgMTk3LjgxIDAuNSAzOTUuMDcgMC41IDM3My45NyA4My42OSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxOTcuOTEgODMuNjkgMC42NCA4My42OSAyMS43NSAwLjUgMjE5LjAxIDAuNSAxOTcuOTEgODMuNjkiLz48dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjM4IDc2LjcpIHNjYWxlKDEuMTkgMSkiPlNBTTwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxOS4wMSA3Ny43KSBzY2FsZSgwLjc5IDEpIj5BVVRPPC90ZXh0PjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ 4:
/*!***************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcontact&absolutePagePath=C%3A%5CUsers%5CLaka%20Ganth%5CDocuments%5CNextJS%5Csam%5Cpages%5Ccontact.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcontact&absolutePagePath=C%3A%5CUsers%5CLaka%20Ganth%5CDocuments%5CNextJS%5Csam%5Cpages%5Ccontact.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=C%3A%5CUsers%5CLaka%20Ganth%5CDocuments%5CNextJS%5Csam%5Cpages%5Ccontact.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=contact.js.map
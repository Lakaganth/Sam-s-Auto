module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UI/NavbarComp.js":
/*!*************************************!*\
  !*** ./components/UI/NavbarComp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "styled-media-query");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/icons/samlogo.svg */ "./public/static/images/icons/samlogo.svg");
/* harmony import */ var _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\UI\\NavbarComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const NavbarComp = () => {
  const {
    0: mobileWidth,
    1: setMobileWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openDraw,
    1: setOpenDraw
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    handleScroll(); // window.addEventListener("resize", handleScroll);
  }, []);

  const handleScroll = e => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  };

  const handleMenuOpen = () => {
    setOpenDraw(!openDraw);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mobileWidth ? __jsx(MobileMenu, {
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), openDraw ? __jsx(MobileDrawer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("svg", {
    onClick: () => setOpenDraw(false),
    width: "54",
    height: "54",
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Contact")), " ") : null) : __jsx(NavigationComp, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_icons_samlogo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "SAMLOGO",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Contact")), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarComp);
const NavigationComp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 80%;
  height:90px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: white;
  justify-content: center;
  align-content: center;
  padding-top: 4vh;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.27em;
    justify-self: center;
    align-self: center;
    /* transition: all 0.2s ease-in-out; */
    cursor: pointer;
  }
  /* a:hover {
    color: #fcb801;
    transform: translateY(-1vh);
    letter-spacing: 0.35em;
  } */

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
 /* display:none; */
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
grid-gap:20px;
  `}

    /* screen width is between 768px (medium) and 1170px (large) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("medium", "large")`
    grid-gap:40px;
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  
  `}
`;
const MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 60px;
  background-color: #151515;
  overflow: hidden;
  svg {
    position: absolute;
    top: 3vh;
    right: 2vw;
  }
  /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    height: 100px;
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
  height: 140px;
  `}
  

`;
const MobileDrawer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 100vh;
  width: 100vw;
  background: gray;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  a {
    color: white;
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-size: 2rem;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.27em;
    justify-self: center;
    align-self: center;
    /* transition: all 0.2s ease-in-out; */
    cursor: pointer;
  }
  .close {
    /* margin-right: 30px; */
  }
`;

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_NavbarComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/NavbarComp */ "./components/UI/NavbarComp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "styled-media-query");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/contact/shopphone.png */ "./public/static/images/contact/shopphone.png");
/* harmony import */ var _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ContactBanner = () => {
  const scrollAnim = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
    x: 1,
    from: {
      x: 0
    }
  });
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_UI_NavbarComp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(BannerBG, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(BannerGrid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "contact-intro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Let's Get In Touch"), __jsx("img", {
    src: _public_static_images_contact_shopphone_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "contactPhone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M39.9393 25.0607C40.5251 25.6464 41.4749 25.6464 42.0607 25.0607L51.6066 15.5147C52.1924 14.9289 52.1924 13.9792 51.6066 13.3934C51.0208 12.8076 50.0711 12.8076 49.4853 13.3934L41 21.8787L32.5147 13.3934C31.9289 12.8076 30.9792 12.8076 30.3934 13.3934C29.8076 13.9792 29.8076 14.9289 30.3934 15.5147L39.9393 25.0607ZM39.5 6.55671e-08L39.5 24L42.5 24L42.5 -6.55671e-08L39.5 6.55671e-08Z",
    fill: "#A8A8A8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M7.1736 51.168C6.0856 51.168 5.1336 50.976 4.3176 50.592C3.5016 50.208 2.8616 49.688 2.3976 49.032C1.9496 48.376 1.6936 47.648 1.6296 46.848H2.7576C2.8856 47.728 3.2936 48.512 3.9816 49.2C4.6856 49.888 5.7496 50.232 7.1736 50.232C8.0056 50.232 8.7256 50.08 9.3336 49.776C9.9576 49.472 10.4376 49.056 10.7736 48.528C11.1096 48 11.2776 47.416 11.2776 46.776C11.2776 45.96 11.0776 45.312 10.6776 44.832C10.2936 44.352 9.8056 43.992 9.2136 43.752C8.6376 43.512 7.8536 43.256 6.8616 42.984C5.7736 42.696 4.8936 42.408 4.2216 42.12C3.5656 41.832 3.0056 41.392 2.5416 40.8C2.0936 40.192 1.8696 39.368 1.8696 38.328C1.8696 37.528 2.0776 36.8 2.4936 36.144C2.9256 35.472 3.5336 34.944 4.3176 34.56C5.1016 34.176 6.0056 33.984 7.0296 33.984C8.5176 33.984 9.7176 34.352 10.6296 35.088C11.5416 35.824 12.0856 36.728 12.2616 37.8H11.1096C11.0136 37.368 10.7976 36.928 10.4616 36.48C10.1416 36.032 9.6776 35.664 9.0696 35.376C8.4776 35.072 7.7656 34.92 6.9336 34.92C5.8136 34.92 4.8696 35.232 4.1016 35.856C3.3336 36.464 2.9496 37.28 2.9496 38.304C2.9496 39.12 3.1496 39.776 3.5496 40.272C3.9496 40.752 4.4376 41.12 5.0136 41.376C5.6056 41.616 6.3976 41.864 7.3896 42.12C8.4936 42.424 9.3656 42.72 10.0056 43.008C10.6616 43.28 11.2136 43.72 11.6616 44.328C12.1256 44.92 12.3576 45.728 12.3576 46.752C12.3576 47.504 12.1576 48.216 11.7576 48.888C11.3576 49.56 10.7656 50.112 9.9816 50.544C9.2136 50.96 8.2776 51.168 7.1736 51.168ZM18.7587 44.472C18.7587 43.112 19.0227 41.928 19.5507 40.92C20.0947 39.912 20.8387 39.144 21.7827 38.616C22.7427 38.072 23.8387 37.8 25.0707 37.8C26.7027 37.8 28.0387 38.208 29.0787 39.024C30.1347 39.84 30.7907 40.936 31.0467 42.312H29.9187C29.7107 41.192 29.1667 40.312 28.2867 39.672C27.4227 39.032 26.3507 38.712 25.0707 38.712C24.1107 38.712 23.2387 38.928 22.4547 39.36C21.6707 39.776 21.0387 40.424 20.5587 41.304C20.0947 42.168 19.8627 43.224 19.8627 44.472C19.8627 45.736 20.0947 46.8 20.5587 47.664C21.0387 48.528 21.6707 49.176 22.4547 49.608C23.2387 50.04 24.1107 50.256 25.0707 50.256C26.3507 50.256 27.4227 49.936 28.2867 49.296C29.1667 48.656 29.7107 47.776 29.9187 46.656H31.0467C30.7907 48.016 30.1347 49.112 29.0787 49.944C28.0227 50.776 26.6867 51.192 25.0707 51.192C23.8387 51.192 22.7427 50.92 21.7827 50.376C20.8387 49.832 20.0947 49.056 19.5507 48.048C19.0227 47.024 18.7587 45.832 18.7587 44.472ZM39.2569 40.656C39.5769 39.696 40.1449 38.968 40.9609 38.472C41.7769 37.96 42.8169 37.704 44.0809 37.704V38.832H43.7209C42.4409 38.832 41.3769 39.2 40.5289 39.936C39.6809 40.656 39.2569 41.84 39.2569 43.488V51H38.1769V37.968H39.2569V40.656ZM56.1435 51.192C54.9275 51.192 53.8315 50.92 52.8555 50.376C51.8795 49.832 51.1115 49.056 50.5515 48.048C50.0075 47.024 49.7355 45.832 49.7355 44.472C49.7355 43.128 50.0155 41.952 50.5755 40.944C51.1355 39.92 51.9035 39.144 52.8795 38.616C53.8715 38.072 54.9755 37.8 56.1915 37.8C57.4075 37.8 58.5035 38.072 59.4795 38.616C60.4555 39.144 61.2155 39.912 61.7595 40.92C62.3195 41.928 62.5995 43.112 62.5995 44.472C62.5995 45.832 62.3195 47.024 61.7595 48.048C61.1995 49.056 60.4235 49.832 59.4315 50.376C58.4555 50.92 57.3595 51.192 56.1435 51.192ZM56.1435 50.232C57.0875 50.232 57.9675 50.024 58.7835 49.608C59.6155 49.176 60.2795 48.528 60.7755 47.664C61.2715 46.8 61.5195 45.736 61.5195 44.472C61.5195 43.224 61.2715 42.168 60.7755 41.304C60.2795 40.44 59.6235 39.8 58.8075 39.384C57.9915 38.952 57.1115 38.736 56.1675 38.736C55.2235 38.736 54.3435 38.952 53.5275 39.384C52.7275 39.8 52.0795 40.44 51.5835 41.304C51.0875 42.168 50.8395 43.224 50.8395 44.472C50.8395 45.736 51.0795 46.8 51.5595 47.664C52.0555 48.528 52.7035 49.176 53.5035 49.608C54.3195 50.024 55.1995 50.232 56.1435 50.232ZM70.7963 33.24V51H69.7163V33.24H70.7963ZM79.6753 33.24V51H78.5953V33.24H79.6753Z",
    fill: "#E4E3E3",
    fillOpacity: "0.46",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContactBanner);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  color: white;
  .contact-intro {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 52px;
    text-align: right;
    letter-spacing: 0.055em;
    color: #fcfcfc;
    width: 40%;
    margin: 2vh 0;
    /* margin-top: 10vh; */
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    .contact-intro{
    font-size: 32px;
    line-height: 42px;
    margin: 2vh auto;}
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    .contact-intro{
    font-size: 32px;
    line-height: 42px;
    margin: 6vh auto;}
  `}
`;
const BannerBG = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100vw;
  height: 424px;
  overflow: hidden;
  display:none;
  background: url("/static/images/contact/contactdice.png") top center no-repeat;
  background-size: cover;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 20%;
    display:none;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 35%;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 65%;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:65%;
  `}

`;
const BannerGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  /* margin: 10px 0; */
  p {
    animation: heropanimation 1s forwards 0s ease-in-out;
    @keyframes heropanimation {
      0% {
        transform: translateY(80%);
        opacity: 0;
      }

      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }

  img {
    width: 40%;
    height: 40%;
    animation: heroimganimation 1s forwards 0s ease-in-out;
    @keyframes heroimganimation {
      0% {
        transform: translateY(-80%);
        opacity: 0;
      }

      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_3___default.a.lessThan("small")`
  display: flex;
  flex-direction: column;
justify-content: space-around;
align-items: center;
    img {
    width: 80%;
    height: 80%;
  }
  `}
`;
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100vw;
  height: 60%;
  background: rgba(67, 67, 67, 0.44);
  /* transform: translate3d(0, 0%, 0); */
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.345em;
    transform: translate3d(0, 50%, 0);
  }
`;

/***/ }),

/***/ "./components/contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/contact/ContactForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "styled-media-query");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ContactForm = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [phone, setPhone] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [subject, setSubject] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: {
        "form-name": "contact",
        name,
        phone,
        subject,
        message
      }
    }).then(() => alert("Success!")).catch(error => alert(error));
    e.preventDefault();
  };

  return __jsx(Container, {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Contact Form"), __jsx(InputGroup, {
    __self: undefined,
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
    onChange: name => setName(name.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: undefined,
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
    onChange: phone => setPhone(phone.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: undefined,
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
    onChange: subject => setSubject(subject.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: undefined,
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
    onChange: message => setMessage(message.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 120vh;
  background-color: #151515;
  padding: 10vh 0;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 120vh;
    padding: 5vh 0;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 80vh;
    padding: 0vh 0;
  `}
`;
const FormBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form`
  width: 50%;
  height: 120vh;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100px;
    /* identical to box height */
    padding: 50px 0 0px 0;
    text-align: center;
    letter-spacing: 0.345em;
    margin: 25px auto;
    color: #767676;
  }
  button {
    width: 155px;
    height: 51px;
    background-color: #ff3838;
    color: #ffffff;
    font-size: 24px;
    border: none;
    margin: 0 40%;
    cursor: pointer;
    /* box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1); */
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
  width: 90%;

    /* screen width is less than 450px (small) */
p{
  font-size: 32px;
    line-height: 60px;
}
button{
  margin: 0 30%;
}
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90%;
    height: 80vh;
   
p{
  font-size: 32px;
    line-height: 60px;
}
button{
  margin: 0 40%;
}
  `}
`;
const InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 70%;
  margin: 2vh auto;
  font-family: Quicksand;
  input {
    width: 100%;
    height: 5vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 25vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
    padding-top: 1vh;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    textarea {
      height: 50vh;
    }
  `}
`;

/***/ }),

/***/ "./components/contact/ContactSocials.js":
/*!**********************************************!*\
  !*** ./components/contact/ContactSocials.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "styled-media-query");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\contact\\ContactSocials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ContactSocials = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Social Media"), __jsx(SocialGrid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "icon",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M125.99 53.1734C125.99 23.8064 97.7865 0 62.9953 0C28.2038 0 0 23.8064 0 53.1734C0 79.7138 23.0364 101.711 53.1521 105.701V68.5439H37.1573V53.1734H53.1521V41.4585C53.1521 28.132 62.5569 20.7708 76.9461 20.7708C83.8383 20.7708 91.0476 21.8093 91.0476 21.8093V34.895H83.1044C75.2787 34.895 72.838 38.9938 72.838 43.1988V53.1734H90.3095L87.5165 68.5439H72.838V105.701C102.954 101.711 125.99 79.7138 125.99 53.1734Z",
    fill: "#274DD2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "/samautos"), __jsx("div", {
    className: "icon",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M54.283 57.3535C54.283 63.3225 60.0359 68.1611 67.1327 68.1611C74.2296 68.1611 79.9824 63.3225 79.9824 57.3535C79.9824 51.3845 74.2296 46.5459 67.1327 46.5459C60.0359 46.5459 54.283 51.3845 54.283 57.3535Z",
    fill: "#FF3A81",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M37.0835 38.2316C37.7012 36.8238 38.6866 35.5495 39.9671 34.5036C41.2107 33.4266 42.7247 32.5978 44.3996 32.0782C45.7579 31.6345 47.7984 31.1064 51.5568 30.9625C55.6226 30.8066 56.8416 30.7729 67.1344 30.7729C77.4283 30.7729 78.6473 30.8057 82.712 30.9616C86.4704 31.1064 88.512 31.6345 89.8693 32.0782C91.5441 32.5978 93.0592 33.4266 94.3017 34.5036C95.5822 35.5495 96.5676 36.8229 97.1864 38.2316C97.7139 39.374 98.3419 41.0911 98.5129 44.2523C98.6983 47.671 98.7383 48.6962 98.7383 57.3542C98.7383 66.0113 98.6983 67.0365 98.5129 70.4561C98.3419 73.6172 97.7139 75.3335 97.1864 76.4759C96.5676 77.8846 95.5832 79.158 94.3028 80.204C93.0592 81.2809 91.5452 82.1098 89.8703 82.6293C88.512 83.0739 86.4704 83.602 82.712 83.7459C78.6473 83.9018 77.4293 83.9346 67.1354 83.9346C56.8405 83.9346 55.6215 83.9018 51.5579 83.7459C47.7994 83.602 45.7579 83.0739 44.3996 82.6293C41.0376 81.5385 38.3804 79.3036 37.0835 76.4759C36.556 75.3335 35.928 73.6172 35.7559 70.4561C35.5705 67.0365 35.5316 66.0113 35.5316 57.3542C35.5316 48.6962 35.5705 47.671 35.7559 44.2523C35.927 41.0911 36.5549 39.374 37.0835 38.2316ZM67.1344 74.0024C78.0675 74.0024 86.9304 66.5489 86.9304 57.3533C86.9304 48.1578 78.0675 40.7043 67.1344 40.7043C56.2023 40.7043 47.3395 48.1578 47.3395 57.3533C47.3395 66.5489 56.2023 74.0024 67.1344 74.0024ZM46.5569 43.9369C49.1117 43.9369 51.1829 42.1948 51.1829 40.0461C51.1829 37.8973 49.1117 36.1552 46.5569 36.1552C44.0021 36.1552 41.9308 37.8973 41.9308 40.0461C41.9319 42.1948 44.0021 43.9369 46.5569 43.9369Z",
    fill: "#FF43EC",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M67.1335 0.889404C104.204 0.889404 134.267 26.174 134.267 57.3534C134.267 88.5328 104.204 113.817 67.1335 113.817C30.0626 113.817 0.000427246 88.5328 0.000427246 57.3534C0.000427246 26.174 30.0626 0.889404 67.1335 0.889404ZM28.817 70.7207C29.0034 74.1721 29.6559 76.5285 30.6086 78.5911C32.6112 82.9464 36.7046 86.3892 41.8828 88.0736C44.3341 88.8749 47.1368 89.4228 51.2394 89.5805C55.3502 89.7382 56.6634 89.7761 67.1325 89.7761C77.6026 89.7761 78.9148 89.7382 83.0266 89.5805C87.1292 89.4228 89.9319 88.8749 92.3832 88.0736C94.9564 87.2594 97.2858 85.9834 99.2116 84.3335C101.172 82.7146 102.689 80.7546 103.657 78.5911C104.61 76.5294 105.263 74.1721 105.449 70.7215C105.639 67.2632 105.683 66.1587 105.683 57.3534C105.683 48.5481 105.639 47.4436 105.45 43.9861C105.264 40.5346 104.612 38.1782 103.659 36.1156C102.691 33.9522 101.173 31.9922 99.2116 30.3733C97.2869 28.7234 94.9564 27.4474 92.3842 26.6332C89.9319 25.8319 87.1302 25.284 83.0266 25.1263C78.9158 24.9686 77.6026 24.9307 67.1335 24.9307C56.6645 24.9307 55.3512 24.9686 51.2404 25.1272C47.1368 25.284 44.3351 25.8319 41.8828 26.6323C39.3106 27.4465 36.9802 28.7234 35.0544 30.3733C33.0937 31.993 31.5756 33.9522 30.6086 36.1156C29.6549 38.1782 29.0034 40.5346 28.8159 43.9861C28.6285 47.4436 28.5844 48.5481 28.5844 57.3534C28.5844 66.1587 28.6285 67.2632 28.817 70.7207V70.7207Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "@samautos"), __jsx("div", {
    className: "icon",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M100.713 15.4021C77.6687 -3.92979 40.3118 -3.92515 17.2744 15.4127C-5.76301 34.7506 -5.75748 66.0985 17.2871 85.4304C40.3316 104.762 77.6883 104.758 100.726 85.4198C111.79 76.1326 118.004 63.5376 118 50.4056C117.997 37.2758 111.779 24.6848 100.713 15.4021ZM89.3535 69.8731C89.351 69.8752 89.3484 69.8775 89.3457 69.8797V69.8632L86.3562 72.3552C82.4901 75.6404 76.8596 76.9921 71.5078 75.9199C66.116 74.7088 60.9904 72.781 56.3253 70.2098C51.9911 67.8853 47.9745 65.1681 44.3483 62.1066C41.0118 59.3273 38.0143 56.2754 35.3998 52.9968C32.5402 49.4688 30.2768 45.6256 28.6739 41.5764C26.8363 36.8196 28.359 31.6 32.6073 28.0933L36.1079 25.1557C37.0811 24.3354 38.6626 24.3325 39.64 25.1492C39.6425 25.1513 39.6453 25.1534 39.6479 25.1557L50.7004 34.4305C51.6781 35.2473 51.6815 36.5744 50.7083 37.3946C50.7057 37.3967 50.7032 37.3988 50.7004 37.4011L44.2104 42.8472C42.3483 44.3929 42.1141 46.849 43.6598 48.6235C46.0072 51.3268 48.6048 53.8705 51.4283 56.2315C54.5762 58.8846 57.9985 61.298 61.6548 63.4436C63.7676 64.6801 66.6318 64.4717 68.4594 62.9485L74.733 57.6014C75.7063 56.781 77.2878 56.7781 78.2652 57.5948C78.2677 57.5969 78.2703 57.5991 78.273 57.6014L89.3454 66.9093C90.3233 67.7258 90.3268 69.0527 89.3535 69.8731Z",
    fill: "#50FFAB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "555-555-5555")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSocials);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 100vh;
  background-color: #151515;
  overflow: hidden;
  p{
    font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 100px;
line-height: 125px;
text-align: center;
letter-spacing: 0.345em;

color: #F5F5F5;
  }
    /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
padding-top:10vh;
height: 150vh;
p{
  font-size: 70px;
line-height: 85px;
}
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
  padding-top:10vh;
height: 100vh;
  `}

`;
const SocialGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  .icon {
    margin: 30px 0;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 75px;
    letter-spacing: 0.05em;

    color: #ffffff;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    
    grid-gap: 35px;
    .icon {
    margin: 0px 0;
    width:30%;
  }
p{
  font-size: 24px;
    line-height: 35px;
}
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    grid-gap: 35px;
    margin-top:10vh;
    .icon {
    margin: 0px 0;
    width:30%;
  }
 p{
   font-size: 24px;
    line-height: 35px;
  }
  `}
`;

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

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
  return (href, as) => {
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
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_contact_ContactBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact/ContactBanner */ "./components/contact/ContactBanner.js");
/* harmony import */ var _components_contact_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/contact/ContactForm */ "./components/contact/ContactForm.js");
/* harmony import */ var _components_contact_ContactSocials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact/ContactSocials */ "./components/contact/ContactSocials.js");
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\pages\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const contact = () => {
  return __jsx("div", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Sam's Auto| Contact"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap",
    rel: "stylesheet",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_components_contact_ContactBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_components_contact_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_contact_ContactSocials__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "633493357",
    __self: undefined
  }, "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUdvQixTQUNDLFVBQ1ksc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENvbnRhY3RCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0QmFubmVyXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IENvbnRhY3RTb2NpYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdFNvY2lhbHNcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TYW0ncyBBdXRvfCBDb250YWN0PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zfFF1aWNrc2FuZHxSYWNpbmcrU2FucytPbmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhY3RCYW5uZXIgLz5cclxuICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICA8Q29udGFjdFNvY2lhbHMgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Laka Ganth\\\\Documents\\\\NextJS\\\\sam\\\\pages\\\\contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (contact);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  width: 100vw;
  line-height: 1.3;
  margin: 0;
  overflow-x: hidden;
`;

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

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Laka Ganth\Documents\NextJS\sam\pages\contact.js */"./pages/contact.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "styled-media-query":
/*!*************************************!*\
  !*** external "styled-media-query" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map
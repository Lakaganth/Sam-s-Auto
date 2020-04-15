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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UI/Footer.js":
/*!*********************************!*\
  !*** ./components/UI/Footer.js ***!
  \*********************************/
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
/* harmony import */ var _public_static_images_landing_map_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/images/landing/map.png */ "./public/static/images/landing/map.png");
/* harmony import */ var _public_static_images_landing_map_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_map_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_landing_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/landing/facebook.svg */ "./public/static/images/landing/facebook.svg");
/* harmony import */ var _public_static_images_landing_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_landing_insta_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/landing/insta.svg */ "./public/static/images/landing/insta.svg");
/* harmony import */ var _public_static_images_landing_insta_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_insta_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_landing_phone_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/landing/phone.svg */ "./public/static/images/landing/phone.svg");
/* harmony import */ var _public_static_images_landing_phone_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_phone_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\UI\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Footer = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(FotterGrid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.google.com/maps/dir//sam's+auto+norfinch/@43.7784626,-79.4512931,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b3027a9c588d7:0xd9ed80a3353b1e20!2m2!1d-79.5294928!2d43.7651579!3e0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_landing_map_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "amp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "155 Norfinch Dr #3, North York, ON M3N 1Y2")), __jsx("div", {
    className: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _public_static_images_landing_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "/samautos"), __jsx("img", {
    src: _public_static_images_landing_insta_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Insta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "@samautos"), __jsx("img", {
    src: _public_static_images_landing_phone_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "555-555-5555"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 50vh;
  background-color: #151515;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height */
  letter-spacing: 0.05em;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 80vh;
    font-size: 20px;
  line-height: 24px;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    font-size: 18px;
    line-height: 24px;
  `}
`;
const FotterGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .address {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
      width: 60%;
      margin: 0 auto;
    }
  }
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    img {
      justify-self: center;
      transform: translate3d(0, 100%, 0);
    }
    p {
      text-align: left;
    }
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    display: flex;
 flex-direction:column;
 .contact {
   img{
    transform: translate3d(0, 20%, 0);
   }
 }
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    .address{
      width:90%;
      margin-left: 3vw;
      img{
        width: 50vw;
      }
    }
.contact{
  img{
    transform: translate3d(0, 20%, 0);
   }
}
  `}
`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div``;

/***/ }),

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

/***/ "./components/home/Landing.js":
/*!************************************!*\
  !*** ./components/home/Landing.js ***!
  \************************************/
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_NavbarComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/NavbarComp */ "./components/UI/NavbarComp.js");
/* harmony import */ var _public_static_images_landing_hero_car_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/landing/hero-car.png */ "./public/static/images/landing/hero-car.png");
/* harmony import */ var _public_static_images_landing_hero_car_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_hero_car_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Landing = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_UI_NavbarComp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(HeroBanner, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(HeroDiv, {
    className: "hero-background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "banner-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Sam's Auto"))), __jsx(HeroContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "hero-p-b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "For all your automotive need"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(ButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "436",
    height: "75",
    viewBox: "0 0 336 75",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M19.8987 62.5788L48.969 1.5788H285.389L263.467 62.5788H19.8987Z",
    stroke: "#FF3838",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  })), __jsx("path", {
    d: "M93.6457 27.5908C93.6457 28.8495 93.2937 30.0121 92.5897 31.0788C91.8857 32.1455 90.7231 32.9561 89.1017 33.5108L92.8137 43.0788H85.6777L82.8617 34.2148H82.5097L80.6217 43.0788H73.7097L78.0297 22.7588H86.4457C87.4271 22.7588 88.3551 22.8228 89.2297 22.9508C90.1044 23.0575 90.8617 23.2921 91.5017 23.6548C92.1631 23.9961 92.6857 24.4868 93.0697 25.1268C93.4537 25.7455 93.6457 26.5668 93.6457 27.5908ZM84.4297 32.1668C84.9844 32.1668 85.4537 31.9855 85.8377 31.6228C86.2431 31.2388 86.5631 30.7801 86.7977 30.2468C87.0537 29.7135 87.2351 29.1481 87.3417 28.5508C87.4484 27.9321 87.5017 27.3988 87.5017 26.9508C87.5017 26.3961 87.4057 25.9268 87.2137 25.5428C87.0217 25.1375 86.6057 24.9348 85.9657 24.9348H84.5257L82.9257 32.1668H84.4297ZM100.373 36.6468C100.288 37.1161 100.224 37.5641 100.181 37.9908C100.16 38.4175 100.149 38.8015 100.149 39.1428C100.149 39.3348 100.16 39.5481 100.181 39.7828C100.203 40.0175 100.245 40.2415 100.309 40.4548C100.395 40.6468 100.501 40.8175 100.629 40.9668C100.779 41.0948 100.981 41.1588 101.237 41.1588C101.429 41.1588 101.643 41.0948 101.877 40.9668C102.133 40.8388 102.379 40.6575 102.613 40.4228C102.869 40.1881 103.104 39.9001 103.317 39.5588C103.552 39.2175 103.733 38.8335 103.861 38.4068H109.109L108.277 41.8308C107.851 42.1081 107.36 42.3428 106.805 42.5348C106.251 42.7268 105.664 42.8868 105.045 43.0148C104.427 43.1215 103.797 43.1961 103.157 43.2388C102.517 43.3028 101.909 43.3348 101.333 43.3348C100.267 43.3348 99.2746 43.2388 98.3572 43.0468C97.4399 42.8548 96.6399 42.5241 95.9572 42.0548C95.2746 41.5855 94.7306 40.9668 94.3252 40.1988C93.9412 39.4095 93.7492 38.4388 93.7492 37.2868C93.7492 36.2415 93.9092 35.2175 94.2292 34.2148C94.5706 33.2121 95.1252 32.3268 95.8932 31.5588C96.6826 30.7695 97.7279 30.1401 99.0292 29.6708C100.352 29.2015 101.995 28.9668 103.957 28.9668C106.091 28.9668 107.691 29.2975 108.757 29.9588C109.845 30.6201 110.389 31.6548 110.389 33.0628C110.389 33.6388 110.304 34.2681 110.133 34.9508C109.963 35.6121 109.707 36.1775 109.365 36.6468H100.373ZM104.629 32.8388C104.629 32.1775 104.523 31.7295 104.309 31.4948C104.096 31.2601 103.84 31.1428 103.541 31.1428C103.2 31.1428 102.88 31.2601 102.581 31.4948C102.304 31.7081 102.048 32.0068 101.813 32.3908C101.579 32.7535 101.365 33.1801 101.173 33.6708C100.981 34.1401 100.821 34.6415 100.693 35.1748H104.341C104.384 34.9188 104.427 34.6521 104.469 34.3748C104.512 34.1401 104.544 33.8841 104.565 33.6068C104.608 33.3295 104.629 33.0735 104.629 32.8388ZM113.201 30.5028C114.289 29.9695 115.399 29.5855 116.529 29.3508C117.681 29.0948 118.961 28.9668 120.369 28.9668C121.735 28.9668 122.865 29.0735 123.761 29.2868C124.657 29.5001 125.372 29.8095 125.905 30.2148C126.439 30.6201 126.812 31.1001 127.025 31.6548C127.239 32.2095 127.345 32.8388 127.345 33.5428C127.345 33.9481 127.313 34.3855 127.249 34.8548C127.207 35.3241 127.153 35.7188 127.089 36.0388L125.585 43.0788H120.433L119.857 41.0308H119.665C118.983 41.7775 118.183 42.3535 117.265 42.7588C116.369 43.1428 115.473 43.3348 114.577 43.3348C114.065 43.3348 113.564 43.2601 113.073 43.1108C112.583 42.9615 112.145 42.7375 111.761 42.4388C111.377 42.1188 111.068 41.7241 110.833 41.2548C110.599 40.7641 110.481 40.1775 110.481 39.4948C110.481 38.3855 110.78 37.5108 111.377 36.8708C111.996 36.2095 112.796 35.7188 113.777 35.3988C114.78 35.0575 115.9 34.8441 117.137 34.7588C118.396 34.6735 119.655 34.6308 120.913 34.6308C120.956 34.4175 121.009 34.1188 121.073 33.7348C121.137 33.3295 121.169 32.9775 121.169 32.6788C121.169 32.2948 121.063 31.9428 120.849 31.6228C120.657 31.2815 120.241 31.1108 119.601 31.1108C118.855 31.1108 118.3 31.3348 117.937 31.7828C117.596 32.2095 117.372 32.7321 117.265 33.3508H112.593L113.201 30.5028ZM120.561 36.1348H119.985C119.367 36.1348 118.833 36.2201 118.385 36.3908C117.959 36.5401 117.607 36.7428 117.329 36.9988C117.073 37.2548 116.881 37.5428 116.753 37.8628C116.625 38.1828 116.561 38.5028 116.561 38.8228C116.561 39.3348 116.689 39.7188 116.945 39.9748C117.223 40.2308 117.543 40.3588 117.905 40.3588C118.353 40.3588 118.791 40.1988 119.217 39.8788C119.665 39.5588 119.943 39.1321 120.049 38.5988L120.561 36.1348ZM141.865 21.5748H148.425L143.849 43.0788H138.665L138.089 41.0308H137.865C137.737 41.2228 137.535 41.4575 137.257 41.7348C137.001 41.9908 136.671 42.2468 136.265 42.5028C135.86 42.7375 135.38 42.9295 134.825 43.0788C134.271 43.2495 133.631 43.3348 132.905 43.3348C132.159 43.3348 131.519 43.2281 130.985 43.0148C130.473 42.7801 130.047 42.4708 129.705 42.0868C129.385 41.7028 129.151 41.2441 129.001 40.7108C128.852 40.1561 128.777 39.5588 128.777 38.9188C128.777 38.6415 128.799 38.2041 128.841 37.6068C128.884 36.9881 128.98 36.3161 129.129 35.5908C129.3 34.8441 129.535 34.0868 129.833 33.3188C130.153 32.5295 130.569 31.8148 131.081 31.1748C131.615 30.5348 132.265 30.0121 133.033 29.6068C133.801 29.1801 134.729 28.9668 135.817 28.9668C136.159 28.9668 136.521 28.9988 136.905 29.0628C137.289 29.1268 137.652 29.2441 137.993 29.4148C138.356 29.5855 138.676 29.8308 138.953 30.1508C139.231 30.4708 139.433 30.8868 139.561 31.3988H139.785L141.865 21.5748ZM137.961 32.1028C137.449 32.1028 137.023 32.3908 136.681 32.9668C136.34 33.5215 136.063 34.1721 135.849 34.9188C135.636 35.6655 135.476 36.4121 135.369 37.1588C135.284 37.9055 135.241 38.4601 135.241 38.8228C135.241 39.2495 135.305 39.6121 135.433 39.9108C135.561 40.1881 135.807 40.3268 136.169 40.3268C136.383 40.3268 136.585 40.2841 136.777 40.1988C136.991 40.0921 137.183 39.9748 137.353 39.8468C137.545 39.6975 137.705 39.5481 137.833 39.3988C137.961 39.2495 138.068 39.1215 138.153 39.0148L139.401 33.1908C139.252 32.9561 139.049 32.7215 138.793 32.4868C138.559 32.2308 138.281 32.1028 137.961 32.1028ZM176.635 43.0788H169.531L172.475 29.2548L164.891 43.0788H160.539L159.099 28.7748L156.027 43.0788H153.147L157.467 22.7588H165.627L166.619 34.2148L172.763 22.7588H180.987L176.635 43.0788ZM190.04 28.9668C192.578 28.9668 194.424 29.4148 195.576 30.3108C196.792 31.2495 197.4 32.8068 197.4 34.9828C197.4 36.3268 197.176 37.5428 196.728 38.6308C196.28 39.6975 195.65 40.5828 194.84 41.2868C193.218 42.6521 190.872 43.3348 187.8 43.3348C185.176 43.3348 183.298 42.8335 182.168 41.8308C180.952 40.7855 180.344 39.2175 180.344 37.1268C180.344 35.7401 180.621 34.4815 181.176 33.3508C181.752 32.2201 182.573 31.2815 183.64 30.5348C185.197 29.4895 187.33 28.9668 190.04 28.9668ZM187.864 41.1588C188.397 41.1588 188.856 40.8601 189.24 40.2628C189.645 39.6655 189.965 38.9401 190.2 38.0868C190.434 37.2121 190.605 36.3161 190.712 35.3988C190.84 34.4601 190.904 33.6495 190.904 32.9668C190.904 32.3695 190.84 31.9215 190.712 31.6228C190.605 31.3028 190.36 31.1428 189.976 31.1428C189.4 31.1428 188.898 31.4521 188.472 32.0708C188.066 32.6895 187.736 33.4255 187.48 34.2788C187.224 35.1321 187.032 36.0068 186.904 36.9028C186.797 37.7988 186.744 38.5241 186.744 39.0788C186.744 40.4655 187.117 41.1588 187.864 41.1588ZM200.958 29.3188H206.174L206.654 31.7188H206.878C207.369 30.9508 207.998 30.3001 208.766 29.7668C209.534 29.2335 210.547 28.9668 211.806 28.9668C211.891 28.9668 212.019 28.9775 212.19 28.9988C212.382 28.9988 212.585 29.0308 212.798 29.0948C213.033 29.1375 213.267 29.2121 213.502 29.3188C213.758 29.4041 214.003 29.5321 214.238 29.7028L212.83 36.2948H209.342C209.299 34.9721 209.182 34.0548 208.99 33.5428C208.798 33.0095 208.489 32.7428 208.062 32.7428C207.849 32.7428 207.614 32.7961 207.358 32.9028C207.123 32.9881 206.878 33.1908 206.622 33.5108L204.574 43.0788H198.046L200.958 29.3188ZM220.811 36.6468C220.725 37.1161 220.661 37.5641 220.619 37.9908C220.597 38.4175 220.587 38.8015 220.587 39.1428C220.587 39.3348 220.597 39.5481 220.619 39.7828C220.64 40.0175 220.683 40.2415 220.747 40.4548C220.832 40.6468 220.939 40.8175 221.067 40.9668C221.216 41.0948 221.419 41.1588 221.675 41.1588C221.867 41.1588 222.08 41.0948 222.315 40.9668C222.571 40.8388 222.816 40.6575 223.051 40.4228C223.307 40.1881 223.541 39.9001 223.755 39.5588C223.989 39.2175 224.171 38.8335 224.299 38.4068H229.547L228.715 41.8308C228.288 42.1081 227.797 42.3428 227.243 42.5348C226.688 42.7268 226.101 42.8868 225.483 43.0148C224.864 43.1215 224.235 43.1961 223.595 43.2388C222.955 43.3028 222.347 43.3348 221.771 43.3348C220.704 43.3348 219.712 43.2388 218.795 43.0468C217.877 42.8548 217.077 42.5241 216.395 42.0548C215.712 41.5855 215.168 40.9668 214.763 40.1988C214.379 39.4095 214.187 38.4388 214.187 37.2868C214.187 36.2415 214.347 35.2175 214.667 34.2148C215.008 33.2121 215.563 32.3268 216.331 31.5588C217.12 30.7695 218.165 30.1401 219.467 29.6708C220.789 29.2015 222.432 28.9668 224.395 28.9668C226.528 28.9668 228.128 29.2975 229.195 29.9588C230.283 30.6201 230.827 31.6548 230.827 33.0628C230.827 33.6388 230.741 34.2681 230.571 34.9508C230.4 35.6121 230.144 36.1775 229.803 36.6468H220.811ZM225.067 32.8388C225.067 32.1775 224.96 31.7295 224.747 31.4948C224.533 31.2601 224.277 31.1428 223.979 31.1428C223.637 31.1428 223.317 31.2601 223.019 31.4948C222.741 31.7081 222.485 32.0068 222.251 32.3908C222.016 32.7535 221.803 33.1801 221.611 33.6708C221.419 34.1401 221.259 34.6415 221.131 35.1748H224.779C224.821 34.9188 224.864 34.6521 224.907 34.3748C224.949 34.1401 224.981 33.8841 225.003 33.6068C225.045 33.3295 225.067 33.0735 225.067 32.8388Z",
    fill: "#D1D7D8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("line", {
    className: "line1",
    x1: "303.943",
    y1: "2.56001",
    x2: "282.943",
    y2: "64.56",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("line", {
    className: "line2",
    x1: "318.943",
    y1: "2.56001",
    x2: "297.943",
    y2: "64.56",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("line", {
    className: "line3",
    x1: "333.943",
    y1: "2.56001",
    x2: "312.943",
    y2: "64.56",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("line", {
    className: "line4",
    x1: "31.3773",
    y1: "0.68847",
    x2: "1.33257",
    y2: "58.8461",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "13.5222",
    y: "0.0787964",
    width: "278",
    height: "74",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx("feOffset", {
    dy: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.908333 0 0 0 0 0.420104 0 0 0 0 0.420104 0 0 0 0.25 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  })))))))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "scroll-arrow",
    initial: {
      y: 8,
      opacity: 0
    },
    animate: {
      y: 10,
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
      lineNumber: 121,
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
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M39.9393 25.0607C40.5251 25.6464 41.4749 25.6464 42.0607 25.0607L51.6066 15.5147C52.1924 14.9289 52.1924 13.9792 51.6066 13.3934C51.0208 12.8076 50.0711 12.8076 49.4853 13.3934L41 21.8787L32.5147 13.3934C31.9289 12.8076 30.9792 12.8076 30.3934 13.3934C29.8076 13.9792 29.8076 14.9289 30.3934 15.5147L39.9393 25.0607ZM39.5 6.55671e-08L39.5 24L42.5 24L42.5 -6.55671e-08L39.5 6.55671e-08Z",
    fill: "#A8A8A8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M7.1736 51.168C6.0856 51.168 5.1336 50.976 4.3176 50.592C3.5016 50.208 2.8616 49.688 2.3976 49.032C1.9496 48.376 1.6936 47.648 1.6296 46.848H2.7576C2.8856 47.728 3.2936 48.512 3.9816 49.2C4.6856 49.888 5.7496 50.232 7.1736 50.232C8.0056 50.232 8.7256 50.08 9.3336 49.776C9.9576 49.472 10.4376 49.056 10.7736 48.528C11.1096 48 11.2776 47.416 11.2776 46.776C11.2776 45.96 11.0776 45.312 10.6776 44.832C10.2936 44.352 9.8056 43.992 9.2136 43.752C8.6376 43.512 7.8536 43.256 6.8616 42.984C5.7736 42.696 4.8936 42.408 4.2216 42.12C3.5656 41.832 3.0056 41.392 2.5416 40.8C2.0936 40.192 1.8696 39.368 1.8696 38.328C1.8696 37.528 2.0776 36.8 2.4936 36.144C2.9256 35.472 3.5336 34.944 4.3176 34.56C5.1016 34.176 6.0056 33.984 7.0296 33.984C8.5176 33.984 9.7176 34.352 10.6296 35.088C11.5416 35.824 12.0856 36.728 12.2616 37.8H11.1096C11.0136 37.368 10.7976 36.928 10.4616 36.48C10.1416 36.032 9.6776 35.664 9.0696 35.376C8.4776 35.072 7.7656 34.92 6.9336 34.92C5.8136 34.92 4.8696 35.232 4.1016 35.856C3.3336 36.464 2.9496 37.28 2.9496 38.304C2.9496 39.12 3.1496 39.776 3.5496 40.272C3.9496 40.752 4.4376 41.12 5.0136 41.376C5.6056 41.616 6.3976 41.864 7.3896 42.12C8.4936 42.424 9.3656 42.72 10.0056 43.008C10.6616 43.28 11.2136 43.72 11.6616 44.328C12.1256 44.92 12.3576 45.728 12.3576 46.752C12.3576 47.504 12.1576 48.216 11.7576 48.888C11.3576 49.56 10.7656 50.112 9.9816 50.544C9.2136 50.96 8.2776 51.168 7.1736 51.168ZM18.7587 44.472C18.7587 43.112 19.0227 41.928 19.5507 40.92C20.0947 39.912 20.8387 39.144 21.7827 38.616C22.7427 38.072 23.8387 37.8 25.0707 37.8C26.7027 37.8 28.0387 38.208 29.0787 39.024C30.1347 39.84 30.7907 40.936 31.0467 42.312H29.9187C29.7107 41.192 29.1667 40.312 28.2867 39.672C27.4227 39.032 26.3507 38.712 25.0707 38.712C24.1107 38.712 23.2387 38.928 22.4547 39.36C21.6707 39.776 21.0387 40.424 20.5587 41.304C20.0947 42.168 19.8627 43.224 19.8627 44.472C19.8627 45.736 20.0947 46.8 20.5587 47.664C21.0387 48.528 21.6707 49.176 22.4547 49.608C23.2387 50.04 24.1107 50.256 25.0707 50.256C26.3507 50.256 27.4227 49.936 28.2867 49.296C29.1667 48.656 29.7107 47.776 29.9187 46.656H31.0467C30.7907 48.016 30.1347 49.112 29.0787 49.944C28.0227 50.776 26.6867 51.192 25.0707 51.192C23.8387 51.192 22.7427 50.92 21.7827 50.376C20.8387 49.832 20.0947 49.056 19.5507 48.048C19.0227 47.024 18.7587 45.832 18.7587 44.472ZM39.2569 40.656C39.5769 39.696 40.1449 38.968 40.9609 38.472C41.7769 37.96 42.8169 37.704 44.0809 37.704V38.832H43.7209C42.4409 38.832 41.3769 39.2 40.5289 39.936C39.6809 40.656 39.2569 41.84 39.2569 43.488V51H38.1769V37.968H39.2569V40.656ZM56.1435 51.192C54.9275 51.192 53.8315 50.92 52.8555 50.376C51.8795 49.832 51.1115 49.056 50.5515 48.048C50.0075 47.024 49.7355 45.832 49.7355 44.472C49.7355 43.128 50.0155 41.952 50.5755 40.944C51.1355 39.92 51.9035 39.144 52.8795 38.616C53.8715 38.072 54.9755 37.8 56.1915 37.8C57.4075 37.8 58.5035 38.072 59.4795 38.616C60.4555 39.144 61.2155 39.912 61.7595 40.92C62.3195 41.928 62.5995 43.112 62.5995 44.472C62.5995 45.832 62.3195 47.024 61.7595 48.048C61.1995 49.056 60.4235 49.832 59.4315 50.376C58.4555 50.92 57.3595 51.192 56.1435 51.192ZM56.1435 50.232C57.0875 50.232 57.9675 50.024 58.7835 49.608C59.6155 49.176 60.2795 48.528 60.7755 47.664C61.2715 46.8 61.5195 45.736 61.5195 44.472C61.5195 43.224 61.2715 42.168 60.7755 41.304C60.2795 40.44 59.6235 39.8 58.8075 39.384C57.9915 38.952 57.1115 38.736 56.1675 38.736C55.2235 38.736 54.3435 38.952 53.5275 39.384C52.7275 39.8 52.0795 40.44 51.5835 41.304C51.0875 42.168 50.8395 43.224 50.8395 44.472C50.8395 45.736 51.0795 46.8 51.5595 47.664C52.0555 48.528 52.7035 49.176 53.5035 49.608C54.3195 50.024 55.1995 50.232 56.1435 50.232ZM70.7963 33.24V51H69.7163V33.24H70.7963ZM79.6753 33.24V51H78.5953V33.24H79.6753Z",
    fill: "#E4E3E3",
    fillOpacity: "0.46",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 100vh;
  background-color: #151515;
  font-family: "Quicksand", sans-serif;
  color: white;
  z-index:10;
    /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    .scroll-arrow{
 display:none;
    }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    .scroll-arrow{
 display:none;
    }
   
  `}
    /* screen width is greater than 1170px (large) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.greaterThan("large")`
    height: 120vh;
  `}
`;
const HeroBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 424px;
  position: relative;
  overflow: hidden;
  .banner-content {
    background: rgba(67, 67, 67, 0.44);
    height: 60%;
    transform: translate3d(0, 35%, 0);
  }
  h3 {
    transform: translate3d(0, 20%, 0);
    width: 50%;
    margin: 0 auto;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 105px;
    text-align: center;
    letter-spacing: 0.725em;
    text-transform: uppercase;
  }
  /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    height: 224px;
    .banner-content{
      height: 60%;
      transform: translate3d(0, 15%, 0);
    }
    h3{
    font-size: 32px;
    line-height: 50px;
      }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
  height: 324px;
  .banner-content{
    height: 30%;
      transform: translate3d(0, 45%, 0);
    }
h3{
  font-size: 32px;
    line-height: 50px;
}
  `}

    /* screen width is between 768px (medium) and 1170px (large) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("medium", "large")`
 
    h3{
    font-size: 80px;
    line-height: 100px;
}
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    h3{
    font-size: 80px;
    line-height: 100px;
}
  `}

`;
const HeroDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 424px;
  position: absolute;
  top: 0;
  left: 0;
  background: url("/static/images/landing/hero-normal.png") center center
    no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */  
    height: 184px;
    background-size: cover;
  `}

    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    height: 204px;
    background-size: cover;
  `}
`;
const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 30vh;
  .hero-content {
    width: 100%;
  }
  p {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.27em;
    color: #eeeeee;
    width: 30%;
    padding-left: 10%;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    .hero-p-b{
       display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    }
p{
  font-size: 18px;
  line-height: 42px;
  text-align: right;
  margin-left: 30vw;
}

  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    .hero-p-b{
       display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    }
p{
  font-size: 18px;
  line-height: 32px;
  text-align: right;
  /* margin-left: 30vw; */
}
  `}
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  /* clip-path: polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%); */
  /* width: 20%; */
  height: 60px;
  border: none;
  background-color: #151515;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: visible;
  outline: none;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    svg {
      .line1 {
        transform: translateX(0.25vw);
      }
      .line2 {
        transform: translateX(0.55vw);
      }
      .line3 {
        transform: translateX(0.95vw);
      }
      .line4 {
        transform: translateX(-0.65vw);
      }
    }
  }

  /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    height: 50px;
  `}
`;

/***/ }),

/***/ "./components/home/Mission.js":
/*!************************************!*\
  !*** ./components/home/Mission.js ***!
  \************************************/
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
/* harmony import */ var _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/images/icons/mission.svg */ "./public/static/images/icons/mission.svg");
/* harmony import */ var _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Mission.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Mission = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Our Mission"), __jsx("img", {
    src: _public_static_images_icons_mission_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Mission",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Provide high quality service within the promised time. Keep customer satisfied."));
};

/* harmony default export */ __webpack_exports__["default"] = (Mission);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 80vh;
  background-color: #fff;
  font-family: "Quicksand", sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.16em;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #2b2b2b;
    width: 60%;
    margin: 0 auto;
  }

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 130vh;
    h3{
      font-size: 32px;
    line-height: 32px;
    }
    img{
      width: 80%;
      margin: 0 auto;
    }
    p{
      font-size: 18px;
    line-height: 24px;
    /* padding-top:30vh; */
    }
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 80vh;
    h3{
      font-size: 32px;
    line-height: 32px;
    }
    img{
      width: 60%;
      margin: 0 auto;
    }
    p{
      font-size: 24px;
    line-height: 24px;
    /* padding-top:30vh; */
    }
  `}
`;

/***/ }),

/***/ "./components/home/Services.js":
/*!*************************************!*\
  !*** ./components/home/Services.js ***!
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
/* harmony import */ var _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/images/landing/enginec.png */ "./public/static/images/landing/enginec.png");
/* harmony import */ var _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/landing/battery.png */ "./public/static/images/landing/battery.png");
/* harmony import */ var _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/landing/oilc.png */ "./public/static/images/landing/oilc.png");
/* harmony import */ var _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Services = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bg-stripes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Our Services"), __jsx(ServiceGrid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(ServiceBox, {
    className: "engine",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Engine Swap"), __jsx("img", {
    src: _public_static_images_landing_enginec_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Engine",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx(ServiceBox, {
    className: "battery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Electrical Repairs"), __jsx("img", {
    src: _public_static_images_landing_battery_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Battery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx(ServiceBox, {
    className: "oil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Maintainene"), __jsx("img", {
    src: _public_static_images_landing_oilc_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Oilcan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "more",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "And More..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 85vh;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  .bg-stripes {
    position: absolute;
    /* z-index: -10; */
    background: url("/static/images/service/stripes.svg") bottom center
      no-repeat;
    filter: blur(2px);
    top: 0vh;
    left: 30vw;
    background-size: cover;
    width: 120%;
    height: 101%;
    z-index: -10;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 39%;
    z-index: 10;
    /* identical to box height, or 19px */
    text-align: center;
    letter-spacing: 0.16em;
    color: #000000;
  }
  .more {
    text-align: right;
  }
    /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    height: 150vh;
    p{
      font-size: 32px;
    line-height: 29%;
    }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    height: 180vh;
    p{
      font-size: 32px;
    line-height: 29%;
    }
  `}
  

`;
const ServiceGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 0 auto;
  z-index: 10;
  grid-gap: 30px;
  .engine,
  .battery {
    img {
      width: 80%;
    }
  }
  .oil {
    img {
      width: 70%;
    }
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   width: 70%;
   .oil{
  width: 100%;
}
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   width: 70%;
   .oil{
  width: 100%;
}
  `}
`;
const ServiceBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  z-index: 10;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    padding: 2vh 0;
    text-align: center;
    letter-spacing: 0.16em;
  }

  img {
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
   p{
    font-size: 24px;
   }
img{
  width:40%;
}

  `}
`;

/***/ }),

/***/ "./components/home/Team.js":
/*!*********************************!*\
  !*** ./components/home/Team.js ***!
  \*********************************/
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
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Team.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Team = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(ColorDiv, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Meet Our ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
    }
  }), "Team"), __jsx(TeamButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "436",
    height: "79",
    viewBox: "0 0 336 79",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M19.8987 66.5789L48.969 5.57886H285.389L263.467 66.5789H19.8987Z",
    stroke: "#FF3838",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  })), __jsx("line", {
    className: "line1",
    x1: "303.943",
    y1: "6.56007",
    x2: "282.943",
    y2: "68.5601",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("line", {
    className: "line2",
    x1: "318.943",
    y1: "6.56007",
    x2: "297.943",
    y2: "68.5601",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("line", {
    className: "line3",
    x1: "333.943",
    y1: "6.56007",
    x2: "312.943",
    y2: "68.5601",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("line", {
    className: "line4",
    x1: "31.3773",
    y1: "4.68847",
    x2: "1.33257",
    y2: "62.8461",
    stroke: "#FCB801",
    strokeWidth: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M86.4925 17.98H98.3485L100.117 40.34L110.933 17.98H116.081L100.689 51H88.4165L86.4925 17.98ZM122.479 51H111.923L116.655 28.64H127.315L122.479 51ZM128.667 21.828C128.667 22.6253 128.494 23.3187 128.147 23.908C127.835 24.4973 127.402 25 126.847 25.416C126.327 25.832 125.721 26.144 125.027 26.352C124.334 26.56 123.623 26.664 122.895 26.664C121.509 26.664 120.347 26.3347 119.411 25.676C118.475 25.0173 118.007 23.9773 118.007 22.556C118.007 21.7933 118.163 21.1173 118.475 20.528C118.787 19.904 119.203 19.4013 119.723 19.02C120.278 18.604 120.902 18.292 121.595 18.084C122.323 17.876 123.069 17.772 123.831 17.772C125.183 17.772 126.327 18.1013 127.263 18.76C128.199 19.4187 128.667 20.4413 128.667 21.828ZM139.014 40.548C138.875 41.3107 138.771 42.0387 138.702 42.732C138.667 43.4253 138.65 44.0493 138.65 44.604C138.65 44.916 138.667 45.2627 138.702 45.644C138.736 46.0253 138.806 46.3893 138.91 46.736C139.048 47.048 139.222 47.3253 139.43 47.568C139.672 47.776 140.002 47.88 140.418 47.88C140.73 47.88 141.076 47.776 141.458 47.568C141.874 47.36 142.272 47.0653 142.654 46.684C143.07 46.3027 143.451 45.8347 143.798 45.28C144.179 44.7253 144.474 44.1013 144.682 43.408H153.21L151.858 48.972C151.164 49.4227 150.367 49.804 149.466 50.116C148.564 50.428 147.611 50.688 146.606 50.896C145.6 51.0693 144.578 51.1907 143.538 51.26C142.498 51.364 141.51 51.416 140.574 51.416C138.84 51.416 137.228 51.26 135.738 50.948C134.247 50.636 132.947 50.0987 131.838 49.336C130.728 48.5733 129.844 47.568 129.186 46.32C128.562 45.0373 128.25 43.46 128.25 41.588C128.25 39.8893 128.51 38.2253 129.03 36.596C129.584 34.9667 130.486 33.528 131.734 32.28C133.016 30.9973 134.715 29.9747 136.83 29.212C138.979 28.4493 141.648 28.068 144.838 28.068C148.304 28.068 150.904 28.6053 152.638 29.68C154.406 30.7547 155.29 32.436 155.29 34.724C155.29 35.66 155.151 36.6827 154.874 37.792C154.596 38.8667 154.18 39.7853 153.626 40.548H139.014ZM145.93 34.36C145.93 33.2853 145.756 32.5573 145.41 32.176C145.063 31.7947 144.647 31.604 144.162 31.604C143.607 31.604 143.087 31.7947 142.602 32.176C142.151 32.5227 141.735 33.008 141.354 33.632C140.972 34.2213 140.626 34.9147 140.314 35.712C140.002 36.4747 139.742 37.2893 139.534 38.156H145.462C145.531 37.74 145.6 37.3067 145.67 36.856C145.739 36.4747 145.791 36.0587 145.826 35.608C145.895 35.1573 145.93 34.7413 145.93 34.36ZM157.325 28.64H168.349L170.169 43.928L176.461 28.64H186.393L188.161 43.928L194.453 28.64H199.965L189.617 51H178.749L176.825 39.664L171.573 51H160.705L157.325 28.64Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "13.5222",
    y: "4.07886",
    width: "278",
    height: "74",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx("feOffset", {
    dy: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.908333 0 0 0 0 0.420104 0 0 0 0 0.420104 0 0 0 0.25 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 60vh;
  background: url("/static/images/landing/teambw.png") center center no-repeat;
  background-size: cover;
  overflow: hidden;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
display:none;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    display:none;

  `}
`;
const ColorDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background: url("/static/images/landing/teamcolor.png") center center
    no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  transition: all 0.2s ease-in-out;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 136px;
    text-align: center;
    letter-spacing: 0.445em;
    color: white;
    /* width: 90%; */
    margin: 0 auto;
    /* transform: translate3d(0, -5%, 0); */
  }
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    h3{
      font-size: 32px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.445em;
    }
    &:hover {
    display:none
  }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    display:none
    &:hover {
  }
  `}

`;
const TeamButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  overflow: visible;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 0;
  margin: 0 35%;
  margin-top: 10vh;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    svg {
      .line1 {
        transform: translateX(0.25vw);
      }
      .line2 {
        transform: translateX(0.55vw);
      }
      .line3 {
        transform: translateX(0.95vw);
      }
      .line4 {
        transform: translateX(-0.65vw);
      }
    }
  }
`;

/***/ }),

/***/ "./components/home/Testimonials.js":
/*!*****************************************!*\
  !*** ./components/home/Testimonials.js ***!
  \*****************************************/
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/icons/quote.svg */ "./public/static/images/icons/quote.svg");
/* harmony import */ var _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fbconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fbconfig */ "./fbconfig.js");
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const Testimonials = ({
  testimonials
}) => {
  // const [test, setTest] = useState([]);
  // let testimonials = [];
  // useEffect(() => {
  //   getTestimonials();
  // }, []);
  // const getTestimonials = useCallback(async () => {
  //   const documents = await fb.firestore().collection("testimonials").get();
  //   await documents.forEach((doc) => testimonials.push({ ...doc.data() }));
  //   console.log(testimonials);
  // }, []);
  console.log(testimonials);
  let settings = {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), testimonials.length > 0 && testimonials.map(t => __jsx(TestCard, {
    key: t.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "test-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _public_static_images_icons_quote_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Quote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, t.cxComment), __jsx("p", {
    className: "cx-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, t.cxName), __jsx("p", {
    className: "cx-car",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, t.cxCarModel))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 80%;
  margin: 10vh auto;
  height: 80vh;
  background-color: #fff;
  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #151515;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100%;
    height: 50vh;
    margin: 0vh auto;

  `}
`;
const TestCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 55vw;
  height: 75vh;
  background-color: white;
  margin: 0 10px;
  padding: 10px;

  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  img {
    transform: translate3d(0, -45%, 0);
    padding-left: 8vw;
  }
  div {
    width: 80%;
    height: 70%;
    margin: 0 auto;
    background-color: #fdfdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    transform: translate3d(0, 35%, 0);
  }
  button {
    background-color: black;
  }
  .comment {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.045em;
    color: #000000;
    width: 80%;
    margin: 0 auto;
    transform: translate3d(0, -5%, 0);
  }

  .cx-name {
    font-size: 28px;
    font-weight: 500;
    color: gray;
    transform: translate3d(0, -25%, 0);
  }
  .cx-car {
    letter-spacing: 0.04em;
    transform: translate3d(0, -125%, 0);
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    img {   
    padding-left: 25vw;
  }
  div {
    width: 90%;
    height: 70%;
    
    transform: translate3d(0, 15%, 0);
  }
    
  `}
`;

/***/ }),

/***/ "./components/home/Yus.js":
/*!********************************!*\
  !*** ./components/home/Yus.js ***!
  \********************************/
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
/* harmony import */ var _public_static_images_icons_price_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/images/icons/price.svg */ "./public/static/images/icons/price.svg");
/* harmony import */ var _public_static_images_icons_price_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_price_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_icons_reliable_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/icons/reliable.svg */ "./public/static/images/icons/reliable.svg");
/* harmony import */ var _public_static_images_icons_reliable_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_reliable_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_icons_warranty_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/icons/warranty.svg */ "./public/static/images/icons/warranty.svg");
/* harmony import */ var _public_static_images_icons_warranty_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_warranty_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_icons_quality_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/icons/quality.svg */ "./public/static/images/icons/quality.svg");
/* harmony import */ var _public_static_images_icons_quality_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_icons_quality_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\home\\Yus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Yus = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Why Us"), __jsx(IconContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "high-quality",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _public_static_images_icons_quality_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Quality",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "High Quality")), __jsx("div", {
    className: "reliable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _public_static_images_icons_reliable_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "reliable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Reliable")), __jsx("div", {
    className: "warranty",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _public_static_images_icons_warranty_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Warranty",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Warranty")), __jsx("div", {
    className: "best-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _public_static_images_icons_price_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Best Price"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Yus);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 45vh;
  width: 100%;
  background-color: #151515;
  h3{
    font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
/* identical to box height */

text-align: center;
letter-spacing: 0.16em;

color: #FFFFFF;
  }
    /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    height: 80vh;
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
  height: 80vh;
  `}

`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    transform: translate3d(0%, 0, 0);
    letter-spacing: 0.16em;
    color: white;
  }
  .best-price {
    img {
      width: 140px;
      height: 140px;
    }
  }
  div {
    transform: translate3d(25%, 0, 0);
    img {
      width: 120px;
      height: 120px;
    }
  }
    /* screen width is less than 450px (small) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    width: 100%;
    padding: 1vh 1vw;
    grid-template-columns: repeat(2, 1fr);
    div {
    transform: translate3d(20%, 0, 0);
   
  }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
  width: 100%;
    padding: 1vh 1vw;
    grid-template-columns: repeat(2, 1fr);
    div {
    transform: translate3d(20%, 0, 0);
  `}

`;

/***/ }),

/***/ "./fbconfig.js":
/*!*********************!*\
  !*** ./fbconfig.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);


var DB_CONFIG = {
  apiKey: "AIzaSyCWjOQfELX0vTaHuSCsTRKi_Wf4EZFt-no",
  authDomain: "samauto-ec680.firebaseapp.com",
  databaseURL: "https://samauto-ec680.firebaseio.com",
  projectId: "samauto-ec680",
  storageBucket: "samauto-ec680.appspot.com",
  messagingSenderId: "1085011756115",
  appId: "1:1085011756115:web:1db4735d99ea37c64672a6"
}; // Initialize Firebase

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(DB_CONFIG);
}

const fb = firebase__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (fb);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-media-query */ "styled-media-query");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_home_Landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/home/Landing */ "./components/home/Landing.js");
/* harmony import */ var _components_home_Yus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Yus */ "./components/home/Yus.js");
/* harmony import */ var _components_home_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/home/Services */ "./components/home/Services.js");
/* harmony import */ var _components_home_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/Testimonials */ "./components/home/Testimonials.js");
/* harmony import */ var _components_home_Team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/Team */ "./components/home/Team.js");
/* harmony import */ var _components_home_Mission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/home/Mission */ "./components/home/Mission.js");
/* harmony import */ var _components_UI_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/UI/Footer */ "./components/UI/Footer.js");
/* harmony import */ var _fbconfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fbconfig */ "./fbconfig.js");
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const index = () => {
  let testimonials = [];
  const {
    0: test,
    1: setTest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getTestimonials();
  }, []);
  const getTestimonials = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    const documents = await _fbconfig__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("testimonials").get();
    await documents.forEach(doc => testimonials.push(_objectSpread({
      id: doc.id
    }, doc.data())));
    setTest(testimonials);
  }, []);
  console.log(test);
  return __jsx("div", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Sam's Auto | Home"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap",
    rel: "stylesheet",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), ">"), test.length > 0 ? __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_components_home_Landing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(_components_home_Services__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(_components_home_Yus__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_components_home_Testimonials__WEBPACK_IMPORTED_MODULE_8__["default"], {
    testimonials: test,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(_components_home_Team__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_components_home_Mission__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_components_UI_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })) : __jsx("h1", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Wait"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "633493357",
    __self: undefined
  }, "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FeUIsQUFHb0IsU0FDQyxVQUNZLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXExha2EgR2FudGhcXERvY3VtZW50c1xcTmV4dEpTXFxzYW1cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBtZWRpYSBmcm9tIFwic3R5bGVkLW1lZGlhLXF1ZXJ5XCI7XHJcbmltcG9ydCBMYW5kaW5nIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvaG9tZS9MYW5kaW5nXCI7XHJcbmltcG9ydCBZdXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9ZdXNcIjtcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvaG9tZS9TZXJ2aWNlc1wiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvVGVhbVwiO1xyXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi8uLi9jb21wb25lbnRzL2hvbWUvTWlzc2lvblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0Zvb3RlclwiO1xyXG5pbXBvcnQgZmIgZnJvbSBcIi4uL2ZiY29uZmlnXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBsZXQgdGVzdGltb25pYWxzID0gW107XHJcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VGVzdGltb25pYWxzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRUZXN0aW1vbmlhbHMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBmYi5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwidGVzdGltb25pYWxzXCIpLmdldCgpO1xyXG5cclxuICAgIGF3YWl0IGRvY3VtZW50cy5mb3JFYWNoKChkb2MpID0+XHJcbiAgICAgIHRlc3RpbW9uaWFscy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KVxyXG4gICAgKTtcclxuICAgIHNldFRlc3QodGVzdGltb25pYWxzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRlc3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNhbSdzIEF1dG8gfCBIb21lPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zfFF1aWNrc2FuZHxSYWNpbmcrU2FucytPbmUmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgIGNoYXJTZXQ9XCJVVEYtOFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgID5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7dGVzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8TGFuZGluZyAvPlxyXG4gICAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgICA8WXVzIC8+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxzIHRlc3RpbW9uaWFscz17dGVzdH0gLz5cclxuICAgICAgICAgIDxUZWFtIC8+XHJcbiAgICAgICAgICA8TWlzc2lvbiAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMT5XYWl0PC9oMT5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAke21lZGlhLmxlc3NUaGFuKFwic21hbGxcIilgXHJcbiAgICAvKiBzY3JlZW4gd2lkdGggaXMgbGVzcyB0aGFuIDQ1MHB4IChzbWFsbCkgKi9cclxuICAgIHdpZHRoOiAxMDB2dztcclxuICBgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Laka Ganth\\\\Documents\\\\NextJS\\\\sam\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  width: 100vw;
  line-height: 1.3;
  margin: 0;
  overflow-x: hidden;

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_4___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100vw;
  `}
`;

/***/ }),

/***/ "./public/static/images/icons/mission.svg":
/*!************************************************!*\
  !*** ./public/static/images/icons/mission.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mission-cfb58d04795c8e844a410db12ffe4489.svg";

/***/ }),

/***/ "./public/static/images/icons/price.svg":
/*!**********************************************!*\
  !*** ./public/static/images/icons/price.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTE2IDI1aDQ2djI0aC00NnoiIGZpbGw9IiM1YTg5NDQiLz48cGF0aCBkPSJtMTIgMjloNDZ2MjRoLTQ2eiIgZmlsbD0iIzc4Yjc1YiIvPjxwYXRoIGQ9Im0xMiAyOXYyMS4zMzFjMi41NjIuNDM1IDUuMjQuNjY5IDggLjY2OSAxNy45NzkgMCAzMi41OS05LjgwNSAzMi45ODEtMjJ6IiBmaWxsPSIjOTZjYzdmIi8+PHBhdGggZD0ibTUwIDMzaC0zMGMwIDIuMjA5LTEuNzkxIDQtNCA0djFoNnY2aDJ2NWgyNmMwLTIuMjA5IDEuNzkxLTQgNC00di04Yy0yLjIwOSAwLTQtMS43OTEtNC00eiIgZmlsbD0iIzk2Y2M3ZiIvPjxwYXRoIGQ9Im01MCAzM2gtMzBjMCAyLjIwOS0xLjc5MSA0LTQgNHYxaDZ2NmgydjVoOS41OTdjOC4yMTItMi41MzcgMTQuNjI0LTcuMjk5IDE3LjU4OS0xMy4xNi0uNzMyLS43MjUtMS4xODYtMS43MjktMS4xODYtMi44NHoiIGZpbGw9IiNhYmQ2OTkiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjQxIiBmaWxsPSIjZWJmN2ZlIiByPSI4Ii8+PHBhdGggZD0ibTMwIDE2di05aC0zbDUtNSA1IDVoLTN2OXoiIGZpbGw9IiNhMGE4YjIiLz48cGF0aCBkPSJtMTEgMjF2LTloLTNsNS01IDUgNWgtM3Y5eiIgZmlsbD0iI2EwYThiMiIvPjxwYXRoIGQ9Im0yIDU2aDIwdjZoLTIweiIgZmlsbD0iI2Y1Yjk1YiIvPjxwYXRoIGQ9Im00IDUwaDIwdjZoLTIweiIgZmlsbD0iI2Y3Yzc3YyIvPjxwYXRoIGQ9Im00IDQ0aDIwdjZoLTIweiIgZmlsbD0iI2Y1Yjk1YiIvPjxwYXRoIGQ9Im0yIDM4aDIwdjZoLTIweiIgZmlsbD0iI2Y3Yzc3YyIvPjxwYXRoIGQ9Im00OSAyMXYtOWgtM2w1LTUgNSA1aC0zdjl6IiBmaWxsPSIjYTBhOGIyIi8+PGc+PHBhdGggZD0ibTYyIDI0aC00NmMtLjU1MiAwLTEgLjQ0OC0xIDF2M2gtM2MtLjU1MiAwLTEgLjQ0OC0xIDF2OGgtOWMtLjU1MiAwLTEgLjQ0OC0xIDF2NmMwIC41NTIuNDQ4IDEgMSAxaDF2NSA1aC0xYy0uNTUyIDAtMSAuNDQ4LTEgMXY2YzAgLjU1Mi40NDggMSAxIDFoMjBjLjU1MiAwIDEtLjQ0OCAxLTF2LTVoMWMuNTUyIDAgMS0uNDQ4IDEtMXYtMmgzM2MuNTUyIDAgMS0uNDQ4IDEtMXYtM2gzYy41NTIgMCAxLS40NDggMS0xdi0yNGMwLS41NTItLjQ0OC0xLTEtMXptLTU5IDE5di00aDE4djR6bTMzIDQuOTJ2LTIuMTA0YzEuMTYxLS40MTQgMi0xLjUxNCAyLTIuODE2IDAtMS42NTQtMS4zNDYtMy0zLTMtLjU1MSAwLTEtLjQ0OS0xLTFzLjQ0OS0xIDEtMWgzdi0yaC0ydi0xLjkyYzMuMzg3LjQ4OCA2IDMuNDAxIDYgNi45MnMtMi42MTMgNi40MzItNiA2Ljkyem0tMi0xMy44NHYyLjEwNGMtMS4xNjEuNDE0LTIgMS41MTQtMiAyLjgxNiAwIDEuNjU0IDEuMzQ2IDMgMyAzIC41NTEgMCAxIC40NDkgMSAxcy0uNDQ5IDEtMSAxaC0zdjJoMnYxLjkyYy0zLjM4Ny0uNDg4LTYtMy40MDEtNi02LjkyczIuNjEzLTYuNDMyIDYtNi45MnptMTAgNi45MmMwLTIuODI2LTEuMzEyLTUuMzQ5LTMuMzU2LTdoOC40NTZjLjM5OCAxLjk1NiAxLjk0MyAzLjUwMSAzLjg5OSAzLjg5OXY2LjIwMWMtMS45NTYuMzk4LTMuNTAxIDEuOTQzLTMuODk5IDMuODk5aC04LjQ1NmMyLjA0NC0xLjY1IDMuMzU2LTQuMTczIDMuMzU2LTYuOTk5em0tMTggMGMwIDIuODI2IDEuMzEyIDUuMzQ5IDMuMzU2IDdoLTQuMzU2di00YzAtLjU1Mi0uNDQ4LTEtMS0xaC0xdi01YzAtLjU1Mi0uNDQ4LTEtMS0xaC0zLjAwNGMuOTYxLS43MjIgMS42NTUtMS43ODEgMS45MDQtM2g4LjQ1NmMtMi4wNDQgMS42NTEtMy4zNTYgNC4xNzQtMy4zNTYgN3ptLTMgNHY0aC0xOHYtNHptLTIgMTJ2NGgtMTh2LTR6bS0xNi0ydi00aDE4djR6bTUyLTNoLTMydi0yaDI1Yy41NTIgMCAxLS40NDggMS0xIDAtMS42NTQgMS4zNDYtMyAzLTMgLjU1MiAwIDEtLjQ0OCAxLTF2LThjMC0uNTUyLS40NDgtMS0xLTEtMS42NTQgMC0zLTEuMzQ2LTMtMyAwLS41NTItLjQ0OC0xLTEtMWgtMzBjLS41NTIgMC0xIC40NDgtMSAxIDAgMS42NTQtMS4zNDYgMy0zIDMtLjU1MiAwLTEgLjQ0OC0xIDFoLTJ2LTdoNDR6bTQtNGgtMnYtMTljMC0uNTUyLS40NDgtMS0xLTFoLTQxdi0yaDQ0eiIvPjxwYXRoIGQ9Im0yNyA4aDJ2OGMwIC41NTIuNDQ4IDEgMSAxaDRjLjU1MiAwIDEtLjQ0OCAxLTF2LThoMmMuNDA0IDAgLjc2OS0uMjQ0LjkyNC0uNjE3LjE1NS0uMzc0LjA2OS0uODA0LS4yMTctMS4wOWwtNS01Yy0uMzkxLS4zOTEtMS4wMjMtLjM5MS0xLjQxNCAwbC01IDVjLS4yODYuMjg2LS4zNzIuNzE2LS4yMTcgMS4wOS4xNTUuMzczLjUyLjYxNy45MjQuNjE3em01LTQuNTg2IDIuNTg2IDIuNTg2aC0uNTg2Yy0uNTUyIDAtMSAuNDQ4LTEgMXY4aC0ydi04YzAtLjU1Mi0uNDQ4LTEtMS0xaC0uNTg2eiIvPjxwYXRoIGQ9Im00NiAxM2gydjhjMCAuNTUyLjQ0OCAxIDEgMWg0Yy41NTIgMCAxLS40NDggMS0xdi04aDJjLjQwNCAwIC43NjktLjI0NC45MjQtLjYxNy4xNTUtLjM3NC4wNjktLjgwNC0uMjE3LTEuMDlsLTUtNWMtLjM5MS0uMzkxLTEuMDIzLS4zOTEtMS40MTQgMGwtNSA1Yy0uMjg2LjI4Ni0uMzcyLjcxNi0uMjE3IDEuMDkuMTU1LjM3My41Mi42MTcuOTI0LjYxN3ptNS00LjU4NiAyLjU4NiAyLjU4NmgtLjU4NmMtLjU1MiAwLTEgLjQ0OC0xIDF2OGgtMnYtOGMwLS41NTItLjQ0OC0xLTEtMWgtLjU4NnoiLz48cGF0aCBkPSJtOCAxM2gydjhjMCAuNTUyLjQ0OCAxIDEgMWg0Yy41NTIgMCAxLS40NDggMS0xdi04aDJjLjQwNCAwIC43NjktLjI0NC45MjQtLjYxNy4xNTUtLjM3NC4wNjktLjgwNC0uMjE3LTEuMDlsLTUtNWMtLjM5MS0uMzkxLTEuMDIzLS4zOTEtMS40MTQgMGwtNSA1Yy0uMjg2LjI4Ni0uMzcyLjcxNi0uMjE3IDEuMDkuMTU1LjM3My41Mi42MTcuOTI0LjYxN3ptNS00LjU4NiAyLjU4NiAyLjU4NmgtLjU4NmMtLjU1MiAwLTEgLjQ0OC0xIDF2OGgtMnYtOGMwLS41NTItLjQ0OC0xLTEtMWgtLjU4NnoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./public/static/images/icons/quality.svg":
/*!************************************************!*\
  !*** ./public/static/images/icons/quality.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA4IDUwOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA4IDUwODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZEMTVDOyIgY3g9IjI1My41NSIgY3k9IjIwMS43IiByPSIyMDEuNyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzQwNTk2QjsiIGQ9Ik05MC4xNSwzMTkuN0wyMC43NSw0NDBsODEtNC4zbDM2LjgsNzIuM2w2NC4yLTExMS4zQzE1Ni43NSwzODQuOCwxMTcuMjUsMzU3LjEsOTAuMTUsMzE5Ljd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzQwNTk2QjsiIGQ9Ik00MTcuMzUsMzE5LjFjLTI2LjksMzcuNS02Ni40LDY1LjMtMTEyLjMsNzcuNGw2NC40LDExMS41bDM2LjgtNzIuM2w4MSw0LjNMNDE3LjM1LDMxOS4xeiIvPg0KPC9nPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjhCNjRDOyIgY3g9IjI1My41NSIgY3k9IjIwMS43IiByPSIxNDYuMiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNTMuNzUsMTg1LjljNC41LTQuNCwyLTEyLjEtNC4yLTEzbC01Ny43LTguNGMtMi41LTAuNC00LjYtMS45LTUuNy00LjJsLTI1LjgtNTIuMw0KCWMtMi44LTUuNy0xMC45LTUuNy0xMy43LDBsLTI1LjcsNTIuM2MtMS4xLDIuMi0zLjMsMy44LTUuNyw0LjJsLTU3LjcsOC40Yy02LjIsMC45LTguNyw4LjYtNC4yLDEzbDQxLjcsNDAuNw0KCWMxLjgsMS44LDIuNiw0LjMsMi4yLDYuN2wtOS44LDU3LjRjLTEuMSw2LjIsNS41LDExLDExLjEsOGw1MS42LTI3LjFjMi4yLTEuMiw0LjktMS4yLDcuMSwwbDUxLjYsMjcuMWM1LjYsMi45LDEyLjEtMS44LDExLjEtOA0KCWwtOS45LTU3LjRjLTAuNC0yLjUsMC40LTUsMi4yLTYuN0wzNTMuNzUsMTg1Ljl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./public/static/images/icons/quote.svg":
/*!**********************************************!*\
  !*** ./public/static/images/icons/quote.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTMiIGhlaWdodD0iOTMiIHZpZXdCb3g9IjAgMCA5MyA5MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8Y2lyY2xlIGN4PSI0Ni41IiBjeT0iNDIuNSIgcj0iNDIuNSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8cGF0aCBkPSJNMzYuODYxOCAyNS45OTk5QzMyLjYyMjggMjguOTIyOSAyMy4yMTc5IDM3Ljc3OTUgMjguNzA5NyA0Ni43NDU2IiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iOCIvPgo8cGF0aCBkPSJNNjguODYxOCAyNi4zMzE1QzY0LjYyMjggMjkuMjU0NSA1NS4yMTc5IDM4LjExMSA2MC43MDk3IDQ3LjA3NzIiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxyZWN0IHg9IjIzLjYxNCIgeT0iMzYuMDI4OCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iOCIgdHJhbnNmb3JtPSJyb3RhdGUoMS41OTkyNyAyMy42MTQgMzYuMDI4OCkiIGZpbGw9IiNDNEM0QzQiLz4KPHJlY3QgeD0iNTUuMzAyNyIgeT0iMzYuNjYzMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iOCIgZmlsbD0iI0M0QzRDNCIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTMiIGhlaWdodD0iOTMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/static/images/icons/reliable.svg":
/*!*************************************************!*\
  !*** ./public/static/images/icons/reliable.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQyMS42NjUgNDguOTExYzkuMTUgMCAxNi41NjggNy40MTcgMTYuNTY4IDE2LjU2N3Y0MjIuNDU0YzAgOS4xNS03LjQxOCAxNi41NjgtMTYuNTY4IDE2LjU2OGgtMzMxLjMzYy05LjE1IDAtMTYuNTY4LTcuNDE4LTE2LjU2OC0xNi41Njh2LTQyMi40NTRjMC05LjE1IDcuNDE4LTE2LjU2NyAxNi41NjgtMTYuNTY3eiIgZmlsbD0iI2IyNWUxZSIvPjxwYXRoIGQ9Im00MjEuNjY1IDQ4LjkxMWgtMjNjOS4xNSAwIDE2LjU2NyA3LjQxNyAxNi41NjcgMTYuNTY3djQyMi40NTRjMCA5LjE1LTcuNDE3IDE2LjU2OC0xNi41NjcgMTYuNTY4aDIzYzkuMTUgMCAxNi41NjctNy40MTcgMTYuNTY3LTE2LjU2OHYtNDIyLjQ1NGMwLTkuMTUtNy40MTctMTYuNTY3LTE2LjU2Ny0xNi41Njd6IiBmaWxsPSIjODQ0ZDI4Ii8+PHBhdGggZD0ibTQwNS4wOTkgODguMDQ3djM3Ny4zMjFjMCAzLjMxNC0yLjY4NiA2LTYgNmgtMjg2LjE5OWMtMy4zMTQgMC02LTIuNjg2LTYtNnYtMzc3LjMyMWMwLTMuMzE0IDIuNjg2LTYgNi02aDI4Ni4xOTljMy4zMTQgMCA2IDIuNjg3IDYgNnoiIGZpbGw9IiNmMmY2ZmMiLz48cGF0aCBkPSJtMzk5LjA5OSA4Mi4wNDdoLTIzYzMuMzE0IDAgNiAyLjY4NiA2IDZ2Mzc3LjMyMWMwIDMuMzE0LTIuNjg2IDYtNiA2aDIzYzMuMzE0IDAgNi0yLjY4NiA2LTZ2LTM3Ny4zMjFjMC0zLjMxMy0yLjY4Ni02LTYtNnoiIGZpbGw9IiNjZGQyZTEiLz48cGF0aCBkPSJtMjU2IDE2Mi4wNzhzLS4wMDEtLjAwMS0uMDAxLS4wMDFjLTE2LjE3NC0xNi4xNzQtNDIuMzk3LTE2LjE3NC01OC41NzEgMHMtMTYuMTc0IDQyLjM5NyAwIDU4LjU3MWMwIDAgLjAwMS4wMDEuMDAxLjAwMWw1NC4zMjkgNTQuMzI5YzIuMzQzIDIuMzQzIDYuMTQyIDIuMzQzIDguNDg1IDBsNTQuMzI5LTU0LjMyOWMxNi4xNzQtMTYuMTc0IDE2LjE3NC00Mi4zOTcgMC01OC41NzEtMTYuMTc0LTE2LjE3NS00Mi4zOTctMTYuMTc1LTU4LjU3MiAweiIgZmlsbD0iI2ZmNzA0NSIvPjxwYXRoIGQ9Im0zMTQuNTcyIDE2Mi4wNzdjLTExLjA0My0xMS4wNDMtMjYuNzctMTQuNTQtNDAuNzg2LTEwLjUwMyA2LjUxMiAxLjg3NiAxMi42NTUgNS4zNzMgMTcuNzg2IDEwLjUwMyAxNi4xNzQgMTYuMTc0IDE2LjE3NCA0Mi4zOTcgMCA1OC41NzFsLTQ3LjA3MSA0Ny4wNzIgNy4yNTcgNy4yNThjMi4zNDMgMi4zNDMgNi4xNDIgMi4zNDMgOC40ODUgMGw1NC4zMjktNTQuMzI5YzE2LjE3NC0xNi4xNzQgMTYuMTc0LTQyLjM5OCAwLTU4LjU3MnoiIGZpbGw9IiNmNDQ5NDUiLz48cGF0aCBkPSJtMjkyLjQ0MSAzMi4zNDdjLTIuNTA2IDAtNC43LTEuNTc2LTUuNjIyLTMuOTA2LTQuODU3LTEyLjI2Ni0xNi44MjUtMjAuOTQxLTMwLjgxOC0yMC45NDEtMTMuOTk0IDAtMjUuOTYxIDguNjc1LTMwLjgxOCAyMC45NDEtLjkyMyAyLjMzLTMuMTE3IDMuOTA2LTUuNjIyIDMuOTA2aC0zMi4xMDhjLTMuMzE0IDAtNiAyLjY4Ni02IDZ2NTQuMjY5YzAgMy4zMTQgMi42ODYgNiA2IDZoMTM3LjA5N2MzLjMxNCAwIDYtMi42ODYgNi02di01NC4yNjljMC0zLjMxNC0yLjY4Ni02LTYtNnoiIGZpbGw9IiM5Y2ExYWYiLz48Zz48cGF0aCBkPSJtMzI0LjU1IDMyLjM0N2gtMjNjMy4zMTQgMCA2IDIuNjg2IDYgNnY1NC4yNjljMCAzLjMxNC0yLjY4NiA2LTYgNmgyM2MzLjMxNCAwIDYtMi42ODYgNi02di01NC4yNjljMC0zLjMxMy0yLjY4Ni02LTYtNnoiIGZpbGw9IiM3MTc4OTEiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Im00MjEuNjY1IDQxLjQxMWgtODMuNjE0di05LjA2NGMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41aC0zNy4wOTVjLTYuMjU2LTE0Ljg4Mi0yMC45MTQtMjQuODQ3LTM3LjQ1NS0yNC44NDdzLTMxLjE5OSA5Ljk2NS0zNy40NTUgMjQuODQ3aC0zNy4wOTRjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjV2OS4wNjRoLTgzLjYxN2MtMTMuMjcxIDAtMjQuMDY3IDEwLjc5Ni0yNC4wNjcgMjQuMDY3djQyLjk4OGMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di00Mi45ODdjMC01IDQuMDY3LTkuMDY3IDkuMDY3LTkuMDY3aDgzLjYxN3YxOC4xMzZoLTY3LjA1MmMtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXYzODkuMzJjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNWgyOTguMTk4YzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjV2LTM4OS4zMjFjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNWgtNjcuMDQ4di0xOC4xMzZoODMuNjE0YzUgMCA5LjA2NyA0LjA2NyA5LjA2NyA5LjA2N3Y0MjIuNDU0YzAgNS00LjA2NyA5LjA2Ny05LjA2NyA5LjA2N2gtMzMxLjMyOWMtNSAwLTkuMDY3LTQuMDY3LTkuMDY3LTkuMDY3di0zNDkuNDY1YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djM0OS40NjZjMCAxMy4yNzEgMTAuNzk3IDI0LjA2NyAyNC4wNjcgMjQuMDY3aDMzMS4zM2MxMy4yNyAwIDI0LjA2Ny0xMC43OTYgMjQuMDY3LTI0LjA2N3YtNDIyLjQ1NGMwLTEzLjI3MS0xMC43OTctMjQuMDY4LTI0LjA2Ny0yNC4wNjh6bS0yMzIuNzEzLTEuNTY0aDM0Ljk2MWMzLjQyMiAwIDYuNDEtMi4zMTYgNy4yNjMtNS42MyAyLjkxMy0xMS4zMTUgMTMuMTIyLTE5LjIxNyAyNC44MjUtMTkuMjE3czIxLjkxMiA3LjkwMiAyNC44MjUgMTkuMjE3Yy44NTMgMy4zMTMgMy44NDEgNS42MyA3LjI2MyA1LjYzaDM0Ljk2MnY1MS4yNjloLTU5LjU1di05LjA2NmMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXY5LjA2NmgtNTkuNTQ5em0yMDguNjQ3IDQ5Ljd2Mzc0LjMyaC0yODMuMTk5di0zNzQuMzJoNTkuNTUydjkuMDY5YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVoMTQ5LjA5OWM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41di05LjA2OXoiLz48cGF0aCBkPSJtMjU2IDMxNC43NjdoLTMzLjEzM2MtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWgzMy4xMzNjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjV6Ii8+PHBhdGggZD0ibTI4OS4xMzMgMzQ3Ljg5N2gtNjYuMjY3Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDY2LjI2N2M0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzA2LjQ4MiAzNTUuMzk5YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVoMjQuODUyYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0yNC44NTJjLTQuMTQyIDAtNy41IDMuMzU4LTcuNSA3LjV6Ii8+PHBhdGggZD0ibTE5Mi4xOTYgMjI2LjAyMiA1OC41MDEgNTguNTAyYzEuNDA3IDEuNDA3IDMuMzE0IDIuMTk3IDUuMzA0IDIuMTk3IDEuOTg5IDAgMy44OTYtLjc5IDUuMzA0LTIuMTk3bDU4LjU3MS01OC41NzJjMTkuMDcxLTE5LjA3MyAxOS4wNzEtNTAuMTA1IDAtNjkuMTc4LTkuMjQtOS4yMzktMjEuNTI0LTE0LjMyOC0zNC41OS0xNC4zMjgtMTAuNzAzIDAtMjAuODggMy40MTQtMjkuMjkgOS43MjctMTkuMTQzLTE0LjMyNS00Ni40NzktMTIuNzkzLTYzLjg3MiA0LjU5OS0xOS4wNzEgMTkuMDcyLTE5LjA3MSA1MC4xMDYgMCA2OS4xNzguMDI0LjAyNS4wNDguMDQ5LjA3Mi4wNzJ6bTEwLjUzNC01OC42NDJjMTMuMjI0LTEzLjIyNCAzNC43NDEtMTMuMjI0IDQ3Ljk2NS0uMDAxLjIzMi4yMzIuNDguNDQ5Ljc0LjY0OCAxLjMwMyAxIDIuOTA1IDEuNTUgNC41NjYgMS41NSAxLjk4OSAwIDMuODk2LS43OSA1LjMwNC0yLjE5NyA2LjQwNS02LjQwNiAxNC45MjMtOS45MzQgMjMuOTgxLTkuOTM0IDkuMDYgMCAxNy41NzYgMy41MjggMjMuOTgyIDkuOTM0IDEzLjIyNSAxMy4yMjQgMTMuMjI0IDM0Ljc0MSAwIDQ3Ljk2NWwtNTMuMjY4IDUzLjI2OS01My4yNjgtNTMuMjY5Yy0uMDIxLS4wMjEtLjA0NC0uMDQzLS4wNjUtLjA2NC0xMy4xNi0xMy4yMjktMTMuMTM5LTM0LjY5OC4wNjMtNDcuOTAxeiIvPjxwYXRoIGQ9Im0xODkuNzMzIDMxNC43NjdoLTMzLjEzM2MtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXYzMy4xMzNjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNWgzMy4xMzRjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXYtMzMuMTMzYy0uMDAxLTQuMTQyLTMuMzU4LTcuNS03LjUwMS03LjV6bS03LjUgMzMuMTMzaC0xOC4xMzN2LTE4LjEzM2gxOC4xMzR2MTguMTMzeiIvPjxwYXRoIGQ9Im0yMjIuODY3IDM5Ni4wMzRoMzMuMTMzYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0zMy4xMzNjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjV6Ii8+PHBhdGggZD0ibTI4OS4xMzMgNDE0LjE2NGgtNjYuMjY3Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDY2LjI2N2M0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzM4LjgzNCA0MTQuMTY2aC0yNC44NTJjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjVoMjQuODUyYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0xODkuNzMzIDM4MS4wMzNoLTMzLjEzM2MtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXYzMy4xMzNjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNWgzMy4xMzRjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXYtMzMuMTMzYy0uMDAxLTQuMTQyLTMuMzU4LTcuNS03LjUwMS03LjV6bS03LjUgMzMuMTM0aC0xOC4xMzN2LTE4LjEzM2gxOC4xMzR2MTguMTMzeiIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./public/static/images/icons/samlogo.svg":
/*!************************************************!*\
  !*** ./public/static/images/icons/samlogo.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzEuMjQgMTEyLjYiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ze2ZpbGw6I2ZmZjt9LmNscy0xLC5jbHMtMntzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NnB4O30uY2xzLTJ7ZmlsbDojZWUyNDI0O30uY2xzLTN7Zm9udC1zaXplOjU2LjI4cHg7Zm9udC1mYW1pbHk6RnJhbmtsaW5Hb3RoaWMtSGVhdnksIEZyYW5rbGluIEdvdGhpYyBIZWF2eTt9LmNscy0zLC5jbHMtNHtmb250LXdlaWdodDo4MDA7fS5jbHMtNHtmb250LXNpemU6NDkuNDJweDtmaWxsOiMyMzFmMjA7Zm9udC1mYW1pbHk6RnJhbmtsaW5Hb3RoaWMtSGVhdnlJdGFsaWMsIEZyYW5rbGluIEdvdGhpYyBIZWF2eTtmb250LXN0eWxlOml0YWxpYzt9LmNscy01e2xldHRlci1zcGFjaW5nOi0wLjAyZW07fS5jbHMtNntsZXR0ZXItc3BhY2luZzowZW07fS5jbHMtN3tsZXR0ZXItc3BhY2luZzowZW07fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zYW1sb2dvPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIzMzguMTkgOTEuOCA0Ljk5IDkxLjggNTIuMDkgMyAzNzIuMjEgMyAzMzguMTkgOTEuOCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIyMDEuNiA5MS44IDQuOTkgOTEuOCA1Mi4wOSAzIDI0Ny45NyAzIDIwMS42IDkxLjgiLz48dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyLjE1IDY5LjU3KSI+U2Ft4oCZczwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNy4xMyA3MC43NSkiPjx0c3BhbiBjbGFzcz0iY2xzLTUiPkE8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTYiIHg9IjMwLjI0IiB5PSIwIj5VPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy03IiB4PSI2Mi4wNyIgeT0iMCI+VDwvdHNwYW4+PHRzcGFuIHg9Ijg2LjYxIiB5PSIwIj5PPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./public/static/images/icons/warranty.svg":
/*!*************************************************!*\
  !*** ./public/static/images/icons/warranty.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTExcHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTM4IDAgNTExIDUxMS45OTk1NiIgd2lkdGg9IjUxMXB0Ij4KPGcgaWQ9InN1cmZhY2UxIj4KPHBhdGggZD0iTSA0MTMuNDc2NTYyIDM0MS45MTAxNTYgQyAzOTkuNzE0ODQ0IDM3OS4yMDcwMzEgMzc4LjkwMjM0NCA0MTEuNjM2NzE5IDM1MS42MDkzNzUgNDM4LjI4OTA2MiBDIDMyMC41NDI5NjkgNDY4LjYyNSAyNzkuODYzMjgxIDQ5Mi43MzA0NjkgMjMwLjY5OTIxOSA1MDkuOTI1NzgxIEMgMjI5LjA4NTkzOCA1MTAuNDg4MjgxIDIyNy40MDIzNDQgNTEwLjk0OTIxOSAyMjUuNzEwOTM4IDUxMS4yODkwNjIgQyAyMjMuNDc2NTYyIDUxMS43MzA0NjkgMjIxLjIwMzEyNSA1MTEuOTY4NzUgMjE4Ljk0OTIxOSA1MTIgTCAyMTguNTA3ODEyIDUxMiBDIDIxNi4xMDU0NjkgNTEyIDIxMy42OTE0MDYgNTExLjc1NzgxMiAyMTEuMjk2ODc1IDUxMS4yODkwNjIgQyAyMDkuNjA1NDY5IDUxMC45NDkyMTkgMjA3Ljk0NTMxMiA1MTAuNDg4MjgxIDIwNi4zMzk4NDQgNTA5LjkzNzUgQyAxNTcuMTE3MTg4IDQ5Mi43Njk1MzEgMTE2LjM4NjcxOSA0NjguNjc1NzgxIDg1LjI4OTA2MiA0MzguMzM5ODQ0IEMgNTcuOTg0Mzc1IDQxMS42ODc1IDM3LjE3NTc4MSAzNzkuMjc3MzQ0IDIzLjQzMzU5NCAzNDEuOTgwNDY5IEMgLTEuNTU0Njg4IDI3NC4xNjc5NjkgLTAuMTMyODEyIDE5OS40NjQ4NDQgMS4wMTE3MTkgMTM5LjQzMzU5NCBMIDEuMDMxMjUgMTM4LjUxMTcxOSBDIDEuMjYxNzE5IDEzMy41NTQ2ODggMS40MTAxNTYgMTI4LjM0NzY1NiAxLjQ5MjE4OCAxMjIuNTk3NjU2IEMgMS45MTAxNTYgOTQuMzY3MTg4IDI0LjM1NTQ2OSA3MS4wMTE3MTkgNTIuNTg5ODQ0IDY5LjQzNzUgQyAxMTEuNDU3MDMxIDY2LjE1MjM0NCAxNTYuOTk2MDk0IDQ2Ljk1MzEyNSAxOTUuOTA2MjUgOS4wMjczNDQgTCAxOTYuMjQ2MDk0IDguNzE0ODQ0IEMgMjAyLjcwNzAzMSAyLjc4OTA2MiAyMTAuODQ3NjU2IC0wLjExNzE4OCAyMTguOTQ5MjE5IDAuMDAzOTA2MjUgQyAyMjYuNzYxNzE5IDAuMTA1NDY5IDIzNC41NDI5NjkgMy4wMDc4MTIgMjQwLjc3MzQzOCA4LjcxNDg0NCBMIDI0MS4xMDU0NjkgOS4wMjczNDQgQyAyODAuMDIzNDM4IDQ2Ljk1MzEyNSAzMjUuNTYyNSA2Ni4xNTIzNDQgMzg0LjQyOTY4OCA2OS40Mzc1IEMgNDEyLjY2NDA2MiA3MS4wMTE3MTkgNDM1LjEwOTM3NSA5NC4zNjcxODggNDM1LjUyNzM0NCAxMjIuNTk3NjU2IEMgNDM1LjYwOTM3NSAxMjguMzg2NzE5IDQzNS43NTc4MTIgMTMzLjU4NTkzOCA0MzUuOTg4MjgxIDEzOC41MTE3MTkgTCA0MzYgMTM4LjkwMjM0NCBDIDQzNy4xNDA2MjUgMTk5LjA0Njg3NSA0MzguNTU0Njg4IDI3My44OTg0MzggNDEzLjQ3NjU2MiAzNDEuOTEwMTU2IFogTSA0MTMuNDc2NTYyIDM0MS45MTAxNTYgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDg2LjY2NjY2NyUsNTAuMTk2MDc4JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDQxMy40NzY1NjIgMzQxLjkxMDE1NiBDIDM5OS43MTQ4NDQgMzc5LjIwNzAzMSAzNzguOTAyMzQ0IDQxMS42MzY3MTkgMzUxLjYwOTM3NSA0MzguMjg5MDYyIEMgMzIwLjU0Mjk2OSA0NjguNjI1IDI3OS44NjMyODEgNDkyLjczMDQ2OSAyMzAuNjk5MjE5IDUwOS45MjU3ODEgQyAyMjkuMDg1OTM4IDUxMC40ODgyODEgMjI3LjQwMjM0NCA1MTAuOTQ5MjE5IDIyNS43MTA5MzggNTExLjI4OTA2MiBDIDIyMy40NzY1NjIgNTExLjczMDQ2OSAyMjEuMjAzMTI1IDUxMS45Njg3NSAyMTguOTQ5MjE5IDUxMiBMIDIxOC45NDkyMTkgMC4wMDM5MDYyNSBDIDIyNi43NjE3MTkgMC4xMDU0NjkgMjM0LjU0Mjk2OSAzLjAwNzgxMiAyNDAuNzczNDM4IDguNzE0ODQ0IEwgMjQxLjEwNTQ2OSA5LjAyNzM0NCBDIDI4MC4wMjM0MzggNDYuOTUzMTI1IDMyNS41NjI1IDY2LjE1MjM0NCAzODQuNDI5Njg4IDY5LjQzNzUgQyA0MTIuNjY0MDYyIDcxLjAxMTcxOSA0MzUuMTA5Mzc1IDk0LjM2NzE4OCA0MzUuNTI3MzQ0IDEyMi41OTc2NTYgQyA0MzUuNjA5Mzc1IDEyOC4zODY3MTkgNDM1Ljc1NzgxMiAxMzMuNTg1OTM4IDQzNS45ODgyODEgMTM4LjUxMTcxOSBMIDQzNiAxMzguOTAyMzQ0IEMgNDM3LjE0MDYyNSAxOTkuMDQ2ODc1IDQzOC41NTQ2ODggMjczLjg5ODQzOCA0MTMuNDc2NTYyIDM0MS45MTAxNTYgWiBNIDQxMy40NzY1NjIgMzQxLjkxMDE1NiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsNjYuNjY2NjY3JSwzOC44MjM1MjklKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMzQ2LjEwMTU2MiAyNTYgQyAzNDYuMTAxNTYyIDMyNi4yMDcwMzEgMjg5LjA5NzY1NiAzODMuMzU1NDY5IDIxOC45NDkyMTkgMzgzLjYwNTQ2OSBMIDIxOC41IDM4My42MDU0NjkgQyAxNDguMTQ0NTMxIDM4My42MDU0NjkgOTAuODk0NTMxIDMyNi4zNTkzNzUgOTAuODk0NTMxIDI1NiBDIDkwLjg5NDUzMSAxODUuNjQ0NTMxIDE0OC4xNDQ1MzEgMTI4LjM5ODQzOCAyMTguNSAxMjguMzk4NDM4IEwgMjE4Ljk0OTIxOSAxMjguMzk4NDM4IEMgMjg5LjA5NzY1NiAxMjguNjQ4NDM4IDM0Ni4xMDE1NjIgMTg1Ljc5Njg3NSAzNDYuMTAxNTYyIDI1NiBaIE0gMzQ2LjEwMTU2MiAyNTYgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMzQ2LjEwMTU2MiAyNTYgQyAzNDYuMTAxNTYyIDMyNi4yMDcwMzEgMjg5LjA5NzY1NiAzODMuMzU1NDY5IDIxOC45NDkyMTkgMzgzLjYwNTQ2OSBMIDIxOC45NDkyMTkgMTI4LjM5ODQzOCBDIDI4OS4wOTc2NTYgMTI4LjY0ODQzOCAzNDYuMTAxNTYyIDE4NS43OTY4NzUgMzQ2LjEwMTU2MiAyNTYgWiBNIDM0Ni4xMDE1NjIgMjU2ICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4OC4yMzUyOTQlLDkyLjE1Njg2MyUsOTQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDI3Ni40MTc5NjkgMjM3LjYyNSBMIDIxOC45NDkyMTkgMjk1LjEwMTU2MiBMIDIwNi41MzEyNSAzMDcuNTE5NTMxIEMgMjAzLjU5NzY1NiAzMTAuNDUzMTI1IDE5OS43NSAzMTEuOTE3OTY5IDE5NS45MDYyNSAzMTEuOTE3OTY5IEMgMTkyLjA1ODU5NCAzMTEuOTE3OTY5IDE4OC4yMTQ4NDQgMzEwLjQ1MzEyNSAxODUuMjc3MzQ0IDMwNy41MTk1MzEgTCAxNTguNTc4MTI1IDI4MC44MDg1OTQgQyAxNTIuNzEwOTM4IDI3NC45NDE0MDYgMTUyLjcxMDkzOCAyNjUuNDM3NSAxNTguNTc4MTI1IDI1OS41NjY0MDYgQyAxNjQuNDM3NSAyNTMuNjk5MjE5IDE3My45NTMxMjUgMjUzLjY5OTIxOSAxNzkuODIwMzEyIDI1OS41NjY0MDYgTCAxOTUuOTA2MjUgMjc1LjY1MjM0NCBMIDI1NS4xNzU3ODEgMjE2LjM4MjgxMiBDIDI2MS4wNDI5NjkgMjEwLjUxMTcxOSAyNzAuNTU4NTk0IDIxMC41MTE3MTkgMjc2LjQxNzk2OSAyMTYuMzgyODEyIEMgMjgyLjI4NTE1NiAyMjIuMjUgMjgyLjI4NTE1NiAyMzEuNzY1NjI1IDI3Ni40MTc5NjkgMjM3LjYyNSBaIE0gMjc2LjQxNzk2OSAyMzcuNjI1ICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig3MC41ODgyMzUlLDgyLjM1Mjk0MSUsODQuMzEzNzI1JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDI3Ni40MTc5NjkgMjM3LjYyNSBMIDIxOC45NDkyMTkgMjk1LjEwMTU2MiBMIDIxOC45NDkyMTkgMjUyLjYwNTQ2OSBMIDI1NS4xNzU3ODEgMjE2LjM4MjgxMiBDIDI2MS4wNDI5NjkgMjEwLjUxMTcxOSAyNzAuNTU4NTk0IDIxMC41MTE3MTkgMjc2LjQxNzk2OSAyMTYuMzgyODEyIEMgMjgyLjI4NTE1NiAyMjIuMjUgMjgyLjI4NTE1NiAyMzEuNzY1NjI1IDI3Ni40MTc5NjkgMjM3LjYyNSBaIE0gMjc2LjQxNzk2OSAyMzcuNjI1ICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig0My41Mjk0MTIlLDY0LjcwNTg4MiUsNjYuNjY2NjY3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/static/images/landing/battery.png":
/*!**************************************************!*\
  !*** ./public/static/images/landing/battery.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/battery-4eb551c648962700df865328e70813ae.png";

/***/ }),

/***/ "./public/static/images/landing/enginec.png":
/*!**************************************************!*\
  !*** ./public/static/images/landing/enginec.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/enginec-6edd250128b9437e345e27f185e496df.png";

/***/ }),

/***/ "./public/static/images/landing/facebook.svg":
/*!***************************************************!*\
  !*** ./public/static/images/landing/facebook.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljk5NjQgMjIuNDk4M0M0NC45OTY0IDEwLjA3MjggMzQuOTIzNyAwIDIyLjQ5ODMgMEMxMC4wNzI4IDAgMCAxMC4wNzI4IDAgMjIuNDk4M0MwIDMzLjcyNzkgOC4yMjcyOSA0My4wMzU0IDE4Ljk4MjkgNDQuNzIzM1YyOS4wMDE4SDEzLjI3MDVWMjIuNDk4M0gxOC45ODI5VjE3LjU0MTZDMTguOTgyOSAxMS45MDMgMjIuMzQxNyA4Ljc4ODM5IDI3LjQ4MDcgOC43ODgzOUMyOS45NDIyIDguNzg4MzkgMzIuNTE3IDkuMjI3NzkgMzIuNTE3IDkuMjI3NzlWMTQuNzY0NUgyOS42ODAxQzI2Ljg4NTMgMTQuNzY0NSAyNi4wMTM2IDE2LjQ5ODcgMjYuMDEzNiAxOC4yNzhWMjIuNDk4M0gzMi4yNTM0TDMxLjI1NTkgMjkuMDAxOEgyNi4wMTM2VjQ0LjcyMzNDMzYuNzY5MyA0My4wMzU0IDQ0Ljk5NjQgMzMuNzI3OSA0NC45OTY0IDIyLjQ5ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/static/images/landing/hero-car.png":
/*!***************************************************!*\
  !*** ./public/static/images/landing/hero-car.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-car-e0e505da92e99fb165ffad770f63551a.png";

/***/ }),

/***/ "./public/static/images/landing/insta.svg":
/*!************************************************!*\
  !*** ./public/static/images/landing/insta.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjQwNjIgMjRDMTkuNDA2MiAyNi41MzcxIDIxLjQ2MjkgMjguNTkzOCAyNCAyOC41OTM4QzI2LjUzNzEgMjguNTkzOCAyOC41OTM4IDI2LjUzNzEgMjguNTkzOCAyNEMyOC41OTM4IDIxLjQ2MjkgMjYuNTM3MSAxOS40MDYyIDI0IDE5LjQwNjJDMjEuNDYyOSAxOS40MDYyIDE5LjQwNjIgMjEuNDYyOSAxOS40MDYyIDI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzLjI1NjggMTUuODcyNEMxMy40Nzc3IDE1LjI3NCAxMy44MyAxNC43MzI0IDE0LjI4NzcgMTQuMjg3OEMxNC43MzIzIDEzLjgzMDEgMTUuMjczNiAxMy40Nzc4IDE1Ljg3MjMgMTMuMjU3QzE2LjM1NzkgMTMuMDY4NCAxNy4wODc0IDEyLjg0MzkgMTguNDMxIDEyLjc4MjdDMTkuODg0NSAxMi43MTY0IDIwLjMyMDMgMTIuNzAyMSAyNCAxMi43MDIxQzI3LjY4MDEgMTIuNzAyMSAyOC4xMTU4IDEyLjcxNjEgMjkuNTY5IDEyLjc4MjNDMzAuOTEyNiAxMi44NDM5IDMxLjY0MjUgMTMuMDY4NCAzMi4xMjc3IDEzLjI1N0MzMi43MjY0IDEzLjQ3NzggMzMuMjY4MSAxMy44MzAxIDMzLjcxMjMgMTQuMjg3OEMzNC4xNyAxNC43MzI0IDM0LjUyMjMgMTUuMjczNyAzNC43NDM1IDE1Ljg3MjRDMzQuOTMyMSAxNi4zNTggMzUuMTU2NiAxNy4wODc5IDM1LjIxNzggMTguNDMxNUMzNS4yODQxIDE5Ljg4NDYgMzUuMjk4MyAyMC4zMjA0IDM1LjI5ODMgMjQuMDAwNUMzNS4yOTgzIDI3LjY4MDIgMzUuMjg0MSAyOC4xMTYgMzUuMjE3OCAyOS41Njk1QzM1LjE1NjYgMzAuOTEzMSAzNC45MzIxIDMxLjY0MjYgMzQuNzQzNSAzMi4xMjgyQzM0LjUyMjMgMzIuNzI2OSAzNC4xNzA0IDMzLjI2ODIgMzMuNzEyNiAzMy43MTI4QzMzLjI2ODEgMzQuMTcwNSAzMi43MjY4IDM0LjUyMjggMzIuMTI4MSAzNC43NDM2QzMxLjY0MjUgMzQuOTMyNiAzMC45MTI2IDM1LjE1NzEgMjkuNTY5IDM1LjIxODNDMjguMTE1OCAzNS4yODQ1IDI3LjY4MDQgMzUuMjk4NSAyNC4wMDA0IDM1LjI5ODVDMjAuMzE5OSAzNS4yOTg1IDE5Ljg4NDIgMzUuMjg0NSAxOC40MzE0IDM1LjIxODNDMTcuMDg3OCAzNS4xNTcxIDE2LjM1NzkgMzQuOTMyNiAxNS44NzIzIDM0Ljc0MzZDMTQuNjcwNCAzNC4yOCAxMy43MjA1IDMzLjMzMDEgMTMuMjU2OCAzMi4xMjgyQzEzLjA2ODIgMzEuNjQyNiAxMi44NDM4IDMwLjkxMzEgMTIuNzgyMiAyOS41Njk1QzEyLjcxNTkgMjguMTE2IDEyLjcwMiAyNy42ODAyIDEyLjcwMiAyNC4wMDA1QzEyLjcwMiAyMC4zMjA0IDEyLjcxNTkgMTkuODg0NiAxMi43ODIyIDE4LjQzMTVDMTIuODQzNCAxNy4wODc5IDEzLjA2NzkgMTYuMzU4IDEzLjI1NjggMTUuODcyNFpNMjQgMzEuMDc2OEMyNy45MDg2IDMxLjA3NjggMzEuMDc3IDI3LjkwODcgMzEuMDc3IDI0LjAwMDFDMzEuMDc3IDIwLjA5MTYgMjcuOTA4NiAxNi45MjM1IDI0IDE2LjkyMzVDMjAuMDkxOCAxNi45MjM1IDE2LjkyMzMgMjAuMDkxNiAxNi45MjMzIDI0LjAwMDFDMTYuOTIzMyAyNy45MDg3IDIwLjA5MTggMzEuMDc2OCAyNCAzMS4wNzY4Wk0xNi42NDM2IDE4LjI5NzVDMTcuNTU2OSAxOC4yOTc1IDE4LjI5NzQgMTcuNTU3IDE4LjI5NzQgMTYuNjQzN0MxOC4yOTc0IDE1LjczMDMgMTcuNTU2OSAxNC45ODk5IDE2LjY0MzYgMTQuOTg5OUMxNS43MzAyIDE0Ljk4OTkgMTQuOTg5NyAxNS43MzAzIDE0Ljk4OTcgMTYuNjQzN0MxNC45OTAxIDE3LjU1NyAxNS43MzAyIDE4LjI5NzUgMTYuNjQzNiAxOC4yOTc1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI0IDBDMzcuMjUyOCAwIDQ4IDEwLjc0NzIgNDggMjRDNDggMzcuMjUyOCAzNy4yNTI4IDQ4IDI0IDQ4QzEwLjc0NzIgNDggMCAzNy4yNTI4IDAgMjRDMCAxMC43NDcyIDEwLjc0NzIgMCAyNCAwWk0xMC4zMDE5IDI5LjY4MThDMTAuMzY4NSAzMS4xNDg4IDEwLjYwMTggMzIuMTUwNCAxMC45NDI0IDMzLjAyNzFDMTEuNjU4MyAzNC44NzgzIDEzLjEyMTcgMzYuMzQxNyAxNC45NzI5IDM3LjA1NzZDMTUuODQ5MiAzNy4zOTgyIDE2Ljg1MTIgMzcuNjMxMSAxOC4zMTc5IDM3LjY5ODFDMTkuNzg3NSAzNy43NjUxIDIwLjI1NyAzNy43ODEyIDIzLjk5OTYgMzcuNzgxMkMyNy43NDI3IDM3Ljc4MTIgMjguMjExOCAzNy43NjUxIDI5LjY4MTggMzcuNjk4MUMzMS4xNDg0IDM3LjYzMTEgMzIuMTUwNCAzNy4zOTgyIDMzLjAyNjcgMzcuMDU3NkMzMy45NDY3IDM2LjcxMTUgMzQuNzc5NCAzNi4xNjkyIDM1LjQ2NzkgMzUuNDY3OUMzNi4xNjg4IDM0Ljc3OTggMzYuNzExMiAzMy45NDY3IDM3LjA1NzMgMzMuMDI3MUMzNy4zOTc4IDMyLjE1MDggMzcuNjMxMSAzMS4xNDg4IDM3LjY5NzggMjkuNjgyMUMzNy43NjU1IDI4LjIxMjIgMzcuNzgxMiAyNy43NDI3IDM3Ljc4MTIgMjRDMzcuNzgxMiAyMC4yNTczIDM3Ljc2NTUgMTkuNzg3OCAzNy42OTgxIDE4LjMxODJDMzcuNjMxNSAxNi44NTEyIDM3LjM5ODYgMTUuODQ5NiAzNy4wNTggMTQuOTcyOUMzNi43MTE5IDE0LjA1MzMgMzYuMTY5MiAxMy4yMjAyIDM1LjQ2NzkgMTIuNTMyMUMzNC43Nzk4IDExLjgzMDggMzMuOTQ2NyAxMS4yODg1IDMzLjAyNzEgMTAuOTQyNEMzMi4xNTA0IDEwLjYwMTggMzEuMTQ4OCAxMC4zNjg5IDI5LjY4MTggMTAuMzAxOUMyOC4yMTIyIDEwLjIzNDkgMjcuNzQyNyAxMC4yMTg4IDI0IDEwLjIxODhDMjAuMjU3MyAxMC4yMTg4IDE5Ljc4NzggMTAuMjM0OSAxOC4zMTgyIDEwLjMwMjJDMTYuODUxMiAxMC4zNjg5IDE1Ljg0OTYgMTAuNjAxOCAxNC45NzI5IDEwLjk0MkMxNC4wNTMzIDExLjI4ODEgMTMuMjIwMiAxMS44MzA4IDEyLjUzMTcgMTIuNTMyMUMxMS44MzA4IDEzLjIyMDYgMTEuMjg4MSAxNC4wNTMzIDEwLjk0MjQgMTQuOTcyOUMxMC42MDE0IDE1Ljg0OTYgMTAuMzY4NSAxNi44NTEyIDEwLjMwMTUgMTguMzE4MkMxMC4yMzQ1IDE5Ljc4NzggMTAuMjE4OCAyMC4yNTczIDEwLjIxODggMjRDMTAuMjE4OCAyNy43NDI3IDEwLjIzNDUgMjguMjEyMiAxMC4zMDE5IDI5LjY4MThaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/static/images/landing/map.png":
/*!**********************************************!*\
  !*** ./public/static/images/landing/map.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-6dbac7c6417c1739f6a6d5e8aa9240d9.png";

/***/ }),

/***/ "./public/static/images/landing/oilc.png":
/*!***********************************************!*\
  !*** ./public/static/images/landing/oilc.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/oilc-06e5ae317447bb0702eea532f5a1e1c7.png";

/***/ }),

/***/ "./public/static/images/landing/phone.svg":
/*!************************************************!*\
  !*** ./public/static/images/landing/phone.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0zNS44NDY1IDYuMTQ4MDNDMjcuNjQ0MyAtMi4wNTE3MyAxNC4zNDc4IC0yLjA0OTc2IDYuMTQ4MDMgNi4xNTI1NEMtMi4wNTE3MyAxNC4zNTQ4IC0yLjA0OTc2IDI3LjY1MTMgNi4xNTI1NCAzNS44NTExQzE0LjM1NDggNDQuMDUwOCAyNy42NTEzIDQ0LjA0ODggMzUuODUxMSAzNS44NDY1QzM5Ljc4OSAzMS45MDczIDQyLjAwMDggMjYuNTY1IDQxLjk5OTUgMjAuOTk1QzQxLjk5ODQgMTUuNDI1OSAzOS43ODUxIDEwLjA4NTQgMzUuODQ2NSA2LjE0ODAzWk0zMS44MDMzIDI5LjI1MjNDMzEuODAyNCAyOS4yNTMyIDMxLjgwMTUgMjkuMjU0MiAzMS44MDA1IDI5LjI1NTFWMjkuMjQ4MUwzMC43MzY1IDMwLjMwNTFDMjkuMzYwNCAzMS42OTg1IDI3LjM1NjMgMzIuMjcxOSAyNS40NTE1IDMxLjgxNzFDMjMuNTMyMyAzMS4zMDM0IDIxLjcwOCAzMC40ODU3IDIwLjA0NzUgMjkuMzk1MUMxOC41MDQ4IDI4LjQwOTIgMTcuMDc1MiAyNy4yNTY2IDE1Ljc4NDUgMjUuOTU4MUMxNC41OTY5IDI0Ljc3OTIgMTMuNTMgMjMuNDg0OCAxMi41OTk1IDIyLjA5NDFDMTEuNTgxNiAyMC41OTc3IDEwLjc3NiAxOC45Njc1IDEwLjIwNTUgMTcuMjUwMUM5LjU1MTQyIDE1LjIzMjQgMTAuMDkzNCAxMy4wMTg1IDExLjYwNTUgMTEuNTMxMUwxMi44NTE1IDEwLjI4NTFDMTMuMTk3OSA5LjkzNzE0IDEzLjc2MDggOS45MzU5MSAxNC4xMDg3IDEwLjI4MjNDMTQuMTA5NiAxMC4yODMyIDE0LjExMDYgMTAuMjg0MSAxNC4xMTE1IDEwLjI4NTFMMTguMDQ1NCAxNC4yMTkxQzE4LjM5MzQgMTQuNTY1NSAxOC4zOTQ2IDE1LjEyODQgMTguMDQ4MiAxNS40NzYzQzE4LjA0NzMgMTUuNDc3MiAxOC4wNDY0IDE1LjQ3ODEgMTguMDQ1NCAxNS40NzkxTDE1LjczNTQgMTcuNzg5MUMxNS4wNzI2IDE4LjQ0NDcgMTQuOTg5MyAxOS40ODY1IDE1LjUzOTUgMjAuMjM5MUMxNi4zNzQ5IDIxLjM4NTcgMTcuMjk5NSAyMi40NjQ3IDE4LjMwNDUgMjMuNDY2MUMxOS40MjUgMjQuNTkxNCAyMC42NDMgMjUuNjE1MSAyMS45NDQ1IDI2LjUyNTJDMjIuNjk2NCAyNy4wNDk3IDIzLjcxNTkgMjYuOTYxMiAyNC4zNjY0IDI2LjMxNTJMMjYuNTk5NCAyNC4wNDcyQzI2Ljk0NTggMjMuNjk5MiAyNy41MDg3IDIzLjY5OCAyNy44NTY2IDI0LjA0NDRDMjcuODU3NSAyNC4wNDUzIDI3Ljg1ODQgMjQuMDQ2MiAyNy44NTk0IDI0LjA0NzJMMzEuODAwNCAyNy45OTUyQzMyLjE0ODUgMjguMzQxNSAzMi4xNDk3IDI4LjkwNDMgMzEuODAzMyAyOS4yNTIzWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Laka Ganth\Documents\NextJS\sam\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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
//# sourceMappingURL=index.js.map
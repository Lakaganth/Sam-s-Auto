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
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_landing_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "/samautos"), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_landing_insta_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Insta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "@samautos"), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_static_images_landing_phone_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
  padding-top: 25px;
  /* identical to box height */
  letter-spacing: 0.05em;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 100vh;
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
    /* img {
      justify-self: center;
      transform: translate3d(0, 100%, 0);
    } */
    a {
      display: inline-block;
      width: 90px;
      height: 90px;
      background: gray;
      margin: 10px;
      border-radius: 30%;
      box-shadow: 0 5px 15px -5px #00000070;
      color: #3498db;
      overflow: hidden;
      position: relative;
    }
    img {
      line-height: 90px;
      margin-top: 20px;
      font-size: 26px;
      transition: 0.2s linear;
    }
    a:hover img {
      transform: scale(1.3);
      color: #f1f1f1;
    }
    a::before {
      content: "";
      position: absolute;
      width: 120%;
      height: 120%;
      background: #3498db;
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    a:hover::before {
      animation: contactanim 0.7s 1;
      top: -10%;
      left: -10%;
    }
    @keyframes contactanim {
      0% {
        left: -110%;
        top: 90%;
      }
      50% {
        left: 10%;
        top: -30%;
      }
      100% {
        top: -10%;
        left: -10%;
      }
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

/***/ "./components/about/AboutBanner.js":
/*!*****************************************!*\
  !*** ./components/about/AboutBanner.js ***!
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
/* harmony import */ var _UI_NavbarComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/NavbarComp */ "./components/UI/NavbarComp.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\about\\AboutBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AboutBanner = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_UI_NavbarComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(BannerBG, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(ContentDiv, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Our Team"))), __jsx("p", {
    className: "about-intro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Meet our highly skilled team to deliver you the best"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
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
      lineNumber: 19,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M39.9393 25.0607C40.5251 25.6464 41.4749 25.6464 42.0607 25.0607L51.6066 15.5147C52.1924 14.9289 52.1924 13.9792 51.6066 13.3934C51.0208 12.8076 50.0711 12.8076 49.4853 13.3934L41 21.8787L32.5147 13.3934C31.9289 12.8076 30.9792 12.8076 30.3934 13.3934C29.8076 13.9792 29.8076 14.9289 30.3934 15.5147L39.9393 25.0607ZM39.5 6.55671e-08L39.5 24L42.5 24L42.5 -6.55671e-08L39.5 6.55671e-08Z",
    fill: "#A8A8A8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M7.1736 51.168C6.0856 51.168 5.1336 50.976 4.3176 50.592C3.5016 50.208 2.8616 49.688 2.3976 49.032C1.9496 48.376 1.6936 47.648 1.6296 46.848H2.7576C2.8856 47.728 3.2936 48.512 3.9816 49.2C4.6856 49.888 5.7496 50.232 7.1736 50.232C8.0056 50.232 8.7256 50.08 9.3336 49.776C9.9576 49.472 10.4376 49.056 10.7736 48.528C11.1096 48 11.2776 47.416 11.2776 46.776C11.2776 45.96 11.0776 45.312 10.6776 44.832C10.2936 44.352 9.8056 43.992 9.2136 43.752C8.6376 43.512 7.8536 43.256 6.8616 42.984C5.7736 42.696 4.8936 42.408 4.2216 42.12C3.5656 41.832 3.0056 41.392 2.5416 40.8C2.0936 40.192 1.8696 39.368 1.8696 38.328C1.8696 37.528 2.0776 36.8 2.4936 36.144C2.9256 35.472 3.5336 34.944 4.3176 34.56C5.1016 34.176 6.0056 33.984 7.0296 33.984C8.5176 33.984 9.7176 34.352 10.6296 35.088C11.5416 35.824 12.0856 36.728 12.2616 37.8H11.1096C11.0136 37.368 10.7976 36.928 10.4616 36.48C10.1416 36.032 9.6776 35.664 9.0696 35.376C8.4776 35.072 7.7656 34.92 6.9336 34.92C5.8136 34.92 4.8696 35.232 4.1016 35.856C3.3336 36.464 2.9496 37.28 2.9496 38.304C2.9496 39.12 3.1496 39.776 3.5496 40.272C3.9496 40.752 4.4376 41.12 5.0136 41.376C5.6056 41.616 6.3976 41.864 7.3896 42.12C8.4936 42.424 9.3656 42.72 10.0056 43.008C10.6616 43.28 11.2136 43.72 11.6616 44.328C12.1256 44.92 12.3576 45.728 12.3576 46.752C12.3576 47.504 12.1576 48.216 11.7576 48.888C11.3576 49.56 10.7656 50.112 9.9816 50.544C9.2136 50.96 8.2776 51.168 7.1736 51.168ZM18.7587 44.472C18.7587 43.112 19.0227 41.928 19.5507 40.92C20.0947 39.912 20.8387 39.144 21.7827 38.616C22.7427 38.072 23.8387 37.8 25.0707 37.8C26.7027 37.8 28.0387 38.208 29.0787 39.024C30.1347 39.84 30.7907 40.936 31.0467 42.312H29.9187C29.7107 41.192 29.1667 40.312 28.2867 39.672C27.4227 39.032 26.3507 38.712 25.0707 38.712C24.1107 38.712 23.2387 38.928 22.4547 39.36C21.6707 39.776 21.0387 40.424 20.5587 41.304C20.0947 42.168 19.8627 43.224 19.8627 44.472C19.8627 45.736 20.0947 46.8 20.5587 47.664C21.0387 48.528 21.6707 49.176 22.4547 49.608C23.2387 50.04 24.1107 50.256 25.0707 50.256C26.3507 50.256 27.4227 49.936 28.2867 49.296C29.1667 48.656 29.7107 47.776 29.9187 46.656H31.0467C30.7907 48.016 30.1347 49.112 29.0787 49.944C28.0227 50.776 26.6867 51.192 25.0707 51.192C23.8387 51.192 22.7427 50.92 21.7827 50.376C20.8387 49.832 20.0947 49.056 19.5507 48.048C19.0227 47.024 18.7587 45.832 18.7587 44.472ZM39.2569 40.656C39.5769 39.696 40.1449 38.968 40.9609 38.472C41.7769 37.96 42.8169 37.704 44.0809 37.704V38.832H43.7209C42.4409 38.832 41.3769 39.2 40.5289 39.936C39.6809 40.656 39.2569 41.84 39.2569 43.488V51H38.1769V37.968H39.2569V40.656ZM56.1435 51.192C54.9275 51.192 53.8315 50.92 52.8555 50.376C51.8795 49.832 51.1115 49.056 50.5515 48.048C50.0075 47.024 49.7355 45.832 49.7355 44.472C49.7355 43.128 50.0155 41.952 50.5755 40.944C51.1355 39.92 51.9035 39.144 52.8795 38.616C53.8715 38.072 54.9755 37.8 56.1915 37.8C57.4075 37.8 58.5035 38.072 59.4795 38.616C60.4555 39.144 61.2155 39.912 61.7595 40.92C62.3195 41.928 62.5995 43.112 62.5995 44.472C62.5995 45.832 62.3195 47.024 61.7595 48.048C61.1995 49.056 60.4235 49.832 59.4315 50.376C58.4555 50.92 57.3595 51.192 56.1435 51.192ZM56.1435 50.232C57.0875 50.232 57.9675 50.024 58.7835 49.608C59.6155 49.176 60.2795 48.528 60.7755 47.664C61.2715 46.8 61.5195 45.736 61.5195 44.472C61.5195 43.224 61.2715 42.168 60.7755 41.304C60.2795 40.44 59.6235 39.8 58.8075 39.384C57.9915 38.952 57.1115 38.736 56.1675 38.736C55.2235 38.736 54.3435 38.952 53.5275 39.384C52.7275 39.8 52.0795 40.44 51.5835 41.304C51.0875 42.168 50.8395 43.224 50.8395 44.472C50.8395 45.736 51.0795 46.8 51.5595 47.664C52.0555 48.528 52.7035 49.176 53.5035 49.608C54.3195 50.024 55.1995 50.232 56.1435 50.232ZM70.7963 33.24V51H69.7163V33.24H70.7963ZM79.6753 33.24V51H78.5953V33.24H79.6753Z",
    fill: "#E4E3E3",
    fillOpacity: "0.46",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutBanner);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  color: white;
  .about-intro {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    letter-spacing: 0.055em;
    color: #fcfcfc;
    width: 40%;
    margin: 6vh auto;
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
    /* margin-top: 10vh; */
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    .about-intro{
      font-size: 32px;
    line-height: 42px;
    width: 80%;
    }  
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    .about-intro{
      font-size: 32px;
    line-height: 42px;
    width: 80%;
    } 
  `}
`;
const BannerBG = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  height: 424px;
  overflow: hidden;
  background: url("/static/images/about/about-ban.png") top center no-repeat;
  background-size: cover;
  animation: bannerAnimation 1s forwards 0s ease-in-out;
  @keyframes bannerAnimation {
    0% {
      transform: translateY(-80%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
       height: 250px;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 250px;
  `}
`;
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
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
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 30%;
      transform: translate3d(0, 10%, 0);
      p{
        font-size: 52px;
    line-height: 80%;
      }
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 30%;
      transform: translate3d(0, 80%, 0);
      p{
        font-size: 32px;
    line-height: 50%;
      }
  `}
`;

/***/ }),

/***/ "./components/about/AboutContent.js":
/*!******************************************!*\
  !*** ./components/about/AboutContent.js ***!
  \******************************************/
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
/* harmony import */ var _TeamCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamCard */ "./components/about/TeamCard.js");
/* harmony import */ var _public_static_images_about_samavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/images/about/samavatar.png */ "./public/static/images/about/samavatar.png");
/* harmony import */ var _public_static_images_about_samavatar_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_about_samavatar_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_about_guru_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/about/guru.png */ "./public/static/images/about/guru.png");
/* harmony import */ var _public_static_images_about_guru_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_about_guru_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_about_sathya_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/about/sathya.png */ "./public/static/images/about/sathya.png");
/* harmony import */ var _public_static_images_about_sathya_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_about_sathya_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_images_about_laka_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/static/images/about/laka.png */ "./public/static/images/about/laka.png");
/* harmony import */ var _public_static_images_about_laka_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_about_laka_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_images_about_harsha_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/static/images/about/harsha.png */ "./public/static/images/about/harsha.png");
/* harmony import */ var _public_static_images_about_harsha_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_about_harsha_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\about\\AboutContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const AboutContent = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(BGstripes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(SamCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _public_static_images_about_samavatar_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Sam",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Sam"), __jsx("p", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "The Chief"), __jsx("p", {
    className: "desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "The CEO of Sam\u2019s auto. Great mechanic and solution provider. Friendly and great to have a chat with. Enjoy\u2019s BBQ")), __jsx(TeamGrid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_TeamCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Guru",
    title: "The Engine Guy",
    desc: "Specializes in Engine swap. Highly knowlegable in\r\ncar tech. Will transform your car into\r\nthe beast you dream of. Loves his Dodge",
    img: _public_static_images_about_guru_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(_TeamCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Sathya",
    title: "Spark Man",
    desc: "Knows his way around your\r\ncar\u2019s nervous system.\r\nElectrical and wiring specialist.\r\nAlso the IT guy.",
    img: _public_static_images_about_sathya_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_TeamCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Laka",
    title: "Designer",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img: _public_static_images_about_laka_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(_TeamCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Harsha",
    title: "Master",
    desc: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: _public_static_images_about_harsha_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutContent);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100vw;
  background-color: #fff;
  height: 200vh;
  z-index: 20;
  position: relative;
  overflow: hidden;
  /* background: url("/static/images/about/about-bg.jpg") top center repeat; */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 350vh;    
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 350vh;   
  `}
`;
const BGstripes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  /* z-index: -10; */
  background: url("/static/images/about/stripes.svg") bottom center no-repeat;

  top: -10vh;
  left: 0;
  background-size: cover;
  width: 100%;
  height: 160%;
  z-index: -10;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 100%;    
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 100%; 
  `}
`;
const SamCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 40vw;
  height: 35vh;
  background: #ffffff;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), -6px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: Poppins;
  font-style: thin;
  color: #000000;
  text-align: center;
  /* transform: translate3d(50%, -35%, 0); */
  z-index: 10;
  margin-top: 20vh;
  position: absolute;
  top: 10vh;
  left: 30vw;
  img {
    width: 250px;
    position: absolute;
    top: -60%;
    left: 33%;
    /* height: 25%; */
  }
  .name {
    font-weight: 300;
    font-size: 48px;
    letter-spacing: 0.21em;
    margin: 50px 0 0 0;
  }
  .title {
    font-weight: 200;
    font-size: 32px;
    line-height: 132%;
    margin: 10px 0 0 0;
    letter-spacing: 0.21em;
    color: #6c6a6a;
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 25px auto;
    /* or 32px */

    letter-spacing: 0.03em;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    margin-top: 13vh;
    width: 80vw;
    top: 10vh;
  left: 10vw;
  height: 45vh;
    img {
    width: 55%;   
    top: -45%;
    left: 25%;
    /* height: 25%; */
  }
    `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    margin-top: 20vh;
    width: 80vw;
    top: 10vh;
  left: 10vw;
  height: 40vh;
    img {
    width: 35%;   
    top: -55%;
    left: 35%;
  `}
`;
const TeamGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 90vh;
  overflow: hidden;
  /* grid-gap: 25%; */
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(1, 1fr);
    padding-top: 80vh;
    width: 80%;
  margin: 0 auto;
  grid-gap:10vh;
  `}

  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    grid-template-columns: repeat(1, 1fr);
    padding-top: 80vh;
    width: 80%;
  margin: 0 auto;
  grid-gap:10vh;
  `}
`;

/***/ }),

/***/ "./components/about/TeamCard.js":
/*!**************************************!*\
  !*** ./components/about/TeamCard.js ***!
  \**************************************/
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
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\components\\about\\TeamCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TeamCard = ({
  name,
  title,
  img,
  desc
}) => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Card, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: img,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, name), __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, " ", title, " "), __jsx("div", {
    className: "desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, desc, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamCard);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 50vw;
  height: 55vh;
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 90vw;
  height: 55vh;
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90vw;
   height: 55vh;

   margin-top: 5vh;
  `}
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 40vw;
  height: 35vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  font-family: Poppins;
  font-style: thin;
  color: #000000;
  text-align: center;
  img {
    width: 200px;
    /* height: 60%; */
    position: absolute;
    top: -45%;
    left: 33%;
  }
  .name {
    font-weight: 300;
    font-size: 48px;
    letter-spacing: 0.21em;
    padding: 8vh 0 0 0;
  }
  .title {
    font-weight: 200;
    font-size: 32px;
    line-height: 132%;
    margin: 10px 0 0 0;
    letter-spacing: 0.21em;
    color: #6c6a6a;
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 25px auto;
    /* or 32px */

    letter-spacing: 0.03em;
  }
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 90%;
  height: 45vh;
  img {
    width: 30%;
    /* height: 60%; */
    position: absolute;
    top: -15%;
    left: 33%;
  }
  .name { 
    font-size:32px;
    padding: 7vh 0 0 0;
  }
  .title { 
    font-size: 24px;   
    margin: 5px 0 0 0;  
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 5px auto;
    /* or 32px */

  }
  `}
  ${styled_media_query__WEBPACK_IMPORTED_MODULE_2___default.a.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90%;
  height: 45vh;
  img {
    width: 25%;
   
    position: absolute;
    top: -35%;
    left: 38%;
  }
  .name { 
    font-size:32px;
    padding: 7vh 0 0 0;
  }
  .title { 
    font-size: 24px;   
    margin: 5px 0 0 0;  
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 5px auto;
    /* or 32px */
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_about_AboutBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about/AboutBanner */ "./components/about/AboutBanner.js");
/* harmony import */ var _components_about_AboutContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/about/AboutContent */ "./components/about/AboutContent.js");
/* harmony import */ var _components_UI_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UI/Footer */ "./components/UI/Footer.js");
var _jsxFileName = "C:\\Users\\Laka Ganth\\Documents\\NextJS\\sam\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const about = () => {
  return __jsx("div", {
    className: "jsx-633493357",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "Sam's Auto | About"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:200,300|Quicksand|Racing+Sans+One&display=swap",
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
  }, __jsx(_components_about_AboutBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_components_about_AboutContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_UI_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "633493357",
    __self: undefined
  }, "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGFrYSBHYW50aFxcRG9jdW1lbnRzXFxOZXh0SlNcXHNhbVxccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCeUIsQUFHb0IsU0FDQyxVQUNZLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXExha2EgR2FudGhcXERvY3VtZW50c1xcTmV4dEpTXFxzYW1cXHBhZ2VzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQWJvdXRCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXQvQWJvdXRCYW5uZXJcIjtcclxuaW1wb3J0IEFib3V0Q29udGVudCBmcm9tIFwiLi8uLi9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29udGVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TYW0ncyBBdXRvIHwgQWJvdXQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDMwMHxRdWlja3NhbmR8UmFjaW5nK1NhbnMrT25lJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxBYm91dEJhbm5lciAvPlxyXG4gICAgICAgIDxBYm91dENvbnRlbnQgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Laka Ganth\\\\Documents\\\\NextJS\\\\sam\\\\pages\\\\about.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (about);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100vw;
  height: 100vh;
  line-height: 1.3;
  overflow-x: hidden;
`;

/***/ }),

/***/ "./public/static/images/about/guru.png":
/*!*********************************************!*\
  !*** ./public/static/images/about/guru.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/guru-c45f848e8fd10a8519454301e61a8cdd.png";

/***/ }),

/***/ "./public/static/images/about/harsha.png":
/*!***********************************************!*\
  !*** ./public/static/images/about/harsha.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/harsha-b64273a28355028f3428f3fdbf8cba76.png";

/***/ }),

/***/ "./public/static/images/about/laka.png":
/*!*********************************************!*\
  !*** ./public/static/images/about/laka.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laka-7f373fc396485b7a6a01521515373848.png";

/***/ }),

/***/ "./public/static/images/about/samavatar.png":
/*!**************************************************!*\
  !*** ./public/static/images/about/samavatar.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/samavatar-eadb24eb6358a878bf22dfdee6be6c77.png";

/***/ }),

/***/ "./public/static/images/about/sathya.png":
/*!***********************************************!*\
  !*** ./public/static/images/about/sathya.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sathya-b1731b6d32625d1e82598fb1df0a1fbe.png";

/***/ }),

/***/ "./public/static/images/icons/samlogo.svg":
/*!************************************************!*\
  !*** ./public/static/images/icons/samlogo.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNzIgODUuMTEiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ze2ZpbGw6I2ZmZjt9LmNscy0xLC5jbHMtMntzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0ye2ZpbGw6I2VkMWMyNDt9LmNscy0ze2ZvbnQtc2l6ZTo3MS42cHg7bGV0dGVyLXNwYWNpbmc6MC4wN2VtO30uY2xzLTMsLmNscy00e2ZvbnQtZmFtaWx5OlZDUk9TRE1vbm8sIFZDUiBPU0QgTW9ubzt9LmNscy00e2ZvbnQtc2l6ZTo3NS45cHg7ZmlsbDojMjMxZjIwO2xldHRlci1zcGFjaW5nOjAuMDdlbTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDI8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjM3My45NyA4My42OSAxNzYuNzEgODMuNjkgMTk3LjgxIDAuNSAzOTUuMDcgMC41IDM3My45NyA4My42OSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxOTcuOTEgODMuNjkgMC42NCA4My42OSAyMS43NSAwLjUgMjE5LjAxIDAuNSAxOTcuOTEgODMuNjkiLz48dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjM4IDc2LjcpIHNjYWxlKDEuMTkgMSkiPlNBTTwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxOS4wMSA3Ny43KSBzY2FsZSgwLjc5IDEpIj5BVVRPPC90ZXh0PjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./public/static/images/landing/facebook.svg":
/*!***************************************************!*\
  !*** ./public/static/images/landing/facebook.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljk5NjQgMjIuNDk4M0M0NC45OTY0IDEwLjA3MjggMzQuOTIzNyAwIDIyLjQ5ODMgMEMxMC4wNzI4IDAgMCAxMC4wNzI4IDAgMjIuNDk4M0MwIDMzLjcyNzkgOC4yMjcyOSA0My4wMzU0IDE4Ljk4MjkgNDQuNzIzM1YyOS4wMDE4SDEzLjI3MDVWMjIuNDk4M0gxOC45ODI5VjE3LjU0MTZDMTguOTgyOSAxMS45MDMgMjIuMzQxNyA4Ljc4ODM5IDI3LjQ4MDcgOC43ODgzOUMyOS45NDIyIDguNzg4MzkgMzIuNTE3IDkuMjI3NzkgMzIuNTE3IDkuMjI3NzlWMTQuNzY0NUgyOS42ODAxQzI2Ljg4NTMgMTQuNzY0NSAyNi4wMTM2IDE2LjQ5ODcgMjYuMDEzNiAxOC4yNzhWMjIuNDk4M0gzMi4yNTM0TDMxLjI1NTkgMjkuMDAxOEgyNi4wMTM2VjQ0LjcyMzNDMzYuNzY5MyA0My4wMzU0IDQ0Ljk5NjQgMzMuNzI3OSA0NC45OTY0IDIyLjQ5ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

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

/***/ "./public/static/images/landing/phone.svg":
/*!************************************************!*\
  !*** ./public/static/images/landing/phone.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0zNS44NDY1IDYuMTQ4MDNDMjcuNjQ0MyAtMi4wNTE3MyAxNC4zNDc4IC0yLjA0OTc2IDYuMTQ4MDMgNi4xNTI1NEMtMi4wNTE3MyAxNC4zNTQ4IC0yLjA0OTc2IDI3LjY1MTMgNi4xNTI1NCAzNS44NTExQzE0LjM1NDggNDQuMDUwOCAyNy42NTEzIDQ0LjA0ODggMzUuODUxMSAzNS44NDY1QzM5Ljc4OSAzMS45MDczIDQyLjAwMDggMjYuNTY1IDQxLjk5OTUgMjAuOTk1QzQxLjk5ODQgMTUuNDI1OSAzOS43ODUxIDEwLjA4NTQgMzUuODQ2NSA2LjE0ODAzWk0zMS44MDMzIDI5LjI1MjNDMzEuODAyNCAyOS4yNTMyIDMxLjgwMTUgMjkuMjU0MiAzMS44MDA1IDI5LjI1NTFWMjkuMjQ4MUwzMC43MzY1IDMwLjMwNTFDMjkuMzYwNCAzMS42OTg1IDI3LjM1NjMgMzIuMjcxOSAyNS40NTE1IDMxLjgxNzFDMjMuNTMyMyAzMS4zMDM0IDIxLjcwOCAzMC40ODU3IDIwLjA0NzUgMjkuMzk1MUMxOC41MDQ4IDI4LjQwOTIgMTcuMDc1MiAyNy4yNTY2IDE1Ljc4NDUgMjUuOTU4MUMxNC41OTY5IDI0Ljc3OTIgMTMuNTMgMjMuNDg0OCAxMi41OTk1IDIyLjA5NDFDMTEuNTgxNiAyMC41OTc3IDEwLjc3NiAxOC45Njc1IDEwLjIwNTUgMTcuMjUwMUM5LjU1MTQyIDE1LjIzMjQgMTAuMDkzNCAxMy4wMTg1IDExLjYwNTUgMTEuNTMxMUwxMi44NTE1IDEwLjI4NTFDMTMuMTk3OSA5LjkzNzE0IDEzLjc2MDggOS45MzU5MSAxNC4xMDg3IDEwLjI4MjNDMTQuMTA5NiAxMC4yODMyIDE0LjExMDYgMTAuMjg0MSAxNC4xMTE1IDEwLjI4NTFMMTguMDQ1NCAxNC4yMTkxQzE4LjM5MzQgMTQuNTY1NSAxOC4zOTQ2IDE1LjEyODQgMTguMDQ4MiAxNS40NzYzQzE4LjA0NzMgMTUuNDc3MiAxOC4wNDY0IDE1LjQ3ODEgMTguMDQ1NCAxNS40NzkxTDE1LjczNTQgMTcuNzg5MUMxNS4wNzI2IDE4LjQ0NDcgMTQuOTg5MyAxOS40ODY1IDE1LjUzOTUgMjAuMjM5MUMxNi4zNzQ5IDIxLjM4NTcgMTcuMjk5NSAyMi40NjQ3IDE4LjMwNDUgMjMuNDY2MUMxOS40MjUgMjQuNTkxNCAyMC42NDMgMjUuNjE1MSAyMS45NDQ1IDI2LjUyNTJDMjIuNjk2NCAyNy4wNDk3IDIzLjcxNTkgMjYuOTYxMiAyNC4zNjY0IDI2LjMxNTJMMjYuNTk5NCAyNC4wNDcyQzI2Ljk0NTggMjMuNjk5MiAyNy41MDg3IDIzLjY5OCAyNy44NTY2IDI0LjA0NDRDMjcuODU3NSAyNC4wNDUzIDI3Ljg1ODQgMjQuMDQ2MiAyNy44NTk0IDI0LjA0NzJMMzEuODAwNCAyNy45OTUyQzMyLjE0ODUgMjguMzQxNSAzMi4xNDk3IDI4LjkwNDMgMzEuODAzMyAyOS4yNTIzWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Laka Ganth\Documents\NextJS\sam\pages\about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map
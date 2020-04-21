webpackHotUpdate("static\\development\\pages\\contact.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50%;\n  height: 100vh;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 15px;\n  p {\n    font-family: Quicksand;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 80px;\n    line-height: 100px;\n    /* identical to box height */\n    padding: 50px 0 0px 0;\n    text-align: center;\n    letter-spacing: 0.345em;\n    /* margin: 25px auto; */\n    color: #767676;\n  }\n  button {\n    width: 155px;\n    height: 51px;\n    background-color: #ff3838;\n    color: #ffffff;\n    font-size: 24px;\n    border: none;\n    margin: 0 40%;\n    /* box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1); */\n  }\n  ", "\n\n  ", "\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* screen width is less than 450px (small) */\n    height: 100vh;\n    padding: 0vh 0;\n  "]);

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

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(FormBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Contact Form"), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "phone-input",
    type: "text",
    name: "email",
    value: phone,
    placeholder: "Phone",
    onChange: function onChange(phone) {
      return setPhone(phone.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(InputGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject3()));
var FormBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].between("small", "medium")(_templateObject6()));
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7(), styled_media_query__WEBPACK_IMPORTED_MODULE_4__["default"].lessThan("small")(_templateObject8()));

/***/ })

})
//# sourceMappingURL=contact.js.80254bb679f121a07317.hot-update.js.map
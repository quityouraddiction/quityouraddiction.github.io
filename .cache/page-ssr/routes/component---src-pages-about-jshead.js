exports.id = "component---src-pages-about-jshead";
exports.ids = ["component---src-pages-about-jshead"];
exports.modules = {

/***/ "./content/addiction101/blog-1.mdx":
/*!*****************************************!*\
  !*** ./content/addiction101/blog-1.mdx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "this is our header")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "p-10"
  }, "lorem lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet et consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor s'"));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "footer"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header/hamburger.js":
/*!********************************************!*\
  !*** ./src/components/header/hamburger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/hamburger_icon.svg */ "./src/images/hamburger_icon.svg");
/* harmony import */ var _images_hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/close_icon.svg */ "./src/images/close_icon.svg");
/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");




const Hamburger = ({
  toggleMenu,
  isOpen
}) => {
  const {
    scrollY
  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)();
  const width = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [0, 100], [30, 25.2]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
    className: "stroke-black w-9 h-8 self-center hover:fill-orange-600 hover:stroke-orange-600",
    style: {
      width
    },
    onClick: toggleMenu
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_1___default()), null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/header/menu.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileMenu */ "./src/components/header/mobileMenu.js");



const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed top-0 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-md:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/header/menu.js":
/*!***************************************!*\
  !*** ./src/components/header/menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _navItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navItem.js */ "./src/components/header/navItem.js");
/* harmony import */ var _images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/quit-your-addiction-logo.svg */ "./src/images/quit-your-addiction-logo.svg");
/* harmony import */ var _images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/search_icon.svg */ "./src/images/search_icon.svg");
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_search_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_email_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/email_icon.svg */ "./src/images/email_icon.svg");
/* harmony import */ var _images_email_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_5__);







const Menu = () => {
  const {
    scrollY
  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)();
  const marginTop = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollY, [0, 100], [0, -40]);
  const width = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollY, [0, 100], [100, 0]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center justify-center p-5 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
    style: {
      width
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_3___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
    style: {
      marginTop
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex whitespace-nowrap items-center justify-center gap-12 mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Addiction 101"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Recovery Process"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Inspiration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#E27022] p-2 shadow-md rounded-xl flex gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {
    whileHover: {
      scale: 1.1
    },
    className: "fill-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_search_icon_svg__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {
    whileHover: {
      scale: 1.1
    },
    className: "fill-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_5___default()), null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/header/mobileMenu.js":
/*!*********************************************!*\
  !*** ./src/components/header/mobileMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.js */ "./src/components/header/hamburger.js");
/* harmony import */ var _navItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navItem.js */ "./src/components/header/navItem.js");
/* harmony import */ var _socialmedial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socialmedial.js */ "./src/components/header/socialmedial.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/search_icon.svg */ "./src/images/search_icon.svg");
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_search_icon_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_email_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/email_icon.svg */ "./src/images/email_icon.svg");
/* harmony import */ var _images_email_icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/quit-your-addiction-logo.svg */ "./src/images/quit-your-addiction-logo.svg");
/* harmony import */ var _images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_7__);

// import Logo from "./logo.js";








const MobileMenu = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const {
    scrollY
  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll)();
  const width = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollY, [0, 100], [112, 78.4]);
  const padding = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollY, [0, 100], [40, 28]);
  const handleClickOutside = event => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    className: "bg-white flex justify-between p-10",
    style: {
      padding
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    style: {
      width
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_quit_your_addiction_logo_svg__WEBPACK_IMPORTED_MODULE_7___default()), {
    key: "mobile"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_hamburger_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toggleMenu: toggleMenu,
    isOpen: isOpen
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, null, isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    },
    transition: {
      duration: 0.3
    },
    ref: menuRef,
    className: "flex justify-between bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "self-center p-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_socialmedial_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.nav, {
    className: "flex justify-end text-right "

    // style={{ padding }}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.ul, {
    className: "flex flex-col gap-5 p-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/"
  }, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/"
  }, "Addiction 101"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/"
  }, "Recovery Process"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/"
  }, "Inspiration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_search_icon_svg__WEBPACK_IMPORTED_MODULE_5___default()), {
    className: "fill-orange-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_6___default()), {
    className: "fill-orange-500"
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/components/header/navItem.js":
/*!******************************************!*\
  !*** ./src/components/header/navItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



const NavItem = ({
  to,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    className: "text-lg font-semibold ",
    whileHover: {
      scale: 1.1,
      color: "#E27022"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: to
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./src/components/header/socialmedial.js":
/*!***********************************************!*\
  !*** ./src/components/header/socialmedial.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _images_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/facebook_icon.svg */ "./src/images/facebook_icon.svg");
/* harmony import */ var _images_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/insta_icon.svg */ "./src/images/insta_icon.svg");
/* harmony import */ var _images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_x_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/x_icon.svg */ "./src/images/x_icon.svg");
/* harmony import */ var _images_x_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_4__);






const ScocialMediaIcons = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
    whileHover: {
      scale: 1.2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
    whileHover: {
      scale: 1.2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_3___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
    whileHover: {
      scale: 1.2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_4___default()), null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScocialMediaIcons);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");



const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], null)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "h-16"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/about.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/about.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _content_addiction101_blog_1_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/addiction101/blog-1.mdx */ "./content/addiction101/blog-1.mdx");



const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "About Us"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_content_addiction101_blog_1_mdx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "About Us");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/images/close_icon.svg":
/*!***********************************!*\
  !*** ./src/images/close_icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function CloseIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M15.0171 19.0598L25.12 29.1628C25.6561 29.6989 26.3832 30 27.1414 30C27.8995 30 28.6266 29.6989 29.1627 29.1628C29.6988 28.6267 30 27.8996 30 27.1414C30 26.3833 29.6988 25.6562 29.1627 25.1201L19.056 15.0171L29.1608 4.91418C29.4261 4.64873 29.6366 4.33362 29.7801 3.98685C29.9237 3.64007 29.9975 3.26842 29.9974 2.8931C29.9973 2.51779 29.9233 2.14617 29.7796 1.79947C29.6359 1.45276 29.4253 1.13775 29.1599 0.872428C28.8944 0.607105 28.5793 0.396665 28.2325 0.253121C27.8858 0.109578 27.5141 0.0357422 27.1388 0.0358306C26.7635 0.0359191 26.3919 0.109929 26.0452 0.253636C25.6985 0.397343 25.3834 0.607933 25.1181 0.873381L15.0171 10.9763L4.91414 0.873381C4.65066 0.600319 4.33543 0.382467 3.98685 0.232535C3.63827 0.0826036 3.26332 0.00359478 2.88388 0.00011984C2.50443 -0.0033551 2.1281 0.0687728 1.77683 0.212295C1.42557 0.355817 1.1064 0.56786 0.837955 0.83605C0.569512 1.10424 0.357169 1.42321 0.213316 1.77434C0.069462 2.12547 -0.00302071 2.50174 9.64319e-05 2.88118C0.00321357 3.26063 0.0818679 3.63565 0.231471 3.98437C0.381074 4.33309 0.598628 4.64853 0.871441 4.91227L10.9782 15.0171L0.873347 25.122C0.600534 25.3857 0.382979 25.7011 0.233377 26.0499C0.0837738 26.3986 0.00511857 26.7736 0.00200143 27.1531C-0.00111571 27.5325 0.071367 27.9088 0.215221 28.2599C0.359074 28.611 0.571417 28.93 0.83986 29.1982C1.1083 29.4664 1.42747 29.6784 1.77874 29.8219C2.13001 29.9655 2.50634 30.0376 2.88578 30.0341C3.26522 30.0306 3.64017 29.9516 3.98875 29.8017C4.33733 29.6518 4.65256 29.4339 4.91605 29.1609L15.0171 19.0617V19.0598Z","strokeWidth":"0"}));
}

CloseIcon.defaultProps = {"viewBox":"0 0 30 31"};

module.exports = CloseIcon;

CloseIcon.default = CloseIcon;


/***/ }),

/***/ "./src/images/email_icon.svg":
/*!***********************************!*\
  !*** ./src/images/email_icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function EmailIcon (props) {
    return React.createElement("svg",props,React.createElement("g",{"id":"email_icon"},React.createElement("path",{"id":"Vector","d":"M0 5.91361V12.5939C0 13.774 0.395088 14.9058 1.09835 15.7402C1.80161 16.5747 2.75544 17.0435 3.75 17.0435H16.25C17.2446 17.0435 18.1984 16.5747 18.9017 15.7402C19.6049 14.9058 20 13.774 20 12.5939V5.91361L10.5125 10.9802C10.3514 11.0662 10.1767 11.1106 10 11.1106C9.82332 11.1106 9.64865 11.0662 9.4875 10.9802L0 5.91361ZM0.092428 4.42129L5.04618 7.0673L9.99993 9.71332L19.9074 4.42129C19.7192 3.43726 19.2547 2.55836 18.5901 1.9288C17.9255 1.29924 17.1003 0.956407 16.2499 0.956543H3.74993C2.89952 0.956407 2.07433 1.29924 1.40975 1.9288C0.745162 2.55836 0.280651 3.43726 0.092428 4.42129Z"})));
}

EmailIcon.defaultProps = {"width":"20","height":"18","viewBox":"0 0 20 18"};

module.exports = EmailIcon;

EmailIcon.default = EmailIcon;


/***/ }),

/***/ "./src/images/facebook_icon.svg":
/*!**************************************!*\
  !*** ./src/images/facebook_icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function FacebookIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M17.7787 0H2.22125C1.63267 0.00172018 1.06868 0.236289 0.65249 0.652483C0.236296 1.06868 0.00172018 1.63266 0 2.22125V17.7787C0.00172018 18.3673 0.236296 18.9313 0.65249 19.3475C1.06868 19.7637 1.63267 19.9983 2.22125 20H10V12.2213H7.77874V9.47184H10V7.19408C10 4.79026 11.3475 3.10149 14.1839 3.10149H16.1878V5.99651H14.8576C13.7535 5.99651 13.3362 6.8246 13.3362 7.594V9.47184H16.19L15.5488 12.2213H13.3341V20H17.7787C18.3673 19.9983 18.9313 19.7637 19.3475 19.3475C19.7637 18.9313 19.9983 18.3673 20 17.7787V2.22125C19.9983 1.63266 19.7637 1.06868 19.3475 0.652483C18.9313 0.236289 18.3673 0.00172018 17.7787 0ZM19.348 17.7787C19.3474 18.1947 19.1819 18.5935 18.8877 18.8877C18.5936 19.1819 18.1948 19.3474 17.7787 19.348H13.9861V12.8733H16.0748L16.19 12.3669L16.8224 9.61964L17.0072 8.82199H13.9861V7.59616C13.9861 7.24189 14.0991 6.65072 14.8555 6.65072H16.8376V2.45163H14.1839C11.1563 2.45163 9.34797 4.22516 9.34797 7.19626V8.82199H7.12671V12.8755H9.34797V19.3501H2.22125C1.80525 19.3496 1.40644 19.184 1.11228 18.8899C0.818118 18.5957 0.652607 18.1969 0.652032 17.7809V2.22125C0.652607 1.80524 0.818118 1.40643 1.11228 1.11227C1.40644 0.818108 1.80525 0.652607 2.22125 0.652032H17.7787C18.1948 0.652607 18.5936 0.818108 18.8877 1.11227C19.1819 1.40643 19.3474 1.80524 19.348 2.22125V17.7787Z","fill":"#E27023","key":0}),React.createElement("path",{"d":"M17.7787 0H2.22125C1.63267 0.00172018 1.06868 0.236289 0.65249 0.652483C0.236296 1.06868 0.00172018 1.63266 0 2.22125V17.7787C0.00172018 18.3673 0.236296 18.9313 0.65249 19.3475C1.06868 19.7637 1.63267 19.9983 2.22125 20H10V12.2213H7.77874V9.47184H10V7.19408C10 4.79026 11.3475 3.10149 14.1839 3.10149H16.1878V5.99651H14.8576C13.7535 5.99651 13.3362 6.8246 13.3362 7.594V9.47184H16.19L15.5488 12.2213H13.3341V20H17.7787C18.3673 19.9983 18.9313 19.7637 19.3475 19.3475C19.7637 18.9313 19.9983 18.3673 20 17.7787V2.22125C19.9983 1.63266 19.7637 1.06868 19.3475 0.652483C18.9313 0.236289 18.3673 0.00172018 17.7787 0ZM19.348 17.7787C19.3474 18.1947 19.1819 18.5935 18.8877 18.8877C18.5936 19.1819 18.1948 19.3474 17.7787 19.348H13.9861V12.8733H16.0748L16.19 12.3669L16.8224 9.61964L17.0072 8.82199H13.9861V7.59616C13.9861 7.24189 14.0991 6.65072 14.8555 6.65072H16.8376V2.45163H14.1839C11.1563 2.45163 9.34797 4.22516 9.34797 7.19626V8.82199H7.12671V12.8755H9.34797V19.3501H2.22125C1.80525 19.3496 1.40644 19.184 1.11228 18.8899C0.818118 18.5957 0.652607 18.1969 0.652032 17.7809V2.22125C0.652607 1.80524 0.818118 1.40643 1.11228 1.11227C1.40644 0.818108 1.80525 0.652607 2.22125 0.652032H17.7787C18.1948 0.652607 18.5936 0.818108 18.8877 1.11227C19.1819 1.40643 19.3474 1.80524 19.348 2.22125V17.7787Z","fill":"black","key":1}),React.createElement("path",{"d":"M19.348 2.2212V17.7787C19.3474 18.1947 19.1819 18.5935 18.8877 18.8877C18.5936 19.1818 18.1948 19.3473 17.7788 19.3479H13.9861V12.8732H16.0748L16.19 12.3668L16.8224 9.61958L17.0072 8.82193H13.9861V7.59611C13.9861 7.24184 14.0991 6.65067 14.8555 6.65067H16.8376V2.45158H14.1839C11.1563 2.45158 9.34797 4.22511 9.34797 7.1962V8.82193H7.12672V12.8754H9.34797V19.3501H2.22126C1.80525 19.3495 1.40645 19.184 1.11229 18.8898C0.818124 18.5957 0.652614 18.1969 0.652039 17.7809V2.2212C0.652614 1.80519 0.818124 1.40638 1.11229 1.11222C1.40645 0.818053 1.80525 0.652553 2.22126 0.651978H17.7788C18.1948 0.652553 18.5936 0.818053 18.8877 1.11222C19.1819 1.40638 19.3474 1.80519 19.348 2.2212Z","fill":"#E27023","key":2})]);
}

FacebookIcon.defaultProps = {"width":"30","height":"30","viewBox":"0 0 20 20","fill":"none"};

module.exports = FacebookIcon;

FacebookIcon.default = FacebookIcon;


/***/ }),

/***/ "./src/images/hamburger_icon.svg":
/*!***************************************!*\
  !*** ./src/images/hamburger_icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function HamburgerIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M3 3H8.625M33 3H16.125M33 21H27.375M3 21H19.875M3 12H33","strokeWidth":"5","strokeLinecap":"round"}));
}

HamburgerIcon.defaultProps = {"viewBox":"0 0 36 24"};

module.exports = HamburgerIcon;

HamburgerIcon.default = HamburgerIcon;


/***/ }),

/***/ "./src/images/insta_icon.svg":
/*!***********************************!*\
  !*** ./src/images/insta_icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function InstaIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M12.4538 8.9838C12.2522 8.49891 11.9116 8.08454 11.4749 7.79289C11.0383 7.50124 10.5251 7.34535 10 7.34485C9.60686 7.34421 9.21849 7.43085 8.8629 7.59854C8.50732 7.76623 8.19339 8.01078 7.94377 8.31454C7.69416 8.61829 7.51508 8.97368 7.41947 9.35505C7.32385 9.73642 7.31408 10.1343 7.39087 10.5199C7.46765 10.9055 7.62907 11.2692 7.86348 11.5849C8.09789 11.9005 8.39944 12.1602 8.74637 12.3451C9.0933 12.5301 9.47695 12.6357 9.86965 12.6543C10.2623 12.673 10.6543 12.6042 11.0172 12.453C11.3428 12.3215 11.6385 12.1255 11.8865 11.877C12.258 11.5058 12.5109 11.0328 12.6135 10.5178C12.716 10.0028 12.6635 9.46893 12.4625 8.9838H12.4538ZM11.8518 10.7662C11.7508 11.0099 11.6032 11.2314 11.4171 11.4183C11.2306 11.6049 11.009 11.7527 10.7651 11.8531C10.4002 12.0025 9.99936 12.0409 9.61276 11.9636C9.22616 11.8862 8.87095 11.6966 8.59161 11.4183C8.21786 11.0431 8.00802 10.5351 8.00802 10.0054C8.00802 9.4758 8.21786 8.96775 8.59161 8.59254C8.96762 8.22033 9.4753 8.01154 10.0043 8.01154C10.5334 8.01154 11.0411 8.22033 11.4171 8.59254C11.6953 8.87191 11.885 9.22715 11.9623 9.6138C12.0396 10.0004 12.0012 10.4013 11.8518 10.7662ZM12.4538 8.9838C12.2522 8.49891 11.9116 8.08454 11.4749 7.79289C11.0383 7.50124 10.5251 7.34535 10 7.34485C9.60686 7.34421 9.21849 7.43085 8.8629 7.59854C8.50732 7.76623 8.19339 8.01078 7.94377 8.31454C7.69416 8.61829 7.51508 8.97368 7.41947 9.35505C7.32385 9.73642 7.31408 10.1343 7.39087 10.5199C7.46765 10.9055 7.62907 11.2692 7.86348 11.5849C8.09789 11.9005 8.39944 12.1602 8.74637 12.3451C9.0933 12.5301 9.47695 12.6357 9.86965 12.6543C10.2623 12.673 10.6543 12.6042 11.0172 12.453C11.3428 12.3215 11.6385 12.1255 11.8865 11.877C12.258 11.5058 12.5109 11.0328 12.6135 10.5178C12.716 10.0028 12.6635 9.46893 12.4625 8.9838H12.4538ZM11.8518 10.7662C11.7508 11.0099 11.6032 11.2314 11.4171 11.4183C11.2306 11.6049 11.009 11.7527 10.7651 11.8531C10.4002 12.0025 9.99936 12.0409 9.61276 11.9636C9.22616 11.8862 8.87095 11.6966 8.59161 11.4183C8.21786 11.0431 8.00802 10.5351 8.00802 10.0054C8.00802 9.4758 8.21786 8.96775 8.59161 8.59254C8.96762 8.22033 9.4753 8.01154 10.0043 8.01154C10.5334 8.01154 11.0411 8.22033 11.4171 8.59254C11.6953 8.87191 11.885 9.22715 11.9623 9.6138C12.0396 10.0004 12.0012 10.4013 11.8518 10.7662ZM15.89 6.5971C16.2197 6.26733 16.4049 5.82008 16.4049 5.35375C16.4049 4.88742 16.2197 4.44019 15.89 4.11042C15.5603 3.7807 15.1131 3.59547 14.6468 3.59547C14.1805 3.59547 13.7333 3.7807 13.4036 4.11042C13.0747 4.44069 12.8895 4.88758 12.8885 5.35375C12.8886 5.53303 12.9165 5.71121 12.9711 5.88197C12.1075 5.25534 11.067 4.91962 10 4.92337C9.33318 4.92308 8.67283 5.05423 8.05672 5.30931C7.4406 5.56439 6.88078 5.93839 6.40927 6.40996C5.93776 6.88152 5.56378 7.4414 5.30874 8.05758C5.05369 8.67377 4.92256 9.33418 4.92284 10.0011C4.92099 10.6679 5.05143 11.3284 5.30662 11.9444C5.5618 12.5604 5.93666 13.1197 6.40948 13.5898C7.36231 14.5426 8.65262 15.0808 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971ZM14.4251 10.0011C14.4266 11.0242 14.0734 12.0162 13.4256 12.8081C12.7779 13.6001 11.8757 14.143 10.8727 14.3443C9.86968 14.5457 8.82789 14.3931 7.92473 13.9126C7.02158 13.432 6.31292 12.6532 5.91945 11.7087C5.52598 10.7643 5.47203 9.71266 5.76679 8.73292C6.06155 7.75317 6.68678 6.90592 7.53602 6.33544C8.38525 5.76496 9.40596 5.50653 10.4243 5.60418C11.4427 5.70183 12.3957 6.14952 13.1211 6.87099C13.5335 7.28137 13.861 7.76907 14.0847 8.30617C14.3085 8.84327 14.4242 9.41922 14.4251 10.0011ZM13.8644 6.13628C13.7096 5.98155 13.6042 5.78437 13.5615 5.5697C13.5187 5.35503 13.5406 5.13252 13.6244 4.93031C13.7082 4.7281 13.85 4.55528 14.032 4.43371C14.214 4.31214 14.428 4.24729 14.6468 4.24736C14.7921 4.24736 14.936 4.27598 15.0702 4.33158C15.2044 4.38718 15.3263 4.46868 15.4291 4.57142C15.5318 4.67416 15.6133 4.79613 15.6689 4.93036C15.7245 5.0646 15.7531 5.20846 15.7531 5.35375C15.7531 5.49905 15.7245 5.64292 15.6689 5.77716C15.6133 5.91139 15.5318 6.03336 15.4291 6.1361C15.3263 6.23884 15.2044 6.32034 15.0702 6.37594C14.936 6.43154 14.7921 6.46016 14.6468 6.46016C14.3535 6.45954 14.0723 6.34315 13.8644 6.13628ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.5603 3.78939 15.1131 3.60416 14.6468 3.60416C14.1805 3.60416 13.7333 3.78939 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971V6.60579ZM14.4251 10.0098C14.4266 11.0329 14.0734 12.0249 13.4256 12.8168C12.7779 13.6088 11.8757 14.1516 10.8727 14.353C9.86968 14.5544 8.82789 14.4018 7.92473 13.9212C7.02158 13.4407 6.31292 12.6619 5.91945 11.7174C5.52598 10.773 5.47203 9.72136 5.76679 8.74162C6.06155 7.76187 6.68678 6.91461 7.53602 6.34413C8.38525 5.77365 9.40596 5.51522 10.4243 5.61287C11.4427 5.71052 12.3957 6.15821 13.1211 6.87968C13.9519 7.70638 14.4209 8.82895 14.4251 10.0011V10.0098ZM13.8644 6.14497C13.7096 5.99024 13.6042 5.79307 13.5615 5.5784C13.5187 5.36374 13.5406 5.14121 13.6244 4.939C13.7082 4.73679 13.85 4.56397 14.032 4.4424C14.214 4.32083 14.428 4.25598 14.6468 4.25605C14.9402 4.25605 15.2216 4.37262 15.4291 4.58011C15.6365 4.7876 15.7531 5.06902 15.7531 5.36246C15.7531 5.65589 15.6365 5.93731 15.4291 6.1448C15.2216 6.35229 14.9402 6.46885 14.6468 6.46885C14.3523 6.46593 14.0709 6.34634 13.8644 6.13628V6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.6792 0.00868993H4.3208C3.17636 0.00868761 2.07866 0.462761 1.2686 1.27128C0.458544 2.07979 0.0023027 3.17669 0 4.32126V15.6809C0.000576243 16.8266 0.456056 17.9252 1.2663 18.7351C2.07654 19.545 3.17523 20 4.3208 20H15.6792C16.8248 20 17.9235 19.545 18.7337 18.7351C19.5439 17.9252 19.9994 16.8266 20 15.6809V4.32126C19.9994 3.17536 19.544 2.07657 18.7338 1.2663C17.9236 0.456032 16.825 0.000575972 15.6792 0V0.00868993ZM19.348 15.6896C19.3462 16.662 18.9591 17.594 18.2714 18.2814C17.5837 18.9688 16.6515 19.3554 15.6792 19.3566H4.3208C3.83854 19.3563 3.36107 19.261 2.91565 19.0761C2.47024 18.8912 2.06562 18.6203 1.72492 18.279C1.38421 17.9376 1.1141 17.5325 0.930008 17.0867C0.745918 16.6409 0.651461 16.1632 0.652032 15.6809V4.32126C0.653183 3.34849 1.04008 2.41589 1.72786 1.72804C2.41564 1.04018 3.34813 0.653253 4.3208 0.652103H15.6792C16.6519 0.653253 17.5844 1.04018 18.2721 1.72804C18.9599 2.41589 19.3468 3.34849 19.348 4.32126V15.6896ZM14.6468 3.60416C14.4158 3.60311 14.1868 3.64791 13.9734 3.73636C13.7599 3.82482 13.5662 3.95493 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8779 7.122 15.1068 7.07699 15.3203 6.98853C15.5337 6.90008 15.7274 6.76997 15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.7281 3.95336 15.5348 3.82164 15.3213 3.73168C15.1078 3.64172 14.8785 3.59555 14.6468 3.59547V3.60416ZM14.4295 10.0098C14.4309 11.0329 14.0777 12.0249 13.43 12.8168C12.7823 13.6088 11.8801 14.1516 10.877 14.353C9.87403 14.5544 8.83223 14.4018 7.92908 13.9212C7.02593 13.4407 6.31727 12.6619 5.9238 11.7174C5.53033 10.773 5.47638 9.72136 5.77114 8.74162C6.06589 7.76187 6.69113 6.91461 7.54037 6.34413C8.3896 5.77365 9.41031 5.51522 10.4287 5.61287C11.447 5.71052 12.4 6.15821 13.1254 6.87968C13.9547 7.70709 14.422 8.82958 14.4251 10.0011L14.4295 10.0098ZM15.4336 6.14497C15.2527 6.32601 15.0146 6.43871 14.7599 6.46386C14.5052 6.48901 14.2496 6.42507 14.0368 6.28291C13.8239 6.14076 13.667 5.92919 13.5926 5.68426C13.5182 5.43934 13.5311 5.17621 13.629 4.9397C13.7269 4.70319 13.9037 4.50793 14.1294 4.38721C14.3551 4.26648 14.6156 4.22775 14.8667 4.27761C15.1177 4.32747 15.3437 4.46284 15.5061 4.66065C15.6685 4.85847 15.7574 5.10649 15.7574 5.36246C15.7539 5.65348 15.636 5.93143 15.4293 6.13628L15.4336 6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749Z","fill":"#E27023","key":0}),React.createElement("path",{"d":"M12.4538 8.9838C12.2522 8.49891 11.9116 8.08454 11.4749 7.79289C11.0383 7.50124 10.5251 7.34535 10 7.34485C9.60686 7.34421 9.21849 7.43085 8.8629 7.59854C8.50732 7.76623 8.19339 8.01078 7.94377 8.31454C7.69416 8.61829 7.51508 8.97368 7.41947 9.35505C7.32385 9.73642 7.31408 10.1343 7.39087 10.5199C7.46765 10.9055 7.62907 11.2692 7.86348 11.5849C8.09789 11.9005 8.39944 12.1602 8.74637 12.3451C9.0933 12.5301 9.47695 12.6357 9.86965 12.6543C10.2623 12.673 10.6543 12.6042 11.0172 12.453C11.3428 12.3215 11.6385 12.1255 11.8865 11.877C12.258 11.5058 12.5109 11.0328 12.6135 10.5178C12.716 10.0028 12.6635 9.46893 12.4625 8.9838H12.4538ZM11.8518 10.7662C11.7508 11.0099 11.6032 11.2314 11.4171 11.4183C11.2306 11.6049 11.009 11.7527 10.7651 11.8531C10.4002 12.0025 9.99936 12.0409 9.61276 11.9636C9.22616 11.8862 8.87095 11.6966 8.59161 11.4183C8.21786 11.0431 8.00802 10.5351 8.00802 10.0054C8.00802 9.4758 8.21786 8.96775 8.59161 8.59254C8.96762 8.22033 9.4753 8.01154 10.0043 8.01154C10.5334 8.01154 11.0411 8.22033 11.4171 8.59254C11.6953 8.87191 11.885 9.22715 11.9623 9.6138C12.0396 10.0004 12.0012 10.4013 11.8518 10.7662ZM12.4538 8.9838C12.2522 8.49891 11.9116 8.08454 11.4749 7.79289C11.0383 7.50124 10.5251 7.34535 10 7.34485C9.60686 7.34421 9.21849 7.43085 8.8629 7.59854C8.50732 7.76623 8.19339 8.01078 7.94377 8.31454C7.69416 8.61829 7.51508 8.97368 7.41947 9.35505C7.32385 9.73642 7.31408 10.1343 7.39087 10.5199C7.46765 10.9055 7.62907 11.2692 7.86348 11.5849C8.09789 11.9005 8.39944 12.1602 8.74637 12.3451C9.0933 12.5301 9.47695 12.6357 9.86965 12.6543C10.2623 12.673 10.6543 12.6042 11.0172 12.453C11.3428 12.3215 11.6385 12.1255 11.8865 11.877C12.258 11.5058 12.5109 11.0328 12.6135 10.5178C12.716 10.0028 12.6635 9.46893 12.4625 8.9838H12.4538ZM11.8518 10.7662C11.7508 11.0099 11.6032 11.2314 11.4171 11.4183C11.2306 11.6049 11.009 11.7527 10.7651 11.8531C10.4002 12.0025 9.99936 12.0409 9.61276 11.9636C9.22616 11.8862 8.87095 11.6966 8.59161 11.4183C8.21786 11.0431 8.00802 10.5351 8.00802 10.0054C8.00802 9.4758 8.21786 8.96775 8.59161 8.59254C8.96762 8.22033 9.4753 8.01154 10.0043 8.01154C10.5334 8.01154 11.0411 8.22033 11.4171 8.59254C11.6953 8.87191 11.885 9.22715 11.9623 9.6138C12.0396 10.0004 12.0012 10.4013 11.8518 10.7662ZM15.89 6.5971C16.2197 6.26733 16.4049 5.82008 16.4049 5.35375C16.4049 4.88742 16.2197 4.44019 15.89 4.11042C15.5603 3.7807 15.1131 3.59547 14.6468 3.59547C14.1805 3.59547 13.7333 3.7807 13.4036 4.11042C13.0747 4.44069 12.8895 4.88758 12.8885 5.35375C12.8886 5.53303 12.9165 5.71121 12.9711 5.88197C12.1075 5.25534 11.067 4.91962 10 4.92337C9.33318 4.92308 8.67283 5.05423 8.05672 5.30931C7.4406 5.56439 6.88078 5.93839 6.40927 6.40996C5.93776 6.88152 5.56378 7.4414 5.30874 8.05758C5.05369 8.67377 4.92256 9.33418 4.92284 10.0011C4.92099 10.6679 5.05143 11.3284 5.30662 11.9444C5.5618 12.5604 5.93666 13.1197 6.40948 13.5898C7.36231 14.5426 8.65262 15.0808 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971ZM14.4251 10.0011C14.4266 11.0242 14.0734 12.0162 13.4256 12.8081C12.7779 13.6001 11.8757 14.143 10.8727 14.3443C9.86968 14.5457 8.82789 14.3931 7.92473 13.9126C7.02158 13.432 6.31292 12.6532 5.91945 11.7087C5.52598 10.7643 5.47203 9.71266 5.76679 8.73292C6.06155 7.75317 6.68678 6.90592 7.53602 6.33544C8.38525 5.76496 9.40596 5.50653 10.4243 5.60418C11.4427 5.70183 12.3957 6.14952 13.1211 6.87099C13.5335 7.28137 13.861 7.76907 14.0847 8.30617C14.3085 8.84327 14.4242 9.41922 14.4251 10.0011ZM13.8644 6.13628C13.7096 5.98155 13.6042 5.78437 13.5615 5.5697C13.5187 5.35503 13.5406 5.13252 13.6244 4.93031C13.7082 4.7281 13.85 4.55528 14.032 4.43371C14.214 4.31214 14.428 4.24729 14.6468 4.24736C14.7921 4.24736 14.936 4.27598 15.0702 4.33158C15.2044 4.38718 15.3263 4.46868 15.4291 4.57142C15.5318 4.67416 15.6133 4.79613 15.6689 4.93036C15.7245 5.0646 15.7531 5.20846 15.7531 5.35375C15.7531 5.49905 15.7245 5.64292 15.6689 5.77716C15.6133 5.91139 15.5318 6.03336 15.4291 6.1361C15.3263 6.23884 15.2044 6.32034 15.0702 6.37594C14.936 6.43154 14.7921 6.46016 14.6468 6.46016C14.3535 6.45954 14.0723 6.34315 13.8644 6.13628ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.5603 3.78939 15.1131 3.60416 14.6468 3.60416C14.1805 3.60416 13.7333 3.78939 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971V6.60579ZM14.4251 10.0098C14.4266 11.0329 14.0734 12.0249 13.4256 12.8168C12.7779 13.6088 11.8757 14.1516 10.8727 14.353C9.86968 14.5544 8.82789 14.4018 7.92473 13.9212C7.02158 13.4407 6.31292 12.6619 5.91945 11.7174C5.52598 10.773 5.47203 9.72136 5.76679 8.74162C6.06155 7.76187 6.68678 6.91461 7.53602 6.34413C8.38525 5.77365 9.40596 5.51522 10.4243 5.61287C11.4427 5.71052 12.3957 6.15821 13.1211 6.87968C13.9519 7.70638 14.4209 8.82895 14.4251 10.0011V10.0098ZM13.8644 6.14497C13.7096 5.99024 13.6042 5.79307 13.5615 5.5784C13.5187 5.36374 13.5406 5.14121 13.6244 4.939C13.7082 4.73679 13.85 4.56397 14.032 4.4424C14.214 4.32083 14.428 4.25598 14.6468 4.25605C14.9402 4.25605 15.2216 4.37262 15.4291 4.58011C15.6365 4.7876 15.7531 5.06902 15.7531 5.36246C15.7531 5.65589 15.6365 5.93731 15.4291 6.1448C15.2216 6.35229 14.9402 6.46885 14.6468 6.46885C14.3523 6.46593 14.0709 6.34634 13.8644 6.13628V6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.5603 3.78939 15.1131 3.60416 14.6468 3.60416C14.1805 3.60416 13.7333 3.78939 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971V6.60579ZM14.4251 10.0098C14.4266 11.0329 14.0734 12.0249 13.4256 12.8168C12.7779 13.6088 11.8757 14.1516 10.8727 14.353C9.86968 14.5544 8.82789 14.4018 7.92473 13.9212C7.02158 13.4407 6.31292 12.6619 5.91945 11.7174C5.52598 10.773 5.47203 9.72136 5.76679 8.74162C6.06155 7.76187 6.68678 6.91461 7.53602 6.34413C8.38525 5.77365 9.40596 5.51522 10.4243 5.61287C11.4427 5.71052 12.3957 6.15821 13.1211 6.87968C13.9519 7.70638 14.4209 8.82895 14.4251 10.0011V10.0098ZM13.8644 6.14497C13.7096 5.99024 13.6042 5.79307 13.5615 5.5784C13.5187 5.36374 13.5406 5.14121 13.6244 4.939C13.7082 4.73679 13.85 4.56397 14.032 4.4424C14.214 4.32083 14.428 4.25598 14.6468 4.25605C14.9402 4.25605 15.2216 4.37262 15.4291 4.58011C15.6365 4.7876 15.7531 5.06902 15.7531 5.36246C15.7531 5.65589 15.6365 5.93731 15.4291 6.1448C15.2216 6.35229 14.9402 6.46885 14.6468 6.46885C14.3523 6.46593 14.0709 6.34634 13.8644 6.13628V6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.5603 3.78939 15.1131 3.60416 14.6468 3.60416C14.1805 3.60416 13.7333 3.78939 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8785 7.12087 15.1078 7.07449 15.3213 6.98453C15.5348 6.89457 15.7281 6.76285 15.89 6.5971V6.60579ZM14.4251 10.0098C14.4266 11.0329 14.0734 12.0249 13.4256 12.8168C12.7779 13.6088 11.8757 14.1516 10.8727 14.353C9.86968 14.5544 8.82789 14.4018 7.92473 13.9212C7.02158 13.4407 6.31292 12.6619 5.91945 11.7174C5.52598 10.773 5.47203 9.72136 5.76679 8.74162C6.06155 7.76187 6.68678 6.91461 7.53602 6.34413C8.38525 5.77365 9.40596 5.51522 10.4243 5.61287C11.4427 5.71052 12.3957 6.15821 13.1211 6.87968C13.9519 7.70638 14.4209 8.82895 14.4251 10.0011V10.0098ZM13.8644 6.14497C13.7096 5.99024 13.6042 5.79307 13.5615 5.5784C13.5187 5.36374 13.5406 5.14121 13.6244 4.939C13.7082 4.73679 13.85 4.56397 14.032 4.4424C14.214 4.32083 14.428 4.25598 14.6468 4.25605C14.9402 4.25605 15.2216 4.37262 15.4291 4.58011C15.6365 4.7876 15.7531 5.06902 15.7531 5.36246C15.7531 5.65589 15.6365 5.93731 15.4291 6.1448C15.2216 6.35229 14.9402 6.46885 14.6468 6.46885C14.3523 6.46593 14.0709 6.34634 13.8644 6.13628V6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM15.6792 0.00868993H4.3208C3.17636 0.00868761 2.07866 0.462761 1.2686 1.27128C0.458544 2.07979 0.0023027 3.17669 0 4.32126V15.6809C0.000576243 16.8266 0.456056 17.9252 1.2663 18.7351C2.07654 19.545 3.17523 20 4.3208 20H15.6792C16.8248 20 17.9235 19.545 18.7337 18.7351C19.5439 17.9252 19.9994 16.8266 20 15.6809V4.32126C19.9994 3.17536 19.544 2.07657 18.7338 1.2663C17.9236 0.456032 16.825 0.000575972 15.6792 0V0.00868993ZM19.348 15.6896C19.3462 16.662 18.9591 17.594 18.2714 18.2814C17.5837 18.9688 16.6515 19.3554 15.6792 19.3566H4.3208C3.83854 19.3563 3.36107 19.261 2.91565 19.0761C2.47024 18.8912 2.06562 18.6203 1.72492 18.279C1.38421 17.9376 1.1141 17.5325 0.930008 17.0867C0.745918 16.6409 0.651461 16.1632 0.652032 15.6809V4.32126C0.653183 3.34849 1.04008 2.41589 1.72786 1.72804C2.41564 1.04018 3.34813 0.653253 4.3208 0.652103H15.6792C16.6519 0.653253 17.5844 1.04018 18.2721 1.72804C18.9599 2.41589 19.3468 3.34849 19.348 4.32126V15.6896ZM14.6468 3.60416C14.4158 3.60311 14.1868 3.64791 13.9734 3.73636C13.7599 3.82482 13.5662 3.95493 13.4036 4.11911C13.0747 4.44938 12.8895 4.89628 12.8885 5.36246C12.8886 5.54173 12.9165 5.7199 12.9711 5.89066C12.1075 5.26403 11.067 4.92832 10 4.93207C9.33318 4.93179 8.67283 5.06292 8.05672 5.318C7.4406 5.57308 6.88078 5.9471 6.40927 6.41866C5.93776 6.89023 5.56378 7.4501 5.30874 8.06628C5.05369 8.68247 4.92256 9.34288 4.92284 10.0098C4.92099 10.6766 5.05143 11.3371 5.30662 11.9531C5.5618 12.5691 5.93666 13.1284 6.40948 13.5985C7.36373 14.5481 8.65386 15.0831 10 15.0875C11.3464 15.0869 12.6374 14.5518 13.5895 13.5996C14.5415 12.6475 15.0766 11.3563 15.0772 10.0098C15.0743 8.94406 14.7385 7.90588 14.1165 7.04053C14.2883 7.09365 14.467 7.12076 14.6468 7.12095C14.8779 7.122 15.1068 7.07699 15.3203 6.98853C15.5337 6.90008 15.7274 6.76997 15.89 6.60579C16.2197 6.27602 16.4049 5.82879 16.4049 5.36246C16.4049 4.89612 16.2197 4.44888 15.89 4.11911C15.7281 3.95336 15.5348 3.82164 15.3213 3.73168C15.1078 3.64172 14.8785 3.59555 14.6468 3.59547V3.60416ZM14.4295 10.0098C14.4309 11.0329 14.0777 12.0249 13.43 12.8168C12.7823 13.6088 11.8801 14.1516 10.877 14.353C9.87403 14.5544 8.83223 14.4018 7.92908 13.9212C7.02593 13.4407 6.31727 12.6619 5.9238 11.7174C5.53033 10.773 5.47638 9.72136 5.77114 8.74162C6.06589 7.76187 6.69113 6.91461 7.54037 6.34413C8.3896 5.77365 9.41031 5.51522 10.4287 5.61287C11.447 5.71052 12.4 6.15821 13.1254 6.87968C13.9547 7.70709 14.422 8.82958 14.4251 10.0011L14.4295 10.0098ZM15.4336 6.14497C15.2527 6.32601 15.0146 6.43871 14.7599 6.46386C14.5052 6.48901 14.2496 6.42507 14.0368 6.28291C13.8239 6.14076 13.667 5.92919 13.5926 5.68426C13.5182 5.43934 13.5311 5.17621 13.629 4.9397C13.7269 4.70319 13.9037 4.50793 14.1294 4.38721C14.3551 4.26648 14.6156 4.22775 14.8667 4.27761C15.1177 4.32747 15.3437 4.46284 15.5061 4.66065C15.6685 4.85847 15.7574 5.10649 15.7574 5.36246C15.7539 5.65348 15.636 5.93143 15.4293 6.13628L15.4336 6.14497ZM11.8779 8.13172C11.3796 7.63396 10.7043 7.35411 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.1333 11.6393 12.3291 11.3468 12.4627 11.0247C12.5962 10.7026 12.665 10.3574 12.665 10.0087C12.665 9.66001 12.5962 9.31475 12.4627 8.99267C12.3291 8.6706 12.1333 8.37803 11.8865 8.13172H11.8779ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749ZM12.4538 8.9925C12.2522 8.50761 11.9116 8.09325 11.4749 7.80159C11.0383 7.50994 10.5251 7.35404 10 7.35354C9.60686 7.3529 9.21849 7.43955 8.8629 7.60724C8.50732 7.77493 8.19339 8.01947 7.94377 8.32323C7.69416 8.62698 7.51508 8.98238 7.41947 9.36375C7.32385 9.74512 7.31408 10.143 7.39087 10.5286C7.46765 10.9142 7.62907 11.2779 7.86348 11.5936C8.09789 11.9092 8.39944 12.1689 8.74637 12.3538C9.0933 12.5387 9.47695 12.6444 9.86965 12.663C10.2623 12.6817 10.6543 12.6129 11.0172 12.4617C11.3428 12.3302 11.6385 12.1342 11.8865 11.8857C12.258 11.5145 12.5109 11.0415 12.6135 10.5265C12.716 10.0115 12.6635 9.47763 12.4625 8.9925H12.4538ZM11.8518 10.7749C11.7508 11.0186 11.6032 11.2401 11.4171 11.427C11.2306 11.6136 11.009 11.7614 10.7651 11.8617C10.4002 12.0111 9.99936 12.0496 9.61276 11.9723C9.22616 11.8949 8.87095 11.7053 8.59161 11.427C8.21786 11.0518 8.00802 10.5437 8.00802 10.0141C8.00802 9.48449 8.21786 8.97644 8.59161 8.60123C8.96762 8.22902 9.4753 8.02025 10.0043 8.02025C10.5334 8.02025 11.0411 8.22902 11.4171 8.60123C11.6953 8.8806 11.885 9.23585 11.9623 9.6225C12.0396 10.0091 12.0012 10.41 11.8518 10.7749Z","fill":"black","key":1}),React.createElement("path",{"d":"M15.6792 0.652069H4.32079C3.34813 0.65322 2.41563 1.04015 1.72785 1.728C1.04007 2.41585 0.653174 3.34845 0.652023 4.32122V15.6809C0.653175 16.6534 1.04014 17.5858 1.72798 18.2733C2.41582 18.9608 3.34833 19.3473 4.32079 19.3478H15.6792C16.6515 19.3467 17.5836 18.9601 18.2714 18.2727C18.9591 17.5853 19.3462 16.6533 19.348 15.6809V4.32122C19.3468 3.34845 18.9599 2.41585 18.2721 1.728C17.5844 1.04015 16.6519 0.65322 15.6792 0.652069ZM15.8965 6.59707C15.7339 6.76124 15.5402 6.89136 15.3268 6.97981C15.1133 7.06826 14.8844 7.11328 14.6533 7.11223C14.4735 7.11203 14.2948 7.08493 14.123 7.0318C14.745 7.89716 15.0809 8.93533 15.0837 10.001C15.0845 10.6691 14.9536 11.3307 14.6985 11.948C14.4433 12.5654 14.0689 13.1264 13.5967 13.5988C13.1245 14.0713 12.5638 14.446 11.9466 14.7014C11.3294 14.9568 10.6679 15.088 9.99999 15.0874C8.65385 15.0831 7.36372 14.5481 6.40947 13.5985C5.93665 13.1284 5.5618 12.5691 5.30661 11.9531C5.05142 11.3371 4.92098 10.6765 4.92283 10.0097C4.92255 9.34285 5.05368 8.68244 5.30873 8.06625C5.56378 7.45007 5.93775 6.89019 6.40926 6.41863C6.88078 5.94706 7.44059 5.57304 8.05671 5.31796C8.67283 5.06289 9.33317 4.93175 9.99999 4.93204C11.067 4.92829 12.1075 5.26399 12.9711 5.89062C12.9165 5.71987 12.8886 5.5417 12.8885 5.36242C12.8895 4.89625 13.0746 4.44935 13.4036 4.11907C13.7333 3.78935 14.1805 3.60412 14.6468 3.60412C15.1131 3.60412 15.5603 3.78935 15.89 4.11907C16.2197 4.44885 16.4049 4.89609 16.4049 5.36242C16.4049 5.82875 16.2197 6.27598 15.89 6.60576L15.8965 6.59707Z","fill":"#E27023","key":2}),React.createElement("path",{"d":"M11.9974 10.001C11.9968 10.397 11.879 10.784 11.659 11.1131C11.4389 11.4423 11.1264 11.699 10.7607 11.8508C10.3958 12.0002 9.99503 12.0387 9.60842 11.9614C9.22182 11.884 8.86661 11.6944 8.58727 11.4161C8.21352 11.0409 8.00368 10.5328 8.00368 10.0032C8.00368 9.47359 8.21352 8.96555 8.58727 8.59033C8.96328 8.21812 9.47096 8.00934 10 8.00934C10.5291 8.00934 11.0367 8.21812 11.4127 8.59033C11.599 8.77631 11.7467 8.99724 11.8474 9.24044C11.9481 9.48365 11.9998 9.74434 11.9996 10.0076L11.9974 10.001Z","fill":"#E27023","key":3})]);
}

InstaIcon.defaultProps = {"width":"30","height":"30","viewBox":"0 0 20 20","fill":"none"};

module.exports = InstaIcon;

InstaIcon.default = InstaIcon;


/***/ }),

/***/ "./src/images/quit-your-addiction-logo.svg":
/*!*************************************************!*\
  !*** ./src/images/quit-your-addiction-logo.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function QuitYourAddictionLogo (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95ZM58.24 22.95C58.33 22.78 58.43 22.6 58.51 22.42C58.44 22.57 58.33 22.78 58.24 22.95Z","fill":"#332E2B","key":0}),React.createElement("path",{"d":"M58.52 22.42C58.44 22.6 58.34 22.78 58.25 22.95C58.33 22.78 58.44 22.57 58.52 22.42Z","fill":"url(#paint0_linear_97_203)","key":1}),React.createElement("path",{"d":"M47.2 7.85C47.1613 7.91633 47.1178 7.97983 47.07 8.04C46.9 8.28 46.74 8.53 46.58 8.8V8.85999C46.48 9.01999 46.37 9.18999 46.28 9.35999C46.36 9.18999 46.47 9.02 46.56 8.85C46.5629 8.8301 46.5629 8.8099 46.56 8.79C46.73 8.52 46.88 8.27001 47.06 8.03001L47.2 7.85Z","fill":"url(#paint1_linear_97_203)","key":2}),React.createElement("path",{"d":"M73.56 39.13C74.3799 38.8792 75.0975 38.3716 75.6071 37.682C76.1166 36.9925 76.3911 36.1574 76.39 35.3V30.95C76.39 29.8891 75.9686 28.8717 75.2184 28.1216C74.4683 27.3714 73.4509 26.95 72.39 26.95H68.26C70.1528 25.5789 71.7486 23.8392 72.9516 21.8354C74.1545 19.8315 74.9398 17.6051 75.26 15.29V14.7L74.59 14.58L74.23 14.45C72.3149 13.7326 70.2721 13.4194 68.23 13.53C69.2531 10.5471 69.0883 7.28473 67.77 4.42001L67.57 4.04L67.13 4.21999L66.87 4.28001C65.94 4.48001 63.45 5.01 60.3 8.18C59.4735 5.34445 57.8531 2.80452 55.63 0.859993L55.31 0.57L54.87 -0.0100021L54.19 0.260002C50.9215 1.67708 48.0783 3.92065 45.94 6.77C42.38 2.77 39.55 2.18999 38.54 1.96999L38.26 1.91L37.82 1.73L37.63 2.10999C36.7303 4.05245 36.3611 6.19855 36.56 8.32999C34.8322 7.61347 32.9805 7.24314 31.11 7.24H30.71L30.06 7.10999L29.89 7.68C29.185 10.7444 29.3222 13.9425 30.2869 16.9353C31.2517 19.9281 33.0081 22.6042 35.37 24.68C36.2643 25.5061 37.2131 26.2712 38.21 26.97H30.92C29.8591 26.97 28.8417 27.3914 28.0916 28.1416C27.3414 28.8917 26.92 29.9091 26.92 30.97V35.32C26.9168 36.1791 27.1903 37.0164 27.7 37.708C28.2097 38.3996 28.9285 38.9087 29.75 39.16C29.7892 41.642 30.3602 44.0868 31.4246 46.3294C32.489 48.572 34.0219 50.5602 35.92 52.16H30.92C29.17 52.16 27.79 54.03 27.79 56.43V57.29H75.45V56.43C75.45 54.03 74.08 52.16 72.32 52.16H67.32C69.2352 50.5639 70.7839 48.5739 71.8607 46.3254C72.9375 44.0769 73.5171 41.6227 73.56 39.13ZM60.64 9.13C60.76 9 60.89 8.88 61.01 8.76L61.36 8.42001C62.5695 7.23365 64.0282 6.33178 65.63 5.78001L66.03 5.65C66.3063 5.55624 66.5909 5.48927 66.88 5.45C67.5775 6.9307 67.92 8.55372 67.88 10.19C67.88 10.36 67.88 10.53 67.88 10.7C67.8853 10.7565 67.8853 10.8135 67.88 10.87C67.88 11.06 67.88 11.26 67.8 11.47C67.7051 12.1871 67.5307 12.8915 67.28 13.57L66.46 13.65C64.7652 13.854 63.0919 14.2088 61.46 14.71C61.3721 13.0256 61.1345 11.3523 60.75 9.71C60.7127 9.52769 60.666 9.34745 60.61 9.17001L60.64 9.13ZM60.82 20.93C60.8838 20.7499 60.9372 20.5662 60.98 20.38C61.1859 19.654 61.3265 18.911 61.4 18.16C61.4781 17.5834 61.5148 17.0019 61.51 16.42C61.51 16.27 61.51 16.12 61.51 15.97L62.62 15.66L63.23 15.51L63.62 15.42C64.3884 15.2372 65.1662 15.097 65.95 15L66.7 14.92L67.7 14.86C69.1588 14.7945 70.6184 14.9702 72.02 15.38H72.09C72.5283 15.4862 72.9565 15.6301 73.37 15.81C73.3723 15.8266 73.3723 15.8434 73.37 15.86C73.0756 17.9962 72.3216 20.0432 71.16 21.86C71.1177 21.9128 71.0808 21.9697 71.05 22.03L70.7 22.54C70.6234 22.6669 70.5364 22.7873 70.44 22.9C70.4261 22.9279 70.4055 22.9519 70.38 22.97C70.3661 22.9979 70.3455 23.0219 70.32 23.04C70.2267 23.1686 70.1266 23.2921 70.02 23.41L69.82 23.64L69.61 23.89C69.5 24 69.41 24.1 69.31 24.22C68.9934 24.5538 68.6596 24.8709 68.31 25.17C68.14 25.32 67.95 25.46 67.76 25.61C67.5759 25.7685 67.3822 25.9154 67.18 26.05L66.84 26.29L66.55 26.5L65.94 26.87H60.14C61.19 26.32 61.89 25.87 62.01 25.81C60.5065 26.2592 58.9563 26.5344 57.39 26.63C58.6117 25.3428 59.5908 23.8454 60.28 22.21C60.4853 21.8013 60.6656 21.3805 60.82 20.95V20.93ZM45.65 10.6C45.65 10.49 45.74 10.39 45.8 10.28L46.01 9.82C46.0688 9.66782 46.1461 9.52342 46.24 9.39001C46.32 9.22001 46.43 9.05 46.52 8.88C46.5229 8.8601 46.5229 8.8399 46.52 8.82C46.69 8.55 46.84 8.30001 47.02 8.06001L47.15 7.88C47.23 7.76 47.33 7.64001 47.4 7.53001C47.4948 7.39659 47.5983 7.26963 47.71 7.15C47.7412 7.10229 47.7781 7.05862 47.82 7.02C47.845 6.9765 47.8753 6.93621 47.91 6.9C48.0287 6.75616 48.1556 6.61926 48.29 6.49L48.79 5.96C49.4131 5.33176 50.0816 4.75019 50.79 4.21999L51.27 3.88C51.834 3.48735 52.4218 3.13001 53.03 2.81001L53.37 2.63C53.71 2.46 53.97 2.34 54.14 2.27H54.22H54.29C54.7055 2.59049 55.0904 2.94869 55.44 3.34C55.44 3.34 55.51 3.41 55.54 3.45L55.74 3.67001C56.2748 4.22472 56.7445 4.83868 57.14 5.49999C57.2365 5.61912 57.3171 5.75022 57.38 5.89001C57.46 6.03001 57.55 6.17 57.63 6.32C57.71 6.47 57.79 6.61 57.86 6.77C57.93 6.93 58.01 7.06 58.07 7.21C58.13 7.36 58.24 7.58 58.31 7.77C58.38 7.96 58.4 8.01001 58.45 8.14001C58.4989 8.25003 58.539 8.3637 58.57 8.48C58.64 8.66 58.7 8.85 58.76 9.04L58.94 9.63C59.0433 9.95878 59.1301 10.2925 59.2 10.63C59.2259 10.6982 59.246 10.7684 59.26 10.84C59.32 11.1 59.37 11.36 59.42 11.63C59.47 11.9 59.48 12 59.51 12.19C59.54 12.38 59.56 12.57 59.58 12.77C59.6 12.97 59.64 13.29 59.68 13.56V14.19C59.6892 14.2193 59.6892 14.2507 59.68 14.28V14.34C59.68 14.52 59.68 14.68 59.68 14.86C59.68 15.04 59.68 15.12 59.68 15.26C59.68 15.4 59.68 15.57 59.68 15.73C59.6951 15.9898 59.6951 16.2502 59.68 16.51C59.69 16.5595 59.69 16.6105 59.68 16.66V16.74C59.6704 16.8899 59.6704 17.0401 59.68 17.19C59.6721 17.4047 59.6487 17.6186 59.61 17.83C59.5937 18.1057 59.5569 18.3798 59.5 18.65C59.4736 18.8869 59.4268 19.1211 59.36 19.35C59.3657 19.3764 59.3657 19.4036 59.36 19.43C59.3067 19.6833 59.2467 19.9233 59.18 20.15C59.1 20.42 59.01 20.68 58.92 20.94C58.83 21.2 58.77 21.31 58.69 21.49C58.6846 21.5555 58.6603 21.618 58.62 21.67C58.55 21.88 58.44 22.08 58.36 22.28C58.36 22.28 58.36 22.33 58.31 22.35C58.3007 22.3806 58.2835 22.4082 58.26 22.43C58.18 22.61 58.08 22.79 57.99 22.96C57.87 23.17 57.74 23.38 57.61 23.57C57.48 23.76 57.37 23.94 57.24 24.11C57.2235 24.1422 57.2034 24.1724 57.18 24.2L56.8 24.68C56.7 24.8 56.61 24.92 56.51 25.03L56.26 25.29C56.1377 25.4338 56.0075 25.5707 55.87 25.7C55.45 26.11 55.03 26.48 54.63 26.8L54.4 26.97H52.43C52.3467 26.8648 52.2699 26.7546 52.2 26.64C51.95 26.28 51.69 25.88 51.41 25.45C51.15 25.05 50.89 24.62 50.64 24.16C50.39 23.7 50.08 23.16 49.82 22.59C49.5249 22.0045 49.2612 21.4036 49.03 20.79C48.89 20.4 48.75 19.99 48.63 19.58C48.5963 19.5069 48.5727 19.4295 48.56 19.35C48.45 18.99 48.35 18.63 48.27 18.26C48.1608 17.7849 48.0773 17.3042 48.02 16.82C48.02 16.69 48.02 16.56 48.02 16.43C48.0068 16.5181 47.9868 16.605 47.96 16.69C47.96 16.95 47.82 17.4 47.74 17.99C47.7054 18.1279 47.682 18.2683 47.67 18.41C47.67 18.74 47.57 19.12 47.54 19.51C47.5092 19.7188 47.4891 19.9291 47.48 20.14C47.4648 20.3163 47.4648 20.4937 47.48 20.67C47.3424 22.3198 47.4707 23.9809 47.86 25.59L47.47 25.05C47.35 24.89 47.23 24.73 47.13 24.57C46.8864 24.1851 46.6628 23.7879 46.46 23.38C46.35 23.14 46.23 22.89 46.12 22.63C46.01 22.37 45.88 22.09 45.77 21.8C45.66 21.51 45.6 21.27 45.5 20.99C45.4 20.71 45.32 20.32 45.24 19.99C45.1861 19.7857 45.1427 19.5787 45.11 19.37L45.01 18.89C45.0046 18.8435 45.0046 18.7965 45.01 18.75L44.95 18.43C44.95 18.15 44.89 17.87 44.87 17.58C44.8548 17.4137 44.8548 17.2463 44.87 17.08C44.87 16.83 44.87 16.58 44.87 16.32C44.86 16.1602 44.86 15.9998 44.87 15.84C44.87 15.58 44.87 15.33 44.87 15.08C44.8597 14.8968 44.8597 14.7132 44.87 14.53C44.8596 14.4269 44.8596 14.3231 44.87 14.22C44.8796 14.0456 44.8996 13.872 44.93 13.7C44.9246 13.6669 44.9246 13.6331 44.93 13.6C44.93 13.6 44.93 13.6 44.93 13.52C44.93 13.44 44.99 13.2 45.03 13.05C45.1401 12.4737 45.3007 11.9082 45.51 11.36C45.5274 11.2707 45.5543 11.1836 45.59 11.1C45.6156 11.0184 45.6457 10.9383 45.68 10.86C45.695 10.7788 45.6845 10.695 45.65 10.62V10.6ZM37.73 5.9C37.73 5.77 37.73 5.65001 37.8 5.53001C37.8324 5.29982 37.8826 5.07247 37.95 4.85C37.95 4.74 38.01 4.64 38.03 4.54C38.0709 4.39038 38.121 4.24343 38.18 4.1C38.18 4.01 38.24 3.93 38.26 3.85C38.3388 3.60655 38.4427 3.37196 38.57 3.15H38.63C38.8502 3.18309 39.0676 3.23324 39.28 3.3C39.46 3.3 39.67 3.41 39.88 3.48C40.1842 3.57257 40.4816 3.68618 40.77 3.82H40.88L41.2 3.98C41.7838 4.25995 42.3396 4.59479 42.86 4.98L43.31 5.32C43.45 5.44 43.62 5.57 43.76 5.71L44.54 6.42001C44.6201 6.47916 44.6909 6.54994 44.75 6.63L44.85 6.73L45.18 7.07C45.1967 7.07765 45.2115 7.08873 45.2236 7.10252C45.2356 7.1163 45.2446 7.13249 45.25 7.15L45.48 7.39001C45.42 7.49001 45.35 7.59 45.29 7.7C44.4264 9.1066 43.8044 10.6479 43.45 12.26C41.9512 11.0584 40.3405 10.0036 38.64 9.10999C38.29 8.92999 37.95 8.76 37.64 8.62C37.635 8.56011 37.635 8.49989 37.64 8.43999C37.64 8.21999 37.64 7.99 37.64 7.76C37.6144 7.14521 37.6445 6.52936 37.73 5.92001V5.9ZM38.26 25.39L37.4 24.73C37.21 24.58 37.01 24.42 36.82 24.25C36.63 24.08 36.44 23.92 36.25 23.74C36.06 23.56 35.95 23.46 35.81 23.32C35.3897 22.9159 34.9924 22.4886 34.62 22.04C34.45 21.85 34.31 21.65 34.15 21.46C34.0534 21.3382 33.9633 21.2113 33.88 21.08C33.5925 20.6965 33.3287 20.2957 33.09 19.88C32.96 19.65 32.83 19.42 32.71 19.19C32.59 18.96 32.58 18.91 32.52 18.78C32.4169 18.5979 32.3299 18.4072 32.26 18.21C32.26 18.13 32.19 18.05 32.15 17.98C32.11 17.91 31.99 17.57 31.93 17.36C31.8967 17.3017 31.8762 17.2369 31.87 17.17C31.79 16.9633 31.72 16.7633 31.66 16.57C31.58 16.27 31.5 15.95 31.43 15.63C31.43 15.49 31.37 15.34 31.33 15.2C31.29 15.06 31.27 14.91 31.26 14.78C31.25 14.65 31.19 14.32 31.16 14.1C31.1145 13.7282 31.0878 13.3544 31.08 12.98C31.08 12.73 31.08 12.49 31.08 12.26C31.064 11.1108 31.1984 9.96434 31.48 8.85C32.0011 8.82443 32.5234 8.84788 33.04 8.92001H33.28H33.48L33.86 8.96999L34.36 9.06001L34.74 9.14001C35.08 9.22001 35.45 9.30999 35.84 9.43999L36.21 9.56001L36.89 9.81001L37.95 10.27C38.26 10.42 38.58 10.59 38.95 10.78C39.32 10.97 39.7 11.19 40.1 11.45C40.2311 11.5228 40.3579 11.6029 40.48 11.69C41.4521 12.2959 42.384 12.964 43.27 13.69V13.99C43.27 14.32 43.21 14.65 43.2 14.99C43.19 15.33 43.2 15.46 43.2 15.7C43.2 15.94 43.2 15.98 43.2 16.11C43.1944 16.5741 43.2144 17.0381 43.26 17.5V17.55C43.2649 17.5765 43.2649 17.6036 43.26 17.63C43.26 18.06 43.34 18.47 43.4 18.88C43.7339 21.4108 44.6476 23.8303 46.07 25.95C43.3715 25.1347 40.8342 23.8593 38.57 22.18C39.8873 23.8803 41.3677 25.4478 42.99 26.86H40.75L40.48 26.71L39.95 26.41C39.65 26.23 39.34 26.04 39.04 25.82C38.74 25.6 38.64 25.55 38.44 25.41L38.26 25.39ZM29.82 37.24C29.478 37.031 29.1959 36.7368 29.0014 36.3863C28.8069 36.0358 28.7065 35.6409 28.71 35.24V30.89C28.7051 30.7934 28.7051 30.6966 28.71 30.6V30.42C28.7174 30.3642 28.7343 30.3101 28.76 30.26C28.7901 30.0997 28.8512 29.9468 28.94 29.81C28.9914 29.7212 29.0554 29.6404 29.13 29.57L29.22 29.44L29.34 29.32C29.7685 28.8949 30.3464 28.6544 30.95 28.65H72.35C72.953 28.65 73.5314 28.8888 73.9587 29.3143C74.386 29.7397 74.6274 30.317 74.63 30.92V35.27C74.6313 35.5698 74.5733 35.8669 74.4592 36.1441C74.345 36.4213 74.1771 36.6732 73.9652 36.8852C73.7532 37.0971 73.5013 37.265 73.2241 37.3791C72.9469 37.4933 72.6498 37.5513 72.35 37.55H30.95C30.555 37.5494 30.1665 37.4497 29.82 37.26V37.24ZM72.39 53.88C72.93 53.88 73.51 54.54 73.73 55.57H29.67C29.88 54.57 30.45 53.88 30.99 53.88H72.39ZM67.44 49.76C67.21 49.99 67 50.21 66.76 50.43C66.2921 50.8573 65.7978 51.2547 65.28 51.62L64.5 52.16H38.88L38.09 51.62C37.5768 51.2571 37.089 50.8595 36.63 50.43C36.3888 50.2219 36.1616 49.9981 35.95 49.76C35.7461 49.5565 35.5525 49.3429 35.37 49.12L35.21 48.95C35.0325 48.7489 34.8656 48.5386 34.71 48.32C34.5744 48.1499 34.4476 47.973 34.33 47.79C34.336 47.7637 34.336 47.7363 34.33 47.71C34.26 47.62 34.2 47.52 34.14 47.43C34.1233 47.401 34.1031 47.3742 34.08 47.35V47.29C33.9592 47.1168 33.849 46.9365 33.75 46.75C33.63 46.55 33.52 46.36 33.41 46.15C33.417 46.117 33.417 46.083 33.41 46.05C33.36 45.92 33.28 45.79 33.22 45.66C33.16 45.53 33.22 45.6 33.22 45.57C33.1857 45.5185 33.1619 45.4607 33.15 45.4C33.0525 45.22 32.9689 45.0328 32.9 44.84C32.83 44.66 32.76 44.47 32.7 44.28C32.64 44.09 32.64 44.11 32.6 44.03V43.98V43.89C32.5912 43.837 32.5912 43.783 32.6 43.73C32.5297 43.5444 32.4728 43.3539 32.43 43.16C32.3695 42.9729 32.3194 42.7826 32.28 42.59C32.22 42.33 32.16 42.07 32.12 41.81C32.0654 41.5457 32.0253 41.2787 32 41.01C31.9552 40.762 31.9252 40.5116 31.91 40.26V40.21C31.8948 39.9336 31.8948 39.6565 31.91 39.38H72.16C72.1752 39.6565 72.1752 39.9336 72.16 40.21V40.26C72.16 40.51 72.16 40.76 72.08 41.01C72.0513 41.2788 72.0079 41.5459 71.95 41.81C71.91 42.07 71.86 42.33 71.8 42.59C71.8 42.78 71.7 42.98 71.64 43.16C71.6065 43.3562 71.5494 43.5475 71.47 43.73C71.4788 43.783 71.4788 43.837 71.47 43.89V43.98V44.03C71.47 44.11 71.41 44.2 71.37 44.28C71.33 44.36 71.24 44.66 71.17 44.84C71.09 45.03 71.01 45.22 70.92 45.4C70.894 45.4439 70.8739 45.4909 70.86 45.54C70.76 45.76 70.65 45.97 70.53 46.18C70.4209 46.416 70.2939 46.6434 70.15 46.86C69.9 47.28 69.63 47.7 69.34 48.1C69.34 48.1 69.34 48.1 69.28 48.17C69.101 48.4308 68.9074 48.6812 68.7 48.92C67.95 49.22 67.7 49.51 67.44 49.78V49.76Z","fill":"#332E2B","key":3}),React.createElement("path",{"d":"M45.32 7.84C44.4564 9.2466 43.8344 10.7879 43.48 12.4C41.9812 11.1984 40.3705 10.1436 38.67 9.24999C38.5409 7.57565 38.6555 5.89144 39.01 4.24999C39.01 4.24999 40.94 4.28 45.32 7.84Z","fill":"#63B22F","key":4}),React.createElement("path",{"d":"M66.49 13.67C64.7951 13.874 63.1218 14.2288 61.49 14.73C61.4021 13.0456 61.1645 11.3723 60.78 9.73C64.78 6.62 66.53 6.55 66.53 6.55C67.0516 8.89621 67.0379 11.3298 66.49 13.67Z","fill":"#63B22F","key":5}),React.createElement("path",{"d":"M72.13 16.79C72.13 16.79 70.13 22.89 65.8 25.95C65.26 26.33 64.75 26.66 64.24 26.95H60.19C61.24 26.4 61.94 25.95 62.06 25.89C60.5565 26.3393 59.0063 26.6144 57.44 26.71C58.6617 25.4228 59.6408 23.9254 60.33 22.29C60.5183 21.8506 60.6787 21.3997 60.81 20.94C60.8738 20.7599 60.9272 20.5762 60.97 20.39C61.1759 19.664 61.3164 18.921 61.39 18.17C61.468 17.5934 61.5048 17.0119 61.5 16.43C62.25 16.33 62.95 16.25 63.61 16.2H63.75C64.35 16.2 64.89 16.11 65.42 16.09H66.01C66.38 16.09 66.74 16.09 67.06 16.09C70.88 16.07 72.13 16.79 72.13 16.79Z","fill":"#63B22F","key":6}),React.createElement("path",{"d":"M59.99 15.68C60.0051 15.9398 60.0051 16.2002 59.99 16.46C59.9999 16.5095 59.9999 16.5605 59.99 16.61V16.69C59.9804 16.8398 59.9804 16.9902 59.99 17.14C59.982 17.3547 59.9586 17.5686 59.92 17.78C59.8995 18.0553 59.8628 18.3291 59.81 18.6C59.7836 18.8369 59.7368 19.0712 59.67 19.3C59.6757 19.3264 59.6757 19.3536 59.67 19.38C59.6166 19.6333 59.5566 19.8733 59.49 20.1C59.41 20.37 59.32 20.63 59.23 20.89C59.14 21.15 59.08 21.26 59 21.44C58.9945 21.5055 58.9702 21.568 58.93 21.62C58.86 21.83 58.75 22.03 58.67 22.23C58.6667 22.2532 58.6667 22.2768 58.67 22.3C58.6607 22.3306 58.6435 22.3583 58.62 22.38C58.54 22.56 58.43 22.74 58.34 22.91C58.25 23.08 58.09 23.33 57.96 23.52C57.83 23.71 57.72 23.89 57.59 24.06C57.5735 24.0922 57.5534 24.1224 57.53 24.15L57.15 24.63C57.05 24.75 56.96 24.87 56.86 24.98L56.61 25.24C56.4877 25.3838 56.3575 25.5207 56.22 25.65C55.8 26.06 55.38 26.43 54.98 26.75L54.75 26.92H52.43C52.3467 26.8148 52.2699 26.7046 52.2 26.59C51.95 26.23 51.69 25.83 51.41 25.4C51.15 25 50.89 24.57 50.64 24.11C50.39 23.65 50.08 23.11 49.82 22.54C49.5248 21.9545 49.2611 21.3536 49.03 20.74C48.89 20.35 48.75 19.94 48.63 19.53C48.5962 19.4569 48.5727 19.3795 48.56 19.3C48.45 18.94 48.35 18.58 48.27 18.21C48.1607 17.7349 48.0773 17.2542 48.02 16.77C48.02 16.64 48.02 16.51 48.02 16.38C48.0068 16.4681 47.9867 16.555 47.96 16.64C47.96 16.9 47.82 17.35 47.74 17.94C47.7053 18.0779 47.6819 18.2183 47.67 18.36C47.67 18.69 47.57 19.07 47.54 19.46C47.5091 19.6688 47.4891 19.8791 47.48 20.09C47.4647 20.2663 47.4647 20.4436 47.48 20.62C47.3424 22.2698 47.4707 23.9309 47.86 25.54L47.47 25C47.35 24.84 47.23 24.68 47.13 24.52C46.8864 24.1351 46.6627 23.7379 46.46 23.33C46.4647 23.2935 46.4647 23.2565 46.46 23.22C46.37 22.92 46.23 22.51 46.1 22.04C46.1 21.95 46.04 21.85 46.02 21.74C46 21.63 45.92 21.32 45.88 21.1C45.84 20.88 45.75 20.46 45.7 20.1C45.65 19.74 45.6 19.34 45.58 18.93C45.5199 18.1945 45.5199 17.4554 45.58 16.72C45.58 16.42 45.58 16.11 45.67 15.79C45.7336 15.3021 45.8237 14.8181 45.94 14.34C46.0342 13.8661 46.1577 13.3985 46.31 12.94C46.6345 11.9386 47.0884 10.9839 47.66 10.1C47.84 9.84 48.01 9.57999 48.2 9.32999C49.8549 7.14665 51.8425 5.23674 54.09 3.67001C54.09 3.67001 56.17 4.98 58.41 10.55C58.54 10.85 58.66 11.17 58.78 11.55C59.2 12.64 59.6 13.87 60.01 15.27C59.9 15.39 59.95 15.57 59.99 15.68Z","fill":"#63B22F","key":7}),React.createElement("path",{"d":"M42.93 26.96H41.13C38.6786 25.428 36.5903 23.3806 35.01 20.96C32.08 16.58 32.33 10.15 32.33 10.15C32.33 10.15 33.76 9.91999 37.26 11.22C37.6 11.36 37.99 11.5 38.39 11.67L39.32 12.07C40.45 12.58 41.75 13.22 43.2 14.07C43.2 14.4 43.14 14.73 43.13 15.07C43.12 15.41 43.13 15.54 43.13 15.78C43.13 16.02 43.13 16.06 43.13 16.19C43.1244 16.6541 43.1444 17.1181 43.19 17.58V17.63C43.1949 17.6564 43.1949 17.6836 43.19 17.71C43.19 18.14 43.27 18.55 43.33 18.96C43.6639 21.4908 44.5776 23.9103 46 26.03C43.3015 25.2147 40.7642 23.9393 38.5 22.26C39.8195 23.9677 41.3032 25.542 42.93 26.96Z","fill":"#63B22F","key":8}),React.createElement("path",{"d":"M71.82 39.3C71.8352 39.5765 71.8352 39.8535 71.82 40.13V40.18C71.82 40.43 71.82 40.68 71.74 40.93C71.7113 41.1988 71.6679 41.4659 71.61 41.73C71.56 41.99 71.52 42.25 71.46 42.51C71.4 42.77 71.36 42.9 71.3 43.08C71.24 43.26 71.19 43.46 71.13 43.65C71.1388 43.703 71.1388 43.757 71.13 43.81V43.9V43.95C71.13 44.03 71.07 44.12 71.03 44.2C70.99 44.28 70.9 44.58 70.83 44.76C70.75 44.95 70.67 45.14 70.58 45.32C70.5541 45.3639 70.5339 45.411 70.52 45.46C70.42 45.68 70.3 45.89 70.19 46.1C70.0809 46.336 69.9539 46.5634 69.81 46.78C69.56 47.2 69.29 47.62 69 48.02C69 48.02 69 48.02 68.94 48.09C68.7611 48.3508 68.5674 48.6012 68.36 48.84C68.11 49.13 67.86 49.42 67.6 49.69C67.34 49.96 67.16 50.14 66.92 50.36C66.4511 50.7861 65.9569 51.1835 65.44 51.55L64.66 52.08H38.88L38.09 51.55C37.5796 51.1834 37.092 50.786 36.63 50.36C36.39 50.14 36.17 49.92 35.95 49.69C35.7461 49.4865 35.5525 49.2729 35.37 49.05L35.21 48.88L34.71 48.25C34.58 48.08 34.45 47.9 34.33 47.72C34.336 47.6937 34.336 47.6663 34.33 47.64C34.26 47.55 34.2 47.45 34.14 47.36C34.1233 47.331 34.1031 47.3042 34.08 47.28V47.22C33.9592 47.0468 33.849 46.8665 33.75 46.68C33.63 46.48 33.52 46.29 33.41 46.08C33.417 46.047 33.417 46.013 33.41 45.98C33.36 45.85 33.28 45.72 33.22 45.59C33.16 45.46 33.22 45.53 33.22 45.5C33.1857 45.4485 33.1619 45.3907 33.15 45.33C33.0525 45.15 32.9689 44.9628 32.9 44.77C32.83 44.59 32.76 44.4 32.7 44.21C32.64 44.02 32.64 44.04 32.6 43.96V43.91V43.82C32.5913 43.767 32.5913 43.713 32.6 43.66C32.54 43.47 32.49 43.28 32.43 43.09C32.3695 42.9029 32.3194 42.7127 32.28 42.52C32.22 42.26 32.17 42 32.12 41.74C32.0654 41.4757 32.0253 41.2087 32 40.94C31.9553 40.692 31.9252 40.4416 31.91 40.19V40.14C31.8948 39.8635 31.8948 39.5864 31.91 39.31L71.82 39.3Z","fill":"#E27022","key":9}),React.createElement("path",{"d":"M74.67 30.95V35.3C74.6713 35.5998 74.6132 35.8969 74.4991 36.1741C74.385 36.4513 74.2171 36.7032 74.0051 36.9151C73.7932 37.1271 73.5413 37.295 73.2641 37.4091C72.9868 37.5232 72.6898 37.5813 72.39 37.58H30.99C30.5788 37.5771 30.1754 37.4668 29.82 37.26C29.4779 37.0509 29.1959 36.7568 29.0014 36.4063C28.8068 36.0558 28.7065 35.6608 28.71 35.26V30.91C28.7051 30.8134 28.7051 30.7166 28.71 30.62V30.44C28.7173 30.3842 28.7343 30.33 28.76 30.28C28.7901 30.1197 28.8512 29.9668 28.94 29.83C28.9897 29.7342 29.0538 29.6465 29.13 29.57L29.22 29.44L29.34 29.32C29.7685 28.8949 30.3464 28.6544 30.95 28.65H72.35C72.6544 28.6446 72.9569 28.7003 73.2395 28.8138C73.5221 28.9272 73.779 29.0961 73.9953 29.3105C74.2115 29.5248 74.3826 29.7804 74.4985 30.062C74.6144 30.3435 74.6727 30.6455 74.67 30.95Z","fill":"#E27022","key":10}),React.createElement("path",{"d":"M73.73 55.57H29.67C29.88 54.57 30.45 53.88 30.99 53.88H72.39C72.93 53.9 73.51 54.57 73.73 55.57Z","fill":"#E27022","key":11}),React.createElement("path",{"d":"M16.23 81.57C15.9194 81.9355 15.5333 82.2293 15.0983 82.4313C14.6632 82.6333 14.1896 82.7386 13.71 82.74C13.3662 82.7358 13.0265 82.6645 12.71 82.53C12.3441 82.3553 12.0069 82.126 11.71 81.85C11.5826 81.7412 11.4624 81.6243 11.35 81.5C11.6015 81.4317 11.8486 81.3482 12.09 81.25C13.0177 80.8993 13.8672 80.3692 14.59 79.69C15.266 78.9954 15.7904 78.1679 16.13 77.26C16.9011 75.3343 16.9011 73.1857 16.13 71.26C15.7516 70.358 15.1858 69.5467 14.47 68.88C13.7476 68.1979 12.8982 67.6644 11.97 67.31C9.94902 66.5503 7.72097 66.5503 5.7 67.31C4.76516 67.6616 3.91129 68.1991 3.19 68.89C2.4765 69.5587 1.91102 70.3695 1.53 71.27C0.767018 73.1973 0.767018 75.3428 1.53 77.27C1.90981 78.1742 2.47535 78.9884 3.19 79.66C3.91436 80.3445 4.76756 80.8782 5.7 81.23C6.43337 81.5175 7.20489 81.6961 7.99 81.76C8.45 82.22 8.85 82.62 9.24 82.96C9.68993 83.3614 10.1791 83.7165 10.7 84.02C11.1466 84.2735 11.6286 84.4589 12.13 84.57C12.6138 84.6919 13.1111 84.7524 13.61 84.75C14.3391 84.7736 15.0639 84.6289 15.7281 84.3271C16.3923 84.0254 16.9781 83.5747 17.44 83.01L16.23 81.57ZM5.23 77.98C4.75349 77.5002 4.37928 76.9286 4.13 76.3C3.62337 74.9803 3.62337 73.5197 4.13 72.2C4.37624 71.5917 4.73982 71.0379 5.2 70.57C5.65695 70.0988 6.20927 69.7306 6.82 69.49C8.14208 68.9963 9.59792 68.9963 10.92 69.49C11.5325 69.7328 12.0876 70.1006 12.55 70.57C13.0138 71.037 13.3808 71.5909 13.63 72.2C14.1366 73.5197 14.1366 74.9803 13.63 76.3C13.3819 76.9127 13.0149 77.4701 12.55 77.94C12.0876 78.4094 11.5325 78.7772 10.92 79.02C9.60028 79.5267 8.13972 79.5267 6.82 79.02C6.20927 78.7795 5.65695 78.4112 5.2 77.94L5.23 77.98Z","fill":"#332E2B","key":12}),React.createElement("path",{"d":"M30.19 70.41V81.57H27.7V80.13C27.3719 80.5452 26.9595 80.886 26.49 81.13C25.7555 81.5138 24.9387 81.7129 24.11 81.71C23.2394 81.7284 22.3766 81.5435 21.59 81.17C20.8769 80.8211 20.2873 80.2629 19.9 79.57C19.4704 78.7118 19.264 77.7591 19.3 76.8V70.43H21.9V76.43C21.8386 77.2354 22.0812 78.0346 22.58 78.67C22.829 78.9262 23.1303 79.1257 23.4633 79.2551C23.7963 79.3845 24.1533 79.4408 24.51 79.42C25.0703 79.433 25.6246 79.3021 26.12 79.04C26.5813 78.7784 26.9539 78.3849 27.19 77.91C27.4641 77.3295 27.5944 76.6915 27.57 76.05V70.41H30.19Z","fill":"#332E2B","key":13}),React.createElement("path",{"d":"M34.92 68.57C34.6994 68.5775 34.4795 68.5406 34.2734 68.4616C34.0673 68.3826 33.8791 68.263 33.72 68.11C33.5691 67.9675 33.4495 67.7954 33.3686 67.6043C33.2877 67.4132 33.2473 67.2074 33.25 67C33.2467 66.7924 33.2868 66.5865 33.3677 66.3953C33.4487 66.2042 33.5687 66.0321 33.72 65.89C34.0454 65.5883 34.4764 65.4266 34.92 65.44C35.3637 65.4217 35.7973 65.5758 36.13 65.87C36.2813 66.0035 36.4018 66.1684 36.4829 66.3532C36.5641 66.538 36.604 66.7382 36.6 66.94C36.6038 67.1541 36.5651 67.3669 36.4862 67.5661C36.4072 67.7652 36.2896 67.9466 36.14 68.1C35.9797 68.2578 35.7887 68.3809 35.5789 68.4618C35.369 68.5427 35.1447 68.5795 34.92 68.57ZM33.61 81.57V70.41H36.22V81.57H33.61Z","fill":"#332E2B","key":14}),React.createElement("path",{"d":"M46.36 80.96C46.0256 81.2243 45.6413 81.4181 45.23 81.53C44.777 81.6539 44.3097 81.7178 43.84 81.72C42.8017 81.7731 41.7844 81.4137 41.01 80.72C40.6543 80.3488 40.3813 79.9065 40.209 79.4221C40.0366 78.9378 39.9688 78.4224 40.01 77.91V72.57H38.13V70.48H39.97V67.94H42.58V70.48H45.58V72.57H42.58V77.88C42.5503 78.3262 42.6936 78.7666 42.98 79.11C43.1275 79.2647 43.3065 79.3858 43.5049 79.4651C43.7034 79.5445 43.9165 79.5803 44.13 79.57C44.6551 79.5895 45.1709 79.427 45.59 79.11L46.36 80.96Z","fill":"#332E2B","key":15}),React.createElement("path",{"d":"M66.56 66.94L60.84 76.41V81.57H58.12V76.44L52.38 66.94H55.28L59.57 74.05L63.89 66.94H66.56Z","fill":"#332E2B","key":16}),React.createElement("path",{"d":"M71.85 81.71C70.7831 81.7326 69.7287 81.4775 68.79 80.97C67.9217 80.5023 67.1935 79.812 66.68 78.97C66.1756 78.0668 65.9107 77.0495 65.9107 76.015C65.9107 74.9805 66.1756 73.9632 66.68 73.06C67.1916 72.2164 67.9203 71.5257 68.79 71.06C69.7305 70.5571 70.7837 70.3024 71.85 70.32C72.9227 70.3025 73.9823 70.5571 74.93 71.06C75.8045 71.5191 76.5348 72.2113 77.04 73.06C77.539 73.9668 77.8006 74.985 77.8006 76.02C77.8006 77.055 77.539 78.0732 77.04 78.98C76.5319 79.8264 75.8024 80.5179 74.93 80.98C73.9831 81.484 72.9224 81.7354 71.85 81.71ZM71.85 79.48C72.4468 79.4907 73.0361 79.346 73.56 79.06C74.0612 78.7781 74.4708 78.3581 74.74 77.85C75.034 77.2748 75.1817 76.6359 75.17 75.99C75.1855 75.3405 75.0376 74.6975 74.74 74.12C74.4692 73.6156 74.0598 73.1992 73.56 72.92C73.0358 72.6441 72.4524 72.4999 71.86 72.4999C71.2676 72.4999 70.6842 72.6441 70.16 72.92C69.6632 73.2031 69.2547 73.6185 68.98 74.12C68.6743 74.6949 68.5227 75.3391 68.54 75.99C68.5267 76.6373 68.6781 77.2773 68.98 77.85C69.2519 78.3561 69.6609 78.7754 70.16 79.06C70.6772 79.3448 71.2597 79.4895 71.85 79.48Z","fill":"#332E2B","key":17}),React.createElement("path",{"d":"M91.13 70.41V81.57H88.63V80.13C88.2998 80.5431 87.8879 80.8835 87.42 81.13C86.6791 81.5158 85.8553 81.715 85.02 81.71C84.156 81.7264 83.3001 81.5415 82.52 81.17C81.8 80.8132 81.2067 80.2443 80.82 79.54C80.3986 78.6792 80.196 77.7278 80.23 76.77V70.4H82.83V76.4C82.7734 77.2049 83.0155 78.0024 83.51 78.64C83.7602 78.8975 84.0631 79.0978 84.3979 79.2273C84.7328 79.3567 85.0917 79.4122 85.45 79.39C86.0069 79.4008 86.5574 79.2701 87.05 79.01C87.5113 78.7484 87.8839 78.3549 88.12 77.88C88.3894 77.2979 88.5195 76.6611 88.5 76.02V70.38L91.13 70.41Z","fill":"#332E2B","key":18}),React.createElement("path",{"d":"M101 70.29V72.77C100.895 72.7459 100.788 72.7291 100.68 72.72H100.38C99.9484 72.6998 99.5172 72.7664 99.1118 72.9159C98.7064 73.0653 98.3352 73.2945 98.02 73.59C97.7096 73.9402 97.472 74.3487 97.3209 74.7916C97.1698 75.2346 97.1083 75.7031 97.14 76.17V81.57H94.53V70.41H97.02V72.04C97.3435 71.5467 97.7875 71.144 98.31 70.87C99.1437 70.4539 100.069 70.2545 101 70.29Z","fill":"#332E2B","key":19}),React.createElement("path",{"d":"M16.13 87.92H13.93L8.62 99.73H10.88L12.05 97H17.95L19.13 99.73H21.42L16.13 87.92ZM12.82 95.28L15.05 90.11L17.26 95.28H12.82Z","fill":"#332E2B","key":20}),React.createElement("path",{"d":"M29.34 87.22V91.85C29.1015 91.5473 28.8016 91.2985 28.46 91.12C27.8485 90.7814 27.1589 90.609 26.46 90.62C25.6425 90.6038 24.8353 90.8039 24.12 91.2C23.4395 91.5692 22.8777 92.1241 22.5 92.8C22.0767 93.5384 21.8656 94.3793 21.89 95.23C21.8682 96.0804 22.0791 96.9207 22.5 97.66C22.8857 98.3358 23.4495 98.8927 24.13 99.27C24.8472 99.6614 25.6531 99.8611 26.47 99.85C27.1892 99.8605 27.8988 99.6848 28.53 99.34C28.8888 99.1442 29.2022 98.875 29.45 98.55V99.73H31.45V87.22H29.34ZM29.01 96.73C28.7908 97.144 28.4622 97.4899 28.06 97.73C27.6416 97.9525 27.1739 98.066 26.7 98.06C26.223 98.066 25.752 97.9525 25.33 97.73C24.9094 97.4972 24.5628 97.1506 24.33 96.73C24.0747 96.2721 23.9469 95.7541 23.96 95.23C23.9431 94.7023 24.0711 94.1801 24.33 93.72C24.5615 93.2984 24.9084 92.9515 25.33 92.72C25.7495 92.4898 26.2216 92.3727 26.7 92.38C27.1753 92.3726 27.6442 92.4898 28.06 92.72C28.4632 92.9589 28.7921 93.3051 29.01 93.72C29.269 94.1801 29.3969 94.7023 29.38 95.23C29.3931 95.7541 29.2653 96.2721 29.01 96.73Z","fill":"#332E2B","key":21}),React.createElement("path",{"d":"M40.94 87.22V91.85C40.6947 91.554 40.3962 91.3065 40.06 91.12C39.4456 90.789 38.758 90.6171 38.06 90.62C37.2459 90.6051 36.4422 90.8051 35.73 91.2C35.0464 91.5686 34.4813 92.1234 34.1 92.8C33.6926 93.5438 33.489 94.3822 33.51 95.23C33.4914 96.0776 33.6948 96.9153 34.1 97.66C34.4866 98.3351 35.0502 98.8918 35.73 99.27C36.444 99.6601 37.2465 99.8598 38.06 99.85C38.7598 99.8579 39.4495 99.682 40.06 99.34C40.4236 99.1472 40.7409 98.8776 40.99 98.55V99.73H42.99V87.22H40.94ZM40.61 96.73C40.3813 97.1537 40.0337 97.5013 39.61 97.73C39.1924 97.9546 38.7241 98.0682 38.25 98.06C37.7789 98.0697 37.3135 97.9559 36.9 97.73C36.4763 97.5013 36.1288 97.1537 35.9 96.73C35.6602 96.267 35.5399 95.7514 35.55 95.23C35.5365 94.7051 35.657 94.1854 35.9 93.72C36.1278 93.2956 36.4756 92.9478 36.9 92.72C37.3107 92.4861 37.7775 92.3685 38.25 92.38C38.7256 92.3702 39.1951 92.4875 39.61 92.72C40.0344 92.9478 40.3822 93.2956 40.61 93.72C40.8531 94.1854 40.9735 94.7051 40.96 95.23C40.9701 95.7514 40.8498 96.267 40.61 96.73Z","fill":"#332E2B","key":22}),React.createElement("path",{"d":"M46.87 89.24C46.6868 89.2501 46.5036 89.2224 46.3316 89.1588C46.1596 89.0951 46.0025 88.9968 45.87 88.87C45.7485 88.7539 45.6522 88.6141 45.5868 88.4594C45.5214 88.3046 45.4885 88.138 45.49 87.97C45.4867 87.8017 45.5188 87.6346 45.5842 87.4796C45.6497 87.3245 45.7471 87.185 45.87 87.07C46.0033 86.945 46.1608 86.8485 46.3328 86.7866C46.5047 86.7247 46.6876 86.6987 46.87 86.71C47.0508 86.6983 47.2322 86.7222 47.4038 86.7806C47.5754 86.8389 47.7338 86.9305 47.87 87.05C47.9921 87.1592 48.0893 87.2934 48.1549 87.4436C48.2204 87.5937 48.2529 87.7562 48.25 87.92C48.2558 88.0975 48.2246 88.2742 48.1584 88.439C48.0923 88.6038 47.9925 88.753 47.8655 88.8772C47.7386 89.0013 47.5872 89.0977 47.4209 89.1602C47.2547 89.2226 47.0773 89.2498 46.9 89.24H46.87ZM45.81 99.73V90.73H47.91V99.73H45.81Z","fill":"#332E2B","key":23}),React.createElement("path",{"d":"M54.81 99.85C53.9329 99.8653 53.0661 99.659 52.29 99.25C51.5731 98.8689 50.9746 98.2981 50.56 97.6C50.1537 96.8726 49.9403 96.0532 49.9403 95.22C49.9403 94.3868 50.1537 93.5674 50.56 92.84C50.9754 92.1476 51.5741 91.5835 52.29 91.21C53.0687 90.8089 53.9343 90.6062 54.81 90.62C55.615 90.6045 56.4116 90.7865 57.13 91.15C57.7893 91.4989 58.324 92.044 58.66 92.71L57.04 93.66C56.7999 93.2578 56.454 92.9292 56.04 92.71C55.6539 92.5101 55.2249 92.4071 54.79 92.41C54.3018 92.4002 53.8194 92.5173 53.39 92.75C52.9595 92.9695 52.6095 93.3195 52.39 93.75C52.1396 94.213 52.0155 94.7338 52.03 95.26C52.0155 95.7862 52.1396 96.307 52.39 96.77C52.6117 97.1989 52.9611 97.5483 53.39 97.77C53.8194 98.0026 54.3018 98.1198 54.79 98.11C55.2249 98.1129 55.6539 98.0099 56.04 97.81C56.454 97.5908 56.7999 97.2622 57.04 96.86L58.66 97.81C58.3182 98.4718 57.7851 99.0154 57.13 99.37C56.4087 99.7205 55.6112 99.8855 54.81 99.85Z","fill":"#332E2B","key":24}),React.createElement("path",{"d":"M66.01 99.24C65.7437 99.4519 65.4377 99.6083 65.11 99.7C64.7453 99.8008 64.3684 99.8513 63.99 99.85C63.1554 99.9024 62.3334 99.626 61.7 99.08C61.4136 98.779 61.1928 98.4218 61.0517 98.0311C60.9105 97.6403 60.8521 97.2245 60.88 96.81V92.48H59.4V90.79H60.88V88.73H63V90.79H65.4V92.48H63V96.76C62.979 97.1215 63.093 97.4779 63.32 97.76C63.4422 97.8798 63.588 97.9728 63.7481 98.0331C63.9082 98.0934 64.0792 98.1196 64.25 98.11C64.6739 98.1241 65.09 97.9936 65.43 97.74L66.01 99.24Z","fill":"#332E2B","key":25}),React.createElement("path",{"d":"M68.81 89.24C68.627 89.2489 68.444 89.2207 68.2722 89.1571C68.1004 89.0935 67.9431 88.9959 67.81 88.87C67.6885 88.7539 67.5922 88.6141 67.5268 88.4594C67.4614 88.3046 67.4285 88.138 67.43 87.97C67.4267 87.8017 67.4588 87.6346 67.5243 87.4796C67.5897 87.3245 67.6871 87.185 67.81 87.07C67.9436 86.9455 68.1012 86.8493 68.2731 86.7875C68.4449 86.7256 68.6276 86.6992 68.81 86.71C68.9908 86.6983 69.1722 86.7222 69.3438 86.7806C69.5154 86.8389 69.6738 86.9305 69.81 87.05C69.9321 87.1592 70.0293 87.2934 70.0949 87.4436C70.1604 87.5937 70.1929 87.7562 70.19 87.92C70.1953 88.0936 70.1652 88.2664 70.1016 88.428C70.038 88.5896 69.9422 88.7366 69.82 88.86C69.6879 88.9909 69.5296 89.0924 69.3556 89.1579C69.1815 89.2234 68.9956 89.2514 68.81 89.24ZM67.75 99.73V90.73H69.86V99.73H67.75Z","fill":"#332E2B","key":26}),React.createElement("path",{"d":"M76.67 99.85C75.8121 99.8644 74.965 99.6578 74.21 99.25C73.5038 98.8649 72.916 98.2944 72.51 97.6C72.0971 96.8748 71.8799 96.0546 71.8799 95.22C71.8799 94.3854 72.0971 93.5652 72.51 92.84C72.9168 92.1513 73.5049 91.5875 74.21 91.21C74.9672 90.8091 75.8134 90.6061 76.67 90.62C77.5362 90.6062 78.3921 90.809 79.16 91.21C79.8645 91.584 80.4526 92.1444 80.86 92.83C81.2663 93.5592 81.4796 94.3802 81.4796 95.215C81.4796 96.0498 81.2663 96.8708 80.86 97.6C80.454 98.2944 79.8663 98.8649 79.16 99.25C78.3946 99.6585 77.5375 99.8651 76.67 99.85ZM76.67 98.04C77.152 98.051 77.6283 97.9336 78.05 97.7C78.4777 97.4767 78.8267 97.1277 79.05 96.7C79.2863 96.2361 79.4032 95.7205 79.39 95.2C79.4066 94.676 79.2896 94.1563 79.05 93.69C78.83 93.2599 78.4801 92.91 78.05 92.69C77.6279 92.4667 77.1576 92.35 76.68 92.35C76.2025 92.35 75.7321 92.4667 75.31 92.69C74.8838 92.9153 74.5353 93.2638 74.31 93.69C74.0631 94.154 73.9424 94.6747 73.96 95.2C73.9442 95.7219 74.0648 96.239 74.31 96.7C74.5383 97.124 74.886 97.4717 75.31 97.7C75.7253 97.9315 76.1946 98.0489 76.67 98.04Z","fill":"#332E2B","key":27}),React.createElement("path",{"d":"M92.38 94.57V99.73H90.26V94.84C90.3085 94.1937 90.1082 93.5534 89.7 93.05C89.4933 92.8486 89.247 92.6921 88.9768 92.5906C88.7066 92.4891 88.4183 92.4446 88.13 92.46C87.6707 92.4485 87.2162 92.5552 86.81 92.77C86.4274 92.9675 86.1188 93.2831 85.93 93.67C85.7012 94.1392 85.5946 94.6586 85.62 95.18V99.73H83.51V90.73H85.51V91.92C85.7798 91.5772 86.121 91.2974 86.51 91.1C87.1622 90.7773 87.8824 90.6161 88.61 90.63C89.2771 90.6198 89.9375 90.7635 90.54 91.05C91.1063 91.3365 91.5707 91.7904 91.87 92.35C92.2259 93.0346 92.4014 93.7987 92.38 94.57Z","fill":"#332E2B","key":28}),React.createElement("defs",{"key":29},[React.createElement("linearGradient",{"id":"paint0_linear_97_203","x1":"58.31","y1":"22.5","x2":"58.45","y2":"22.87","gradientUnits":"userSpaceOnUse","key":0},[React.createElement("stop",{"stopColor":"#63B22F","key":0}),React.createElement("stop",{"offset":"0.68","stopColor":"#046C5B","key":1}),React.createElement("stop",{"offset":"1","stopColor":"#13302C","key":2})]),React.createElement("linearGradient",{"id":"paint1_linear_97_203","x1":"46.54","y1":"8.09","x2":"46.91","y2":"9.11999","gradientUnits":"userSpaceOnUse","key":1},[React.createElement("stop",{"stopColor":"#63B22F","key":0}),React.createElement("stop",{"offset":"0.68","stopColor":"#046C5B","key":1}),React.createElement("stop",{"offset":"1","stopColor":"#13302C","key":2})])])]);
}

QuitYourAddictionLogo.defaultProps = {"viewBox":"0 0 101 100","fill":"none"};

module.exports = QuitYourAddictionLogo;

QuitYourAddictionLogo.default = QuitYourAddictionLogo;


/***/ }),

/***/ "./src/images/search_icon.svg":
/*!************************************!*\
  !*** ./src/images/search_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function SearchIcon (props) {
    return React.createElement("svg",props,React.createElement("g",{"id":"search_icon"},React.createElement("path",{"id":"search_icon_2","d":"M8.89605 2.00628e-08C10.5665 -0.000112141 12.2033 0.470054 13.619 1.35669C15.0347 2.24333 16.1722 3.51061 16.9013 5.01352C17.6304 6.51642 17.9216 8.19422 17.7417 9.8549C17.5617 11.5156 16.9178 13.0921 15.8837 14.4039L19.7062 18.2262C19.8968 18.4236 20.0023 18.688 20 18.9625C19.9976 19.2369 19.8875 19.4994 19.6934 19.6934C19.4994 19.8875 19.2368 19.9976 18.9624 20C18.688 20.0023 18.4236 19.8968 18.2262 19.7062L14.4037 15.8839C13.2894 16.7619 11.9813 17.3609 10.5886 17.6306C9.19575 17.9004 7.75864 17.8331 6.3971 17.4346C5.03557 17.036 3.7891 16.3176 2.76169 15.3393C1.73427 14.361 0.955709 13.1513 0.490952 11.8109C0.0261946 10.4706 -0.111279 9.03854 0.0899992 7.63426C0.291278 6.22998 0.825473 4.8942 1.64802 3.73835C2.47056 2.5825 3.5576 1.64011 4.81844 0.989804C6.07928 0.339494 7.47736 0.000120879 8.89605 2.00628e-08ZM8.89605 2.09329C7.09166 2.09329 5.36118 2.81005 4.08529 4.08589C2.8094 5.36173 2.09261 7.09215 2.09261 8.89647C2.09261 10.7008 2.8094 12.4312 4.08529 13.707C5.36118 14.9829 7.09166 15.6996 8.89605 15.6996C10.7004 15.6996 12.4309 14.9829 13.7068 13.707C14.9827 12.4312 15.6995 10.7008 15.6995 8.89647C15.6995 7.09215 14.9827 5.36173 13.7068 4.08589C12.4309 2.81005 10.7004 2.09329 8.89605 2.09329ZM8.89605 3.13993C10.4228 3.13993 11.8871 3.74642 12.9667 4.82598C14.0463 5.90554 14.6528 7.36974 14.6528 8.89647C14.6528 10.4232 14.0463 11.8874 12.9667 12.967C11.8871 14.0465 10.4228 14.653 8.89605 14.653C7.36926 14.653 5.90501 14.0465 4.82541 12.967C3.7458 11.8874 3.13929 10.4232 3.13929 8.89647C3.13929 7.36974 3.7458 5.90554 4.82541 4.82598C5.90501 3.74642 7.36926 3.13993 8.89605 3.13993Z"})));
}

SearchIcon.defaultProps = {"width":"20","height":"20","viewBox":"0 0 20 20"};

module.exports = SearchIcon;

SearchIcon.default = SearchIcon;


/***/ }),

/***/ "./src/images/x_icon.svg":
/*!*******************************!*\
  !*** ./src/images/x_icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function XIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M6.84653 4.95123L14.432 14.9819H13.254L5.58372 4.95123H6.84653Z","fill":"#E27023","key":0}),React.createElement("path",{"d":"M6.84653 4.95123H5.58372L13.254 14.9819H14.432L6.84653 4.95123Z","fill":"black","key":1}),React.createElement("path",{"d":"M19.9984 4.24702C19.979 3.11427 19.5155 2.03445 18.7077 1.24009C17.9 0.445737 16.8125 0.000404177 15.6796 0H4.32092C3.17494 0 2.0759 0.45524 1.26557 1.26557C0.455238 2.0759 0 3.17494 0 4.32092V15.6775C0 16.8234 0.455238 17.9225 1.26557 18.7328C2.0759 19.5431 3.17494 19.9984 4.32092 19.9984H15.6796C16.8125 19.998 17.9 19.5526 18.7077 18.7583C19.5155 17.9639 19.979 16.8841 19.9984 15.7514C19.9984 15.7275 19.9984 15.7014 19.9984 15.6775V4.32092C20.0005 4.29701 20.0005 4.27093 19.9984 4.24702ZM19.3463 15.6927V15.7427C19.3232 16.7022 18.9276 17.6151 18.2432 18.2881C17.5588 18.9611 16.6394 19.3414 15.6796 19.3485H4.32092C3.34785 19.3473 2.415 18.9601 1.72714 18.2719C1.03928 17.5836 0.652625 16.6505 0.65205 15.6775V4.32092C0.6532 3.34823 1.04011 2.41571 1.72791 1.72791C2.4157 1.04011 3.34823 0.6532 4.32092 0.65205H15.6796C16.6394 0.659111 17.5588 1.0394 18.2432 1.71241C18.9276 2.38542 19.3232 3.29832 19.3463 4.25789V15.6927ZM12.3237 9.07219L16.6099 4.17747L17.5554 3.09072H13.7039L13.5083 3.30807L10.5458 6.7009L8.005 3.34502L7.80938 3.08637H1.78227L2.58429 4.134L7.48553 10.5458L2.89293 15.8187L1.94746 16.9055H5.7989L5.99451 16.6881L9.29388 12.9193L12.152 16.6555L12.3477 16.912H18.2465L17.4554 15.8665L12.3237 9.07219ZM12.6693 16.2447L9.32866 11.876L5.5033 16.2447H3.38414L8.33755 10.5806L3.12115 3.74494H7.4964L10.5197 7.74201L14.0104 3.74494H16.1274L11.4935 9.03959L16.9446 16.2447H12.6693Z","fill":"#E27023","key":2}),React.createElement("path",{"d":"M19.9984 4.24702C19.979 3.11427 19.5155 2.03445 18.7077 1.24009C17.9 0.445737 16.8125 0.000404177 15.6796 0H4.32092C3.17494 0 2.0759 0.45524 1.26557 1.26557C0.455238 2.0759 0 3.17494 0 4.32092V15.6775C0 16.8234 0.455238 17.9225 1.26557 18.7328C2.0759 19.5431 3.17494 19.9984 4.32092 19.9984H15.6796C16.8125 19.998 17.9 19.5526 18.7077 18.7583C19.5155 17.9639 19.979 16.8841 19.9984 15.7514C19.9984 15.7275 19.9984 15.7014 19.9984 15.6775V4.32092C20.0005 4.29701 20.0005 4.27093 19.9984 4.24702ZM19.3463 15.6927V15.7427C19.3232 16.7022 18.9276 17.6151 18.2432 18.2881C17.5588 18.9611 16.6394 19.3414 15.6796 19.3485H4.32092C3.34785 19.3473 2.415 18.9601 1.72714 18.2719C1.03928 17.5836 0.652625 16.6505 0.65205 15.6775V4.32092C0.6532 3.34823 1.04011 2.41571 1.72791 1.72791C2.4157 1.04011 3.34823 0.6532 4.32092 0.65205H15.6796C16.6394 0.659111 17.5588 1.0394 18.2432 1.71241C18.9276 2.38542 19.3232 3.29832 19.3463 4.25789V15.6927ZM12.3237 9.07219L16.6099 4.17747L17.5554 3.09072H13.7039L13.5083 3.30807L10.5458 6.7009L8.005 3.34502L7.80938 3.08637H1.78227L2.58429 4.134L7.48553 10.5458L2.89293 15.8187L1.94746 16.9055H5.7989L5.99451 16.6881L9.29388 12.9193L12.152 16.6555L12.3477 16.912H18.2465L17.4554 15.8665L12.3237 9.07219ZM12.6693 16.2447L9.32866 11.876L5.5033 16.2447H3.38414L8.33755 10.5806L3.12115 3.74494H7.4964L10.5197 7.74201L14.0104 3.74494H16.1274L11.4935 9.03959L16.9446 16.2447H12.6693ZM17.451 15.8513L12.3237 9.07219L16.6099 4.17747L17.5554 3.09072H13.7039L13.5083 3.30807L10.5458 6.7009L8.005 3.34502L7.80938 3.08637H1.78227L2.58429 4.134L7.48553 10.5458L2.89293 15.8187L1.94746 16.9055H5.7989L5.99451 16.6881L9.29388 12.9193L12.152 16.6555L12.3477 16.912H18.2465L17.451 15.8513ZM12.6693 16.2447L9.32866 11.876L5.5033 16.2447H3.38414L8.33755 10.5806L3.12115 3.74494H7.4964L10.5197 7.74201L14.0104 3.74494H16.1274L11.4935 9.03959L16.9446 16.2447H12.6693ZM17.451 15.8513L12.3237 9.07219L16.6099 4.17747L17.5554 3.09072H13.7039L13.5083 3.30807L10.5458 6.7009L8.005 3.34502L7.80938 3.08637H1.78227L2.58429 4.134L7.48553 10.5458L2.89293 15.8187L1.94746 16.9055H5.7989L5.99451 16.6881L9.29388 12.9193L12.152 16.6555L12.3477 16.912H18.2465L17.451 15.8513ZM12.6693 16.2447L9.32866 11.876L5.5033 16.2447H3.38414L8.33755 10.5806L3.12115 3.74494H7.4964L10.5197 7.74201L14.0104 3.74494H16.1274L11.4935 9.03959L16.9446 16.2447H12.6693Z","fill":"black","key":3}),React.createElement("path",{"d":"M19.3463 4.27091V4.25787C19.3232 3.29831 18.9276 2.3854 18.2432 1.7124C17.5588 1.03939 16.6394 0.6591 15.6796 0.652039H4.32092C3.34823 0.653189 2.41571 1.0401 1.72791 1.7279C1.04011 2.41569 0.653204 3.34822 0.652054 4.32091V15.6774C0.653204 16.6501 1.04011 17.5827 1.72791 18.2705C2.41571 18.9583 3.34823 19.3452 4.32092 19.3463H15.6796C16.6394 19.3393 17.5588 18.959 18.2432 18.286C18.9276 17.613 19.3232 16.7 19.3463 15.7405V4.27091ZM12.3477 16.9011L12.152 16.6447L9.29389 12.9084L5.99451 16.6772L5.7989 16.8946H1.94746L2.89293 15.8078L7.49423 10.5458L2.59299 4.13399L1.78227 3.09723H7.80069L7.99631 3.35587L10.5371 6.71176L13.5192 3.31893L13.7148 3.10158H17.5662L16.6208 4.18833L12.3237 9.07218L17.4554 15.8557L18.2465 16.9011H12.3477Z","fill":"#E27023","key":4})]);
}

XIcon.defaultProps = {"width":"30","height":"30","viewBox":"0 0 20 20","fill":"none"};

module.exports = XIcon;

XIcon.default = XIcon;


/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mdx-js/react/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/instant.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/instant.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInstantAnimation: () => (/* binding */ createInstantAnimation)
/* harmony export */ });
/* harmony import */ var _js_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");



function createInstantAnimation({ keyframes, delay, onUpdate, onComplete, }) {
    const setValue = () => {
        onUpdate && onUpdate(keyframes[keyframes.length - 1]);
        onComplete && onComplete();
        /**
         * TODO: As this API grows it could make sense to always return
         * animateValue. This will be a bigger project as animateValue
         * is frame-locked whereas this function resolves instantly.
         * This is a behavioural change and also has ramifications regarding
         * assumptions within tests.
         */
        return {
            time: 0,
            speed: 1,
            duration: 0,
            play: (_utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop),
            pause: (_utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop),
            stop: (_utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop),
            then: (resolve) => {
                resolve();
                return Promise.resolve();
            },
            cancel: (_utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop),
            complete: (_utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop),
        };
    };
    return delay
        ? (0,_js_index_mjs__WEBPACK_IMPORTED_MODULE_1__.animateValue)({
            keyframes: [0, 1],
            duration: 0,
            delay,
            onComplete: setValue,
        })
        : setValue();
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   frameloopDriver: () => (/* binding */ frameloopDriver)
/* harmony export */ });
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");


const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(passTimestamp, true),
        stop: () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing ? _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp : performance.now(),
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateValue: () => (/* binding */ animateValue)
/* harmony export */ });
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generators/keyframes.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs");
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generators/spring/index.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generators/inertia.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs");
/* harmony import */ var _driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-frameloop.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generators/utils/calc-duration.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs");









const types = {
    decay: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    inertia: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    tween: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__.spring,
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
function animateValue({ autoplay = true, delay = 0, driver = _driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_3__.frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
    let speed = 1;
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let animationDriver;
    const generatorFactory = types[type] || _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes;
    /**
     * If this isn't the keyframes generator and we've been provided
     * strings as keyframes, we need to interpolate these.
     * TODO: Support velocity for units and complex value types/
     */
    let mapNumbersToKeyframes;
    if (generatorFactory !== _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes &&
        typeof keyframes$1[0] !== "number") {
        mapNumbersToKeyframes = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_4__.interpolate)([0, 100], keyframes$1, {
            clamp: false,
        });
        keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    let mirroredGenerator;
    if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [...keyframes$1].reverse(),
            velocity: -(options.velocity || 0),
        });
    }
    let playState = "idle";
    let holdTime = null;
    let startTime = null;
    let cancelTime = null;
    /**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */
    if (generator.calculatedDuration === null && repeat) {
        generator.calculatedDuration = (0,_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.calcGeneratorDuration)(generator);
    }
    const { calculatedDuration } = generator;
    let resolvedDuration = Infinity;
    let totalDuration = Infinity;
    if (calculatedDuration !== null) {
        resolvedDuration = calculatedDuration + repeatDelay;
        totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    }
    let currentTime = 0;
    const tick = (timestamp) => {
        if (startTime === null)
            return;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (speed > 0)
            startTime = Math.min(startTime, timestamp);
        if (speed < 0)
            startTime = Math.min(timestamp - totalDuration / speed, startTime);
        if (holdTime !== null) {
            currentTime = holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            currentTime = Math.round(timestamp - startTime) * speed;
        }
        // Rebase on delay
        const timeWithoutDelay = currentTime - delay * (speed >= 0 ? 1 : -1);
        const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        currentTime = Math.max(timeWithoutDelay, 0);
        /**
         * If this animation has finished, set the current time
         * to the total duration.
         */
        if (playState === "finished" && holdTime === null) {
            currentTime = totalDuration;
        }
        let elapsed = currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = currentTime / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = Boolean(currentIteration % 2);
            if (iterationIsOdd) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            let p = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_6__.clamp)(0, 1, iterationProgress);
            if (currentTime > totalDuration) {
                p = repeatType === "reverse" && iterationIsOdd ? 1 : 0;
            }
            elapsed = p * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes$1[0] }
            : frameGenerator.next(elapsed);
        if (mapNumbersToKeyframes) {
            state.value = mapNumbersToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
        }
        const isAnimationFinished = holdTime === null &&
            (playState === "finished" || (playState === "running" && done));
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            finish();
        }
        return state;
    };
    const stopAnimationDriver = () => {
        animationDriver && animationDriver.stop();
        animationDriver = undefined;
    };
    const cancel = () => {
        playState = "idle";
        stopAnimationDriver();
        resolveFinishedPromise();
        updateFinishedPromise();
        startTime = cancelTime = null;
    };
    const finish = () => {
        playState = "finished";
        onComplete && onComplete();
        stopAnimationDriver();
        resolveFinishedPromise();
    };
    const play = () => {
        if (hasStopped)
            return;
        if (!animationDriver)
            animationDriver = driver(tick);
        const now = animationDriver.now();
        onPlay && onPlay();
        if (holdTime !== null) {
            startTime = now - holdTime;
        }
        else if (!startTime || playState === "finished") {
            startTime = now;
        }
        if (playState === "finished") {
            updateFinishedPromise();
        }
        cancelTime = startTime;
        holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        playState = "running";
        animationDriver.start();
    };
    if (autoplay) {
        play();
    }
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        get time() {
            return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.millisecondsToSeconds)(currentTime);
        },
        set time(newTime) {
            newTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(newTime);
            currentTime = newTime;
            if (holdTime !== null || !animationDriver || speed === 0) {
                holdTime = newTime;
            }
            else {
                startTime = animationDriver.now() - newTime / speed;
            }
        },
        get duration() {
            const duration = generator.calculatedDuration === null
                ? (0,_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.calcGeneratorDuration)(generator)
                : generator.calculatedDuration;
            return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.millisecondsToSeconds)(duration);
        },
        get speed() {
            return speed;
        },
        set speed(newSpeed) {
            if (newSpeed === speed || !animationDriver)
                return;
            speed = newSpeed;
            controls.time = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.millisecondsToSeconds)(currentTime);
        },
        get state() {
            return playState;
        },
        play,
        pause: () => {
            playState = "paused";
            holdTime = currentTime;
        },
        stop: () => {
            hasStopped = true;
            if (playState === "idle")
                return;
            playState = "idle";
            onStop && onStop();
            cancel();
        },
        cancel: () => {
            if (cancelTime !== null)
                tick(cancelTime);
            cancel();
        },
        complete: () => {
            playState = "finished";
        },
        sample: (elapsed) => {
            startTime = 0;
            return tick(elapsed);
        },
    };
    return controls;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAcceleratedAnimation: () => (/* binding */ createAcceleratedAnimation)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs");
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs");
/* harmony import */ var _utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get-final-keyframe.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _js_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/index.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/memo.mjs */ "./node_modules/framer-motion/dist/es/utils/memo.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");









const supportsWaapi = (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
const requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" ||
    valueName === "backgroundColor" ||
    !(0,_easing_mjs__WEBPACK_IMPORTED_MODULE_1__.isWaapiSupportedEasing)(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
    const canAccelerateAnimation = supportsWaapi() &&
        acceleratedValues.has(valueName) &&
        !options.repeatDelay &&
        options.repeatType !== "mirror" &&
        options.damping !== 0 &&
        options.type !== "inertia";
    if (!canAccelerateAnimation)
        return false;
    /**
     * TODO: Unify with js/index
     */
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let { keyframes, duration = 300, ease, times } = options;
    /**
     * If this animation needs pre-generated keyframes then generate.
     */
    if (requiresPregeneratedKeyframes(valueName, options)) {
        const sampleAnimation = (0,_js_index_mjs__WEBPACK_IMPORTED_MODULE_2__.animateValue)({
            ...options,
            repeat: 0,
            delay: 0,
        });
        let state = { done: false, value: keyframes[0] };
        const pregeneratedKeyframes = [];
        /**
         * Bail after 20 seconds of pre-generated keyframes as it's likely
         * we're heading for an infinite loop.
         */
        let t = 0;
        while (!state.done && t < maxDuration) {
            state = sampleAnimation.sample(t);
            pregeneratedKeyframes.push(state.value);
            t += sampleDelta;
        }
        times = undefined;
        keyframes = pregeneratedKeyframes;
        duration = t - sampleDelta;
        ease = "linear";
    }
    const animation = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_3__.animateStyle)(value.owner.current, valueName, keyframes, {
        ...options,
        duration,
        /**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */
        ease: ease,
        times,
    });
    const cancelAnimation = () => animation.cancel();
    const safeCancel = () => {
        _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.update(cancelAnimation);
        resolveFinishedPromise();
        updateFinishedPromise();
    };
    /**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */
    animation.onfinish = () => {
        value.set((0,_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_5__.getFinalKeyframe)(keyframes, options));
        onComplete && onComplete();
        safeCancel();
    };
    /**
     * Animation interrupt callback.
     */
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        attachTimeline(timeline) {
            animation.timeline = timeline;
            animation.onfinish = null;
            return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_6__.noop;
        },
        get time() {
            return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.millisecondsToSeconds)(animation.currentTime || 0);
        },
        set time(newTime) {
            animation.currentTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(newTime);
        },
        get speed() {
            return animation.playbackRate;
        },
        set speed(newSpeed) {
            animation.playbackRate = newSpeed;
        },
        get duration() {
            return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.millisecondsToSeconds)(duration);
        },
        play: () => {
            if (hasStopped)
                return;
            animation.play();
            /**
             * Cancel any pending cancel tasks
             */
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.cancelFrame)(cancelAnimation);
        },
        pause: () => animation.pause(),
        stop: () => {
            hasStopped = true;
            if (animation.playState === "idle")
                return;
            /**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */
            const { currentTime } = animation;
            if (currentTime) {
                const sampleAnimation = (0,_js_index_mjs__WEBPACK_IMPORTED_MODULE_2__.animateValue)({
                    ...options,
                    autoplay: false,
                });
                value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
            }
            safeCancel();
        },
        complete: () => animation.finish(),
        cancel: safeCancel,
    };
    return controls;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezierAsString: () => (/* binding */ cubicBezierAsString),
/* harmony export */   isWaapiSupportedEasing: () => (/* binding */ isWaapiSupportedEasing),
/* harmony export */   mapEasingToNativeEasing: () => (/* binding */ mapEasingToNativeEasing),
/* harmony export */   supportedWaapiEasing: () => (/* binding */ supportedWaapiEasing)
/* harmony export */ });
/* harmony import */ var _easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../easing/utils/is-bezier-definition.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs");


function isWaapiSupportedEasing(easing) {
    return Boolean(!easing ||
        (typeof easing === "string" && supportedWaapiEasing[easing]) ||
        (0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isBezierDefinition)(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing) {
    if (!easing)
        return undefined;
    return (0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isBezierDefinition)(easing)
        ? cubicBezierAsString(easing)
        : Array.isArray(easing)
            ? easing.map(mapEasingToNativeEasing)
            : supportedWaapiEasing[easing];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateStyle: () => (/* binding */ animateStyle)
/* harmony export */ });
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs");


function animateStyle(element, valueName, keyframes, { delay = 0, duration, repeat = 0, repeatType = "loop", ease, times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.mapEasingToNativeEasing)(ease);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFinalKeyframe: () => (/* binding */ getFinalKeyframe)
/* harmony export */ });
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }) {
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : keyframes.length - 1;
    return keyframes[index];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inertia: () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spring/index.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/velocity.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs");



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = (0,_spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__.spring)({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__.calcGeneratorVelocity)(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEasing: () => (/* binding */ defaultEasing),
/* harmony export */   keyframes: () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/ease.mjs */ "./node_modules/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../easing/utils/is-easing-array.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs");
/* harmony import */ var _easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/utils/map.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/map.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/offsets/time.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/time.mjs");







function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = (0,_easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__.isEasingArray)(ease)
        ? ease.map(_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)
        : (0,_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = (0,_utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__.convertOffsetToTimes)(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAngularFreq: () => (/* binding */ calcAngularFreq),
/* harmony export */   findSpring: () => (/* binding */ findSpring),
/* harmony export */   maxDamping: () => (/* binding */ maxDamping),
/* harmony export */   maxDuration: () => (/* binding */ maxDuration),
/* harmony export */   minDamping: () => (/* binding */ minDamping),
/* harmony export */   minDuration: () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");




const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__.clamp)(minDuration, maxDuration, (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spring: () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/velocity.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs");
/* harmony import */ var _find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs");




const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_0__.findSpring)(options);
        springOptions = {
            ...springOptions,
            ...derived,
            velocity: 0.0,
            mass: 1.0,
        };
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring({ keyframes, restDelta, restSpeed, ...options }) {
    const origin = keyframes[0];
    const target = keyframes[keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    const initialVelocity = velocity ? -(0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(velocity) : 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_0__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    return {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = initialVelocity;
                if (t !== 0) {
                    /**
                     * We only need to calculate velocity for under-damped springs
                     * as over- and critically-damped springs can't overshoot, so
                     * checking only for displacement is enough.
                     */
                    if (dampingRatio < 1) {
                        currentVelocity = (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_2__.calcGeneratorVelocity)(resolveSpring, t, current);
                    }
                    else {
                        currentVelocity = 0;
                    }
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorDuration: () => (/* binding */ calcGeneratorDuration),
/* harmony export */   maxGeneratorDuration: () => (/* binding */ maxGeneratorDuration)
/* harmony export */ });
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorVelocity: () => (/* binding */ calcGeneratorVelocity)
/* harmony export */ });
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateMotionValue: () => (/* binding */ animateMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _animators_waapi_create_accelerated_animation_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animators/waapi/create-accelerated-animation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs");
/* harmony import */ var _animators_instant_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animators/instant.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/instant.mjs");
/* harmony import */ var _utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/default-transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var _utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-animatable.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs");
/* harmony import */ var _utils_keyframes_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/keyframes.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs");
/* harmony import */ var _utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _animators_js_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animators/js/index.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs");











const animateMotionValue = (valueName, value, target, transition = {}) => {
    return (onComplete) => {
        const valueTransition = (0,_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition, valueName) || {};
        /**
         * Most transition values are currently completely overwritten by value-specific
         * transitions. In the future it'd be nicer to blend these transitions. But for now
         * delay actually does inherit from the root transition if not value-specific.
         */
        const delay = valueTransition.delay || transition.delay || 0;
        /**
         * Elapsed isn't a public transition option but can be passed through from
         * optimized appear effects in milliseconds.
         */
        let { elapsed = 0 } = transition;
        elapsed = elapsed - (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(delay);
        const keyframes = (0,_utils_keyframes_mjs__WEBPACK_IMPORTED_MODULE_2__.getKeyframes)(value, valueName, target, valueTransition);
        /**
         * Check if we're able to animate between the start and end keyframes,
         * and throw a warning if we're attempting to animate between one that's
         * animatable and another that isn't.
         */
        const originKeyframe = keyframes[0];
        const targetKeyframe = keyframes[keyframes.length - 1];
        const isOriginAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_3__.isAnimatable)(valueName, originKeyframe);
        const isTargetAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_3__.isAnimatable)(valueName, targetKeyframe);
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_4__.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
        let options = {
            keyframes,
            velocity: value.getVelocity(),
            ease: "easeOut",
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v) => {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: () => {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
        };
        /**
         * If there's no transition defined for this value, we can generate
         * unqiue transition settings for this value.
         */
        if (!(0,_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransitionDefined)(valueTransition)) {
            options = {
                ...options,
                ...(0,_utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__.getDefaultTransition)(valueName, options),
            };
        }
        /**
         * Both WAAPI and our internal animation functions use durations
         * as defined by milliseconds, while our external API defines them
         * as seconds.
         */
        if (options.duration) {
            options.duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.duration);
        }
        if (options.repeatDelay) {
            options.repeatDelay = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.repeatDelay);
        }
        if (!isOriginAnimatable ||
            !isTargetAnimatable ||
            _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_6__.instantAnimationState.current ||
            valueTransition.type === false) {
            /**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */
            return (0,_animators_instant_mjs__WEBPACK_IMPORTED_MODULE_7__.createInstantAnimation)(_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_6__.instantAnimationState.current
                ? { ...options, delay: 0 }
                : options);
        }
        /**
         * Animate via WAAPI if possible.
         */
        if (
        /**
         * If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         */
        !transition.isHandoff &&
            value.owner &&
            value.owner.current instanceof HTMLElement &&
            /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */
            !value.owner.getProps().onUpdate) {
            const acceleratedAnimation = (0,_animators_waapi_create_accelerated_animation_mjs__WEBPACK_IMPORTED_MODULE_8__.createAcceleratedAnimation)(value, valueName, options);
            if (acceleratedAnimation)
                return acceleratedAnimation;
        }
        /**
         * If we didn't create an accelerated animation, create a JS animation
         */
        return (0,_animators_js_index_mjs__WEBPACK_IMPORTED_MODULE_9__.animateValue)(options);
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSingleValue: () => (/* binding */ animateSingleValue)
/* harmony export */ });
/* harmony import */ var _motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(value);
    motionValue$1.start((0,_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateTarget: () => (/* binding */ animateTarget)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../optimized-appear/data-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");
/* harmony import */ var _motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/use-will-change/is.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs");
/* harmony import */ var _render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function hasKeyframesChanged(value, target) {
    const current = value.get();
    if (Array.isArray(target)) {
        for (let i = 0; i < target.length; i++) {
            if (target[i] !== current)
                return true;
        }
    }
    else {
        return current !== target;
    }
}
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
    const willChange = visualElement.getValue("willChange");
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key);
        const valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            elapsed: 0,
            ...(0,_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition || {}, key),
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        if (window.HandoffAppearAnimations) {
            const appearId = visualElement.getProps()[_optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_1__.optimizedAppearDataAttribute];
            if (appearId) {
                const elapsed = window.HandoffAppearAnimations(appearId, key, value, _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame);
                if (elapsed !== null) {
                    valueTransition.elapsed = elapsed;
                    valueTransition.isHandoff = true;
                }
            }
        }
        let canSkip = !valueTransition.isHandoff &&
            !hasKeyframesChanged(value, valueTarget);
        if (valueTransition.type === "spring" &&
            (value.getVelocity() || valueTransition.velocity)) {
            canSkip = false;
        }
        /**
         * Temporarily disable skipping animations if there's an animation in
         * progress. Better would be to track the current target of a value
         * and compare that against valueTarget.
         */
        if (value.animation) {
            canSkip = false;
        }
        if (canSkip)
            continue;
        value.start((0,_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.transformProps.has(key)
            ? { type: false }
            : valueTransition));
        const animation = value.animation;
        if ((0,_value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_5__.isWillChangeMotionValue)(willChange)) {
            willChange.add(key);
            animation.then(() => willChange.remove(key));
        }
        animations.push(animation);
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            transitionEnd && (0,_render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__.setTarget)(visualElement, transitionEnd);
        });
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateVariant: () => (/* binding */ animateVariant),
/* harmony export */   sortByTreeOrder: () => (/* binding */ sortByTreeOrder)
/* harmony export */ });
/* harmony import */ var _render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual-element-target.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");



function animateVariant(visualElement, variant, options = {}) {
    const resolved = (0,_render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.custom);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all((0,_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_1__.animateTarget)(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateVisualElement: () => (/* binding */ animateVisualElement)
/* harmony export */ });
/* harmony import */ var _render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-element-target.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");
/* harmony import */ var _visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual-element-variant.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs");




function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => (0,_visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__.animateVariant)(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = (0,_visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__.animateVariant)(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? (0,_render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all((0,_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_2__.animateTarget)(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => visualElement.notify("AnimationComplete", definition));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optimizedAppearDataAttribute: () => (/* binding */ optimizedAppearDataAttribute),
/* harmony export */   optimizedAppearDataId: () => (/* binding */ optimizedAppearDataId)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0,_render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__.camelToDash)(optimizedAppearDataId);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultTransition: () => (/* binding */ getDefaultTransition)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimatable: () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (key, value) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimationControls: () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isKeyframesTarget: () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNone: () => (/* binding */ isNone)
/* harmony export */ });
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__.isZeroValueString)(value);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getKeyframes: () => (/* binding */ getKeyframes)
/* harmony export */ });
/* harmony import */ var _render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-animatable.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs");
/* harmony import */ var _is_none_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-none.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs");




function getKeyframes(value, valueName, target, transition) {
    const isTargetAnimatable = (0,_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(valueName, target);
    let keyframes;
    if (Array.isArray(target)) {
        keyframes = [...target];
    }
    else {
        keyframes = [null, target];
    }
    const defaultOrigin = transition.from !== undefined ? transition.from : value.get();
    let animatableTemplateValue = undefined;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < keyframes.length; i++) {
        /**
         * Fill null/wildcard keyframes
         */
        if (keyframes[i] === null) {
            keyframes[i] = i === 0 ? defaultOrigin : keyframes[i - 1];
        }
        if ((0,_is_none_mjs__WEBPACK_IMPORTED_MODULE_1__.isNone)(keyframes[i])) {
            noneKeyframeIndexes.push(i);
        }
        // TODO: Clean this conditional, it works for now
        if (typeof keyframes[i] === "string" &&
            keyframes[i] !== "none" &&
            keyframes[i] !== "0") {
            animatableTemplateValue = keyframes[i];
        }
    }
    if (isTargetAnimatable &&
        noneKeyframeIndexes.length &&
        animatableTemplateValue) {
        for (let i = 0; i < noneKeyframeIndexes.length; i++) {
            const index = noneKeyframeIndexes[i];
            keyframes[index] = (0,_render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_2__.getAnimatableNone)(valueName, animatableTemplateValue);
        }
    }
    return keyframes;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition),
/* harmony export */   isTransitionDefined: () => (/* binding */ isTransitionDefined)
/* harmony export */ });
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopChild: () => (/* binding */ PopChild)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, { ref })));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresenceChild: () => (/* binding */ PresenceChild)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _PopChild_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopChild.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs");






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(newChildrenMap);
    const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopChild_mjs__WEBPACK_IMPORTED_MODULE_2__.PopChild, { isPresent: isPresent }, children);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__.PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimatePresence: () => (/* binding */ AnimatePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_use_force_update_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-force-update.mjs */ "./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");
/* harmony import */ var _utils_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-is-mounted.mjs */ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs");
/* harmony import */ var _PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PresenceChild.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (child) => {
        if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
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
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.invariant)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_2__.LayoutGroupContext).forceRender || (0,_utils_use_force_update_mjs__WEBPACK_IMPORTED_MODULE_3__.useForceUpdate)()[0];
    const isMounted = (0,_utils_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, childrenToRender.map((child) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                // clean up the exiting children map
                exitingChildren.delete(key);
                // compute the keys of children that were rendered once but are no longer present
                // this could happen in case of too many fast consequent renderings
                // @link https://github.com/framer/motion/issues/2023
                const leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
                // clean up the all children map
                leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey));
                // make sure to render only the children that are actually visible
                presentChildren.current = filteredChildren.filter((presentChild) => {
                    const presentChildKey = getChildKey(presentChild);
                    return (
                    // filter out the node exiting
                    presentChildKey === key ||
                        // filter out the leftover children
                        leftOverKeys.includes(presentChildKey));
                });
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if ( true &&
        mode === "wait" &&
        childrenToRender.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child))));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPresent: () => (/* binding */ isPresent),
/* harmony export */   useIsPresent: () => (/* binding */ useIsPresent),
/* harmony export */   usePresence: () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");



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
 *     !isPresent && setTimeout(safeToRemove, 1000)
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
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => register(id), []);
    const safeToRemove = () => onExitComplete && onExitComplete(id);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutGroupContext: () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


const LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyContext: () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


const LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionConfigContext: () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
const MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateMotionContext: () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs");




function useCreateMotionContext(props) {
    const { initial, animate } = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_mjs__WEBPACK_IMPORTED_MODULE_2__.MotionContext));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionContext: () => (/* binding */ MotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


const MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTreeVariants: () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");



function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isControllingVariants)(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || (0,_render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresenceContext: () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @public
 */
const PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitchLayoutGroupContext: () => (/* binding */ SwitchLayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/debug/record.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/debug/record.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   record: () => (/* binding */ record)
/* harmony export */ });
function record(data) {
    if (window.MotionDebug) {
        window.MotionDebug.record(data);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/anticipate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/anticipate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anticipate: () => (/* binding */ anticipate)
/* harmony export */ });
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back.mjs */ "./node_modules/framer-motion/dist/es/easing/back.mjs");


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * (0,_back_mjs__WEBPACK_IMPORTED_MODULE_0__.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/back.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/back.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backIn: () => (/* binding */ backIn),
/* harmony export */   backInOut: () => (/* binding */ backInOut),
/* harmony export */   backOut: () => (/* binding */ backOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs");




const backOut = (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__.reverseEasing)(backOut);
const backInOut = (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__.mirrorEasing)(backIn);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/circ.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/circ.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circIn: () => (/* binding */ circIn),
/* harmony export */   circInOut: () => (/* binding */ circInOut),
/* harmony export */   circOut: () => (/* binding */ circOut)
/* harmony export */ });
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs");



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__.mirrorEasing)(circIn);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezier: () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");


/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/ease.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/ease.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeIn: () => (/* binding */ easeIn),
/* harmony export */   easeInOut: () => (/* binding */ easeInOut),
/* harmony export */   easeOut: () => (/* binding */ easeOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");


const easeIn = (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 1, 1);
const easeOut = (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 0.58, 1);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mirrorEasing: () => (/* binding */ mirrorEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reverseEasing: () => (/* binding */ reverseEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBezierDefinition: () => (/* binding */ isBezierDefinition)
/* harmony export */ });
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEasingArray: () => (/* binding */ isEasingArray)
/* harmony export */ });
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/map.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/map.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingDefinitionToFunction: () => (/* binding */ easingDefinitionToFunction)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _ease_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ease.mjs */ "./node_modules/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circ.mjs */ "./node_modules/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back.mjs */ "./node_modules/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anticipate.mjs */ "./node_modules/framer-motion/dist/es/easing/anticipate.mjs");








const easingLookup = {
    linear: _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop,
    easeIn: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circIn,
    circInOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circInOut,
    circOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut,
    backIn: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backIn,
    backInOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backInOut,
    backOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backOut,
    anticipate: _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__.anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_6__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDomEvent: () => (/* binding */ addDomEvent)
/* harmony export */ });
function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPointerEvent: () => (/* binding */ addPointerEvent)
/* harmony export */ });
/* harmony import */ var _add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _event_info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");



function addPointerEvent(target, eventName, handler, options) {
    return (0,_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_0__.addDomEvent)(target, eventName, (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__.addPointerInfo)(handler), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPointerInfo: () => (/* binding */ addPointerInfo),
/* harmony export */   extractEventInfo: () => (/* binding */ extractEventInfo)
/* harmony export */ });
/* harmony import */ var _utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-primary-pointer.mjs */ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs");


function extractEventInfo(event, pointType = "page") {
    return {
        point: {
            x: event[pointType + "X"],
            y: event[pointType + "Y"],
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => (0,_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_0__.isPrimaryPointer)(event) && handler(event, extractEventInfo(event));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPrimaryPointer: () => (/* binding */ isPrimaryPointer)
/* harmony export */ });
const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/batcher.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/batcher.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderBatcher: () => (/* binding */ createRenderBatcher),
/* harmony export */   stepsOrder: () => (/* binding */ stepsOrder)
/* harmony export */ });
/* harmony import */ var _render_step_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-step.mjs */ "./node_modules/framer-motion/dist/es/frameloop/render-step.mjs");


const stepsOrder = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0,
        timestamp: 0,
        isProcessing: false,
    };
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = (0,_render_step_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderStep)(() => (runNextFrame = true));
        return acc;
    }, {});
    const processStep = (stepId) => steps[stepId].process(state);
    const processBatch = () => {
        const timestamp = performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        stepsOrder.forEach(processStep);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => stepsOrder.forEach((key) => steps[key].cancel(process));
    return { schedule, cancel, state, steps };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/frame.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelFrame: () => (/* binding */ cancelFrame),
/* harmony export */   frame: () => (/* binding */ frame),
/* harmony export */   frameData: () => (/* binding */ frameData),
/* harmony export */   steps: () => (/* binding */ steps)
/* harmony export */ });
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batcher.mjs */ "./node_modules/framer-motion/dist/es/frameloop/batcher.mjs");



const { schedule: frame, cancel: cancelFrame, state: frameData, steps, } = (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop, true);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/render-step.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/render-step.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)
/* harmony export */ });
class Queue {
    constructor() {
        this.order = [];
        this.scheduled = new Set();
    }
    add(process) {
        if (!this.scheduled.has(process)) {
            this.scheduled.add(process);
            this.order.push(process);
            return true;
        }
    }
    remove(process) {
        const index = this.order.indexOf(process);
        if (index !== -1) {
            this.order.splice(index, 1);
            this.scheduled.delete(process);
        }
    }
    clear() {
        this.order.length = 0;
        this.scheduled.clear();
    }
}
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Queue();
    let nextFrame = new Queue();
    let numToRun = 0;
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (queue.add(callback) && addToCurrentFrame && isProcessing) {
                // If we're adding it to the currently running queue, update its measured size
                numToRun = thisFrame.order.length;
            }
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.remove(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            numToRun = thisFrame.order.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = thisFrame.order[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElementDragControls: () => (/* binding */ VisualElementDragControls),
/* harmony export */   elementDragControls: () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _pan_PanSession_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pan/PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs");
/* harmony import */ var _utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/constraints.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection/utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../projection/geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _animation_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../animation/interfaces/motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/get-context-window.mjs */ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");



















const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_0__.createBox)();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor((0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__.extractEventInfo)(event, "page").point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openGlobalLock)
                    this.openGlobalLock();
                this.openGlobalLock = (0,_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openGlobalLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_4__.percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_5__.calcLength)(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__.frame.update(() => onDragStart(event, info), false, true);
            }
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openGlobalLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        this.panSession = new _pan_PanSession_mjs__WEBPACK_IMPORTED_MODULE_7__.PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            contextWindow: (0,_utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_8__.getContextWindow)(this.visualElement),
        });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__.frame.update(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        var _a;
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection &&
            !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(false)
            : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcRelativeConstraints)(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                if (this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.rebaseAxisConstraints)(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(constraints))
            return false;
        const constraintsElement = constraints.current;
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_11__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_12__.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcViewportConstraints)(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints((0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_13__.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_13__.convertBoundingBoxToBox)(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        return axisValue.start((0,_animation_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_14__.animateMotionValue)(axis, axisValue, 0, transition));
    }
    stopAnimation() {
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = "_drag" + axis.toUpperCase();
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue) {
                const latest = axisValue.get();
                boxProgress[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcOrigin)({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__.addPointerEvent)(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
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
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/index.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragGesture: () => (/* binding */ DragGesture)
/* harmony export */ });
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisualElementDragControls.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs");




class DragGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.removeListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.controls = new _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__.VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyConstraints: () => (/* binding */ applyConstraints),
/* harmony export */   calcOrigin: () => (/* binding */ calcOrigin),
/* harmony export */   calcRelativeAxisConstraints: () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   calcRelativeConstraints: () => (/* binding */ calcRelativeConstraints),
/* harmony export */   calcViewportAxisConstraints: () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   calcViewportConstraints: () => (/* binding */ calcViewportConstraints),
/* harmony export */   defaultElastic: () => (/* binding */ defaultElastic),
/* harmony export */   rebaseAxisConstraints: () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   resolveAxisElastic: () => (/* binding */ resolveAxisElastic),
/* harmony export */   resolveDragElastic: () => (/* binding */ resolveDragElastic),
/* harmony export */   resolvePointElastic: () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");





/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__.calcLength)(source);
    const targetLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__.calcLength)(target);
    if (targetLength > sourceLength) {
        origin = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__.progress)(source.min, source.max - targetLength, target.min);
    }
    return (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLock: () => (/* binding */ createLock),
/* harmony export */   getGlobalLock: () => (/* binding */ getGlobalLock),
/* harmony export */   isDragActive: () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/focus.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/focus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusGesture: () => (/* binding */ FocusGesture)
/* harmony export */ });
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");




class FocusGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addDomEvent)(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/hover.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/hover.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoverGesture: () => (/* binding */ HoverGesture)
/* harmony export */ });
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");






function addHoverEvent(node, isActive) {
    const eventName = "pointer" + (isActive ? "enter" : "leave");
    const callbackName = "onHover" + (isActive ? "Start" : "End");
    const handleEvent = (event, info) => {
        if (event.type === "touch" || (0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragActive)())
            return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        if (props[callbackName]) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.update(() => props[callbackName](event, info));
        }
    };
    return (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addPointerEvent)(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName],
    });
}
class HoverGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_3__.Feature {
    mount() {
        this.unmount = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__.pipe)(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanSession: () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _utils_distance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/distance.mjs */ "./node_modules/framer-motion/dist/es/utils/distance.mjs");
/* harmony import */ var _events_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/utils/is-primary-pointer.mjs */ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow } = {}) {
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
        /**
         * @internal
         */
        this.contextWindow = window;
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = (0,_utils_distance_mjs__WEBPACK_IMPORTED_MODULE_0__.distance2D)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const { onEnd, onSessionEnd } = this.handlers;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!(0,_events_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPrimaryPointer)(event))
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        const info = (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_3__.extractEventInfo)(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove), (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp), (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__.millisecondsToSeconds)(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
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




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/pan/index.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanGesture: () => (/* binding */ PanGesture)
/* harmony export */ });
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/get-context-window.mjs */ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");







const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(() => handler(event, info));
    }
};
class PanGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__.Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_3__.PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0,_utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_4__.getContextWindow)(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/press.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/press.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PressGesture: () => (/* binding */ PressGesture)
/* harmony export */ });
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is-node-or-child.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");










function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_0__.extractEventInfo)(syntheticPointerEvent));
}
class PressGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__.Feature {
    constructor() {
        super(...arguments);
        this.removeStartListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.removeEndListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.removeAccessibleListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.startPointerPress = (startEvent, startInfo) => {
            this.removeEndListeners();
            if (this.isPressing)
                return;
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo) => {
                if (!this.checkPressEnd())
                    return;
                const { onTap, onTapCancel } = this.node.getProps();
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.update(() => {
                    /**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */
                    !(0,_utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_4__.isNodeOrChild)(this.node.current, endEvent.target)
                        ? onTapCancel && onTapCancel(endEvent, endInfo)
                        : onTap && onTap(endEvent, endInfo);
                });
            };
            const removePointerUpListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
            const removePointerCancelListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
            this.removeEndListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = () => {
            const handleKeydown = (keydownEvent) => {
                if (keydownEvent.key !== "Enter" || this.isPressing)
                    return;
                const handleKeyup = (keyupEvent) => {
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
                        return;
                    fireSyntheticPointerEvent("up", (event, info) => {
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.update(() => onTap(event, info));
                        }
                    });
                };
                this.removeEndListeners();
                this.removeEndListeners = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", (event, info) => {
                    this.startPress(event, info);
                });
            };
            const removeKeydownListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "keydown", handleKeydown);
            const handleBlur = () => {
                if (!this.isPressing)
                    return;
                fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
            };
            const removeBlurListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "blur", handleBlur);
            this.removeAccessibleListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removeKeydownListener, removeBlurListener);
        };
    }
    startPress(event, info) {
        this.isPressing = true;
        const { onTapStart, whileTap } = this.node.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
        }
        if (onTapStart) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.update(() => onTapStart(event, info));
        }
    }
    checkPressEnd() {
        this.removeEndListeners();
        this.isPressing = false;
        const props = this.node.getProps();
        if (props.whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
        }
        return !(0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_8__.isDragActive)();
    }
    cancelPress(event, info) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel } = this.node.getProps();
        if (onTapCancel) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.update(() => onTapCancel(event, info));
        }
    }
    mount() {
        const props = this.node.getProps();
        const removePointerListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
        const removeFocusListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removePointerListener, removeFocusListener);
    }
    unmount() {
        this.removeStartListeners();
        this.removeEndListeners();
        this.removeAccessibleListeners();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNodeOrChild: () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
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




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Feature: () => (/* binding */ Feature)
/* harmony export */ });
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExitAnimationFeature: () => (/* binding */ ExitAnimationFeature)
/* harmony export */ });
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");


let id = 0;
class ExitAnimationFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete, custom } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => onExitComplete(this.id));
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFeature: () => (/* binding */ AnimationFeature)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");




class AnimationFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = (0,_render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createAnimationState)(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        this.unmount();
        if ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_2__.isAnimationControls)(animate)) {
            this.unmount = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animations: () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var _animation_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs");
/* harmony import */ var _animation_exit_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/exit.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs");



const animations = {
    animation: {
        Feature: _animation_index_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationFeature,
    },
    exit: {
        Feature: _animation_exit_mjs__WEBPACK_IMPORTED_MODULE_1__.ExitAnimationFeature,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureDefinitions: () => (/* binding */ featureDefinitions)
/* harmony export */ });
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drag: () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/drag/index.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/index.mjs");
/* harmony import */ var _gestures_pan_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/pan/index.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/index.mjs");
/* harmony import */ var _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");





const drag = {
    pan: {
        Feature: _gestures_pan_index_mjs__WEBPACK_IMPORTED_MODULE_0__.PanGesture,
    },
    drag: {
        Feature: _gestures_drag_index_mjs__WEBPACK_IMPORTED_MODULE_1__.DragGesture,
        ProjectionNode: _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_2__.HTMLProjectionNode,
        MeasureLayout: _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_3__.MeasureLayout,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gestureAnimations: () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/hover.mjs */ "./node_modules/framer-motion/dist/es/gestures/hover.mjs");
/* harmony import */ var _gestures_focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/focus.mjs */ "./node_modules/framer-motion/dist/es/gestures/focus.mjs");
/* harmony import */ var _gestures_press_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/press.mjs */ "./node_modules/framer-motion/dist/es/gestures/press.mjs");
/* harmony import */ var _viewport_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs");





const gestureAnimations = {
    inView: {
        Feature: _viewport_index_mjs__WEBPACK_IMPORTED_MODULE_0__.InViewFeature,
    },
    tap: {
        Feature: _gestures_press_mjs__WEBPACK_IMPORTED_MODULE_1__.PressGesture,
    },
    focus: {
        Feature: _gestures_focus_mjs__WEBPACK_IMPORTED_MODULE_2__.FocusGesture,
    },
    hover: {
        Feature: _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_3__.HoverGesture,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");
/* harmony import */ var _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");



const layout = {
    layout: {
        ProjectionNode: _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_0__.HTMLProjectionNode,
        MeasureLayout: _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_1__.MeasureLayout,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeasureLayout: () => (/* binding */ MeasureLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");
/* harmony import */ var _projection_node_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projection/node/state.mjs */ "./node_modules/framer-motion/dist/es/projection/node/state.mjs");
/* harmony import */ var _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../projection/styles/scale-border-radius.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs");
/* harmony import */ var _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../projection/styles/scale-box-shadow.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs");
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");










class MeasureLayoutWithContext extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        (0,_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.addScaleCorrector)(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        _projection_node_state_mjs__WEBPACK_IMPORTED_MODULE_2__.globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            queueMicrotask(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_4__.usePresence)();
    const layoutGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_5__.LayoutGroupContext);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__.SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ..._projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__.correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__.correctBorderRadius,
    borderTopRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__.correctBorderRadius,
    borderBottomLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__.correctBorderRadius,
    borderBottomRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_7__.correctBorderRadius,
    boxShadow: _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBoxShadow,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/load-features.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFeatures: () => (/* binding */ loadFeatures)
/* harmony export */ });
/* harmony import */ var _definitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");


function loadFeatures(features) {
    for (const key in features) {
        _definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions[key] = {
            ..._definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions[key],
            ...features[key],
        };
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InViewFeature: () => (/* binding */ InViewFeature)
/* harmony export */ });
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs");



const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return (0,_observers_mjs__WEBPACK_IMPORTED_MODULE_1__.observeIntersection)(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeIntersection: () => (/* binding */ observeIntersection)
/* harmony export */ });
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMotionComponent: () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/use-visual-element.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs");
/* harmony import */ var _utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/use-motion-ref.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs");
/* harmony import */ var _context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/create.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs");
/* harmony import */ var _features_load_features_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/load-features.mjs */ "./node_modules/framer-motion/dist/es/motion/features/load-features.mjs");
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");
/* harmony import */ var _utils_symbol_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/symbol.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs");














/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && (0,_features_load_features_mjs__WEBPACK_IMPORTED_MODULE_1__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_2__.MotionConfigContext),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = (0,_context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_3__.useCreateMotionContext)(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_4__.isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.useVisualElement)(Component, visualState, configAndProps, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            const initialLayoutGroupConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__.SwitchLayoutGroupContext);
            const isStrict = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_7__.LazyContext).strict;
            if (context.visualElement) {
                MeasureLayout = context.visualElement.loadFeatures(
                // Note: Pass the full new combined props to correctly re-render dynamic feature components.
                configAndProps, isStrict, preloadedFeatures, initialLayoutGroupConfig);
            }
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_8__.MotionContext.Provider, { value: context },
            MeasureLayout && context.visualElement ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null,
            useRender(Component, props, (0,_utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_9__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)));
    }
    const ForwardRefComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MotionComponent);
    ForwardRefComponent[_utils_symbol_mjs__WEBPACK_IMPORTED_MODULE_10__.motionComponentSymbol] = Component;
    return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_11__.LayoutGroupContext).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isForcedMotionValue: () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");



function isForcedMotionValue(key, { layout, layoutId }) {
    return (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   motionComponentSymbol: () => (/* binding */ motionComponentSymbol)
/* harmony export */ });
const motionComponentSymbol = Symbol.for("motionComponentSymbol");




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMotionRef: () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useVisualElement: () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _animation_optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/optimized-appear/data-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");








function useVisualElement(Component, visualState, props, createVisualElement) {
    const { visualElement: parent } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    const lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_2__.LazyContext);
    const presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__.PresenceContext);
    const reducedMotionConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_4__.MotionConfigContext).reducedMotion;
    const visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {
        visualElement && visualElement.update(props, presenceContext);
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const wantsHandoff = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Boolean(props[_animation_optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_5__.optimizedAppearDataAttribute] && !window.HandoffComplete));
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(() => {
        if (!visualElement)
            return;
        visualElement.render();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!visualElement)
            return;
        visualElement.updateFeatures();
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            wantsHandoff.current = false;
            // This ensures all future calls to animateChanges() will run in useEffect
            window.HandoffComplete = true;
        }
    });
    return visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeUseVisualState: () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");









function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    const presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = (0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.isControllingVariants)(props);
    const isVariantNode$1 = (0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.isVariantNode)(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach((definition) => {
            const resolved = (0,_render_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_7__.resolveVariantFromProps)(props, definition);
            if (!resolved)
                return;
            const { transitionEnd, transition, ...target } = resolved;
            for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    const index = isInitialAnimationBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (const key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidMotionProp: () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
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
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        validMotionProps.has(key));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixValues: () => (/* binding */ mixValues)
/* harmony export */ });
/* harmony import */ var _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/circ.mjs */ "./node_modules/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");






const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(0, 
        // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.percent.test(leadRadius) || _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = compress(0, 0.5, _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut);
const easeCrossfadeOut = compress(0.5, 0.95, _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__.noop);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_4__.progress)(min, max, p));
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBoundingBoxToBox: () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   convertBoxToBoundingBox: () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   transformBoxPoints: () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyAxisInto: () => (/* binding */ copyAxisInto),
/* harmony export */   copyBoxInto: () => (/* binding */ copyBoxInto)
/* harmony export */ });
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAxisDelta: () => (/* binding */ applyAxisDelta),
/* harmony export */   applyBoxDelta: () => (/* binding */ applyBoxDelta),
/* harmony export */   applyPointDelta: () => (/* binding */ applyPointDelta),
/* harmony export */   applyTreeDeltas: () => (/* binding */ applyTreeDeltas),
/* harmony export */   scalePoint: () => (/* binding */ scalePoint),
/* harmony export */   transformAxis: () => (/* binding */ transformAxis),
/* harmony export */   transformBox: () => (/* binding */ transformBox),
/* harmony export */   translateAxis: () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const instance = node.instance;
        if (instance &&
            instance.style &&
            instance.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    treeScale.x = snapToDefault(treeScale.x);
    treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
    if (Number.isInteger(scale))
        return scale;
    return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
    const axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    const originPoint = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAxisDelta: () => (/* binding */ calcAxisDelta),
/* harmony export */   calcBoxDelta: () => (/* binding */ calcBoxDelta),
/* harmony export */   calcLength: () => (/* binding */ calcLength),
/* harmony export */   calcRelativeAxis: () => (/* binding */ calcRelativeAxis),
/* harmony export */   calcRelativeAxisPosition: () => (/* binding */ calcRelativeAxisPosition),
/* harmony export */   calcRelativeBox: () => (/* binding */ calcRelativeBox),
/* harmony export */   calcRelativePosition: () => (/* binding */ calcRelativePosition),
/* harmony export */   isNear: () => (/* binding */ isNear)
/* harmony export */ });
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");


function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAxisDelta: () => (/* binding */ removeAxisDelta),
/* harmony export */   removeAxisTransforms: () => (/* binding */ removeAxisTransforms),
/* harmony export */   removeBoxTransforms: () => (/* binding */ removeBoxTransforms),
/* harmony export */   removePointDelta: () => (/* binding */ removePointDelta)
/* harmony export */ });
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");




/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_2__.mix)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_2__.mix)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAxis: () => (/* binding */ createAxis),
/* harmony export */   createAxisDelta: () => (/* binding */ createAxisDelta),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   createDelta: () => (/* binding */ createDelta)
/* harmony export */ });
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectRatio: () => (/* binding */ aspectRatio),
/* harmony export */   boxEquals: () => (/* binding */ boxEquals),
/* harmony export */   boxEqualsRounded: () => (/* binding */ boxEqualsRounded),
/* harmony export */   isDeltaZero: () => (/* binding */ isDeltaZero)
/* harmony export */ });
/* harmony import */ var _delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");


function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}
function boxEqualsRounded(a, b) {
    return (Math.round(a.x.min) === Math.round(b.x.min) &&
        Math.round(a.x.max) === Math.round(b.x.max) &&
        Math.round(a.y.min) === Math.round(b.y.min) &&
        Math.round(a.y.max) === Math.round(b.y.max));
}
function aspectRatio(box) {
    return (0,_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__.calcLength)(box.x) / (0,_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__.calcLength)(box.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentProjectionNode: () => (/* binding */ DocumentProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");



const DocumentProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    attachResizeListener: (ref, notify) => (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLProjectionNode: () => (/* binding */ HTMLProjectionNode),
/* harmony export */   rootProjectionNode: () => (/* binding */ rootProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs");



const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__.DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanDirtyNodes: () => (/* binding */ cleanDirtyNodes),
/* harmony export */   createProjectionNode: () => (/* binding */ createProjectionNode),
/* harmony export */   mixAxis: () => (/* binding */ mixAxis),
/* harmony export */   mixAxisDelta: () => (/* binding */ mixAxisDelta),
/* harmony export */   mixBox: () => (/* binding */ mixBox),
/* harmony export */   propagateDirtyNodes: () => (/* binding */ propagateDirtyNodes)
/* harmony export */ });
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../animation/mix-values.mjs */ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs");
/* harmony import */ var _geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/copy.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");
/* harmony import */ var _geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/delta-remove.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs");
/* harmony import */ var _geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geometry/utils.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs");
/* harmony import */ var _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/stack.mjs */ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs");
/* harmony import */ var _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _styles_transform_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/transform.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs");
/* harmony import */ var _utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");
/* harmony import */ var _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/flat-tree.mjs */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/framer-motion/dist/es/projection/node/state.mjs");
/* harmony import */ var _utils_delay_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/delay.mjs */ "./node_modules/framer-motion/dist/es/utils/delay.mjs");
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _debug_record_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../debug/record.mjs */ "./node_modules/framer-motion/dist/es/debug/record.mjs");
/* harmony import */ var _render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/dom/utils/is-svg-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs");
/* harmony import */ var _animation_interfaces_single_value_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../animation/interfaces/single-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");


























const transformAxes = ["", "X", "Y", "Z"];
const hiddenVisibility = { visibility: "hidden" };
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
const projectionFrameData = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                projectionFrameData.totalNodes =
                    projectionFrameData.resolvedTargetDeltas =
                        projectionFrameData.recalculatedProjection =
                            0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                (0,_debug_record_mjs__WEBPACK_IMPORTED_MODULE_0__.record)(projectionFrameData);
            };
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_1__.FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__.SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = (0,_render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_3__.isSVGElement)(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = (0,_utils_delay_mjs__WEBPACK_IMPORTED_MODULE_4__.delay)(resizeUnblockUpdate, 250);
                    if (_state_mjs__WEBPACK_IMPORTED_MODULE_5__.globalProjectionState.hasAnimatedSinceResize) {
                        _state_mjs__WEBPACK_IMPORTED_MODULE_5__.globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const targetChanged = !this.targetLayout ||
                        !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.boxEqualsRounded)(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        const animationOptions = {
                            ...(0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_7__.getValueTransition)(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.cancelFrame)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            this.isUpdating = false;
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = performance.now();
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.delta = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_9__.clamp)(0, 1000 / 60, now - _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.timestamp);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.timestamp = now;
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.isProcessing = true;
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.steps.update.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.steps.preRender.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.steps.render.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                queueMicrotask(() => this.update());
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frame.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frame.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement) {
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot: checkIsScrollRoot(this.instance),
                    offset: measureScroll(this.instance),
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            const hasProjection = this.projectionDelta && !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.isDeltaZero)(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            const box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            const { scroll } = this.root;
            if (scroll) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(box.x, scroll.offset.x);
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(box.y, scroll.offset.y);
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.isRoot) {
                        (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(boxWithoutScroll, box);
                        const { scroll: rootScroll } = this.root;
                        /**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */
                        if (rootScroll) {
                            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(boxWithoutScroll.x, -rootScroll.offset.x);
                            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(boxWithoutScroll.y, -rootScroll.offset.y);
                        }
                    }
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(boxWithoutScroll.x, scroll.offset.x);
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.translateAxis)(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.transformBox)(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(node.latestValues))
                    continue;
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.transformBox)(withTransforms, node.latestValues);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.transformBox)(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(node.latestValues))
                    continue;
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasScale)(node.latestValues) && node.updateSnapshot();
                const sourceBox = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                const nodeBox = node.measurePageBox();
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(sourceBox, nodeBox);
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_14__.removeBoxTransforms)(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_14__.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    relativeParent.layout &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                this.targetWithTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(this.target, this.layout.layoutBox);
                }
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.applyBoxDelta)(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativePosition)(this.relativeTargetOrigin, this.target, relativeParent.target);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            projectionFrameData.resolvedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasScale)(this.parent.latestValues) ||
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.has2DTranslate)(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.projectionTransform) {
                    this.projectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
                    this.projectionTransform = "none";
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta) {
                this.projectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
                this.projectionDeltaWithTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
            }
            const prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.buildProjectionTransform)(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            projectionFrameData.recalculatedProjection++;
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.scheduleRender && this.options.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot
                ? snapshot.latestValues
                : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativePosition)(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        (0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.boxEquals)(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    (0,_animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_17__.mixValues)(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                this.resumingFrom.currentAnimation.stop();
            }
            if (this.pendingAnimation) {
                (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.cancelFrame)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_8__.frame.update(() => {
                _state_mjs__WEBPACK_IMPORTED_MODULE_5__.globalProjectionState.hasAnimatedSinceResize = true;
                this.currentAnimation = (0,_animation_interfaces_single_value_mjs__WEBPACK_IMPORTED_MODULE_18__.animateSingleValue)(0, animationTarget, {
                    ...options,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                const xLength = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcLength)(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcLength)(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_13__.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_12__.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_19__.NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            let hasRotate = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ) {
                hasRotate = true;
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            const resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                const key = "rotate" + transformAxes[i];
                // Record the rotation and then temporarily set it to 0
                if (latestValues[key]) {
                    resetValues[key] = latestValues[key];
                    visualElement.setStaticValue(key, 0);
                }
            }
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp) {
            var _a, _b;
            if (!this.instance || this.isSVG)
                return undefined;
            if (!this.isVisible) {
                return hiddenVisibility;
            }
            const styles = {
                visibility: "",
            };
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_20__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_20__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_11__.hasTransform)(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_21__.scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo } = _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_21__.scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_20__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_22__.eachAxis)((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcLength)(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_22__.eachAxis)((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcLength)(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
        (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcBoxDelta)(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createDelta)();
        if (isShared) {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcBoxDelta)(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.isDeltaZero)(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativePosition)(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_10__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.calcRelativePosition)(relativeLayout, layout, parentLayout.layoutBox);
                    if (!(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.boxEqualsRounded)(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    projectionFrameData.totalNodes++;
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_23__.mix)(delta.translate, 0, p);
    output.scale = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_23__.mix)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_23__.mix)(from.min, to.min, p);
    output.max = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_23__.mix)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_24__.noop;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !(0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_15__.isNear)((0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.aspectRatio)(snapshot), (0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_6__.aspectRatio)(layout), 0.2)));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/state.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/state.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalProjectionState: () => (/* binding */ globalProjectionState)
/* harmony export */ });
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeStack: () => (/* binding */ NodeStack)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctBorderRadius: () => (/* binding */ correctBorderRadius),
/* harmony export */   pixelsToPercent: () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctBoxShadow: () => (/* binding */ correctBoxShadow)
/* harmony export */ });
/* harmony import */ var _utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");



const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = (0,_utils_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScaleCorrector: () => (/* binding */ addScaleCorrector),
/* harmony export */   scaleCorrectors: () => (/* binding */ scaleCorrectors)
/* harmony export */ });
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildProjectionTransform: () => (/* binding */ buildProjectionTransform)
/* harmony export */ });
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    if (xTranslate || yTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { rotate, rotateX, rotateY } = latestTransform;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eachAxis: () => (/* binding */ eachAxis)
/* harmony export */ });
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   has2DTranslate: () => (/* binding */ has2DTranslate),
/* harmony export */   hasScale: () => (/* binding */ hasScale),
/* harmony export */   hasTransform: () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   measurePageBox: () => (/* binding */ measurePageBox),
/* harmony export */   measureViewportBox: () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.offset.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/VisualElement.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/VisualElement.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElement: () => (/* binding */ VisualElement)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/reduced-motion/index.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs");
/* harmony import */ var _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/reduced-motion/state.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value/use-will-change/is.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");
/* harmony import */ var _utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../motion/features/definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _utils_variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");
/* harmony import */ var _store_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.mjs */ "./node_modules/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




















const featureNames = Object.keys(_motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions);
const numFeatures = featureNames.length;
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
const numVariantProps = _utils_variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps.length;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    constructor({ parent, props, presenceContext, reducedMotionConfig, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.scheduleRender = () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.render(this.render, false, true);
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.isControllingVariants = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isControllingVariants)(props);
        this.isVariantNode = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantNode)(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
                if ((0,_value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_5__.isWillChangeMotionValue)(willChange)) {
                    willChange.add(key);
                }
            }
        }
    }
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps) {
        return {};
    }
    mount(instance) {
        this.current = instance;
        _store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!_utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_7__.hasReducedMotionListener.current) {
            (0,_utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_8__.initPrefersReducedMotion)();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_7__.prefersReducedMotion.current;
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_9__.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        }
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        _store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.notifyUpdate);
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            this.features[key].unmount();
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        const valueIsTransform = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_10__.transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate &&
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(this.notifyUpdate, false, true);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
        let ProjectionNodeConstructor;
        let MeasureLayout;
        /**
         * If we're in development mode, check to make sure we're not rendering a motion component
         * as a child of LazyMotion, as this will break the file-size benefits of using it.
         */
        if ( true &&
            preloadedFeatures &&
            isStrict) {
            const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
            renderedProps.ignoreStrict
                ? (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_11__.warning)(false, strictMessage)
                : (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_11__.invariant)(false, strictMessage);
        }
        for (let i = 0; i < numFeatures; i++) {
            const name = featureNames[i];
            const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent, } = _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions[name];
            if (ProjectionNode)
                ProjectionNodeConstructor = ProjectionNode;
            if (isEnabled(renderedProps)) {
                if (!this.features[name] && FeatureConstructor) {
                    this.features[name] = new FeatureConstructor(this);
                }
                if (MeasureLayoutComponent) {
                    MeasureLayout = MeasureLayoutComponent;
                }
            }
        }
        if (!this.projection && ProjectionNodeConstructor) {
            this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
            const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, } = renderedProps;
            this.projection.setOptions({
                layoutId,
                layout,
                alwaysMeasureLayout: Boolean(drag) ||
                    (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_12__.isRefObject)(dragConstraints)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                /**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */
                animationType: typeof layout === "string" ? layout : "both",
                initialPromotionConfig: initialLayoutGroupConfig,
                layoutScroll,
                layoutRoot,
            });
        }
        return MeasureLayout;
    }
    updateFeatures() {
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature.isMounted) {
                feature.update();
            }
            else {
                feature.mount();
                feature.isMounted = true;
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_13__.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(target, canMutate = true) {
        return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listener = props["on" + key];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_14__.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    getVariantContext(startAtParent = false) {
        if (startAtParent) {
            return this.parent ? this.parent.getVariantContext() : undefined;
        }
        if (!this.isControllingVariants) {
            const context = this.parent
                ? this.parent.getVariantContext() || {}
                : {};
            if (this.props.initial !== undefined) {
                context.initial = this.props.initial;
            }
            return context;
        }
        const context = {};
        for (let i = 0; i < numVariantProps; i++) {
            const name = _utils_variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps[i];
            const prop = this.props[name];
            if ((0,_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_15__.isVariantLabel)(prop) || prop === false) {
                context[name] = prop;
            }
        }
        return context;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        if (value !== this.values.get(key)) {
            this.removeValue(key);
            this.bindToMotionValue(key, value);
        }
        this.values.set(key, value);
        this.latestValues[key] = value.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_16__.motionValue)(defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key) {
        var _a;
        return this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        const valueFromInitial = typeof initial === "string" || typeof initial === "object"
            ? (_a = (0,_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveVariantFromProps)(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key]
            : undefined;
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_18__.SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMVisualElement: () => (/* binding */ DOMVisualElement)
/* harmony export */ });
/* harmony import */ var _utils_setters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parse-dom-variant.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs");
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/VisualElement.mjs");




class DOMVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
        let origin = (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_1__.getOrigin)(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_1__.checkTargetForNewValues)(this, target, origin);
            const parsed = (0,_utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_2__.parseDomVariant)(this, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return {
            transition,
            transitionEnd,
            ...target,
        };
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDomVisualElement: () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var _html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/HTMLVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs");
/* harmony import */ var _svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/SVGVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");




const createDomVisualElement = (Component, options) => {
    return (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? new _svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__.SVGVisualElement(options, { enableHardwareAcceleration: false })
        : new _html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__.HTMLVisualElement(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMotionProxy: () => (/* binding */ createMotionProxy)
/* harmony export */ });
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig = {}) {
        return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createMotionComponent)(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDomMotionComponent: () => (/* binding */ createDomMotionComponent),
/* harmony export */   motion: () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");
/* harmony import */ var _motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion-proxy.mjs */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs");
/* harmony import */ var _utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/create-config.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs");
/* harmony import */ var _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/gestures.mjs */ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs");
/* harmony import */ var _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/features/animations.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs");
/* harmony import */ var _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/drag.mjs */ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs");
/* harmony import */ var _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs");
/* harmony import */ var _motion_features_layout_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/layout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout.mjs");









const preloadedFeatures = {
    ..._motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_0__.animations,
    ..._motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_1__.gestureAnimations,
    ..._motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_2__.drag,
    ..._motion_features_layout_mjs__WEBPACK_IMPORTED_MODULE_3__.layout,
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
const motion = /*@__PURE__*/ (0,_motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_4__.createMotionProxy)((Component, config) => (0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_5__.createDomMotionConfig)(Component, config, preloadedFeatures, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomVisualElement));
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__.createMotionComponent)((0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_5__.createDomMotionConfig)(key, { forwardMotionProps: false }, preloadedFeatures, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomVisualElement));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeElement: () => (/* binding */ resizeElement)
/* harmony export */ });
/* harmony import */ var _utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolve-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs");


const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = (0,_utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeWindow: () => (/* binding */ resizeWindow)
/* harmony export */ });
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resize: () => (/* binding */ resize)
/* harmony export */ });
/* harmony import */ var _handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs");
/* harmony import */ var _handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-window.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs");



function resize(a, b) {
    return typeof a === "function" ? (0,_handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__.resizeWindow)(a) : (0,_handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__.resizeElement)(a, b);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScrollInfo: () => (/* binding */ createScrollInfo),
/* harmony export */   updateScrollInfo: () => (/* binding */ updateScrollInfo)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");



/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namedEdges: () => (/* binding */ namedEdges),
/* harmony export */   resolveEdge: () => (/* binding */ resolveEdge)
/* harmony export */ });
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (namedEdges[edge] !== undefined) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffsets: () => (/* binding */ resolveOffsets)
/* harmony export */ });
/* harmony import */ var _inset_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inset.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs");
/* harmony import */ var _presets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presets.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs");
/* harmony import */ var _offset_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/offsets/default.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs");






const point = { x: 0, y: 0 };
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg"
        ? target.getBBox()
        : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = _presets_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0,_inset_mjs__WEBPACK_IMPORTED_MODULE_1__.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = (0,_offset_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__.interpolate)(info[axis].offset, (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(offsetDefinition));
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcInset: () => (/* binding */ calcInset)
/* harmony export */ });
function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */
            const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        }
        else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while (!svg) {
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        }
        else {
            break;
        }
    }
    return inset;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffset: () => (/* binding */ resolveOffset)
/* harmony export */ });
/* harmony import */ var _edge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edge.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs");


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, _edge_mjs__WEBPACK_IMPORTED_MODULE_0__.namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollOffset: () => (/* binding */ ScrollOffset)
/* harmony export */ });
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOnScrollHandler: () => (/* binding */ createOnScrollHandler)
/* harmony export */ });
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _offsets_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offsets/index.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs");



function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            (0,_info_mjs__WEBPACK_IMPORTED_MODULE_0__.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) {
                (0,_offsets_index_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveOffsets)(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollInfo: () => (/* binding */ scrollInfo)
/* harmony export */ });
/* harmony import */ var _resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resize/index.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs");
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-scroll-handler.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = (0,_info_mjs__WEBPACK_IMPORTED_MODULE_0__.createScrollInfo)();
    const containerHandler = (0,_on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers)
                handler.measure();
        };
        const updateAll = () => {
            for (const handler of containerHandlers) {
                handler.update(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frameData.timestamp);
            }
        };
        const notifyAll = () => {
            for (const handler of containerHandlers)
                handler.notify();
        };
        const listener = () => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(measureAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(updateAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0,_resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resize)(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(listener, false, true);
    return () => {
        var _a;
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUseRender: () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");







function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic) => {
        const useVisualProps = (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = (0,_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        const elementProps = {
            ...filteredProps,
            ...visualProps,
            ref,
        };
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__.isMotionValue)(children) ? children.get() : children), [children]);
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToDash: () => (/* binding */ camelToDash)
/* harmony export */ });
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDomMotionConfig: () => (/* binding */ createDomMotionConfig)
/* harmony export */ });
/* harmony import */ var _is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _use_render_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../use-render.mjs */ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs");
/* harmony import */ var _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs");
/* harmony import */ var _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs");





function createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement) {
    const baseConfig = (0,_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
        : _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
    return {
        ...baseConfig,
        preloadedFeatures,
        useRender: (0,_use_render_mjs__WEBPACK_IMPORTED_MODULE_3__.createUseRender)(forwardMotionProps),
        createVisualElement,
        Component,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseCSSVariable: () => (/* binding */ parseCSSVariable),
/* harmony export */   resolveCSSVariables: () => (/* binding */ resolveCSSVariables)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");




/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token, fallback] = match;
    return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    else if ((0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(fallback)) {
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
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
    const element = visualElement.current;
    if (!(element instanceof Element))
        return { target, transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = { ...transitionEnd };
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.values.forEach((value) => {
        const current = value.get();
        if (!(0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(current))
            return;
        const resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (const key in target) {
        const current = target[key];
        if (!(0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(current))
            continue;
        const resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        if (!transitionEnd)
            transitionEnd = {};
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target, transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterProps: () => (/* binding */ filterProps),
/* harmony export */   loadExternalIsValidProp: () => (/* binding */ loadExternalIsValidProp)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");


let shouldForward = (key) => !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key) : isValidProp(key);
}
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
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssVariableRegex: () => (/* binding */ cssVariableRegex),
/* harmony export */   isCSSVariableName: () => (/* binding */ isCSSVariableName),
/* harmony export */   isCSSVariableToken: () => (/* binding */ isCSSVariableToken)
/* harmony export */ });
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = checkStringStartsWith("--");
const isCSSVariableToken = checkStringStartsWith("var(--");
const cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGComponent: () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.mjs */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement)
/* harmony export */ });
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDomVariant: () => (/* binding */ parseDomVariant)
/* harmony export */ });
/* harmony import */ var _css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
    const resolved = (0,_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveCSSVariables)(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return (0,_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.unitConversion)(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveElements: () => (/* binding */ resolveElements)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");


function resolveElements(elements, scope, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        let root = document;
        if (scope) {
            (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(Boolean(scope.current), "Scope provided, but no element detected.");
            root = scope.current;
        }
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = root.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = root.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positionalValues: () => (/* binding */ positionalValues),
/* harmony export */   unitConversion: () => (/* binding */ unitConversion)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value-types/dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");








const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
]);
const isPositionalKey = (key) => positionalKeys.has(key);
const hasPositionalKey = (target) => {
    return Object.keys(target).some(isPositionalKey);
};
const isNumOrPxType = (v) => v === _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number || v === _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
    const originBbox = visualElement.measureViewportBox();
    const element = visualElement.current;
    const elementComputedStyle = getComputedStyle(element);
    const { display } = elementComputedStyle;
    const origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach((key) => {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    const targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach((key) => {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        const value = visualElement.getValue(key);
        value && value.jump(origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
    target = { ...target };
    transitionEnd = { ...transitionEnd };
    const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    let removedTransformValues = [];
    let hasAttemptedToRemoveTransformValues = false;
    const changedValueTypeKeys = [];
    targetPositionalKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        let from = origin[key];
        let fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__.findDimensionValueType)(from);
        const to = target[key];
        let toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_4__.isKeyframesTarget)(to)) {
            const numKeyframes = to.length;
            const fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__.findDimensionValueType)(from);
            for (let i = fromIndex; i < numKeyframes; i++) {
                /**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */
                if (to[i] === null)
                    break;
                if (!toType) {
                    toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__.findDimensionValueType)(to[i]);
                    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__.invariant)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_5__.invariant)((0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__.findDimensionValueType)(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_3__.findDimensionValueType)(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                const current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                value.jump(to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        const scrollY = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(([key, value]) => {
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        // Restore scroll position
        if (_utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__.isBrowser && scrollY !== null) {
            window.scrollTo({ top: scrollY });
        }
        return { target: convertedTarget, transitionEnd };
    }
    else {
        return { target, transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target, transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnimatableNone: () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");




function getAnimatableNone(key, value) {
    let defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValueTypes: () => (/* binding */ defaultValueTypes),
/* harmony export */   getDefaultValueType: () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ..._number_mjs__WEBPACK_IMPORTED_MODULE_0__.numberValueTypes,
    // Color props
    color: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    backgroundColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    outlineColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    fill: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    stroke: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    // Border props
    borderColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderTopColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderRightColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderBottomColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderLeftColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    filter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
    WebkitFilter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensionValueTypes: () => (/* binding */ dimensionValueTypes),
/* harmony export */   findDimensionValueType: () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [_value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.degrees, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vw, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findValueType: () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
const valueTypes = [..._dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__.dimensionValueTypes, _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color, _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueAsType: () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberValueTypes: () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs");




const numberValueTypes = {
    // Border props
    borderWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    height: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    size: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    top: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    right: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    left: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Transform props
    rotate: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    x: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    y: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    z: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    // SVG
    fillOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    strokeOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testValueType: () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auto: () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   int: () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");


const int = {
    ..._value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number,
    transform: Math.round,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLVisualElement: () => (/* binding */ HTMLVisualElement),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");










function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    readValueFromInstance(instance, key) {
        if (_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_3__.isCSSVariableName)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_4__.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, options, props) {
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_5__.buildHTMLStyles)(renderState, latestValues, options, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.scrapeMotionValuesFromProps)(props, prevProps);
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_7__.isMotionValue)(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current)
                    this.current.textContent = `${latest}`;
            });
        }
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__.renderHTML)(instance, renderState, styleProp, projection);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlMotionConfig: () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");




const htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyRawValuesOnly: () => (/* binding */ copyRawValuesOnly),
/* harmony export */   useHTMLProps: () => (/* binding */ useHTMLProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");






function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState, isStatic);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHTMLStyles: () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");






function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    const { style, vars, transform, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    let transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        const valueType = _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes[key];
        const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, valueType);
        if (_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== (valueType.default || 0))
                transformIsNone = false;
        }
        else if (key.startsWith("origin")) {
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
            transformOrigin[key] = valueAsType;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(state.transform, options, transformIsNone, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTransform: () => (/* binding */ buildTransform)
/* harmony export */ });
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");


const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, { enableHardwareAcceleration = true, allowTransformNone = true, }, transformIsDefault, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder[i];
        if (transform[key] !== undefined) {
            const transformName = translateAlias[key] || key;
            transformString += `${transformName}(${transform[key]}) `;
        }
    }
    if (enableHardwareAcceleration && !transform.z) {
        transformString += "translateZ(0)";
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlRenderState: () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHTML: () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props, prevProps) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) ||
            (prevProps.style && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevProps.style[key])) ||
            (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformPropOrder: () => (/* binding */ transformPropOrder),
/* harmony export */   transformProps: () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/store.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/store.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visualElementStore: () => (/* binding */ visualElementStore)
/* harmony export */ });
const visualElementStore = new WeakMap();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGVisualElement: () => (/* binding */ SVGVisualElement)
/* harmony export */ });
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");











class SVGVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.isSVGTag = false;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_4__.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    measureInstanceViewportBox() {
        return (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_5__.createBox)();
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.scrapeMotionValuesFromProps)(props, prevProps);
    }
    build(renderState, latestValues, options, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__.buildSVGAttrs)(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgMotionConfig: () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








const svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.read(() => {
                try {
                    renderState.dimensions =
                        typeof instance.getBBox ===
                            "function"
                            ? instance.getBBox()
                            : instance.getBoundingClientRect();
                }
                catch (e) {
                    // Most likely trying to measure an unrendered element under Firefox
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                    };
                }
            });
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.render(() => {
                (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__.buildSVGAttrs)(renderState, latestValues, { enableHardwareAcceleration: false }, (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_5__.isSVGTag)(instance.tagName), props.transformTemplate);
                (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_6__.renderSVG)(instance, renderState);
            });
        },
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lowercaseSVGElements: () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSVGProps: () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");






function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, { enableHardwareAcceleration: false }, (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_3__.isSVGTag)(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        (0,_html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGAttrs: () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs");




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, options, isSVGTag, transformTemplate) {
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.buildHTMLStyles)(state, latest, options, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseAttributes: () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSvgRenderState: () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var _html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");


const createSvgRenderState = () => ({
    ...(0,_html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_0__.createHtmlRenderState)(),
    attrs: {},
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag)
/* harmony export */ });
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGPath: () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    const pathLength = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    const pathSpacing = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSVG: () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState, _styleProp, projection) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");




function scrapeMotionValuesFromProps(props, prevProps) {
    const newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props, prevProps);
    for (const key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key]) || (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(prevProps[key])) {
            const targetKey = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcSVGTransformOrigin: () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkVariantsDidChange: () => (/* binding */ checkVariantsDidChange),
/* harmony export */   createAnimationState: () => (/* binding */ createAnimationState)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var _utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shallow-compare.mjs */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");
/* harmony import */ var _animation_interfaces_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/interfaces/visual-element.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs");








const reversePriorityOrder = [..._variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantPriorityOrder].reverse();
const numAnimationTypes = _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => (0,_animation_interfaces_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__.animateVisualElement)(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    const state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (acc, definition) => {
        const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveVariant)(visualElement, definition);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        const props = visualElement.getProps();
        const context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(prev)) {
                        if (!(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type, ...options },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            (props.initial === false || props.initial === props.animate) &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(options, type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareByDepth: () => (/* binding */ compareByDepth)
/* harmony export */ });
const compareByDepth = (a, b) => a.depth - b.depth;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatTree: () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.mjs */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs");



class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(_compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isControllingVariants: () => (/* binding */ isControllingVariants),
/* harmony export */   isVariantNode: () => (/* binding */ isVariantNode)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");




function isControllingVariants(props) {
    return ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimationControls)(props.animate) ||
        _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps.some((name) => (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__.isVariantLabel)(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVariantLabel: () => (/* binding */ isVariantLabel)
/* harmony export */ });
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateMotionValuesFromProps: () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/use-will-change/is.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");





function updateMotionValuesFromProps(element, next, prev) {
    const { willChange } = next;
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            if ((0,_value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_1__.isWillChangeMotionValue)(willChange)) {
                willChange.add(key);
            }
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (true) {
                (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_2__.warnOnce)(nextValue.version === "10.16.16", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.16.16 may not work as expected.`);
            }
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_3__.motionValue)(nextValue, { owner: element }));
            if ((0,_value_use_will_change_is_mjs__WEBPACK_IMPORTED_MODULE_1__.isWillChangeMotionValue)(willChange)) {
                willChange.remove(key);
            }
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_3__.motionValue)(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariant: () => (/* binding */ resolveVariant)
/* harmony export */ });
/* harmony import */ var _resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");


/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    const current = {};
    visualElement.values.forEach((value, key) => (current[key] = value.get()));
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    const velocity = {};
    visualElement.values.forEach((value, key) => (velocity[key] = value.getVelocity()));
    return velocity;
}
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0,_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariantFromProps: () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTargetForNewValues: () => (/* binding */ checkTargetForNewValues),
/* harmony export */   getOrigin: () => (/* binding */ getOrigin),
/* harmony export */   getOriginFromTransition: () => (/* binding */ getOriginFromTransition),
/* harmony export */   setTarget: () => (/* binding */ setTarget),
/* harmony export */   setValues: () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/value-types/find.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [...variantLabels].reverse();
    reversedLabels.forEach((key) => {
        const variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child) => {
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
    const numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (let i = 0; i < numNewValues; i++) {
        const key = newValueKeys[i];
        const targetValue = target[key];
        let value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_3__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_4__.isZeroValueString)(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_5__.findValueType)(value) && _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_6__.complex.test(targetValue)) {
            value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_7__.getAnimatableNone)(key, targetValue);
        }
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value, { owner: visualElement }));
        if (origin[key] === undefined) {
            origin[key] = value;
        }
        if (value !== null)
            visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    const valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    const origin = {};
    for (const key in target) {
        const transitionOrigin = getOriginFromTransition(key, transition);
        if (transitionOrigin !== undefined) {
            origin[key] = transitionOrigin;
        }
        else {
            const value = visualElement.getValue(key);
            if (value) {
                origin[key] = value.get();
            }
        }
    }
    return origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   variantPriorityOrder: () => (/* binding */ variantPriorityOrder),
/* harmony export */   variantProps: () => (/* binding */ variantProps)
/* harmony export */ });
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUniqueItem: () => (/* binding */ addUniqueItem),
/* harmony export */   moveItem: () => (/* binding */ moveItem),
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/clamp.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/clamp.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/delay.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/delay.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");


/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = performance.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.read(checkElapsed, true);
    return () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(checkElapsed);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/distance.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/distance.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   distance2D: () => (/* binding */ distance2D)
/* harmony export */ });
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/errors.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/errors.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   warning: () => (/* binding */ warning)
/* harmony export */ });
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");


let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
let invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
if (true) {
    warning = (check, message) => {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message) => {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/get-context-window.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContextWindow: () => (/* binding */ getContextWindow)
/* harmony export */ });
// Fixes https://github.com/framer/motion/issues/2270
const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hslaToRgba: () => (/* binding */ hslaToRgba)
/* harmony export */ });
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/interpolate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolate: () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/framer-motion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-complex.mjs */ "./node_modules/framer-motion/dist/es/utils/mix-complex.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");










const mixNumber = (from, to) => (p) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === "number") {
        return mixNumber;
    }
    else if (typeof v === "string") {
        return _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.test(v) ? _mix_color_mjs__WEBPACK_IMPORTED_MODULE_2__.mixColor : _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_3__.mixComplex;
    }
    else if (Array.isArray(v)) {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_3__.mixArray;
    }
    else if (typeof v === "object") {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_3__.mixObject;
    }
    return mixNumber;
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || _noop_mjs__WEBPACK_IMPORTED_MODULE_4__.noop : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_5__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_7__.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_8__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof document !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumericalString: () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRefObject: () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZeroValueString: () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/memo.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/memo.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memo: () => (/* binding */ memo)
/* harmony export */ });
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix-color.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix-color.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixColor: () => (/* binding */ mixColor),
/* harmony export */   mixLinearColor: () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsla-to-rgba.mjs */ "./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs");
/* harmony import */ var _value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value/types/color/hex.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/types/color/rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../value/types/color/hsla.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs");







// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
const colorTypes = [_value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__.hex, _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba, _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.invariant)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    let model = type.parse(color);
    if (type === _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla) {
        // TODO Remove this cast - needed since Framer Motion's stricter typing
        model = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_5__.mix)(fromRGBA.alpha, toRGBA.alpha, v);
        return _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix-complex.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix-complex.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixArray: () => (/* binding */ mixArray),
/* harmony export */   mixComplex: () => (/* binding */ mixComplex),
/* harmony export */   mixObject: () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/framer-motion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");







const mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
    if (typeof origin === "number") {
        return (v) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_0__.mix)(origin, target, v);
    }
    else if (_value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.test(origin)) {
        return (0,_mix_color_mjs__WEBPACK_IMPORTED_MODULE_2__.mixColor)(origin, target);
    }
    else {
        return origin.startsWith("var(")
            ? mixImmediate(origin, target)
            : mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = { ...origin, ...target };
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
const mixComplex = (origin, target) => {
    const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_3__.complex.createTransformer(target);
    const originStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_3__.analyseComplexValue)(origin);
    const targetStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_3__.analyseComplexValue)(target);
    const canInterpolate = originStats.numVars === targetStats.numVars &&
        originStats.numColors === targetStats.numColors &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__.pipe)(mixArray(originStats.values, targetStats.values), template);
    }
    else {
        (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_5__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return mixImmediate(origin, target);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mix: () => (/* binding */ mix)
/* harmony export */ });
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mix = (from, to, progress) => -progress * from + progress * to + from;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/noop.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
const noop = (any) => any;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOffset: () => (/* binding */ defaultOffset)
/* harmony export */ });
/* harmony import */ var _fill_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs");


function defaultOffset(arr) {
    const offset = [0];
    (0,_fill_mjs__WEBPACK_IMPORTED_MODULE_0__.fillOffset)(offset, arr.length - 1);
    return offset;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillOffset: () => (/* binding */ fillOffset)
/* harmony export */ });
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mix.mjs */ "./node_modules/framer-motion/dist/es/utils/mix.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, remaining, i);
        offset.push((0,_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(min, 1, offsetProgress));
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/time.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/time.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertOffsetToTimes: () => (/* binding */ convertOffsetToTimes)
/* harmony export */ });
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/pipe.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/pipe.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/progress.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/progress.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   progress: () => (/* binding */ progress)
/* harmony export */ });
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPrefersReducedMotion: () => (/* binding */ initPrefersReducedMotion)
/* harmony export */ });
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");



function initPrefersReducedMotion() {
    _state_mjs__WEBPACK_IMPORTED_MODULE_0__.hasReducedMotionListener.current = true;
    if (!_is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (_state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = false;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasReducedMotionListener: () => (/* binding */ hasReducedMotionListener),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCustomValue: () => (/* binding */ isCustomValue),
/* harmony export */   resolveFinalValueInKeyframes: () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shallowCompare: () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionManager: () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return () => (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   millisecondsToSeconds: () => (/* binding */ millisecondsToSeconds),
/* harmony export */   secondsToMilliseconds: () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/transform.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/transform.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
/* harmony import */ var _interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");


const isCustomValueType = (v) => {
    return typeof v === "object" && v.mix;
};
const getMixer = (v) => (isCustomValueType(v) ? v.mix : undefined);
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,_interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__.interpolate)(inputRange, outputRange, {
        mixer: getMixer(outputRange[0]),
        ...options,
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useConstant: () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForceUpdate: () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-mounted.mjs */ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




function useForceUpdate() {
    const isMounted = (0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
    const [forcedRenderCount, setForcedRenderCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const forceRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instantAnimationState: () => (/* binding */ instantAnimationState)
/* harmony export */ });
const instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");



function useIsMounted() {
    const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");



const useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUnmountEffect: () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function useUnmountEffect(callback) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => callback(), []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   velocityPerSecond: () => (/* binding */ velocityPerSecond)
/* harmony export */ });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/warn-once.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionValue: () => (/* binding */ MotionValue),
/* harmony export */   collectMotionValues: () => (/* binding */ collectMotionValues),
/* harmony export */   motionValue: () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");





const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "10.16.16";
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
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            this.prev = this.current;
            this.current = v;
            // Update timestamp
            const { delta, timestamp } = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData;
            if (this.lastUpdated !== timestamp) {
                this.timeDelta = delta;
                this.lastUpdated = timestamp;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.postRender(this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (this.prev !== this.current && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update velocity subscribers
            if (this.events.velocityChange) {
                this.events.velocityChange.notify(this.getVelocity());
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.postRender(this.velocityCheck);
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = ({ timestamp }) => {
            if (timestamp !== this.lastUpdated) {
                this.prev = this.current;
                if (this.events.velocityChange) {
                    this.events.velocityChange.notify(this.getVelocity());
                }
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
        this.owner = options.owner;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
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
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
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
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        }
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__.SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
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
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = prev;
        this.timeDelta = delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v) {
        this.updateAndNotify(v);
        this.prev = v;
        this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_3__.velocityPerSecond)(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    }
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
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/hex.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex: () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("#"),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hsla: () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");





const hsla = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("hsl", "hue"),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ", " +
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ")");
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");





const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.isString)(v)
            ? v
            : v.hasOwnProperty("red")
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbUnit: () => (/* binding */ rgbUnit),
/* harmony export */   rgba: () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");





const clampRgbUnit = (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255, v);
const rgbUnit = {
    ..._numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)("rgb", "red"),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ")",
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/utils.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isColorString: () => (/* binding */ isColorString),
/* harmony export */   splitColor: () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");


/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean(((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    const [a, b, c, alpha] = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = {
    ..._index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/complex/index.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyseComplexValue: () => (/* binding */ analyseComplexValue),
/* harmony export */   complex: () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");






function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) &&
        (((_a = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const cssVarTokeniser = {
    regex: _render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.cssVariableRegex,
    countKey: "Vars",
    token: "${v}",
    parse: _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop,
};
const colorTokeniser = {
    regex: _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex,
    countKey: "Colors",
    token: "${c}",
    parse: _color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.parse,
};
const numberTokeniser = {
    regex: _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex,
    countKey: "Numbers",
    token: "${n}",
    parse: _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.number.parse,
};
function tokenise(info, { regex, countKey, token, parse }) {
    const matches = info.tokenised.match(regex);
    if (!matches)
        return;
    info["num" + countKey] = matches.length;
    info.tokenised = info.tokenised.replace(regex, token);
    info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const info = {
        value: originalValue,
        tokenised: originalValue,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0,
    };
    if (info.value.includes("var(--"))
        tokenise(info, cssVarTokeniser);
    tokenise(info, colorTokeniser);
    tokenise(info, numberTokeniser);
    return info;
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { values, numColors, numVars, tokenised } = analyseComplexValue(source);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            if (i < numVars) {
                output = output.replace(cssVarTokeniser.token, v[i]);
            }
            else if (i < numVars + numColors) {
                output = output.replace(colorTokeniser.token, _color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.transform(v[i]));
            }
            else {
                output = output.replace(numberTokeniser.token, (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.sanitize)(v[i]));
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   scale: () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degrees: () => (/* binding */ degrees),
/* harmony export */   percent: () => (/* binding */ percent),
/* harmony export */   progressPercentage: () => (/* binding */ progressPercentage),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   vh: () => (/* binding */ vh),
/* harmony export */   vw: () => (/* binding */ vw)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils.mjs");


const createUnitType = (unit) => ({
    test: (v) => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorRegex: () => (/* binding */ colorRegex),
/* harmony export */   floatRegex: () => (/* binding */ floatRegex),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   sanitize: () => (/* binding */ sanitize),
/* harmony export */   singleColorRegex: () => (/* binding */ singleColorRegex)
/* harmony export */ });
/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === "string";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCombineMotionValues: () => (/* binding */ useCombineMotionValues)
/* harmony export */ });
/* harmony import */ var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/use-motion-value.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = (0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.useMotionValue)(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(() => {
        const scheduleUpdate = () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(updateValue);
        };
    });
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-computed.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-computed.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComputed: () => (/* binding */ useComputed)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-combine-values.mjs */ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs");



function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = [];
    compute();
    const value = (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__.useCombineMotionValues)(_index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = undefined;
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-value.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMotionValue: () => (/* binding */ useMotionValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
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
    const value = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(() => (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext);
    if (isStatic) {
        const [, setLatest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-scroll.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScroll: () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _render_dom_scroll_track_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/dom/scroll/track.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");







function refWarning(name, ref) {
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = () => ({
    scrollX: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollY: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollXProgress: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollYProgress: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect
        ? _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect
        : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
    useLifecycleEffect(() => {
        refWarning("target", target);
        refWarning("container", container);
        return (0,_render_dom_scroll_track_mjs__WEBPACK_IMPORTED_MODULE_5__.scrollInfo)(({ x, y }) => {
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
            target: (target === null || target === void 0 ? void 0 : target.current) || undefined,
        });
    }, [container, target, JSON.stringify(options.offset)]);
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-transform.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-transform.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransform: () => (/* binding */ useTransform)
/* harmony export */ });
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/transform.mjs */ "./node_modules/framer-motion/dist/es/utils/transform.mjs");
/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-combine-values.mjs */ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-computed.mjs */ "./node_modules/framer-motion/dist/es/value/use-computed.mjs");





function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return (0,_use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__.useComputed)(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : (0,_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transform)(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__.useConstant)(() => []);
    return (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__.useCombineMotionValues)(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWillChangeMotionValue: () => (/* binding */ isWillChangeMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");


function isWillChangeMotionValue(value) {
    return Boolean((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) && value.add);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMotionValue: () => (/* binding */ isMotionValue)
/* harmony export */ });
const isMotionValue = (value) => Boolean(value && value.getVelocity);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveMotionValue: () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = (0,_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-jshead.js.map
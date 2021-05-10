/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DModels"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector(\".menu\"),\n      menu = document.querySelector(\"menu\"),\n      menuItems = menu.querySelectorAll(\"*\");\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  btnMenu.addEventListener(\"click\", handlerMenu);\n  menuItems.forEach(function (elem) {\n    return elem.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      var target = event.target;\n      console.log(target);\n\n      if (target.classList.contains(\"close-btn\")) {\n        handlerMenu();\n      } else {\n        handlerMenu();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DModels/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a8de4c1fcf6983f83dd")
/******/ })();
/******/ 
/******/ }
);
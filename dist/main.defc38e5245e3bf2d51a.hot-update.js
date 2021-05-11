/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DModels"]("main",{

/***/ "./src/modules/animate.js":
/*!********************************!*\
  !*** ./src/modules/animate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animate = function animate() {\n  var popup = document.querySelector(\".popup\");\n  var pos = 0;\n  var id = setInterval(frame, 5);\n\n  function frame() {\n    if (pos == 350) {\n      clearInterval(id);\n    } else {\n      pos++;\n      popup.style.top = pos + \"px\";\n      popup.style.left = pos + \"px\";\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://3DModels/./src/modules/animate.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f504d3d6b23b6b8fd6e")
/******/ })();
/******/ 
/******/ }
);
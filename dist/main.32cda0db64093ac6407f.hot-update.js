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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timePassed = 0;\n\nvar timer = function timer() {\n  var start = Date.now();\n  console.log(\"start\", start);\n  timePassed = Date.now() - start;\n  console.log(\"time passed\", timePassed);\n\n  if (timePassed >= 6000) {\n    clearInterval(timer);\n    return;\n  }\n\n  if (window.screen.width < 768) {\n    clearTimeout(timer);\n    return false;\n  }\n\n  animate(timePassed);\n};\n\nvar animate = setTimeout(function () {\n  timePassed++;\n  var popup = document.querySelector(\".popup\");\n  popup.style.display = \"block\";\n}, 6000);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://3DModels/./src/modules/animate.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("516f21b992141c14ccc1")
/******/ })();
/******/ 
/******/ }
);
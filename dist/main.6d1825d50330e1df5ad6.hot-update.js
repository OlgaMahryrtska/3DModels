/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DModels"]("main",{

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector(\"#timer-hours\"),\n      timerMinutes = document.querySelector(\"#timer-minutes\"),\n      timerSeconds = document.querySelector(\"#timer-seconds\");\n  var timerInterval;\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60); // hours = hours < 10 ? \"0\" + hours : hours;\n    // minutes = minutes < 10 ? \"0\" + minutes : minutes;\n    // seconds = seconds < 10 ? \"0\" + seconds : seconds;\n\n    var checkNums = function checkNums(num) {\n      return num < 10 ? '0' + num : num;\n    };\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = checkNums(timer.hours);\n    timerMinutes.textContent = checkNums(timer.minutes);\n    timerSeconds.textContent = checkNums(timer.seconds);\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(timerInterval);\n    }\n  }\n\n  updateClock();\n  timerInterval = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3DModels/./src/modules/countTimer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7b6056dbf34e9bd82f9")
/******/ })();
/******/ 
/******/ }
);
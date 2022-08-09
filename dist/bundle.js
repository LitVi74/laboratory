/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/action.ts":
/*!***********************!*\
  !*** ./src/action.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleChangeInput\": () => (/* binding */ handleChangeInput)\n/* harmony export */ });\n/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize */ \"./src/serialize.ts\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ \"./src/validator.ts\");\n\r\n\r\nvar handleChangeInput = function (event) {\r\n    var newValue = event.target.value;\r\n    var validlyResult = (0,_validator__WEBPACK_IMPORTED_MODULE_1__.checkValidly)(newValue);\r\n    if (validlyResult.check) {\r\n        var numArray = newValue.split(\",\", 200).map(function (string) { return +string.trim(); });\r\n        console.log((0,_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(numArray));\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://laboratory/./src/action.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/action.ts\");\n\r\nvar input = document.getElementById('input');\r\ninput.onchange = _action__WEBPACK_IMPORTED_MODULE_0__.handleChangeInput;\r\n\n\n//# sourceURL=webpack://laboratory/./src/index.ts?");

/***/ }),

/***/ "./src/serialize.ts":
/*!**************************!*\
  !*** ./src/serialize.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serialize\": () => (/* binding */ serialize)\n/* harmony export */ });\nvar serialize = function (numArray) {\r\n    return numArray.reduce(function (previousValue, currentValue, index) {\r\n        return previousValue + (index ? \",\" : \"\") + currentValue.toString(16);\r\n    }, \"\");\r\n};\r\n\r\n\n\n//# sourceURL=webpack://laboratory/./src/serialize.ts?");

/***/ }),

/***/ "./src/validator.ts":
/*!**************************!*\
  !*** ./src/validator.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkValidly\": () => (/* binding */ checkValidly)\n/* harmony export */ });\nvar validation = {\r\n    isNumber: {\r\n        regExp: /[A-Za-z]/,\r\n        errorMassage: \"only numeric values are allowed\",\r\n    },\r\n    isTooBig: {\r\n        regExp: /(?!(?:\\d{1,3}|1000)(?!\\d))\\d+/,\r\n        errorMassage: \"number is too big\",\r\n    },\r\n};\r\nvar checkValidly = function (string) {\r\n    var key;\r\n    for (key in validation) {\r\n        var checkRule = validation[key].regExp.test(string);\r\n        if (checkRule)\r\n            return {\r\n                check: false,\r\n                error: validation[key].errorMassage,\r\n            };\r\n    }\r\n    return {\r\n        check: true,\r\n    };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://laboratory/./src/validator.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
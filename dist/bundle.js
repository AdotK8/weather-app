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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\n(0,_processData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst d = new Date();\nconst time = d.getTime();\nconsole.log(time - 28800);\nconsole.log(time - 28800000);\nconsole.log(time);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _retrieveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveData */ \"./src/retrieveData.js\");\n\n\nfunction processData() {\n  (0,_retrieveData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

/***/ }),

/***/ "./src/retrieveData.js":
/*!*****************************!*\
  !*** ./src/retrieveData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveData)\n/* harmony export */ });\nconst location = \"san francisco\";\n\nasync function retrieveData() {\n  const apiKey = \"cb561535d4382bd95e0f2ab965974e4e\";\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour\n\n  try {\n    const response = await fetch(url, { mode: \"cors\" });\n    const weatherData = await response.json();\n    console.log(weatherData);\n    console.log(`City: ${weatherData.city.name}`);\n    console.log(`Country: ${weatherData.city.country}`);\n    console.log(`Description: ${weatherData.list[0].weather[0].description}`);\n    console.log(`Wind Speed: ${weatherData.list[0].wind.speed}`);\n    console.log(`Temp Now: ${weatherData.list[0].main.temp}`);\n    console.log(`Feels Like: ${weatherData.list[0].main.feels_like}`);\n    console.log(`Temp 3hr: ${weatherData.list[1].main.temp}`);\n    console.log(\n      `Description 3hr: ${weatherData.list[1].weather[0].description}`\n    );\n    console.log(`Temp 6hr: ${weatherData.list[2].main.temp}`);\n    console.log(\n      `Description 6hr: ${weatherData.list[2].weather[0].description}`\n    );\n    console.log(`Temp 9hr: ${weatherData.list[3].main.temp}`);\n    console.log(\n      `Description 9hr: ${weatherData.list[3].weather[0].description}`\n    );\n    console.log(`Temp 12hr: ${weatherData.list[4].main.temp}`);\n    console.log(\n      `Description 12hr: ${weatherData.list[4].weather[0].description}`\n    );\n    console.log(`Temp 15hr: ${weatherData.list[5].main.temp}`);\n    console.log(\n      `Description 15hr: ${weatherData.list[5].weather[0].description}`\n    );\n    console.log(`Temp 18hr: ${weatherData.list[6].main.temp}`);\n    console.log(\n      `Description 18hr: ${weatherData.list[6].weather[0].description}`\n    );\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/retrieveData.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
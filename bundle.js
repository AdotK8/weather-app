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

/***/ "./src/dayOrNightChecker.js":
/*!**********************************!*\
  !*** ./src/dayOrNightChecker.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dayOrNightChecker)\n/* harmony export */ });\nfunction dayOrNightChecker(sunrise, sunset, current) {\n  if (current < sunrise || current > sunset) {\n    return \"n\";\n  }\n  return \"d\";\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dayOrNightChecker.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _retrieveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveData */ \"./src/retrieveData.js\");\n\n\n(0,_retrieveData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _tempConvertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConvertor */ \"./src/tempConvertor.js\");\n/* harmony import */ var _timeConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeConversion */ \"./src/timeConversion.js\");\n/* harmony import */ var _dayOrNightChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayOrNightChecker */ \"./src/dayOrNightChecker.js\");\n\n\n\n\nconst forecastInfo = {\n  temp0hr: \"\",\n  desc0hr: \"\",\n  time0hr: \"\",\n  dayOrNight0hr: \"\",\n  temp3hr: \"\",\n  desc3hr: \"\",\n  time3hr: \"\",\n  dayOrNight3hr: \"\",\n  temp6hr: \"\",\n  desc6hr: \"\",\n  time6hr: \"\",\n  dayOrNight6hr: \"\",\n  temp9hr: \"\",\n  desc9hr: \"\",\n  time9hr: \"\",\n  dayOrNight9hr: \"\",\n  temp12hr: \"\",\n  desc12hr: \"\",\n  time12hr: \"\",\n  dayOrNight12hr: \"\",\n  temp15hr: \"\",\n  desc15hr: \"\",\n  time15hr: \"\",\n  dayOrNight15hr: \"\",\n  temp18hr: \"\",\n  desc18hr: \"\",\n  time18hr: \"\",\n  dayOrNight18hr: \"\",\n};\n\nconst currentInfo = {\n  city: \"\",\n  country: \"\",\n  currentTime: \"\",\n  timezone: \"\",\n  description: \"\",\n  windSpeed: \"\",\n  currentTemp: \"\",\n  feelsLike: \"\",\n  dayOrNight: \"\",\n};\n\nfunction processData(forecastData, currentData) {\n  // console.log(forecastData);\n  console.log(currentData);\n  currentInfo.city = currentData.name;\n  currentInfo.country = currentData.sys.country;\n  currentInfo.description = currentData.weather[0].description;\n  currentInfo.windSpeed = currentData.wind.speed;\n  currentInfo.currentTemp = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentData.main.temp);\n  currentInfo.feelsLike = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentData.main.feels_like);\n  currentInfo.timezone = currentData.timezone;\n  currentInfo.currentTime = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentData.dt, currentData.timezone);\n  currentInfo.dayOrNight = (0,_dayOrNightChecker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    currentData.sys.sunrise,\n    currentData.sys.sunset,\n    currentData.dt\n  );\n  // above is data processing for current weather\n  // below is data processng for forecast weather\n  forecastInfo.temp0hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[0].main.temp);\n  forecastInfo.desc0hr = forecastData.list[0].weather[0].description;\n  forecastInfo.dayOrNight0hr = forecastData.list[0].sys.pod;\n  forecastInfo.time0hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[0].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp3hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[1].main.temp);\n  forecastInfo.desc3hr = forecastData.list[1].weather[0].description;\n  forecastInfo.dayOrNight3hr = forecastData.list[1].sys.pod;\n  forecastInfo.time3hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[1].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp6hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[2].main.temp);\n  forecastInfo.desc6hr = forecastData.list[2].weather[0].description;\n  forecastInfo.dayOrNight6hr = forecastData.list[2].sys.pod;\n  forecastInfo.time6hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[2].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp9hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[3].main.temp);\n  forecastInfo.desc9hr = forecastData.list[3].weather[0].description;\n  forecastInfo.dayOrNight9hr = forecastData.list[3].sys.pod;\n  forecastInfo.time9hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[3].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp12hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[4].main.temp);\n  forecastInfo.desc12hr = forecastData.list[4].weather[0].description;\n  forecastInfo.dayOrNight12hr = forecastData.list[4].sys.pod;\n  forecastInfo.time12hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[4].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp15hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[5].main.temp);\n  forecastInfo.desc15hr = forecastData.list[5].weather[0].description;\n  forecastInfo.dayOrNight15hr = forecastData.list[5].sys.pod;\n  forecastInfo.time15hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[5].dt,\n    currentData.timezone\n  );\n  forecastInfo.temp18hr = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData.list[6].main.temp);\n  forecastInfo.desc18hr = forecastData.list[6].weather[0].description;\n  forecastInfo.dayOrNight18hr = forecastData.list[6].sys.pod;\n  forecastInfo.time18hr = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    forecastData.list[6].dt,\n    currentData.timezone\n  );\n  // console.log(forecastInfo);\n  console.log(currentInfo);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

/***/ }),

/***/ "./src/retrieveData.js":
/*!*****************************!*\
  !*** ./src/retrieveData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveData)\n/* harmony export */ });\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\nconst location = \"sao paulo\";\n\nasync function retrieveData() {\n  const apiKey = \"cb561535d4382bd95e0f2ab965974e4e\";\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour\n  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;\n  try {\n    const response1 = await fetch(url, { mode: \"cors\" });\n    const response2 = await fetch(url2, { mode: \"cors\" });\n    const forecastData = await response1.json();\n    const currentData = await response2.json();\n    (0,_processData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData, currentData);\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/retrieveData.js?");

/***/ }),

/***/ "./src/tempConvertor.js":
/*!******************************!*\
  !*** ./src/tempConvertor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ kelvinToCelcius)\n/* harmony export */ });\nfunction kelvinToCelcius(K) {\n  const C = K - 273.15;\n  const cRounded = Math.round(C * 10) / 10;\n  return cRounded;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/tempConvertor.js?");

/***/ }),

/***/ "./src/timeConversion.js":
/*!*******************************!*\
  !*** ./src/timeConversion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ epochToTime)\n/* harmony export */ });\nfunction epochToTime(x, shift) {\n  const shiftedTime = x + shift;\n  const date = new Date(shiftedTime * 1000);\n  const time = date.getHours();\n  if (time < 10) {\n    return `0${time}`;\n  }\n  return time;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/timeConversion.js?");

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
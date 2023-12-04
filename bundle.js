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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  /* outline: solid 1px black; */\n}\n\nbody {\n  background-color: #c8d4da;\n  padding: 0;\n  margin: 0;\n}\n\n.header {\n  display: flex;\n  align-items: end;\n  justify-content: space-around;\n  padding-top: 20px;\n  justify-items: end;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 30vw;\n}\n\n.button {\n  height: 50px;\n  width: 100px;\n  background-color: #86aec3;\n  border-radius: 200px;\n  cursor: pointer;\n  position: relative;\n  transition: 0.2s;\n}\n\n.button::before {\n  position: absolute;\n  place-content: center;\n  background-color: white;\n  text-align: center;\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 100px;\n  margin: 2.5px;\n  transition: 0.2s;\n  z-index: 1;\n  font-weight: 600;\n}\n\n.celcius::before {\n  content: \"\\\\00b0 C\";\n  color: #86aec3;\n}\n\n.farrenheit::before {\n  content: \"\\\\00b0 F\";\n  color: #5f6f77;\n}\n\n#check:checked + .button {\n  background-color: #5f6f77;\n}\n\n#check:checked + .button::before {\n  transform: translateX(50px);\n}\n\n#check {\n  display: none;\n}\n\n#search-bar,\n.sig,\n.current,\n.forecast,\nh1,\n.button {\n  font-family: \"Inter\", sans-serif;\n}\n\nh1 {\n  color: #5f6f77;\n  margin: 0;\n}\n\n.top {\n  height: 20vh;\n}\n\n#magnify-icon {\n  height: 50px;\n  width: 50px;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 30px;\n  gap: 5px;\n}\n\n#search-bar {\n  width: 30vw;\n  height: 5vh;\n  font-size: 20px;\n  border-radius: 20px;\n  padding-left: 15px;\n  border: 0;\n  color: rgba(95, 111, 119, 1);\n}\n\n#country {\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\n}\n/* middle section  */\n\n.main {\n  height: 75vh;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  place-items: center;\n}\n\n.capitalise {\n  text-transform: capitalize;\n}\n.current,\n.forecast {\n  height: 30vh;\n  width: 80vw;\n  background-color: rgb(255, 255, 255, 1);\n  border-radius: 100px;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\n}\n\n.current {\n  color: #5f6f77;\n}\n\n.current {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  place-items: center;\n  text-align: center;\n}\n\n#current-temp {\n  font-size: 70px;\n  font-weight: 700;\n}\n#city {\n  font-size: 50px;\n}\n\n.current2 {\n  font-size: 20px;\n  display: grid;\n  grid-template-rows: 2fr 1fr 1fr 1fr;\n  place-items: center;\n  gap: 5px;\n}\n\n#date {\n  font-weight: 500;\n  font-size: larger;\n}\n\n#current-image {\n  height: 150px;\n  width: 150px;\n}\n\n#forecast-image {\n  height: 120px;\n  width: 120px;\n  place-self: center;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  /* padding: 10px; */\n  text-align: center;\n  color: #5f6f77;\n  /* place-items: center; */\n  align-items: center;\n}\n\n.forecast-tile {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n}\n\n#forecast-tile-1,\n#forecast-tile-2,\n#forecast-tile-3,\n#forecast-tile-4,\n#forecast-tile-5 {\n  border-right: 2px double #5f6f77;\n}\n\n.forecast-temp {\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.forecast-time {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n/* bottom section  */\n\n.bottom {\n  height: 5vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.sig {\n  font-size: 20px;\n  font-weight: 600;\n  color: #5f6f77;\n}\n\n#git {\n  height: 30px;\n  width: 30px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayToDom.js":
/*!*****************************!*\
  !*** ./src/displayToDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateCurrentInfo: () => (/* binding */ updateCurrentInfo),\n/* harmony export */   updateTemps: () => (/* binding */ updateTemps),\n/* harmony export */   updateTimes: () => (/* binding */ updateTimes)\n/* harmony export */ });\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\nfunction updateTemps() {\n  const currentTempDOM = document.querySelector(\"#current-temp\");\n  const feelsLikeDOM = document.querySelector(\"#feels-like\");\n  const forecastTempDOM = document.querySelectorAll(\".forecast-temp\");\n\n  if (_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit === \"C\") {\n    currentTempDOM.innerHTML = `${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.currentTempC}&deg;${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit}`;\n    feelsLikeDOM.innerHTML = `Feels Like: ${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.feelsLikeC}&deg;${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit}`;\n\n    for (let i = 0; i < forecastTempDOM.length; i++) {\n      forecastTempDOM[i].innerHTML = `${_processData__WEBPACK_IMPORTED_MODULE_0__.forecastInfo[`${i}`].tempC}&deg;${\n        _processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit\n      }`;\n    }\n  } else if (_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit === \"F\") {\n    currentTempDOM.innerHTML = `${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.currentTempF}&deg;${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit}`;\n    feelsLikeDOM.innerHTML = `Feels Like: ${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.feelsLikeF}&deg;${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit}`;\n\n    for (let i = 0; i < forecastTempDOM.length; i++) {\n      forecastTempDOM[i].innerHTML = `${_processData__WEBPACK_IMPORTED_MODULE_0__.forecastInfo[`${i}`].tempF}&deg;${\n        _processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.tempUnit\n      }`;\n    }\n  }\n}\n\nfunction updateTimes() {\n  const currentTimeDom = document.querySelector(\"#date\");\n  currentTimeDom.innerHTML = _processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.currentTime;\n\n  const forecastTimeDOM = document.querySelectorAll(\".forecast-time\");\n\n  for (let i = 0; i < forecastTimeDOM.length; i++) {\n    forecastTimeDOM[i].innerHTML = _processData__WEBPACK_IMPORTED_MODULE_0__.forecastInfo[i].time;\n  }\n}\n\nfunction updateCurrentInfo() {\n  const cityDOM = document.querySelector(\"#city\");\n  const descriptionDOM = document.querySelector(\"#description\");\n  const windSpeedDOM = document.querySelector(\"#wind-speed\");\n\n  cityDOM.innerHTML = `${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.city}, ${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.country}`;\n  descriptionDOM.innerHTML = _processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.description;\n  windSpeedDOM.innerHTML = `Wind Speed: ${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.windSpeed}m/s`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/displayToDom.js?");

/***/ }),

/***/ "./src/imageUpdater.js":
/*!*****************************!*\
  !*** ./src/imageUpdater.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateImages)\n/* harmony export */ });\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\nfunction updateImages() {\n  const mainIconDOM = document.querySelector(\"#current-image\");\n  const mainUrl = `https://openweathermap.org/img/wn/${_processData__WEBPACK_IMPORTED_MODULE_0__.currentInfo.icon}@2x.png`;\n  mainIconDOM.setAttribute(\"src\", mainUrl);\n\n  const forecastIconsDOM = document.querySelectorAll(\"#forecast-image\");\n\n  for (let i = 0; i < forecastIconsDOM.length; i++) {\n    const forecastUrl = `https://openweathermap.org/img/wn/${_processData__WEBPACK_IMPORTED_MODULE_0__.forecastInfo[i].icon}@2x.png`;\n    forecastIconsDOM[i].setAttribute(\"src\", forecastUrl);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/imageUpdater.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _retrieveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveData */ \"./src/retrieveData.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _searchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchButton */ \"./src/searchButton.js\");\n/* harmony import */ var _tempConversionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempConversionButton */ \"./src/tempConversionButton.js\");\n\n\n\n\n\n(0,_retrieveData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"london\");\n(0,_searchButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_tempConversionButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentInfo: () => (/* binding */ currentInfo),\n/* harmony export */   \"default\": () => (/* binding */ processData),\n/* harmony export */   forecastInfo: () => (/* binding */ forecastInfo)\n/* harmony export */ });\n/* harmony import */ var _tempConvertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConvertor */ \"./src/tempConvertor.js\");\n/* harmony import */ var _timeConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeConversion */ \"./src/timeConversion.js\");\n/* harmony import */ var _displayToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayToDom */ \"./src/displayToDom.js\");\n/* harmony import */ var _imageUpdater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageUpdater */ \"./src/imageUpdater.js\");\n\n\n\n\n\nconst forecastInfo = {\n  0: {},\n  1: {},\n  2: {},\n  3: {},\n  4: {},\n  5: {},\n  6: {},\n};\n\nconst currentInfo = {\n  city: \"\",\n  country: \"\",\n  currentTime: \"\",\n  timezone: \"\",\n  description: \"\",\n  windSpeed: \"\",\n  currentTempC: \"\",\n  currentTempF: \"\",\n  feelsLikeC: \"\",\n  feelsLikeF: \"\",\n  tempUnit: \"C\",\n  icon: \"\",\n};\n\nfunction processData(forecastData, currentData) {\n  // console.log(forecastData);\n  // console.log(currentData);\n  currentInfo.city = currentData.name;\n  currentInfo.country = currentData.sys.country;\n  currentInfo.description = currentData.weather[0].description;\n  currentInfo.windSpeed = currentData.wind.speed;\n  currentInfo.currentTempC = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(currentData.main.temp);\n  currentInfo.currentTempF = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFarr)(currentData.main.temp);\n  currentInfo.feelsLikeC = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(currentData.main.feels_like);\n  currentInfo.feelsLikeF = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFarr)(currentData.main.feels_like);\n  currentInfo.timezone = currentData.timezone;\n  currentInfo.currentTime = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentData.dt, currentData.timezone);\n  currentInfo.icon = currentData.weather[0].icon;\n  // above is data processing for current weather\n\n  // below is data processng for forecast weather\n  for (let i = 0; i <= 6; i++) {\n    forecastInfo[i].tempC = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(forecastData.list[i].main.temp);\n    forecastInfo[i].tempF = (0,_tempConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFarr)(forecastData.list[i].main.temp);\n    forecastInfo[i].description = forecastData.list[i].weather[0].description;\n    forecastInfo[i].icon = forecastData.list[i].weather[0].icon;\n    forecastInfo[i].time = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      forecastData.list[i].dt,\n      currentData.timezone\n    );\n  }\n  // console.log(forecastInfo);\n  // console.log(currentInfo);\n\n  (0,_displayToDom__WEBPACK_IMPORTED_MODULE_2__.updateTemps)();\n  (0,_displayToDom__WEBPACK_IMPORTED_MODULE_2__.updateTimes)();\n  (0,_displayToDom__WEBPACK_IMPORTED_MODULE_2__.updateCurrentInfo)();\n  (0,_imageUpdater__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

/***/ }),

/***/ "./src/retrieveData.js":
/*!*****************************!*\
  !*** ./src/retrieveData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveData)\n/* harmony export */ });\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\nasync function retrieveData(location) {\n  const apiKey = \"cb561535d4382bd95e0f2ab965974e4e\";\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour\n  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; // current\n  try {\n    const response1 = await fetch(url, { mode: \"cors\" });\n    const response2 = await fetch(url2, { mode: \"cors\" });\n    const forecastData = await response1.json();\n    const currentData = await response2.json();\n    (0,_processData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(forecastData, currentData);\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/retrieveData.js?");

/***/ }),

/***/ "./src/searchButton.js":
/*!*****************************!*\
  !*** ./src/searchButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchAndSubmit)\n/* harmony export */ });\n/* harmony import */ var _retrieveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveData */ \"./src/retrieveData.js\");\n\n\nconst searchBar = document.querySelector(\"#search-bar\");\nconst form = document.querySelector(\"form\");\n\nasync function searchAndSubmit() {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    (0,_retrieveData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchBar.value);\n    searchBar.value = \"\";\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/searchButton.js?");

/***/ }),

/***/ "./src/tempConversionButton.js":
/*!*************************************!*\
  !*** ./src/tempConversionButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleButton)\n/* harmony export */ });\n/* harmony import */ var _displayToDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayToDom */ \"./src/displayToDom.js\");\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\n\nconst tempButton = document.querySelector(\".button\");\n\nfunction toggleButton() {\n  tempButton.addEventListener(\"click\", () => {\n    tempButton.classList.toggle(\"celcius\");\n    tempButton.classList.toggle(\"farrenheit\");\n\n    if (_processData__WEBPACK_IMPORTED_MODULE_1__.currentInfo.tempUnit === \"C\") {\n      _processData__WEBPACK_IMPORTED_MODULE_1__.currentInfo.tempUnit = \"F\";\n      (0,_displayToDom__WEBPACK_IMPORTED_MODULE_0__.updateTemps)();\n    } else if (_processData__WEBPACK_IMPORTED_MODULE_1__.currentInfo.tempUnit === \"F\") {\n      _processData__WEBPACK_IMPORTED_MODULE_1__.currentInfo.tempUnit = \"C\";\n      (0,_displayToDom__WEBPACK_IMPORTED_MODULE_0__.updateTemps)();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/tempConversionButton.js?");

/***/ }),

/***/ "./src/tempConvertor.js":
/*!******************************!*\
  !*** ./src/tempConvertor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   kelvinToCelcius: () => (/* binding */ kelvinToCelcius),\n/* harmony export */   kelvinToFarr: () => (/* binding */ kelvinToFarr)\n/* harmony export */ });\nfunction kelvinToCelcius(K) {\n  const C = K - 273.15;\n  return C.toFixed();\n}\n\nfunction kelvinToFarr(K) {\n  const F = (K - 273.15) * 1.8 + 32;\n  return F.toFixed();\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/tempConvertor.js?");

/***/ }),

/***/ "./src/timeConversion.js":
/*!*******************************!*\
  !*** ./src/timeConversion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ epochToTime)\n/* harmony export */ });\nfunction epochToTime(x, shift) {\n  const shiftedTime = x + shift;\n  const date = new Date(shiftedTime * 1000);\n  const time = date.getHours();\n  const day = date.getDay();\n  const dayNames = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n  if (time < 10) {\n    return `${dayNames[day]} |0${time}:00`;\n  }\n  return `${dayNames[day]} |${time}:00`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/timeConversion.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
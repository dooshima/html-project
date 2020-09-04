/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assests/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assests/js/main.js":
/*!****************************!*\
  !*** ./assests/js/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./assests/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./assests/js/main.js?");

/***/ }),

/***/ "./assests/scss/main.scss":
/*!********************************!*\
  !*** ./assests/scss/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assests/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./assests/scss/main.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assests/scss/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assests/scss/main.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit; }\\n\\nhtml {\\n  font-size: 62.5%;\\n  /* 100%*10px/16 = 62.5% */\\n  /* font-size:10px; 10px is = root 1rem, or anything you specify as the root */ }\\n\\nbody {\\n  box-sizing: border-box;\\n  background-color: #FAFAFA; }\\n\\n::selection {\\n  background-color: #55c57a;\\n  color: #fff; }\\n\\n.containers {\\n  background-color: #FAFAFA; }\\n\\n@media only screen and (max-width: 550px) {\\n  html {\\n    font-size: 50%; } }\\n\\n.header {\\n  display: flex;\\n  background-color: #FFFFFF;\\n  justify-content: space-around;\\n  box-shadow: 0px 3px 6px #00000029;\\n  align-items: center;\\n  height: 5rem; }\\n  .header__content {\\n    display: flex;\\n    width: 35%;\\n    justify-content: space-between;\\n    align-items: center; }\\n    .header__content-search {\\n      display: flex;\\n      position: relative; }\\n      .header__content-search .search__icon {\\n        height: 1.5rem;\\n        width: 1.5rem;\\n        position: absolute;\\n        left: 6%;\\n        top: 50%;\\n        transform: translate(-50%, -50%);\\n        z-index: 20;\\n        fill: gray; }\\n      .header__content-search input {\\n        height: 2.5rem;\\n        border-radius: 1rem;\\n        width: 25rem;\\n        background-color: #F8F8F8FC;\\n        outline: none;\\n        border-color: light-grey;\\n        border: none;\\n        padding-left: 3rem; }\\n        .header__content-search input:hover {\\n          width: 30rem;\\n          transition: all .2s; }\\n        .header__content-search input::placeholder {\\n          font-size: 1.3rem;\\n          left: 6%;\\n          color: grey; }\\n  .header__profile {\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    align-self: center;\\n    width: 15rem; }\\n    .header__profile-text {\\n      font-size: 1.2rem; }\\n    .header__profile-logo {\\n      height: 3.3rem; }\\n\\n@media only screen and (max-width: 780px) {\\n  .header {\\n    justify-content: space-between; } }\\n\\n@media only screen and (max-width: 370px) {\\n  #input_tag {\\n    width: 15rem; } }\\n\\n#main__cont {\\n  margin-top: 5rem;\\n  width: 70%; }\\n\\n.icon {\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n  margin-bottom: 3rem; }\\n  .icon__plus {\\n    fill: #00A294; }\\n  .icon__text {\\n    font-size: 1rem;\\n    margin-left: 1.8rem;\\n    color: #00A294; }\\n\\n.svg_icon {\\n  display: flex;\\n  font-size: 1.3rem;\\n  align-items: center;\\n  align-content: center;\\n  position: relative;\\n  height: 5rem; }\\n  .svg_icon :not(:last-child) {\\n    margin-bottom: 3rem; }\\n  .svg_icon-img {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    transform: translate(-50%, -50%);\\n    position: absolute;\\n    top: 50%;\\n    left: 5%; }\\n  .svg_icon-text {\\n    margin-left: 2rem;\\n    transform: translate(-50%, -50%);\\n    position: absolute;\\n    top: 50%;\\n    left: 14%;\\n    font-weight: 500; }\\n  .svg_icon-notify {\\n    margin-left: 2rem;\\n    transform: translate(-50%, -50%);\\n    position: absolute;\\n    top: 50%;\\n    left: 20%;\\n    font-weight: 500; }\\n\\n.move {\\n  margin-bottom: 3rem; }\\n  .move :hover {\\n    background-color: #00A294;\\n    transition: all .2s; }\\n\\n.arrow_link {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  margin-bottom: 2rem; }\\n  .arrow_link-svg {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    fill: #787F83; }\\n  .arrow_link-txt {\\n    color: #787F83;\\n    margin-bottom: auto;\\n    font-size: 1.2rem;\\n    margin-left: .5rem; }\\n\\n.arrow_links {\\n  margin-bottom: 5rem; }\\n\\n.last-link {\\n  background-color: #FFFFFF;\\n  box-shadow: 0px 3px 6px #00000029;\\n  text-align: center;\\n  width: 100%;\\n  padding: 2rem; }\\n  .last-link a {\\n    color: #BCBCBC; }\\n  .last-link-text {\\n    color: #BCBCBC;\\n    margin-top: 2rem; }\\n\\n#second__content .middle_text {\\n  display: flex;\\n  font-size: 1.6rem;\\n  font-weight: 500;\\n  align-items: center;\\n  margin-bottom: 4rem; }\\n  #second__content .middle_text .middle_text-svg {\\n    height: 1.5rem;\\n    width: 1.5rem;\\n    fill: #00A294; }\\n  #second__content .middle_text .middle_text-txt {\\n    margin-bottom: auto;\\n    color: #00A294; }\\n  #second__content .middle_text .middle_text-stage {\\n    margin-left: 3rem;\\n    margin-bottom: auto; }\\n\\n.inner__content {\\n  background-color: #FFFFFF;\\n  box-shadow: 0px 3px 6px #00000029;\\n  min-height: 60rem; }\\n  .inner__content .card {\\n    padding: 3rem;\\n    border: none;\\n    margin-bottom: 0rem; }\\n\\n.opacq_section {\\n  width: 50%;\\n  height: 100%;\\n  margin: auto; }\\n  .opacq_section-img {\\n    opacity: 0.1; }\\n\\n.footer {\\n  display: flex;\\n  justify-content: flex-end;\\n  padding-right: 3rem;\\n  margin-top: 6rem;\\n  font-size: 1.3rem;\\n  font-weight: 500;\\n  position: relative; }\\n  .footer-text {\\n    transform: translateX(-1.5rem);\\n    margin-top: auto; }\\n  .footer-submit {\\n    border-radius: 4rem;\\n    width: 30%;\\n    padding: 1rem;\\n    background-color: #00A294;\\n    color: #fff;\\n    border: none;\\n    outline: none;\\n    text-align: center; }\\n\\n.third__content {\\n  background-color: #fff;\\n  padding: 2rem; }\\n  .third__content-top {\\n    color: grey; }\\n  .third__content-card {\\n    display: flex;\\n    align-items: center;\\n    margin-bottom: 1.5rem; }\\n  .third__content-div {\\n    margin-left: 1rem; }\\n\\n.see_all {\\n  text-align: center;\\n  background-color: lightgrey;\\n  padding: .5rem;\\n  color: gray; }\\n\\n#last-child {\\n  margin-bottom: 0rem; }\\n\\n@media only screen and (max-width: 1196px) {\\n  #main__cont {\\n    margin-top: 5rem;\\n    width: 100%; } }\\n\\n@media only screen and (max-width: 990px) {\\n  #main__cont {\\n    margin-top: 5rem;\\n    width: 70%; }\\n  .icon {\\n    position: absolute;\\n    top: 30%;\\n    left: -18%; }\\n    .icon__text {\\n      margin-left: 1rem; }\\n  .svg_icon {\\n    margin-left: auto; }\\n    .svg_icon-text {\\n      margin-left: 4rem; }\\n    .svg_icon-notify {\\n      margin-left: 6rem; }\\n  #home {\\n    margin-left: 0; }\\n  .move {\\n    margin-bottom: 0rem;\\n    transform: translateY(-3rem);\\n    display: flex;\\n    flex-direction: row; }\\n  .arrow_links {\\n    position: absolute;\\n    top: 65%;\\n    left: -18%; }\\n  .last-link {\\n    transform: translateY(150rem); }\\n  #second__content .middle_text {\\n    margin-top: -8rem; }\\n  .third__content {\\n    text-align: center;\\n    margin-top: 5rem;\\n    font-size: 1.3rem; }\\n    .third__content-top {\\n      color: grey; }\\n    .third__content-card {\\n      justify-content: center;\\n      margin-bottom: 3rem;\\n      margin-top: 3rem; }\\n    .third__content-img {\\n      width: 20%; }\\n    .third__content-div {\\n      margin-left: 5rem; } }\\n\\n@media only screen and (max-width: 870px) {\\n  .last-link {\\n    display: none; }\\n  #second__content .middle_text {\\n    margin-top: 0rem; }\\n  .arrow_links {\\n    position: absolute;\\n    top: 120%;\\n    left: -18%; }\\n  .move {\\n    margin-bottom: 0rem;\\n    transform: translateY(-3rem);\\n    display: flex;\\n    flex-direction: row;\\n    margin-left: -3rem; } }\\n\\n@media only screen and (max-width: 500px) {\\n  #second__content .middle_text {\\n    display: flex;\\n    font-size: 1.2rem;\\n    font-weight: 500;\\n    align-items: center;\\n    margin-bottom: 4rem; }\\n  .third__content-img {\\n    width: 30%; }\\n  .third__content-div {\\n    margin-left: 2rem; } }\\n\\n@media only screen and (max-width: 370px) {\\n  .move {\\n    margin-bottom: 0rem;\\n    transform: translateY(-3rem);\\n    display: flex;\\n    flex-direction: row;\\n    margin-left: -6rem; }\\n  .svg_icon-notify {\\n    margin-left: 5rem; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./assests/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });
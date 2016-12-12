(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(20);
	__webpack_require__(24);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports


	// module
	exports.push([module.id, "body {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: normal;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\n.container {\n  margin: 0 auto;\n  max-width: 995px;\n}\n.center {\n  text-align: center;\n}\n.divider {\n  border-top: 1px solid #dedede;\n}\n/* Brad colors */\n/* Other colors */\n.silver {\n  color: #C1C1C1;\n}\n/* H 1-6 */\nh1 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 34px;\n  margin: 0;\n  padding: 0;\n}\nh2 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 30px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\nh3 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\nh4 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\nh5 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\nh6 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\n/* Paragraph */\n.text {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  color: #475257;\n}\n.text__secondary {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  color: #8a8a8a;\n}\n.text__small {\n  font-size: 12px;\n}\n@keyframes blink {\n  0%,\n  100% {\n    background: #dedede;\n  }\n  25% {\n    background: #C1C1C1;\n  }\n  50% {\n    background: #dedede;\n  }\n  75% {\n    background: #C1C1C1;\n  }\n}\n@keyframes border-blink {\n  0%,\n  100% {\n    border-color: #dedede;\n  }\n  25% {\n    border-color: #C1C1C1;\n  }\n  50% {\n    border-color: #dedede;\n  }\n  75% {\n    border-color: #C1C1C1;\n  }\n}\n[flex] {\n  flex: 1;\n}\n[layout-row] {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n[layout-column] {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\nform {\n  width: 100%;\n}\n/* Checkboxes */\n.dd__checkbox {\n  position: relative;\n}\n.dd__checkbox .checkbox__body {\n  background: #FFFFFF;\n  border: 1px solid #B4BCC2;\n  border-radius: 4px;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: auto;\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n.dd__checkbox.checked .checkbox__body {\n  border: 1px solid #529CCF;\n  background: #529CCF;\n  color: #FFF;\n}\n.dd__checkbox.checked .checkbox__body::before {\n  box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute;\n  left: 7px;\n  top: 2px;\n  display: table;\n  width: 5px;\n  height: 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-top: 0;\n  border-left: 0;\n  content: '';\n}\n.dd__checkbox .checkbox__label {\n  color: #8a8a8a;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: normal;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  margin-left: 30px;\n  margin-right: 0;\n}\n.dd__checkbox.checked .checkbox__label {\n  color: #475257;\n}\n/* Inputs */\n.lable {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  color: #364347;\n  margin-bottom: 8px;\n}\n.lable span {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  color: #8a8a8a;\n  margin-left: 8px;\n}\n.dd__input {\n  display: flex;\n  align-items: center;\n  height: 44px;\n  border-radius: 4px;\n  border: 1px solid #dedede;\n  margin: 0 0 20px;\n  overflow: hidden;\n  color: #C1C1C1;\n}\n.dd__input .icon {\n  margin-left: 10px;\n}\n.dd__input .text-limit-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n.dd__input .limit-indicator {\n  position: relative;\n  bottom: auto;\n}\n.dd__input input {\n  width: 100%;\n  height: 44px;\n  outline: none;\n  color: #364347;\n  border: none;\n  padding: 0 10px;\n  font-weight: 300;\n  box-sizing: border-box;\n}\n.dd__input input::-webkit-input-placeholder {\n  color: #C1C1C1;\n}\n.dd__input input ::-moz-placeholder {\n  color: #C1C1C1;\n}\n.dd__input input :-moz-placeholder {\n  color: #C1C1C1;\n}\n.dd__input input :-ms-input-placeholder {\n  color: #C1C1C1;\n}\n.dd__textarea {\n  display: flex;\n  height: 80px;\n  border-radius: 4px;\n  border: 1px solid #dedede;\n  margin: 0 0 20px;\n  overflow: hidden;\n  color: #C1C1C1;\n}\n.dd__textarea textarea {\n  width: 100%;\n  outline: none;\n  color: #364347;\n  border: none;\n  padding: 10px;\n  font-weight: 300;\n  box-sizing: border-box;\n  resize: none;\n}\n.dd__textarea textarea::-webkit-input-placeholder {\n  color: #C1C1C1;\n}\n.dd__textarea textarea ::-moz-placeholder {\n  color: #C1C1C1;\n}\n.dd__textarea textarea :-moz-placeholder {\n  color: #C1C1C1;\n}\n.dd__textarea textarea :-ms-input-placeholder {\n  color: #C1C1C1;\n}\n/* Mixins */\n/* Mixins end */\n/* Normal buttons start */\n.btn {\n  color: #FFFFFF;\n  outline: none;\n  height: 44px;\n  min-width: 200px;\n  vertical-align: middle;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  border-radius: 4px;\n  margin: 0 5px;\n}\n.btn--primary {\n  color: #FFFFFF;\n  background-color: #FF6400;\n  border: 1px solid #FF6400;\n}\n.btn--primary:hover {\n  border-color: #EC5D00;\n  background-color: #EC5D00;\n  color: #FFFFFF;\n}\n.btn--primary:disabled {\n  border: 1px solid #FF6400;\n  background-color: #FF6400;\n  opacity: 0.3;\n}\n.btn--default {\n  color: #B4BCC2;\n  background-color: #FFFFFF;\n  border: 1px solid #B4BCC2;\n}\n.btn--default:hover {\n  border-color: #B4BCC2;\n  background-color: #F8F8F9;\n  color: #B4BCC2;\n}\n.btn--default:disabled {\n  border: 1px solid #B4BCC2;\n  background-color: #FFFFFF;\n  opacity: 0.3;\n}\n.btn--hollow {\n  color: #FF6400;\n  background-color: #FFFFFF;\n  border: 1px solid #FF6400;\n}\n.btn--hollow:hover {\n  border-color: #EC5D00;\n  background-color: #EC5D00;\n  color: #FFFFFF;\n}\n.btn--hollow:disabled {\n  border: 1px solid #FF6400;\n  background-color: #FFFFFF;\n  opacity: 0.3;\n}\n/* Normal buttons end */\n/* Small buttons start */\n.btn--sm {\n  min-width: 120px;\n  font-size: 13px;\n}\n.btn--xs {\n  min-width: 33px;\n  height: 33px;\n  font-size: 13px;\n}\n/* Normal buttons end */\n/* Link buttons start */\n.btn__link {\n  background: none;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 5px;\n}\n.btn__link--primary {\n  color: #529CCF;\n}\n.btn__link--primary:hover {\n  color: #529CCF;\n  text-decoration: underline;\n}\n.btn__link--primary:focus {\n  color: #529CCF;\n}\n.btn__link--primary:disabled {\n  opacity: 0.3;\n}\n/* Normal buttons end */\n/* Icon buttons start */\n.btn__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 4px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  margin: 0 5px;\n  background: transparent;\n  border: none;\n}\n.btn__icon.btn__icon--small {\n  width: 33px;\n  height: 33px;\n}\n.btn__icon--inner {\n  border: none;\n  background: #FFFFFF;\n  font-size: 8px;\n  cursor: pointer;\n  vertical-align: middle;\n  color: #475257;\n  padding: 0;\n  outline: none;\n}\n/* Icon buttons end */\n/* Buttons animation */\n.btn--slide {\n  transition: max-width 0.2s;\n  overflow: hidden;\n}\n.btn--slide > span {\n  transition: opacity 0.2s;\n  display: block;\n  white-space: nowrap;\n}\n.btn--slide.btn--xs {\n  max-width: 33px;\n}\n.btn--slide.btn--xs > span {\n  padding: 10px;\n}\n.btn--slide.btn--xs i {\n  margin-right: 5px;\n}\n.btn--slide:hover {\n  max-width: 100%;\n}\n.btn--slide:hover > span {\n  opacity: 1;\n}\n.icon {\n  line-height: 1.15 !important;\n}\n.icon-arrow-up {\n  transform: rotate(90deg);\n  display: inline-block;\n}\n.icon-arrow-right {\n  transform: rotate(180deg);\n  display: inline-block;\n}\n.icon-arrow-down {\n  transform: rotate(270deg);\n  display: inline-block;\n}\n.modal-dialog {\n  margin: 200px auto !important;\n}\n.modal-content {\n  background: none;\n  box-shadow: none;\n  border: none;\n  border-radius: none;\n}\n.spin__box {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: 100%;\n  width: 15px;\n  height: 15px;\n  box-shadow: 15px 15px #E96300, -15px 15px #529CCF, -15px -15px #62B989, 15px -15px #F3BC65;\n  animation: spin ease infinite 3s;\n}\n@keyframes spin {\n  0%,\n  100% {\n    box-shadow: 15px 15px #529CCF, -15px 15px #62B989, -15px -15px #F3BC65, 15px -15px #E96300;\n  }\n  25% {\n    box-shadow: -15px 15px #62B989, -15px -15px #F3BC65, 15px -15px #E96300, 15px 15px #529CCF;\n  }\n  50% {\n    box-shadow: -15px -15px #F3BC65, 15px -15px #E96300, 15px 15px #529CCF, -15px 15px #62B989;\n  }\n  75% {\n    box-shadow: 15px -15px #E96300, 15px 15px #529CCF, -15px 15px #62B989, -15px -15px #F3BC65;\n  }\n}\n.dd__tabs {\n  display: flex;\n  flex-grow: 0;\n  align-content: flex-start;\n  justify-content: space-around;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.dd__tabs .dd__tab-item {\n  text-align: center;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n  display: block;\n}\n.dd__tabs .dd__tab-item a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #F8F8F9;\n  color: #8a8a8a;\n  padding: 16px 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  border-right: 1px solid #dedede;\n  border-bottom: 1px solid #dedede;\n  border-top: 1px solid #dedede;\n}\n.dd__tabs .dd__tab-item.active a {\n  color: #364347;\n  background: #FFFFFF;\n  border-bottom: 0;\n}\n.dd__tab-content {\n  padding: 20px;\n}\n.dd__tab-content .dd__content-item {\n  display: none;\n}\n.dd__tab-content .dd__content-item.active {\n  display: flex;\n}\ndd-card {\n  display: flex;\n}\n.dotted .dd__card {\n  border: 2px dotted #dedede;\n}\n.dd__card {\n  transition: all 0.2s;\n  width: 100%;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n  margin: 10px;\n}\n.dd__card .divider {\n  transition: all 0.2s;\n  opacity: 0;\n}\n.dd__card .dd__card-header {\n  margin: 20px;\n}\n.dd__card .dd__card-title {\n  margin: 0 20px 15px;\n}\n.dd__card .dd__card-text {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  color: #8a8a8a;\n  line-height: 1.5;\n  margin: 0 20px 15px;\n}\n.dd__card .dd__card-footer {\n  transition: all 0.2s;\n  display: flex;\n  margin: 20px;\n}\n.dd__card .dd__card-footer .btn {\n  margin: 0 3px;\n}\n.dd__card .dd__card-footer .btn:first-child {\n  margin-left: 0;\n}\n.dd__card .dd__card-footer .btn:last-child {\n  margin-right: 0;\n}\n.hover__action > .dd__card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);\n}\n.hover__action > .dd__card:hover .divider {\n  transform: translateY(-20px);\n  opacity: 1;\n}\n.hover__action > .dd__card:hover .dd__card-footer {\n  transform: translateY(-10px);\n  border-color: #dedede;\n}\ndd-card-loading {\n  display: flex;\n  width: 33%;\n}\n.dd__card-loading {\n  width: 100%;\n  padding: 20px;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n  margin: 10px;\n  animation: border-blink 5s ease 0s infinite;\n  transition: all ease-in-out 0.5s;\n}\n.dd__card-loading .loading__header {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.dd__card-loading .loading__header .loading__header-images {\n  display: flex;\n}\n.dd__card-loading .loading__header .loading__header-images div {\n  width: 38px;\n  height: 38px;\n  border: 2px solid #FFFFFF;\n  border-radius: 50%;\n  position: relative;\n  box-sizing: border-box;\n  animation: blink 5s ease 0s infinite;\n  transition: all ease-in-out 0.5s;\n}\n.dd__card-loading .loading__header .loading__header-images div:first-child {\n  z-index: 30;\n}\n.dd__card-loading .loading__header .loading__header-images div:nth-child(2) {\n  z-index: 20;\n  margin-left: -19px;\n}\n.dd__card-loading .loading__header .loading__header-images div:nth-child(3) {\n  z-index: 10;\n  margin-left: -19px;\n}\n.dd__card-loading .loading__header .loading__header-title {\n  width: 110px;\n  height: 10px;\n  border-radius: 10px;\n  margin-left: 20px;\n  animation: blink 5s ease 0s infinite;\n  transition: all ease-in-out 0.5s;\n}\n.dd__card-loading .loading__body {\n  height: 78px;\n}\n.dd__card-loading .loading__body div {\n  height: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  animation: blink 5s ease 0s infinite;\n  transition: all ease-in-out 0.5s;\n}\n.dd__card-loading .loading__body div:first-child {\n  width: 90%;\n}\n.dd__card-loading .loading__body div:nth-child(2) {\n  width: 100%;\n}\n.dd__card-loading .loading__body div:nth-child(3) {\n  width: 60%;\n}\n.dd__card-loading .loading__footer {\n  display: flex;\n  margin-top: 100px;\n  margin-top: 43px;\n}\n.dd__card-loading .loading__footer div {\n  width: 33px;\n  height: 33px;\n  border: 2px solid;\n  background: #fff;\n  margin-right: 10px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  animation: border-blink 5s ease 0s infinite;\n  transition: all ease-in-out 0.5s;\n}\n.dd__content {\n  display: block;\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.dd__content[flex] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.dd__content[column] {\n  flex-direction: column;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/raw-loader/index.js!./../../node_modules/string-replace-loader/index.js?search=url%5C(\"%5C/&replace=url(\"./&flags=gm!./../../node_modules/fontgen-loader/index.js?fileName=fonts/[hash]-[fontname][ext]!./dd.font.js", function() {
				var newContent = require("!!./../../node_modules/raw-loader/index.js!./../../node_modules/string-replace-loader/index.js?search=url%5C(\"%5C/&replace=url(\"./&flags=gm!./../../node_modules/fontgen-loader/index.js?fileName=fonts/[hash]-[fontname][ext]!./dd.font.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "@font-face {\n\tfont-family: \"dd-icon-font\";\n\tsrc: url(\"./fonts/19c312ce5fa63ac5a7197e2f1bba114c-dd-icon-font.eot?#iefix\") format(\"embedded-opentype\"),\nurl(\"./fonts/f2d9dd40de4fcfafb0e5f24fb4f4ce3c-dd-icon-font.woff\") format(\"woff\"),\nurl(\"./fonts/ca3333ca7e1cb7da25e9ba53bdb153ae-dd-icon-font.ttf\") format(\"truetype\"),\nurl(\"./fonts/3dccdfa11d9b7c0f2c882754fc857689-dd-icon-font.svg#dd-icon-font\") format(\"svg\");\n}\n\n.icon {\n\tline-height: 1;\n}\n\n.icon:before {\n\tfont-family: dd-icon-font !important;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tvertical-align: top;\n}\n\n.icon-arrow:before {\n\tcontent: \"\\f101\";\n}\n.icon-create-round:before {\n\tcontent: \"\\f102\";\n}\n.icon-forward:before {\n\tcontent: \"\\f103\";\n}\n.icon-remove:before {\n\tcontent: \"\\f104\";\n}\n.icon-search:before {\n\tcontent: \"\\f105\";\n}\n.icon-trash:before {\n\tcontent: \"\\f106\";\n}\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=dd-styles.js.map
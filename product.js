/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"product": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./pages/product/product.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","vendors~guide~product~products","vendors~guide~product","guide~index~login~product~products~register","guide~index~product~products","guide~product"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/product/product.js":
/*!**********************************!*\
  !*** ./pages/product/product.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_base_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/base/base */ "./shared/base/base.js");
/* harmony import */ var _components_diagram_diagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/diagram/diagram */ "./components/diagram/diagram.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_review_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/review/review */ "./components/review/review.js");
/* harmony import */ var _components_infographic_infographic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/infographic/infographic */ "./components/infographic/infographic.js");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/list/list */ "./components/list/list.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_form_room_reservation_room_reservation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/form/room-reservation/room-reservation */ "./components/form/room-reservation/room-reservation.js");
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product.scss */ "./pages/product/product.scss");
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_product_scss__WEBPACK_IMPORTED_MODULE_11__);












jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  new _components_header_header__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product__carousel').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product .js-diagram').each(function () {
    new _components_diagram_diagram__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product .js-review').each(function () {
    new _components_review_review__WEBPACK_IMPORTED_MODULE_5__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-room-reservation').each(function () {
    new _components_form_room_reservation_room_reservation__WEBPACK_IMPORTED_MODULE_10__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  new _components_footer_footer__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer'));
});

/***/ }),

/***/ "./pages/product/product.scss":
/*!************************************!*\
  !*** ./pages/product/product.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./shared/constants.js":
/*!*****************************!*\
  !*** ./shared/constants.js ***!
  \*****************************/
/*! exports provided: RUBLE_SIGN, COLORS, GRADIENTS, BREAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUBLE_SIGN", function() { return RUBLE_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENTS", function() { return GRADIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
var RUBLE_SIGN = '₽';
var COLORS = {
  dark: '#1f2041',
  dark75: 'rgba(#1f2041, .75)',
  dark50: 'rgba(#1f2041, .50)',
  dark30: 'rgba(#1f2041, .30)',
  dark25: 'rgba(#1f2041, .25)',
  dark10: 'rgba(#1f2041, .1)',
  dark5: 'rgba(#1f2041, .05)',
  white: '#fff',
  purple: '#bc9cff',
  green: '#6fcf97',
  black: '#000'
};
var GRADIENTS = {
  purple: "linear-gradient(180deg, ".concat(COLORS.purple, " 0%, #8BA4F9 100%)"),
  green: "linear-gradient(180deg, ".concat(COLORS.green, " 0%, #66D2EA 100%)"),
  yellow: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gray: 'linear-gradient(180deg, #919191 0%, #3D4975 100%)'
};
var BREAKPOINTS = {
  xxs: 320,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1440
};


/***/ })

/******/ });
//# sourceMappingURL=product.js.map
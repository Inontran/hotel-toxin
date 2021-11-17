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
/******/ 		"register": 0
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
/******/ 	deferredModules.push(["./pages/register/register.js","vendors~guide~index~login~product~products~register","guide~index~login~product~products~register"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./components/checkbox/checkbox.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.scss */ "./components/checkbox/checkbox.scss");
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./components/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/first-display/first-display.js":
/*!***************************************************!*\
  !*** ./components/first-display/first-display.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _first_display_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-display.scss */ "./components/first-display/first-display.scss");
/* harmony import */ var _first_display_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_first_display_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FirstDisplay = /*#__PURE__*/function () {
  function FirstDisplay($firstDisplay) {
    _classCallCheck(this, FirstDisplay);

    _defineProperty(this, "_$firstDisplay", void 0);

    _defineProperty(this, "_$headerSite", void 0);

    _defineProperty(this, "_timerWindowResize", null);

    this._$firstDisplay = $firstDisplay;

    this._init();
  }

  _createClass(FirstDisplay, [{
    key: "_init",
    value: function _init() {
      this._$headerSite = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
      var isExistHeader = this._$headerSite.length;
      var heightFirstDisplayEqual100vh = this._$firstDisplay[0].offsetHeight === window.innerHeight;
      var resultConditions = isExistHeader && heightFirstDisplayEqual100vh;

      if (resultConditions) {
        this._calcHeightFirstDisplay();

        this._bindEventListeners();

        this._addEventListeners();
      }
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handleWindowResize = this._handleWindowResize.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(this._handleWindowResize);
    }
  }, {
    key: "_calcHeightFirstDisplay",
    value: function _calcHeightFirstDisplay() {
      var headerHeight = this._$headerSite.outerHeight();

      this._$firstDisplay.css('min-height', "calc(100vh - ".concat(headerHeight, "px)"));
    }
  }, {
    key: "_handleWindowResize",
    value: function _handleWindowResize(event) {
      var _this = this;

      if (this._timerWindowResize !== null) {
        clearTimeout(this._timerWindowResize);
      }

      this._timerWindowResize = setTimeout(function () {
        _this._calcHeightFirstDisplay();
      }, 10);
    }
  }]);

  return FirstDisplay;
}();

/* harmony default export */ __webpack_exports__["default"] = (FirstDisplay);

/***/ }),

/***/ "./components/first-display/first-display.scss":
/*!*****************************************************!*\
  !*** ./components/first-display/first-display.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form/site-registration/site-registration.js":
/*!****************************************************************!*\
  !*** ./components/form/site-registration/site-registration.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/input-text/input-text */ "./components/input-text/input-text.js");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/checkbox/checkbox */ "./components/checkbox/checkbox.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _components_radio_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/radio/radio */ "./components/radio/radio.js");
/* harmony import */ var _site_registration_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-registration.scss */ "./components/form/site-registration/site-registration.scss");
/* harmony import */ var _site_registration_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_site_registration_scss__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SiteRegistration = /*#__PURE__*/function () {
  function SiteRegistration($siteRegistration) {
    _classCallCheck(this, SiteRegistration);

    _defineProperty(this, "_$siteRegistration", void 0);

    this._$siteRegistration = $siteRegistration;

    this._init();
  }

  _createClass(SiteRegistration, [{
    key: "_init",
    value: function _init() {
      $('.js-input-text', this._$siteRegistration).each(function () {
        new _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_1__["default"]($(this));
      });
    }
  }]);

  return SiteRegistration;
}();

/* harmony default export */ __webpack_exports__["default"] = (SiteRegistration);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/form/site-registration/site-registration.scss":
/*!******************************************************************!*\
  !*** ./components/form/site-registration/site-registration.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/radio/radio.js":
/*!***********************************!*\
  !*** ./components/radio/radio.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ "./components/radio/radio.scss");
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_radio_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/radio/radio.scss":
/*!*************************************!*\
  !*** ./components/radio/radio.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/register/register.js":
/*!************************************!*\
  !*** ./pages/register/register.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_base_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/base/base */ "./shared/base/base.js");
/* harmony import */ var _components_first_display_first_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/first-display/first-display */ "./components/first-display/first-display.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_form_site_registration_site_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/site-registration/site-registration */ "./components/form/site-registration/site-registration.js");
/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.scss */ "./pages/register/register.scss");
/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_register_scss__WEBPACK_IMPORTED_MODULE_6__);







jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  new _components_header_header__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header'));
  new _components_first_display_first_display__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-first-display'));
  new _components_form_site_registration_site_registration__WEBPACK_IMPORTED_MODULE_5__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-site-registration'));
  new _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer'));
});

/***/ }),

/***/ "./pages/register/register.scss":
/*!**************************************!*\
  !*** ./pages/register/register.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=register.js.map
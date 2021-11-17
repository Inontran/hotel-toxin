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
/******/ 		"guide": 0
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
/******/ 	deferredModules.push(["./pages/guide/guide.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","vendors~guide~product~products","vendors~guide~product","vendors~guide~products","guide~index~login~product~products~register","guide~index~product~products","guide~products","guide~product"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form/room-search/room-search.js":
/*!****************************************************!*\
  !*** ./components/form/room-search/room-search.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");
/* harmony import */ var _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/list-counters/list-counters */ "./components/list-counters/list-counters.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _room_search_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-search.scss */ "./components/form/room-search/room-search.scss");
/* harmony import */ var _room_search_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_room_search_scss__WEBPACK_IMPORTED_MODULE_6__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var RoomSearch = /*#__PURE__*/function () {
  function RoomSearch($roomSearch) {
    _classCallCheck(this, RoomSearch);

    _defineProperty(this, "_$roomSearch", void 0);

    _defineProperty(this, "_airDatepicker", void 0);

    _defineProperty(this, "_dropdownWithDateArrival", void 0);

    _defineProperty(this, "_dropdownWithDateDeparture", void 0);

    _defineProperty(this, "_dropdownWithGuests", void 0);

    _defineProperty(this, "_listCountersWithGuests", void 0);

    this._$roomSearch = $roomSearch;

    this._init();
  }

  _createClass(RoomSearch, [{
    key: "_init",
    value: function _init() {
      var $airDatepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker', this._$roomSearch);
      this._airDatepicker = new _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]($airDatepicker);
      this._dropdownWithDateArrival = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown_with-date-arrival', this._$roomSearch));
      this._dropdownWithDateDeparture = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown_with-date-departure', this._$roomSearch));
      this._dropdownWithGuests = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown_with-guests', this._$roomSearch));
      this._listCountersWithGuests = new _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters_with-guests', this._$roomSearch));

      this._bindEventListeners();

      this._addEventListeners();
    }
  }, {
    key: "_bindEventListeners",
    value: function _bindEventListeners() {
      this._handleDatepickerChange = this._handleDatepickerChange.bind(this);
      this._handleListCountersChange = this._handleListCountersChange.bind(this);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      this._airDatepicker.addEventListener('change-air-datepicker', this._handleDatepickerChange);

      this._listCountersWithGuests.addEventListener('change-list-counters', this._handleListCountersChange);
    }
  }, {
    key: "_handleDatepickerChange",
    value: function _handleDatepickerChange() {
      var formattedDateStart = this._airDatepicker.getFormattedDateStart();

      this._dropdownWithDateArrival.setValue(formattedDateStart);

      this._dropdownWithDateArrival.toggle('hide');

      var formattedDateEnd = this._airDatepicker.getFormattedDateEnd();

      this._dropdownWithDateDeparture.setValue(formattedDateEnd);

      this._dropdownWithDateDeparture.toggle('hide');
    }
  }, {
    key: "_handleListCountersChange",
    value: function _handleListCountersChange() {
      var formattedOutput = this._listCountersWithGuests.getFormattedOutput();

      this._dropdownWithGuests.setValue(formattedOutput);
    }
  }]);

  return RoomSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (RoomSearch);

/***/ }),

/***/ "./components/form/room-search/room-search.scss":
/*!******************************************************!*\
  !*** ./components/form/room-search/room-search.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form/site-login/site-login.js":
/*!**************************************************!*\
  !*** ./components/form/site-login/site-login.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/input-text/input-text */ "./components/input-text/input-text.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _site_login_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-login.scss */ "./components/form/site-login/site-login.scss");
/* harmony import */ var _site_login_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_login_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SiteLogin = /*#__PURE__*/function () {
  function SiteLogin($siteLogin) {
    _classCallCheck(this, SiteLogin);

    _defineProperty(this, "_$siteLogin", void 0);

    this._$siteLogin = $siteLogin;

    this._init();
  }

  _createClass(SiteLogin, [{
    key: "_init",
    value: function _init() {
      $('.js-input-text', this._$siteLogin).each(function () {
        new _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_0__["default"]($(this));
      });
    }
  }]);

  return SiteLogin;
}();

/* harmony default export */ __webpack_exports__["default"] = (SiteLogin);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/form/site-login/site-login.scss":
/*!****************************************************!*\
  !*** ./components/form/site-login/site-login.scss ***!
  \****************************************************/
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

/***/ "./pages/guide/guide.js":
/*!******************************!*\
  !*** ./pages/guide/guide.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_base_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/base/base */ "./shared/base/base.js");
/* harmony import */ var _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");
/* harmony import */ var _components_card_product_card_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/card-product/card-product */ "./components/card-product/card-product.js");
/* harmony import */ var _components_diagram_diagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/diagram/diagram */ "./components/diagram/diagram.js");
/* harmony import */ var _components_expander_expander__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/expander/expander */ "./components/expander/expander.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/like-btn/like-btn */ "./components/like-btn/like-btn.js");
/* harmony import */ var _components_review_review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/review/review */ "./components/review/review.js");
/* harmony import */ var _components_rate_btn_rate_btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/rate-btn/rate-btn */ "./components/rate-btn/rate-btn.js");
/* harmony import */ var _components_slider_range_slider_range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/slider-range/slider-range */ "./components/slider-range/slider-range.js");
/* harmony import */ var _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/list-counters/list-counters */ "./components/list-counters/list-counters.js");
/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/pagination/pagination */ "./components/pagination/pagination.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/input-text/input-text */ "./components/input-text/input-text.js");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/checkbox/checkbox */ "./components/checkbox/checkbox.js");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/list/list */ "./components/list/list.js");
/* harmony import */ var _components_infographic_infographic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/infographic/infographic */ "./components/infographic/infographic.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _components_radio_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/radio/radio */ "./components/radio/radio.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_form_room_reservation_room_reservation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/form/room-reservation/room-reservation */ "./components/form/room-reservation/room-reservation.js");
/* harmony import */ var _components_form_room_search_room_search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/form/room-search/room-search */ "./components/form/room-search/room-search.js");
/* harmony import */ var _components_form_subscription_subscription__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/form/subscription/subscription */ "./components/form/subscription/subscription.js");
/* harmony import */ var _components_form_site_registration_site_registration__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/form/site-registration/site-registration */ "./components/form/site-registration/site-registration.js");
/* harmony import */ var _components_form_site_login_site_login__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/form/site-login/site-login */ "./components/form/site-login/site-login.js");
/* harmony import */ var _guide_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guide.scss */ "./pages/guide/guide.scss");
/* harmony import */ var _guide_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_guide_scss__WEBPACK_IMPORTED_MODULE_27__);




























jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  new _components_header_header__WEBPACK_IMPORTED_MODULE_7__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header'));
  var dropdownWithDates = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-dropdown3'));
  var exampleAirDatepicker = new _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-datepicker'));

  function handleDatepickerChange() {
    var formattedDates = exampleAirDatepicker.getFormattedDates();
    dropdownWithDates.setValue(formattedDates);
    dropdownWithDates.toggle('hide');
  }

  exampleAirDatepicker.addEventListener('change-air-datepicker', handleDatepickerChange);
  new _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-datepicker2'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-room-reservation').each(function () {
    new _components_form_room_reservation_room_reservation__WEBPACK_IMPORTED_MODULE_22__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-room-search').each(function () {
    new _components_form_room_search_room_search__WEBPACK_IMPORTED_MODULE_23__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-card-product').each(function () {
    new _components_card_product_card_product__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-diagram').each(function () {
    new _components_diagram_diagram__WEBPACK_IMPORTED_MODULE_5__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-expander').each(function () {
    new _components_expander_expander__WEBPACK_IMPORTED_MODULE_6__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  new _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_15__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text#input-text-example'));
  new _components_input_text_input_text__WEBPACK_IMPORTED_MODULE_15__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text#input-text-example2'));
  new _components_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_8__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-like-btn'));
  new _components_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_8__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-like-btn2'));
  new _components_review_review__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-review'));
  new _components_rate_btn_rate_btn__WEBPACK_IMPORTED_MODULE_10__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-rate-btn'));
  new _components_slider_range_slider_range__WEBPACK_IMPORTED_MODULE_11__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-slider')); // закрытие dropdown по клику вне этого dropdown

  $body.on('click', '*', function (event) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.js-dropdown').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).hasClass('.js-dropdown')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });
  var exampleDropdown = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-dropdown'));
  var exampleListCounters = new _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_12__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-list-counters'));

  function handleListCountersChange() {
    var formattedOutput = exampleListCounters.getFormattedOutput();
    exampleDropdown.setValue(formattedOutput);
  }

  exampleListCounters.addEventListener('change-list-counters', handleListCountersChange);
  var exampleDropdown2 = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-dropdown2'));
  var exampleListCounters2 = new _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_12__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-list-counters2'));

  function handleListCounters2Change() {
    var formattedOutput = exampleListCounters2.getFormattedOutput();
    exampleDropdown2.setValue(formattedOutput);
  }

  exampleListCounters2.addEventListener('change-list-counters', handleListCounters2Change);
  new _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_13__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pagination'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-site-login').each(function () {
    new _components_form_site_login_site_login__WEBPACK_IMPORTED_MODULE_26__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-site-registration').each(function () {
    new _components_form_site_registration_site_registration__WEBPACK_IMPORTED_MODULE_25__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#example-subscription').each(function () {
    new _components_form_subscription_subscription__WEBPACK_IMPORTED_MODULE_24__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer').each(function () {
    new _components_footer_footer__WEBPACK_IMPORTED_MODULE_21__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});

/***/ }),

/***/ "./pages/guide/guide.scss":
/*!********************************!*\
  !*** ./pages/guide/guide.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=guide.js.map
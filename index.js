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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./pages/index/index.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","guide~index~login~product~products~register","guide~index~product~products"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
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
/* harmony import */ var _components_form_room_search_room_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/room-search/room-search */ "./components/form/room-search/room-search.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);







jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  new _components_header_header__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header'));
  new _components_first_display_first_display__WEBPACK_IMPORTED_MODULE_2__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-first-display'));
  new _components_form_room_search_room_search__WEBPACK_IMPORTED_MODULE_5__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-room-search'));
  new _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer'));
});

/***/ }),

/***/ "./pages/index/index.scss":
/*!********************************!*\
  !*** ./pages/index/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
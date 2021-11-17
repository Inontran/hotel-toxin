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
/******/ 		"products": 0
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
/******/ 	deferredModules.push(["./pages/products/products.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","vendors~guide~product~products","vendors~guide~products","guide~index~login~product~products~register","guide~index~product~products","guide~products"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/products/products.js":
/*!************************************!*\
  !*** ./pages/products/products.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_base_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/base/base */ "./shared/base/base.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/constants */ "./shared/constants.js");
/* harmony import */ var _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");
/* harmony import */ var _components_card_product_card_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/card-product/card-product */ "./components/card-product/card-product.js");
/* harmony import */ var _components_expander_expander__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/expander/expander */ "./components/expander/expander.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_slider_range_slider_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/slider-range/slider-range */ "./components/slider-range/slider-range.js");
/* harmony import */ var _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/list-counters/list-counters */ "./components/list-counters/list-counters.js");
/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/pagination/pagination */ "./components/pagination/pagination.js");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/checkbox/checkbox */ "./components/checkbox/checkbox.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/button/button */ "./components/button/button.js");
/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _products_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products.scss */ "./pages/products/products.scss");
/* harmony import */ var _products_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_products_scss__WEBPACK_IMPORTED_MODULE_15__);
















jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  new _components_header_header__WEBPACK_IMPORTED_MODULE_7__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header'));
  new _components_footer_footer__WEBPACK_IMPORTED_MODULE_14__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer')); // закрытие dropdown по клику вне этого dropdown

  $body.on('click', '*', function (event) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.js-dropdown').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).hasClass('.js-dropdown')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });
  var dropdownWithDates = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown.js-dropdown_with-dates'));
  var datepicker = new _components_air_datepicker_air_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker'));

  function handleDatepickerChange() {
    var formattedDates = datepicker.getFormattedDates();
    dropdownWithDates.setValue(formattedDates);
    dropdownWithDates.toggle('hide');
  }

  datepicker.addEventListener('change-air-datepicker', handleDatepickerChange);
  var dropdownWithGuests = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown.js-dropdown_with-guests'));
  var listCounterWithGuests = new _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters.js-list-counters_with-guests'));

  function handleListCounterWithGuestsChange() {
    var formattedOutput = listCounterWithGuests.getFormattedOutput();
    dropdownWithGuests.setValue(formattedOutput);
  }

  listCounterWithGuests.addEventListener('change-list-counters', handleListCounterWithGuestsChange);
  var dropdownWithFeatures = new _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown.js-dropdown_with-features'));
  var listCounterWithFeatures = new _components_list_counters_list_counters__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters.js-list-counters_with-features'));

  function handleListCounterWithFeatures() {
    var formattedOutput = listCounterWithFeatures.getFormattedOutput();
    dropdownWithFeatures.setValue(formattedOutput);
  }

  listCounterWithFeatures.addEventListener('change-list-counters', handleListCounterWithFeatures);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products .js-card-product').each(function () {
    new _components_card_product_card_product__WEBPACK_IMPORTED_MODULE_5__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter .js-expander').each(function () {
    new _components_expander_expander__WEBPACK_IMPORTED_MODULE_6__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter .js-slider-range').each(function () {
    new _components_slider_range_slider_range__WEBPACK_IMPORTED_MODULE_8__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  new _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pagination'));

  function handlerClickShowFilter(event) {
    event.preventDefault();
    var scrollTopBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    $body.attr('data-last-scrolltop', scrollTopBody);
    var scrollTopBodyPx = "-".concat(scrollTopBody, "px");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-page__content-wrapper').css({
      top: scrollTopBodyPx,
      position: 'fixed'
    });
    $body.css({
      top: '0px',
      position: 'fixed',
      overflow: 'hidden'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter').addClass('products__filter_mobile_visible');
  }

  $body.on('click', '.js-products__filter-showing-btn .js-button', handlerClickShowFilter);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function handlerClickHideBtn(event) {
    event.preventDefault();
    var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    $btn.closest('.js-products__filter').removeClass('products__filter_mobile_visible');
    var scrollTopBody = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-page__content-wrapper, body').css({
      top: '',
      position: ''
    });
    $body.css({
      overflow: ''
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').scrollTop(scrollTopBody);
    $body.attr('data-last-scrolltop', 0);
  }

  $body.on('click', '.js-products__filter-close-btn .js-button', handlerClickHideBtn);

  function updateFilterProducts() {
    if (window.matchMedia("(max-width: ".concat(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"].md, "px)")).matches) {
      $body.prepend(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter.products__filter_mobile'));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter-wrapper').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__filter.products__filter_mobile'));
    }

    return false;
  }

  updateFilterProducts();
  var timerFilter = null;

  function handlerResizeFilterProducts() {
    if (timerFilter !== null) {
      clearTimeout(timerFilter);
    }

    timerFilter = setTimeout(function () {
      updateFilterProducts();
    }, 50);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(handlerResizeFilterProducts);
});

/***/ }),

/***/ "./pages/products/products.scss":
/*!**************************************!*\
  !*** ./pages/products/products.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=products.js.map
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
/******/ 		"bundle": 0
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
/******/ 	deferredModules.push(["./entry.js","vendors~bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|ru(\\.js)?)$":
/*!*************************************************************************!*\
  !*** ../node_modules/moment/locale sync [/\\](es-us(\.js)?|ru(\.js)?)$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|ru(\\.js)?)$";

/***/ }),

/***/ "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!************************************************************!*\
  !*** ./components sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./air-datepicker/air-datepicker.js": "./components/air-datepicker/air-datepicker.js",
	"./card-product/card-product.js": "./components/card-product/card-product.js",
	"./chart/chart.js": "./components/chart/chart.js",
	"./collapse/collapse.js": "./components/collapse/collapse.js",
	"./curtain/curtain.js": "./components/curtain/curtain.js",
	"./dropdown/dropdown.js": "./components/dropdown/dropdown.js",
	"./filter-products/filter-products.js": "./components/filter-products/filter-products.js",
	"./footer/footer.js": "./components/footer/footer.js",
	"./header/header.js": "./components/header/header.js",
	"./input/input.js": "./components/input/input.js",
	"./like-btn/like-btn.js": "./components/like-btn/like-btn.js",
	"./pagination/jquery.paging.js": "./components/pagination/jquery.paging.js",
	"./pagination/pagination.js": "./components/pagination/pagination.js",
	"./rate-btn/rate-btn.js": "./components/rate-btn/rate-btn.js",
	"./scrollbar/scrollbar.js": "./components/scrollbar/scrollbar.js",
	"./slider-range/slider-range.js": "./components/slider-range/slider-range.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$":
/*!**************************************************************!*\
  !*** ./components sync ^\.\/(?!.*(?:__tests__)).*\.(scss?)$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./air-datepicker/air-datepicker.scss": "./components/air-datepicker/air-datepicker.scss",
	"./button/button.scss": "./components/button/button.scss",
	"./card-product/card-product.scss": "./components/card-product/card-product.scss",
	"./card/card.scss": "./components/card/card.scss",
	"./chart/chart.scss": "./components/chart/chart.scss",
	"./checkbox/checkbox.scss": "./components/checkbox/checkbox.scss",
	"./collapse/collapse.scss": "./components/collapse/collapse.scss",
	"./curtain/curtain.scss": "./components/curtain/curtain.scss",
	"./dropdown/dropdown.scss": "./components/dropdown/dropdown.scss",
	"./filter-products/filter-products.scss": "./components/filter-products/filter-products.scss",
	"./first-display/first-display.scss": "./components/first-display/first-display.scss",
	"./footer/footer.scss": "./components/footer/footer.scss",
	"./form-booking/form-booking.scss": "./components/form-booking/form-booking.scss",
	"./form-login/form-login.scss": "./components/form-login/form-login.scss",
	"./form-register/form-register.scss": "./components/form-register/form-register.scss",
	"./header/header.scss": "./components/header/header.scss",
	"./infographics/infographics.scss": "./components/infographics/infographics.scss",
	"./input/input.scss": "./components/input/input.scss",
	"./layout/layout.scss": "./components/layout/layout.scss",
	"./like-btn/like-btn.scss": "./components/like-btn/like-btn.scss",
	"./list/list.scss": "./components/list/list.scss",
	"./logo/logo.scss": "./components/logo/logo.scss",
	"./pagination/pagination.scss": "./components/pagination/pagination.scss",
	"./radio/radio.scss": "./components/radio/radio.scss",
	"./rate-btn/rate-btn.scss": "./components/rate-btn/rate-btn.scss",
	"./review/review.scss": "./components/review/review.scss",
	"./scrollbar/scrollbar.scss": "./components/scrollbar/scrollbar.scss",
	"./slider-range/slider-range.scss": "./components/slider-range/slider-range.scss",
	"./social-nets/social-nets.scss": "./components/social-nets/social-nets.scss",
	"./toggle/toggle.scss": "./components/toggle/toggle.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$";

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.js":
/*!*****************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


moment__WEBPACK_IMPORTED_MODULE_1___default.a.lang('ru');
$(document).ready(function () {
  $('body').find('.air-datepicker.air-datepicker_inline .air-datepicker__wrapper').each(function () {
    $(this).datepicker({
      range: true,
      inline: true,
      // clearButton: true,
      navTitles: {
        days: 'MM yyyy'
      }
    });
  });
  $('body').on('click', '.dropdown .air-datepicker .air-datepicker__btn-wrapper_clear', function () {
    $(this).closest('.air-datepicker').find('.air-datepicker__wrapper').data('datepicker').clear();
  });
  $('body').on('click', '.air-datepicker .air-datepicker__btn-wrapper_submit', function () {
    var $parent_dropdown = $(this).closest('.dropdown');
    var dates = $(this).closest('.air-datepicker').find('.air-datepicker__wrapper').data('datepicker').selectedDates;
    $('.input_result-dates .input__field', $parent_dropdown).val(moment__WEBPACK_IMPORTED_MODULE_1___default()(dates[0]).format('D MMM') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_1___default()(dates[1]).format('D MMM'));
    $('.input_result-date-start .input__field', $parent_dropdown).val(moment__WEBPACK_IMPORTED_MODULE_1___default()(dates[0]).format('DD.MM.YYYY'));
    $('.input_result-date-end .input__field', $parent_dropdown).val(moment__WEBPACK_IMPORTED_MODULE_1___default()(dates[1]).format('DD.MM.YYYY'));
    $parent_dropdown.removeClass('dropdown_active');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.scss":
/*!*******************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/card-product/card-product.js":
/*!*************************************************!*\
  !*** ./components/card-product/card-product.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('.card-product__carousel', 'body').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/card-product/card-product.scss":
/*!***************************************************!*\
  !*** ./components/card-product/card-product.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/card/card.scss":
/*!***********************************!*\
  !*** ./components/card/card.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/chart/chart.js":
/*!***********************************!*\
  !*** ./components/chart/chart.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "../node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('body').find('.chart').each(function () {
    var $current_chart = $(this);
    var $chart_picture = $current_chart.find('.chart__picture');
    var ctx = $chart_picture.get(0).getContext('2d');
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient1.addColorStop(0, $.COLORS.purple);
    gradient1.addColorStop(1, '#8BA4F9');
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, $.COLORS.green);
    gradient2.addColorStop(1, '#66D2EA');
    var gradient3 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient3.addColorStop(0, '#FFE39C');
    gradient3.addColorStop(1, '#FFBA9C');
    var gradient4 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient4.addColorStop(0, '#919191');
    gradient4.addColorStop(1, '#3D4975');
    var num1 = $current_chart.attr('data-num-1') ? $current_chart.attr('data-num-1') : 0;
    var num2 = $current_chart.attr('data-num-2') ? $current_chart.attr('data-num-2') : 0;
    var num3 = $current_chart.attr('data-num-3') ? $current_chart.attr('data-num-3') : 0;
    var num4 = $current_chart.attr('data-num-4') ? $current_chart.attr('data-num-4') : 0;
    var data = {
      datasets: [{
        data: [num3, num2, num1, num4],
        backgroundColor: [gradient1, gradient2, gradient3, gradient4]
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Удовлетворительно', 'Хорошо', 'Великолепно', 'Разочарован']
    };
    var options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        display: false,
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 10,
          fontColor: $.COLORS.dark75,
          fontSize: 14,
          fontFamily: "'Montserrat', 'sans-serif'"
        }
      },
      cutoutPercentage: 90
    };
    var myDoughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/chart/chart.scss":
/*!*************************************!*\
  !*** ./components/chart/chart.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./components/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/collapse/collapse.js":
/*!*****************************************!*\
  !*** ./components/collapse/collapse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '.collapse .collapse__btn', function (e) {
    e.preventDefault();
    var $parent = $(this).closest('.collapse');
    var collapse_group = $parent.attr('data-group');

    if (collapse_group != '' && collapse_group !== 'undefined') {
      var selector = '.collapse';
      $('body').find(selector + '[data-group="' + collapse_group + '"]').each(function () {
        if ($(selector).index($(this)) == $(selector).index($parent)) {
          $parent.toggleClass('collapse_active');
        } else {
          $(this).removeClass('collapse_active');
        }
      });
    } else {
      $parent.toggleClass('collapse_active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/collapse/collapse.scss":
/*!*******************************************!*\
  !*** ./components/collapse/collapse.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/curtain/curtain.js":
/*!***************************************!*\
  !*** ./components/curtain/curtain.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('body').on('click', '.header__btn_show-curtain', function (event) {
    event.preventDefault(); // $('.curtain').toggleClass('curtain_show');

    if (!$('body').hasClass('page_show-curtain')) {
      var scrollTop_body = $('html, body').scrollTop() || $(document).scrollTop() || $(window).scrollTop();
      $('.page__content-wrapper').css({
        top: '-' + scrollTop_body + 'px',
        position: 'fixed'
      });
      $('body').css({
        top: '0px',
        position: 'fixed'
      });
      $('body').attr('data-last-scrolltop', scrollTop_body);
    } else {
      var scrollTop_body = $('body').attr('data-last-scrolltop') ? $('body').attr('data-last-scrolltop') : 0;
      $('.page__content-wrapper, body').css({
        top: '',
        position: ''
      });
      $('html, body').scrollTop(scrollTop_body);
      $('body').attr('data-last-scrolltop', 0);
    }

    $('body').toggleClass('page_show-curtain');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/curtain/curtain.scss":
/*!*****************************************!*\
  !*** ./components/curtain/curtain.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  checkItemCount(); // закрытие dropdown по клику вне этого dropdown

  $('body').on('click', '*', function (event) {
    if (!$(event.target).closest('.dropdown').length && !$(event.target).hasClass('.dropdown')) {
      $('.dropdown').removeClass('dropdown_active');
    }
  });
  $('body').on('click', '.dropdown .dropdown__input-wrapper', function (e) {
    e.preventDefault();
    var $parent = $(this).closest('.dropdown');
    var dropdown_group = $parent.attr('data-group');

    if (dropdown_group != '' && dropdown_group !== 'undefined') {
      var selector = '.dropdown';
      $('body').find(selector + '[data-group="' + dropdown_group + '"]').each(function () {
        if ($(selector).index($(this)) == $(selector).index($parent)) {
          $parent.toggleClass('dropdown_active');
        } else {
          $(this).removeClass('dropdown_active');
        }
      });
    } else {
      $parent.toggleClass('dropdown_active');
    }
  });
  $('body').on('click', '.dropdown .dropdown__btn-less', function (e) {
    e.preventDefault();
    var $btn = $(this);
    var $parent = $btn.closest('.dropdown__counter');
    var $input = $parent.find('.dropdown__counter-input');
    var countItem = $input.val();

    if (countItem != 0) {
      countItem--;
      $input.val(countItem);
    }

    checkItemCount($parent, countItem);
  });
  $('body').on('click', '.dropdown .dropdown__btn-more', function (e) {
    e.preventDefault();
    var $btn = $(this);
    var $parent = $btn.closest('.dropdown__counter');
    var $input = $parent.find('.dropdown__counter-input');
    var countItem = $input.val();
    countItem++;
    $input.val(countItem);
    checkItemCount($parent, countItem);
  });
  $('body').on('click', '.dropdown:not(.dropdown_simple) .dropdown__btn-reset .button', function () {
    var $dropdown = $(this).closest('.dropdown');
    $dropdown.find('.dropdown__counter-input').val(0);
    checkItemCount();
    var text = $dropdown.attr('data-default-text') ? $dropdown.attr('data-default-text') : '';
    $dropdown.find('.dropdown__input-wrapper input').val(text);
    $(this).addClass('dropdown_hidden');
  });
  $('body').on('click', '.dropdown:not(.dropdown_simple) .dropdown__btn-submit .button', function () {
    var $dropdown = $(this).closest('.dropdown');
    var summ = 0;
    $dropdown.find('.dropdown__counter-input').each(function () {
      summ += parseInt($(this).val());
    });

    if (summ != 0) {
      $dropdown.find('.dropdown__btn-reset button').removeClass('dropdown_hidden');
    } else {
      $dropdown.find('.dropdown__btn-reset button').addClass('dropdown_hidden');
    }

    var text = '';

    if (summ == 1) {
      text = $dropdown.attr('data-text-one') ? $dropdown.attr('data-text-one') : '';
    } else {
      text = $dropdown.attr('data-text-many') ? $dropdown.attr('data-text-many') : '';
    }

    $dropdown.find('.dropdown__input-wrapper input').val(summ + ' ' + text);
    checkItemCount();
  });
  $('body').on('click', '.dropdown.dropdown_simple .dropdown__btn-more, .dropdown.dropdown_simple .dropdown__btn-less', function () {
    var $dropdown = $(this).closest('.dropdown');
    var result = '';
    $dropdown.find('.dropdown__counter').each(function () {
      var val_counter = $(this).find('.dropdown__counter-input').val();

      if (val_counter != 0) {
        result += $(this).find('.dropdown__counter-input').val();
        result += ' ';
        result += $(this).find('.dropdown__counter-label').text();
        result += ', ';
      }
    });
    $dropdown.find('.dropdown__input-wrapper input').val(result);
    console.log(result);
  });

  function checkItemCount($counter, count) {
    if (arguments.length > 0) {
      if (count == 0) {
        $counter.find('.dropdown__btn-less').addClass('dropdown_disabled-btn');
      } else {
        $counter.find('.dropdown__btn-less').removeClass('dropdown_disabled-btn');
      }
    } else {
      $('body').find('.dropdown__btn-less').each(function () {
        var $btn = $(this);
        var $parent = $btn.closest('.dropdown__counter');
        var $input = $parent.find('.dropdown__counter-input');
        var countItem = $input.val();

        if (countItem == 0) {
          $btn.addClass('dropdown_disabled-btn');
        } else {
          $btn.removeClass('dropdown_disabled-btn');
        }
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./components/dropdown/dropdown.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/filter-products/filter-products.js":
/*!*******************************************************!*\
  !*** ./components/filter-products/filter-products.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('body').on('click', '.filter-products_hide-filter', function (event) {
    event.preventDefault();
    $(this).closest('.filter-products').removeClass('filter-products_mob-show');
    var scrollTop_body = $('body').attr('data-last-scrolltop') ? $('body').attr('data-last-scrolltop') : 0;
    $('.page__content-wrapper, body').css({
      top: '',
      position: ''
    });
    $('body').css({
      overflow: ''
    });
    $('html, body').scrollTop(scrollTop_body);
    $('body').attr('data-last-scrolltop', 0);
  });

  function update_filter_products() {
    // if( $(window).width() < $.BREAKPOINTS.md ){
    if (window.matchMedia('(max-width: ' + $.BREAKPOINTS.md + 'px)').matches) {
      $('body').prepend($('.filter-products.filter-products_mob-md'));
    } else {
      $('.products__left-column').append($('.filter-products.filter-products_mob-md'));
    }

    return false;
  }

  update_filter_products();
  var timer_filter = null;
  $(window).resize(function () {
    if (timer_filter !== null) {
      clearTimeout(timer_filter);
    }

    timer_filter = setTimeout(function () {
      update_filter_products();
    }, 50);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/filter-products/filter-products.scss":
/*!*********************************************************!*\
  !*** ./components/filter-products/filter-products.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/first-display/first-display.scss":
/*!*****************************************************!*\
  !*** ./components/first-display/first-display.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/footer/footer.scss":
/*!***************************************!*\
  !*** ./components/footer/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form-booking/form-booking.scss":
/*!***************************************************!*\
  !*** ./components/form-booking/form-booking.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form-login/form-login.scss":
/*!***********************************************!*\
  !*** ./components/form-login/form-login.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form-register/form-register.scss":
/*!*****************************************************!*\
  !*** ./components/form-register/form-register.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/infographics/infographics.scss":
/*!***************************************************!*\
  !*** ./components/infographics/infographics.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/input/input.js":
/*!***********************************!*\
  !*** ./components/input/input.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "../node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  inputmask__WEBPACK_IMPORTED_MODULE_0___default()('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ'
  }).mask('.input.input_mask-date .input__field');
  inputmask__WEBPACK_IMPORTED_MODULE_0___default()('email').mask('.input.input_mask-email .input__field');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/input/input.scss":
/*!*************************************!*\
  !*** ./components/input/input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/layout/layout.scss":
/*!***************************************!*\
  !*** ./components/layout/layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/like-btn/like-btn.js":
/*!*****************************************!*\
  !*** ./components/like-btn/like-btn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('change', '.like-btn .like-btn__check', function () {});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/like-btn/like-btn.scss":
/*!*******************************************!*\
  !*** ./components/like-btn/like-btn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list/list.scss":
/*!***********************************!*\
  !*** ./components/list/list.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/logo/logo.scss":
/*!***********************************!*\
  !*** ./components/logo/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/pagination/jquery.paging.js":
/*!************************************************!*\
  !*** ./components/pagination/jquery.paging.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/**
 * @license jQuery paging plugin v1.3.1 23/06/2014
 * http://www.xarg.org/2011/09/jquery-pagination-revised/
 *
 * Copyright (c) 2011, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function ($, window, undefined) {
  $["fn"]["paging"] = function (number, opts) {
    var self = this,
        Paging = {
      "setOptions": function setOptions(opts) {
        var parseFormat = function parseFormat(format) {
          var gndx = 0,
              group = 0,
              num = 1,
              res = {
            fstack: [],
            // format stack
            asterisk: 0,
            // asterisk?
            inactive: 0,
            // fill empty pages with inactives up to w?
            blockwide: 5,
            // width of number block
            current: 3,
            // position of current element in number block
            rights: 0,
            // num of rights
            lefts: 0 // num of lefts

          },
              tok,
              pattern = /[*<>pq\[\]().-]|[nc]+!?/g;
          var known = {
            "[": "first",
            "]": "last",
            "<": "prev",
            ">": "next",
            "q": "left",
            "p": "right",
            "-": "fill",
            ".": "leap"
          },
              count = {};

          while (tok = pattern["exec"](format)) {
            tok = "" + tok;

            if (undefined === known[tok]) {
              if ("(" === tok) {
                group = ++gndx;
              } else if (")" === tok) {
                group = 0;
              } else if (num) {
                if ("*" === tok) {
                  res.asterisk = 1;
                  res.inactive = 0;
                } else {
                  // number block is the only thing left here
                  res.asterisk = 0;
                  res.inactive = "!" === tok.charAt(tok.length - 1);
                  res.blockwide = tok["length"] - res.inactive;

                  if (!(res.current = 1 + tok.indexOf("c"))) {
                    res.current = 1 + res.blockwide >> 1;
                  }
                }

                res.fstack.push({
                  ftype: "block",
                  // type
                  fgroup: 0,
                  // group
                  fpos: 0 // pos

                });
                num = 0;
              }
            } else {
              res.fstack.push({
                ftype: known[tok],
                // type
                fgroup: group,
                // group
                fpos: undefined === count[tok] ? count[tok] = 1 : ++count[tok] // pos

              });
              if ("q" === tok) ++res.lefts;else if ("p" === tok) ++res.rights;
            }
          }

          return res;
        };

        Paging.opts = $.extend(Paging.opts || {
          "lapping": 0,
          // number of elements overlap
          "perpage": 10,
          // number of elements per page
          "page": 1,
          // current page
          "stepwidth": 1,
          // stepwidth for prev/next -> if = 0 then blockwise steps
          "refresh": {
            "interval": 10,
            "url": null
          },
          // refresh callback information
          "format": "",
          // visual format string
          "lock": false,
          // set to true, if you want to disable the pagination for a while. 
          "circular": false,
          // set to true if you want the next/prev buttons go circular
          "onClick": null,
          // Alternative click handler to bypass onSelect mechanism
          "onFormat": function onFormat(type) {// callback for every format element

            /** EXAMPLE **
                 switch (type) {
                     case 'block':
                         if (!this.active)
                            return '<span class="disabled">' + this.value + '</span>';
                        else if (this.value != this.page)
                            return '<em><a href="#' + this.value + '">' + this.value + '</a></em>';
                        return '<span class="current">' + this.value + '</span>';
                     case 'right':
                    case 'left':
                         if (!this.active) {
                            return "";
                        }
                        return '<a href="#' + this.value + '">' + this.value + '</a>';
                     case 'next':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="next">Next &raquo;</a>';
                        }
                        return '<span class="disabled">Next &raquo;</span>';
                     case 'prev':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="prev">&laquo; Previous</a>';
                        }
                        return '<span class="disabled">&laquo; Previous</span>';
                     case 'first':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="first">|&lt;</a>';
                        }
                        return '<span class="disabled">|&lt;</span>';
                     case 'last':
                         if (this.active) {
                            return '<a href="#' + this.value + '" class="prev">&gt;|</a>';
                        }
                        return '<span class="disabled">&gt;|</span>';
                     case 'fill':
                        if (this.active) {
                            return "...";
                        }
                }
                return ""; // return nothing for missing branches
                 **/
          },
          "onSelect": function onSelect(page) {
            // callback for page selection

            /** EXAMPLE SLICE **
             var data = this.slice;
             content.slice(prev[0], prev[1]).css('display', 'none');
            content.slice(data[0], data[1]).css('display', 'block');
             prev = data;
             **/

            /** EXAMPLE AJAX **
             $.ajax({
                "url": '/data.php?start=' + this.slice[0] + '&end=' + this.slice[1] + '&page=' + page,
                "success": function(data) {
                    // content replace
                }
            });
             **/
            // Return code indicates if the link of the clicked format element should be followed (otherwise only the click-event is used)
            return true;
          },
          "onRefresh": function onRefresh(json) {// callback for new data of refresh api

            /** EXAMPLE **
            if (json.number) {
                Paging.setNumber(json.number);
            }
             if (json.options) {
                Paging.setOptions(json.options);
            }
             Paging.setPage(); // Call with empty params to reload the paginator
            **/
          }
        }, opts || {});
        Paging.opts["lapping"] |= 0;
        Paging.opts["perpage"] |= 0;
        if (Paging.opts["page"] !== null) Paging.opts["page"] |= 0; // If the number of elements per page is less then 1, set it to default

        if (Paging.opts["perpage"] < 1) {
          Paging.opts["perpage"] = 10;
        }

        if (Paging.interval) window.clearInterval(Paging.interval);

        if (Paging.opts["refresh"]["url"]) {
          Paging.interval = window.setInterval(function () {
            $["ajax"]({
              "url": Paging.opts["refresh"]["url"],
              "success": function success(data) {
                if (typeof data === "string") {
                  try {
                    data = $["parseJSON"](data);
                  } catch (o) {
                    return;
                  }
                }

                Paging.opts["onRefresh"](data);
              }
            });
          }, 1000 * Paging.opts["refresh"]["interval"]);
        }

        Paging.format = parseFormat(Paging.opts["format"]);
        return Paging;
      },
      "setNumber": function setNumber(number) {
        Paging.number = undefined === number || number < 0 ? -1 : number;
        return Paging;
      },
      "setPage": function setPage(page) {
        if (Paging.opts["lock"]) {
          Paging.opts["onSelect"](0, self);
          return Paging;
        }

        if (undefined === page) {
          page = Paging.opts["page"];

          if (null === page) {
            return Paging;
          }
        } else if (Paging.opts["page"] == page) {
          // Necessary to be ==, not ===
          return Paging;
        }

        Paging.opts["page"] = page |= 0;
        var number = Paging.number;
        var opts = Paging.opts;
        var rStart, rStop;
        var pages, buffer;
        var groups = 1,
            format = Paging.format;
        var data, tmp, node, lapping;
        var count = format.fstack["length"],
            i = count; // If the lapping is greater than perpage, reduce it to perpage - 1 to avoid endless loops

        if (opts["perpage"] <= opts["lapping"]) {
          opts["lapping"] = opts["perpage"] - 1;
        }

        lapping = number <= opts["lapping"] ? 0 : opts["lapping"] | 0; // If the number is negative, the value doesn"t matter, we loop endlessly with a constant width

        if (number < 0) {
          number = -1;
          pages = -1;
          rStart = Math.max(1, page - format.current + 1 - lapping);
          rStop = rStart + format.blockwide;
        } else {
          /* Calculate the number of pages
           * http://www.xarg.org/2016/10/derivation-of-pagination-calculation/
           *
           */
          pages = 1 + Math.ceil((number - opts["perpage"]) / (opts["perpage"] - lapping)); // If current page is negative, start at the end and
          // Set the current page into a valid range, includes 0, which is set to 1

          page = Math.max(1, Math.min(page < 0 ? 1 + pages + page : page, pages)); // Do we need to print all numbers?

          if (format.asterisk) {
            rStart = 1;
            rStop = 1 + pages; // Disable :first and :last for asterisk mode as we see all buttons

            format.current = page;
            format.blockwide = pages;
          } else {
            // If no, start at the best position and stop at max width or at num of pages
            rStart = Math.max(1, Math.min(page - format.current, pages - format.blockwide) + 1);
            rStop = format.inactive ? rStart + format.blockwide : Math.min(rStart + format.blockwide, 1 + pages);
          }
        }

        while (i--) {
          tmp = 0; // default everything is visible

          node = format.fstack[i];

          switch (node.ftype) {
            case "left":
              tmp = node.fpos < rStart;
              break;

            case "right":
              tmp = rStop <= pages - format.rights + node.fpos;
              break;

            case "first":
              tmp = format.current < page;
              break;

            case "last":
              tmp = format.blockwide < format.current + pages - page;
              break;

            case "prev":
              tmp = 1 < page;
              break;

            case "next":
              tmp = page < pages;
              break;
          }

          groups |= tmp << node.fgroup; // group visible?
        }

        data = {
          "number": number,
          // number of elements
          "lapping": lapping,
          // overlapping
          "pages": pages,
          // number of pages
          "perpage": opts["perpage"],
          // number of elements per page
          "page": page,
          // current page
          "slice": [// two element array with bounds of the current page selection
          (tmp = page * (opts["perpage"] - lapping) + lapping) - opts["perpage"], // Lower bound
          Math.min(tmp, number) // Upper bound
          ]
        };
        buffer = "";

        function buffer_append(opts, data, type) {
          type = "" + opts["onFormat"].call(data, type);

          if (data["value"]) {
            buffer += type.replace(/<a/i, '<a data-page="' + data["value"] + '"');
          } else {
            buffer += type;
          }
        }

        while (++i < count) {
          node = format.fstack[i];
          tmp = groups >> node.fgroup & 1;

          switch (node.ftype) {
            case "block":
              for (; rStart < rStop; ++rStart) {
                data["value"] = rStart;
                data["pos"] = 1 + format.blockwide - rStop + rStart;
                data["active"] = rStart <= pages || number < 0; // true if infinity series and rStart <= pages

                data["first"] = 1 === rStart; // check if it is the first page

                data["last"] = rStart === pages && 0 < number; // false if infinity series or rStart != pages

                buffer_append(opts, data, node.ftype);
              }

              continue;

            case "left":
              data["value"] = node.fpos;
              data["active"] = node.fpos < rStart; // Don't take group-visibility into account!

              break;

            case "right":
              data["value"] = pages - format.rights + node.fpos;
              data["active"] = rStop <= data["value"]; // Don't take group-visibility into account!

              break;

            case "prev":
            case "next":
              var p_ = 0;

              if (opts["stepwidth"] === 0) {
                if (node.ftype === "next") {
                  if (page <= format.current) {
                    p_ = format.current + format.blockwide;
                  } else {
                    p_ = page + format.blockwide;
                  }
                } else {
                  p_ = page - format.blockwide;
                }
              } else {
                p_ = node.ftype === "next" ? page + opts["stepwidth"] : page - opts["stepwidth"];
              }

              if (opts["circular"]) {
                data["active"] = 1;
                data["value"] = 1 + (pages + p_ - 1) % pages;
              } else if (node.ftype === "next" && number < 0) {
                // if type=next and infinity navigation
                data["active"] = 1;
                data["value"] = p_;
              } else {
                data["value"] = Math.max(1, Math.min(p_, pages));
                data["active"] = tmp && 1 < page && page < pages;
              }

              break;

            case "first":
              data["value"] = 1;
              data["active"] = tmp && 1 < page;
              break;

            case "last":
              if (number < 0) {
                data["active"] = 1;
                data["value"] = 1 + page;
              } else {
                data["value"] = pages;
                data["active"] = tmp && page < pages;
              }

              break;

            case "leap":
            case "fill":
              data["pos"] = node.fpos;
              data["active"] = tmp; // tmp is true by default and changes only for group behaviour

              buffer_append(opts, data, node.ftype);
              continue;
          }

          data["pos"] = node.fpos;
          data["last"] =
          /* void */
          data["first"] = undefined;
          buffer_append(opts, data, node.ftype);
        }

        if (self.length) {
          $("a", self["html"](buffer)).click(opts['onClick'] || function (ev) {
            ev["preventDefault"]();
            var obj = this;

            do {
              if ('a' === obj["nodeName"].toLowerCase()) {
                break;
              }
            } while (obj = obj["parentNode"]);

            Paging["setPage"]($(obj).data("page"));

            if (Paging.locate) {
              window.location = obj["href"];
            }
          });
          Paging.locate = opts["onSelect"].call({
            "number": number,
            "lapping": lapping,
            "pages": pages,
            "slice": data["slice"]
          }, page, self);
        }

        return Paging;
      }
    };
    return Paging["setNumber"](number)["setOptions"](opts)["setPage"]();
  };
})(jQuery, this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./components/pagination/pagination.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').find('.pagination .pagination__wrapper').each(function () {
    var $pagination = $(this);
    var current_page = $pagination.attr('data-page');
    var perpage = $pagination.attr('data-perpage');
    var count_elements = $pagination.attr('data-elements');
    var $pagination_output = $pagination.closest('.pagination').find('.pagination__output');
    var count_elements_output = '';
    if (count_elements >= 100) count_elements_output = '100+';else count_elements_output = count_elements;
    $pagination.paging(count_elements, {
      // elements navigatable
      format: '< [ (q-) ncn (-p) ] >',
      // define how the navigation should look like and in which order onFormat() get's called
      perpage: perpage,
      // show 10 elements per page
      lapping: 0,
      // don't overlap pages for the moment
      page: current_page,
      // start at page, can also be "null" or negative
      onSelect: function onSelect(page) {
        // console.log(this);
        var start_count_elements = 0;

        if (this.slice[0]) {
          start_count_elements = this.slice[0];
        } else {
          start_count_elements = 1;
        }

        $pagination_output.text(start_count_elements + ' - ' + this.slice[1] + ' из ' + count_elements_output + ' ');
      },
      onFormat: function onFormat(type) {
        // Gets called for each character of "format" and returns a HTML representation
        switch (type) {
          case 'block':
            if (!this.active) return '<span class="pagination__number">' + this.value + '</span>';else if (this.value != this.page) return '<a href="#" class="pagination__number">' + this.value + '</a>';
            return '<span class="pagination__number pagination__number_current">' + this.value + '</span>';

          case 'next':
            if (this.active || this.page == 1) return '<a href="#" class="pagination__next">></a>';
            return '';

          case 'prev':
            if (this.active || this.page == this.pages) return '<a href="#" class="pagination__prev"><</a>';
            return '';

          case 'first':
            if (this.active) return '';
            return '';

          case 'last':
            if (this.active) return '';
            return '';

          case "leap":
            if (this.active) return '';
            return '';

          case 'fill':
            if (this.active) return '<span class="pagination__number">...</span>';
            return '';

          case 'right':
            if (this.active) return '<a href="#" class="pagination__number">' + this.value + '</a>';
            return '';

          case 'left':
            if (this.active) return '<a href="#" class="pagination__number">' + this.value + '</a>';
            return '';
        }
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./components/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/radio/radio.scss":
/*!*************************************!*\
  !*** ./components/radio/radio.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/rate-btn/rate-btn.js":
/*!*****************************************!*\
  !*** ./components/rate-btn/rate-btn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '.rate-btn .rate-btn__star-item', function (e) {
    e.preventDefault();
    var $parent = $(this).closest('.rate-btn');
    var $input_rate = $parent.find('.rate-btn__input');
    var star_rate = $(this).attr('data-number-star');
    var current_rate = $input_rate.val();
    $parent.removeClass("rate-btn_count-0\n\t\t\t\t\t\t\t\t\t\t\t\t\trate-btn_count-1 \n\t\t\t\t\t\t\t\t\t\t\t\t\trate-btn_count-2 \n\t\t\t\t\t\t\t\t\t\t\t\t\trate-btn_count-3 \n\t\t\t\t\t\t\t\t\t\t\t\t\trate-btn_count-4 \n\t\t\t\t\t\t\t\t\t\t\t\t\trate-btn_count-5");

    if (star_rate == '1' && current_rate == 1) {
      $input_rate.val(0);
      $parent.addClass('rate-btn_count-' + 0);
    } else {
      $input_rate.val(star_rate);
      $parent.addClass('rate-btn_count-' + star_rate);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/rate-btn/rate-btn.scss":
/*!*******************************************!*\
  !*** ./components/rate-btn/rate-btn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/review/review.scss":
/*!***************************************!*\
  !*** ./components/review/review.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/scrollbar/scrollbar.js":
/*!*******************************************!*\
  !*** ./components/scrollbar/scrollbar.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ "../node_modules/simplebar/dist/simplebar.esm.js");

$(function () {
  $('.scrollbar', 'body').each(function () {
    try {
      new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"]($(this)[0]);
    } catch (error) {
      console.debug(error);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/scrollbar/scrollbar.scss":
/*!*********************************************!*\
  !*** ./components/scrollbar/scrollbar.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/slider-range/slider-range.js":
/*!*************************************************!*\
  !*** ./components/slider-range/slider-range.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-jquery-ui/slider */ "../node_modules/webpack-jquery-ui/slider.js");
/* harmony import */ var webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_slider__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('body').find('.slider-range__slider').each(function () {
    var $current_slider = $(this);
    var $parent = $current_slider.closest('.slider-range');
    var $current_input = $parent.find('.slider-range__input');
    var val_min = parseInt($current_slider.attr('data-min'));
    var val_max = parseInt($current_slider.attr('data-max'));
    var val1 = parseInt($current_slider.attr('data-val1'));
    var val2 = parseInt($current_slider.attr('data-val2'));
    $current_slider.slider({
      range: true,
      min: val_min,
      max: val_max,
      values: [val1, val2],
      slide: function slide(event, ui) {
        $current_input.val(ui.values[0] + $.RUBLE + " - " + ui.values[1] + $.RUBLE);
      }
    });
    $current_input.val($current_slider.slider('values', 0) + $.RUBLE + ' - ' + $current_slider.slider('values', 1) + $.RUBLE);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/slider-range/slider-range.scss":
/*!***************************************************!*\
  !*** ./components/slider-range/slider-range.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/social-nets/social-nets.scss":
/*!*************************************************!*\
  !*** ./components/social-nets/social-nets.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/toggle/toggle.scss":
/*!***************************************!*\
  !*** ./components/toggle/toggle.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/global.scss */ "./theme/global.scss");
/* harmony import */ var _theme_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_global_scss__WEBPACK_IMPORTED_MODULE_2__);




jquery__WEBPACK_IMPORTED_MODULE_0___default.a.RUBLE = '₽';
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS = {
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
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.GRADIENTS = {
  gradient1: 'linear-gradient(180deg, ' + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.purple + ' 0%, #8BA4F9 100%)',
  gradient2: 'linear-gradient(180deg, ' + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.green + ' 0%, #66D2EA 100%)',
  gradient3: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gradient4: 'linear-gradient(180deg, #919191 0%, #3D4975 100%)'
};
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.BREAKPOINTS = {
  xxs: 320,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1440
};

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$")); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1

requireAll(__webpack_require__("./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));
requireAll(__webpack_require__("./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$"));
requireAll(__webpack_require__("./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$"));

/***/ }),

/***/ "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!*******************************************************!*\
  !*** ./pages sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./guide/guide.js": "./pages/guide/guide.js",
	"./index/index.js": "./pages/index/index.js",
	"./product/product.js": "./pages/product/product.js",
	"./products/products.js": "./pages/products/products.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$":
/*!*********************************************************!*\
  !*** ./pages sync ^\.\/(?!.*(?:__tests__)).*\.(scss?)$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/base.scss": "./pages/base/base.scss",
	"./guide/guide.scss": "./pages/guide/guide.scss",
	"./index/index.scss": "./pages/index/index.scss",
	"./login/login.scss": "./pages/login/login.scss",
	"./product/product.scss": "./pages/product/product.scss",
	"./products/products.scss": "./pages/products/products.scss",
	"./register/register.scss": "./pages/register/register.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(scss?)$";

/***/ }),

/***/ "./pages/base/base.scss":
/*!******************************!*\
  !*** ./pages/base/base.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/guide/guide.js":
/*!******************************!*\
  !*** ./pages/guide/guide.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/guide/guide.scss":
/*!********************************!*\
  !*** ./pages/guide/guide.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index/index.scss":
/*!********************************!*\
  !*** ./pages/index/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/login/login.scss":
/*!********************************!*\
  !*** ./pages/login/login.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/product/product.js":
/*!**********************************!*\
  !*** ./pages/product/product.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('.product__carousel', 'body').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: false
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./pages/product/product.scss":
/*!************************************!*\
  !*** ./pages/product/product.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/products/products.js":
/*!************************************!*\
  !*** ./pages/products/products.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('body').on('click', '.products_show-filter', function (event) {
    event.preventDefault();
    var scrollTop_body = $('html, body').scrollTop() || $(document).scrollTop() || $(window).scrollTop();
    $('body').attr('data-last-scrolltop', scrollTop_body);
    $('.page__content-wrapper').css({
      top: '-' + scrollTop_body + 'px',
      position: 'fixed'
    });
    $('body').css({
      top: '0px',
      position: 'fixed',
      overflow: 'hidden'
    });
    $('.filter-products').addClass('filter-products_mob-show');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./pages/products/products.scss":
/*!**************************************!*\
  !*** ./pages/products/products.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/register/register.scss":
/*!**************************************!*\
  !*** ./pages/register/register.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./theme/global.scss":
/*!***************************!*\
  !*** ./theme/global.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
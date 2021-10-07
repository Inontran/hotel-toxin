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
/******/ 	deferredModules.push(["./pages/products/products.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","vendors~guide~product~products","vendors~guide~products","guide~index~login~product~products~register","guide~products"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/filter-products/filter-products.js":
/*!*******************************************************!*\
  !*** ./components/filter-products/filter-products.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./filter-products.scss */ "./components/filter-products/filter-products.scss");

__webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");

__webpack_require__(/*! @/components/slider-range/slider-range */ "./components/slider-range/slider-range.js");

__webpack_require__(/*! @/components/checkbox/checkbox */ "./components/checkbox/checkbox.js");

__webpack_require__(/*! @/components/expander/expander */ "./components/expander/expander.js");

__webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function handlerClickHideBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    $btn.closest('.js-filter-products').removeClass('filter-products_mobile_visible');
    const scrollTopBody = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;
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

  $body.on('click', '.js-filter-products_hide-filter', handlerClickHideBtn);

  function updateFilterProducts() {
    if (window.matchMedia(`(max-width: ${jquery__WEBPACK_IMPORTED_MODULE_0___default.a.BREAKPOINTS.md}px)`).matches) {
      $body.prepend(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-filter-products.filter-products_mobile'));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-products__left-column').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-filter-products.filter-products_mobile'));
    }

    return false;
  }

  updateFilterProducts();
  let timerFilter = null;

  function handlerResizeFilterProducts() {
    if (timerFilter !== null) {
      clearTimeout(timerFilter);
    }

    timerFilter = setTimeout(() => {
      updateFilterProducts();
    }, 50);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(handlerResizeFilterProducts);
});

/***/ }),

/***/ "./components/filter-products/filter-products.scss":
/*!*********************************************************!*\
  !*** ./components/filter-products/filter-products.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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


__webpack_require__(/*! ../../entry */ "./entry.js");

__webpack_require__(/*! ./products.scss */ "./pages/products/products.scss");

__webpack_require__(/*! @/components/card-product/card-product */ "./components/card-product/card-product.js");

__webpack_require__(/*! @/components/pagination/pagination */ "./components/pagination/pagination.js");

__webpack_require__(/*! @/components/filter-products/filter-products */ "./components/filter-products/filter-products.js");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function handlerClickShowFilter(event) {
    event.preventDefault();
    const scrollTopBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    $body.attr('data-last-scrolltop', scrollTopBody);
    const scrollTopBodyPx = `-${scrollTopBody}px`;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-page__content-wrapper').css({
      top: scrollTopBodyPx,
      position: 'fixed'
    });
    $body.css({
      top: '0px',
      position: 'fixed',
      overflow: 'hidden'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-filter-products').addClass('filter-products_mobile_visible');
  }

  $body.on('click', '.js-products_show-filter', handlerClickShowFilter);
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
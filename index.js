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
/******/ 	deferredModules.push(["./pages/index/index.js","vendors~guide~index~login~product~products~register","vendors~guide~index~product~products","guide~index~login~product~products~register"]);
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

/***/ "./components/air-datepicker/air-datepicker.js":
/*!*****************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! ./air-datepicker.scss */ "./components/air-datepicker/air-datepicker.scss");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

moment__WEBPACK_IMPORTED_MODULE_2___default.a.lang('ru');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  function formatDate(strDate) {
    if (!strDate.length) {
      return '';
    }

    let strFormattedDate = '';

    try {
      strFormattedDate = strDate.split('.', 3).reverse().join('-');
    } catch (error) {
      console.debug(error);
    }

    return strFormattedDate;
  }

  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  $body.find('.js-air-datepicker.air-datepicker_inline').each(function () {
    const $airDatepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const attrMinDate = $airDatepicker.data('min-date');
    let minDateOption;

    if (attrMinDate === 'today') {
      minDateOption = new Date();
    } else if (attrMinDate) {
      try {
        minDateOption = new Date(attrMinDate);
      } catch (error) {
        console.debug(error);
      }
    }

    const $datepicker = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__wrapper', $airDatepicker);
    $datepicker.datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy'
      },
      minDate: minDateOption
    });
    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      const datesFromInputs = [];
      const $inputDateStart = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown);

      if ($inputDateStart.length) {
        let valueInputDate = $inputDateStart.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      const $inputDateEnd = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown);

      if ($inputDateEnd.length) {
        let valueInputDate = $inputDateEnd.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      if (datesFromInputs.length) {
        $datepicker.data('datepicker').selectDate(datesFromInputs);
      }
    }

    if (!$datepicker.data('datepicker').selectedDates.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__clear-button', $airDatepicker).addClass('air-datepicker_hidden');
    }
  });

  function handlerClickClearBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').clear();
    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown).val('');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown).val('');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_range .js-input-text__field', $parentDropdown).val('');
    }

    $btn.closest('.js-air-datepicker__clear-button').addClass('air-datepicker_hidden');
  }

  $body.on('click', '.js-air-datepicker .js-air-datepicker__clear-button .js-button', handlerClickClearBtn);

  function handlerClickSubmitBtn(event) {
    event.preventDefault();
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    let $parentDropdown = $btn.closest('.js-dropdown');
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    const dates = $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').selectedDates;
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');

    if (targetDropdowns) {
      $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetDropdowns);
    }

    if ($parentDropdown.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_range .js-input-text__field', $parentDropdown).val(`${moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[0]).format('D MMM')} - ${moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[1]).format('D MMM')}`);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_start .js-input-text__field', $parentDropdown).val(moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[0]).format('DD.MM.YYYY'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text_date_end .js-input-text__field', $parentDropdown).val(moment__WEBPACK_IMPORTED_MODULE_2___default()(dates[1]).format('DD.MM.YYYY'));
      $parentDropdown.removeClass('dropdown_aсtivated');
    }

    const $clearBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-air-datepicker__clear-button', $airDatepicker);

    if (dates.length) {
      $clearBtn.removeClass('air-datepicker_hidden');
    } else {
      $clearBtn.addClass('air-datepicker_hidden');
    }
  }

  $body.on('click', '.js-air-datepicker .js-air-datepicker__submit-button .js-button', handlerClickSubmitBtn);
});

/***/ }),

/***/ "./components/air-datepicker/air-datepicker.scss":
/*!*******************************************************!*\
  !*** ./components/air-datepicker/air-datepicker.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/card/card.js":
/*!*********************************!*\
  !*** ./components/card/card.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");

__webpack_require__(/*! ./card.scss */ "./components/card/card.scss");

/***/ }),

/***/ "./components/card/card.scss":
/*!***********************************!*\
  !*** ./components/card/card.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/first-display/first-display.js":
/*!***************************************************!*\
  !*** ./components/first-display/first-display.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./first-display.scss */ "./components/first-display/first-display.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $headerSite = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  const $firstDisplay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-first-display');

  if (!$firstDisplay.length) {
    return;
  }

  const isExistHeader = $headerSite.length;
  const heightFirstDisplayEqual100vh = $firstDisplay[0].offsetHeight === window.innerHeight;
  const resultConditions = isExistHeader && heightFirstDisplayEqual100vh;

  function calcHeightFirstDisplay() {
    const headerHeight = $headerSite.outerHeight();
    $firstDisplay.css('min-height', `calc(100vh - ${headerHeight}px)`);
  }

  if (resultConditions) {
    calcHeightFirstDisplay();
    let timerWindowResize = null;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(() => {
      if (timerWindowResize !== null) {
        clearTimeout(timerWindowResize);
      }

      timerWindowResize = setTimeout(() => {
        calcHeightFirstDisplay();
      }, 10);
    });
  }
});

/***/ }),

/***/ "./components/first-display/first-display.scss":
/*!*****************************************************!*\
  !*** ./components/first-display/first-display.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form-fast-select/form-fast-select.js":
/*!*********************************************************!*\
  !*** ./components/form-fast-select/form-fast-select.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./form-fast-select.scss */ "./components/form-fast-select/form-fast-select.scss");

__webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");

__webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/card/card */ "./components/card/card.js");

/***/ }),

/***/ "./components/form-fast-select/form-fast-select.scss":
/*!***********************************************************!*\
  !*** ./components/form-fast-select/form-fast-select.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../entry */ "./entry.js");

__webpack_require__(/*! ./index.scss */ "./pages/index/index.scss");

__webpack_require__(/*! @/components/first-display/first-display */ "./components/first-display/first-display.js");

__webpack_require__(/*! @/components/form-fast-select/form-fast-select */ "./components/form-fast-select/form-fast-select.js");

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
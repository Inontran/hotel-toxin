(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide~index~login~product~products~register"],{

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./button.scss */ "./components/button/button.scss");

/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/curtain sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!********************************************************************!*\
  !*** ./components/curtain sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./curtain.js": "./components/curtain/curtain.js"
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
webpackContext.id = "./components/curtain sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./components/curtain/curtain.js":
/*!***************************************!*\
  !*** ./components/curtain/curtain.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./curtain.scss */ "./components/curtain/curtain.scss");

__webpack_require__(/*! @/components/expander/expander */ "./components/expander/expander.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  const $html = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html');
  const $pageContentWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page__content-wrapper');

  function handlerClickCurtain(event) {
    event.preventDefault();
    let scrollTopBody;

    if (!$body.hasClass('page_shown-curtain')) {
      scrollTopBody = $html.scrollTop() || $body.scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
      const scrollTopBodyPx = `-${scrollTopBody}px`;
      $pageContentWrapper.css({
        top: scrollTopBodyPx,
        position: 'fixed'
      });
      $body.css({
        top: '0px',
        position: 'fixed'
      });
      $body.attr('data-last-scrolltop', scrollTopBody);
    } else {
      scrollTopBody = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;
      $pageContentWrapper.css({
        top: '',
        position: ''
      });
      $body.css({
        top: '',
        position: ''
      });
      $html.scrollTop(scrollTopBody);
      $body.scrollTop(scrollTopBody);
      $body.attr('data-last-scrolltop', 0);
    }

    $body.toggleClass('page_shown-curtain');
  }

  $body.on('click', '.js-header__btn_show-curtain', handlerClickCurtain);
});

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./dropdown.scss */ "./components/dropdown/dropdown.scss");

__webpack_require__(/*! @/components/input-text/input-text */ "./components/input-text/input-text.js");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/list-counters/list-counters */ "./components/list-counters/list-counters.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'); // закрытие dropdown по клику вне этого dropdown

  $body.on('click', '*', event => {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.js-dropdown').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).hasClass('.js-dropdown')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });

  function toggleDropdown($dropdown) {
    if (!$dropdown.length) {
      return;
    }

    let $dropdownsArray = $dropdown;
    const targetId = $dropdown.attr('data-target');

    if (targetId && jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.js-dropdown${targetId}`).length) {
      $dropdownsArray = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.js-dropdown${targetId}`);
    }

    const dropdownGroup = $dropdownsArray.attr('data-group');

    if (dropdownGroup !== '' && dropdownGroup !== undefined) {
      const selector = '.js-dropdown';
      $body.find(`${selector}[data-group="${dropdownGroup}"]`).each(function () {
        const $dropdownItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($dropdownItem) === jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($dropdownsArray)) {
          $dropdownsArray.toggleClass('dropdown_aсtivated');
        } else {
          $dropdownItem.removeClass('dropdown_aсtivated');
        }
      });
    } else {
      $dropdownsArray.toggleClass('dropdown_aсtivated');
    }
  }

  $body.on('click', '.js-dropdown .js-dropdown__input-wrapper, .js-dropdown .js-dropdown__btn', event => {
    event.preventDefault();
    const $dropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.js-dropdown');
    toggleDropdown($dropdown);
  });
});

/***/ }),

/***/ "./components/dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./components/dropdown/dropdown.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/expander/expander.js":
/*!*****************************************!*\
  !*** ./components/expander/expander.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./expander.scss */ "./components/expander/expander.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function handlerClickCollapse(event) {
    event.preventDefault();
    const $expander = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.js-expander');
    const expanderGroup = $expander.attr('data-group');

    if (expanderGroup !== '' && expanderGroup !== 'undefined') {
      const selector = '.js-expander';
      $body.find(`${selector}[data-group="${expanderGroup}"]`).each(function () {
        const $currentCollapse = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($currentCollapse) === jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).index($expander)) {
          $expander.toggleClass('expander_activated');
        } else {
          $currentCollapse.removeClass('expander_activated');
        }
      });
    } else {
      $expander.toggleClass('expander_activated');
    }
  }

  $body.on('click', '.js-expander .js-expander__btn', handlerClickCollapse);
});

/***/ }),

/***/ "./components/expander/expander.scss":
/*!*******************************************!*\
  !*** ./components/expander/expander.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/footer sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!*******************************************************************!*\
  !*** ./components/footer sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./footer.js": "./components/footer/footer.js"
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
webpackContext.id = "./components/footer sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./footer.scss */ "./components/footer/footer.scss");

__webpack_require__(/*! @/components/logo/logo */ "./components/logo/logo.js");

__webpack_require__(/*! @/components/social-nets/social-nets */ "./components/social-nets/social-nets.js");

__webpack_require__(/*! @/components/input-text/input-text */ "./components/input-text/input-text.js");

__webpack_require__(/*! @/components/heading/heading */ "./components/heading/heading.js");

/***/ }),

/***/ "./components/footer/footer.scss":
/*!***************************************!*\
  !*** ./components/footer/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/header sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!*******************************************************************!*\
  !*** ./components/header sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./header.js": "./components/header/header.js"
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
webpackContext.id = "./components/header sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./header.scss */ "./components/header/header.scss");

__webpack_require__(/*! @/components/logo/logo */ "./components/logo/logo.js");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");

/***/ }),

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/heading/heading.js":
/*!***************************************!*\
  !*** ./components/heading/heading.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./heading.scss */ "./components/heading/heading.scss");

/***/ }),

/***/ "./components/heading/heading.scss":
/*!*****************************************!*\
  !*** ./components/heading/heading.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/input-number/input-number.js":
/*!*************************************************!*\
  !*** ./components/input-number/input-number.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./input-number.scss */ "./components/input-number/input-number.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function disableBtns($counterBtns) {
    if (!$counterBtns) {
      return;
    }

    const $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__input', $counterBtns);
    const $btnLess = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__btn-less', $counterBtns);
    const $btnMore = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__btn-more', $counterBtns);
    const inputMin = $input.attr('min');
    const inputMax = $input.attr('max');
    const inputVal = $input.val();

    if (inputMin && inputVal <= inputMin) {
      $btnLess.addClass('input-number__btn_disabled');
    } else {
      $btnLess.removeClass('input-number__btn_disabled');
    }

    if (inputMax && inputVal >= inputMax) {
      $btnMore.addClass('input-number__btn_disabled');
    } else {
      $btnMore.removeClass('input-number__btn_disabled');
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number', $body).each(function () {
    const $counterBtns = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    disableBtns($counterBtns);
  });

  function handlerClickCounterBtns(event) {
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $counterBtns = $btn.closest('.js-input-number');
    const $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__input', $counterBtns);
    const value = $input.val();

    if ($btn.hasClass('js-input-number__btn-less')) {
      $input[0].stepDown();
    } else if ($btn.hasClass('js-input-number__btn-more')) {
      $input[0].stepUp();
    }

    if ($input.val() !== value) {
      $input[0].dispatchEvent(new Event('change', {
        bubbles: true
      }));
    }
  }

  $body.on('click', '.js-input-number .js-input-number__btn-less', handlerClickCounterBtns);
  $body.on('click', '.js-input-number .js-input-number__btn-more', handlerClickCounterBtns);

  function handlerChangeInputCounterBtns(event) {
    const $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $counterBtns = $input.closest('.js-input-number');
    disableBtns($counterBtns);
  }

  $body.on('change', '.js-input-number .js-input-number__input', handlerChangeInputCounterBtns);
});

/***/ }),

/***/ "./components/input-number/input-number.scss":
/*!***************************************************!*\
  !*** ./components/input-number/input-number.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/input-text/input-text.js":
/*!*********************************************!*\
  !*** ./components/input-text/input-text.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "../node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! ./input-text.scss */ "./components/input-text/input-text.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $inputsDate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-text.input-text_mask_date .js-input-text__field');
  inputmask__WEBPACK_IMPORTED_MODULE_1___default()('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ'
  }).mask($inputsDate);
  $inputsDate.attr('placeholder', 'ДД.ММ.ГГГГ');
  inputmask__WEBPACK_IMPORTED_MODULE_1___default()('email').mask('.js-input-text.input-text_mask_email .js-input-text__field');
});

/***/ }),

/***/ "./components/input-text/input-text.scss":
/*!***********************************************!*\
  !*** ./components/input-text/input-text.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/layout sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!*******************************************************************!*\
  !*** ./components/layout sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layout.js": "./components/layout/layout.js"
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
webpackContext.id = "./components/layout sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./layout.scss */ "./components/layout/layout.scss");

/***/ }),

/***/ "./components/layout/layout.scss":
/*!***************************************!*\
  !*** ./components/layout/layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list-counters/list-counters.js":
/*!***************************************************!*\
  !*** ./components/list-counters/list-counters.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./list-counters.scss */ "./components/list-counters/list-counters.scss");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/input-number/input-number */ "./components/input-number/input-number.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function declineWord(number, titles) {
    const numberOfEnding = [2, 0, 1, 1, 1, 2];
    const isLastEnding = number % 100 > 4 && number % 100 < 20;
    const correctEnding = number % 10 < 5 ? number % 10 : 5;
    return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
  }

  function calcItemsListCounters($listCounters) {
    if (!$listCounters.length) {
      return;
    }

    const $dropdown = $listCounters.closest('.js-dropdown');

    if (!$dropdown.length) {
      return;
    }

    let result = '';
    let countNotZeroItems = 0;
    let summAllCounters = 0;
    const collectionGroupIds = new Set();
    $listCounters.find('.js-list-counters__counter[data-group-item-id]').each(function () {
      const $counterItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      collectionGroupIds.add($counterItem.attr('data-group-item-id'));
    });

    function getTextFromCounter($counterItem, valCounter) {
      if (valCounter) {
        const counterLabelText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters__counter-label', $counterItem).text();
        const arrayNamesCounter = [$counterItem.attr('data-text-one-items') ? $counterItem.attr('data-text-one-items') : counterLabelText, $counterItem.attr('data-text-two-items') ? $counterItem.attr('data-text-two-items') : counterLabelText, $counterItem.attr('data-text-many-items') ? $counterItem.attr('data-text-many-items') : counterLabelText];

        if (countNotZeroItems !== 0) {
          result += ', ';
        }

        result += valCounter;
        result += ' ';
        result += declineWord(valCounter, arrayNamesCounter);
        countNotZeroItems += 1;
      }
    }

    collectionGroupIds.forEach(id => {
      let groupCounterSumm = 0;
      const $groupCountersById = $listCounters.find(`.js-list-counters__counter[data-group-item-id="${id}"]`);
      $groupCountersById.each(function () {
        const $counterItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        const $counterInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__input', $counterItem);

        if (!$counterInput.length) {
          return;
        }

        const valCounter = parseInt($counterInput.val(), 10);
        groupCounterSumm += valCounter;
      });

      if (groupCounterSumm) {
        getTextFromCounter($groupCountersById.eq(0), groupCounterSumm);
        summAllCounters += groupCounterSumm;
      }
    });
    $listCounters.find('.js-list-counters__counter:not([data-group-item-id])').each(function () {
      const $counterItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      const $counterInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-number__input', $counterItem);

      if (!$counterInput.length) {
        return;
      }

      const valCounter = parseInt($counterInput.val(), 10);

      if (valCounter) {
        getTextFromCounter($counterItem, valCounter);
      }
    });
    const $btnReset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters__btn-reset', $listCounters);

    if (summAllCounters === 0) {
      result = $listCounters.attr('data-default-text') ? $listCounters.attr('data-default-text') : '';
      $btnReset.addClass('list-counters_hidden');
    } else {
      $btnReset.removeClass('list-counters_hidden');
    }

    $dropdown.find('.js-dropdown__input-wrapper .js-input-text__field').val(result);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters:not(.list-counters_simple)', $body).each(function () {
    const $listCounters = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    calcItemsListCounters($listCounters);
  });
  $body.on('click', '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn-reset .js-button', event => {
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $listCounters = $btn.closest('.js-list-counters');
    $listCounters.find('.js-input-number .js-input-number__input').val(0).trigger('change');
    calcItemsListCounters($listCounters);
  });
  $body.on('click', '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn-submit .js-button', event => {
    const $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $listCounters = $btn.closest('.js-list-counters');
    calcItemsListCounters($listCounters);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-list-counters.list-counters_simple', $body).each(function () {
    const $listCounters = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    calcItemsListCounters($listCounters);
  });
  $body.on('change', '.js-list-counters.list-counters_simple .js-input-number .js-input-number__input', event => {
    const $listCounters = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.js-list-counters');
    calcItemsListCounters($listCounters);
  });
});

/***/ }),

/***/ "./components/list-counters/list-counters.scss":
/*!*****************************************************!*\
  !*** ./components/list-counters/list-counters.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/logo/logo.js":
/*!*********************************!*\
  !*** ./components/logo/logo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./logo.scss */ "./components/logo/logo.scss");

/***/ }),

/***/ "./components/logo/logo.scss":
/*!***********************************!*\
  !*** ./components/logo/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/social-nets/social-nets.js":
/*!***********************************************!*\
  !*** ./components/social-nets/social-nets.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./social-nets.scss */ "./components/social-nets/social-nets.scss");

/***/ }),

/***/ "./components/social-nets/social-nets.scss":
/*!*************************************************!*\
  !*** ./components/social-nets/social-nets.scss ***!
  \*************************************************/
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
  gradient1: `linear-gradient(180deg, ${jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.purple} 0%, #8BA4F9 100%)`,
  gradient2: `linear-gradient(180deg, ${jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.green} 0%, #66D2EA 100%)`,
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

requireAll(__webpack_require__("./pages/base sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));
requireAll(__webpack_require__("./components/layout sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));
requireAll(__webpack_require__("./components/header sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));
requireAll(__webpack_require__("./components/footer sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));
requireAll(__webpack_require__("./components/curtain sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$"));

/***/ }),

/***/ "./pages/base sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$":
/*!************************************************************!*\
  !*** ./pages/base sync ^\.\/(?!.*(?:__tests__)).*\.(js?)$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base.js": "./pages/base/base.js"
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
webpackContext.id = "./pages/base sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(js?)$";

/***/ }),

/***/ "./pages/base/base.js":
/*!****************************!*\
  !*** ./pages/base/base.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./base.scss */ "./pages/base/base.scss");

/***/ }),

/***/ "./pages/base/base.scss":
/*!******************************!*\
  !*** ./pages/base/base.scss ***!
  \******************************/
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

}]);
//# sourceMappingURL=guide~index~login~product~products~register.js.map
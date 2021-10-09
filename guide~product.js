(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide~product"],{

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

/***/ "./components/chart/chart.js":
/*!***********************************!*\
  !*** ./components/chart/chart.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "../node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! ./chart.scss */ "./components/chart/chart.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  function initCharts($chart) {
    if (!$chart.length) {
      return;
    }

    const $chartPicture = $chart.find('.js-chart__picture');
    const ctx = $chartPicture.get(0).getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient1.addColorStop(0, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.purple);
    gradient1.addColorStop(1, '#8BA4F9');
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.green);
    gradient2.addColorStop(1, '#66D2EA');
    const gradient3 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient3.addColorStop(0, '#FFE39C');
    gradient3.addColorStop(1, '#FFBA9C');
    const gradient4 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient4.addColorStop(0, '#919191');
    gradient4.addColorStop(1, '#3D4975');
    const num1 = $chart.attr('data-num-1') ? $chart.attr('data-num-1') : 0;
    const num2 = $chart.attr('data-num-2') ? $chart.attr('data-num-2') : 0;
    const num3 = $chart.attr('data-num-3') ? $chart.attr('data-num-3') : 0;
    const num4 = $chart.attr('data-num-4') ? $chart.attr('data-num-4') : 0;
    const data = {
      datasets: [{
        data: [num3, num2, num1, num4],
        backgroundColor: [gradient1, gradient2, gradient3, gradient4]
      }],
      labels: ['Удовлетворительно', 'Хорошо', 'Великолепно', 'Разочарован']
    };
    const options = {
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
          fontColor: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.COLORS.dark75,
          fontSize: 14,
          fontFamily: "'Montserrat', 'sans-serif'"
        }
      },
      cutoutPercentage: 90
    };
    new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {
      type: 'doughnut',
      data,
      options
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.js-chart').each(function () {
    initCharts(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});

/***/ }),

/***/ "./components/chart/chart.scss":
/*!*************************************!*\
  !*** ./components/chart/chart.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/form-booking/form-booking.js":
/*!*************************************************!*\
  !*** ./components/form-booking/form-booking.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./form-booking.scss */ "./components/form-booking/form-booking.scss");

__webpack_require__(/*! @/components/dropdown/dropdown */ "./components/dropdown/dropdown.js");

__webpack_require__(/*! @/components/air-datepicker/air-datepicker */ "./components/air-datepicker/air-datepicker.js");

__webpack_require__(/*! @/components/button/button */ "./components/button/button.js");

__webpack_require__(/*! @/components/card/card */ "./components/card/card.js");

/***/ }),

/***/ "./components/form-booking/form-booking.scss":
/*!***************************************************!*\
  !*** ./components/form-booking/form-booking.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/infographics/infographics.js":
/*!*************************************************!*\
  !*** ./components/infographics/infographics.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./infographics.scss */ "./components/infographics/infographics.scss");

/***/ }),

/***/ "./components/infographics/infographics.scss":
/*!***************************************************!*\
  !*** ./components/infographics/infographics.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/like-btn/like-btn.js":
/*!*****************************************!*\
  !*** ./components/like-btn/like-btn.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./like-btn.scss */ "./components/like-btn/like-btn.scss");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function handlerChangeLikeBtn(event) {
    const $likeInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $likeBtn = $likeInput.closest('.js-like-btn');
    const $likeCountView = $likeBtn.find('.js-like-btn__count');
    const doExistAllElements = !$likeBtn.length || !$likeCountView.length || !$likeInput.length;

    if (doExistAllElements) {
      return;
    }

    let countLikes = $likeInput.val();
    countLikes = countLikes ? parseInt(countLikes, 10) : 0;

    if ($likeInput.prop('checked')) {
      countLikes += 1;
    } else {
      countLikes -= 1;
      countLikes = countLikes < 0 ? 0 : countLikes;
    }

    $likeInput.val(countLikes);
    $likeCountView.text(countLikes);
  }

  $body.on('change', '.js-like-btn__check', handlerChangeLikeBtn);
});

/***/ }),

/***/ "./components/like-btn/like-btn.scss":
/*!*******************************************!*\
  !*** ./components/like-btn/like-btn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list/list.js":
/*!*********************************!*\
  !*** ./components/list/list.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./list.scss */ "./components/list/list.scss");

/***/ }),

/***/ "./components/list/list.scss":
/*!***********************************!*\
  !*** ./components/list/list.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/review/review.js":
/*!*************************************!*\
  !*** ./components/review/review.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./review.scss */ "./components/review/review.scss");

__webpack_require__(/*! @/components/like-btn/like-btn */ "./components/like-btn/like-btn.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  $body.on('change', '.js-review .js-like-btn__check', event => {
    const $likeBtnInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $review = $likeBtnInput.closest('.js-review');

    if (!$review.length) {
      return;
    }

    $review.addClass('js-review_not-iterable');
    const reviewId = $review.attr('data-review-id');
    const $clonesCurrentReview = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.js-review:not(.js-review_not-iterable)[data-review-id="${reviewId}"]`);

    if ($clonesCurrentReview.length) {
      const isCheckLikeBtn = $likeBtnInput.prop('checked');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-like-btn__check', $clonesCurrentReview).prop('checked', isCheckLikeBtn).trigger('change');
    }

    $review.removeClass('js-review_not-iterable');
  });
});

/***/ }),

/***/ "./components/review/review.scss":
/*!***************************************!*\
  !*** ./components/review/review.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=guide~product.js.map
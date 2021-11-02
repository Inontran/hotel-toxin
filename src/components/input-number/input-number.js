import $ from 'jquery';

require('./input-number.scss');

$(() => {
  // const $body = $('body');

  // function disableBtns($counterBtns) {
  //   if (!$counterBtns) {
  //     return;
  //   }

  //   const $input = $('.js-input-number__input', $counterBtns);
  //   const $btnLess = $('.js-input-number__btn_decreasing', $counterBtns);
  //   const $btnMore = $('.js-input-number__btn_increasing', $counterBtns);
  //   const inputMinVal = $input.attr('min');
  //   const inputMaxVal = $input.attr('max');
  //   const inputVal = $input.val();

  //   if (inputMinVal && inputVal <= inputMinVal) {
  //     $btnLess.attr('disabled', '');
  //   } else {
  //     $btnLess.removeAttr('disabled');
  //   }

  //   if (inputMaxVal && inputVal >= inputMaxVal) {
  //     $btnMore.attr('disabled', '');
  //   } else {
  //     $btnMore.removeAttr('disabled');
  //   }
  // }

  // $('.js-input-number', $body).each(function () {
  //   const $counterBtns = $(this);
  //   disableBtns($counterBtns);
  // });

  // function handlerClickCounterBtns(event) {
  //   const $btn = $(event.currentTarget);
  //   const $counterBtns = $btn.closest('.js-input-number');
  //   const $input = $('.js-input-number__input', $counterBtns);
  //   const value = $input.val();

  //   if ($btn.hasClass('js-input-number__btn_decreasing')) {
  //     $input[0].stepDown();
  //   } else if ($btn.hasClass('js-input-number__btn_increasing')) {
  //     $input[0].stepUp();
  //   }

  //   if ($input.val() !== value) {
  //     $input[0].dispatchEvent(new Event('change', { bubbles: true }));
  //   }
  // }

  // $body.on('click', '.js-input-number .js-input-number__btn_decreasing', handlerClickCounterBtns);
  // $body.on('click', '.js-input-number .js-input-number__btn_increasing', handlerClickCounterBtns);

  // function handlerChangeInputCounterBtns(event) {
  //   const $input = $(event.currentTarget);
  //   const $counterBtns = $input.closest('.js-input-number');
  //   disableBtns($counterBtns);
  // }

  // $body.on('change', '.js-input-number .js-input-number__input', handlerChangeInputCounterBtns);
});

class InputNumber {
  _$inputNumber;
  _$input;
  _$btnDecreasing;
  _$btnIncreasing;

  constructor($inputNumber) {
    this._$inputNumber = $inputNumber;
    this._init();
  }

  _init() {
    this._$input = $('.js-input-number__input', this._$inputNumber);
    this._$btnDecreasing = $('.js-input-number__btn_decreasing', this._$inputNumber);
    this._$btnIncreasing = $('.js-input-number__btn_increasing', this._$inputNumber);

    this._bindEventListeners();
    this._addEventListerners();
    this._disableBtns();
  }

  _bindEventListeners() {
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleBtnIncreasingClick = this._handleBtnIncreasingClick.bind(this);
    this._handleBtnDecreasingClick = this._handleBtnDecreasingClick.bind(this);
  }

  _addEventListerners() {
    this._$input.on('change', this._handleInputChange);
    this._$btnIncreasing.on('click', this._handleBtnIncreasingClick);
    this._$btnDecreasing.on('click', this._handleBtnDecreasingClick);
  }

  _disableBtns() {
    const inputMinVal = this._$input.attr('min');
    const inputMaxVal = this._$input.attr('max');
    const inputVal = this._$input.val();

    if (inputMinVal && inputVal <= inputMinVal) {
      this._$btnDecreasing.attr('disabled', '');
    } else {
      this._$btnDecreasing.removeAttr('disabled');
    }

    if (inputMaxVal && inputVal >= inputMaxVal) {
      this._$btnIncreasing.attr('disabled', '');
    } else {
      this._$btnIncreasing.removeAttr('disabled');
    }
  }

  _handleInputChange() {
    this._disableBtns();
  }

  _handleBtnIncreasingClick() {
    const value = this._$input.val();
    this._$input[0].stepUp();

    if (this._$input.val() !== value) {
      this._$input[0].dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  _handleBtnDecreasingClick() {
    const value = this._$input.val();
    this._$input[0].stepDown();

    if (this._$input.val() !== value) {
      this._$input[0].dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}

export default InputNumber

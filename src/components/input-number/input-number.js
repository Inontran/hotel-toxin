import $ from 'jquery';

require('./input-number.scss');

$(() => {
  const $body = $('body');

  function disableBtns($counterBtns) {
    if (!$counterBtns) {
      return;
    }

    const $input = $('.js-input-number__input', $counterBtns);
    const $btnLess = $('.js-input-number__btn_decreasing', $counterBtns);
    const $btnMore = $('.js-input-number__btn_increasing', $counterBtns);
    const inputMinVal = $input.attr('min');
    const inputMaxVal = $input.attr('max');
    const inputVal = $input.val();

    if (inputMinVal && inputVal <= inputMinVal) {
      $btnLess.attr('disabled', '');
    } else {
      $btnLess.removeAttr('disabled');
    }

    if (inputMaxVal && inputVal >= inputMaxVal) {
      $btnMore.attr('disabled', '');
    } else {
      $btnMore.removeAttr('disabled');
    }
  }

  $('.js-input-number', $body).each(function () {
    const $counterBtns = $(this);
    disableBtns($counterBtns);
  });

  function handlerClickCounterBtns(event) {
    const $btn = $(event.currentTarget);
    const $counterBtns = $btn.closest('.js-input-number');
    const $input = $('.js-input-number__input', $counterBtns);
    const value = $input.val();

    if ($btn.hasClass('js-input-number__btn_decreasing')) {
      $input[0].stepDown();
    } else if ($btn.hasClass('js-input-number__btn_increasing')) {
      $input[0].stepUp();
    }

    if ($input.val() !== value) {
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  $body.on('click', '.js-input-number .js-input-number__btn_decreasing', handlerClickCounterBtns);
  $body.on('click', '.js-input-number .js-input-number__btn_increasing', handlerClickCounterBtns);

  function handlerChangeInputCounterBtns(event) {
    const $input = $(event.currentTarget);
    const $counterBtns = $input.closest('.js-input-number');
    disableBtns($counterBtns);
  }

  $body.on('change', '.js-input-number .js-input-number__input', handlerChangeInputCounterBtns);
});

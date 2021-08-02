import $ from 'jquery';

$(() => {
  function handlerClickRateBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const $rateBtn = $btn.closest('.js-rate-btn');
    const $inputRate = $rateBtn.find('.js-rate-btn__input');
    const starRate = $btn.attr('data-number-star');
    const currentRate = $inputRate.val();

    if (starRate === '1' && currentRate === '1') {
      $inputRate.val(0);
    } else {
      $inputRate.val(starRate);
    }
  }

  $('body').on('click', '.js-rate-btn .js-rate-btn__star-item', handlerClickRateBtn);
});

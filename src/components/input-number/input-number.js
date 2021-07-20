import $ from 'jquery';

$(document).ready(function(){
  const $body = $('body');
  $('.js-input-number', $body).each(function(){
    const $counterBtns = $(this);
    disableBtns($counterBtns);
  });


  function handlerClickCounterBtns(event){
    const $btn = $(event.currentTarget);
    const $counterBtns = $btn.closest('.js-input-number');
    const $input = $('.js-input-number__input', $counterBtns);
    const value = $input.val();

    if( $btn.hasClass('js-input-number__btn-less') ){
      $input[0].stepDown();
    }
    else if( $btn.hasClass('js-input-number__btn-more') ){
      $input[0].stepUp();
    }

    if( $input.val() !== value ){
      $input[0].dispatchEvent(new Event('change', {bubbles: true}));
    }
  }

  $body.on('click', '.js-input-number .js-input-number__btn-less', handlerClickCounterBtns);
  $body.on('click', '.js-input-number .js-input-number__btn-more', handlerClickCounterBtns);


  function handlerChangeInputCounterBtns(event){
    const $input = $(event.currentTarget);
    const $counterBtns = $input.closest('.js-input-number');
    disableBtns($counterBtns);
  }

  $body.on('change', '.js-input-number .js-input-number__input', handlerChangeInputCounterBtns);


  function disableBtns($counterBtns){
    if( ! $counterBtns ){
      return;
    }

    const $input = $('.js-input-number__input', $counterBtns);
    const $btnLess = $('.js-input-number__btn-less', $counterBtns);
    const $btnMore = $('.js-input-number__btn-more', $counterBtns);
    const inputMin = $input.attr('min');
    const inputMax = $input.attr('max');
    const inputVal = $input.val();

    if( inputMin && inputVal <= inputMin ){
      $btnLess.addClass('input-number_disabled-btn');
    }
    else{
      $btnLess.removeClass('input-number_disabled-btn');
    }

    if( inputMax && inputVal >= inputMax ){
      $btnMore.addClass('input-number_disabled-btn');
    }
    else{
      $btnMore.removeClass('input-number_disabled-btn');
    }
  }
});
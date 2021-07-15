import $ from 'jquery';

$(document).ready(function(){

  $('body .js-counter-btns').each(function(){
    const $counterBtns = $(this);
    disableBtns($counterBtns);
  });


  function handlerClickCounterBtns(event){
    const $btn = $(event.currentTarget);
    const $counterBtns = $btn.closest('.js-counter-btns');
    const $input = $('.js-counter-btns__input', $counterBtns);
    const value = $input.val();

    if( $btn.hasClass('js-counter-btns__btn-less') ){
      $input[0].stepDown();
    }
    else if( $btn.hasClass('js-counter-btns__btn-more') ){
      $input[0].stepUp();
    }

    if( $input.val() !== value ){
      $input[0].dispatchEvent(new Event('change', {bubbles: true}));
    }
  }

  $('body').on('click', '.js-counter-btns .js-counter-btns__btn-less', handlerClickCounterBtns);
  $('body').on('click', '.js-counter-btns .js-counter-btns__btn-more', handlerClickCounterBtns);


  function handlerChangeInputCounterBtns(event){
    const $input = $(event.currentTarget);
    const $counterBtns = $input.closest('.js-counter-btns');
    disableBtns($counterBtns);
  }

  $('body').on('change', '.js-counter-btns .js-counter-btns__input', handlerChangeInputCounterBtns);


  function disableBtns($counterBtns){
    if( ! $counterBtns ){
      return;
    }

    const $input = $('.js-counter-btns__input', $counterBtns);
    const inputMin = $input.attr('min');
    const inputMax = $input.attr('max');
    const inputVal = $input.val();

    if( inputMin && inputVal <= inputMin ){
      $('.js-counter-btns__btn-less', $counterBtns).addClass('counter-btns_disabled-btn');
    }
    else{
      $('.js-counter-btns__btn-less', $counterBtns).removeClass('counter-btns_disabled-btn');
    }

    if( inputMax && inputVal >= inputMax ){
      $('.js-counter-btns__btn-more', $counterBtns).addClass('counter-btns_disabled-btn');
    }
    else{
      $('.js-counter-btns__btn-more', $counterBtns).removeClass('counter-btns_disabled-btn');
    }
  }
});
import $ from 'jquery';

require('@/components/logo/logo');
require('@/components/button/button');
require('@/components/dropdown/dropdown');

require('./header.scss');

$(() => {
  const $body = $('body');

  $body.on('click', '.js-header .js-header__btn_show-mainmenu', function(event){
    const $btn = $(event.currentTarget);
    const $header = $btn.closest('.js-header');
    $header.removeClass('header_shown-auth-btns');
    $header.toggleClass('header_shown-mainmenu');
  });

  $body.on('click', '.js-header .js-header__btn_show-auth-btns', function(event){
    const $btn = $(event.currentTarget);
    const $header = $btn.closest('.js-header');
    $header.removeClass('header_shown-mainmenu');
    $header.toggleClass('header_shown-auth-btns');
  });
});
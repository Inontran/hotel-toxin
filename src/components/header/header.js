import $ from 'jquery';

require('@/components/logo/logo');
require('@/components/button/button');
require('@/components/dropdown/dropdown');

require('./header.scss');

$(() => {
  const $body = $('body');

  function handleBtnShowMainmenuClick(event) {
    const $btn = $(event.currentTarget);
    const $header = $btn.closest('.js-header');
    $header.removeClass('header_shown-auth-btns');
    $header.toggleClass('header_shown-main-menu');
  }

  $body.on('click', '.js-header .js-header__icon-btn_type_menu', handleBtnShowMainmenuClick);

  function handleBtnShowAuthBtnsClick(event) {
    const $btn = $(event.currentTarget);
    const $header = $btn.closest('.js-header');
    $header.removeClass('header_shown-main-menu');
    $header.toggleClass('header_shown-auth-btns');
  }

  $body.on('click', '.js-header .js-header__icon-btn_type_profile', handleBtnShowAuthBtnsClick);
});

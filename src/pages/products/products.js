import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import Dropdown from '@/components/dropdown/dropdown';
import CardProduct from '@/components/card-product/card-product';
import Expander from '@/components/expander/expander';
import Header from '@/components/header/header';

require('../../entry');

require('@/components/slider-range/slider-range');
require('@/components/checkbox/checkbox');
require('@/components/pagination/pagination');
require('@/components/button/button');
require('@/components/heading/heading');

require('./products.scss');

$(() => {
  const $body = $('body');

  new Header($('.js-header'));
  
  // закрытие dropdown по клику вне этого dropdown
  $body.on('click', '*', (event) => {
    if (!$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown')) {
      $('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });

  $('.js-products__filter .js-air-datepicker').each(function() {
    new AirDatepicker($(this));
  });

  $('.js-products__filter .js-dropdown').each(function() {
    new Dropdown($(this));
  });

  $('.js-products .js-card-product').each(function() {
    new CardProduct($(this));
  });

  $('.js-products__filter .js-expander').each(function() {
    new Expander($(this));
  });

  function handlerClickShowFilter(event) {
    event.preventDefault();

    const scrollTopBody = $('html, body').scrollTop() || $(document).scrollTop() || $(window).scrollTop();
    $body.attr('data-last-scrolltop', scrollTopBody);

    const scrollTopBodyPx = `-${scrollTopBody}px`;
    $('.js-page__content-wrapper').css({
      top: scrollTopBodyPx,
      position: 'fixed',
    });
    $body.css({
      top: '0px',
      position: 'fixed',
      overflow: 'hidden',
    });

    $('.js-products__filter').addClass('products__filter_mobile_visible');
  }

  $body.on('click', '.js-products__filter-showing-btn .js-button', handlerClickShowFilter);
});


$(() => {
  const $body = $('body');

  function handlerClickHideBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    $btn.closest('.js-products__filter').removeClass('products__filter_mobile_visible');

    const scrollTopBody = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;

    $('.js-page__content-wrapper, body').css({
      top: '',
      position: '',
    });
    $body.css({
      overflow: '',
    });
    $('html, body').scrollTop(scrollTopBody);
    $body.attr('data-last-scrolltop', 0);
  }

  $body.on('click', '.js-products__filter-close-btn .js-button', handlerClickHideBtn);

  function updateFilterProducts() {
    if (window.matchMedia(`(max-width: ${$.BREAKPOINTS.md}px)`).matches) {
      $body.prepend($('.js-products__filter.products__filter_mobile'));
    } else {
      $('.js-products__filter-wrapper').append($('.js-products__filter.products__filter_mobile'));
    }
    return false;
  }

  updateFilterProducts();

  let timerFilter = null;

  function handlerResizeFilterProducts() {
    if (timerFilter !== null) {
      clearTimeout(timerFilter);
    }
    timerFilter = setTimeout(() => {
      updateFilterProducts();
    }, 50);
  }

  $(window).resize(handlerResizeFilterProducts);
});

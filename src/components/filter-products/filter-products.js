import $ from 'jquery';

require('./filter-products.scss');
require('@/components/dropdown/dropdown');
require('@/components/slider-range/slider-range');
require('@/components/checkbox/checkbox');
require('@/components/collapse/collapse');
require('@/components/air-datepicker/air-datepicker');

$(() => {
  const $body = $('body');

  function handlerClickHideBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    $btn.closest('.js-filter-products').removeClass('filter-products_mob-show');

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

  $body.on('click', '.js-filter-products_hide-filter', handlerClickHideBtn);

  function updateFilterProducts() {
    if (window.matchMedia(`(max-width: ${$.BREAKPOINTS.md}px)`).matches) {
      $body.prepend($('.js-filter-products.filter-products_mob-md'));
    } else {
      $('.js-products__left-column').append($('.js-filter-products.filter-products_mob-md'));
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

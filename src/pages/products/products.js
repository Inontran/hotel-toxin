import $ from 'jquery';

require('../../entry');
require('./products.scss');

require('@/components/card-product/card-product');
require('@/components/pagination/pagination');
require('@/components/filter-products/filter-products');
require('@/components/button/button');

$(() => {
  const $body = $('body');

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

    $('.js-filter-products').addClass('filter-products_mobile_visible');
  }

  $body.on('click', '.js-products_show-filter', handlerClickShowFilter);
});

import $ from 'jquery';
import 'owl.carousel';

require('./card-product.scss');
require('@/components/button/button');
require('@/components/rate-btn/rate-btn');

$(() => {
  $('.js-card-product__carousel', 'body').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true,
    });
  });
});

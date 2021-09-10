import $ from 'jquery';
import 'owl.carousel';

require('../../entry');
require('./product.scss');

require('@/components/form-booking/form-booking');
require('@/components/infographics/infographics');
require('@/components/review/review');
require('@/components/list/list');
require('@/components/chart/chart');

$(document).ready(() => {
  $('.js-product__carousel').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: false,
    });
  });
});

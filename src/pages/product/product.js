import $ from 'jquery';
import 'owl.carousel';

require('../../entry');

require('@/components/infographics/infographics');
require('@/components/review/review');
require('@/components/list/list');
require('@/components/chart/chart');
require('@/components/heading/heading');
require('@/components/form/room-reservation/room-reservation');

require('./product.scss');

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

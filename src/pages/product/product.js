require('../../entry.js');
require('./product.scss');

require('@/components/form-booking/form-booking.js');
require('@/components/infographics/infographics.js');
require('@/components/review/review.js');
require('@/components/list/list.js');
require('@/components/chart/chart.js');

import $ from 'jquery';
import 'owl.carousel';

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

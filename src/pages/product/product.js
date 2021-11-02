import $ from 'jquery';
import 'owl.carousel';

import Diagram from '@/components/diagram/diagram';
import Header from '@/components/header/header';
import Review from '@/components/review/review';

require('../../entry');

require('@/components/infographics/infographics');
require('@/components/list/list');
require('@/components/heading/heading');
require('@/components/form/room-reservation/room-reservation');

require('./product.scss');

$(document).ready(() => {
  new Header($('.js-header'));

  $('.js-product__carousel').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true,
    });
  });

  $('.js-product .js-diagram').each(function () {
    new Diagram($(this));
  });

  $('.js-product .js-review').each(function () {
    new Review($(this));
  });
});

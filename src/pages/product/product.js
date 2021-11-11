import $ from 'jquery';
import 'owl.carousel';

import '@/shared/base/base';
import Diagram from '@/components/diagram/diagram';
import Header from '@/components/header/header';
import Review from '@/components/review/review';
import '@/components/infographic/infographic';
import '@/components/list/list';
import '@/components/heading/heading';
import RoomReservation from '@/components/form/room-reservation/room-reservation';

import './product.scss';

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

  $('.js-room-reservation').each(function () {
    new RoomReservation($(this));
  });
});

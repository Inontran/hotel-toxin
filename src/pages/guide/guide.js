import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import RoomReservation from '@/components/form/room-reservation/room-reservation';
import RoomSearch from '@/components/form/room-search/room-search';
import Dropdown from '@/components/dropdown/dropdown';
import CardProduct from '@/components/card-product/card-product';
import Diagram from '@/components/diagram/diagram';
import Expander from '@/components/expander/expander';

require('../../entry');
require('./guide.scss');

require('@/components/button/button');
require('@/components/input-text/input-text');
require('@/components/checkbox/checkbox');
require('@/components/like-btn/like-btn');
require('@/components/rate-btn/rate-btn');
require('@/components/slider-range/slider-range');
require('@/components/pagination/pagination');
require('@/components/list/list');
require('@/components/infographics/infographics');
require('@/components/review/review');
require('@/components/dropdown/dropdown');
require('@/components/heading/heading');
require('@/components/radio/radio');
require('@/components/form/subscription/subscription');
require('@/components/form/site-registration/site-registration');
require('@/components/form/site-login/site-login');
require('@/components/form/room-search/room-search');

$(() => {
  const $body = $('body');

  new AirDatepicker($('#example-datepicker'));
  new AirDatepicker($('#example-datepicker2'));

  $('.js-room-reservation').each(function() {
    new RoomReservation($(this));
  });

  $('.js-room-search').each(function() {
    new RoomSearch($(this));
  });

  // закрытие dropdown по клику вне этого dropdown
  $body.on('click', '*', (event) => {
    if (!$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown')) {
      $('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });

  new Dropdown($('#example-dropdown'));
  new Dropdown($('#example-dropdown2'));
  new Dropdown($('#example-dropdown3'));

  $('.js-card-product').each(function() {
    new CardProduct($(this));
  });

  $('.js-diagram').each(function () {
    new Diagram($(this));
  });

  $('.js-expander').each(function() {
    new Expander($(this));
  });
});

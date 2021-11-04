import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import Dropdown from '@/components/dropdown/dropdown';
import CardProduct from '@/components/card-product/card-product';
import Diagram from '@/components/diagram/diagram';
import Expander from '@/components/expander/expander';
import Header from '@/components/header/header';
import RoomReservation from '@/components/form/room-reservation/room-reservation';
import RoomSearch from '@/components/form/room-search/room-search';
import LikeBtn from '@/components/like-btn/like-btn';
import Review from '@/components/review/review';
import RateBtn from '@/components/rate-btn/rate-btn';
import SliderRange from '@/components/slider-range/slider-range';
import ListCounters from '@/components/list-counters/list-counters';

require('../../entry');

require('@/components/button/button');
require('@/components/input-text/input-text');
require('@/components/checkbox/checkbox');
require('@/components/pagination/pagination');
require('@/components/list/list');
require('@/components/infographics/infographics');
require('@/components/heading/heading');
require('@/components/radio/radio');
require('@/components/form/subscription/subscription');
require('@/components/form/site-registration/site-registration');
require('@/components/form/site-login/site-login');
require('@/components/form/room-search/room-search');

require('./guide.scss');

$(() => {
  const $body = $('body');

  new Header($('.js-header'));

  const dropdownWithDates = new Dropdown($('#example-dropdown3'));
  const exampleAirDatepicker = new AirDatepicker($('#example-datepicker'));
  exampleAirDatepicker.addEventListener('change-air-datepicker', () => {
    const formattedDates = exampleAirDatepicker.getFormattedDates();
    dropdownWithDates.setValue(formattedDates);
    dropdownWithDates.toggle('hide');
  });

  new AirDatepicker($('#example-datepicker2'));

  $('.js-room-reservation').each(function() {
    new RoomReservation($(this));
  });

  $('.js-room-search').each(function() {
    new RoomSearch($(this));
  });

  $('.js-card-product').each(function() {
    new CardProduct($(this));
  });

  $('.js-diagram').each(function () {
    new Diagram($(this));
  });

  $('.js-expander').each(function() {
    new Expander($(this));
  });

  new LikeBtn($('#example-like-btn'));
  new LikeBtn($('#example-like-btn2'));

  new Review($('#example-review'));

  new RateBtn($('#example-rate-btn'));

  new SliderRange($('#example-slider'));

  // закрытие dropdown по клику вне этого dropdown
  $body.on('click', '*', (event) => {
    if (!$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown')) {
      $('.js-dropdown').removeClass('dropdown_aсtivated');
    }
  });
  
  const exampleDropdown = new Dropdown($('#example-dropdown'));
  const exampleListCounters = new ListCounters($('#example-list-counters'));

  exampleListCounters.addEventListener('change-list-counters', function() {
    const formattedOutput = exampleListCounters.getFormattedOutput();
    exampleDropdown.setValue(formattedOutput);
  });

  const exampleDropdown2 = new Dropdown($('#example-dropdown2'));
  const exampleListCounters2 = new ListCounters($('#example-list-counters2'));

  exampleListCounters2.addEventListener('change-list-counters', function() {
    const formattedOutput = exampleListCounters2.getFormattedOutput();
    exampleDropdown2.setValue(formattedOutput);
  });
});

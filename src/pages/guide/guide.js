import $ from 'jquery';

import '@/shared/base/base';
import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import Dropdown from '@/components/dropdown/dropdown';
import CardProduct from '@/components/card-product/card-product';
import Diagram from '@/components/diagram/diagram';
import Expander from '@/components/expander/expander';
import Header from '@/components/header/header';
import LikeBtn from '@/components/like-btn/like-btn';
import Review from '@/components/review/review';
import RateBtn from '@/components/rate-btn/rate-btn';
import SliderRange from '@/components/slider-range/slider-range';
import ListCounters from '@/components/list-counters/list-counters';
import Pagination from '@/components/pagination/pagination';
import '@/components/button/button';
import InputText from '@/components/input-text/input-text';
import '@/components/checkbox/checkbox';
import '@/components/list/list';
import '@/components/infographic/infographic';
import '@/components/heading/heading';
import '@/components/radio/radio';
import '@/components/footer/footer';
import RoomReservation from '@/components/form/room-reservation/room-reservation';
import RoomSearch from '@/components/form/room-search/room-search';
import '@/components/form/subscription/subscription';
import '@/components/form/site-registration/site-registration';
import SiteLogin from '@/components/form/site-login/site-login';

import './guide.scss';

$(() => {
  const $body = $('body');

  new Header($('.js-header'));

  const dropdownWithDates = new Dropdown($('#example-dropdown3'));
  const exampleAirDatepicker = new AirDatepicker($('#example-datepicker'));

  function handleDatepickerChange() {
    const formattedDates = exampleAirDatepicker.getFormattedDates();
    dropdownWithDates.setValue(formattedDates);
    dropdownWithDates.toggle('hide');
  }
  exampleAirDatepicker.addEventListener('change-air-datepicker', handleDatepickerChange);

  new AirDatepicker($('#example-datepicker2'));

  $('.js-room-reservation').each(function () {
    new RoomReservation($(this));
  });

  $('.js-room-search').each(function () {
    new RoomSearch($(this));
  });

  $('.js-card-product').each(function () {
    new CardProduct($(this));
  });

  $('.js-diagram').each(function () {
    new Diagram($(this));
  });

  $('.js-expander').each(function () {
    new Expander($(this));
  });

  new InputText($('.js-input-text#input-text-example'));
  new InputText($('.js-input-text#input-text-example2'));

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

  function handleListCountersChange() {
    const formattedOutput = exampleListCounters.getFormattedOutput();
    exampleDropdown.setValue(formattedOutput);
  }

  exampleListCounters.addEventListener('change-list-counters', handleListCountersChange);

  const exampleDropdown2 = new Dropdown($('#example-dropdown2'));
  const exampleListCounters2 = new ListCounters($('#example-list-counters2'));

  function handleListCounters2Change() {
    const formattedOutput = exampleListCounters2.getFormattedOutput();
    exampleDropdown2.setValue(formattedOutput);
  }

  exampleListCounters2.addEventListener('change-list-counters', handleListCounters2Change);

  new Pagination($('.js-pagination'));

  $('.js-site-login').each(function () {
    new SiteLogin($(this));
  });
});

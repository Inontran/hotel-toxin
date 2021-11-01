import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import RoomReservation from '@/components/form/room-reservation/room-reservation';
import RoomSearch from '@/components/form/room-search/room-search';

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
require('@/components/expander/expander');
require('@/components/infographics/infographics');
require('@/components/review/review');
require('@/components/dropdown/dropdown');
require('@/components/card-product/card-product');
require('@/components/chart/chart');
require('@/components/heading/heading');
require('@/components/radio/radio');
require('@/components/form/subscription/subscription');
require('@/components/form/site-registration/site-registration');
require('@/components/form/site-login/site-login');
require('@/components/form/room-search/room-search');

$(() => {
  new AirDatepicker($('#example-datepicker'));
  new AirDatepicker($('#example-datepicker2'));

  $('.js-room-reservation').each(function() {
    new RoomReservation($(this));
  });

  $('.js-room-search').each(function() {
    new RoomSearch($(this));
  });
});

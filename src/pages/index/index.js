import $ from 'jquery';

import '@/shared/base/base';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import RoomSearch from '@/components/form/room-search/room-search';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
  new RoomSearch($('.js-room-search'));

  new Footer($('.js-footer'));
});

import $ from 'jquery';

import '@/shared/base/base';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import RoomSearch from '@/components/form/room-search/room-search';

import './index.scss';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
  new RoomSearch($('.js-room-search'));
});

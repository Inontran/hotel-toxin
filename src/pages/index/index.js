import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import RoomSearch from '@/components/form/room-search/room-search';

require('@/shared/base/base.js');

require('./index.scss');

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
  new RoomSearch($('.js-room-search'));
});

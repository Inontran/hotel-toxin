import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';
import RoomSearch from '@/components/form/room-search/room-search';

require('../../entry');

require('./index.scss');

$(() => {
  new FirstDisplay($('.js-first-display'));
  new RoomSearch($('.js-room-search'));
});

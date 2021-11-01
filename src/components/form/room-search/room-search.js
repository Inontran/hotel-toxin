import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';

require('@/components/dropdown/dropdown');
require('@/components/button/button');
require('@/components/heading/heading');

require('./room-search.scss');

class RoomSearch {
  _$roomSearch;
  _airDatepicker;

  constructor($roomSearch) {
    this._$roomSearch = $roomSearch;
    this._init();
  }

  _init() {
    const $airDatepicker = $('.js-air-datepicker', this._$roomSearch);
    this._airDatepicker = new AirDatepicker($airDatepicker);
  }
}

export default RoomSearch

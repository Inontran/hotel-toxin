import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import Dropdown from '@/components/dropdown/dropdown';

require('@/components/button/button');
require('@/components/heading/heading');

require('./room-reservation.scss');

class RoomReservation {
  _$roomReservation;
  _airDatepicker;

  constructor($roomReservation) {
    this._$roomReservation = $roomReservation;
    this._init();
  }

  _init() {
    const $airDatepicker = $('.js-air-datepicker', this._$roomReservation);
    this._airDatepicker = new AirDatepicker($airDatepicker);

    $('.js-dropdown', this._$roomReservation).each(function() {
      new Dropdown($(this));
    });
  }
}

export default RoomReservation

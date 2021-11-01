import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';

require('@/components/dropdown/dropdown');
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
  }
}

export default RoomReservation

import $ from 'jquery';

import AirDatepicker from '@/components/air-datepicker/air-datepicker';
import Dropdown from '@/components/dropdown/dropdown';

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

    this._dropdownWithDateArrival = new Dropdown($('.js-dropdown_with-date-arrival', this._$roomSearch));
    this._dropdownWithDateDeparture = new Dropdown($('.js-dropdown_with-date-departure', this._$roomSearch));

    this._bindEventListeners();
    this._addEventListeners();
  }

  _bindEventListeners() {
    this._handleDatepickerChange = this._handleDatepickerChange.bind(this);
  }

  _addEventListeners() {
    this._airDatepicker.addEventListener('change-air-datepicker', this._handleDatepickerChange);
  }

  _handleDatepickerChange() {
    const formattedDateStart = this._airDatepicker.getFormattedDateStart();
    this._dropdownWithDateArrival.setValue(formattedDateStart);
    this._dropdownWithDateArrival.toggle('hide');

    const formattedDateEnd = this._airDatepicker.getFormattedDateEnd();
    this._dropdownWithDateDeparture.setValue(formattedDateEnd);
    this._dropdownWithDateDeparture.toggle('hide');
  }
}

export default RoomSearch

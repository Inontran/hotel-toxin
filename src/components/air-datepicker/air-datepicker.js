import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

require('@/components/button/button');

require('./air-datepicker.scss');

class AirDatepicker {
  _$airDatepicker;
  _$submitBtnWrapper;
  _$submitBtn;
  _$resetBtnWrapper;
  _$resetBtn;

  constructor($airDatepicker) {
    this._$airDatepicker = $airDatepicker;
    this._init();
  }
  
  _init() {
    moment.lang('ru');

    this._$submitBtnWrapper = $('.js-air-datepicker__btn_type_submit', this._$airDatepicker);
    this._$submitBtn = $('.js-air-datepicker__btn_type_submit .js-button', this._$airDatepicker);
    this._$resetBtnWrapper = $('.js-air-datepicker__btn_type_reset', this._$airDatepicker);
    this._$resetBtn = $('.js-air-datepicker__btn_type_reset .js-button', this._$airDatepicker);

    this._initDatepicker();
    this._bindEventListeners();
    this._addEventListeners();
  }

  _initDatepicker() {
    let minDateOption;
    const attrMinDate = this._$airDatepicker.data('min-date');
    if (attrMinDate === 'today') {
      minDateOption = new Date();
    } else if (attrMinDate) {
      try {
        minDateOption = new Date(attrMinDate);
      } catch (error) {
        console.debug(error);
      }
    }

    const $datepicker = $('.js-air-datepicker__wrapper', this._$airDatepicker);
    $datepicker.datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy',
      },
      minDate: minDateOption,
    });

    let $parentDropdown = this._$airDatepicker.closest('.js-dropdown');
    const targetDropdowns = this._$airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      $parentDropdown = $(targetDropdowns);
    }
    if ($parentDropdown.length) {
      const datesFromInputs = [];
      const $inputDateStart = $('.js-input-text_type_start-date .js-input-text__field', $parentDropdown);
      if ($inputDateStart.length) {
        let valueInputDate = $inputDateStart.val();
        valueInputDate = AirDatepicker.formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      const $inputDateEnd = $('.js-input-text_type_end-date .js-input-text__field', $parentDropdown);
      if ($inputDateEnd.length) {
        let valueInputDate = $inputDateEnd.val();
        valueInputDate = AirDatepicker.formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      if (datesFromInputs.length) {
        $datepicker.data('datepicker').selectDate(datesFromInputs);
      }
    }

    if (!$datepicker.data('datepicker').selectedDates.length) {
      this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
    }
  }

  _bindEventListeners() {
    this._handlerClickSubmitBtn = this._handlerClickSubmitBtn.bind(this);
    this._handlerClickResetBtn = this._handlerClickResetBtn.bind(this);
  }

  _addEventListeners() {
    this._$submitBtn.on('click', this._handlerClickSubmitBtn);
    this._$resetBtn.on('click', this._handlerClickResetBtn);
  }

  _handlerClickResetBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    $('.js-air-datepicker__wrapper', this._$airDatepicker).data('datepicker').clear();

    let $parentDropdown = this._$airDatepicker.closest('.js-dropdown');
    const targetDropdowns = this._$airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      $parentDropdown = $(targetDropdowns);
    }
    if ($parentDropdown.length) {
      $('.js-input-text_type_start-date .js-input-text__field', $parentDropdown).val('');
      $('.js-input-text_type_end-date .js-input-text__field', $parentDropdown).val('');
      $('.js-input-text_date_range .js-input-text__field', $parentDropdown).val('');
    }

    this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
  }

  _handlerClickSubmitBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    let $parentDropdown = $btn.closest('.js-dropdown');
    const dates = $('.js-air-datepicker__wrapper', this._$airDatepicker).data('datepicker').selectedDates;
    const $form = this._$airDatepicker.closest('form');

    const targetDropdowns = this._$airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      if ($form.length) {
        $parentDropdown = $(targetDropdowns, $form);
      } else {
        $parentDropdown = $(targetDropdowns);
      }
    }
    if ($parentDropdown.length) {
      $('.js-input-text_date_range .js-input-text__field', $parentDropdown)
        .val(`${moment(dates[0]).format('D MMM')} - ${moment(dates[1]).format('D MMM')}`);
      $('.js-input-text_type_start-date .js-input-text__field', $parentDropdown)
        .val(moment(dates[0]).format('DD.MM.YYYY'));
      $('.js-input-text_type_end-date .js-input-text__field', $parentDropdown)
        .val(moment(dates[1]).format('DD.MM.YYYY'));

      $parentDropdown.removeClass('dropdown_aсtivated');
    }

    if (dates.length) {
      this._$resetBtnWrapper.removeClass('air-datepicker__btn_hidden');
    } else {
      this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
    }
  }

  static formatDate(strDate) {
    if (!strDate.length) {
      return '';
    }
    
    let strFormattedDate = '';
    try {
      strFormattedDate = strDate.split('.', 3).reverse().join('-');
    } catch (error) {
      console.debug(error);
    }
    return strFormattedDate;
  }
}

export default AirDatepicker;

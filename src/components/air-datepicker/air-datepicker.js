import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

require('./air-datepicker.scss');
require('@/components/button/button');

moment.lang('ru');

$(() => {
  function formatDate(strDate){
    if (!strDate.length) {
      return;
    }

    try {
      const array = strDate.split('.', 3).reverse();
      return array.join('-');
    } catch (error) {
      console.debug(error);
    }
    return;
  }

  const $body = $('body');

  $body.find('.js-air-datepicker.air-datepicker_inline').each(function () {
    const $airDatepicker = $(this);
    const attrMinDate = $airDatepicker.data('min-date');
    let minDateOption;
    if (attrMinDate === 'today') {
      minDateOption = new Date();
    } else if (attrMinDate) {
      try {
        minDateOption = new Date(attrMinDate);
      } catch (error) {
        console.debug(error);
      }
    }

    const $datepicker = $('.js-air-datepicker__wrapper', $airDatepicker);
    $datepicker.datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy',
      },
      minDate: minDateOption,
    });

    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      $parentDropdown = $(targetDropdowns);
    }
    if ($parentDropdown.length) {
      const datesFromInputs = [];
      if ($('.js-input_result-date-start .js-input__field', $parentDropdown).length) {
        let valueInputDate = $('.js-input_result-date-start .js-input__field', $parentDropdown).val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate)); 
      }
      if ($('.js-input_result-date-end .js-input__field', $parentDropdown).length) {
        let valueInputDate = $('.js-input_result-date-end .js-input__field', $parentDropdown).val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate)); 
      }

      if (datesFromInputs.length) {
        $datepicker.data('datepicker').selectDate(datesFromInputs);
      }
    }
    
    if (!$datepicker.data('datepicker').selectedDates.length) {
      $('.js-air-datepicker__btn-wrapper_reset', $airDatepicker).addClass('air-datepicker_hidden');
    }
  });

  function handlerClickClearBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').clear();

    let $parentDropdown = $airDatepicker.closest('.js-dropdown');
    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      $parentDropdown = $(targetDropdowns);
    }
    if ($parentDropdown.length) {
      $('.js-input_result-date-start .js-input__field', $parentDropdown).val('');
      $('.js-input_result-date-end .js-input__field', $parentDropdown).val('');
    }

    $btn.closest('.js-air-datepicker__btn-wrapper_reset').addClass('air-datepicker_hidden');
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__btn-wrapper_reset .js-button',
    handlerClickClearBtn,
  );

  function handlerClickSubmitBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    let $parentDropdown = $btn.closest('.js-dropdown');
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    const dates = $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').selectedDates;

    const targetDropdowns = $airDatepicker.attr('data-target-dropdown');
    if (targetDropdowns) {
      $parentDropdown = $(targetDropdowns);
    }
    if ($parentDropdown.length) {
      $('.js-input_result-dates .js-input__field', $parentDropdown)
        .val(`${moment(dates[0]).format('D MMM')} - ${moment(dates[1]).format('D MMM')}`);
      $('.js-input_result-date-start .js-input__field', $parentDropdown).val(moment(dates[0]).format('DD.MM.YYYY'));
      $('.js-input_result-date-end .js-input__field', $parentDropdown).val(moment(dates[1]).format('DD.MM.YYYY'));
      $parentDropdown.removeClass('dropdown_active');
    }

    if (dates.length) {
      $('.js-air-datepicker__btn-wrapper_reset', $airDatepicker).removeClass('air-datepicker_hidden');
    } else {
      $('.js-air-datepicker__btn-wrapper_reset', $airDatepicker).addClass('air-datepicker_hidden');
    }
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__btn-wrapper_submit .js-button',
    handlerClickSubmitBtn,
  );
});

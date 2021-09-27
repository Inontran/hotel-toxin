import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

require('./air-datepicker.scss');
require('@/components/button/button');

moment.lang('ru');

$(() => {
  function formatDate(strDate) {
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
      const $inputDateStart = $('.js-input-text_date_start .js-input-text__field', $parentDropdown);
      if ($inputDateStart.length) {
        let valueInputDate = $inputDateStart.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      const $inputDateEnd = $('.js-input-text_date_end .js-input-text__field', $parentDropdown);
      if ($inputDateEnd.length) {
        let valueInputDate = $inputDateEnd.val();
        valueInputDate = formatDate(valueInputDate);
        if (valueInputDate) datesFromInputs.push(new Date(valueInputDate));
      }

      if (datesFromInputs.length) {
        $datepicker.data('datepicker').selectDate(datesFromInputs);
      }
    }

    if (!$datepicker.data('datepicker').selectedDates.length) {
      $('.js-air-datepicker__clear-button', $airDatepicker).addClass('air-datepicker_hidden');
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
      $('.js-input-text_date_start .js-input-text__field', $parentDropdown).val('');
      $('.js-input-text_date_end .js-input-text__field', $parentDropdown).val('');
      $('.js-input-text_date_range .js-input-text__field', $parentDropdown).val('');
    }

    $btn.closest('.js-air-datepicker__clear-button').addClass('air-datepicker_hidden');
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__clear-button .js-button',
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
      $('.js-input-text_date_range .js-input-text__field', $parentDropdown)
        .val(`${moment(dates[0]).format('D MMM')} - ${moment(dates[1]).format('D MMM')}`);
      $('.js-input-text_date_start .js-input-text__field', $parentDropdown).val(moment(dates[0]).format('DD.MM.YYYY'));
      $('.js-input-text_date_end .js-input-text__field', $parentDropdown).val(moment(dates[1]).format('DD.MM.YYYY'));
      $parentDropdown.removeClass('dropdown_active');
    }

    const $clearBtn = $('.js-air-datepicker__clear-button', $airDatepicker);
    if (dates.length) {
      $clearBtn.removeClass('air-datepicker_hidden');
    } else {
      $clearBtn.addClass('air-datepicker_hidden');
    }
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__submit-button .js-button',
    handlerClickSubmitBtn,
  );
});

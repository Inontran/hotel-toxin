import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

require('./air-datepicker.scss');
require('@/components/button/button');

moment.lang('ru');

$(() => {
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
        console.log(error);
      }
    }

    $('.js-air-datepicker__wrapper', $airDatepicker).datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy',
      },
      minDate: minDateOption,
    });
  });

  function handlerClickClearBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const $airDatepicker = $btn.closest('.js-air-datepicker');
    $airDatepicker.find('.js-air-datepicker__wrapper').data('datepicker').clear();
  }

  $body.on(
    'click',
    '.js-dropdown .js-air-datepicker .js-air-datepicker__btn-wrapper_clear .js-button',
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
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__btn-wrapper_submit .js-button',
    handlerClickSubmitBtn,
  );
});

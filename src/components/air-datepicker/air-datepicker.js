import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

moment.lang('ru');

$(() => {
  const $body = $('body');

  $body.find('.js-air-datepicker.air-datepicker_inline .js-air-datepicker__wrapper').each(function () {
    $(this).datepicker({
      range: true,
      inline: true,
      // clearButton: true,
      navTitles: {
        days: 'MM yyyy',
      },
    });
  });

  function handlerClickClearBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const $datePicker = $btn.closest('.js-air-datepicker');
    $datePicker.find('.js-air-datepicker__wrapper').data('datepicker').clear();
  }

  $body.on(
    'click',
    '.js-dropdown .js-air-datepicker .js-air-datepicker__btn-wrapper_clear .js-button',
    handlerClickClearBtn,
  );

  function handlerClickSubmitBtn(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const $parentDropdown = $btn.closest('.js-dropdown');
    const dates = $(this).closest('.js-air-datepicker')
      .find('.js-air-datepicker__wrapper')
      .data('datepicker').selectedDates;

    $('.js-input_result-dates .js-input__field', $parentDropdown)
      .val(`${moment(dates[0]).format('D MMM')} - ${moment(dates[1]).format('D MMM')}`);
    $('.js-input_result-date-start .js-input__field', $parentDropdown).val(moment(dates[0]).format('DD.MM.YYYY'));
    $('.js-input_result-date-end .js-input__field', $parentDropdown).val(moment(dates[1]).format('DD.MM.YYYY'));

    $parentDropdown.removeClass('dropdown_active');
  }

  $body.on(
    'click',
    '.js-air-datepicker .js-air-datepicker__btn-wrapper_submit .js-button',
    handlerClickSubmitBtn,
  );
});

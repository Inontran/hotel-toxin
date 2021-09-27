import $ from 'jquery';
import Inputmask from 'inputmask';

require('./input.scss');

$(() => {
  const $inputsDate = $('.js-input.input_mask_date .js-input__field');

  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask($inputsDate);

  $inputsDate.attr('placeholder', 'ДД.ММ.ГГГГ');

  Inputmask('email').mask('.js-input.input_mask_email .js-input__field');
});

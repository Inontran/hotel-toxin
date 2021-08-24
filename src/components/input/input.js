import $ from 'jquery';
import Inputmask from 'inputmask';

$(() => {
  const $inputsDate = $('.js-input.input_mask-date .js-input__field');

  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask($inputsDate);

  $inputsDate.attr('placeholder', 'ДД.ММ.ГГГГ');

  Inputmask('email').mask('.js-input.input_mask-email .js-input__field');
});

import $ from 'jquery';
import Inputmask from 'inputmask';

$(() => {
  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask('.js-input.input_mask-date .js-input__field');

  Inputmask('email').mask('.js-input.input_mask-email .js-input__field');
});

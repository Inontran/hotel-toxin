import $ from 'jquery';
import Inputmask from 'inputmask';

import '@/components/heading/heading';

import './input-text.scss';

$(() => {
  const $inputsDate = $('.js-input-text.input-text_mask_date .js-input-text__field');

  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask($inputsDate);

  $inputsDate.attr('placeholder', 'ДД.ММ.ГГГГ');

  Inputmask('email').mask('.js-input-text.input-text_mask_email .js-input-text__field');
});

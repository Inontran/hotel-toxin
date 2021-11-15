import $ from 'jquery';
import Inputmask from 'inputmask';

import '@/components/heading/heading';

import './input-text.scss';

class InputText {
  _$inputText;
  _$input;

  constructor($inputText) {
    this._$inputText = $inputText;
    this._init();
  }

  getInput() {
    return this._$input;
  }

  getValue() {
    return this._$input.val();
  }

  setValue(newValue) {
    this._$input.val(newValue);
  }

  _init() {
    this._findDOMElements()

    if (this._$inputText.hasClass('input-text_mask_date')) {
      Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
      }).mask(this._$input);

      this._$input.attr('placeholder', 'ДД.ММ.ГГГГ');

    } else if (this._$inputText.hasClass('input-text_mask_email')) {
      Inputmask('email').mask(this._$input);
    }
  }

  _findDOMElements() {
    this._$input = $('.js-input-text__field', this._$inputText);
  }
}

export default InputText

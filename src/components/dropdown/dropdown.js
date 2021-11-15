import $ from 'jquery';

import InputText from '@/components/input-text/input-text';

import './dropdown.scss';

class Dropdown {
  _$dropdown;
  _$toggleBtn;
  _$inputWrapper;
  _inputText;

  constructor($dropdown) {
    this._$dropdown = $dropdown;
    this._init();
  }

  toggle(typeAction) {
    switch (typeAction) {
      case 'hide':
        this._$dropdown.removeClass('dropdown_aсtivated');
        break;

      case 'show':
        this._$dropdown.addClass('dropdown_aсtivated');
        break;
    
      default:
        this._$dropdown.toggleClass('dropdown_aсtivated');
        break;
    }
  }

  getValue() {
    return this._inputText.getValue();
  }

  setValue(newValue) {
    this._inputText.setValue(newValue);
  }

  _init() {
    this._inputText = new InputText($('.js-input-text', this._$dropdown));

    this._findDOMElements();
    this._bindEventListeners();
    this._addEventListeners();
  }
  
  _findDOMElements() {
    this._$toggleBtn = $('.js-dropdown__btn', this._$dropdown);
    this._$inputWrapper = $('.js-dropdown__input-wrapper', this._$dropdown);
  }

  _bindEventListeners() {
    this._handlerClickToggleBtn = this._handlerClickToggleBtn.bind(this);
  }

  _addEventListeners() {
    if (this._$toggleBtn?.length) {
      this._$toggleBtn.on('click', this._handlerClickToggleBtn);
    }
    if (this._$inputWrapper?.length) {
      this._$inputWrapper.on('click', this._handlerClickToggleBtn);
    }
  }

  _handlerClickToggleBtn(event) {
    event.preventDefault();

    let $dropdownsArray = this._$dropdown;

    const targetId = this._$dropdown.attr('data-target');
    if (targetId && $(`.js-dropdown${targetId}`).length) {
      $dropdownsArray = $(`.js-dropdown${targetId}`);
    }

    const dropdownGroup = $dropdownsArray.attr('data-group');

    if (dropdownGroup) {
      const selector = '.js-dropdown';

      $(`${selector}[data-group="${dropdownGroup}"]`).each(function () {
        const $dropdownItem = $(this);
        if ($(selector).index($dropdownItem) === $(selector).index($dropdownsArray)) {
          $dropdownsArray.toggleClass('dropdown_aсtivated');
        } else {
          $dropdownItem.removeClass('dropdown_aсtivated');
        }
      });
    } else {
      $dropdownsArray.toggleClass('dropdown_aсtivated');
    }
  }
}

export default Dropdown

import $ from 'jquery';

import Dropdown from '@/components/dropdown/dropdown';
import '@/components/logo/logo';
import '@/components/button/button';
import '@/components/list/list';

import './header.scss';

class Header {
  _$header;
  _$btnMenu;
  _$btnProfile;

  constructor($header) {
    this._$header = $header;
    this._init();
  }

  _init() {
    this._findDOMElements();
    this._initDropdowns();
    this._bindEventListeners();
    this._addEventListeners();
  }
  
  _findDOMElements(){
    this._$btnMenu = $('.js-header__icon-btn_type_menu', this._$header);
    this._$btnProfile = $('.js-header__icon-btn_type_profile', this._$header);
  }
  
  _initDropdowns() {
    $('.js-dropdown', this._$header).each(function() {
      new Dropdown($(this));
    });
  }

  _bindEventListeners() {
    this._handleBtnShowMainmenuClick = this._handleBtnShowMainmenuClick.bind(this);
    this._handleBtnShowAuthBtnsClick = this._handleBtnShowAuthBtnsClick.bind(this);
  }

  _addEventListeners() {
    this._$btnMenu.on('click', this._handleBtnShowMainmenuClick);
    this._$btnProfile.on('click', this._handleBtnShowAuthBtnsClick);
  }

  _handleBtnShowMainmenuClick() {
    this._$header.removeClass('header_shown-auth-btns');
    this._$header.toggleClass('header_shown-main-menu');
  }

  _handleBtnShowAuthBtnsClick() {
    this._$header.removeClass('header_shown-main-menu');
    this._$header.toggleClass('header_shown-auth-btns');
  }
}

export default Header

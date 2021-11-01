import $ from 'jquery';

import Dropdown from '@/components/dropdown/dropdown';

require('@/components/logo/logo');
require('@/components/button/button');
require('@/components/list/list');

require('./header.scss');

class Header {
  _$header;
  _$btnMenu;
  _$btnProfile;

  constructor($header) {
    this._$header = $header;
    this._init();
  }

  _init() {
    this._$btnMenu = $('.js-header__icon-btn_type_menu', this._$header);
    this._$btnProfile = $('.js-header__icon-btn_type_profile', this._$header);

    $('.js-dropdown', this._$header).each(function() {
      new Dropdown($(this));
    });

    this._bindEventListeners();
    this._addEventListeners();
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

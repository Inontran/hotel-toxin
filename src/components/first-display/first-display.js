import $ from 'jquery';

import './first-display.scss';

class FirstDisplay {
  _$firstDisplay;
  _$headerSite;
  _timerWindowResize = null;

  constructor($firstDisplay) {
    this._$firstDisplay = $firstDisplay;
    this._init();
  }

  _init() {
    this._$headerSite = $('.js-header');

    const isExistHeader = this._$headerSite.length;
    const heightFirstDisplayEqual100vh = this._$firstDisplay[0].offsetHeight === window.innerHeight;
    const resultConditions = isExistHeader && heightFirstDisplayEqual100vh;

    if (resultConditions) {
      this._calcHeightFirstDisplay();
      this._bindEventListeners();
      this._addEventListeners();
    }
  }

  _bindEventListeners() {
    this._handleWindowResize = this._handleWindowResize.bind(this);
  }

  _addEventListeners() {
    $(window).resize(this._handleWindowResize);
  }

  _calcHeightFirstDisplay() {
    const headerHeight = this._$headerSite.outerHeight();
    this._$firstDisplay.css('min-height', `calc(100vh - ${headerHeight}px)`);
  }

  _handleWindowResize(event) {
    if (this._timerWindowResize !== null) {
      clearTimeout(this._timerWindowResize);
    }
    this._timerWindowResize = setTimeout(() => {
      this._calcHeightFirstDisplay();
    }, 10);
  }
}

export default FirstDisplay

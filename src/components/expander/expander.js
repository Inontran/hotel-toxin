import $ from 'jquery';

import './expander.scss';

class Expander {
  _$expander;
  _$btn;

  constructor($expander) {
    this._$expander = $expander;
    this._init();
  }

  _init() {
    this._$btn = $('.js-expander__btn', this._$expander);
    this._handleBtnClick = this._handleBtnClick.bind(this);
    this._$btn.on('click', this._handleBtnClick);
  }

  _handleBtnClick(event) {
    event.preventDefault();
    const $expander = this._$expander;
    const expanderGroup = this._$expander.attr('data-group');

    if (expanderGroup) {
      const selector = '.js-expander';

      $(`${selector}[data-group="${expanderGroup}"]`).each(function () {
        const $currentExpander = $(this);

        if ($(selector).index($currentExpander) === $(selector).index($expander)) {
          $expander.toggleClass('expander_activated');
        } else {
          $currentExpander.removeClass('expander_activated');
        }
      });
    } else {
      $expander.toggleClass('expander_activated');
    }
  }
}

export default Expander

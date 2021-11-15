import InputText from '@/components/input-text/input-text';

import './subscription.scss';

class Subscription {
  _$subscription;

  constructor($subscription) {
    this._$subscription = $subscription;
    this._init();
  }

  _init() {
    $('.js-input-text', this._$subscription).each(function() {
      new InputText($(this));
    });
  }
}

export default Subscription

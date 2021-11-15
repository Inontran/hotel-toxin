import '@/components/logo/logo';
import '@/components/social-nets/social-nets';
import '@/components/heading/heading';
import Subscription from '@/components/form/subscription/subscription';

import './footer.scss';

class Footer {
  _$footer;

  constructor($footer) {
    this._$footer = $footer;
    this._init();
  }

  _init() {
    $('.js-subscription', this._$footer).each(function() {
      new Subscription($(this));
    });
  }
}

export default Footer

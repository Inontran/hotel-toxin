import '@/components/button/button';
import InputText from '@/components/input-text/input-text';
import '@/components/checkbox/checkbox';
import '@/components/heading/heading';
import '@/components/radio/radio';

import './site-registration.scss';

class SiteRegistration {
  _$siteRegistration;

  constructor($siteRegistration) {
    this._$siteRegistration = $siteRegistration;
    this._init();
  }

  _init() {
    $('.js-input-text', this._$siteRegistration).each(function() {
      new InputText($(this));
    });
  }
}

export default SiteRegistration

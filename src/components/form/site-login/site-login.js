import InputText from '@/components/input-text/input-text';
import '@/components/button/button';
import '@/components/heading/heading';

import './site-login.scss';

class SiteLogin {
  _$siteLogin;

  constructor($siteLogin) {
    this._$siteLogin = $siteLogin;
    this._init();
  }

  _init() {
    $('.js-input-text', this._$siteLogin).each(function () {
      new InputText($(this));
    });
  }
}

export default SiteLogin

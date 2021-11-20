import $ from 'jquery';

import '@/shared/base/base';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import SiteLogin from '@/components/form/site-login/site-login';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
  new SiteLogin($('.js-site-login'));
  new Footer($('.js-footer'));
});

import $ from 'jquery';

import '@/shared/base/base';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import SiteRegistration from '@/components/form/site-registration/site-registration';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
  new SiteRegistration($('.js-site-registration'));
  new Footer($('.js-footer'));
});

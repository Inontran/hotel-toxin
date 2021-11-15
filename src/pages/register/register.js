import $ from 'jquery';

import '@/shared/base/base';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import '@/components/footer/footer';
import '@/components/form/site-registration/site-registration';

import './register.scss';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
});

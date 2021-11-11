import $ from 'jquery';

import '@/shared/base/base.js';
import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';
import '@/components/form/site-login/site-login';

import './login.scss';

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
});

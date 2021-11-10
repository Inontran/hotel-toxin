import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';

require('@/shared/base/base.js');

require('@/components/form/site-login/site-login');

require('./login.scss');

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
});

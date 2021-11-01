import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';

require('../../entry');

require('@/components/form/site-login/site-login');

require('./login.scss');

$(() => {
  new FirstDisplay($('.js-first-display'));
});

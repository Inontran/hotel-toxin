import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';

require('../../entry');

require('@/components/form/site-registration/site-registration');

require('./register.scss');

$(() => {
  new FirstDisplay($('.js-first-display'));
});

import $ from 'jquery';

import FirstDisplay from '@/components/first-display/first-display';
import Header from '@/components/header/header';

require('@/shared/base/base.js');

require('@/components/form/site-registration/site-registration');

require('./register.scss');

$(() => {
  new Header($('.js-header'));
  new FirstDisplay($('.js-first-display'));
});

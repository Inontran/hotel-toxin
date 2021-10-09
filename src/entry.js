import $ from 'jquery';
import 'normalize.css';
import './theme/global.scss';

$.RUBLE = '₽';

$.COLORS = {
  dark: '#1f2041',
  dark75: 'rgba(#1f2041, .75)',
  dark50: 'rgba(#1f2041, .50)',
  dark30: 'rgba(#1f2041, .30)',
  dark25: 'rgba(#1f2041, .25)',
  dark10: 'rgba(#1f2041, .1)',
  dark5: 'rgba(#1f2041, .05)',
  white: '#fff',
  purple: '#bc9cff',
  green: '#6fcf97',
  black: '#000',
};

$.GRADIENTS = {
  gradient1: `linear-gradient(180deg, ${$.COLORS.purple} 0%, #8BA4F9 100%)`,
  gradient2: `linear-gradient(180deg, ${$.COLORS.green} 0%, #66D2EA 100%)`,
  gradient3: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gradient4: 'linear-gradient(180deg, #919191 0%, #3D4975 100%)',
};

$.BREAKPOINTS = {
  xxs: 320,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1440,
};

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('@/pages/base/', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
requireAll(require.context('@/components/layout', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
requireAll(require.context('@/components/header', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
requireAll(require.context('@/components/footer', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));

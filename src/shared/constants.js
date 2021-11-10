const RUBLE_SIGN = '₽';

const COLORS = {
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

const GRADIENTS = {
  purple: `linear-gradient(180deg, ${COLORS.purple} 0%, #8BA4F9 100%)`,
  green: `linear-gradient(180deg, ${COLORS.green} 0%, #66D2EA 100%)`,
  yellow: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gray: 'linear-gradient(180deg, #919191 0%, #3D4975 100%)',
};

const BREAKPOINTS = {
  xxs: 320,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1440,
};

export { RUBLE_SIGN, COLORS, GRADIENTS, BREAKPOINTS };

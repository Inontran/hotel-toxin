import $ from 'jquery';

require('./first-display.scss');

$(() => {
  const $headerSite = $('.js-header');
  const $firstDisplay = $('.js-first-display');
  if (!$firstDisplay.length) {
    return;
  }

  const isExistHeader = $headerSite.length;
  const heightFirstDisplayEqual100vh = $firstDisplay[0].offsetHeight === window.innerHeight;
  const resultConditions = isExistHeader && heightFirstDisplayEqual100vh;

  function calcHeightFirstDisplay() {
    const headerHeight = $headerSite.outerHeight();
    $firstDisplay.css('min-height', `calc(100vh - ${headerHeight}px)`);
  }

  if (resultConditions) {
    calcHeightFirstDisplay();

    let timerWindowResize = null;

    $(window).resize(() => {
      if (timerWindowResize !== null) {
        clearTimeout(timerWindowResize);
      }
      timerWindowResize = setTimeout(() => {
        calcHeightFirstDisplay();
      }, 10);
    });
  }
});

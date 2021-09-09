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
  if (resultConditions) {
    function calcHeightFirstDisplay(){
      const headerHeight = $headerSite.outerHeight();
      $firstDisplay.css('min-height', `calc(100vh - ${headerHeight}px)`);
    }
  
    calcHeightFirstDisplay();
  
    let timerWindowResize = null;
  
    $(window).resize(() => {
      if(timerWindowResize !== null) {
        clearTimeout(timerWindowResize);        
      }
      timerWindowResize = setTimeout(function() {
        calcHeightFirstDisplay();
      }, 10);
    });
  }
});

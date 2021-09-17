import $ from 'jquery';
import 'webpack-jquery-ui/slider';
import 'jquery-ui-touch-punch';

require('./slider-range.scss');

$(document).ready(() => {
  $('body').find('.js-slider-range').each(function () {
    const $currentSlider = $(this);
    const $sliderWrapper = $currentSlider.find('.js-slider-range__slider');
    const $currentInput = $currentSlider.find('.js-slider-range__input-result');
    const $inputMinVal = $currentSlider.find('.js-slider-range__min-val');
    const $inputMaxVal = $currentSlider.find('.js-slider-range__max-val');

    const valMin = parseInt($sliderWrapper.attr('data-min'), 10);
    const valMax = parseInt($sliderWrapper.attr('data-max'), 10);
    const val1 = parseInt($sliderWrapper.attr('data-val1'), 10);
    const val2 = parseInt($sliderWrapper.attr('data-val2'), 10);

    function getFormatValues(values) {
      if (!values.length) {
        return;
      }

      let resultInputVal = '';
      resultInputVal += values[0] + $.RUBLE;
      resultInputVal += ' - ';
      resultInputVal += values[1] + $.RUBLE;
      $currentInput.val(resultInputVal);
    }

    function writeValuesToInputs(values) {
      if ($inputMinVal.length && values[0]) {
        $inputMinVal.val(values[0]);
      }
      if ($inputMaxVal.length && values[1]) {
        $inputMaxVal.val(values[1]);
      }
    }

    $sliderWrapper.slider({
      range: true,
      min: valMin,
      max: valMax,
      values: [val1, val2],
      change: (event, ui) => {
        writeValuesToInputs(ui.values);
      },
      slide: (event, ui) => {
        getFormatValues(ui.values);
      },
    });

    getFormatValues($sliderWrapper.slider('values'));
  });
});

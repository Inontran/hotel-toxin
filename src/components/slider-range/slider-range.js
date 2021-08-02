import $ from 'jquery';
import 'webpack-jquery-ui/slider';

$(document).ready(() => {
  $('body').find('.slider-range__slider').each(function () {
    const $currentSlider = $(this);
    const $parent = $currentSlider.closest('.slider-range');
    const $currentInput = $parent.find('.slider-range__input');

    const valMin = parseInt($currentSlider.attr('data-min'), 10);
    const valMax = parseInt($currentSlider.attr('data-max'), 10);
    const val1 = parseInt($currentSlider.attr('data-val1'), 10);
    const val2 = parseInt($currentSlider.attr('data-val2'), 10);

    $currentSlider.slider({
      range: true,
      min: valMin,
      max: valMax,
      values: [val1, val2],
      slide: (event, ui) => {
        let resultInputVal = '';
        resultInputVal += ui.values[0] + $.RUBLE;
        resultInputVal += ' - ';
        resultInputVal += ui.values[1] + $.RUBLE;
        $currentInput.val(resultInputVal);
      },
    });

    let resultInputVal = '';
    resultInputVal += $currentSlider.slider('values', 0) + $.RUBLE;
    resultInputVal += ' - ';
    resultInputVal += $currentSlider.slider('values', 1) + $.RUBLE;
    $currentInput.val(resultInputVal);
  });
});

import $ from 'jquery';
import 'webpack-jquery-ui/slider';
import 'jquery-ui-touch-punch';

import { RUBLE_SIGN } from '@/shared/constants';
import '@/components/heading/heading';

import './slider-range.scss';

class SliderRange {
  _$sliderRange;
  _$sliderWrapper;
  _$formattedOutput;
  _$inputMinVal;
  _$inputMaxVal;

  constructor($sliderRange) {
    this._$sliderRange = $sliderRange;
    this._init();
  }

  _init() {
    this._$sliderWrapper = $('.js-slider-range__slider', this._$sliderRange);
    this._$formattedOutput = $('.js-slider-range__formatted-output', this._$sliderRange);
    this._$inputMinVal = $('.js-slider-range__input-min-val', this._$sliderRange);
    this._$inputMaxVal = $('.js-slider-range__input-max-val', this._$sliderRange);

    const valMin = parseInt(this._$sliderWrapper.attr('data-min'), 10);
    const valMax = parseInt(this._$sliderWrapper.attr('data-max'), 10);
    const val1 = parseInt(this._$sliderWrapper.attr('data-val1'), 10);
    const val2 = parseInt(this._$sliderWrapper.attr('data-val2'), 10);

    this._$sliderWrapper.slider({
      range: true,
      min: valMin,
      max: valMax,
      values: [val1, val2],
      change: (event, ui) => {
        this._writeValuesToInputs(ui.values);
      },
      slide: (event, ui) => {
        this._getFormatValues(ui.values);
      },
    });

    this._getFormatValues(this._$sliderWrapper.slider('values'));
  }

  _getFormatValues(values) {
    if (!values.length) {
      return;
    }

    let resultInputVal = '';
    resultInputVal += values[0] + RUBLE_SIGN;
    resultInputVal += ' - ';
    resultInputVal += values[1] + RUBLE_SIGN;
    this._$formattedOutput.text(resultInputVal);
  }

  _writeValuesToInputs(values) {
    if (this._$inputMinVal.length && values[0]) {
      this._$inputMinVal.val(values[0]);
    }
    if (this._$inputMaxVal.length && values[1]) {
      this._$inputMaxVal.val(values[1]);
    }
  }
}

export default SliderRange

import $ from 'jquery';

import InputNumber from '@/components/input-number/input-number';
import '@/components/button/button';

import './list-counters.scss';

class ListCounters extends EventTarget {
  _$listCounters;
  _$resetBtn;
  _$resetBtnWrapper;
  _$submitBtn;
  _inputNumbers = [];
  _collectionGroupIds;
  _formattedOutput;
  _eventChange;

  constructor($listCounters) {
    super();
    this._$listCounters = $listCounters;
    this._init();
  }

  getFormattedOutput() {
    return this._formattedOutput;
  }

  _init() {
    this._findDOMElements();
    this._eventChange = new CustomEvent('change-list-counters');
    
    this._initInputNumbers();
    
    this._addEventListerners();
    this._calcItemsListCounters();
  }
  
  _initInputNumbers() {
    const that = this;
    this._collectionGroupIds = new Set();
    
    this._$listCounters.find('.js-list-counters__counter').each(function () {
      const $counterItem = $(this);
      const groupItemId = $counterItem.data('group-item-id') !== undefined ? 
      $counterItem.data('group-item-id') : false;
      const $inputNumber = $('.js-input-number', $counterItem);
      if ($inputNumber?.length) {
        const arrayInputNumber = [];
        arrayInputNumber.push(groupItemId);
        arrayInputNumber.push($counterItem);
        arrayInputNumber.push(new InputNumber($inputNumber));
        that._inputNumbers.push(arrayInputNumber);
        
        if (groupItemId !== false) that._collectionGroupIds.add(groupItemId);
      }
    });
  }
  
  _findDOMElements() {
    this._$resetBtn = $('.js-list-counters__btn_type_reset .js-button', this._$listCounters);
    this._$resetBtnWrapper = this._$resetBtn.closest('.js-list-counters__btn_type_reset');
    this._$submitBtn = $('.js-list-counters__btn_type_submit .js-button', this._$listCounters);
  }

  _addEventListerners() {
    if (this._$resetBtn?.length) {
      this._$resetBtn.on('click', () => {
          this._inputNumbers.forEach((inputNumber) => {
            inputNumber[2].setValue(0);
          });
          this._calcItemsListCounters();
        },
      );
    }

    if (this._$submitBtn?.length) {
      this._$submitBtn.on('click', () => {
        this._calcItemsListCounters();
        },
      );
    }
  
    if (this._$listCounters.hasClass('list-counters_simple')) {
      this._inputNumbers.forEach((inputNumber) => {
        inputNumber[2].getInput().on('change', () => {
          this._calcItemsListCounters();
        });
      })
    }
  }

  _calcItemsListCounters() {
    this._formattedOutput = '';
    let countNotZeroItems = 0;
    let summAllCounters = 0;

    // проходим по всем счетчикам, объединенные в группы.
    this._collectionGroupIds.forEach((groupId) => {
      let groupCounterSumm = 0;

      this._inputNumbers.forEach((counter) => {
        if (counter[0] === groupId) {
          const valCounter = parseInt(counter[2].getValue(), 10);
          groupCounterSumm += valCounter;
        }
      });

      if (groupCounterSumm) {
        if (countNotZeroItems !== 0) {
          this._formattedOutput += ', ';
        }
        this._formattedOutput += ListCounters.getTextFromCounter(this._inputNumbers[groupId][1], groupCounterSumm);
        countNotZeroItems += 1;
        summAllCounters += groupCounterSumm;
      }
    });

    // проходим по всем счетчикам, которые не входят ни в одну группу.
    this._inputNumbers.forEach((counter) => {
      if (counter[0] === false) {
        const valCounter = parseInt(counter[2].getValue(), 10);
        if (valCounter) {
          if (countNotZeroItems !== 0) {
            this._formattedOutput += ', ';
          }
          this._formattedOutput += ListCounters.getTextFromCounter(counter[1], valCounter);
          countNotZeroItems += 1;
        }
      }
    });

    if (summAllCounters === 0) {
      if (this._$listCounters.attr('data-default-text')) {
        this._formattedOutput = this._$listCounters.attr('data-default-text');
      } else {
        this._formattedOutput = '';
      }
      this._$resetBtnWrapper.addClass('list-counters__btn_hidden');
    } else {
      this._$resetBtnWrapper.removeClass('list-counters__btn_hidden');
    }

    this.dispatchEvent(this._eventChange);
  }

  static getTextFromCounter($counterItem, valCounter) {
    let resultText = '';

    if (valCounter) {
      const counterLabelText = $('.js-list-counters__counter-label', $counterItem).text();
      const arrayNamesCounter = [
        $counterItem.attr('data-text-one-items') ? $counterItem.attr('data-text-one-items') : counterLabelText,
        $counterItem.attr('data-text-two-items') ? $counterItem.attr('data-text-two-items') : counterLabelText,
        $counterItem.attr('data-text-many-items') ? $counterItem.attr('data-text-many-items') : counterLabelText,
      ];

      resultText += valCounter;
      resultText += ' ';
      resultText += ListCounters.declineWord(valCounter, arrayNamesCounter);
    }

    return resultText;
  }

  static declineWord(number, titles) {
    const numberOfEnding = [2, 0, 1, 1, 1, 2];
    const isLastEnding = number % 100 > 4 && number % 100 < 20;
    const correctEnding = (number % 10 < 5) ? number % 10 : 5;
    return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
  }
}

export default ListCounters

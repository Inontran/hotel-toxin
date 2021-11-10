import $ from 'jquery';

import InputNumber from '@/components/input-number/input-number';
import '@/components/button/button';

import './list-counters.scss';

$(() => {
  // const $body = $('body');

  // $('.js-list-counters .js-input-number').each(function() {
  //   new InputNumber($(this));
  // });

  // function declineWord(number, titles) {
  //   const numberOfEnding = [2, 0, 1, 1, 1, 2];
  //   const isLastEnding = number % 100 > 4 && number % 100 < 20;
  //   const correctEnding = (number % 10 < 5) ? number % 10 : 5;
  //   return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
  // }

  // function calcItemsListCounters($listCounters) {
  //   if (!$listCounters.length) {
  //     return;
  //   }

  //   const $dropdown = $listCounters.closest('.js-dropdown');
  //   if (!$dropdown.length) {
  //     return;
  //   }

  //   let result = '';
  //   let countNotZeroItems = 0;
  //   let summAllCounters = 0;

  //   const collectionGroupIds = new Set();
  //   $listCounters.find('.js-list-counters__counter[data-group-item-id]').each(function () {
  //     const $counterItem = $(this);
  //     collectionGroupIds.add($counterItem.attr('data-group-item-id'));
  //   });

  //   function getTextFromCounter($counterItem, valCounter) {
  //     if (valCounter) {
  //       const counterLabelText = $('.js-list-counters__counter-label', $counterItem).text();
  //       const arrayNamesCounter = [
  //         $counterItem.attr('data-text-one-items') ? $counterItem.attr('data-text-one-items') : counterLabelText,
  //         $counterItem.attr('data-text-two-items') ? $counterItem.attr('data-text-two-items') : counterLabelText,
  //         $counterItem.attr('data-text-many-items') ? $counterItem.attr('data-text-many-items') : counterLabelText,
  //       ];

  //       if (countNotZeroItems !== 0) {
  //         result += ', ';
  //       }

  //       result += valCounter;
  //       result += ' ';
  //       result += declineWord(valCounter, arrayNamesCounter);

  //       countNotZeroItems += 1;
  //     }
  //   }

  //   collectionGroupIds.forEach((id) => {
  //     let groupCounterSumm = 0;
  //     const $groupCountersById = $listCounters.find(`.js-list-counters__counter[data-group-item-id="${id}"]`);
  //     $groupCountersById.each(function () {
  //       const $counterItem = $(this);
  //       const $counterInput = $('.js-input-number__input', $counterItem);
  //       if (!$counterInput.length) {
  //         return;
  //       }

  //       const valCounter = parseInt($counterInput.val(), 10);
  //       groupCounterSumm += valCounter;
  //     });

  //     if (groupCounterSumm) {
  //       getTextFromCounter($groupCountersById.eq(0), groupCounterSumm);
  //       summAllCounters += groupCounterSumm;
  //     }
  //   });

  //   $listCounters.find('.js-list-counters__counter:not([data-group-item-id])').each(function () {
  //     const $counterItem = $(this);
  //     const $counterInput = $('.js-input-number__input', $counterItem);
  //     if (!$counterInput.length) {
  //       return;
  //     }

  //     const valCounter = parseInt($counterInput.val(), 10);
  //     if (valCounter) {
  //       getTextFromCounter($counterItem, valCounter);
  //     }
  //   });

  //   const $btnReset = $('.js-list-counters__btn_type_reset', $listCounters);
  //   if (summAllCounters === 0) {
  //     result = $listCounters.attr('data-default-text') ? $listCounters.attr('data-default-text') : '';
  //     $btnReset.addClass('list-counters__btn_hidden');
  //   } else {
  //     $btnReset.removeClass('list-counters__btn_hidden');
  //   }
  //   $dropdown.find('.js-dropdown__input-wrapper .js-input-text__field').val(result);
  // }

  // $('.js-list-counters:not(.list-counters_simple)', $body).each(function () {
  //   const $listCounters = $(this);
  //   calcItemsListCounters($listCounters);
  // });

  // $body.on(
  //   'click',
  //   '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn_type_reset .js-button',
  //   (event) => {
  //     const $btn = $(event.currentTarget);
  //     const $listCounters = $btn.closest('.js-list-counters');
  //     $listCounters.find('.js-input-number .js-input-number__input').val(0).trigger('change');
  //     calcItemsListCounters($listCounters);
  //   },
  // );

  // $body.on(
  //   'click',
  //   '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn_type_submit .js-button',
  //   (event) => {
  //     const $btn = $(event.currentTarget);
  //     const $listCounters = $btn.closest('.js-list-counters');
  //     calcItemsListCounters($listCounters);
  //   },
  // );

  // $('.js-list-counters.list-counters_simple', $body).each(function () {
  //   const $listCounters = $(this);
  //   calcItemsListCounters($listCounters);
  // });

  // $body.on(
  //   'change',
  //   '.js-list-counters.list-counters_simple .js-input-number .js-input-number__input',
  //   (event) => {
  //     const $listCounters = $(event.currentTarget).closest('.js-list-counters');
  //     calcItemsListCounters($listCounters);
  //   },
  // );
});



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
    this._$resetBtn = $('.js-list-counters__btn_type_reset .js-button', this._$listCounters);
    this._$resetBtnWrapper = this._$resetBtn.closest('.js-list-counters__btn_type_reset');
    this._$submitBtn = $('.js-list-counters__btn_type_submit .js-button', this._$listCounters);

    this._eventChange = new CustomEvent('change-list-counters');

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

    this._addEventListerners();
    this._calcItemsListCounters();
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

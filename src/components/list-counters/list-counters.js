import $ from 'jquery';

import InputNumber from '@/components/input-number/input-number';

require('./list-counters.scss');
require('@/components/button/button');

$(() => {
  const $body = $('body');

  $('.js-list-counters .js-input-number').each(function() {
    new InputNumber($(this));
  });

  function declineWord(number, titles) {
    const numberOfEnding = [2, 0, 1, 1, 1, 2];
    const isLastEnding = number % 100 > 4 && number % 100 < 20;
    const correctEnding = (number % 10 < 5) ? number % 10 : 5;
    return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
  }

  function calcItemsListCounters($listCounters) {
    if (!$listCounters.length) {
      return;
    }

    const $dropdown = $listCounters.closest('.js-dropdown');
    if (!$dropdown.length) {
      return;
    }

    let result = '';
    let countNotZeroItems = 0;
    let summAllCounters = 0;

    const collectionGroupIds = new Set();
    $listCounters.find('.js-list-counters__counter[data-group-item-id]').each(function () {
      const $counterItem = $(this);
      collectionGroupIds.add($counterItem.attr('data-group-item-id'));
    });

    function getTextFromCounter($counterItem, valCounter) {
      if (valCounter) {
        const counterLabelText = $('.js-list-counters__counter-label', $counterItem).text();
        const arrayNamesCounter = [
          $counterItem.attr('data-text-one-items') ? $counterItem.attr('data-text-one-items') : counterLabelText,
          $counterItem.attr('data-text-two-items') ? $counterItem.attr('data-text-two-items') : counterLabelText,
          $counterItem.attr('data-text-many-items') ? $counterItem.attr('data-text-many-items') : counterLabelText,
        ];

        if (countNotZeroItems !== 0) {
          result += ', ';
        }

        result += valCounter;
        result += ' ';
        result += declineWord(valCounter, arrayNamesCounter);

        countNotZeroItems += 1;
      }
    }

    collectionGroupIds.forEach((id) => {
      let groupCounterSumm = 0;
      const $groupCountersById = $listCounters.find(`.js-list-counters__counter[data-group-item-id="${id}"]`);
      $groupCountersById.each(function () {
        const $counterItem = $(this);
        const $counterInput = $('.js-input-number__input', $counterItem);
        if (!$counterInput.length) {
          return;
        }

        const valCounter = parseInt($counterInput.val(), 10);
        groupCounterSumm += valCounter;
      });

      if (groupCounterSumm) {
        getTextFromCounter($groupCountersById.eq(0), groupCounterSumm);
        summAllCounters += groupCounterSumm;
      }
    });

    $listCounters.find('.js-list-counters__counter:not([data-group-item-id])').each(function () {
      const $counterItem = $(this);
      const $counterInput = $('.js-input-number__input', $counterItem);
      if (!$counterInput.length) {
        return;
      }

      const valCounter = parseInt($counterInput.val(), 10);
      if (valCounter) {
        getTextFromCounter($counterItem, valCounter);
      }
    });

    const $btnReset = $('.js-list-counters__btn_type_reset', $listCounters);
    if (summAllCounters === 0) {
      result = $listCounters.attr('data-default-text') ? $listCounters.attr('data-default-text') : '';
      $btnReset.addClass('list-counters__btn_hidden');
    } else {
      $btnReset.removeClass('list-counters__btn_hidden');
    }
    $dropdown.find('.js-dropdown__input-wrapper .js-input-text__field').val(result);
  }

  $('.js-list-counters:not(.list-counters_simple)', $body).each(function () {
    const $listCounters = $(this);
    calcItemsListCounters($listCounters);
  });

  $body.on(
    'click',
    '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn_type_reset .js-button',
    (event) => {
      const $btn = $(event.currentTarget);
      const $listCounters = $btn.closest('.js-list-counters');
      $listCounters.find('.js-input-number .js-input-number__input').val(0).trigger('change');
      calcItemsListCounters($listCounters);
    },
  );

  $body.on(
    'click',
    '.js-list-counters:not(.list-counters_simple) .js-list-counters__btn_type_submit .js-button',
    (event) => {
      const $btn = $(event.currentTarget);
      const $listCounters = $btn.closest('.js-list-counters');
      calcItemsListCounters($listCounters);
    },
  );

  $('.js-list-counters.list-counters_simple', $body).each(function () {
    const $listCounters = $(this);
    calcItemsListCounters($listCounters);
  });

  $body.on(
    'change',
    '.js-list-counters.list-counters_simple .js-input-number .js-input-number__input',
    (event) => {
      const $listCounters = $(event.currentTarget).closest('.js-list-counters');
      calcItemsListCounters($listCounters);
    },
  );
});

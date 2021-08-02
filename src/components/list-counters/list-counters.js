import $ from 'jquery';

$(() => {
  const $body = $('body');

  function calcItemsListCounters($listCounters) {
    if (!$listCounters.length) {
      return 0;
    }

    let summ = 0;
    $listCounters.find('.js-input-number .js-input-number__input').each(function () {
      summ += parseInt($(this).val(), 10);
    });

    if (summ !== 0) {
      $listCounters.find('.js-list-counters__btn-reset').removeClass('list-counters_hidden');
    } else {
      $listCounters.find('.js-list-counters__btn-reset').addClass('list-counters_hidden');
    }

    const $dropdown = $listCounters.closest('.js-dropdown');
    if ($dropdown.length) {
      let text = '';

      if (summ === 0) {
        text = $listCounters.attr('data-default-text') ? $listCounters.attr('data-default-text') : '';
      } else if (summ === 1) {
        text = $listCounters.attr('data-text-one') ? $listCounters.attr('data-text-one') : '';
        text = `${summ} ${text}`;
      } else {
        text = $listCounters.attr('data-text-many') ? $listCounters.attr('data-text-many') : '';
        text = `${summ} ${text}`;
      }
      $dropdown.find('.js-dropdown__input-wrapper .js-input__field').val(text);
    }

    return summ;
  }

  $('.js-list-counters', $body).each(function () {
    const $listCounters = $(this);
    calcItemsListCounters($listCounters);
  });

  $body.on(
    'click',
    '.js-list-counters:not(.js-list-counters_simple) .js-list-counters__btn-reset .js-button',
    (event) => {
      const $btn = $(event.currentTarget);
      const $listCounters = $btn.closest('.js-list-counters');
      $listCounters.find('.js-input-number .js-input-number__input').val(0).trigger('change');
      calcItemsListCounters($listCounters);
    },
  );

  $body.on(
    'click',
    '.js-list-counters:not(.js-list-counters_simple) .js-list-counters__btn-submit .js-button',
    (event) => {
      const $btn = $(event.currentTarget);
      const $listCounters = $btn.closest('.js-list-counters');

      calcItemsListCounters($listCounters);
    },
  );

  function handlerChangeInputNumber(event) {
    const $listCounters = $(event.currentTarget).closest('.js-list-counters');
    const $dropdown = $listCounters.closest('.js-dropdown');
    if (!$dropdown.length) {
      return;
    }

    let result = '';
    let countNotZeroItems = 0;
    $listCounters.find('.js-list-counters__counter').each(function () {
      const $counterItem = $(this);
      const valCounter = $('.js-input-number__input', $counterItem).val();
      if (valCounter !== 0) {
        if (countNotZeroItems !== 0) {
          result += ', ';
        }

        result += valCounter;
        result += ' ';
        result += $('.js-list-counters__counter-label', $counterItem).text();

        countNotZeroItems += 1;
      }
    });

    $dropdown.find('.js-dropdown__input-wrapper .js-input__field').val(result);
  }

  $body.on(
    'change',
    '.js-list-counters.list-counters_simple .js-input-number .js-input-number__input',
    handlerChangeInputNumber,
  );
});

import $ from 'jquery';

require('./expander.scss');

$(() => {
  const $body = $('body');

  function handlerClickCollapse(event) {
    event.preventDefault();
    const $expander = $(event.currentTarget).closest('.js-expander');
    const expanderGroup = $expander.attr('data-group');

    if (expanderGroup !== '' && expanderGroup !== 'undefined') {
      const selector = '.js-expander';

      $body.find(`${selector}[data-group="${expanderGroup}"]`).each(function () {
        const $currentCollapse = $(this);

        if ($(selector).index($currentCollapse) === $(selector).index($expander)) {
          $expander.toggleClass('expander_activated');
        } else {
          $currentCollapse.removeClass('expander_activated');
        }
      });
    } else {
      $expander.toggleClass('expander_activated');
    }
  }

  $body.on('click', '.js-expander .js-expander__btn', handlerClickCollapse);
});

import $ from 'jquery';

require('./collapse.scss');

$(() => {
  const $body = $('body');

  function handlerClickCollapse(event) {
    event.preventDefault();
    const $collapse = $(event.currentTarget).closest('.js-collapse');
    const collapseGroup = $collapse.attr('data-group');

    if (collapseGroup !== '' && collapseGroup !== 'undefined') {
      const selector = '.js-collapse';

      $body.find(`${selector}[data-group="${collapseGroup}"]`).each(function () {
        const $currentCollapse = $(this);

        if ($(selector).index($currentCollapse) === $(selector).index($collapse)) {
          $collapse.toggleClass('collapse_activated');
        } else {
          $currentCollapse.removeClass('collapse_activated');
        }
      });
    } else {
      $collapse.toggleClass('collapse_activated');
    }
  }

  $body.on('click', '.js-collapse .js-collapse__btn', handlerClickCollapse);
});

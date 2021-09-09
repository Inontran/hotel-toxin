import $ from 'jquery';

require('./collapse.scss');

$(() => {
  const $body = $('body');

  function handlerClickCollapse(event) {
    event.preventDefault();
    const $collapse = $(event.currentTarget).closest('.collapse');
    const collapseGroup = $collapse.attr('data-group');

    if (collapseGroup !== '' && collapseGroup !== 'undefined') {
      const selector = '.collapse';

      $body.find(`${selector}[data-group="${collapseGroup}"]`).each(function () {
        const $currentCollapse = $(this);

        if ($(selector).index($currentCollapse) === $(selector).index($collapse)) {
          $collapse.toggleClass('collapse_active');
        } else {
          $currentCollapse.removeClass('collapse_active');
        }
      });
    } else {
      $collapse.toggleClass('collapse_active');
    }
  }

  $body.on('click', '.collapse .collapse__btn', handlerClickCollapse);
});

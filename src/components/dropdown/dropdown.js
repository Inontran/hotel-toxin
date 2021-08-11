import $ from 'jquery';

$(() => {
  const $body = $('body');

  // закрытие dropdown по клику вне этого dropdown
  $body.on('click', '*', (event) => {
    if (!$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown')) {
      $('.js-dropdown').removeClass('dropdown_active');
    }
  });

  function toggleDropdown($dropdown) {
    if (!$dropdown) {
      return;
    }

    const dropdownGroup = $dropdown.attr('data-group');

    if (dropdownGroup !== '' && dropdownGroup !== undefined) {
      const selector = '.js-dropdown';

      $body.find(`${selector}[data-group="${dropdownGroup}"]`).each(function () {
        const $dropdownItem = $(this);
        if ($(selector).index($dropdownItem) === $(selector).index($dropdown)) {
          $dropdown.toggleClass('dropdown_active');
        } else {
          $dropdownItem.removeClass('dropdown_active');
        }
      });
    } else {
      $dropdown.toggleClass('dropdown_active');
    }
  }

  $body.on('click', '.js-dropdown .js-dropdown__input-wrapper, .js-dropdown .js-dropdown__btn', (event) => {
    event.preventDefault();
    const $dropdown = $(event.currentTarget).closest('.js-dropdown');
    toggleDropdown($dropdown);
  });
});

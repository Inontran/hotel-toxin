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
    if (!$dropdown.length) {
      return;
    }
    let $dropdownsArray = $dropdown;

    const targetId = $dropdown.attr('data-target');
    if (targetId && $(`.js-dropdown${targetId}`).length) {
      $dropdownsArray = $(`.js-dropdown${targetId}`);
    }

    const dropdownGroup = $dropdownsArray.attr('data-group');

    if (dropdownGroup !== '' && dropdownGroup !== undefined) {
      const selector = '.js-dropdown';

      $body.find(`${selector}[data-group="${dropdownGroup}"]`).each(function () {
        const $dropdownItem = $(this);
        if ($(selector).index($dropdownItem) === $(selector).index($dropdownsArray)) {
          $dropdownsArray.toggleClass('dropdown_active');
        } else {
          $dropdownItem.removeClass('dropdown_active');
        }
      });
    } else {
      $dropdownsArray.toggleClass('dropdown_active');
    }
  }

  $body.on('click', '.js-dropdown .js-dropdown__input-wrapper, .js-dropdown .js-dropdown__btn', (event) => {
    event.preventDefault();
    const $dropdown = $(event.currentTarget).closest('.js-dropdown');
    toggleDropdown($dropdown);
  });
});

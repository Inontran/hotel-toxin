import $ from 'jquery';

$(document).ready(function(){
  const $body = $('body');

  // закрытие dropdown по клику вне этого dropdown
  $body.on('click', '*', function (event) {
    if( !$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown') ) {
      $('.js-dropdown').removeClass('dropdown_active');
    }
  });


  $body.on('click', '.js-dropdown .js-dropdown__input-wrapper, .js-dropdown .js-dropdown__btn', function(e){
    e.preventDefault();
    const $dropdown = $(this).closest('.js-dropdown');
    toggleDropdown($dropdown);
  });


  function toggleDropdown($dropdown){
    const dropdown_group = $dropdown.attr('data-group');

    if( dropdown_group != '' && dropdown_group !== 'undefined' ){
      const selector = '.js-dropdown';
      
      $body.find(selector + '[data-group="' + dropdown_group + '"]').each(function(){
        const $dropdownItem = $(this);
        if( $(selector).index($dropdownItem) == $(selector).index($dropdown) ){
          $dropdown.toggleClass('dropdown_active');
        }
        else{
          $dropdownItem.removeClass('dropdown_active');
        }
      });
    }
    else{
      $dropdown.toggleClass('dropdown_active');
    }
  }
});
import $ from 'jquery';

$(document).ready(function(){

  checkItemCount();


  // закрытие dropdown по клику вне этого dropdown
  $('body').on('click', '*', function (event) {
    if( !$(event.target).closest('.js-dropdown').length && !$(event.target).hasClass('.js-dropdown') ) {
      $('.js-dropdown').removeClass('dropdown_active');
    }
  });


  $('body').on('click', '.js-dropdown .js-dropdown__input-wrapper', function(e){
    e.preventDefault();
    var $parent = $(this).closest('.js-dropdown');
    var dropdown_group = $parent.attr('data-group');
    
    if( dropdown_group != '' && dropdown_group !== 'undefined' ){
      var selector = '.js-dropdown';
      
      $('body').find(selector + '[data-group="' + dropdown_group + '"]').each(function(){
        if( $(selector).index($(this)) == $(selector).index($parent) ){
          $parent.toggleClass('dropdown_active');
        } else{
          $(this).removeClass('dropdown_active');
        }
      });
    } else{
      $parent.toggleClass('dropdown_active');
    }
  });


  $('body').on('click', '.js-dropdown .js-dropdown__btn-less', function(e){
    e.preventDefault();
    var $btn = $(this);
    var $parent = $btn.closest('.js-dropdown__counter');
    var $input = $parent.find('.js-dropdown__counter-input');
    var countItem = $input.val();
    if( countItem != 0 ){
      countItem--;
      $input.val(countItem);
    }
    checkItemCount($parent, countItem);
  });


  $('body').on('click', '.js-dropdown .js-dropdown__btn-more', function(e){
    e.preventDefault();
    var $btn = $(this);
    var $parent = $btn.closest('.js-dropdown__counter');
    var $input = $parent.find('.js-dropdown__counter-input');
    var countItem = $input.val();

    countItem++;
    $input.val(countItem);

    checkItemCount($parent, countItem);
  });


  $('body').on('click', '.js-dropdown:not(.dropdown_simple) .js-dropdown__btn-reset .js-button', function(){
    var $dropdown = $(this).closest('.js-dropdown');
    $dropdown.find('.js-dropdown__counter-input').val(0);
    checkItemCount();

    var text = $dropdown.attr('data-default-text') ? $dropdown.attr('data-default-text') : '';
    $dropdown.find('.js-dropdown__input-wrapper .js-input__field').val(text);

    $(this).closest('.js-dropdown__btn-reset').addClass('dropdown_hidden');
  });


  $('body').on('click', '.js-dropdown:not(.dropdown_simple) .js-dropdown__btn-submit .js-button', function(){
    var $dropdown = $(this).closest('.js-dropdown');
    var summ = 0;
    $dropdown.find('.js-dropdown__counter-input').each(function(){
      summ += parseInt( $(this).val() );
    });
    if( summ !== 0 ){
      $dropdown.find('.js-dropdown__btn-reset').removeClass('dropdown_hidden');
    } else{
      $dropdown.find('.js-dropdown__btn-reset').addClass('dropdown_hidden');
    }

    let text = '';

    if( summ === 1 ){
      text = $dropdown.attr('data-text-one') ? $dropdown.attr('data-text-one') : '';
    } else{
      text = $dropdown.attr('data-text-many') ? $dropdown.attr('data-text-many') : '';
    }
    $dropdown.find('.js-dropdown__input-wrapper .js-input__field').val(summ + ' ' + text);

    checkItemCount();
  });


  $('body').on('click', '.js-dropdown.dropdown_simple .js-dropdown__btn-more, .js-dropdown.dropdown_simple .js-dropdown__btn-less', function(){
    var $dropdown = $(this).closest('.js-dropdown');
    var result = '';

    $dropdown.find('.js-dropdown__counter').each(function(){
      var val_counter = $(this).find('.js-dropdown__counter-input').val();
      if( val_counter != 0 ){
        result += $(this).find('.js-dropdown__counter-input').val();
        result += ' ';
        result += $(this).find('.js-dropdown__counter-label').text();
        result += ', ';
      }
    });

    $dropdown.find('.js-dropdown__input-wrapper .js-input__field').val(result);
  });


  function checkItemCount($counter, count){
    if( arguments.length > 0 ){
      if( count == 0 ){
        $counter.find('.js-dropdown__btn-less').addClass('dropdown_disabled-btn');
      } else{
        $counter.find('.js-dropdown__btn-less').removeClass('dropdown_disabled-btn');
      }

    }
    else{
      $('body').find('.js-dropdown__btn-less').each(function(){
        var $btn = $(this);
        var $parent = $btn.closest('.js-dropdown__counter');
        var $input = $parent.find('.js-dropdown__counter-input');
        var countItem = $input.val();
        if( countItem == 0 ){
          $btn.addClass('dropdown_disabled-btn');
        } else{
          $btn.removeClass('dropdown_disabled-btn');
        }
      });
    }
  }
});
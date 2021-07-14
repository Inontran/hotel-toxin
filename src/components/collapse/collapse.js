$(document).ready(function(){
  $('body').on('click', '.collapse .collapse__btn', function(e){
    e.preventDefault();
    var $parent = $(this).closest('.collapse');
    var collapse_group = $parent.attr('data-group');
    
    if( collapse_group != '' && collapse_group !== 'undefined' ){
      var selector = '.collapse';
      
      $('body').find(selector + '[data-group="' + collapse_group + '"]').each(function(){
        if( $(selector).index( $(this) ) == $(selector).index($parent) ){
          $parent.toggleClass('collapse_active');
        } else{
          $(this).removeClass('collapse_active');
        }
      });
    } else{
      $parent.toggleClass('collapse_active');
    }
  });
});
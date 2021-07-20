import $ from 'jquery';

$(document).ready(function(){
  const $body = $('body');
  $body.on('click', '.collapse .collapse__btn', handlerClickCollapse);


  function handlerClickCollapse(event){
    event.preventDefault();
    var $collapse = $(event.currentTarget).closest('.collapse');
    var collapseGroup = $collapse.attr('data-group');
    
    if( collapseGroup != '' && collapseGroup !== 'undefined' ){
      var selector = '.collapse';
      
      $body.find(selector + '[data-group="' + collapseGroup + '"]').each(function(){
        if( $(selector).index( $(this) ) == $(selector).index($collapse) ){
          $collapse.toggleClass('collapse_active');
        } else{
          $(this).removeClass('collapse_active');
        }
      });
    } else{
      $collapse.toggleClass('collapse_active');
    }
  }
});
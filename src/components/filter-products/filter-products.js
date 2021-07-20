import $ from 'jquery';

$(function(){
  const $body = $('body');

  $body.on('click', '.js-filter-products_hide-filter', handlerClickHideBtn);


  function update_filter_products(){
    // if( $(window).width() < $.BREAKPOINTS.md ){
    if( window.matchMedia('(max-width: ' + $.BREAKPOINTS.md + 'px)').matches ){
      $body.prepend( $('.js-filter-products.filter-products_mob-md') );
    } else{
      $('.js-products__left-column').append( $('.js-filter-products.filter-products_mob-md') );
    }
    return false;
  }

  update_filter_products();


  var timer_filter = null;

  $(window).resize(handlerResizeFilterProducts);

  function handlerResizeFilterProducts(){
    if(timer_filter !== null) {
      clearTimeout(timer_filter);        
    }
    timer_filter = setTimeout(function() {
      update_filter_products();
    }, 50);
  }


  function handlerClickHideBtn(event){
    event.preventDefault();
    const $btn = $(event.currentTarget);
    $btn.closest('.js-filter-products').removeClass('filter-products_mob-show');

    var scrollTop_body = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;

    $('.js-page__content-wrapper, body').css({
      top: '',
      position: '',
    });
    $body.css({
      overflow: '',
    });
    $('html, body').scrollTop(scrollTop_body);
    $body.attr('data-last-scrolltop', 0);
  }
});
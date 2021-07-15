import $ from 'jquery';

$(function(){
  $('body').on('click', '.products_show-filter', function(event){
    event.preventDefault();
    
    var scrollTop_body = $('html, body').scrollTop() || $(document).scrollTop() || $(window).scrollTop();
    $('body').attr('data-last-scrolltop', scrollTop_body);
    
    $('.page__content-wrapper').css({
      top: '-' + scrollTop_body + 'px',
      position: 'fixed',
    });
    $('body').css({
      top: '0px',
      position: 'fixed',
      overflow: 'hidden',
    });

    $('.filter-products').addClass('filter-products_mob-show');
  });
});
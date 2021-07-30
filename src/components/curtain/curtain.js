import $ from 'jquery';

$(function(){
  const $body = $('body');
  const $html = $('html');
  const $pageContentWrapper = $('.page__content-wrapper');

  $body.on('click', '.js-header__btn_show-curtain', handlerClickCurtain);


  function handlerClickCurtain(event){
    event.preventDefault();
    let scrollTop_body;

    if( ! $body.hasClass('page_show-curtain') ){
      scrollTop_body = $html.scrollTop() || $body.scrollTop() || $(document).scrollTop() || $(window).scrollTop();
      $pageContentWrapper.css({
        top: '-' + scrollTop_body + 'px',
        position: 'fixed',
      });
      $body.css({
        top: '0px',
        position: 'fixed',
      });
      $body.attr('data-last-scrolltop', scrollTop_body);
    } 
    else{
      scrollTop_body = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;

      $pageContentWrapper.css({
        top: '',
        position: '',
      });

      $body.css({
        top: '',
        position: '',
      });

      $html.scrollTop(scrollTop_body);
      $body.scrollTop(scrollTop_body);
      $body.attr('data-last-scrolltop', 0);
    }

    $body.toggleClass('page_show-curtain');
  }
});
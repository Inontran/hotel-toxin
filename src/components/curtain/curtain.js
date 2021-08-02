import $ from 'jquery';

$(() => {
  const $body = $('body');
  const $html = $('html');
  const $pageContentWrapper = $('.page__content-wrapper');

  function handlerClickCurtain(event) {
    event.preventDefault();
    let scrollTopBody;

    if (!$body.hasClass('page_show-curtain')) {
      scrollTopBody = $html.scrollTop() || $body.scrollTop() || $(document).scrollTop() || $(window).scrollTop();
      const scrollTopBodyPx = `-${scrollTopBody}px`;
      $pageContentWrapper.css({
        top: scrollTopBodyPx,
        position: 'fixed',
      });
      $body.css({
        top: '0px',
        position: 'fixed',
      });
      $body.attr('data-last-scrolltop', scrollTopBody);
    } else {
      scrollTopBody = $body.attr('data-last-scrolltop') ? $body.attr('data-last-scrolltop') : 0;

      $pageContentWrapper.css({
        top: '',
        position: '',
      });

      $body.css({
        top: '',
        position: '',
      });

      $html.scrollTop(scrollTopBody);
      $body.scrollTop(scrollTopBody);
      $body.attr('data-last-scrolltop', 0);
    }

    $body.toggleClass('page_show-curtain');
  }

  $body.on('click', '.js-header__btn_show-curtain', handlerClickCurtain);
});

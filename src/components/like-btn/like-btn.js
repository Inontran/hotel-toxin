import $ from 'jquery';

$(() => {
  const $body = $('body');

  function handlerChangeLikeBtn(event){
    const $likeInput = $(event.currentTarget);
    const $likeBtn = $likeInput.closest('.js-like-btn');
    const $likeCount = $likeBtn.find('.js-like-btn__count');
    if( !$likeBtn.length || !$likeCount.length || !$likeInput.length ){
      return;
    }
  
    let countLikes = $likeCount.text();
    countLikes = countLikes ? parseInt(countLikes) : 0;
    if ($likeInput.prop('checked')) {
      countLikes += 1;
    } else{
      countLikes -= 1;
      countLikes = countLikes < 0 ? 0 : countLikes;
    }
  
    $likeCount.text(countLikes);
  }

  $body.on('change', '.js-like-btn__check', handlerChangeLikeBtn);
});
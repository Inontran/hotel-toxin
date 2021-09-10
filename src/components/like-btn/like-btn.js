import $ from 'jquery';

require('./like-btn.scss');

$(() => {
  const $body = $('body');

  function handlerChangeLikeBtn(event) {
    const $likeInput = $(event.currentTarget);
    const $likeBtn = $likeInput.closest('.js-like-btn');
    const $likeCountView = $likeBtn.find('.js-like-btn__count');
    const doExistAllElements = !$likeBtn.length || !$likeCountView.length || !$likeInput.length;
    if (doExistAllElements) {
      return;
    }

    let countLikes = $likeInput.val();
    countLikes = countLikes ? parseInt(countLikes, 10) : 0;
    if ($likeInput.prop('checked')) {
      countLikes += 1;
    } else {
      countLikes -= 1;
      countLikes = countLikes < 0 ? 0 : countLikes;
    }

    $likeInput.val(countLikes);
    $likeCountView.text(countLikes);
  }

  $body.on('change', '.js-like-btn__check', handlerChangeLikeBtn);
});

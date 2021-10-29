import $ from 'jquery';

require('./like-btn.scss');

$(() => {
  const $body = $('body');

  function handlerChangeLikeBtn(event) {
    const $likeInput = $(event.currentTarget);
    const $likeBtn = $likeInput.closest('.js-like-btn');
    const $likeAmountView = $likeBtn.find('.js-like-btn__amount');
    const doExistAllElements = !$likeBtn.length || !$likeAmountView.length || !$likeInput.length;
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
    $likeAmountView.text(countLikes);
  }

  $body.on('change', '.js-like-btn__input', handlerChangeLikeBtn);
});

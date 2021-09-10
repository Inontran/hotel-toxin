import $ from 'jquery';

require('./review.scss');
require('@/components/like-btn/like-btn');

$(() => {
  const $body = $('body');

  $body.on('change', '.js-review .js-like-btn__check', (event) => {
    const $likeBtnInput = $(event.currentTarget);
    const $review = $likeBtnInput.closest('.js-review');
    if (!$review.length) {
      return;
    }

    $review.addClass('js-review_not-iterable');
    const reviewId = $review.attr('data-review-id');
    const $clonesCurrentReview = $(`.js-review:not(.js-review_not-iterable)[data-review-id="${reviewId}"]`);
    if ($clonesCurrentReview.length) {
      const isCheckLikeBtn = $likeBtnInput.prop('checked');
      $('.js-like-btn__check', $clonesCurrentReview).prop('checked', isCheckLikeBtn).trigger('change');
    }
    $review.removeClass('js-review_not-iterable');
  });
});

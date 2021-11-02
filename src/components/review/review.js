import $ from 'jquery';

import LikeBtn from '@/components/like-btn/like-btn';

require('./review.scss');

class Review {
  _$review;

  constructor($review) {
    this._$review = $review;
    this._init();
  }

  _init() {
    $('.js-like-btn', this._$review).each(function() {
      new LikeBtn($(this));
    });
  }
}

export default Review

import $ from 'jquery';

require('./like-btn.scss');

class LikeBtn {
  _$likeBtn;
  _$likeBtnInput;
  _$likeBtnAmountLabel;

  constructor($likeBtn) {
    this._$likeBtn = $likeBtn;
    this._init();
  }

  _init() {
    this._$likeBtnInput = $('.js-like-btn__input', this._$likeBtn);
    this._$likeBtnAmountLabel = $('.js-like-btn__amount', this._$likeBtn);

    this._bindEventListeners();
    this._addEventListeners();
  }

  _bindEventListeners() {
    this._handlerLikeBtnChange = this._handlerLikeBtnChange.bind(this);
  }

  _addEventListeners() {
    this._$likeBtnInput.on('change', this._handlerLikeBtnChange);
  }

  _handlerLikeBtnChange() {
    let countLikes = this._$likeBtnInput.val();
    countLikes = countLikes ? parseInt(countLikes, 10) : 0;
    if (this._$likeBtnInput.prop('checked')) {
      countLikes += 1;
    } else {
      countLikes -= 1;
      countLikes = countLikes < 0 ? 0 : countLikes;
    }

    this._$likeBtnInput.val(countLikes);
    this._$likeBtnAmountLabel.text(countLikes);
  }
}

export default LikeBtn

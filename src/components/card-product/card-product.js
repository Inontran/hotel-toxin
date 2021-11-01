import $ from 'jquery';
import 'owl.carousel';

require('@/components/button/button');
require('@/components/rate-btn/rate-btn');

require('./card-product.scss');

class CardProduct {
  _$card;

  constructor($card) {
    this._$card = $card;
    this._init();
  }

  _init() {
    $('.js-card-product__carousel', this._$card).each(function () {
      $(this).owlCarousel({
        nav: true,
        dots: true,
        items: 1,
        loop: true,
      });
    });
  }
}

export default CardProduct

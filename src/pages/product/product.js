import $ from 'jquery';
import 'owl.carousel';

$(document).ready(() => {
  $('.js-product__carousel').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: false,
    });
  });
});

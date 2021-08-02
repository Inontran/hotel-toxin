import $ from 'jquery';
import 'owl.carousel';

$(() => {
  $('.js-card-product__carousel', 'body').each(function () {
    $(this).owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      loop: true,
    });
  });
});

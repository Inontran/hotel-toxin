import 'owl.carousel';

$(document).ready(function(){
	$('.card-product__carousel', 'body').each(function(){
		$(this).owlCarousel({
			nav: true,
			dots: true,
			items: 1,
		});
	});
});
$(function(){
	$('body').on('click', '.filter-products_hide-filter', function(event){
		event.preventDefault();
		$(this).closest('.filter-products').removeClass('filter-products_mob-show');

		var scrollTop_body = $('body').attr('data-last-scrolltop') ? $('body').attr('data-last-scrolltop') : 0;

		$('.page__content-wrapper, body').css({
			top: '',
			position: '',
		});
		$('body').css({
			overflow: '',
		});
		$('html, body').scrollTop(scrollTop_body);
		$('body').attr('data-last-scrolltop', 0);
	});


	function update_filter_products(){
		// if( $(window).width() < $.BREAKPOINTS.md ){
		if( window.matchMedia('(max-width: ' + $.BREAKPOINTS.md + 'px)').matches ){
			$('body').prepend( $('.filter-products.filter-products_mob-md') );
		} else{
			$('.products__left-column').append( $('.filter-products.filter-products_mob-md') );
		}
		return false;
	}

	update_filter_products();


	var timer_filter = null;

	$(window).resize(function(){
		if(timer_filter !== null) {
			clearTimeout(timer_filter);        
		}
		timer_filter = setTimeout(function() {
			update_filter_products();
		}, 50);
	});
});
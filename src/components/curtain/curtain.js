$(function(){
	$('body').on('click', '.header__btn_show-curtain', function(event){
		event.preventDefault();
		// $('.curtain').toggleClass('curtain_show');

		if( ! $('body').hasClass('page_show-curtain') ){
			var scrollTop_body = $('html, body').scrollTop() || $(document).scrollTop() || $(window).scrollTop();
			$('.page__content-wrapper').css({
				top: '-' + scrollTop_body + 'px',
				position: 'fixed',
			});
			$('body').css({
				top: '0px',
				position: 'fixed',
			});
			$('body').attr('data-last-scrolltop', scrollTop_body);
		} else{
			var scrollTop_body = $('body').attr('data-last-scrolltop') ? $('body').attr('data-last-scrolltop') : 0;

			$('.page__content-wrapper, body').css({
				top: '',
				position: '',
			});
			$('html, body').scrollTop(scrollTop_body);
			$('body').attr('data-last-scrolltop', 0);
		}

		$('body').toggleClass('page_show-curtain');
	});
});
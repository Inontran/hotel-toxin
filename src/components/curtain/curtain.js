$(function(){
	$('body').on('click', '.header__btn_show-curtain', function(event){
		event.preventDefault();
		// $('.curtain').toggleClass('curtain_show');
		$('body').toggleClass('page_show-curtain');
	});

});
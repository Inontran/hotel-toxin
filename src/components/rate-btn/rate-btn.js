$(document).ready(function(){
	$('body').on('click', '.rate-btn .rate-btn__star-item', function(e){
		e.preventDefault();
		var $parent = $(this).closest('.rate-btn');
		var $input_rate = $parent.find('.rate-btn__input');
		var star_rate = $(this).attr('data-number-star');
		var current_rate = $input_rate.val();
		
		$parent.removeClass(`rate-btn_count-0
													rate-btn_count-1 
													rate-btn_count-2 
													rate-btn_count-3 
													rate-btn_count-4 
													rate-btn_count-5`);

		if( star_rate == '1' && current_rate == 1){
			$input_rate.val(0);
			$parent.addClass('rate-btn_count-' + 0);
		} else{
			$input_rate.val(star_rate);
			$parent.addClass('rate-btn_count-' + star_rate);
		}
	});
});
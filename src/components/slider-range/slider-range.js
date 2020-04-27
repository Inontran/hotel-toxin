import 'webpack-jquery-ui/slider';

$(document).ready(function(){
	$('body').find('.slider-range__slider').each(function(){
		var $current_slider = $(this);
		var $parent = $current_slider.closest('.slider-range');
		var $current_input = $parent.find('.slider-range__input');

		var val_min = parseInt($current_slider.attr('data-min'));
		var val_max = parseInt($current_slider.attr('data-max'));
		var val1 = parseInt($current_slider.attr('data-val1'));
		var val2 = parseInt($current_slider.attr('data-val2'));

		$current_slider.slider({
			range: true,
			min: val_min,
			max: val_max,
			values: [ val1, val2 ],
			slide: function( event, ui ) {
				$current_input.val( ui.values[ 0 ] + $.RUBLE + " - " + ui.values[ 1 ] + $.RUBLE );
			}
		});
		
		$current_input.val( $current_slider.slider('values', 0 ) + $.RUBLE +
			' - ' + $current_slider.slider('values', 1 ) + $.RUBLE );

	});
	
});
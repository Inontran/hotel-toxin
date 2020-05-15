import 'air-datepicker';


$(document).ready(function(){
	$('body').find('.air-datepicker .air-datepicker__wrapper').each(function(){
		$(this).datepicker({
			range: true,
			inline: true,
			// clearButton: true,
			navTitles: {
				days: 'MM yyyy',
			},
			
		});
	});

	$('body').on('click', '.air-datepicker .air-datepicker__btn-wrapper_clear', function(){
		$(this).closest('.air-datepicker').find('.air-datepicker__wrapper').data('datepicker').clear();
	});
});
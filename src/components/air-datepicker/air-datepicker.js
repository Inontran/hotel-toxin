import 'air-datepicker';


$(document).ready(function(){
	$('body').find('.air-datepicker .air-datepicker__wrapper').each(function(){
		$(this).datepicker({
			range: true,
			inline: true,
			clearButton: true
		});
	});
});
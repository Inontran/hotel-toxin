// import '~/air-datepicker/dist/js/datepicker.js';
import 'air-datepicker';

$(document).ready(function(){
	$('body').find('.air-datepicker').each(function(){
		$(this).datepicker({
			range: true,
			inline: true
		});
	});
});
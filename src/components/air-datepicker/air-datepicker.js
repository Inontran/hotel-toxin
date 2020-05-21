import 'air-datepicker';
import moment from 'moment';

moment.lang('ru');


$(document).ready(function(){
	$('body').find('.air-datepicker.air-datepicker_inline .air-datepicker__wrapper').each(function(){
		$(this).datepicker({
			range: true,
			inline: true,
			// clearButton: true,
			navTitles: {
				days: 'MM yyyy',
			},
			
		});
	});


	$('body').on('click', '.dropdown .air-datepicker .air-datepicker__btn-wrapper_clear', function(){
		$(this).closest('.air-datepicker').find('.air-datepicker__wrapper').data('datepicker').clear();
	});


	$('body').on('click', '.air-datepicker .air-datepicker__btn-wrapper_submit', function(){
		var $parent_dropdown = $(this).closest('.dropdown');
		var dates = $(this).closest('.air-datepicker')
											.find('.air-datepicker__wrapper')
											.data('datepicker').selectedDates;

		$('.input_result-dates .input__field', $parent_dropdown)
			.val(moment(dates[0]).format('D MMM') + ' - ' + moment(dates[1]).format('D MMM'));
		$('.input_result-date-start .input__field', $parent_dropdown).val(moment(dates[0]).format('DD.MM.YYYY'));
		$('.input_result-date-end .input__field', $parent_dropdown).val(moment(dates[1]).format('DD.MM.YYYY'));

		$parent_dropdown.removeClass('dropdown_active');
	});
});
$(document).ready(function(){

	checkItemCount();


	// закрытие dropdown по клику вне этого dropdown
	$('body').on('click', '*', function (event) {
		if( !$(event.target).closest('.dropdown').length && !$(event.target).hasClass('.dropdown') ) {
			$('.dropdown').removeClass('dropdown_active');
		}
	});


	$('body').on('click', '.dropdown .dropdown__input-wrapper, .dropdown .dropdown__input-wrapper *', function(e){
		e.preventDefault();
		var $parent = $(this).closest('.dropdown');
		var dropdown_group = $parent.attr('data-group');
		
		if( dropdown_group != '' && dropdown_group !== 'undefined' ){
			var selector = '.dropdown';
			
			$('body').find(selector + '[data-group="' + dropdown_group + '"]').each(function(){
				if( $(selector).index( $(this) ) == $(selector).index($parent) ){
					$parent.toggleClass('dropdown_active');
				} else{
					$(this).removeClass('dropdown_active');
				}
			});
		} else{
			$parent.toggleClass('dropdown_active');
		}
	});


	$('body').on('click', '.dropdown .dropdown__btn-less', function(e){
		e.preventDefault();
		var $btn = $(this);
		var $parent = $btn.closest('.dropdown__counter');
		var $input = $parent.find('.dropdown__counter-input');
		var countItem = $input.val();
		if( countItem != 0 ){
			countItem--;
			$input.val(countItem);
		}
		checkItemCount($parent, countItem);
	});


	$('body').on('click', '.dropdown .dropdown__btn-more', function(e){
		e.preventDefault();
		var $btn = $(this);
		var $parent = $btn.closest('.dropdown__counter');
		var $input = $parent.find('.dropdown__counter-input');
		var countItem = $input.val();

		countItem++;
		$input.val(countItem);

		checkItemCount($parent, countItem);
	});


	$('body').on('click', '.dropdown:not(.dropdown_simple) .dropdown__btn-reset .button', function(){
		var $dropdown = $(this).closest('.dropdown');
		$dropdown.find('.dropdown__counter-input').val(0);
		checkItemCount();

		var text = $dropdown.attr('data-default-text') ? $dropdown.attr('data-default-text') : '';
		$dropdown.find('.dropdown__input-wrapper input').val(text);

		$(this).addClass('dropdown_hidden');
	});


	$('body').on('click', '.dropdown:not(.dropdown_simple) .dropdown__btn-submit .button', function(){
		var $dropdown = $(this).closest('.dropdown');
		var summ = 0;
		$dropdown.find('.dropdown__counter-input').each(function(){
			summ += parseInt( $(this).val() );
		});
		if( summ != 0 ){
			$dropdown.find('.dropdown__btn-reset button').removeClass('dropdown_hidden');
		} else{
			$dropdown.find('.dropdown__btn-reset button').addClass('dropdown_hidden');
		}

		let text = '';

		if( summ == 1 ){
			text = $dropdown.attr('data-text-one') ? $dropdown.attr('data-text-one') : '';
		} else{
			text = $dropdown.attr('data-text-many') ? $dropdown.attr('data-text-many') : '';
		}
		$dropdown.find('.dropdown__input-wrapper input').val(summ + ' ' + text);

		checkItemCount();
	});


	$('body').on('click', '.dropdown.dropdown_simple .dropdown__btn-more, .dropdown.dropdown_simple .dropdown__btn-less', function(){
		var $dropdown = $(this).closest('.dropdown');
		var result = '';

		$dropdown.find('.dropdown__counter').each(function(){
			var val_counter = $(this).find('.dropdown__counter-input').val();
			if( val_counter != 0 ){
				result += $(this).find('.dropdown__counter-input').val();
				result += ' ';
				result += $(this).find('.dropdown__counter-label').text();
				result += ', ';
			}
		});

		$dropdown.find('.dropdown__input-wrapper input').val(result);
		console.log(result);
	});


	function checkItemCount($counter, count){
		if( arguments.length > 0 ){
			if( count == 0 ){
				$counter.find('.dropdown__btn-less').addClass('dropdown_disabled-btn');
			} else{
				$counter.find('.dropdown__btn-less').removeClass('dropdown_disabled-btn');
			}

		}
		else{
			$('body').find('.dropdown__btn-less').each(function(){
				var $btn = $(this);
				var $parent = $btn.closest('.dropdown__counter');
				var $input = $parent.find('.dropdown__counter-input');
				var countItem = $input.val();
				if( countItem == 0 ){
					$btn.addClass('dropdown_disabled-btn');
				} else{
					$btn.removeClass('dropdown_disabled-btn');
				}
			});
		}
	}
});
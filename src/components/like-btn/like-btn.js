import * as $ from 'jquery';

$(document).ready(function(){
	$('body').on('change', '.like-btn .like-btn__check', function(){
		$(this).closest('.like-btn').toggleClass('like-btn_active');
	});
});
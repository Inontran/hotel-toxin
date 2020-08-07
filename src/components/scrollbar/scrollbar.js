import SimpleBar from 'simplebar';

$(function(){
	$('.scrollbar', 'body').each(function(){
		try {
			new SimpleBar($(this)[0]);
		} catch (error) {
			console.debug(error);
		}
	});
});
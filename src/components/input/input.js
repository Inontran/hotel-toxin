import Inputmask from 'inputmask';

$(document).ready(function(){
	Inputmask('datetime', {
			inputFormat: 'dd.mm.yyyy', 
			placeholder: 'ДД.ММ.ГГГГ'
		}).mask('.input.input_mask-date .input__field');

	Inputmask('email').mask('.input.input_mask-email .input__field');
});
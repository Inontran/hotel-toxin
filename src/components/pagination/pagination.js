$(document).ready(function(){
	$('body').find('.pagination .pagination__wrapper').each(function(){
		let $pagination = $(this);
		let current_page = $pagination.attr('data-page');
		let perpage = $pagination.attr('data-perpage');
		let count_elements = $pagination.attr('data-elements');
		let $pagination_output = $pagination.closest('.pagination').find('.pagination__output');
		
		let count_elements_output = '';
		if( count_elements >= 100 )
			count_elements_output = '100+';
		else
			count_elements_output = count_elements;

		$pagination.paging(count_elements, { // elements navigatable
			format: '< [ (q-) ncn (-p) ] >', // define how the navigation should look like and in which order onFormat() get's called
			perpage: perpage, // show 10 elements per page
			lapping: 0, // don't overlap pages for the moment
			page: current_page, // start at page, can also be "null" or negative
			onSelect: function (page) {
				// console.log(this);
				let start_count_elements = 0;
				if( this.slice[0] ){
					start_count_elements = this.slice[0];
				} else{
					start_count_elements = 1;
				}
				$pagination_output.text(start_count_elements + ' - ' + this.slice[1] + ' из ' + count_elements_output + ' ' );
			},
			onFormat: function (type) { // Gets called for each character of "format" and returns a HTML representation
				switch (type) {
					case 'block':
						if(!this.active)
							return '<span class="pagination__number">' + this.value + '</span>';
						else if (this.value != this.page)
							return '<a href="#" class="pagination__number">' + this.value + '</a>';
						return '<span class="pagination__number pagination__number_current">' + this.value + '</span>';
			
					case 'next':
						if(this.active || this.page == 1)
							return '<a href="#" class="pagination__next">></a>';
						return '';
			
					case 'prev':
						if(this.active || this.page == this.pages)
							return '<a href="#" class="pagination__prev"><</a>';
						return '';
			
					case 'first':
						if(this.active)
							return '';
						return '';
			
					case 'last':
						if(this.active)
							return '';
						return '';
			
					case "leap":
						if(this.active)
							return '';
						return '';
			
					case 'fill':
						if(this.active)
							return '<span class="pagination__number">...</span>';
						return '';
	
					case 'right':
						if(this.active)
							return '<a href="#" class="pagination__number">' + this.value + '</a>';
						return '';
	
					case 'left':
						if(this.active)
							return '<a href="#" class="pagination__number">' + this.value + '</a>';
						return '';
				}
			},
		});
	});
});
$(document).ready(function(){
	$('.pagination .pagination__wrapper').paging(133, { // make 1337 elements navigatable
		format: '< [ (q-) ncn (-p) ] >', // define how the navigation should look like and in which order onFormat() get's called
		perpage: 10, // show 10 elements per page
		lapping: 0, // don't overlap pages for the moment
		page: 1, // start at page, can also be "null" or negative
		onSelect: function (page) {
			console.log(this);
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
					if(this.active || this.page == 14)
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
		onRefresh: function(){
			console.log('refresh');
		}
	});
});
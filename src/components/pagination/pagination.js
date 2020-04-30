$(document).ready(function(){
	$('.pagination').paging(1337, { // make 1337 elements navigatable
		format: '<(q-)nnncnnn(-p)>', // define how the navigation should look like and in which order onFormat() get's called
		perpage: 10, // show 10 elements per page
		lapping: 1, // don't overlap pages for the moment
		page: 1, // start at page, can also be "null" or negative
		onSelect: function (page) {
			console.log(this);
		},
		onFormat: function (type) { // Gets called for each character of "format" and returns a HTML representation
			switch (type) {
				case 'block':
					if(!this.active)
						return '<span class="disabled">' + this.value + '</span>';
					else if (this.value != this.page)
						return '<em><a href="#' + this.value + '">' + this.value + '</a></em>';
					return '<span class="current">' + this.value + '</span>';
		
				case 'next':
					if(this.active)
						return '<a href="#' + this.value + '" class="next">></a>';
					return '<span class="disabled">></span>';
		
				case 'prev':
					if(this.active)
						return '<a href="#' + this.value + '" class="prev"><</a>';
					return '<span class="disabled"><</span>';
		
				case 'first':
					if(this.active)
						return '<a href="#' + this.value + '" class="first">First</a>';
					return '<span class="disabled">First</span>';
		
				case 'last':
					if(this.active)
						return '<a href="#' + this.value + '" class="last">Last</a>';
					return '<span class="disabled">Last</span>';
		
				case "leap":
					if(this.active)
						return "!!!";
					return "";
		
				case 'fill':
					if(this.active)
						return "...";
					return "";
			}
		}
	});
});
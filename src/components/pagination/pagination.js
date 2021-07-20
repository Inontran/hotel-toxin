import $ from 'jquery';

$(document).ready(function(){
  $('body').find('.pagination .pagination__wrapper').each(function(){
    const $pagination = $(this);
    const currentPage = $pagination.attr('data-page');
    const perpage = $pagination.attr('data-perpage');
    const countElements = $pagination.attr('data-elements');
    const $paginationOutput = $pagination.closest('.pagination').find('.pagination__output');
    
    let countElementsOutput = '';
    if( countElements >= 100 )
      countElementsOutput = '100+';
    else
      countElementsOutput = countElements;

    $pagination.paging(countElements, {
      format: '< [ (q-) ncn (-p) ] >',
      perpage: perpage,
      lapping: 0,
      page: currentPage,
      onSelect: function () {
        let start_countElements = 0;
        if( this.slice[0] ){
          start_countElements = this.slice[0];
        } else{
          start_countElements = 1;
        }
        $paginationOutput.text(start_countElements + ' - ' + this.slice[1] + ' из ' + countElementsOutput + ' ' );
      },
      onFormat: function (type) {
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
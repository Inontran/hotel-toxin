import $ from 'jquery';

$(() => {
  $('body').find('.js-pagination .js-pagination__wrapper').each(function () {
    const $pagination = $(this);
    const currentPage = $pagination.attr('data-page');
    const perpage = $pagination.attr('data-perpage');
    const countElements = $pagination.attr('data-elements');
    const $paginationOutput = $pagination.closest('.js-pagination').find('.js-pagination__output');

    let countElementsOutput = '';
    if (countElements >= 100) {
      countElementsOutput = '100+';
    } else {
      countElementsOutput = countElements;
    }

    $pagination.paging(countElements, {
      format: '< [ (q-) ncn (-p) ] >',
      perpage,
      lapping: 0,
      page: currentPage,
      onSelect: () => {
        let startCountElements = 0;
        const [startEl, endEl] = this.slice;
        if (startEl) {
          startCountElements = startEl;
        } else {
          startCountElements = 1;
        }
        $paginationOutput.text(`${startCountElements} - ${endEl} из ${countElementsOutput} `);
      },
      onFormat: (type) => {
        switch (type) {
          case 'block':
            if (!this.active) {
              return `<span class="pagination__number">${this.value}</span>`;
            }
            if (this.value !== this.page) {
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }
            return `<span class="pagination__number pagination__number_current">${this.value}</span>`;

          case 'next':
            if (this.active || this.page === 1) {
              return '<a href="#" class="pagination__next">></a>';
            }
            return '';

          case 'prev':
            if (this.active || this.page === this.pages) {
              return '<a href="#" class="pagination__prev"><</a>';
            }
            return '';

          case 'first':
            if (this.active) {
              return '';
            }
            return '';

          case 'last':
            if (this.active) {
              return '';
            }
            return '';

          case 'leap':
            if (this.active) {
              return '';
            }
            return '';

          case 'fill':
            if (this.active) {
              return '<span class="pagination__number">...</span>';
            }
            return '';

          case 'right':
            if (this.active) {
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }
            return '';

          case 'left':
            if (this.active) {
              return `<a href="#" class="pagination__number">${this.value}</a>`;
            }
            return '';

          default:
            return this;
        }
      },
    });
  });
});

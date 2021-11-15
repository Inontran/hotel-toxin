import $ from 'jquery';

import './jquery.paging';
import './pagination.scss';

class Pagination {
  _$pagination;
  _$paginationWrapper;
  _$textAmount;

  constructor($pagination) {
    this._$pagination = $pagination;
    this._init();
  }

  _init() {
    this._findDOMElements();
    const currentPage = this._$pagination.attr('data-page');
    const perpage = this._$pagination.attr('data-perpage');
    const countElements = this._$pagination.attr('data-elements');

    let countElementsOutput = '';
    if (countElements >= 100) {
      countElementsOutput = '100+';
    } else {
      countElementsOutput = countElements;
    }

    const that = this;
    this._$paginationWrapper.paging(countElements, {
      format: '< [ (q-) ncn (-p) ] >',
      perpage,
      lapping: 0,
      page: currentPage,
      onSelect() {
        let startCountElements = 0;
        const [startEl, endEl] = this.slice;
        if (startEl) {
          startCountElements = startEl;
        } else {
          startCountElements = 1;
        }
        that._$textAmount.text(`${startCountElements} - ${endEl} из ${countElementsOutput} `);
      },
      onFormat(type) {
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
              return '<a href="#" class="pagination__forward-btn">></a>';
            }
            return '';

          case 'prev':
            if (this.active || this.page === this.pages) {
              return '<a href="#" class="pagination__back-btn"><</a>';
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
  }

  _findDOMElements() {
    this._$textAmount = $('.js-pagination__output', this._$pagination);
    this._$paginationWrapper = $('.js-pagination__wrapper', this._$pagination);
  }
}

export default Pagination

import $ from 'jquery';
import Chart from 'chart.js';

import { COLORS } from '@/shared/constants';

require('./diagram.scss');

class Diagram {
  _$diagram;
  _chart;

  constructor($diagram) {
    this._$diagram = $diagram;
    this._init();
  }

  _init() {
    const $chartPicture = $('.js-diagram__picture', this._$diagram);
    const ctx = $chartPicture.get(0).getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient1.addColorStop(0, COLORS.purple);
    gradient1.addColorStop(1, '#8BA4F9');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, COLORS.green);
    gradient2.addColorStop(1, '#66D2EA');

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient3.addColorStop(0, '#FFE39C');
    gradient3.addColorStop(1, '#FFBA9C');

    const gradient4 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient4.addColorStop(0, '#919191');
    gradient4.addColorStop(1, '#3D4975');

    const num1 = this._$diagram.attr('data-num-1') ? this._$diagram.attr('data-num-1') : 0;
    const num2 = this._$diagram.attr('data-num-2') ? this._$diagram.attr('data-num-2') : 0;
    const num3 = this._$diagram.attr('data-num-3') ? this._$diagram.attr('data-num-3') : 0;
    const num4 = this._$diagram.attr('data-num-4') ? this._$diagram.attr('data-num-4') : 0;

    const data = {
      datasets: [{
        data: [num3, num2, num1, num4],
        backgroundColor: [
          gradient1,
          gradient2,
          gradient3,
          gradient4,
        ],
      }],

      labels: [
        'Удовлетворительно',
        'Хорошо',
        'Великолепно',
        'Разочарован',
      ],
    };

    const options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 10,
          fontColor: COLORS.dark75,
          fontSize: 14,
          fontFamily: "'Montserrat', 'sans-serif'",
        },
      },
      cutoutPercentage: 90,
    };

    this._chart = new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    });
  }
}

export default Diagram

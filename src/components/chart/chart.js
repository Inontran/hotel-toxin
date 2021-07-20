import $ from 'jquery';
import Chart from 'chart.js';

$(document).ready(function(){
  $('body').find('.js-chart').each(function(){
    var $currentChart = $(this);
    var $chartPicture = $currentChart.find('.js-chart__picture');
    var ctx = $chartPicture.get(0).getContext('2d');
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient1.addColorStop(0, $.COLORS.purple);   
    gradient1.addColorStop(1, '#8BA4F9');

    var gradient2 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, $.COLORS.green);   
    gradient2.addColorStop(1, '#66D2EA');

    var gradient3 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient3.addColorStop(0, '#FFE39C');   
    gradient3.addColorStop(1, '#FFBA9C');

    var gradient4 = ctx.createLinearGradient(0, 0, 0, 180);
    gradient4.addColorStop(0, '#919191');   
    gradient4.addColorStop(1, '#3D4975');

    var num1 = $currentChart.attr('data-num-1') ? $currentChart.attr('data-num-1') : 0;
    var num2 = $currentChart.attr('data-num-2') ? $currentChart.attr('data-num-2') : 0;
    var num3 = $currentChart.attr('data-num-3') ? $currentChart.attr('data-num-3') : 0;
    var num4 = $currentChart.attr('data-num-4') ? $currentChart.attr('data-num-4') : 0;

    var data = {
      datasets: [{
        data: [num3, num2, num1, num4],
        backgroundColor: [
          gradient1,
          gradient2,
          gradient3,
          gradient4,
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Удовлетворительно',
        'Хорошо',
        'Великолепно',
        'Разочарован'
      ],
    };

    var options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        display: false,
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 10,
          fontColor: $.COLORS.dark75,
          fontSize: 14,
          fontFamily: "'Montserrat', 'sans-serif'",
        }
      },
      cutoutPercentage: 90
    };

    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  });
});
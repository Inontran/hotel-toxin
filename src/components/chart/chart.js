import Chart from 'chart.js';

var ctx = document.getElementById('myChart').getContext('2d');
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

var data = {
	datasets: [{
		data: [10, 20, 30, 34],
		backgroundColor: [
			gradient3,
			gradient2,
			gradient1,
			gradient4,
		],
	}],

	// These labels appear in the legend and in the tooltips when hovering different arcs
	labels: [
		'Великолепно',
		'Хорошо',
		'Удовлетворительно',
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
	cutoutPercentage: 89
};

$(document).ready(function(){
	if( $('#myChart').length ){

		var myDoughnutChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			options: options
		});
	}
});
import Chart from 'chart.js';

var data = {
	datasets: [{
		data: [10, 20, 30, 34],
		backgroundColor: [
			'rgba(255, 99, 132, 0.5)',
			'rgba(54, 162, 235, 0.5)',
			'rgba(255, 206, 86, 0.5)',
			'rgba(75, 192, 192, 0.5)',
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
			// right: 0,
			top: 0,
			// bottom: 0
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

var ctx = document.getElementById('myChart');

var myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: data,
	options: options
});
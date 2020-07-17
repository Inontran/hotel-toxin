import {GoogleCharts} from 'google-charts';
 
//Load the charts library with a callback
GoogleCharts.load(drawChart);
 
function drawChart() {
 
    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['Chart thing', 'Chart amount'],
        ['Великолепно', 25],
        ['Хорошо', 25],
				['Удовлетворительно', 25],
				['Разочарован', 25]
		]);
		const options = {
			pieHole: 0.9,
			chartArea: {
				left: 7,
				top: 7,
				// width: 260,
				// heigth: 260
			},
			legend: {
				textStyle: {
					color: 'rgba(31,32,65,0.75)',
					fontName: 'Montserrat',
					fontSize: 14,
					alignment: 'start'
				}
			},
			colors: ['#ffe39c', '#6fcf97', '#bc9cff', '#909090'],
			tooltip:{
				ignoreBounds: false,
				text: 'value'
			},
		};

    const pie_1_chart = new GoogleCharts.api.visualization.PieChart( $('.chart .chart__picture').get(0) );
    pie_1_chart.draw(data, options);
}
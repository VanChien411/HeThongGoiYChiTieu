
import React from "react";
import Chart from "chart.js/auto";
import { Line, Bar} from "react-chartjs-2";

window.chartColors = {
	green: '#75c181', // rgba(117,193,129, 1)
	blue: '#5b99ea', // rgba(91,153,234, 1)
  red: '#FF0000',
  yellow:'#FFFF00',
	gray: '#a9b5c9',
	text: '#252930',
	border: '#e7e9ed'
};

const labels = ["Dự kiến"];

const data = {
  labels: labels,
  datasets: [{
            			label: 'Sinh hoạt',
            			backgroundColor: window.chartColors.blue,
            			borderColor: window.chartColors.blue,
            			borderWidth: 1,
            			maxBarThickness: 30,
    
            			data: [
            				50		
            			]
            		},
            		{
            			label: 'Tiếp kiệm',
            			backgroundColor: window.chartColors.yellow,
            			borderColor: window.chartColors.yellow,
            			borderWidth: 1,
            			maxBarThickness: 30,
    
            			data: [
            				23,		
            			]
            		},
            		{
                  label: 'Bắt buộc',
            			backgroundColor: window.chartColors.red,
            			borderColor: window.chartColors.red,
            			borderWidth: 1,
            			maxBarThickness: 30,
    
            			data: [
            				30,		
            			],
                 
            		}
            	]
}


const 	options =  {
          		responsive: true,
          		aspectRatio: 1.5,
          		legend: {
          			position: 'bottom',
          			align: 'end',
          		},
          		title: {
          			display: true,
          			text: 'Chart.js Bar Chart Example'
          		},
          		tooltips: {
          			mode: 'index',
          			intersect: false,
          			titleMarginBottom: 10,
          			bodySpacing: 10,
          			xPadding: 16,
          			yPadding: 16,
          			borderColor: window.chartColors.border,
          			borderWidth: 1,
          			backgroundColor: '#fff',
          			bodyFontColor: window.chartColors.text,
          			titleFontColor: window.chartColors.text,
  
          		}}
              const 	tooltips = {
                        			mode: 'index',
                        			intersect: false,
                        			titleMarginBottom: 10,
                        			bodySpacing: 10,
                        			xPadding: 16,
                        			yPadding: 16,
                        			borderColor: window.chartColors.border,
                        			borderWidth: 1,
                        			backgroundColor: '#fff',
                        			bodyFontColor: window.chartColors.text,
                        			titleFontColor: window.chartColors.text,
                
                        		}
                            const 	scales= {
                                      			xAxes: [{
                                      				display: true,
                                      				gridLines: {
                                      					drawBorder: false,
                                      					color: window.chartColors.border,
                                      				},
                              
                                                    }]
                                                  }
const 	yAxes= [{
          				display: true,
          				gridLines: {
          					drawBorder: false,
          					color: window.chartColors.borders,
          				},
  
  
          			}]
const LineChart = () => {
  return (
    <div>
      <Bar data={data} options={options} tooltips={tooltips} />
    </div>
  );
};

export default LineChart;
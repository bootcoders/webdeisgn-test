$(document).ready(function(){
    var ctx = document.getElementById('lineChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Legend 1',
                fill: false,
                borderColor: '#0066FF',
                data: [0, 100, 500, 150, 600, 200]
            },
            {
                label: 'Legend 2',
                fill: false,
                borderColor: '#96C0FF',
                data: [0, 355, 50, 200, 250, 150]
            }
        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 800,
                        stepSize: 200
                    }
                }]
            }
        }
    });

    
    var ctx_barChart = document.getElementById('barChart');
    var barChart = new Chart(ctx_barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Legend 1',
                data: [15, 30, 13, 15, 20, 30],
                backgroundColor: [
                    '#96C0FF',
                    '#0066FF;',
                    '#96C0FF',
                    '#0066FF;',
                    '#96C0FF',
                    '#0066FF;',
                ]
            }
        ]
        },
        options: {
            legend:{
                display:false
            },
            scales: {
              yAxes: [{
                gridLines: {
                  drawBorder: false,
                  drawOnChartArea:false,
                  color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    display: false,
                  },
              }],
              xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    drawBorder:false,
                    drawOnChartArea:false
                },
                ticks: {
                    display: false,
                }
            }],
              
            },
          },
    });
    
    
});
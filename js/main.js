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
});
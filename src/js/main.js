import '../styles/sass/main.scss';
import '../vendors/chart.js/Chart.css';
import '../vendors/chart.js/Chart.bundle';

window.addEventListener('DOMContentLoaded', () => {

    var ctx = document.getElementById('chart-main');
    var chart = new Chart(ctx, {
        // type of chart to create
        type: 'line',
    
        // data for the dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },
    
        // configuration options
        options: {}
    });

    const revenueCtx = document.getElementById('graph-revenue').getContext('2d');
    const revenueGradientNTIF = revenueCtx.createLinearGradient(800, 0, 800, 400);
    revenueGradientNTIF.addColorStop(0, 'rgba(165, 55, 253, 0.8)');
    revenueGradientNTIF.addColorStop(1, 'rgba(165, 55, 253, 0.1)');
    const revenueGradientTIF = revenueCtx.createLinearGradient(800, 0, 800, 400);
    revenueGradientTIF.addColorStop(0, 'rgba(254, 241, 96, 0.8)');
    revenueGradientTIF.addColorStop(1, 'rgba(254, 241, 96, 0.1)');
    const revenueChart = new Chart(revenueCtx, {

        type: 'line',

        data: {
            labels: ['', '2015', '2016', '2017', '2018', '2019', '2020', ''],
            datasets: [{
                label: 'Non TIF',
                borderColor: 'purple',
                backgroundColor: revenueGradientNTIF,
                data: [11, 10, 18, 11, 8, 21, 12, 9]
            }, {
                label: 'TIF',
                borderColor: 'yellow',
                backgroundColor:revenueGradientTIF,
                data: [30, 33, 28, 30, 22, 29, 26, 31]
            }]
        },

        options: {
            legend: {
                position: 'right',
            },
            hover: {
                mode: 'nearest',
            },
            scales: {
                yAxes: [{
                    id: 'revenueNTIF',
                    type: 'linear',
                    ticks: {
                        min: 0,
                        max: 50
                    }
                }, {
                    id: 'revenueTIF',
                    type: 'linear',
                    ticks: {
                        min: 0,
                        max: 50
                    }
                }]
            }
            
        }
        
    });


    // EXAMPLES BELOW
    const myCtx = document.getElementById('my-canvas').getContext('2d');
    const myChart = new Chart(myCtx, {
        type: 'line',
        data: {
            datasets: [{
                data: [20, 50, 100, 75, 25, 0],
                label: 'Left dataset',

                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
                label: 'Right dataset',

                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis'
            }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        options: {
            scales: {
                yAxes: [{
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left'
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right'
                }]
            }
        }
    });

});




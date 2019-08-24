
const lineChart = document.getElementById('line-chart');
const barChart = document.getElementById('bar-chart');
const doughnutChart = document.getElementById('doughnut-chart');

const myLineChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [750, 1233, 958, 1609, 2110, 1467, 1755, 1190, 1923, 2290, 1990],
      backgroundColor: ['rgba(133, 132, 138, .3)'],
      borderColor: ['rgba(133, 132, 138, 1)'],
      borderWidth: 1,
      lineTension: 0,
      pointRadius: 5,
      pointBorderColor: 'rgba(133, 132, 138, 1)',
      pointBackgroundColor: 'rgb(255, 255, 255)'
    }]
  },
  options: {
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    animation: {
      duration: 0
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawTicks: false
        },
        ticks: {
          padding: 15
        }
      }],
      yAxes: [{
        gridLines: {
          drawTicks: false
        },
        ticks: {
          stepSize: 500,
          padding: 15
        }
      }]
    }
  }
});

const myBarChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [77, 119, 176, 137, 220, 205, 101],
      backgroundColor: [
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)',
        'rgba(133, 132, 138, 1)'
      ]
    }]
  },
  options: {
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    animation: {
      duration: 0
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawTicks: false
        },
        ticks: {
          padding: 15
        }
      }],
      yAxes: [{
        gridLines: {
          drawTicks: false,
        },
        ticks: {
          stepSize: 50,
          padding: 15
        }
      }]
    }
  }
});

const myDoughnutChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      data: [15, 18, 67],
      backgroundColor: [
        'rgb(177, 162, 150)',
        'rgb(85, 122, 149)',
        'rgb(133, 132, 138)',
      ]
    }]
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0
      }
    },
    animation: {
      duration: 0
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        padding: 15
      }
    }
  }
});



const lineChart= document.getElementById('line-chart');
const myChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [500, 1000, 1500, 2000, 2500],
      backgroundColor: ['rgba(133, 132, 138, .3)'],
      borderColor: ['rgba(133, 132, 138, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
    },
  }
});
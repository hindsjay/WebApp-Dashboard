const lineChart = document.getElementById('line-chart');
const barChart = document.getElementById('bar-chart');
const doughnutChart = document.getElementById('doughnut-chart');
const alertBar = document.getElementById('alert');
const bellIcon = document.getElementById('icon-bell');
const bellIconContainer = document.querySelector('.bell-icon-container');
const dropdownContainer = document.querySelector('.bell-dropdown-container');
const bellNotification = document.querySelector('.bell-notification-signal');
const trafficNav = document.querySelector('.traffic-nav');
const trafficNavLinks = document.querySelectorAll('.traffic-nav-link');
const userSearch = document.getElementById('search-user');
const userMessage = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');
const emailToggle = document.getElementById('toggle-email');
const profileToggle = document.getElementById('toggle-profile');
const timezone = document.querySelector('.timezone');
let counter = 0;

const lineChartData = {
  Hourly: [990, 430, 312, 809, 272, 1009, 765, 1223, 1189, 800, 1559],
  Daily: [750, 1233, 958, 1609, 2110, 1467, 1755, 1190, 1923, 2290, 1990],
  Weekly: [1009, 2009, 1309, 1190, 2120, 1290, 1671, 1409, 1801, 1789, 801],
  Monthly: [1771, 1567, 1239, 1667, 1770, 2188, 2377, 1883, 1577, 1501, 1962]
}

const chartDataset = [{
  backgroundColor: ['rgba(133, 132, 138, .3)'],
  borderColor: ['rgba(133, 132, 138, 1)'],
  borderWidth: 1,
  lineTension: 0,
  pointRadius: 5,
  pointBorderColor: 'rgba(133, 132, 138, 1)',
  pointBackgroundColor: 'rgb(255, 255, 255)'
}];

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


if (localStorage.length > 0) {
  let storageEmailValue = localStorage.getItem('Email-Notifications'); 
  let storageProfileValue = localStorage.getItem('Profile-Public'); 

  if (storageEmailValue) {
    if (storageEmailValue === 'off') {
      emailToggle.checked = false;
    } else {
      emailToggle.checked = true;
    }
  }

  if (storageProfileValue) {
    if (storageProfileValue === 'off') {
      profileToggle.checked = false;
    } else {
      profileToggle.checked = true;
    }
  }

  if (localStorage.getItem('Timezone')) {
    timezone.value = localStorage.getItem('Timezone');
  }
}

emailToggle.addEventListener('click', () => {
  if (emailToggle.checked) {
    localStorage.setItem('Email-Notifications', 'on'); 
  } else {
    localStorage.setItem('Email-Notifications', 'off'); 
  }
});

profileToggle.addEventListener('click', () => {
  if (profileToggle.checked) {
    localStorage.setItem('Profile-Public', 'on'); 
  } else {
    localStorage.setItem('Profile-Public', 'off'); 
  }
});

timezone.addEventListener('change', () => {
  localStorage.setItem('Timezone', timezone.value);
});


// to update the chart after new data is passed in
function lineChartRender(chart, data) {
  chart.data.datasets.pop();
  chart.data.datasets.push(data);
  chart.update();
};


// event listener for line graph timeframe links
trafficNav.addEventListener('click', (event) => {
  trafficNavLinks.forEach( (element) => {
    if (element.classList.contains('traffic-timeframe-active') && event.target.classList.contains('traffic-nav-link')) {
      element.classList.remove('traffic-timeframe-active');
    }
    
    if (event.target.innerHTML === element.innerHTML) {
      element.classList.add('traffic-timeframe-active');
      chartDataset[0].data = lineChartData[element.innerHTML];

      lineChartRender(myLineChart, chartDataset[0]);
    }
  });
});


alertBar.innerHTML = `
  <div class="alert-banner">
    <p><strong>Alert:</strong> &nbsp; You have <strong>6</strong> overdue tasks to complete!</p>
    <p class="alert-banner-close">x</p>
  </div>
`;

alertBar.addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('alert-banner-close')) {
    alertBar.style.display = 'none';
  }
});


/*
event listener on bell icon container to handle dropdown menu and removal of dropdown menu notification
when "x" is clicked
*/ 
bellIconContainer.addEventListener('click', (event) => {
  const elementClicked = event.target;
  if (elementClicked === bellIcon) {
    if (dropdownContainer.style.display === '') {
      dropdownContainer.style.display = 'block'
    } else {
      dropdownContainer.style.display = '';
    }
  }

  if (elementClicked.classList.contains('dropdown-close')) {
    const eventTargetPreviousElement = elementClicked.previousElementSibling;
    eventTargetPreviousElement.parentElement.style.display = 'none';
    counter++;
  
    if (counter === 2) {
      dropdownContainer.style.boxShadow = 'none';
      bellNotification.style.display = 'none';
    }
  }
});


const members = [
  'Josh Sullivan',
  'Victoria Chambers',
  'Dale Byrd',
  'Jenny Wong',
  'Kevin John',
  'Sarah Brown',
  'Rich Dorn',
  'Greg Neal',
  'Laura Howard',
  'Stephanie Waters',
  'Dawn Wood',
  'Dan Oliver'
];


$('#search-user').autocomplete({
  source: [members]
});

// alerts user if confirmation is sent or if fields are missing input info
sendButton.addEventListener('click', () => {
  if (userSearch.value === '' && userMessage.value === '') {
    alert('Please fill out user and message fields before sending');
  } else if (userSearch.value === '') {
    alert('Please fill out user field before sending');
  } else if (userMessage.value === '') {
    alert('Please fill out message field before sending');
  } else {
    alert(`Message successfully sent to: ${userSearch.value}`);
    userSearch.value = "";
    userMessage.value = "";
  }
});

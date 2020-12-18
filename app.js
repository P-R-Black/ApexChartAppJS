/// Chart Options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },
    series: [{
        name: 'Population',
        data: [8398748, 3990456, 2705994, 2325502, 1660272, 1584138, 1532233, 1425976, 1345047, 1030119]
    }],
    xaxis: {
        categories: ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    fill: {
        colors: ['#f44336']
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Largest US Cities By Population',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
}

/// Init Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

/// Render Chart
chart.render();

// Event Method Example
document.querySelector('button').addEventListener('click', () => chart.updateOptions({
    plotOptions: {
        bar: {
            horizontal: true
        }
    }
}));
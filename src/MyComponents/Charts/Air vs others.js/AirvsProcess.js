import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const AirvsProcess = (props) => {
    const { airTemp, processTemp } = props;

    const data = {
        labels: airTemp,
        datasets: [
            {
                label: 'Process temperature [K]',
                data: processTemp || [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 5,
                fill: true,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Air Temperature [K]',
                    color: 'white'
                },
                ticks: {
                    color: 'white',
                    callback: function (value) {
                        return `${value}s`; // Format the x-axis labels as seconds
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Process temperature [K]',
                    color: 'white'
                },
                ticks: {
                    callback: function (value) {
                        return value.toFixed(2); // Format the y-axis labels
                    },
                    color: 'white'
                },
                beginAtZero: false
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            title: {
                display: true,
                text: 'Live Air Temperature variations with Process Temperature',
                color: 'white'
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    };
    return (
        <div className="container-line" style={{ height: '40vh', margin: '4rem', width: '100%', backgroundColor: '#2c3e50', padding: '2rem', borderRadius: '8px' }}>
            <Line data={data} options={options} />
        </div>

    )
}

export default AirvsProcess

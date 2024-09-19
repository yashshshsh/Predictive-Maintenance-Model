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

const TorquevsTime = (props) => {
    const { torque } = props;

    // Generate labels dynamically based on the length of torque array
    const labels = torque ? torque.map((_, index) => index) : [];

    const data = {
        labels: labels, // Use dynamically generated labels for the x-axis
        datasets: [
            {
                label: 'Torque [Nm]',
                data: torque || [],
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
                    text: 'Time (seconds)',
                    color: 'white'
                },
                ticks: {
                    color: 'white',
                    callback: function(value) {
                        return `${value}s`; // Format the x-axis labels as seconds
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Torque [Nm]',
                    color: 'white'
                },
                ticks: {
                    callback: function(value) {
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
                text: 'Live Torque Data',
                color: 'white'
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    };

    return (
        <div className="container-line" style={{ height: '40vh', marginTop:'3rem',marginLeft:'4rem', width: '100%', backgroundColor: '#2c3e50', padding: '2rem', borderRadius: '8px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default TorquevsTime;

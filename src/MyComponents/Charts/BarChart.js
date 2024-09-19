import React, { useState, useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

import predData from './predData.json'

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarChart = (props) => {
    const { airTemp, processTemp, rotationalSpeed, torque, toolWear } = props;

    const meanCalculator = (arr) => {
        if (arr.length === 0) {
            return 0;
        }
        const sum = arr.reduce((acc, val) => acc + val, 0); // Add up the numbers
        return sum / arr.length;
    }

    const maxCalculator = (arr) => {
        const maxValue = arr.reduce((max, current) => (current > max ? current : max), arr[0]);
        return maxValue;
    }

    const minCalculator = (arr) => {
        const minValue = arr.reduce((min, current) => (current < min ? current : min), arr[0]);
        return minValue;
    }
    const data = {
        labels: ["Air temperature [K]", "Process temperature [K]", "Rotational speed [rpm]", "Torque [Nm]", "Tool wear [min]"],
        datasets: [
            {
                label: "Mean",
                data: [meanCalculator(airTemp), meanCalculator(processTemp), meanCalculator(rotationalSpeed), meanCalculator(torque), meanCalculator(toolWear)],
                backgroundColor: '#233D4D'
            },
            {
                label: "Max",
                data: [maxCalculator(airTemp), maxCalculator(processTemp), maxCalculator(rotationalSpeed), maxCalculator(torque), maxCalculator(toolWear)],
                backgroundColor: '#FE7F2D'
            },
            {
                label: "Min",
                data: [minCalculator(airTemp), minCalculator(processTemp), minCalculator(rotationalSpeed), minCalculator(torque), minCalculator(toolWear)],
                backgroundColor: '#FCCA46'
            }
        ]
    }

    const options = {
        maintainAspectRatio : false,
        scales : {
            x : {
                ticks : {
                    color : 'white'
                }
            },
            y : {
                ticks : {
                    color : 'white'
                }
            }
        }
    }
    return (
        <div>
            <div className="containerBar" style={{height:'45vh',marginLeft:'2rem'}}>
                <Bar data={data} options={options}/>
            </div>
        </div>
    )
}

export default BarChart


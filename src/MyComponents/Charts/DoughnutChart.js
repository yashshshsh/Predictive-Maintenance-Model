import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
    const { randomFailure, toolWearFailure, powerFailure, overStrainFailure, heatFailure } = props;

    const data = {
        labels: [
            "Heat Dissipation Failure",
            "Overstrain Failure",
            "Power Failure",
            "Tool Wear Failure",
            "Random Failure"
        ],
        datasets: [
            {
                label: 'Failures',
                data: [heatFailure, overStrainFailure, powerFailure, toolWearFailure, randomFailure],
                backgroundColor: [
                    "#233D4D", "#FE7F2D", "#FCCA46", "#A1C181", "#619B8A"
                ]
            }
        ]
    };

    return (
        <div>
            <div className="doughtNut" style={{height:'45vh'}}>
                <Doughnut data={data} />
            </div>
        </div>
    );
}

export default DoughnutChart;

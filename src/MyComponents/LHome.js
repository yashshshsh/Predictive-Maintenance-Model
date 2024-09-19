import React, { useContext, useState } from 'react';
import BarChart from './Charts/BarChart';
import DoughNut from './Charts/DoughnutChart';
import Sidebar from './SideBar';
import StateContext from './StateContext';

const LHome = (props) => {
  const { totalFailure, randomFailure, toolWearFailure, powerFailure, overStrainFailure, heatFailure, totalNonFailure, airTemp, processTemp, toolWear, rotationalSpeed, torque } = props;

  const context = useContext(StateContext);
  const {sideBarOpen, setSideBarOpen} = context;

  const probCalc = (totalFailure, totalNonFailure) => {
    let prob = (totalFailure) / (totalFailure + totalNonFailure);
    return prob.toFixed(4);
  };

  const handleSideBar = () =>{
    setSideBarOpen(true);
  }

  return (
    <div>
      <div className="hero-left" style={{ height: '90vh'}}>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={sideBarOpen}/> 
        <div className="content" style={{ display: 'flex', marginRight: '10rem' }}>
          <div className="bear" style={{ height: 'auto', display: 'flex', fontSize: '1.1rem', textAlign: 'left', color: 'white' }}>
            <div className="button-bars" onClick={handleSideBar} style={{
              display: 'flex',
              marginTop: '0.2rem',
              border: 'white 1px solid',
              justifyContent: 'center',
              paddingRight: '0.5rem',
              height: '2.5rem',
              borderRadius: '10px',
              width: '2.5rem',
              paddingLeft: '10px',
              cursor: 'pointer'
            }}>
              <i style={{ color: 'white', fontSize: '1.4rem', marginTop: '0.5rem' }} className="fa-solid fa-bars"></i>
            </div>
            <div className="text" style={{ width: '28vw', marginLeft: '0.5rem' }}>
              <p>Total no of Failures: {totalFailure}</p>
              <p>Total no of non failures: {totalNonFailure}</p>
              <p>Probablity of failures over non failures: {probCalc(totalFailure, totalNonFailure)}%</p>
              <p>No of Heat Dissipation Failure: {heatFailure}</p>
              <p>No of Overstrain Failure: {overStrainFailure}</p>
              <p>No of Power Failure: {powerFailure}</p>
              <p>No of Tool Wear Failure: {toolWearFailure}</p>
              <p>No of Random Failures: {randomFailure}</p>
            </div>
            <div className="doughNutChart" style={{ marginRight: '1rem' }}>
              <DoughNut powerFailure={powerFailure} overStrainFailure={overStrainFailure} heatFailure={heatFailure} randomFailure={randomFailure} toolWearFailure={toolWearFailure} />
            </div>
          </div>
        </div>
        <div className="bar-container" style={{ backgroundColor: 'black' }}>
          <BarChart airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque} />
        </div>
      </div>
    </div>
  );
};

export default LHome;

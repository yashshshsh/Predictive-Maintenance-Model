import React from 'react';
import AirvsTime from './Charts/P vs Time.js/AirvsTime';
import ProcessvsTime from './Charts/P vs Time.js/ProcessvsTime';
import RotationalvsTime from './Charts/P vs Time.js/RotationalvsTime';
import TorquevsTime from './Charts/P vs Time.js/TorquevsTime';
import ToolwearvsTime from './Charts/P vs Time.js/ToolwearvsTime';

const DetailsComponent = (props) => {
  const { airTemp, processTemp, rotationalSpeed, torque, toolWear } = props;
  return (
    <div className="mac" style={{ height: '100vh', marginLeft: '1rem', width: '77.8vw', position: 'fixed', top: '0', right: '0', borderLeft: '4px solid white', backgroundColor: 'pink', overflowX: 'hidden', transition: '0.5s', padding: '10px' }}>
      <div className="heroby" style={{ height: '80vh' }}>
        
        <div className="first" style={{ display: 'flex', gap: '8rem' }}>
          <div className="Air" style={{ height: '6rem', width: "28vw" }}>
            <AirvsTime airTemp={airTemp} />
          </div>
          <div className="process" style={{ height: '6rem', width: "28vw" }}>
            <ProcessvsTime processTemp={processTemp} />
          </div>
        </div>

        <div className="second" style={{ display: 'flex', gap: '8rem', marginTop: '17rem' }}>
          <div className="RotationalSpeed" style={{ height: '6rem', width: "28vw" }}>
            <RotationalvsTime rotationalSpeed={rotationalSpeed} />
          </div>
          <div className="torque" style={{ height: '6rem', width: "28vw" }}>
            <TorquevsTime torque={torque} />
          </div>
        </div>

        <div className="third" style={{ display: 'flex', gap: '8rem', marginTop: '17rem' }}>
          <div className="toolWear" style={{ height: '6rem', width: "28vw" }}>
            <ToolwearvsTime toolWear={toolWear} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;

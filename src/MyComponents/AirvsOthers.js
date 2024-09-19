import React from 'react'
import AirvsProcess from './Charts/Air vs others.js/AirvsProcess';
import AirvsRotational from './Charts/Air vs others.js/AirvsRotational';
import AirvsTorque from './Charts/Air vs others.js/AirvsTorque';
import AirvsToolwear from './Charts/Air vs others.js/AirvsToolwear';

const AirvsOthers = (props) => {
    const { airTemp, processTemp, rotationalSpeed, torque, toolWear, closeDetails } = props;
    return (
        <div>
            <div style={{ height: '100vh', width: '78vw', position: 'fixed', top: '0', right: '0', backgroundColor: 'lightgrey', overflowX: 'hidden', transition: '0.5s', padding: '10px' }}>
                <div className="hero" style={{ height: '80vh' }}>

                    <div className="first" style={{ display: 'flex', gap: '8rem' }}>
                        <div className="Air" style={{ height: '6rem', width: "28vw" }}>
                            <AirvsProcess airTemp={airTemp} processTemp={processTemp} rotationalSpeed={rotationalSpeed} torque={torque} toolWear={toolWear} />
                        </div>
                        <div className="process" style={{ height: '6rem', width: "28vw" }}>
                            <AirvsRotational airTemp={airTemp} processTemp={processTemp} rotationalSpeed={rotationalSpeed} torque={torque} toolWear={toolWear}/>
                        </div>
                    </div>

                    <div className="second" style={{ display: 'flex', gap: '8rem', marginTop: '17rem' }}>
                        <div className="RotationalSpeed" style={{ height: '6rem', width: "28vw" }}>
                            <AirvsTorque airTemp={airTemp} processTemp={processTemp} rotationalSpeed={rotationalSpeed} torque={torque} toolWear={toolWear}/>
                        </div>
                        <div className="torque" style={{ height: '6rem', width: "28vw" }}>
                            <AirvsToolwear airTemp={airTemp} processTemp={processTemp} rotationalSpeed={rotationalSpeed} torque={torque} toolWear={toolWear}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AirvsOthers

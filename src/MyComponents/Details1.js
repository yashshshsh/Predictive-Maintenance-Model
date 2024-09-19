import React, { useContext } from 'react';
import Sidebar from './SideBar';
import DetailsComponent from './Details';
import StateContext from './StateContext';

const Details1 = (props) => {
    const context = useContext(StateContext);

    const { airTemp, processTemp, rotationalSpeed, torque, toolWear } = props;
    return (
        <><div className="details-container" style={{overflow:'hidden'}}>
            <Sidebar />
            <DetailsComponent airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque} />
        </div>
        </>
    );
}

export default Details1;

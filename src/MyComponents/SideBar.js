import React, { useContext } from 'react';
import StateContext from './StateContext';

const Sidebar = ( props) => {
    const context = useContext(StateContext);
    const {sideBarOpen,setSideBarOpen,detailState1,setDetailState1,detailState2,setDetailState2} = context;

    const handleIconClick = () => {
        setDetailState1(false);
        setDetailState2(false);
        setSideBarOpen(!sideBarOpen);
    }

    const handleDivClick1 = () => {
        setDetailState1(true);
        setDetailState2(false);
    }

    const handleDivClick2 = () => {
        setDetailState1(false);
        setDetailState2(true);
    }
    return (
        <div className="demow" style={{ height: '90vh',backgroundColor:'black', zIndex: '1000', width: sideBarOpen ? '22vw' : '0', position: 'fixed', top: '4rem', left: '0', overflowY: 'auto', overflowX: 'hidden', height: '100vh', transition: '0.3s', padding: sideBarOpen ? '10px' : '0' }}>
            <div className="icon" onClick={handleIconClick} style={{ textAlign: 'left', paddingLeft: '0.5rem', borderBottom: '2px solid black', cursor: 'pointer' }}>
                <i style={{ fontSize: '1.4rem', marginTop: '0.5rem', color: 'white' }} className="fa-solid fa-bars"></i>
            </div>
            <div className="hero" style={{ marginTop: '1rem' }}>
                <div onClick={handleDivClick1} style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="Air temperature [K]">
                    <p>Parameters [K] vs time graph</p>
                </div>
                <div onClick={handleDivClick2} style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="airTempRelation">
                    <p>Air temperature [K] vs others</p>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="processTempRelation">
                    <p>Process temperature [K] vs others</p>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="rotationalRelation">
                    <p>Rotational speed [rpm] vs others</p>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="torqueRelation">
                    <p>Torque [Nm] vs others</p>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white', paddingTop: '1rem', border: '2px solid white', cursor: 'pointer' }} className="toolWearRelation">
                    <p>Tool wear [min] vs others</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

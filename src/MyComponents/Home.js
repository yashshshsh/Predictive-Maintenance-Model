import React, { useContext, useEffect, useState } from 'react';
import LHome from './LHome';
import predData from './Charts/predData.json';
import RHome from './RHome';
import Sidebar from './SideBar';
import DetailsComponent from './Details';
import Details1 from './Details1';
import Details2 from './Details2';
import StateContext from './StateContext';

const Home = () => {
    const [data, setData] = useState(predData);
    const [currData, setCurrData] = useState([]);
    const [predResults, setPredResults] = useState("");
    const [airTemp, setAirTemp] = useState([]);
    const [processTemp, setProcessTemp] = useState([]);
    const [rotationalSpeed, setRotationalSpeed] = useState([]);
    const [torque, setTorque] = useState([]);
    const [toolWear, setToolWear] = useState([]);
    const [totalFailure, setTotalFailure] = useState(0);
    const [totalNonFailure, setTotalNonFailure] = useState(0);
    const [heatFailure, setHeatFailure] = useState(0);
    const [overStrainFailure, setOverStrainFailure] = useState(0);
    const [powerFailure, setPowerFailure] = useState(0);
    const [toolWearFailure, setToolWearFailure] = useState(0);
    const [randomFailure, setRandomFailure] = useState(0);

    const context = useContext(StateContext);
    const {detailState1,detailState2} = context;

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(async () => {
            if (idx < data.length) {
                const obj = data[idx];
                const url = 'http://localhost:4076/modelRequest/sendingReqWData';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "airTemp": obj["Air temperature [K]"],
                        "processTemp": obj["Process temperature [K]"],
                        "rotationalSpeed": obj["Rotational speed [rpm]"],
                        "torque": obj["Torque [Nm]"],
                        "toolWear": obj["Tool wear [min]"]
                    })
                });
                const data1 = await response.json();
                setPredResults(data1.result);
                setCurrData(prevData => [...prevData, obj]);
                setAirTemp(prevData => [...prevData, obj["Air temperature [K]"]]);
                setProcessTemp(prevData => [...prevData, obj["Process temperature [K]"]]);
                setRotationalSpeed(prevData => [...prevData, obj["Rotational speed [rpm]"]]);
                setTorque(prevData => [...prevData, obj["Torque [Nm]"]]);
                setToolWear(prevData => [...prevData, obj["Tool wear [min]"]]);

                switch (data1.result) {
                    case "No failure":
                        setTotalNonFailure(prev => prev + 1);
                        break;
                    case "Heat Dissipation Failure":
                        setHeatFailure(prev => prev + 1);
                        setTotalFailure(prev => prev + 1);
                        break;
                    case "Overstrain Failure":
                        setOverStrainFailure(prev => prev + 1);
                        setTotalFailure(prev => prev + 1);
                        break;
                    case "Power Failure":
                        setPowerFailure(prev => prev + 1);
                        setTotalFailure(prev => prev + 1);
                        break;
                    case "Tool Wear Failure":
                        setToolWearFailure(prev => prev + 1);
                        setTotalFailure(prev => prev + 1);
                        break;
                    case "Random Failure":
                        setRandomFailure(prev => prev + 1);
                        setTotalFailure(prev => prev + 1);
                        break;
                    default:
                        break;
                }
                idx++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [data]);

    return (
        <div>
            <div className="Header" style={{ backgroundColor: '#55BECC', height: '8vh', width: '100%', position: 'fixed', top: '0' }}>
                <h1 style={{color:'white',fontStyle:'Georgia'}}>KERNAL KNIGHTS</h1>
            </div>
            <Sidebar  />
            <div style={{ display: "flex ", height: '100vh', overflow: 'hidde' }}>
                <div className="heroLeft" style={{ position: 'fixe', backgroundColor: 'black', left: '0', width: '60%', padding: '0.3rem', marginTop: '4rem' }}>
                    <LHome totalFailure={totalFailure} randomFailure={randomFailure} toolWearFailure={toolWearFailure} powerFailure={powerFailure} overStrainFailure={overStrainFailure} heatFailure={heatFailure} totalNonFailure={totalNonFailure} airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque} />
                </div>
                <div className="heroRight" style={{ position: 'absolut', backgroundColor: 'black', right: '0', width: '40%', padding: '0.3rem', marginTop: '4rem' }}>
                    <RHome currData={currData} predResults={predResults} />
                </div>
            </div> 
            {detailState1 && <Details1 airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque}/>}
            {detailState2 && <Details2 airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque}/>}
        </div>
    );
};

export default Home;

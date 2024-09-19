import React from 'react'
import Sidebar from './SideBar'
import AirvsOthers from './AirvsOthers'

const Details2 = (props) => {
  const { airTemp, processTemp, rotationalSpeed, torque, toolWear, toggleSidebar } = props;
  return (
    <>
      <div className="core" style={{display:'flex'}}>
        <div className="first">
          <Sidebar isOpen={true} closeSidebar={toggleSidebar} />
        </div>
        <div className="second" style={{marginTop:'4rem'}}>
          <AirvsOthers airTemp={airTemp} processTemp={processTemp} toolWear={toolWear} rotationalSpeed={rotationalSpeed} torque={torque} />
        </div>
      </div>


    </>
  )
}

export default Details2

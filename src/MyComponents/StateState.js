import React,{useState} from 'react'
import StateContext from './StateContext'

const StateState = (props) => {
    const [detailState1,setDetailState1] = useState(false);
    const [detailState2,setDetailState2] = useState(false);
    const [detailState3,setDetailState3] = useState(false);
    const [detailState4,setDetailState4] = useState(false);
    const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div>
      <StateContext.Provider value={{sideBarOpen, setSideBarOpen,detailState1,setDetailState1,detailState2,setDetailState2,detailState3,setDetailState3,detailState4,setDetailState4}}>
        {props.children}
      </StateContext.Provider>
    </div>
  )
}

export default StateState




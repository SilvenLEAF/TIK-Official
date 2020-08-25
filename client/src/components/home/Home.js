import M from 'materialize-css'
import '../../styles/Home.scss'

import React, { useEffect } from 'react'

import BasicButtons from './BasicButtons';
import ControlPanelButtons from './ControlPanelButtons';

function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="myHomeContainer" className="container">        
      <div id="myHomeBtnsHolder">
        <div>
          <BasicButtons />
        </div>
        
        <div>
          <ControlPanelButtons/>
        </div>
        
      </div>
    
    </div>
  )
}

export default Home

import M from 'materialize-css'
import '../../styles/Home.scss'

import React, { useEffect, useContext } from 'react'

import BasicButtons from './BasicButtons';
import ControlPanelButtons from './ControlPanelButtons';
import { useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext'
  

function Home() {
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()

  useEffect(()=>{
    M.AutoInit();
  }, [])


  if(!userData._id) history.push('/login')
  
  return (
    <div id="myHomeContainer">        
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

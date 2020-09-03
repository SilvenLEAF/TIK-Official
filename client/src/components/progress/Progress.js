import M from 'materialize-css'
import '../../styles/Progress.scss'

import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext'
import LanguageProgress from './LanguageProgress';
import CodingActivity from './CodingActivity';
  

function Progress() {
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()

  useEffect(()=>{
    M.AutoInit();
  }, [])


  if(!userData._id) history.push('/login')
  
  return (
    <div id="progressPage">        
      <h3>Progress</h3>

      <div id="myLanguagProgresseHolder">
        <LanguageProgress/>        
      </div>

      <div id="myCodingProgresseHolder">
        <h4>Coding Activity</h4>
        <CodingActivity/>
      </div>


    </div>
  )
}

export default Progress

import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import EntertainmentCodeItem from '../entertainment/EntertainmentCodeItem';

function Entertainment() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="solverPage" className="container">
      
      <Link to="/addEntertainment" className="blue fa fa-plus myAddBtn"></Link>

      <div id="solverItemsHolder">
        <EntertainmentCodeItem/> 
        <EntertainmentCodeItem/> 
        <EntertainmentCodeItem/> 
        <EntertainmentCodeItem/> 
        <EntertainmentCodeItem/> 
      </div>

    </div>
  )
}

export default Entertainment

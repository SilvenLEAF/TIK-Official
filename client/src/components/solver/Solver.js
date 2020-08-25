import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import BugCodeItem from '../solver/BugCodeItem';

function Solver() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="solverPage" className="container">
      
      <Link to="/addBug" className="blue fa fa-plus myAddBtn"></Link>

      <div id="solverItemsHolder">
        <BugCodeItem/>
        <BugCodeItem/>
        <BugCodeItem/>
        <BugCodeItem/>
        <BugCodeItem/>
      </div>

    </div>
  )
}

export default Solver

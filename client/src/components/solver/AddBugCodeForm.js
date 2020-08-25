import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect } from 'react'
import CodeItem from '../GLOBAL/CodeItem';

function Solver() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="addBugCodesPage" className="container">
      <h1>hI!</h1>

    </div>
  )
}

export default Solver

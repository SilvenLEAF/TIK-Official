import M from 'materialize-css'

import React, { useEffect } from 'react'

function Solver() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h1>Solver Page!!</h1>
    </div>
  )
}

export default Solver

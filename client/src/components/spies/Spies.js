import M from 'materialize-css'

import React, { useEffect } from 'react'

function Spies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h1>Spies Page!!</h1>
    </div>
  )
}

export default Spies

import M from 'materialize-css'

import React, { useEffect } from 'react'

function Team() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h1>Team Page!!</h1>
    </div>
  )
}

export default Team

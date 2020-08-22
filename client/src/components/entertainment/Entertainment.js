import M from 'materialize-css'

import React, { useEffect } from 'react'

function Entertainment() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h3>Entertainment!!</h3>
    </div>
  )
}

export default Entertainment

import M from 'materialize-css'

import React, { useEffect } from 'react'

function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h1>Profile Page!!</h1>
    </div>
  )
}

export default Profile

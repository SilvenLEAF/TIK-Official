import M from 'materialize-css'

import React, { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <h1>Hello World!!</h1>
    </div>
  )
}

export default Home

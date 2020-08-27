import M from 'materialize-css'

import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext'

function Team() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
  
  if(!userData._id) history.push('/login')

  return (
    <div className="container">
      <h1>Team Page!!</h1>
    </div>
  )
}

export default Team

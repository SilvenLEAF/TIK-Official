import M from 'materialize-css'

import React, { useEffect, useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom';

function Spies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
 
  if(!userData._id) history.push('/login')

  return (
    <div className="container">
      <h1>Spies Page!!</h1>
    </div>
  )
}

export default Spies

import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'



import { AuthContext } from '../../contexts/AuthContext'
import { EntertainmentContext } from '../../contexts/EntertainmentContext'


import EntertainmentCodeItem from '../entertainment/EntertainmentCodeItem';

function Entertainment() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const { entertainmentPosts, setEntertainmentPosts } = useContext(EntertainmentContext);
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()

  if(!userData._id) history.push('/login')

  return (
    <div id="solverPage" className="container">
      <h6 className="blue-text">Entertainment</h6>
      <Link to="/addEntertainment" className="blue fa fa-plus myAddBtn"></Link>

      <div id="myEntertainmentItemsHolder">
        {
          entertainmentPosts[0] && entertainmentPosts.map((item, index)=>{
            return <EntertainmentCodeItem setEntertainmentPosts={ setEntertainmentPosts } allPosts={ entertainmentPosts} entertainmentPost={item} index={index} key={index} />
          })
        }
      </div>

    </div>
  )
}

export default Entertainment

import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { BugContext } from '../../contexts/BugContext'
import { AuthContext } from '../../contexts/AuthContext'


import BugCodeItem from '../solver/BugCodeItem';

function Solver() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { userData, setUserData } = useContext(AuthContext)
  const { bugPosts, setBugPosts } = useContext(BugContext);
  const history = useHistory()

  if(!userData._id) history.push('/login')
  
  return (
    <div id="solverPage" className="container">
      <h6 className="blue-text">Bug Forest</h6>
      
      {
        ( userData.role !== 'ceo' && userData.role !== 'cto' ) && (
          <Link to="/addBug" className="blue fa fa-plus myAddBtn"></Link>
        )
      }

      <div id="mySolverItemsHolder">
        {
          bugPosts[0] && bugPosts.map((item, index)=>{
            return <BugCodeItem setBugPosts={ setBugPosts } allPosts={ bugPosts} bugPost={item} index={index} key={index} />
          })
        }
      </div>

    </div>
  )
}

export default Solver

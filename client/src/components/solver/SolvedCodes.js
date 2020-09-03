import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { BugContext } from '../../contexts/BugContext'
import { AuthContext } from '../../contexts/AuthContext'


import BugCodeItem from '../solver/BugCodeItem';

function SolvedCodes() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { userData, setUserData } = useContext(AuthContext)
  const { bugPosts, setBugPosts } = useContext(BugContext);
  const history = useHistory()

  if(!userData._id) history.push('/login')
  
  return (
    <div className="solverPage container">
      <h6 className="blue-text">Solved Bugs HERE</h6>
      
      <div className="container mySwitchContainer">
        <Link to="/solver" className="mySolverPageSwitch"><i className="fa fa-bug"></i> See Pending</Link>
      </div>
      
      <div className="mySolverItemsHolder">

        {
          bugPosts[0] && bugPosts.filter((item, index)=> item.solved).map((item, index)=>{
            return <BugCodeItem setBugPosts={ setBugPosts } allPosts={ bugPosts} bugPost={item} index={index} key={index} />
          })
        }

        {
          !bugPosts.filter((item, index)=> item.solved)[0] && (
            <div className="center purple-text" style={{marginTop: "50px", fontSize: "150%" }} >
              Nothing solved yet! O God!!
            </div>
          )
        }
      </div>

    </div>
  )
}

export default SolvedCodes

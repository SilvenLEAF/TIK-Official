import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { BugContext } from '../../contexts/BugContext'


import BugCodeItem from '../solver/BugCodeItem';

function Solver() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { bugPosts, setBugPosts } = useContext(BugContext);
  
  return (
    <div id="solverPage" className="container">
      
      <Link to="/addBug" className="blue fa fa-plus myAddBtn"></Link>

      <div id="mySolverItemsHolder">
        {
          bugPosts && bugPosts.map((item, index)=>{
            return <BugCodeItem setBugPosts={ setBugPosts } allPosts={ bugPosts} bugPost={item} index={index} key={index} />
          })
        }
      </div>

    </div>
  )
}

export default Solver

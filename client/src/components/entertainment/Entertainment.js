import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'



import { EntertainmentContext } from '../../contexts/EntertainmentContext'


import EntertainmentCodeItem from '../entertainment/EntertainmentCodeItem';

function Entertainment() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const { entertainmentPosts, setEntertainmentPosts } = useContext(EntertainmentContext);

  return (
    <div id="solverPage" className="container">
      
      <Link to="/addEntertainment" className="blue fa fa-plus myAddBtn"></Link>

      <div id="myEntertainmentItemsHolder">
        {
          entertainmentPosts && entertainmentPosts.map((item, index)=>{
            return <EntertainmentCodeItem setEntertainmentPosts={ setEntertainmentPosts } allPosts={ entertainmentPosts} entertainmentPost={item} index={index} key={index} />
          })
        }
      </div>

    </div>
  )
}

export default Entertainment

import M from 'materialize-css'
import '../../styles/Profile.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="myProfileContainer" className="container">      
      <div id="mainProfileIcon"></div>

      <h3>SilvenLEAF</h3>
      <h5>Fullstack Developer</h5>


      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus minima perspiciatis deserunt sapiente dolorem at hic accusamus iure totam iste dolore natus perferendis maiores, asperiores, quaerat nam nobis, minus fugit? Animi eligendi nesciunt earum facilis ipsum, atque aspernatur. Architecto cupiditate impedit eveniet cum expedita dolor facere inventore officia quam.
      </p>


      <div className="right myProfileBtnsHolder">
        <Link to="/" className="btn blue" style={{marginRight: "20px"}}>Update</Link>
        <Link to="/" className="btn red darken-4">Delete</Link>
      </div>
    </div>
  )
}

export default Profile

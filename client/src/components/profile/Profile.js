import M from 'materialize-css'
import '../../styles/Profile.scss'

import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

function Profile({ userData }) {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  const profileImage = userData.profileImage;
  const history = useHistory();

  
  return (
    <div id="myProfileContainer" className="container">      
      <div id="mainProfileIcon" style={{background: `url(${profileImage}) center/cover`}}></div>

      <h3>{ userData.userName && userData.userName }</h3>
      <h5>Fullstack Developer</h5>
      <p className="red-text"> { userData.location && userData.location } </p>


      <p>
        { userData.about && userData.about }
      </p>


      <div className="right myProfileBtnsHolder">
        <Link to="/" className="btn blue" style={{marginRight: "20px"}}>Update</Link>
        <Link to="/" className="btn red darken-4">Delete</Link>
      </div>
    </div>
  )
}

export default Profile

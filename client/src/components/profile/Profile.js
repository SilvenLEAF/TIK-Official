import M from 'materialize-css'
import '../../styles/Profile.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext';




function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const profileImage =  userData && userData.profileImage ? userData.profileImage : "/images/userIcons/userMale.jpg";
  const history = useHistory();

  
  if(!userData._id) history.push('/login')

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
